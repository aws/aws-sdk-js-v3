// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { DeleteObjectAnnotationOutput, DeleteObjectAnnotationRequest } from "../models/models_0";
import { DeleteObjectAnnotation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteObjectAnnotationCommand}.
 */
export interface DeleteObjectAnnotationCommandInput extends DeleteObjectAnnotationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteObjectAnnotationCommand}.
 */
export interface DeleteObjectAnnotationCommandOutput extends DeleteObjectAnnotationOutput, __MetadataBearer {}

/**
 * Deletes a specific annotation from an Amazon S3 object. Use the `x-amz-object-if-match` header to perform a conditional delete that only succeeds if the object's ETag matches the provided value, preventing race conditions during concurrent updates.
 *
 * Deleting an annotation is permanent. Annotations are not independently versioned, so there is no delete marker or way to recover a deleted annotation.
 *
 * To use this operation, you must have the `s3:DeleteObjectAnnotation` permission. If the object is protected by Object Lock in governance mode, you must also include the `x-amz-bypass-governance-retention` header.
 *
 * > **Note:** Annotations are not supported by the following features: S3 Inventory Reports, API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and S3 Express One Zone (directory buckets).
 *
 * The following operations are related to `DeleteObjectAnnotation`:
 *
 * - [PutObjectAnnotation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAnnotation.html)
 * - [GetObjectAnnotation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAnnotation.html)
 * - [ListObjectAnnotations](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectAnnotations.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteObjectAnnotationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteObjectAnnotationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // DeleteObjectAnnotationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   AnnotationName: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ObjectIfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteObjectAnnotationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteObjectAnnotationOutput
 * //   ObjectVersionId: "STRING_VALUE",
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param DeleteObjectAnnotationCommandInput - {@link DeleteObjectAnnotationCommandInput}
 * @returns {@link DeleteObjectAnnotationCommandOutput}
 * @see {@link DeleteObjectAnnotationCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectAnnotationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
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
export class DeleteObjectAnnotationCommand extends command<DeleteObjectAnnotationCommandInput, DeleteObjectAnnotationCommandOutput>(
  _ep5,
  _mw0,
  "DeleteObjectAnnotation",
  DeleteObjectAnnotation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteObjectAnnotationRequest;
      output: DeleteObjectAnnotationOutput;
    };
    sdk: {
      input: DeleteObjectAnnotationCommandInput;
      output: DeleteObjectAnnotationCommandOutput;
    };
  };
}
