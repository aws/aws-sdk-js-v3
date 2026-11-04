// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { ListObjectAnnotationsOutput, ListObjectAnnotationsRequest } from "../models/models_0";
import { ListObjectAnnotations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListObjectAnnotationsCommand}.
 */
export interface ListObjectAnnotationsCommandInput extends ListObjectAnnotationsRequest {}
/**
 * @public
 *
 * The output of {@link ListObjectAnnotationsCommand}.
 */
export interface ListObjectAnnotationsCommandOutput extends ListObjectAnnotationsOutput, __MetadataBearer {}

/**
 * Lists the annotations attached to an Amazon S3 object. Results are paginated, with a maximum of 1,000 annotations per object. Use the `AnnotationPrefix` parameter to filter the results by name prefix.
 *
 * To use this operation, you must have the `s3:ListObjectAnnotations` permission.
 *
 * > **Note:** Annotations are not supported by the following features: S3 Inventory Reports, API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and S3 Express One Zone (directory buckets).
 *
 * The following operations are related to `ListObjectAnnotations`:
 *
 * - [PutObjectAnnotation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAnnotation.html)
 * - [GetObjectAnnotation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAnnotation.html)
 * - [DeleteObjectAnnotation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectAnnotation.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListObjectAnnotationsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListObjectAnnotationsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // ListObjectAnnotationsRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   MaxAnnotationResults: Number("int"),
 *   AnnotationPrefix: "STRING_VALUE",
 *   ContinuationToken: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new ListObjectAnnotationsCommand(input);
 * const response = await client.send(command);
 * // { // ListObjectAnnotationsOutput
 * //   Annotations: [ // AnnotationList
 * //     { // AnnotationEntry
 * //       AnnotationName: "STRING_VALUE", // required
 * //       LastModified: new Date("TIMESTAMP"), // required
 * //       ETag: "STRING_VALUE",
 * //       ChecksumAlgorithm: [ // ChecksumAlgorithmList
 * //         "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 * //       ],
 * //       Size: Number("long"), // required
 * //       ReplicationStatus: "COMPLETE" || "PENDING" || "FAILED" || "REPLICA" || "COMPLETED",
 * //     },
 * //   ],
 * //   Bucket: "STRING_VALUE",
 * //   Key: "STRING_VALUE",
 * //   ObjectVersionId: "STRING_VALUE",
 * //   AnnotationPrefix: "STRING_VALUE",
 * //   MaxAnnotationResults: Number("int"),
 * //   AnnotationCount: Number("int"),
 * //   ContinuationToken: "STRING_VALUE",
 * //   NextContinuationToken: "STRING_VALUE",
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param ListObjectAnnotationsCommandInput - {@link ListObjectAnnotationsCommandInput}
 * @returns {@link ListObjectAnnotationsCommandOutput}
 * @see {@link ListObjectAnnotationsCommandInput} for command's `input` shape.
 * @see {@link ListObjectAnnotationsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link InvalidPrefix} (client fault)
 *
 * The annotation prefix you provided is invalid.
 *
 * @throws {@link NoSuchBucket} (client fault)
 *
 * The specified bucket does not exist.
 *
 * @throws {@link NoSuchKey} (client fault)
 *
 * The specified key does not exist.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class ListObjectAnnotationsCommand extends command<ListObjectAnnotationsCommandInput, ListObjectAnnotationsCommandOutput>(
  _ep5,
  _mw0,
  "ListObjectAnnotations",
  ListObjectAnnotations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListObjectAnnotationsRequest;
      output: ListObjectAnnotationsOutput;
    };
    sdk: {
      input: ListObjectAnnotationsCommandInput;
      output: ListObjectAnnotationsCommandOutput;
    };
  };
}
