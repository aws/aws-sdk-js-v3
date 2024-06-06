// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSpotFleetRequestHistoryRequest, DescribeSpotFleetRequestHistoryResponse } from "../models/models_4";
import {
  de_DescribeSpotFleetRequestHistoryCommand,
  se_DescribeSpotFleetRequestHistoryCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSpotFleetRequestHistoryCommand}.
 */
export interface DescribeSpotFleetRequestHistoryCommandInput extends DescribeSpotFleetRequestHistoryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpotFleetRequestHistoryCommand}.
 */
export interface DescribeSpotFleetRequestHistoryCommandOutput
  extends DescribeSpotFleetRequestHistoryResponse,
    __MetadataBearer {}

/**
 * <p>Describes the events for the specified Spot Fleet request during the specified
 *             time.</p>
 *          <p>Spot Fleet events are delayed by up to 30 seconds before they can be described. This
 *             ensures that you can query by the last evaluated time and not miss a recorded event.
 *             Spot Fleet events are available for 48 hours.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/fleet-monitor.html">Monitor fleet events using Amazon
 *                 EventBridge</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotFleetRequestHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotFleetRequestHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSpotFleetRequestHistoryRequest
 *   DryRun: true || false,
 *   EventType: "instanceChange" || "fleetRequestChange" || "error" || "information",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SpotFleetRequestId: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new DescribeSpotFleetRequestHistoryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSpotFleetRequestHistoryResponse
 * //   HistoryRecords: [ // HistoryRecords
 * //     { // HistoryRecord
 * //       EventInformation: { // EventInformation
 * //         EventDescription: "STRING_VALUE",
 * //         EventSubType: "STRING_VALUE",
 * //         InstanceId: "STRING_VALUE",
 * //       },
 * //       EventType: "instanceChange" || "fleetRequestChange" || "error" || "information",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   LastEvaluatedTime: new Date("TIMESTAMP"),
 * //   NextToken: "STRING_VALUE",
 * //   SpotFleetRequestId: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeSpotFleetRequestHistoryCommandInput - {@link DescribeSpotFleetRequestHistoryCommandInput}
 * @returns {@link DescribeSpotFleetRequestHistoryCommandOutput}
 * @see {@link DescribeSpotFleetRequestHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotFleetRequestHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe Spot fleet history
 * ```javascript
 * // This example returns the history for the specified Spot fleet starting at the specified time.
 * const input = {
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE",
 *   "StartTime": "2015-05-26T00:00:00Z"
 * };
 * const command = new DescribeSpotFleetRequestHistoryCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "HistoryRecords": [
 *     {
 *       "EventInformation": {
 *         "EventSubType": "submitted"
 *       },
 *       "EventType": "fleetRequestChange",
 *       "Timestamp": "2015-05-26T23:17:20.697Z"
 *     },
 *     {
 *       "EventInformation": {
 *         "EventSubType": "active"
 *       },
 *       "EventType": "fleetRequestChange",
 *       "Timestamp": "2015-05-26T23:17:20.873Z"
 *     },
 *     {
 *       "EventInformation": {
 *         "EventSubType": "launched",
 *         "InstanceId": "i-1234567890abcdef0"
 *       },
 *       "EventType": "instanceChange",
 *       "Timestamp": "2015-05-26T23:21:21.712Z"
 *     },
 *     {
 *       "EventInformation": {
 *         "EventSubType": "launched",
 *         "InstanceId": "i-1234567890abcdef1"
 *       },
 *       "EventType": "instanceChange",
 *       "Timestamp": "2015-05-26T23:21:21.816Z"
 *     }
 *   ],
 *   "NextToken": "CpHNsscimcV5oH7bSbub03CI2Qms5+ypNpNm+53MNlR0YcXAkp0xFlfKf91yVxSExmbtma3awYxMFzNA663ZskT0AHtJ6TCb2Z8bQC2EnZgyELbymtWPfpZ1ZbauVg+P+TfGlWxWWB/Vr5dk5d4LfdgA/DRAHUrYgxzrEXAMPLE=",
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE",
 *   "StartTime": "2015-05-26T00:00:00Z"
 * }
 * *\/
 * // example id: ec2-describe-spot-fleet-request-history-1
 * ```
 *
 */
export class DescribeSpotFleetRequestHistoryCommand extends $Command
  .classBuilder<
    DescribeSpotFleetRequestHistoryCommandInput,
    DescribeSpotFleetRequestHistoryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeSpotFleetRequestHistory", {})
  .n("EC2Client", "DescribeSpotFleetRequestHistoryCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSpotFleetRequestHistoryCommand)
  .de(de_DescribeSpotFleetRequestHistoryCommand)
  .build() {}
