// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTrafficMirrorFilterRuleRequest, CreateTrafficMirrorFilterRuleResult } from "../models/models_2";
import { de_CreateTrafficMirrorFilterRuleCommand, se_CreateTrafficMirrorFilterRuleCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrafficMirrorFilterRuleCommand}.
 */
export interface CreateTrafficMirrorFilterRuleCommandInput extends CreateTrafficMirrorFilterRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficMirrorFilterRuleCommand}.
 */
export interface CreateTrafficMirrorFilterRuleCommandOutput
  extends CreateTrafficMirrorFilterRuleResult,
    __MetadataBearer {}

/**
 * <p>Creates a Traffic Mirror filter rule.</p>
 *          <p>A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror.</p>
 *          <p>You need the Traffic Mirror filter ID when you create the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorFilterRuleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorFilterRuleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateTrafficMirrorFilterRuleRequest
 *   TrafficMirrorFilterId: "STRING_VALUE", // required
 *   TrafficDirection: "ingress" || "egress", // required
 *   RuleNumber: Number("int"), // required
 *   RuleAction: "accept" || "reject", // required
 *   DestinationPortRange: { // TrafficMirrorPortRangeRequest
 *     FromPort: Number("int"),
 *     ToPort: Number("int"),
 *   },
 *   SourcePortRange: {
 *     FromPort: Number("int"),
 *     ToPort: Number("int"),
 *   },
 *   Protocol: Number("int"),
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   SourceCidrBlock: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateTrafficMirrorFilterRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficMirrorFilterRuleResult
 * //   TrafficMirrorFilterRule: { // TrafficMirrorFilterRule
 * //     TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //     TrafficMirrorFilterId: "STRING_VALUE",
 * //     TrafficDirection: "ingress" || "egress",
 * //     RuleNumber: Number("int"),
 * //     RuleAction: "accept" || "reject",
 * //     Protocol: Number("int"),
 * //     DestinationPortRange: { // TrafficMirrorPortRange
 * //       FromPort: Number("int"),
 * //       ToPort: Number("int"),
 * //     },
 * //     SourcePortRange: {
 * //       FromPort: Number("int"),
 * //       ToPort: Number("int"),
 * //     },
 * //     DestinationCidrBlock: "STRING_VALUE",
 * //     SourceCidrBlock: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTrafficMirrorFilterRuleCommandInput - {@link CreateTrafficMirrorFilterRuleCommandInput}
 * @returns {@link CreateTrafficMirrorFilterRuleCommandOutput}
 * @see {@link CreateTrafficMirrorFilterRuleCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorFilterRuleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CreateTrafficMirrorFilterRuleCommand extends $Command
  .classBuilder<
    CreateTrafficMirrorFilterRuleCommandInput,
    CreateTrafficMirrorFilterRuleCommandOutput,
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
  .s("AmazonEC2", "CreateTrafficMirrorFilterRule", {})
  .n("EC2Client", "CreateTrafficMirrorFilterRuleCommand")
  .f(void 0, void 0)
  .ser(se_CreateTrafficMirrorFilterRuleCommand)
  .de(de_CreateTrafficMirrorFilterRuleCommand)
  .build() {}
