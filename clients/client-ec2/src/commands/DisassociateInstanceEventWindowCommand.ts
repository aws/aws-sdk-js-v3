// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateInstanceEventWindowRequest, DisassociateInstanceEventWindowResult } from "../models/models_5";
import { DisassociateInstanceEventWindow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateInstanceEventWindowCommand}.
 */
export interface DisassociateInstanceEventWindowCommandInput extends DisassociateInstanceEventWindowRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateInstanceEventWindowCommand}.
 */
export interface DisassociateInstanceEventWindowCommandOutput
  extends DisassociateInstanceEventWindowResult,
    __MetadataBearer {}

/**
 * <p>Disassociates one or more targets from an event window.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateInstanceEventWindowCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateInstanceEventWindowCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateInstanceEventWindowRequest
 *   DryRun: true || false,
 *   InstanceEventWindowId: "STRING_VALUE", // required
 *   AssociationTarget: { // InstanceEventWindowDisassociationRequest
 *     InstanceIds: [ // InstanceIdList
 *       "STRING_VALUE",
 *     ],
 *     InstanceTags: [ // TagList
 *       { // Tag
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     DedicatedHostIds: [ // DedicatedHostIdList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new DisassociateInstanceEventWindowCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateInstanceEventWindowResult
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
 * @param DisassociateInstanceEventWindowCommandInput - {@link DisassociateInstanceEventWindowCommandInput}
 * @returns {@link DisassociateInstanceEventWindowCommandOutput}
 * @see {@link DisassociateInstanceEventWindowCommandInput} for command's `input` shape.
 * @see {@link DisassociateInstanceEventWindowCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateInstanceEventWindowCommand extends $Command
  .classBuilder<
    DisassociateInstanceEventWindowCommandInput,
    DisassociateInstanceEventWindowCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisassociateInstanceEventWindow", {})
  .n("EC2Client", "DisassociateInstanceEventWindowCommand")
  .sc(DisassociateInstanceEventWindow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateInstanceEventWindowRequest;
      output: DisassociateInstanceEventWindowResult;
    };
    sdk: {
      input: DisassociateInstanceEventWindowCommandInput;
      output: DisassociateInstanceEventWindowCommandOutput;
    };
  };
}
