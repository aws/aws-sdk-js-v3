// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { _ep0, _mw6, command } from "../commandBuilder";
import type { GetObjectAnnotationOutput, GetObjectAnnotationRequest } from "../models/models_0";
import { GetObjectAnnotation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetObjectAnnotationCommand}.
 */
export interface GetObjectAnnotationCommandInput extends GetObjectAnnotationRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectAnnotationCommand}.
 */
export interface GetObjectAnnotationCommandOutput extends Omit<GetObjectAnnotationOutput, "AnnotationPayload">, __MetadataBearer {
  AnnotationPayload?: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Retrieves an annotation from an Amazon S3 object. To use this operation, you must have the
 *       <code>s3:GetObjectAnnotation</code> permission.</p>
 *          <p>If checksum mode is enabled via the <code>x-amz-checksum-mode</code> header, Amazon S3
 *       returns the stored checksum in the response headers for client-side validation.</p>
 *          <note>
 *             <p>Annotations are not supported by the following features: S3 Inventory Reports,
 *       API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and
 *       S3 Express One Zone (directory buckets).</p>
 *          </note>
 *          <p>The following operations are related to <code>GetObjectAnnotation</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAnnotation.html">PutObjectAnnotation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectAnnotations.html">ListObjectAnnotations</a>
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
 * import { S3Client, GetObjectAnnotationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectAnnotationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetObjectAnnotationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   AnnotationName: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ChecksumMode: "ENABLED",
 * };
 * const command = new GetObjectAnnotationCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.AnnotationPayload.transformToByteArray();
 * // const str = await response.AnnotationPayload.transformToString();
 * // response.AnnotationPayload.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetObjectAnnotationOutput
 * //   AnnotationPayload: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * //   ObjectVersionId: "STRING_VALUE",
 * //   LastModified: new Date("TIMESTAMP"),
 * //   ContentLength: Number("long"),
 * //   ETag: "STRING_VALUE",
 * //   ChecksumCRC32: "STRING_VALUE",
 * //   ChecksumCRC32C: "STRING_VALUE",
 * //   ChecksumCRC64NVME: "STRING_VALUE",
 * //   ChecksumSHA1: "STRING_VALUE",
 * //   ChecksumSHA256: "STRING_VALUE",
 * //   ChecksumSHA512: "STRING_VALUE",
 * //   ChecksumMD5: "STRING_VALUE",
 * //   ChecksumXXHASH64: "STRING_VALUE",
 * //   ChecksumXXHASH3: "STRING_VALUE",
 * //   ChecksumXXHASH128: "STRING_VALUE",
 * //   ChecksumType: "COMPOSITE" || "FULL_OBJECT",
 * //   ServerSideEncryption: "AES256" || "aws:fsx" || "aws:kms" || "aws:kms:dsse",
 * //   RequestCharged: "requester",
 * //   ReplicationStatus: "COMPLETE" || "PENDING" || "FAILED" || "REPLICA" || "COMPLETED",
 * // };
 *
 * ```
 *
 * @param GetObjectAnnotationCommandInput - {@link GetObjectAnnotationCommandInput}
 * @returns {@link GetObjectAnnotationCommandOutput}
 * @see {@link GetObjectAnnotationCommandInput} for command's `input` shape.
 * @see {@link GetObjectAnnotationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchAnnotation} (client fault)
 *  <p>The specified annotation does not exist on this object.</p>
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
export class GetObjectAnnotationCommand extends command<GetObjectAnnotationCommandInput, GetObjectAnnotationCommandOutput>(
  _ep0,
  _mw6,
  "GetObjectAnnotation",
  GetObjectAnnotation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetObjectAnnotationRequest;
      output: GetObjectAnnotationOutput;
    };
    sdk: {
      input: GetObjectAnnotationCommandInput;
      output: GetObjectAnnotationCommandOutput;
    };
  };
}
