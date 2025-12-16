// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListObservabilityConfigurationsRequest,
  ListObservabilityConfigurationsResponse,
} from "../models/models_0";
import { ListObservabilityConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListObservabilityConfigurationsCommand}.
 */
export interface ListObservabilityConfigurationsCommandInput extends ListObservabilityConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListObservabilityConfigurationsCommand}.
 */
export interface ListObservabilityConfigurationsCommandOutput
  extends ListObservabilityConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific
 *       configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested
 *       name.</p>
 *          <p>To retrieve a full description of a particular configuration revision, call  and provide one
 *       of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListObservabilityConfigurationsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListObservabilityConfigurationsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // ListObservabilityConfigurationsRequest
 *   ObservabilityConfigurationName: "STRING_VALUE",
 *   LatestOnly: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListObservabilityConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListObservabilityConfigurationsResponse
 * //   ObservabilityConfigurationSummaryList: [ // ObservabilityConfigurationSummaryList // required
 * //     { // ObservabilityConfigurationSummary
 * //       ObservabilityConfigurationArn: "STRING_VALUE",
 * //       ObservabilityConfigurationName: "STRING_VALUE",
 * //       ObservabilityConfigurationRevision: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListObservabilityConfigurationsCommandInput - {@link ListObservabilityConfigurationsCommandInput}
 * @returns {@link ListObservabilityConfigurationsCommandOutput}
 * @see {@link ListObservabilityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListObservabilityConfigurationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListObservabilityConfigurationsCommand extends $Command
  .classBuilder<
    ListObservabilityConfigurationsCommandInput,
    ListObservabilityConfigurationsCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppRunner", "ListObservabilityConfigurations", {})
  .n("AppRunnerClient", "ListObservabilityConfigurationsCommand")
  .sc(ListObservabilityConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListObservabilityConfigurationsRequest;
      output: ListObservabilityConfigurationsResponse;
    };
    sdk: {
      input: ListObservabilityConfigurationsCommandInput;
      output: ListObservabilityConfigurationsCommandOutput;
    };
  };
}
