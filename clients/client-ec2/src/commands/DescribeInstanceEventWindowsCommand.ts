// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceEventWindowsRequest, DescribeInstanceEventWindowsResult } from "../models/models_4";
import { de_DescribeInstanceEventWindowsCommand, se_DescribeInstanceEventWindowsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceEventWindowsCommand}.
 */
export interface DescribeInstanceEventWindowsCommandInput extends DescribeInstanceEventWindowsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceEventWindowsCommand}.
 */
export interface DescribeInstanceEventWindowsCommandOutput
  extends DescribeInstanceEventWindowsResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified event windows or all event windows.</p>
 *          <p>If you specify event window IDs, the output includes information for only the specified
 *          event windows. If you specify filters, the output includes information for only those event
 *          windows that meet the filter criteria. If you do not specify event windows IDs or filters,
 *          the output includes information for all event windows, which can affect performance. We
 *          recommend that you use pagination to ensure that the operation returns quickly and
 *          successfully. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceEventWindowsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceEventWindowsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceEventWindowsRequest
 *   DryRun: true || false,
 *   InstanceEventWindowIds: [ // InstanceEventWindowIdSet
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInstanceEventWindowsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceEventWindowsResult
 * //   InstanceEventWindows: [ // InstanceEventWindowSet
 * //     { // InstanceEventWindow
 * //       InstanceEventWindowId: "STRING_VALUE",
 * //       TimeRanges: [ // InstanceEventWindowTimeRangeList
 * //         { // InstanceEventWindowTimeRange
 * //           StartWeekDay: "sunday" || "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday",
 * //           StartHour: Number("int"),
 * //           EndWeekDay: "sunday" || "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday",
 * //           EndHour: Number("int"),
 * //         },
 * //       ],
 * //       Name: "STRING_VALUE",
 * //       CronExpression: "STRING_VALUE",
 * //       AssociationTarget: { // InstanceEventWindowAssociationTarget
 * //         InstanceIds: [ // InstanceIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         DedicatedHostIds: [ // DedicatedHostIdList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       State: "creating" || "deleting" || "active" || "deleted",
 * //       Tags: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstanceEventWindowsCommandInput - {@link DescribeInstanceEventWindowsCommandInput}
 * @returns {@link DescribeInstanceEventWindowsCommandOutput}
 * @see {@link DescribeInstanceEventWindowsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceEventWindowsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeInstanceEventWindowsCommand extends $Command
  .classBuilder<
    DescribeInstanceEventWindowsCommandInput,
    DescribeInstanceEventWindowsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeInstanceEventWindows", {})
  .n("EC2Client", "DescribeInstanceEventWindowsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInstanceEventWindowsCommand)
  .de(de_DescribeInstanceEventWindowsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceEventWindowsRequest;
      output: DescribeInstanceEventWindowsResult;
    };
    sdk: {
      input: DescribeInstanceEventWindowsCommandInput;
      output: DescribeInstanceEventWindowsCommandOutput;
    };
  };
}
