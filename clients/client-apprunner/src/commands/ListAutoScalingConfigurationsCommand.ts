// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAutoScalingConfigurationsRequest, ListAutoScalingConfigurationsResponse } from "../models/models_0";
import {
  de_ListAutoScalingConfigurationsCommand,
  se_ListAutoScalingConfigurationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAutoScalingConfigurationsCommand}.
 */
export interface ListAutoScalingConfigurationsCommandInput extends ListAutoScalingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAutoScalingConfigurationsCommand}.
 */
export interface ListAutoScalingConfigurationsCommandOutput
  extends ListAutoScalingConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific
 *       configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested
 *       name.</p>
 *          <p>To retrieve a full description of a particular configuration revision, call  and provide one of
 *       the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListAutoScalingConfigurationsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListAutoScalingConfigurationsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppRunnerClient(config);
 * const input = { // ListAutoScalingConfigurationsRequest
 *   AutoScalingConfigurationName: "STRING_VALUE",
 *   LatestOnly: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAutoScalingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutoScalingConfigurationsResponse
 * //   AutoScalingConfigurationSummaryList: [ // AutoScalingConfigurationSummaryList // required
 * //     { // AutoScalingConfigurationSummary
 * //       AutoScalingConfigurationArn: "STRING_VALUE",
 * //       AutoScalingConfigurationName: "STRING_VALUE",
 * //       AutoScalingConfigurationRevision: Number("int"),
 * //       Status: "ACTIVE" || "INACTIVE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       HasAssociatedService: true || false,
 * //       IsDefault: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutoScalingConfigurationsCommandInput - {@link ListAutoScalingConfigurationsCommandInput}
 * @returns {@link ListAutoScalingConfigurationsCommandOutput}
 * @see {@link ListAutoScalingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListAutoScalingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 * @public
 */
export class ListAutoScalingConfigurationsCommand extends $Command
  .classBuilder<
    ListAutoScalingConfigurationsCommandInput,
    ListAutoScalingConfigurationsCommandOutput,
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
  .s("AppRunner", "ListAutoScalingConfigurations", {})
  .n("AppRunnerClient", "ListAutoScalingConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListAutoScalingConfigurationsCommand)
  .de(de_ListAutoScalingConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutoScalingConfigurationsRequest;
      output: ListAutoScalingConfigurationsResponse;
    };
    sdk: {
      input: ListAutoScalingConfigurationsCommandInput;
      output: ListAutoScalingConfigurationsCommandOutput;
    };
  };
}
