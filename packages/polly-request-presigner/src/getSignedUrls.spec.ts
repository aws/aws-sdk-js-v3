import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { RequestPresigningArguments } from "@aws-sdk/types";
import { formatUrl } from "@aws-sdk/util-format-url";

import { getSignedUrl } from "./getSignedUrls";

jest.mock("@aws-sdk/signature-v4");
jest.mock("@aws-sdk/util-format-url");

describe("getSignedUrl", () => {
  const clientParams = { region: "us-foo-1" };
  const mockV4Sign = jest.fn();
  const mockPresign = jest.fn();

  beforeEach(() => {
    (SignatureV4 as jest.Mock).mockReturnValue({
      presign: mockPresign,
      sign: mockV4Sign,
    });
    (formatUrl as jest.Mock).mockImplementation((url: any) => url);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should call SignatureV4.sign", async () => {
    const mockPresigned = "a presigned url";
    mockPresign.mockReturnValue(mockPresigned);
    const client = new PollyClient(clientParams);
    const command = new SynthesizeSpeechCommand({
      Text: "hello world, this is alex",
      OutputFormat: "mp3",
      VoiceId: "Kimberly",
    });
    const signed = await getSignedUrl(client, command);
    expect(signed).toBe(mockPresigned);
    expect(mockPresign).toBeCalled();
    expect(mockV4Sign).not.toBeCalled();
    expect(client.middlewareStack.remove("presignInterceptMiddleware")).toBe(false);
    expect(command.middlewareStack.remove("presignInterceptMiddleware")).toBe(false);
  });

  it("should presign with signing region and service in context if exists", async () => {
    const mockPresigned = "a presigned url";
    mockPresign.mockReturnValue(mockPresigned);
    const signingRegion = "aws-foo-1";
    const signingService = "bar";
    const client = new PollyClient(clientParams);
    client.middlewareStack.addRelativeTo(
      (next: any, context: any) => (args: any) => {
        context["signing_region"] = signingRegion;
        context["signing_service"] = signingService;
        return next(args);
      },
      {
        relation: "before",
        toMiddleware: "presignInterceptMiddleware",
      }
    );
    const command = new SynthesizeSpeechCommand({
      Text: "hello world, this is alex",
      OutputFormat: "mp3",
      VoiceId: "Kimberly",
    });
    await getSignedUrl(client, command);
    expect(mockPresign).toBeCalled();
    expect(mockPresign.mock.calls[0][1]).toMatchObject({
      signingRegion,
      signingService,
    });
  });

  it("should presign with parameters from presign options if set", async () => {
    const mockPresigned = "a presigned url";
    mockPresign.mockReturnValue(mockPresigned);
    const options: RequestPresigningArguments = {
      signingRegion: "aws-foo-1",
      signingService: "bar",
      expiresIn: 900,
      signingDate: new Date(),
      signableHeaders: new Set(["head-1", "head-2"]),
      unsignableHeaders: new Set(["head-3", "head-4"]),
    };
    const client = new PollyClient(clientParams);
    const command = new SynthesizeSpeechCommand({
      Text: "hello world, this is alex",
      OutputFormat: "mp3",
      VoiceId: "Kimberly",
    });
    await getSignedUrl(client, command, options);
    expect(mockPresign).toBeCalled();
    expect(mockPresign.mock.calls[0][1]).toMatchObject(options);
  });
});
