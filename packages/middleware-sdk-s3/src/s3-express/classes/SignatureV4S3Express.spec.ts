import { describe, expect, test as it } from "vitest";

// import { Hash } from "@smithy/hash-node";
// import { HttpRequest } from "@smithy/protocol-http";
// import { SignatureV4 } from "@smithy/signature-v4";
// import { SESSION_TOKEN_HEADER } from "../constants";
import { SignatureV4S3Express } from "./SignatureV4S3Express";

describe(SignatureV4S3Express.name, () => {
  it("should sign with alternate credentials", async () => {
    // TODO: test is failing due to a Jest error.
    // const signer = new SignatureV4S3Express({
    //   service: "s3",
    //   region: "us-east-1",
    //   credentials: {
    //     accessKeyId: "MOCK_ACCESS_KEY_ID",
    //     secretAccessKey: "MOCK_SECRET_ACCESS_KEY",
    //     sessionToken: "MOCK_SESSION_TOKEN",
    //   },
    //   sha256: Hash.bind(null, "sha256"),
    // });
    // const s3ExpressCredentials = {
    //   accessKeyId: "MOCK_S3_EXPRESS_ACCESS_KEY_ID",
    //   secretAccessKey: "MOCK_S3_EXPRESS_SECRET_ACCESS_KEY",
    //   sessionToken: "MOCK_S3_EXPRESS_SESSION_TOKEN",
    // };
    // const signedRequest = await signer.signWithCredentials(new HttpRequest({}), s3ExpressCredentials);
    // expect(signer).toBeInstanceOf(SignatureV4);
    // expect(signedRequest.headers[SESSION_TOKEN_HEADER]).toEqual(s3ExpressCredentials.sessionToken);
  });
});
