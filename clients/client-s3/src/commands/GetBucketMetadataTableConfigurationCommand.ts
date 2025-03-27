// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetBucketMetadataTableConfigurationOutput,
  GetBucketMetadataTableConfigurationRequest,
} from "../models/models_0";
import {
  de_GetBucketMetadataTableConfigurationCommand,
  se_GetBucketMetadataTableConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketMetadataTableConfigurationCommand}.
 */
export interface GetBucketMetadataTableConfigurationCommandInput extends GetBucketMetadataTableConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketMetadataTableConfigurationCommand}.
 */
export interface GetBucketMetadataTableConfigurationCommandOutput
  extends GetBucketMetadataTableConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>
 *          Retrieves the metadata table configuration for a general purpose bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html">Accelerating data
 *             discovery with S3 Metadata</a> in the <i>Amazon S3 User Guide</i>. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To use this operation, you must have the <code>s3:GetBucketMetadataTableConfiguration</code> permission. For more
 *                   information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html">Setting up
 *                      permissions for configuring metadata tables</a> in the
 *                   <i>Amazon S3 User Guide</i>. </p>
 *             </dd>
 *          </dl>
 *          <p>The following operations are related to <code>GetBucketMetadataTableConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataTableConfiguration.html">CreateBucketMetadataTableConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetadataTableConfiguration.html">DeleteBucketMetadataTableConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketMetadataTableConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketMetadataTableConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketMetadataTableConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketMetadataTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketMetadataTableConfigurationOutput
 * //   GetBucketMetadataTableConfigurationResult: { // GetBucketMetadataTableConfigurationResult
 * //     MetadataTableConfigurationResult: { // MetadataTableConfigurationResult
 * //       S3TablesDestinationResult: { // S3TablesDestinationResult
 * //         TableBucketArn: "STRING_VALUE", // required
 * //         TableName: "STRING_VALUE", // required
 * //         TableArn: "STRING_VALUE", // required
 * //         TableNamespace: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     Status: "STRING_VALUE", // required
 * //     Error: { // ErrorDetails
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketMetadataTableConfigurationCommandInput - {@link GetBucketMetadataTableConfigurationCommandInput}
 * @returns {@link GetBucketMetadataTableConfigurationCommandOutput}
 * @see {@link GetBucketMetadataTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketMetadataTableConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class GetBucketMetadataTableConfigurationCommand extends $Command
  .classBuilder<
    GetBucketMetadataTableConfigurationCommandInput,
    GetBucketMetadataTableConfigurationCommandOutput,
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
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "GetBucketMetadataTableConfiguration", {})
  .n("S3Client", "GetBucketMetadataTableConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetBucketMetadataTableConfigurationCommand)
  .de(de_GetBucketMetadataTableConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketMetadataTableConfigurationRequest;
      output: GetBucketMetadataTableConfigurationOutput;
    };
    sdk: {
      input: GetBucketMetadataTableConfigurationCommandInput;
      output: GetBucketMetadataTableConfigurationCommandOutput;
    };
  };
}
