// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFlywheelRequest, DescribeFlywheelResponse } from "../models/models_0";
import { de_DescribeFlywheelCommand, se_DescribeFlywheelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlywheelCommand}.
 */
export interface DescribeFlywheelCommandInput extends DescribeFlywheelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlywheelCommand}.
 */
export interface DescribeFlywheelCommandOutput extends DescribeFlywheelResponse, __MetadataBearer {}

/**
 * <p>Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeFlywheelCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeFlywheelCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ComprehendClient(config);
 * const input = { // DescribeFlywheelRequest
 *   FlywheelArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeFlywheelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlywheelResponse
 * //   FlywheelProperties: { // FlywheelProperties
 * //     FlywheelArn: "STRING_VALUE",
 * //     ActiveModelArn: "STRING_VALUE",
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     TaskConfig: { // TaskConfig
 * //       LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * //       DocumentClassificationConfig: { // DocumentClassificationConfig
 * //         Mode: "MULTI_CLASS" || "MULTI_LABEL", // required
 * //         Labels: [ // LabelsList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       EntityRecognitionConfig: { // EntityRecognitionConfig
 * //         EntityTypes: [ // EntityTypesList // required
 * //           { // EntityTypesListItem
 * //             Type: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     DataLakeS3Uri: "STRING_VALUE",
 * //     DataSecurityConfig: { // DataSecurityConfig
 * //       ModelKmsKeyId: "STRING_VALUE",
 * //       VolumeKmsKeyId: "STRING_VALUE",
 * //       DataLakeKmsKeyId: "STRING_VALUE",
 * //       VpcConfig: { // VpcConfig
 * //         SecurityGroupIds: [ // SecurityGroupIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Subnets: [ // Subnets // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //     ModelType: "DOCUMENT_CLASSIFIER" || "ENTITY_RECOGNIZER",
 * //     Message: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LatestFlywheelIteration: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFlywheelCommandInput - {@link DescribeFlywheelCommandInput}
 * @returns {@link DescribeFlywheelCommandOutput}
 * @see {@link DescribeFlywheelCommandInput} for command's `input` shape.
 * @see {@link DescribeFlywheelCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 * @public
 */
export class DescribeFlywheelCommand extends $Command
  .classBuilder<
    DescribeFlywheelCommandInput,
    DescribeFlywheelCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "DescribeFlywheel", {})
  .n("ComprehendClient", "DescribeFlywheelCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFlywheelCommand)
  .de(de_DescribeFlywheelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFlywheelRequest;
      output: DescribeFlywheelResponse;
    };
    sdk: {
      input: DescribeFlywheelCommandInput;
      output: DescribeFlywheelCommandOutput;
    };
  };
}
