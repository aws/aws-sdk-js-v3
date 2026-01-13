// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  StartSessionsStatisticsAggregationRequest,
  StartSessionsStatisticsAggregationResponse,
} from "../models/models_1";
import { StartSessionsStatisticsAggregation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSessionsStatisticsAggregationCommand}.
 */
export interface StartSessionsStatisticsAggregationCommandInput extends StartSessionsStatisticsAggregationRequest {}
/**
 * @public
 *
 * The output of {@link StartSessionsStatisticsAggregationCommand}.
 */
export interface StartSessionsStatisticsAggregationCommandOutput extends StartSessionsStatisticsAggregationResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous request for getting aggregated statistics about queues and farms.
 *          Get the statistics using the <code>GetSessionsStatisticsAggregation</code> operation. You
 *          can only have one running aggregation for your Deadline Cloud farm. Call the
 *             <code>GetSessionsStatisticsAggregation</code> operation and check the
 *             <code>status</code> field to see if an aggregation is running. Statistics are available
 *          for 1 hour after you call the <code>StartSessionsStatisticsAggregation</code>
 *          operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, StartSessionsStatisticsAggregationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, StartSessionsStatisticsAggregationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // StartSessionsStatisticsAggregationRequest
 *   farmId: "STRING_VALUE", // required
 *   resourceIds: { // SessionsStatisticsResources Union: only one key present
 *     queueIds: [ // QueueIds
 *       "STRING_VALUE",
 *     ],
 *     fleetIds: [ // FleetIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   timezone: "STRING_VALUE",
 *   period: "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY",
 *   groupBy: [ // UsageGroupBy // required
 *     "QUEUE_ID" || "FLEET_ID" || "JOB_ID" || "USER_ID" || "USAGE_TYPE" || "INSTANCE_TYPE" || "LICENSE_PRODUCT",
 *   ],
 *   statistics: [ // UsageStatistics // required
 *     "SUM" || "MIN" || "MAX" || "AVG",
 *   ],
 * };
 * const command = new StartSessionsStatisticsAggregationCommand(input);
 * const response = await client.send(command);
 * // { // StartSessionsStatisticsAggregationResponse
 * //   aggregationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartSessionsStatisticsAggregationCommandInput - {@link StartSessionsStatisticsAggregationCommandInput}
 * @returns {@link StartSessionsStatisticsAggregationCommandOutput}
 * @see {@link StartSessionsStatisticsAggregationCommandInput} for command's `input` shape.
 * @see {@link StartSessionsStatisticsAggregationCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class StartSessionsStatisticsAggregationCommand extends $Command
  .classBuilder<
    StartSessionsStatisticsAggregationCommandInput,
    StartSessionsStatisticsAggregationCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "StartSessionsStatisticsAggregation", {})
  .n("DeadlineClient", "StartSessionsStatisticsAggregationCommand")
  .sc(StartSessionsStatisticsAggregation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSessionsStatisticsAggregationRequest;
      output: StartSessionsStatisticsAggregationResponse;
    };
    sdk: {
      input: StartSessionsStatisticsAggregationCommandInput;
      output: StartSessionsStatisticsAggregationCommandOutput;
    };
  };
}
