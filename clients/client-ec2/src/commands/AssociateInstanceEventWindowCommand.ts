// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateInstanceEventWindowRequest, AssociateInstanceEventWindowResult } from "../models/models_0";
import { de_AssociateInstanceEventWindowCommand, se_AssociateInstanceEventWindowCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateInstanceEventWindowCommand}.
 */
export interface AssociateInstanceEventWindowCommandInput extends AssociateInstanceEventWindowRequest {}
/**
 * @public
 *
 * The output of {@link AssociateInstanceEventWindowCommand}.
 */
export interface AssociateInstanceEventWindowCommandOutput
  extends AssociateInstanceEventWindowResult,
    __MetadataBearer {}

/**
 * <p>Associates one or more targets with an event window. Only one type of target (instance
 *          IDs, Dedicated Host IDs, or tags) can be specified with an event window.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateInstanceEventWindowCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateInstanceEventWindowCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateInstanceEventWindowRequest
 *   DryRun: true || false,
 *   InstanceEventWindowId: "STRING_VALUE", // required
 *   AssociationTarget: { // InstanceEventWindowAssociationRequest
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
 * const command = new AssociateInstanceEventWindowCommand(input);
 * const response = await client.send(command);
 * // { // AssociateInstanceEventWindowResult
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
 * @param AssociateInstanceEventWindowCommandInput - {@link AssociateInstanceEventWindowCommandInput}
 * @returns {@link AssociateInstanceEventWindowCommandOutput}
 * @see {@link AssociateInstanceEventWindowCommandInput} for command's `input` shape.
 * @see {@link AssociateInstanceEventWindowCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AssociateInstanceEventWindowCommand extends $Command
  .classBuilder<
    AssociateInstanceEventWindowCommandInput,
    AssociateInstanceEventWindowCommandOutput,
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
  .s("AmazonEC2", "AssociateInstanceEventWindow", {})
  .n("EC2Client", "AssociateInstanceEventWindowCommand")
  .f(void 0, void 0)
  .ser(se_AssociateInstanceEventWindowCommand)
  .de(de_AssociateInstanceEventWindowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateInstanceEventWindowRequest;
      output: AssociateInstanceEventWindowResult;
    };
    sdk: {
      input: AssociateInstanceEventWindowCommandInput;
      output: AssociateInstanceEventWindowCommandOutput;
    };
  };
}
