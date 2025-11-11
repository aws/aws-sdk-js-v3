// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceEventWindowRequest, ModifyInstanceEventWindowResult } from "../models/models_7";
import { ModifyInstanceEventWindow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceEventWindowCommand}.
 */
export interface ModifyInstanceEventWindowCommandInput extends ModifyInstanceEventWindowRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceEventWindowCommand}.
 */
export interface ModifyInstanceEventWindowCommandOutput extends ModifyInstanceEventWindowResult, __MetadataBearer {}

/**
 * <p>Modifies the specified event window.</p>
 *          <p>You can define either a set of time ranges or a cron expression when modifying the event
 *          window, but not both.</p>
 *          <p>To modify the targets associated with the event window, use the <a>AssociateInstanceEventWindow</a> and <a>DisassociateInstanceEventWindow</a> API.</p>
 *          <p>If Amazon Web Services has already scheduled an event, modifying an event window won't change the time
 *          of the scheduled event.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceEventWindowCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceEventWindowCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceEventWindowRequest
 *   DryRun: true || false,
 *   Name: "STRING_VALUE",
 *   InstanceEventWindowId: "STRING_VALUE", // required
 *   TimeRanges: [ // InstanceEventWindowTimeRangeRequestSet
 *     { // InstanceEventWindowTimeRangeRequest
 *       StartWeekDay: "sunday" || "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday",
 *       StartHour: Number("int"),
 *       EndWeekDay: "sunday" || "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday",
 *       EndHour: Number("int"),
 *     },
 *   ],
 *   CronExpression: "STRING_VALUE",
 * };
 * const command = new ModifyInstanceEventWindowCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceEventWindowResult
 * //   InstanceEventWindow: { // InstanceEventWindow
 * //     InstanceEventWindowId: "STRING_VALUE",
 * //     TimeRanges: [ // InstanceEventWindowTimeRangeList
 * //       { // InstanceEventWindowTimeRange
 * //         StartWeekDay: "sunday" || "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday",
 * //         StartHour: Number("int"),
 * //         EndWeekDay: "sunday" || "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday",
 * //         EndHour: Number("int"),
 * //       },
 * //     ],
 * //     Name: "STRING_VALUE",
 * //     CronExpression: "STRING_VALUE",
 * //     AssociationTarget: { // InstanceEventWindowAssociationTarget
 * //       InstanceIds: [ // InstanceIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DedicatedHostIds: [ // DedicatedHostIdList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     State: "creating" || "deleting" || "active" || "deleted",
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyInstanceEventWindowCommandInput - {@link ModifyInstanceEventWindowCommandInput}
 * @returns {@link ModifyInstanceEventWindowCommandOutput}
 * @see {@link ModifyInstanceEventWindowCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceEventWindowCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyInstanceEventWindowCommand extends $Command
  .classBuilder<
    ModifyInstanceEventWindowCommandInput,
    ModifyInstanceEventWindowCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyInstanceEventWindow", {})
  .n("EC2Client", "ModifyInstanceEventWindowCommand")
  .sc(ModifyInstanceEventWindow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstanceEventWindowRequest;
      output: ModifyInstanceEventWindowResult;
    };
    sdk: {
      input: ModifyInstanceEventWindowCommandInput;
      output: ModifyInstanceEventWindowCommandOutput;
    };
  };
}
