// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetBucketMetadataConfigurationOutput, GetBucketMetadataConfigurationRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketMetadataConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketMetadataConfigurationCommand}.
 */
export interface GetBucketMetadataConfigurationCommandInput extends GetBucketMetadataConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketMetadataConfigurationCommand}.
 */
export interface GetBucketMetadataConfigurationCommandOutput
  extends GetBucketMetadataConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves the S3 Metadata configuration for a general purpose bucket. For more information, see
 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html">Accelerating
 *         data discovery with S3 Metadata</a> in the <i>Amazon S3 User Guide</i>. </p>
 *          <note>
 *             <p>You can use the V2 <code>GetBucketMetadataConfiguration</code> API operation with V1 or V2
 *             metadata configurations. However, if you try to use the V1
 *             <code>GetBucketMetadataTableConfiguration</code> API operation with V2 configurations, you
 *             will receive an HTTP <code>405 Method Not Allowed</code> error.</p>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To use this operation, you must have the <code>s3:GetBucketMetadataTableConfiguration</code>
 *             permission. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html">Setting up permissions for
 *               configuring metadata tables</a> in the <i>Amazon S3 User Guide</i>. </p>
 *                <note>
 *                   <p>The IAM policy action name is the same for the V1 and V2 API operations.</p>
 *                </note>
 *             </dd>
 *          </dl>
 *          <p>The following operations are related to <code>GetBucketMetadataConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html">CreateBucketMetadataConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetadataConfiguration.html">DeleteBucketMetadataConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UpdateBucketMetadataInventoryTableConfiguration.html">UpdateBucketMetadataInventoryTableConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UpdateBucketMetadataJournalTableConfiguration.html">UpdateBucketMetadataJournalTableConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketMetadataConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketMetadataConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketMetadataConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketMetadataConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketMetadataConfigurationOutput
 * //   GetBucketMetadataConfigurationResult: { // GetBucketMetadataConfigurationResult
 * //     MetadataConfigurationResult: { // MetadataConfigurationResult
 * //       DestinationResult: { // DestinationResult
 * //         TableBucketType: "aws" || "customer",
 * //         TableBucketArn: "STRING_VALUE",
 * //         TableNamespace: "STRING_VALUE",
 * //       },
 * //       JournalTableConfigurationResult: { // JournalTableConfigurationResult
 * //         TableStatus: "STRING_VALUE", // required
 * //         Error: { // ErrorDetails
 * //           ErrorCode: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //         TableName: "STRING_VALUE", // required
 * //         TableArn: "STRING_VALUE",
 * //         RecordExpiration: { // RecordExpiration
 * //           Expiration: "ENABLED" || "DISABLED", // required
 * //           Days: Number("int"),
 * //         },
 * //       },
 * //       InventoryTableConfigurationResult: { // InventoryTableConfigurationResult
 * //         ConfigurationState: "ENABLED" || "DISABLED", // required
 * //         TableStatus: "STRING_VALUE",
 * //         Error: {
 * //           ErrorCode: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //         TableName: "STRING_VALUE",
 * //         TableArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketMetadataConfigurationCommandInput - {@link GetBucketMetadataConfigurationCommandInput}
 * @returns {@link GetBucketMetadataConfigurationCommandOutput}
 * @see {@link GetBucketMetadataConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketMetadataConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class GetBucketMetadataConfigurationCommand extends $Command
  .classBuilder<
    GetBucketMetadataConfigurationCommandInput,
    GetBucketMetadataConfigurationCommandOutput,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getThrow200ExceptionsPlugin(config)];
  })
  .s("AmazonS3", "GetBucketMetadataConfiguration", {})
  .n("S3Client", "GetBucketMetadataConfigurationCommand")
  .sc(GetBucketMetadataConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketMetadataConfigurationRequest;
      output: GetBucketMetadataConfigurationOutput;
    };
    sdk: {
      input: GetBucketMetadataConfigurationCommandInput;
      output: GetBucketMetadataConfigurationCommandOutput;
    };
  };
}
