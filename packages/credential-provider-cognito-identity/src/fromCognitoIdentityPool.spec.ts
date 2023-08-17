import { GetIdCommand } from "@aws-sdk/client-cognito-identity";
import { CredentialsProviderError } from "@smithy/property-provider";

import { fromCognitoIdentityPool } from "./fromCognitoIdentityPool";

jest.mock("./fromCognitoIdentity", () => {
  const promiseFunc = jest.fn().mockResolvedValue({
    accessKeyId: "foo",
    secretAccessKey: "bar",
    sessionToken: "baz",
  });
  return { fromCognitoIdentity: jest.fn().mockReturnValue(promiseFunc) };
});
import { fromCognitoIdentity } from "./fromCognitoIdentity";

jest.mock("./localStorage", () => {
  return {
    localStorage() {
      return {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
      };
    },
  };
});
import { InMemoryStorage } from "./InMemoryStorage";
import { localStorage } from "./localStorage";

describe("fromCognitoIdentityPool", () => {
  const identityPoolId = "poolId";
  const identityId = "id";
  const send = jest.fn().mockResolvedValue({ IdentityId: identityId });
  const mockClient: any = { send };

  beforeEach(() => {
    send.mockClear();
    (fromCognitoIdentity({} as any) as any).mockClear();
    (fromCognitoIdentity as any).mockClear();
    (localStorage().getItem as any).mockClear();
    (localStorage().setItem as any).mockClear();
    (localStorage().removeItem as any).mockClear();
  });

  it("should execute a GetId command and then invoke fromCognitoIdentity with the result", async () => {
    expect(
      await fromCognitoIdentityPool({
        client: mockClient,
        identityPoolId,
        customRoleArn: "myArn",
      })()
    ).toEqual({
      accessKeyId: "foo",
      secretAccessKey: "bar",
      sessionToken: "baz",
    });

    expect(send.mock.calls.length).toBe(1);
    expect(send.mock.calls[0][0]).toEqual(expect.any(GetIdCommand));
    expect(send.mock.calls[0][0].input).toEqual({
      IdentityPoolId: identityPoolId,
    });

    expect((fromCognitoIdentity as any).mock.calls.length).toBe(1);
    expect((fromCognitoIdentity as any).mock.calls[0][0]).toEqual({
      client: mockClient,
      customRoleArn: "myArn",
      identityId,
    });
  });

  it("should resolve logins to string tokens and pass them to the service", async () => {
    await fromCognitoIdentityPool({
      client: mockClient,
      identityPoolId,
      logins: {
        myDomain: "token",
        "www.amazon.com": () => Promise.resolve("expiring nonce"),
      },
    })();

    expect(send.mock.calls[0][0]).toEqual(expect.any(GetIdCommand));
    expect(send.mock.calls[0][0].input).toEqual({
      IdentityPoolId: identityPoolId,
      Logins: {
        myDomain: "token",
        "www.amazon.com": "expiring nonce",
      },
    });
  });

  it("should not invoke GetId a second time once an identityID has been fetched", async () => {
    const provider = fromCognitoIdentityPool({
      client: mockClient,
      identityPoolId,
      customRoleArn: "myArn",
    });

    await provider();

    // One GetId command should have been executed, followed by an
    // invocation of fromCognitoIdentity
    expect(send.mock.calls.length).toBe(1);
    expect((fromCognitoIdentity as any).mock.calls.length).toBe(1);
    expect((fromCognitoIdentity({} as any) as any).mock.calls.length).toBe(1);

    for (let i = 0; i < 10; i++) {
      expect(await provider()).toEqual({
        accessKeyId: "foo",
        secretAccessKey: "bar",
        sessionToken: "baz",
      });
    }

    // GetId should not have been called again, but each call of the
    // provider should invoke fromCognitoIdentity
    expect(send.mock.calls.length).toBe(1);
    expect((fromCognitoIdentity({} as any) as any).mock.calls.length).toBe(11);
  });

  it("should convert a GetId response without an ID to a provider error", async () => {
    send.mockImplementationOnce(() => Promise.resolve({}));

    await expect(
      fromCognitoIdentityPool({
        accountId: "myAccountId",
        client: mockClient,
        identityPoolId,
      })()
    ).rejects.toMatchObject(new CredentialsProviderError("Response from Amazon Cognito contained no identity ID"));
  });

  it("should allow injecting a custom cache", async () => {
    const cache = new InMemoryStorage();

    await fromCognitoIdentityPool({
      client: mockClient,
      identityPoolId,
      cache,
    })();

    expect(cache.getItem(`aws:cognito-identity-credentials:${identityPoolId}:ANONYMOUS`)).toBe(identityId);
  });

  it("should not call `GetId` if the IdentityId is in cache", async () => {
    const cache = new InMemoryStorage({
      [`aws:cognito-identity-credentials:${identityPoolId}:ANONYMOUS`]: identityId,
    });

    await fromCognitoIdentityPool({
      client: mockClient,
      identityPoolId,
      cache,
    })();

    expect(send.mock.calls.length).toBe(0);

    expect((fromCognitoIdentity as any).mock.calls.length).toBe(1);
    expect((fromCognitoIdentity as any).mock.calls[0][0]).toEqual({
      client: mockClient,
      identityId,
    });
  });

  it("should remove the entry from cache if an error is encountered", async () => {
    const cacheKey = `aws:cognito-identity-credentials:${identityPoolId}:ANONYMOUS`;
    const cache = new InMemoryStorage({
      [cacheKey]: identityId,
    });
    (fromCognitoIdentity({} as any) as any).mockImplementationOnce(() => Promise.reject(new Error("PANIC")));

    await expect(
      fromCognitoIdentityPool({
        client: mockClient,
        identityPoolId,
        cache,
      })()
    ).rejects.toMatchObject(new Error("PANIC"));

    expect(cache.getItem(cacheKey)).toBe(null);
  });

  it("should not consult the cache if logins are provided without a separate identifier", async () => {
    await fromCognitoIdentityPool({
      client: mockClient,
      identityPoolId,
      logins: {
        "www.amazon.com": "token",
      },
    })();

    expect((localStorage().getItem as any).mock.calls.length).toBe(0);
  });

  it("should not attempt to remove the entry from cache when an error is encountered if logins are provided without a separate identifier", async () => {
    (fromCognitoIdentity({} as any) as any).mockImplementationOnce(() => Promise.reject(new Error("PANIC")));

    await expect(
      fromCognitoIdentityPool({
        client: mockClient,
        identityPoolId,
        logins: {
          "www.amazon.com": "token",
        },
      })()
    ).rejects.toMatchObject(new Error("PANIC"));

    expect((localStorage().removeItem as any).mock.calls.length).toBe(0);
  });
});
