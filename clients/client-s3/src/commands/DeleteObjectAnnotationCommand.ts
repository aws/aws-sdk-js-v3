// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3/s3";
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteObjectAnnotationOutput, DeleteObjectAnnotationRequest } from "../models/models_0";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteObjectAnnotation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a specific annotation from an Amazon S3 object. Use the <code>x-amz-object-if-match</code>
 *       header to perform a conditional delete that only succeeds if the object's ETag matches the
 *       provided value, preventing race conditions during concurrent updates.</p>
 *          <p>Deleting an annotation is permanent. Annotations are not independently versioned, so there is no
 *       delete marker or way to recover a deleted annotation.</p>
 *          <p>To use this operation, you must have the <code>s3:DeleteObjectAnnotation</code> permission. If
 *       the object is protected by Object Lock in governance mode, you must also include the
 *       <code>x-amz-bypass-governance-retention</code> header.</p>
 *          <note>
 *             <p>Annotations are not supported by the following features: S3 Inventory Reports,
 *       API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and
 *       S3 Express One Zone (directory buckets).</p>
 *          </note>
 *          <p>The following operations are related to <code>DeleteObjectAnnotation</code>:</p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectAnnotations.html">ListObjectAnnotations</a>
 *                </p>
 *             </li>
 *          </ul>
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
export class DeleteObjectAnnotationCommand extends $Command
  .classBuilder<
    DeleteObjectAnnotationCommandInput,
    DeleteObjectAnnotationCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "DeleteObjectAnnotation", {})
  .n("S3Client", "DeleteObjectAnnotationCommand")
  .sc(DeleteObjectAnnotation$)
  .build() {
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
