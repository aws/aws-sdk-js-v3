// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTrafficMirrorFilterRuleRequest, DeleteTrafficMirrorFilterRuleResult } from "../models/models_3";
import { de_DeleteTrafficMirrorFilterRuleCommand, se_DeleteTrafficMirrorFilterRuleCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrafficMirrorFilterRuleCommand}.
 */
export interface DeleteTrafficMirrorFilterRuleCommandInput extends DeleteTrafficMirrorFilterRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrafficMirrorFilterRuleCommand}.
 */
export interface DeleteTrafficMirrorFilterRuleCommandOutput
  extends DeleteTrafficMirrorFilterRuleResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified Traffic Mirror rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTrafficMirrorFilterRuleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTrafficMirrorFilterRuleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTrafficMirrorFilterRuleRequest
 *   TrafficMirrorFilterRuleId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTrafficMirrorFilterRuleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTrafficMirrorFilterRuleResult
 * //   TrafficMirrorFilterRuleId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTrafficMirrorFilterRuleCommandInput - {@link DeleteTrafficMirrorFilterRuleCommandInput}
 * @returns {@link DeleteTrafficMirrorFilterRuleCommandOutput}
 * @see {@link DeleteTrafficMirrorFilterRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficMirrorFilterRuleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTrafficMirrorFilterRuleCommand extends $Command
  .classBuilder<
    DeleteTrafficMirrorFilterRuleCommandInput,
    DeleteTrafficMirrorFilterRuleCommandOutput,
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
  .s("AmazonEC2", "DeleteTrafficMirrorFilterRule", {})
  .n("EC2Client", "DeleteTrafficMirrorFilterRuleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTrafficMirrorFilterRuleCommand)
  .de(de_DeleteTrafficMirrorFilterRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrafficMirrorFilterRuleRequest;
      output: DeleteTrafficMirrorFilterRuleResult;
    };
    sdk: {
      input: DeleteTrafficMirrorFilterRuleCommandInput;
      output: DeleteTrafficMirrorFilterRuleCommandOutput;
    };
  };
}
