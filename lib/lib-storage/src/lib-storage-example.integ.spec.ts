import { getE2eTestResources, requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { S3 } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { getHttpDebugLogPlugin } from "@aws-sdk/middleware-http-debug-log/src";
import { HttpResponse } from "@smithy/protocol-http";
import { randomBytes } from "crypto";
import { Readable } from "node:stream";
import { describe, expect, test as it } from "vitest";

describe("lib storage integration test", () => {
  const example = async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    const region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    const Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;
    const data = randomBytes(6 * 1024 * 1024);

    const s3 = new S3({
      region,
    });
    const Key = `MPU-${Date.now()}`;

    const client = new S3({
      region,
    });
    // This will print out all requests and responses so you can use
    // them in an integration mock later.
    client.middlewareStack.use(
      getHttpDebugLogPlugin({
        request: {
          url: true,
          command: true,
          method: true,
        },
        response: {
          statusCode: true,
          headers: true,
          body: true,
          formatBody: true,
        },
      })
    );

    await new Upload({
      client,
      params: {
        Bucket,
        Key,
        Body: data,
      },
    }).done();

    await s3.deleteObject({
      Bucket,
      Key,
    });
  };

  it("example of how to write an integration test that includes responses", async () => {
    const client = new S3({
      region: "us-west-2",
      credentials: {
        accessKeyId: "INTEG",
        secretAccessKey: "INTEG",
      },
    });

    const commandOutputs: Record<string, any[]> = {};

    client.middlewareStack.add((next, context) => async (args) => {
      const r = await next(args);
      commandOutputs[context.commandName!] = commandOutputs[context.commandName!] ?? [];
      commandOutputs[context.commandName!].push(r.output);
      return r;
    });

    requireRequestsFrom(client)
      .toMatch({
        hostname: /amazon/,
      })
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {
            "x-amz-id-2":
              "bKbXrk1IXbqfupvsn8gGtkGi33Nszcq9iwiah4xGeydCedkuKWeht6xnBkn0sCBhVDyDs0Xa4ecdbnxtyzMGqc17Cv6Se7P8",
            "x-amz-request-id": "MC075MYM6KAT5AQE",
            date: "Fri, 26 Sep 2025 17:27:23 GMT",
            "x-amz-server-side-encryption": "AES256",
            "x-amz-checksum-algorithm": "CRC32",
            "x-amz-checksum-type": "COMPOSITE",
            "transfer-encoding": "chunked",
            server: "AmazonS3",
          },
          body: Readable.from(
            Buffer.from(
              `<?xml version="1.0" encoding="UTF-8"?>
    <InitiateMultipartUploadResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
        <Bucket>
          sdkreleasev3integtestreso-integtestbucketa93771ae-zh5lrv1xnwjx
        </Bucket>
        <Key>
          MPU-1758907641953
        </Key>
        <UploadId>
          FPyQ2V.AnlVZcN3GUqieu5Ael9CllYWycVH0slQyiS9wYjDeUKS0okoMm.jbbbmMbNln.K8HtPzbwjCChgCUH9B94b6MyrD72_auD23tEpXhmel40UtdL.7w_RiNAc1xkyr8ooIKRsGyDE9J.WIH0Q--
        </UploadId>
      </InitiateMultipartUploadResult>`
            )
          ),
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {
            "x-amz-id-2":
              "1ezf9iJF3YvPWo3SF2UCrgFGBXltd25g9bHUA9W4k58PJ/W03OZ13nIOEmGE+NCRCbmuERJ4lvML5zGQU0JCw44sOelC9sRb",
            "x-amz-request-id": "MC01ZVGGQ8Z7950C",
            date: "Fri, 26 Sep 2025 17:27:23 GMT",
            etag: '"eb3760d36bc660b509833238c0799b58"',
            "x-amz-checksum-crc32": "Ikyd7A==",
            "x-amz-server-side-encryption": "AES256",
            "content-length": "0",
            server: "AmazonS3",
          },
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {
            "x-amz-id-2": "JwgQ5LZ9Sx3fj6G46KOjfx7HI2XvK18Nx6iCOQPH+/UFjbFPju3hlZ7Gq8BIW6g2IiyI8cM3v1LPh+Me8KmCZQ==",
            "x-amz-request-id": "MC0DH0R666ESRWE3",
            date: "Fri, 26 Sep 2025 17:27:23 GMT",
            etag: '"76d0701ab8175448d01476321416bf01"',
            "x-amz-checksum-crc32": "JTOG+w==",
            "x-amz-server-side-encryption": "AES256",
            "content-length": "0",
            server: "AmazonS3",
          },
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {
            "x-amz-id-2": "0G3bPmuvsW9FMp4OCpbRUxtldh81E3PxbvhUuXsCtasMMpYVfKlxvYkWD9wekOxD/C0xay5ttt/d7MXxz79JBw==",
            "x-amz-request-id": "HY3KQKTR6ZKMGZ6E",
            date: "Fri, 26 Sep 2025 17:27:24 GMT",
            "x-amz-version-id": "PVmXZ_B1Qs3bTot7SY6w_.aiH3TpVbQ6",
            "x-amz-server-side-encryption": "AES256",
            "content-type": "application/xml",
            "transfer-encoding": "chunked",
            server: "AmazonS3",
          },
          body: Readable.from(
            Buffer.from(
              `<?xml version="1.0" encoding="UTF-8"?>
    <CompleteMultipartUploadResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
        <Location>
          https://bucket.s3.us-west-2.amazonaws.com/MPU-1758907641953
        </Location>
        <Bucket>
          bucket
        </Bucket>
        <Key>
          MPU-1758907641953
        </Key>
        <ETag>
          "e4cd0558ba33b2b33aa64f158deae527-2"
        </ETag>
        <ChecksumCRC32>
          53GakA==-2
        </ChecksumCRC32>
        <ChecksumType>
          COMPOSITE
        </ChecksumType>
      </CompleteMultipartUploadResult>`
            )
          ),
        })
      );

    const uploadOutput = await new Upload({
      client,
      params: {
        Bucket: "bucket",
        Key: "key",
        Body: randomBytes(6 * 1024 * 1024),
      },
    }).done();

    /**
     * (Because the XML was given without trimming).
     */
    function trimObject(item: any): any {
      if (typeof item === "string") {
        return item.trim();
      }
      if (Array.isArray(item)) {
        return item.map(trimObject);
      }
      if (item && typeof item === "object") {
        for (const key in item) {
          item[key] = trimObject(item[key]);
        }
      }
      return item;
    }
    trimObject(commandOutputs);

    expect(commandOutputs).toEqual({
      CreateMultipartUploadCommand: [
        {
          $metadata: {
            httpStatusCode: 200,
            requestId: "MC075MYM6KAT5AQE",
            extendedRequestId:
              "bKbXrk1IXbqfupvsn8gGtkGi33Nszcq9iwiah4xGeydCedkuKWeht6xnBkn0sCBhVDyDs0Xa4ecdbnxtyzMGqc17Cv6Se7P8",
            attempts: 1,
            totalRetryDelay: 0,
          },
          ServerSideEncryption: "AES256",
          ChecksumAlgorithm: "CRC32",
          ChecksumType: "COMPOSITE",
          Bucket: "sdkreleasev3integtestreso-integtestbucketa93771ae-zh5lrv1xnwjx",
          Key: "MPU-1758907641953",
          UploadId:
            "FPyQ2V.AnlVZcN3GUqieu5Ael9CllYWycVH0slQyiS9wYjDeUKS0okoMm.jbbbmMbNln.K8HtPzbwjCChgCUH9B94b6MyrD72_auD23tEpXhmel40UtdL.7w_RiNAc1xkyr8ooIKRsGyDE9J.WIH0Q--",
        },
      ],
      UploadPartCommand: [
        {
          $metadata: {
            httpStatusCode: 200,
            requestId: "MC01ZVGGQ8Z7950C",
            extendedRequestId:
              "1ezf9iJF3YvPWo3SF2UCrgFGBXltd25g9bHUA9W4k58PJ/W03OZ13nIOEmGE+NCRCbmuERJ4lvML5zGQU0JCw44sOelC9sRb",
            attempts: 1,
            totalRetryDelay: 0,
          },
          ServerSideEncryption: "AES256",
          ETag: '"eb3760d36bc660b509833238c0799b58"',
          ChecksumCRC32: "Ikyd7A==",
        },
        {
          $metadata: {
            httpStatusCode: 200,
            requestId: "MC0DH0R666ESRWE3",
            extendedRequestId:
              "JwgQ5LZ9Sx3fj6G46KOjfx7HI2XvK18Nx6iCOQPH+/UFjbFPju3hlZ7Gq8BIW6g2IiyI8cM3v1LPh+Me8KmCZQ==",
            attempts: 1,
            totalRetryDelay: 0,
          },
          ServerSideEncryption: "AES256",
          ETag: '"76d0701ab8175448d01476321416bf01"',
          ChecksumCRC32: "JTOG+w==",
        },
      ],
      CompleteMultipartUploadCommand: [
        {
          $metadata: {
            httpStatusCode: 200,
            requestId: "HY3KQKTR6ZKMGZ6E",
            extendedRequestId:
              "0G3bPmuvsW9FMp4OCpbRUxtldh81E3PxbvhUuXsCtasMMpYVfKlxvYkWD9wekOxD/C0xay5ttt/d7MXxz79JBw==",
            attempts: 1,
            totalRetryDelay: 0,
          },
          ServerSideEncryption: "AES256",
          VersionId: "PVmXZ_B1Qs3bTot7SY6w_.aiH3TpVbQ6",
          Bucket: "bucket",
          ChecksumCRC32: "53GakA==-2",
          ChecksumType: "COMPOSITE",
          ETag: '"e4cd0558ba33b2b33aa64f158deae527-2"',
          Key: "MPU-1758907641953",
          Location: "https://bucket.s3.us-west-2.amazonaws.com/MPU-1758907641953",
        },
      ],
    });

    expect(uploadOutput).toMatchObject(commandOutputs.CompleteMultipartUploadCommand[0]);
  });
}, 60_000);
