// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeReplayRequest, DescribeReplayResponse } from "../models/models_0";
import { DescribeReplay } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplayCommand}.
 */
export interface DescribeReplayCommandInput extends DescribeReplayRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReplayCommand}.
 */
export interface DescribeReplayCommandOutput extends DescribeReplayResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the
 *       progress of a running replay. A replay processes events to replay based on the time in the
 *       event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and
 *       specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20
 *       minute time range, the events are replayed from the first minute of that 20 minute range
 *       first. Then the events from the second minute are replayed. You can use
 *         <code>DescribeReplay</code> to determine the progress of a replay. The value returned for
 *         <code>EventLastReplayedTime</code> indicates the time within the specified time range
 *       associated with the last event replayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribeReplayCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribeReplayCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // DescribeReplayRequest
 *   ReplayName: "STRING_VALUE", // required
 * };
 * const command = new DescribeReplayCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplayResponse
 * //   ReplayName: "STRING_VALUE",
 * //   ReplayArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   State: "STARTING" || "RUNNING" || "CANCELLING" || "COMPLETED" || "CANCELLED" || "FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   EventSourceArn: "STRING_VALUE",
 * //   Destination: { // ReplayDestination
 * //     Arn: "STRING_VALUE", // required
 * //     FilterArns: [ // ReplayDestinationFilters
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   EventStartTime: new Date("TIMESTAMP"),
 * //   EventEndTime: new Date("TIMESTAMP"),
 * //   EventLastReplayedTime: new Date("TIMESTAMP"),
 * //   ReplayStartTime: new Date("TIMESTAMP"),
 * //   ReplayEndTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeReplayCommandInput - {@link DescribeReplayCommandInput}
 * @returns {@link DescribeReplayCommandOutput}
 * @see {@link DescribeReplayCommandInput} for command's `input` shape.
 * @see {@link DescribeReplayCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class DescribeReplayCommand extends $Command
  .classBuilder<
    DescribeReplayCommandInput,
    DescribeReplayCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "DescribeReplay", {})
  .n("CloudWatchEventsClient", "DescribeReplayCommand")
  .sc(DescribeReplay)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplayRequest;
      output: DescribeReplayResponse;
    };
    sdk: {
      input: DescribeReplayCommandInput;
      output: DescribeReplayCommandOutput;
    };
  };
}
