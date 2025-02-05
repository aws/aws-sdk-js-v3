// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { AddApplicationVpcConfigurationRequest, AddApplicationVpcConfigurationResponse } from "../models/models_0";
import {
  de_AddApplicationVpcConfigurationCommand,
  se_AddApplicationVpcConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddApplicationVpcConfigurationCommand}.
 */
export interface AddApplicationVpcConfigurationCommandInput extends AddApplicationVpcConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link AddApplicationVpcConfigurationCommand}.
 */
export interface AddApplicationVpcConfigurationCommandOutput
  extends AddApplicationVpcConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store
 *         and access resources securely.</p>
 *          <p>Note the following about VPC configurations for Managed Service for Apache Flink applications:</p>
 *          <ul>
 *             <li>
 *                <p>VPC configurations are not supported for SQL applications.</p>
 *             </li>
 *             <li>
 *                <p>When a VPC is added to a Managed Service for Apache Flink application, the application can no longer be accessed from the
 *            Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationVpcConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationVpcConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // AddApplicationVpcConfigurationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"),
 *   VpcConfiguration: { // VpcConfiguration
 *     SubnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ConditionalToken: "STRING_VALUE",
 * };
 * const command = new AddApplicationVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // AddApplicationVpcConfigurationResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * //   VpcConfigurationDescription: { // VpcConfigurationDescription
 * //     VpcConfigurationId: "STRING_VALUE", // required
 * //     VpcId: "STRING_VALUE", // required
 * //     SubnetIds: [ // SubnetIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     SecurityGroupIds: [ // SecurityGroupIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddApplicationVpcConfigurationCommandInput - {@link AddApplicationVpcConfigurationCommandInput}
 * @returns {@link AddApplicationVpcConfigurationCommandOutput}
 * @see {@link AddApplicationVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link AddApplicationVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidApplicationConfigurationException} (client fault)
 *  <p>The user-provided application configuration is not valid.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 * @public
 */
export class AddApplicationVpcConfigurationCommand extends $Command
  .classBuilder<
    AddApplicationVpcConfigurationCommandInput,
    AddApplicationVpcConfigurationCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisAnalytics_20180523", "AddApplicationVpcConfiguration", {})
  .n("KinesisAnalyticsV2Client", "AddApplicationVpcConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_AddApplicationVpcConfigurationCommand)
  .de(de_AddApplicationVpcConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddApplicationVpcConfigurationRequest;
      output: AddApplicationVpcConfigurationResponse;
    };
    sdk: {
      input: AddApplicationVpcConfigurationCommandInput;
      output: AddApplicationVpcConfigurationCommandOutput;
    };
  };
}
