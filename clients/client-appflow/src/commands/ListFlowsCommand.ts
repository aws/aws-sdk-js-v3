// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFlowsRequest, ListFlowsResponse } from "../models/models_0";
import { de_ListFlowsCommand, se_ListFlowsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFlowsCommand}.
 */
export interface ListFlowsCommandInput extends ListFlowsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowsCommand}.
 */
export interface ListFlowsCommandOutput extends ListFlowsResponse, __MetadataBearer {}

/**
 * <p> Lists all of the flows associated with your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, ListFlowsCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, ListFlowsCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = { // ListFlowsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFlowsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowsResponse
 * //   flows: [ // FlowList
 * //     { // FlowDefinition
 * //       flowArn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       flowName: "STRING_VALUE",
 * //       flowStatus: "Active" || "Deprecated" || "Deleted" || "Draft" || "Errored" || "Suspended",
 * //       sourceConnectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 * //       sourceConnectorLabel: "STRING_VALUE",
 * //       destinationConnectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 * //       destinationConnectorLabel: "STRING_VALUE",
 * //       triggerType: "Scheduled" || "Event" || "OnDemand",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       lastUpdatedBy: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       lastRunExecutionDetails: { // ExecutionDetails
 * //         mostRecentExecutionMessage: "STRING_VALUE",
 * //         mostRecentExecutionTime: new Date("TIMESTAMP"),
 * //         mostRecentExecutionStatus: "InProgress" || "Successful" || "Error" || "CancelStarted" || "Canceled",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowsCommandInput - {@link ListFlowsCommandInput}
 * @returns {@link ListFlowsCommandOutput}
 * @see {@link ListFlowsCommandInput} for command's `input` shape.
 * @see {@link ListFlowsCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 * @public
 */
export class ListFlowsCommand extends $Command
  .classBuilder<
    ListFlowsCommandInput,
    ListFlowsCommandOutput,
    AppflowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppflowClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SandstoneConfigurationServiceLambda", "ListFlows", {})
  .n("AppflowClient", "ListFlowsCommand")
  .f(void 0, void 0)
  .ser(se_ListFlowsCommand)
  .de(de_ListFlowsCommand)
  .build() {}
