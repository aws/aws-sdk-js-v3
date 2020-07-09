import {
  ENV_CMDS_AUTH_TOKEN,
  ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI,
  fromContainerMetadata
} from "./fromContainerMetadata";
import { httpRequest } from "./remoteProvider/httpRequest";
import {
  fromImdsCredentials,
  ImdsCredentials
} from "./remoteProvider/ImdsCredentials";

const mockHttpRequest = <any>httpRequest;
jest.mock("./remoteProvider/httpRequest", () => ({ httpRequest: jest.fn() }));

const relativeUri = process.env[ENV_CMDS_RELATIVE_URI];
const fullUri = process.env[ENV_CMDS_FULL_URI];
const authToken = process.env[ENV_CMDS_AUTH_TOKEN];

beforeEach(() => {
  mockHttpRequest.mockReset();
  delete process.env[ENV_CMDS_RELATIVE_URI];
  delete process.env[ENV_CMDS_FULL_URI];
  delete process.env[ENV_CMDS_AUTH_TOKEN];
});

afterAll(() => {
  process.env[ENV_CMDS_RELATIVE_URI] = relativeUri;
  process.env[ENV_CMDS_FULL_URI] = fullUri;
  process.env[ENV_CMDS_AUTH_TOKEN] = authToken;
});

describe("fromContainerMetadata", () => {
  const creds: ImdsCredentials = Object.freeze({
    AccessKeyId: "foo",
    SecretAccessKey: "bar",
    Token: "baz",
    Expiration: new Date().toISOString()
  });

  it("should reject the promise with a terminal error if the container credentials environment variable is not set", async () => {
    await fromContainerMetadata()().then(
      () => {
        throw new Error("The promise should have been rejected");
      },
      err => {
        expect((err as any).tryNextLink).toBeFalsy();
      }
    );
  });

  it(`should inject an authorization header containing the contents of the ${ENV_CMDS_AUTH_TOKEN} environment variable if defined`, async () => {
    const token = "Basic abcd";
    process.env[ENV_CMDS_FULL_URI] = "http://localhost:8080/path";
    process.env[ENV_CMDS_AUTH_TOKEN] = token;
    mockHttpRequest.mockReturnValue(Promise.resolve(JSON.stringify(creds)));

    await fromContainerMetadata()();

    expect(mockHttpRequest.mock.calls.length).toBe(1);
    const [options = {}] = mockHttpRequest.mock.calls[0];
    expect(options.headers).toMatchObject({
      Authorization: token
    });
  });

  describe(ENV_CMDS_RELATIVE_URI, () => {
    beforeEach(() => {
      process.env[ENV_CMDS_RELATIVE_URI] = "/relative/uri";
    });

    it("should resolve credentials by fetching them from the container metadata service", async () => {
      mockHttpRequest.mockReturnValue(Promise.resolve(JSON.stringify(creds)));

      expect(await fromContainerMetadata()()).toEqual(
        fromImdsCredentials(creds)
      );
    });

    it("should retry the fetching operation up to maxRetries times", async () => {
      const maxRetries = 5;
      for (let i = 0; i < maxRetries - 1; i++) {
        mockHttpRequest.mockReturnValueOnce(Promise.reject("No!"));
      }
      mockHttpRequest.mockReturnValueOnce(
        Promise.resolve(JSON.stringify(creds))
      );

      expect(await fromContainerMetadata({ maxRetries })()).toEqual(
        fromImdsCredentials(creds)
      );
      expect(mockHttpRequest.mock.calls.length).toEqual(maxRetries);
    });

    it("should retry responses that receive invalid response values", async () => {
      for (let key of Object.keys(creds)) {
        const invalidCreds: any = { ...creds };
        delete invalidCreds[key];
        mockHttpRequest.mockReturnValueOnce(
          Promise.resolve(JSON.stringify(invalidCreds))
        );
      }
      mockHttpRequest.mockReturnValueOnce(
        Promise.resolve(JSON.stringify(creds))
      );

      await fromContainerMetadata({ maxRetries: 100 })();
      expect(mockHttpRequest.mock.calls.length).toEqual(
        Object.keys(creds).length + 1
      );
    });

    it("should pass relevant configuration to httpRequest", async () => {
      const timeout = Math.ceil(Math.random() * 1000);
      mockHttpRequest.mockReturnValue(Promise.resolve(JSON.stringify(creds)));
      await fromContainerMetadata({ timeout })();
      expect(mockHttpRequest.mock.calls.length).toEqual(1);
      expect(mockHttpRequest.mock.calls[0][0]).toEqual({
        hostname: "169.254.170.2",
        path: process.env[ENV_CMDS_RELATIVE_URI],
        timeout
      });
    });
  });

  describe(ENV_CMDS_FULL_URI, () => {
    it("should pass relevant configuration to httpRequest", async () => {
      process.env[ENV_CMDS_FULL_URI] = "http://localhost:8080/path";

      const timeout = Math.ceil(Math.random() * 1000);
      mockHttpRequest.mockReturnValue(Promise.resolve(JSON.stringify(creds)));
      await fromContainerMetadata({ timeout })();
      expect(mockHttpRequest.mock.calls.length).toEqual(1);
      const {
        protocol,
        hostname,
        path,
        port,
        timeout: actualTimeout
      } = mockHttpRequest.mock.calls[0][0];
      expect(protocol).toBe("http:");
      expect(hostname).toBe("localhost");
      expect(path).toBe("/path");
      expect(port).toBe(8080);
      expect(actualTimeout).toBe(timeout);
    });

    it(`should prefer ${ENV_CMDS_RELATIVE_URI} to ${ENV_CMDS_FULL_URI}`, async () => {
      process.env[ENV_CMDS_RELATIVE_URI] = "foo";
      process.env[ENV_CMDS_FULL_URI] = "http://localhost:8080/path";

      const timeout = Math.ceil(Math.random() * 1000);
      mockHttpRequest.mockReturnValue(Promise.resolve(JSON.stringify(creds)));
      await fromContainerMetadata({ timeout })();
      expect(mockHttpRequest.mock.calls.length).toEqual(1);
      expect(mockHttpRequest.mock.calls[0][0]).toEqual({
        hostname: "169.254.170.2",
        path: "foo",
        timeout
      });
    });

    it("should reject the promise with a terminal error if a unexpected protocol is specified", async () => {
      process.env[ENV_CMDS_FULL_URI] = "wss://localhost:8080/path";

      await fromContainerMetadata()().then(
        () => {
          throw new Error("The promise should have been rejected");
        },
        err => {
          expect((err as any).tryNextLink).toBeFalsy();
        }
      );
    });

    it("should reject the promise with a terminal error if a unexpected hostname is specified", async () => {
      process.env[ENV_CMDS_FULL_URI] = "https://bucket.s3.amazonaws.com/key";

      await fromContainerMetadata()().then(
        () => {
          throw new Error("The promise should have been rejected");
        },
        err => {
          expect((err as any).tryNextLink).toBeFalsy();
        }
      );
    });
  });
});
