// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateBucketMetadataAnnotationTableConfigurationRequest } from "../models/models_1";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { UpdateBucketMetadataAnnotationTableConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBucketMetadataAnnotationTableConfigurationCommand}.
 */
export interface UpdateBucketMetadataAnnotationTableConfigurationCommandInput extends UpdateBucketMetadataAnnotationTableConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBucketMetadataAnnotationTableConfigurationCommand}.
 */
export interface UpdateBucketMetadataAnnotationTableConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the annotation table configuration for an Amazon S3 bucket's metadata configuration. Use this
 *       operation to enable or disable the annotation table, or to update its associated IAM role.</p>
 *          <p>An annotation table is a queryable Iceberg table that contains records of all annotations
 *       attached to objects in the bucket. To use this operation, the bucket must have an existing Amazon S3
 *       Metadata configuration.</p>
 *          <p>To use this operation, you must have the
 *       <code>s3:UpdateBucketMetadataAnnotationTableConfiguration</code> permission. If you are specifying
 *       or changing the IAM role, you must also have <code>iam:PassRole</code> permission for the role.</p>
 *          <p>The IAM role must have a trust policy that allows the Amazon S3 metadata service to assume it, and a
 *       permissions policy that grants the actions needed to read annotations from your bucket. The
 *       following examples show a trust policy and a permissions policy that you can adapt for your bucket
 *       and account.</p>
 *          <p>The following operations are related to
 *       <code>UpdateBucketMetadataAnnotationTableConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html">CreateBucketMetadataConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetadataConfiguration.html">GetBucketMetadataConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, UpdateBucketMetadataAnnotationTableConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, UpdateBucketMetadataAnnotationTableConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // UpdateBucketMetadataAnnotationTableConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 *   AnnotationTableConfiguration: { // AnnotationTableConfigurationUpdates
 *     ConfigurationState: "ENABLED" || "DISABLED", // required
 *     EncryptionConfiguration: { // MetadataTableEncryptionConfiguration
 *       SseAlgorithm: "aws:kms" || "AES256", // required
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *     Role: "STRING_VALUE",
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new UpdateBucketMetadataAnnotationTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateBucketMetadataAnnotationTableConfigurationCommandInput - {@link UpdateBucketMetadataAnnotationTableConfigurationCommandInput}
 * @returns {@link UpdateBucketMetadataAnnotationTableConfigurationCommandOutput}
 * @see {@link UpdateBucketMetadataAnnotationTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateBucketMetadataAnnotationTableConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class UpdateBucketMetadataAnnotationTableConfigurationCommand extends $Command
  .classBuilder<
    UpdateBucketMetadataAnnotationTableConfigurationCommandInput,
    UpdateBucketMetadataAnnotationTableConfigurationCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getFlexibleChecksumsPlugin(config, {
        requestAlgorithmMember: {'httpHeader': 'x-amz-sdk-checksum-algorithm', 'name': 'ChecksumAlgorithm'},
        requestChecksumRequired: true,
      }),
    ];
  })
  .s("AmazonS3", "UpdateBucketMetadataAnnotationTableConfiguration", {})
  .n("S3Client", "UpdateBucketMetadataAnnotationTableConfigurationCommand")
  .sc(UpdateBucketMetadataAnnotationTableConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBucketMetadataAnnotationTableConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateBucketMetadataAnnotationTableConfigurationCommandInput;
      output: UpdateBucketMetadataAnnotationTableConfigurationCommandOutput;
    };
  };
}
