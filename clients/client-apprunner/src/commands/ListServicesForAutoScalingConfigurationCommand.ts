// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListServicesForAutoScalingConfigurationRequest,
  ListServicesForAutoScalingConfigurationResponse,
} from "../models/models_0";
import {
  de_ListServicesForAutoScalingConfigurationCommand,
  se_ListServicesForAutoScalingConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServicesForAutoScalingConfigurationCommand}.
 */
export interface ListServicesForAutoScalingConfigurationCommandInput
  extends ListServicesForAutoScalingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ListServicesForAutoScalingConfigurationCommand}.
 */
export interface ListServicesForAutoScalingConfigurationCommandOutput
  extends ListServicesForAutoScalingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of the associated App Runner services using an auto scaling configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListServicesForAutoScalingConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListServicesForAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppRunnerClient(config);
 * const input = { // ListServicesForAutoScalingConfigurationRequest
 *   AutoScalingConfigurationArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListServicesForAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ListServicesForAutoScalingConfigurationResponse
 * //   ServiceArnList: [ // ServiceArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServicesForAutoScalingConfigurationCommandInput - {@link ListServicesForAutoScalingConfigurationCommandInput}
 * @returns {@link ListServicesForAutoScalingConfigurationCommandOutput}
 * @see {@link ListServicesForAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link ListServicesForAutoScalingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 * @public
 */
export class ListServicesForAutoScalingConfigurationCommand extends $Command
  .classBuilder<
    ListServicesForAutoScalingConfigurationCommandInput,
    ListServicesForAutoScalingConfigurationCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppRunner", "ListServicesForAutoScalingConfiguration", {})
  .n("AppRunnerClient", "ListServicesForAutoScalingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_ListServicesForAutoScalingConfigurationCommand)
  .de(de_ListServicesForAutoScalingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicesForAutoScalingConfigurationRequest;
      output: ListServicesForAutoScalingConfigurationResponse;
    };
    sdk: {
      input: ListServicesForAutoScalingConfigurationCommandInput;
      output: ListServicesForAutoScalingConfigurationCommandOutput;
    };
  };
}
