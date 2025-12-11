// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListConfigurationHistoryRequest, ListConfigurationHistoryResponse } from "../models/models_0";
import { ListConfigurationHistory } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationHistoryCommand}.
 */
export interface ListConfigurationHistoryCommandInput extends ListConfigurationHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationHistoryCommand}.
 */
export interface ListConfigurationHistoryCommandOutput extends ListConfigurationHistoryResponse, __MetadataBearer {}

/**
 * <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by
 *          Application Insights. Examples of events represented are: </p>
 *          <ul>
 *             <li>
 *                <p>INFO: creating a new alarm or updating an alarm threshold.</p>
 *             </li>
 *             <li>
 *                <p>WARN: alarm not created due to insufficient data points used to predict
 *                thresholds.</p>
 *             </li>
 *             <li>
 *                <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListConfigurationHistoryCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListConfigurationHistoryCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // ListConfigurationHistoryRequest
 *   ResourceGroupName: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   EventStatus: "INFO" || "WARN" || "ERROR",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new ListConfigurationHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationHistoryResponse
 * //   EventList: [ // ConfigurationEventList
 * //     { // ConfigurationEvent
 * //       ResourceGroupName: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       MonitoredResourceARN: "STRING_VALUE",
 * //       EventStatus: "INFO" || "WARN" || "ERROR",
 * //       EventResourceType: "CLOUDWATCH_ALARM" || "CLOUDWATCH_LOG" || "CLOUDFORMATION" || "SSM_ASSOCIATION",
 * //       EventTime: new Date("TIMESTAMP"),
 * //       EventDetail: "STRING_VALUE",
 * //       EventResourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationHistoryCommandInput - {@link ListConfigurationHistoryCommandInput}
 * @returns {@link ListConfigurationHistoryCommandOutput}
 * @see {@link ListConfigurationHistoryCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationHistoryCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link ApplicationInsightsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationInsights service.</p>
 *
 *
 * @public
 */
export class ListConfigurationHistoryCommand extends $Command
  .classBuilder<
    ListConfigurationHistoryCommandInput,
    ListConfigurationHistoryCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2WindowsBarleyService", "ListConfigurationHistory", {})
  .n("ApplicationInsightsClient", "ListConfigurationHistoryCommand")
  .sc(ListConfigurationHistory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationHistoryRequest;
      output: ListConfigurationHistoryResponse;
    };
    sdk: {
      input: ListConfigurationHistoryCommandInput;
      output: ListConfigurationHistoryCommandOutput;
    };
  };
}
