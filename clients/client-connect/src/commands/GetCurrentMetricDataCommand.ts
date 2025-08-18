// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCurrentMetricDataRequest, GetCurrentMetricDataResponse } from "../models/models_1";
import { de_GetCurrentMetricDataCommand, se_GetCurrentMetricDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCurrentMetricDataCommand}.
 */
export interface GetCurrentMetricDataCommandInput extends GetCurrentMetricDataRequest {}
/**
 * @public
 *
 * The output of {@link GetCurrentMetricDataCommand}.
 */
export interface GetCurrentMetricDataCommandOutput extends GetCurrentMetricDataResponse, __MetadataBearer {}

/**
 * <p>Gets the real-time metric data from the specified Amazon Connect instance.</p>
 *          <p>For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html">Metrics definitions</a> in the
 *      <i>Amazon Connect Administrator Guide</i>.</p>
 *          <note>
 *             <p>When you make a successful API request, you can expect the following metric values in the response:</p>
 *             <ol>
 *                <li>
 *                   <p>
 *                      <b>Metric value is null</b>: The calculation cannot be performed due to divide by zero or insufficient data</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <b>Metric value is a number (including 0) of defined type</b>: The number provided is the calculation result</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <b>MetricResult list is empty</b>: The request cannot find any data in the system</p>
 *                </li>
 *             </ol>
 *             <p>The following guidelines can help you work with the API:</p>
 *             <ul>
 *                <li>
 *                   <p>Each dimension in the metric response must contain a value</p>
 *                </li>
 *                <li>
 *                   <p>Each item in MetricResult must include all requested metrics</p>
 *                </li>
 *                <li>
 *                   <p>If the response is slow due to large result sets, try these approaches:</p>
 *                   <ul>
 *                      <li>
 *                         <p>Add filters to reduce the amount of data returned</p>
 *                      </li>
 *                   </ul>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetCurrentMetricDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetCurrentMetricDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // GetCurrentMetricDataRequest
 *   InstanceId: "STRING_VALUE", // required
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
 *   },
 *   Groupings: [ // Groupings
 *     "QUEUE" || "CHANNEL" || "ROUTING_PROFILE" || "ROUTING_STEP_EXPRESSION",
 *   ],
 *   CurrentMetrics: [ // CurrentMetrics // required
 *     { // CurrentMetric
 *       Name: "AGENTS_ONLINE" || "AGENTS_AVAILABLE" || "AGENTS_ON_CALL" || "AGENTS_NON_PRODUCTIVE" || "AGENTS_AFTER_CONTACT_WORK" || "AGENTS_ERROR" || "AGENTS_STAFFED" || "CONTACTS_IN_QUEUE" || "OLDEST_CONTACT_AGE" || "CONTACTS_SCHEDULED" || "AGENTS_ON_CONTACT" || "SLOTS_ACTIVE" || "SLOTS_AVAILABLE",
 *       Unit: "SECONDS" || "COUNT" || "PERCENT",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortCriteria: [ // CurrentMetricSortCriteriaMaxOne
 *     { // CurrentMetricSortCriteria
 *       SortByMetric: "AGENTS_ONLINE" || "AGENTS_AVAILABLE" || "AGENTS_ON_CALL" || "AGENTS_NON_PRODUCTIVE" || "AGENTS_AFTER_CONTACT_WORK" || "AGENTS_ERROR" || "AGENTS_STAFFED" || "CONTACTS_IN_QUEUE" || "OLDEST_CONTACT_AGE" || "CONTACTS_SCHEDULED" || "AGENTS_ON_CONTACT" || "SLOTS_ACTIVE" || "SLOTS_AVAILABLE",
 *       SortOrder: "ASCENDING" || "DESCENDING",
 *     },
 *   ],
 * };
 * const command = new GetCurrentMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // GetCurrentMetricDataResponse
 * //   NextToken: "STRING_VALUE",
 * //   MetricResults: [ // CurrentMetricResults
 * //     { // CurrentMetricResult
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
 * //       },
 * //       Collections: [ // CurrentMetricDataCollections
 * //         { // CurrentMetricData
 * //           Metric: { // CurrentMetric
 * //             Name: "AGENTS_ONLINE" || "AGENTS_AVAILABLE" || "AGENTS_ON_CALL" || "AGENTS_NON_PRODUCTIVE" || "AGENTS_AFTER_CONTACT_WORK" || "AGENTS_ERROR" || "AGENTS_STAFFED" || "CONTACTS_IN_QUEUE" || "OLDEST_CONTACT_AGE" || "CONTACTS_SCHEDULED" || "AGENTS_ON_CONTACT" || "SLOTS_ACTIVE" || "SLOTS_AVAILABLE",
 * //             Unit: "SECONDS" || "COUNT" || "PERCENT",
 * //           },
 * //           Value: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   DataSnapshotTime: new Date("TIMESTAMP"),
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetCurrentMetricDataCommandInput - {@link GetCurrentMetricDataCommandInput}
 * @returns {@link GetCurrentMetricDataCommandOutput}
 * @see {@link GetCurrentMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetCurrentMetricDataCommandOutput} for command's `response` shape.
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
export class GetCurrentMetricDataCommand extends $Command
  .classBuilder<
    GetCurrentMetricDataCommandInput,
    GetCurrentMetricDataCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "GetCurrentMetricData", {})
  .n("ConnectClient", "GetCurrentMetricDataCommand")
  .f(void 0, void 0)
  .ser(se_GetCurrentMetricDataCommand)
  .de(de_GetCurrentMetricDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCurrentMetricDataRequest;
      output: GetCurrentMetricDataResponse;
    };
    sdk: {
      input: GetCurrentMetricDataCommandInput;
      output: GetCurrentMetricDataCommandOutput;
    };
  };
}
