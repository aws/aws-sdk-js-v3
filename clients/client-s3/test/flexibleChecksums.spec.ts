/// <reference types="mocha" />
import { ChecksumAlgorithm } from "@aws-sdk/middleware-flexible-checksums";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { FinalizeRequestMiddleware } from "@aws-sdk/types";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

import { S3 } from "../src/S3";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("Flexible Checksums", () => {
  describe("putObject", () => {
    [
      ["", ChecksumAlgorithm.CRC32, "AAAAAA=="],
      ["abc", ChecksumAlgorithm.CRC32, "NSRBwg=="],
      ["Hello world", ChecksumAlgorithm.CRC32, "i9aeUg=="],

      ["", ChecksumAlgorithm.CRC32C, "AAAAAA=="],
      ["abc", ChecksumAlgorithm.CRC32C, "Nks/tw=="],
      ["Hello world", ChecksumAlgorithm.CRC32C, "crUfeA=="],

      ["", ChecksumAlgorithm.SHA1, "2jmj7l5rSw0yVb/vlWAYkK/YBwk="],
      ["abc", ChecksumAlgorithm.SHA1, "qZk+NkcGgWq6PiVxeFDCbJzQ2J0="],
      ["Hello world", ChecksumAlgorithm.SHA1, "e1AsOh9IyGCa4hLN+2Od7jlnP14="],

      ["", ChecksumAlgorithm.SHA256, "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU="],
      ["abc", ChecksumAlgorithm.SHA256, "ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0="],
      ["Hello world", ChecksumAlgorithm.SHA256, "ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuyjfzw="],
    ].forEach(([body, checksumAlgorithm, checksumValue]) => {
      const checksumHeader = `x-amz-checksum-${checksumAlgorithm.toLowerCase()}`;

      it(`sets ${checksumHeader}="${checksumValue}"" for checksum="${checksumAlgorithm}"`, async () => {
        const checksumValidator: FinalizeRequestMiddleware<any, any> = (next) => (args) => {
          // middleware intercept the request and return it early
          const request = args.request as HttpRequest;
          const { headers } = request;
          expect(headers["x-amz-sdk-checksum-algorithm"]).to.equal(checksumAlgorithm);
          expect(headers[checksumHeader]).to.equal(checksumValue);
          return Promise.resolve({ output: {} as any, response: {} as any });
        };

        const client = new S3({});
        client.middlewareStack.addRelativeTo(checksumValidator, {
          relation: "after",
          toMiddleware: "flexibleChecksumsMiddleware",
        });

        return await client.putObject({
          Bucket: "bucket",
          Key: "key",
          Body: body,
          ChecksumAlgorithm: checksumAlgorithm,
        });
      });
    });
  });
});
