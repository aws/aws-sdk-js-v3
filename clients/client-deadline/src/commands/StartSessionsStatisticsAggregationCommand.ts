// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartSessionsStatisticsAggregationRequest,
  StartSessionsStatisticsAggregationResponse,
} from "../models/models_1";
import {
  de_StartSessionsStatisticsAggregationCommand,
  se_StartSessionsStatisticsAggregationCommand,
} from "../protocols/Aws_restJson1";

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
export interface StartSessionsStatisticsAggregationCommandOutput
  extends StartSessionsStatisticsAggregationResponse,
    __MetadataBearer {}

/**
 * <p>Starts an asynchronous request for getting aggregated statistics about queues and farms.
 *          Get the statistics using the <code>GetSessionsStatisticsAggregation</code> operation.
 *          Statistics are available for 1 hour after you call the
 *             <code>StartSessionsStatisticsAggregation</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, StartSessionsStatisticsAggregationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, StartSessionsStatisticsAggregationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "StartSessionsStatisticsAggregation", {})
  .n("DeadlineClient", "StartSessionsStatisticsAggregationCommand")
  .f(void 0, void 0)
  .ser(se_StartSessionsStatisticsAggregationCommand)
  .de(de_StartSessionsStatisticsAggregationCommand)
  .build() {}
