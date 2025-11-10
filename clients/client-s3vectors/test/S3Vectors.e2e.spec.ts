import { BedrockRuntime } from "@aws-sdk/client-bedrock-runtime";
import { S3Vectors } from "@aws-sdk/client-s3vectors";
import { beforeEach, describe, expect, test as it } from "vitest";

describe(
  S3Vectors.name,
  () => {
    const s3v = new S3Vectors({
      region: "us-west-2",
    });
    const rock = new BedrockRuntime({
      region: "us-west-2",
    });

    const VECTOR_BUCKET_NAME = "jsv3-e2e-vector";

    beforeEach(async () => {
      async function checkForBucket() {
        const buckets = await s3v.listVectorBuckets({
          prefix: VECTOR_BUCKET_NAME,
        });

        return buckets.vectorBuckets?.some((bucket) => bucket.vectorBucketName === VECTOR_BUCKET_NAME);
      }

      const testBucket = await checkForBucket();

      if (!testBucket) {
        await s3v.createVectorBucket({
          vectorBucketName: VECTOR_BUCKET_NAME,
        });
        await s3v.createIndex({
          vectorBucketName: VECTOR_BUCKET_NAME,
          indexName: "characters",
          dataType: "float32",
          dimension: 1024,
          distanceMetric: "cosine",
        });
      }

      while (true) {
        const testBucket = await checkForBucket();
        if (!testBucket) {
          await new Promise((r) => setTimeout(r, 5000));
        } else {
          break;
        }
      }
    });

    it("can put vectors", async () => {
      const texts = [
        "Santa Bear is a bear who wears a Santa outfit.",
        "Saucey is a tiger who is rotund.",
        `Tigey is a tiger who likes to say "woof".`,
      ];

      const embeddings: number[][] = [];
      for (const text of texts) {
        const invoke = await rock.invokeModel({
          modelId: "amazon.titan-embed-text-v2:0",
          body: JSON.stringify({
            inputText: text,
          }),
        });
        embeddings.push([...invoke.body].slice(0, 1024));
      }

      await s3v.putVectors({
        vectorBucketName: VECTOR_BUCKET_NAME,
        indexName: "characters",
        vectors: [
          {
            key: "Santa Bear",
            data: { float32: embeddings[0] },
            metadata: { source_text: texts[0], genre: "bear" },
          },
          {
            key: "Saucey",
            data: { float32: embeddings[1] },
            metadata: { source_text: texts[1], genre: "tiger" },
          },
          {
            key: "Tigey",
            data: { float32: embeddings[2] },
            metadata: { source_text: texts[2], genre: "tiger" },
          },
        ],
      });
    });

    it("can query vectors", async () => {
      const invoke = await rock.invokeModel({
        modelId: "amazon.titan-embed-text-v2:0",
        body: JSON.stringify({
          inputText: "characters who are tigers or bears",
        }),
      });

      const embedding = invoke.body;

      const query = await s3v.queryVectors({
        vectorBucketName: VECTOR_BUCKET_NAME,
        indexName: "characters",
        queryVector: {
          float32: [...embedding].slice(0, 1024),
        },
        topK: 3,
        returnDistance: true,
        returnMetadata: true,
      });

      expect(query.vectors?.some((v) => v.key === "Tigey")).toBeDefined();
      expect(query.vectors?.some((v) => v.key === "Santa Bear")).toBeDefined();
      expect(query.vectors?.some((v) => v.key === "Saucey")).toBeDefined();
    });
  },
  120_000
);
