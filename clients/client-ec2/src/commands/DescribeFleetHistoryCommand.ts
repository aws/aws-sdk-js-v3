// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeFleetHistoryRequest, DescribeFleetHistoryResult } from "../models/models_3";
import { DescribeFleetHistory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetHistoryCommand}.
 */
export interface DescribeFleetHistoryCommandInput extends DescribeFleetHistoryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetHistoryCommand}.
 */
export interface DescribeFleetHistoryCommandOutput extends DescribeFleetHistoryResult, __MetadataBearer {}

/**
 * <p>Describes the events for the specified EC2 Fleet during the specified time.</p>
 *          <p>EC2 Fleet events are delayed by up to 30 seconds before they can be described. This ensures
 *          that you can query by the last evaluated time and not miss a recorded event. EC2 Fleet events
 *          are available for 48 hours.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/fleet-monitor.html">Monitor fleet events using Amazon EventBridge</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFleetHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFleetHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeFleetHistoryRequest
 *   DryRun: true || false,
 *   EventType: "instance-change" || "fleet-change" || "service-error",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   FleetId: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new DescribeFleetHistoryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetHistoryResult
 * //   HistoryRecords: [ // HistoryRecordSet
 * //     { // HistoryRecordEntry
 * //       EventInformation: { // EventInformation
 * //         EventDescription: "STRING_VALUE",
 * //         EventSubType: "STRING_VALUE",
 * //         InstanceId: "STRING_VALUE",
 * //       },
 * //       EventType: "instance-change" || "fleet-change" || "service-error",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   LastEvaluatedTime: new Date("TIMESTAMP"),
 * //   NextToken: "STRING_VALUE",
 * //   FleetId: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeFleetHistoryCommandInput - {@link DescribeFleetHistoryCommandInput}
 * @returns {@link DescribeFleetHistoryCommandOutput}
 * @see {@link DescribeFleetHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeFleetHistoryCommand extends $Command
  .classBuilder<
    DescribeFleetHistoryCommandInput,
    DescribeFleetHistoryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeFleetHistory", {})
  .n("EC2Client", "DescribeFleetHistoryCommand")
  .sc(DescribeFleetHistory$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetHistoryRequest;
      output: DescribeFleetHistoryResult;
    };
    sdk: {
      input: DescribeFleetHistoryCommandInput;
      output: DescribeFleetHistoryCommandOutput;
    };
  };
}
