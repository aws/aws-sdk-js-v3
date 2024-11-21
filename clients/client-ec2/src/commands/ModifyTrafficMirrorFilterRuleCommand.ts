// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyTrafficMirrorFilterRuleRequest, ModifyTrafficMirrorFilterRuleResult } from "../models/models_7";
import { de_ModifyTrafficMirrorFilterRuleCommand, se_ModifyTrafficMirrorFilterRuleCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyTrafficMirrorFilterRuleCommand}.
 */
export interface ModifyTrafficMirrorFilterRuleCommandInput extends ModifyTrafficMirrorFilterRuleRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTrafficMirrorFilterRuleCommand}.
 */
export interface ModifyTrafficMirrorFilterRuleCommandOutput
  extends ModifyTrafficMirrorFilterRuleResult,
    __MetadataBearer {}

/**
 * <p>Modifies the specified Traffic Mirror rule.</p>
 *          <p>
 *             <code>DestinationCidrBlock</code> and <code>SourceCidrBlock</code> must both be an IPv4
 *          range or an IPv6 range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTrafficMirrorFilterRuleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTrafficMirrorFilterRuleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyTrafficMirrorFilterRuleRequest
 *   TrafficMirrorFilterRuleId: "STRING_VALUE", // required
 *   TrafficDirection: "ingress" || "egress",
 *   RuleNumber: Number("int"),
 *   RuleAction: "accept" || "reject",
 *   DestinationPortRange: { // TrafficMirrorPortRangeRequest
 *     FromPort: Number("int"),
 *     ToPort: Number("int"),
 *   },
 *   SourcePortRange: {
 *     FromPort: Number("int"),
 *     ToPort: Number("int"),
 *   },
 *   Protocol: Number("int"),
 *   DestinationCidrBlock: "STRING_VALUE",
 *   SourceCidrBlock: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   RemoveFields: [ // TrafficMirrorFilterRuleFieldList
 *     "destination-port-range" || "source-port-range" || "protocol" || "description",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ModifyTrafficMirrorFilterRuleCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTrafficMirrorFilterRuleResult
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
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyTrafficMirrorFilterRuleCommandInput - {@link ModifyTrafficMirrorFilterRuleCommandInput}
 * @returns {@link ModifyTrafficMirrorFilterRuleCommandOutput}
 * @see {@link ModifyTrafficMirrorFilterRuleCommandInput} for command's `input` shape.
 * @see {@link ModifyTrafficMirrorFilterRuleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyTrafficMirrorFilterRuleCommand extends $Command
  .classBuilder<
    ModifyTrafficMirrorFilterRuleCommandInput,
    ModifyTrafficMirrorFilterRuleCommandOutput,
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
  .s("AmazonEC2", "ModifyTrafficMirrorFilterRule", {})
  .n("EC2Client", "ModifyTrafficMirrorFilterRuleCommand")
  .f(void 0, void 0)
  .ser(se_ModifyTrafficMirrorFilterRuleCommand)
  .de(de_ModifyTrafficMirrorFilterRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTrafficMirrorFilterRuleRequest;
      output: ModifyTrafficMirrorFilterRuleResult;
    };
    sdk: {
      input: ModifyTrafficMirrorFilterRuleCommandInput;
      output: ModifyTrafficMirrorFilterRuleCommandOutput;
    };
  };
}
