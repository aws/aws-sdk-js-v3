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
 * <p>Lists the annotations attached to an Amazon S3 object. Results are paginated, with a maximum of
 *       1,000 annotations per object. Use the <code>AnnotationPrefix</code> parameter to filter the
 *       results by name prefix.</p>
 *          <p>To use this operation, you must have the <code>s3:ListObjectAnnotations</code> permission.</p>
 *          <note>
 *             <p>Annotations are not supported by the following features: S3 Inventory Reports,
 *       API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and
 *       S3 Express One Zone (directory buckets).</p>
 *          </note>
 *          <p>The following operations are related to <code>ListObjectAnnotations</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAnnotation.html">PutObjectAnnotation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAnnotation.html">GetObjectAnnotation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectAnnotation.html">DeleteObjectAnnotation</a>
 *                </p>
 *             </li>
 *          </ul>
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
 *  <p>The annotation prefix you provided is invalid.</p>
 *
 * @throws {@link NoSuchBucket} (client fault)
 *  <p>The specified bucket does not exist.</p>
 *
 * @throws {@link NoSuchKey} (client fault)
 *  <p>The specified key does not exist.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
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
