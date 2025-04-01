// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { StartReplayRequest, StartReplayResponse } from "../models/models_0";
import { de_StartReplayCommand, se_StartReplayCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartReplayCommand}.
 */
export interface StartReplayCommandInput extends StartReplayRequest {}
/**
 * @public
 *
 * The output of {@link StartReplayCommand}.
 */
export interface StartReplayCommandOutput extends StartReplayResponse, __MetadataBearer {}

/**
 * <p>Starts the specified replay. Events are not necessarily replayed in the exact same order
 *       that they were added to the archive. A replay processes events to replay based on the time in
 *       the event, and replays them using 1 minute intervals. If you specify an
 *         <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time
 *       range, the events are replayed from the first minute of that 20 minute range first. Then the
 *       events from the second minute are replayed. You can use <code>DescribeReplay</code> to
 *       determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code>
 *       indicates the time within the specified time range associated with the last event
 *       replayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, StartReplayCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, StartReplayCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // StartReplayRequest
 *   ReplayName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   EventSourceArn: "STRING_VALUE", // required
 *   EventStartTime: new Date("TIMESTAMP"), // required
 *   EventEndTime: new Date("TIMESTAMP"), // required
 *   Destination: { // ReplayDestination
 *     Arn: "STRING_VALUE", // required
 *     FilterArns: [ // ReplayDestinationFilters
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new StartReplayCommand(input);
 * const response = await client.send(command);
 * // { // StartReplayResponse
 * //   ReplayArn: "STRING_VALUE",
 * //   State: "STARTING" || "RUNNING" || "CANCELLING" || "COMPLETED" || "CANCELLED" || "FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   ReplayStartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartReplayCommandInput - {@link StartReplayCommandInput}
 * @returns {@link StartReplayCommandOutput}
 * @see {@link StartReplayCommandInput} for command's `input` shape.
 * @see {@link StartReplayCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link InvalidEventPatternException} (client fault)
 *  <p>The event pattern is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource you are trying to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 *
 * @public
 */
export class StartReplayCommand extends $Command
  .classBuilder<
    StartReplayCommandInput,
    StartReplayCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "StartReplay", {})
  .n("EventBridgeClient", "StartReplayCommand")
  .f(void 0, void 0)
  .ser(se_StartReplayCommand)
  .de(de_StartReplayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartReplayRequest;
      output: StartReplayResponse;
    };
    sdk: {
      input: StartReplayCommandInput;
      output: StartReplayCommandOutput;
    };
  };
}
