// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetMetricDataRequest, GetMetricDataResponse } from "../models/models_1";
import { GetMetricData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMetricDataCommand}.
 */
export interface GetMetricDataCommandInput extends GetMetricDataRequest {}
/**
 * @public
 *
 * The output of {@link GetMetricDataCommand}.
 */
export interface GetMetricDataCommandOutput extends GetMetricDataResponse, __MetadataBearer {}

/**
 * <p>Gets historical metric data from the specified Amazon Connect instance.</p>
 *          <p>For a description of each historical metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html">Metrics definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 *          <note>
 *             <p>We recommend using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricDataV2.html">GetMetricDataV2</a> API. It provides more flexibility, features, and the ability to query longer time ranges
 *     than <code>GetMetricData</code>. Use it to retrieve historical agent and contact metrics for the last 3 months, at
 *     varying intervals. You can also use it to build custom dashboards to measure historical queue and agent performance.
 *     For example, you can track the number of incoming contacts for the last 7 days, with data split by day, to see how
 *     contact volume changed per day of the week.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetMetricDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetMetricDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetMetricDataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Filters: { // Filters
 *     Queues: [ // Queues
 *       "STRING_VALUE",
 *     ],
 *     Channels: [ // Channels
 *       "VOICE" || "CHAT" || "TASK" || "EMAIL",
 *     ],
 *     RoutingProfiles: [ // RoutingProfiles
 *       "STRING_VALUE",
 *     ],
 *     RoutingStepExpressions: [ // RoutingExpressions
 *       "STRING_VALUE",
 *     ],
 *     AgentStatuses: [ // AgentStatuses
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Groupings: [ // Groupings
 *     "QUEUE" || "CHANNEL" || "ROUTING_PROFILE" || "ROUTING_STEP_EXPRESSION" || "AGENT_STATUS",
 *   ],
 *   HistoricalMetrics: [ // HistoricalMetrics // required
 *     { // HistoricalMetric
 *       Name: "CONTACTS_QUEUED" || "CONTACTS_HANDLED" || "CONTACTS_ABANDONED" || "CONTACTS_CONSULTED" || "CONTACTS_AGENT_HUNG_UP_FIRST" || "CONTACTS_HANDLED_INCOMING" || "CONTACTS_HANDLED_OUTBOUND" || "CONTACTS_HOLD_ABANDONS" || "CONTACTS_TRANSFERRED_IN" || "CONTACTS_TRANSFERRED_OUT" || "CONTACTS_TRANSFERRED_IN_FROM_QUEUE" || "CONTACTS_TRANSFERRED_OUT_FROM_QUEUE" || "CONTACTS_MISSED" || "CALLBACK_CONTACTS_HANDLED" || "API_CONTACTS_HANDLED" || "OCCUPANCY" || "HANDLE_TIME" || "AFTER_CONTACT_WORK_TIME" || "QUEUED_TIME" || "ABANDON_TIME" || "QUEUE_ANSWER_TIME" || "HOLD_TIME" || "INTERACTION_TIME" || "INTERACTION_AND_HOLD_TIME" || "SERVICE_LEVEL",
 *       Threshold: { // Threshold
 *         Comparison: "LT",
 *         ThresholdValue: Number("double"),
 *       },
 *       Statistic: "SUM" || "MAX" || "AVG",
 *       Unit: "SECONDS" || "COUNT" || "PERCENT",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricDataResponse
 * //   NextToken: "STRING_VALUE",
 * //   MetricResults: [ // HistoricalMetricResults
 * //     { // HistoricalMetricResult
 * //       Dimensions: { // Dimensions
 * //         Queue: { // QueueReference
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL",
 * //         RoutingProfile: { // RoutingProfileReference
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         RoutingStepExpression: "STRING_VALUE",
 * //         AgentStatus: { // AgentStatusIdentifier
 * //           Arn: "STRING_VALUE",
 * //           Id: "STRING_VALUE",
 * //         },
 * //       },
 * //       Collections: [ // HistoricalMetricDataCollections
 * //         { // HistoricalMetricData
 * //           Metric: { // HistoricalMetric
 * //             Name: "CONTACTS_QUEUED" || "CONTACTS_HANDLED" || "CONTACTS_ABANDONED" || "CONTACTS_CONSULTED" || "CONTACTS_AGENT_HUNG_UP_FIRST" || "CONTACTS_HANDLED_INCOMING" || "CONTACTS_HANDLED_OUTBOUND" || "CONTACTS_HOLD_ABANDONS" || "CONTACTS_TRANSFERRED_IN" || "CONTACTS_TRANSFERRED_OUT" || "CONTACTS_TRANSFERRED_IN_FROM_QUEUE" || "CONTACTS_TRANSFERRED_OUT_FROM_QUEUE" || "CONTACTS_MISSED" || "CALLBACK_CONTACTS_HANDLED" || "API_CONTACTS_HANDLED" || "OCCUPANCY" || "HANDLE_TIME" || "AFTER_CONTACT_WORK_TIME" || "QUEUED_TIME" || "ABANDON_TIME" || "QUEUE_ANSWER_TIME" || "HOLD_TIME" || "INTERACTION_TIME" || "INTERACTION_AND_HOLD_TIME" || "SERVICE_LEVEL",
 * //             Threshold: { // Threshold
 * //               Comparison: "LT",
 * //               ThresholdValue: Number("double"),
 * //             },
 * //             Statistic: "SUM" || "MAX" || "AVG",
 * //             Unit: "SECONDS" || "COUNT" || "PERCENT",
 * //           },
 * //           Value: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMetricDataCommandInput - {@link GetMetricDataCommandInput}
 * @returns {@link GetMetricDataCommandOutput}
 * @see {@link GetMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetMetricDataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class GetMetricDataCommand extends $Command
  .classBuilder<
    GetMetricDataCommandInput,
    GetMetricDataCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "GetMetricData", {})
  .n("ConnectClient", "GetMetricDataCommand")
  .sc(GetMetricData$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetricDataRequest;
      output: GetMetricDataResponse;
    };
    sdk: {
      input: GetMetricDataCommandInput;
      output: GetMetricDataCommandOutput;
    };
  };
}
