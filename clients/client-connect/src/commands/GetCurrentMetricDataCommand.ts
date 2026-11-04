// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCurrentMetricDataRequest, GetCurrentMetricDataResponse } from "../models/models_2";
import { GetCurrentMetricData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the real-time metric data from the specified Connect Customer instance.
 *
 * For a description of each metric, see [Metrics definitions](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html) in the *Connect Customer Administrator Guide*.
 *
 * > **Note:**
 * >
 * > When you make a successful API request, you can expect the following metric values in the response:
 * >
 * > 1. **Metric value is null**: The calculation cannot be performed due to divide by zero or insufficient data
 * > 2. **Metric value is a number (including 0) of defined type**: The number provided is the calculation result
 * > 3. **MetricResult list is empty**: The request cannot find any data in the system
 * >
 * > The following guidelines can help you work with the API:
 * >
 * > - Each dimension in the metric response must contain a value
 * > - Each item in MetricResult must include all requested metrics
 * > - If the response is slow due to large result sets, try these approaches:
 * >
 * >   - Add filters to reduce the amount of data returned
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetCurrentMetricDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetCurrentMetricDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
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
 *     AgentStatuses: [ // AgentStatuses
 *       "STRING_VALUE",
 *     ],
 *     Subtypes: [ // Subtypes
 *       "STRING_VALUE",
 *     ],
 *     ValidationTestTypes: [ // ValidationTestTypes
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Groupings: [ // Groupings
 *     "QUEUE" || "CHANNEL" || "ROUTING_PROFILE" || "ROUTING_STEP_EXPRESSION" || "AGENT_STATUS" || "SUBTYPE" || "VALIDATION_TEST_TYPE",
 *   ],
 *   CurrentMetrics: [ // CurrentMetrics // required
 *     { // CurrentMetric
 *       Name: "AGENTS_ONLINE" || "AGENTS_AVAILABLE" || "AGENTS_ON_CALL" || "AGENTS_NON_PRODUCTIVE" || "AGENTS_AFTER_CONTACT_WORK" || "AGENTS_ERROR" || "AGENTS_STAFFED" || "CONTACTS_IN_QUEUE" || "OLDEST_CONTACT_AGE" || "CONTACTS_SCHEDULED" || "AGENTS_ON_CONTACT" || "SLOTS_ACTIVE" || "SLOTS_AVAILABLE" || "ESTIMATED_WAIT_TIME",
 *       MetricId: "STRING_VALUE",
 *       Unit: "SECONDS" || "COUNT" || "PERCENT",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortCriteria: [ // CurrentMetricSortCriteriaMaxOne
 *     { // CurrentMetricSortCriteria
 *       SortByMetric: "AGENTS_ONLINE" || "AGENTS_AVAILABLE" || "AGENTS_ON_CALL" || "AGENTS_NON_PRODUCTIVE" || "AGENTS_AFTER_CONTACT_WORK" || "AGENTS_ERROR" || "AGENTS_STAFFED" || "CONTACTS_IN_QUEUE" || "OLDEST_CONTACT_AGE" || "CONTACTS_SCHEDULED" || "AGENTS_ON_CONTACT" || "SLOTS_ACTIVE" || "SLOTS_AVAILABLE" || "ESTIMATED_WAIT_TIME",
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
 * //         AgentStatus: { // AgentStatusIdentifier
 * //           Arn: "STRING_VALUE",
 * //           Id: "STRING_VALUE",
 * //         },
 * //         Subtype: "STRING_VALUE",
 * //         ValidationTestType: "STRING_VALUE",
 * //       },
 * //       Collections: [ // CurrentMetricDataCollections
 * //         { // CurrentMetricData
 * //           Metric: { // CurrentMetric
 * //             Name: "AGENTS_ONLINE" || "AGENTS_AVAILABLE" || "AGENTS_ON_CALL" || "AGENTS_NON_PRODUCTIVE" || "AGENTS_AFTER_CONTACT_WORK" || "AGENTS_ERROR" || "AGENTS_STAFFED" || "CONTACTS_IN_QUEUE" || "OLDEST_CONTACT_AGE" || "CONTACTS_SCHEDULED" || "AGENTS_ON_CONTACT" || "SLOTS_ACTIVE" || "SLOTS_AVAILABLE" || "ESTIMATED_WAIT_TIME",
 * //             MetricId: "STRING_VALUE",
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
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class GetCurrentMetricDataCommand extends command<GetCurrentMetricDataCommandInput, GetCurrentMetricDataCommandOutput>(
  _ep0,
  _mw0,
  "GetCurrentMetricData",
  GetCurrentMetricData$
) {
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
