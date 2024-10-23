import { GetObjectCommand, GetObjectCommandInput, S3, S3Client } from "@aws-sdk/client-s3";
import type { AssertiveClient, BrowserClient, NodeJsClient, NoUndefined, UncheckedClient } from "@smithy/types";
import { describe, test as it } from "vitest";

describe("S3 client transform integration test", () => {
  it("has the expected compilation behavior", async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function compileOnly() {
      // default, no validation for undefined values
      const s3 = new S3({});

      await s3.listBuckets();
      await s3.listBuckets({});

      // @ts-expect-error (missing Bucket)
      s3.getObject({
        Key: undefined,
      });

      s3.getObject({
        // @ts-expect-error (unrecognized field)
        UnknownProperty: undefined,
      });

      const get = await s3.getObject({
        Bucket: undefined,
        Key: undefined,
      });

      // @ts-expect-error (Body may be undefined)
      await get.Body.transformToString();

      await get.Body?.transformToString();
      await get.Body!.transformToString();
    }
  });

  it("assertive client transform", async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function compileOnly() {
      // the assertive client requires that inputs/outputs are of the right type
      // excluding '| undefined'.
      const s3_assertive = new S3() as AssertiveClient<S3>;
      const s3Client_assertive = new S3Client() as AssertiveClient<S3Client>;

      await s3_assertive.listBuckets();
      await s3_assertive.listBuckets({});

      s3_assertive.getObject({
        Bucket: "undefined",
        // @ts-expect-error (undefined not assignable to string)
        Key: undefined,
      });
      s3Client_assertive.send(
        new GetObjectCommand({
          Bucket: "undefined",
          // type transform is unable to validate within Command ctor.
          Key: undefined,
        })
      );

      {
        const getObjectInput: NoUndefined<GetObjectCommandInput> = {
          Bucket: "undefined",
          // @ts-expect-error (undefined not assignable to string)
          Key: undefined,
          // optional params can still be undefined.
          SSECustomerAlgorithm: undefined,
        };
        const get = await s3Client_assertive.send(new GetObjectCommand(getObjectInput));
        // @ts-expect-error (Body is possibly undefined)
        await get.Body.transformToString();
      }

      // @ts-expect-error (missing Key)
      s3_assertive.getObject({
        Bucket: "undefined",
      });

      {
        const get = await s3_assertive.getObject({
          Bucket: "undefined",
          Key: "undefined",
        });

        // @ts-expect-error (Body is optional)
        await get.Body.transformToString();

        await get.Body?.transformToString();
        await get.Body!.transformToString();
      }

      {
        const get = await s3Client_assertive.send(
          new GetObjectCommand({
            Bucket: "undefined",
            Key: "undefined",
          })
        );

        // @ts-expect-error (Body is optional)
        await get.Body.transformToString();

        await get.Body?.transformToString();
        await get.Body!.transformToString();
      }
    }
  });

  it("unchecked client transform", async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function compileOnly() {
      // unchecked client also removes the possibility
      // of optionality '?' in addition to '| undefined'.
      const s3_unchecked = new S3({}) as UncheckedClient<S3>;
      const s3Client_unchecked = new S3Client() as UncheckedClient<S3Client>;

      await s3_unchecked.listBuckets();
      await s3_unchecked.listBuckets({});

      s3_unchecked.getObject({
        Bucket: "undefined",
        // @ts-expect-error (undefined not assignable to string)
        Key: undefined,
      });
      s3_unchecked.send(
        new GetObjectCommand({
          Bucket: "undefined",
          // type transform is unable to validate within Command ctor.
          Key: undefined,
        })
      );

      {
        const getObjectInput: NoUndefined<GetObjectCommandInput> = {
          Bucket: "undefined",
          // @ts-expect-error (undefined not assignable to string)
          Key: undefined,
          // optional params can still be undefined.
          SSECustomerAlgorithm: undefined,
        };
        const get = await s3Client_unchecked.send(new GetObjectCommand(getObjectInput));
        await get.Body.transformToString();
      }

      // @ts-expect-error (missing Key)
      s3_unchecked.getObject({
        Bucket: "undefined",
      });

      {
        const get = await s3_unchecked.getObject({
          Bucket: "undefined",
          Key: "undefined",
        });

        await get.Body.transformToString();
      }

      {
        const get = await s3Client_unchecked.send(
          new GetObjectCommand({
            Bucket: "undefined",
            Key: "undefined",
          })
        );

        await get.Body.transformToString();
      }
    }
  });

  it("platform-specific client transforms", async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function compileOnly() {
      // platform specific clients.
      const s3_browser = new S3({}) as BrowserClient<S3>;
      const s3Client_browser = new S3Client() as BrowserClient<S3Client>;
      const s3_node = new S3() as NodeJsClient<S3>;
      const s3Client_node = new S3() as NodeJsClient<S3>;

      {
        const get = await s3Client_browser.send(
          new GetObjectCommand({
            Bucket: "undefined",
            Key: "undefined",
          })
        );
        get.Body!.tee();
      }
      {
        const get = await s3_browser.getObject({ Bucket: "undefined", Key: "undefined" });
        get.Body!.tee();
      }

      {
        const get = await s3Client_node.send(
          new GetObjectCommand({
            Bucket: "undefined",
            Key: "undefined",
          })
        );
        get.Body!.pause();
      }
      {
        const get = await s3_node.getObject({ Bucket: "undefined", Key: "undefined" });
        get.Body!.pause();
      }
    }
  });
});
