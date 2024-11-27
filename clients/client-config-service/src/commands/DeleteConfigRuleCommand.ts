// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfigRuleRequest } from "../models/models_0";
import { de_DeleteConfigRuleCommand, se_DeleteConfigRuleCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigRuleCommand}.
 */
export interface DeleteConfigRuleCommandInput extends DeleteConfigRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigRuleCommand}.
 */
export interface DeleteConfigRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified Config rule and all of its evaluation
 * 			results.</p>
 *          <p>Config sets the state of a rule to <code>DELETING</code>
 * 			until the deletion is complete. You cannot update a rule while it is
 * 			in this state. If you make a <code>PutConfigRule</code> or
 * 				<code>DeleteConfigRule</code> request for the rule, you will
 * 			receive a <code>ResourceInUseException</code>.</p>
 *          <p>You can check the state of a rule by using the
 * 				<code>DescribeConfigRules</code> request.</p>
 *          <note>
 *             <p>
 *                <b>Recommendation: Stop recording resource compliance before deleting rules</b>
 *             </p>
 *             <p>It is highly recommended that you stop recording for the <code>AWS::Config::ResourceCompliance</code> resource type before you delete rules in your account.
 * 				Deleting rules creates CIs for <code>AWS::Config::ResourceCompliance</code> and can affect your Config <a href="https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html">configuration recorder</a> costs.
 *
 * 				If you are deleting rules which evaluate a large number of resource types,
 * 				this can lead to a spike in the number of CIs recorded.</p>
 *             <p>Best practice:</p>
 *             <ol>
 *                <li>
 *                   <p>Stop recording <code>AWS::Config::ResourceCompliance</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>Delete rule(s)</p>
 *                </li>
 *                <li>
 *                   <p>Turn on recording for <code>AWS::Config::ResourceCompliance</code>
 *                   </p>
 *                </li>
 *             </ol>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteConfigRuleRequest
 *   ConfigRuleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfigRuleCommandInput - {@link DeleteConfigRuleCommandInput}
 * @returns {@link DeleteConfigRuleCommandOutput}
 * @see {@link DeleteConfigRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchConfigRuleException} (client fault)
 *  <p>The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>You see this exception in the following cases: </p>
 *          <ul>
 *             <li>
 *                <p>For DeleteConfigRule, Config is deleting this rule. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, a remediation action is associated with the rule and Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigOrganizationRule, organization Config rule deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteOrganizationConfigRule, organization Config rule creation is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class DeleteConfigRuleCommand extends $Command
  .classBuilder<
    DeleteConfigRuleCommandInput,
    DeleteConfigRuleCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "DeleteConfigRule", {})
  .n("ConfigServiceClient", "DeleteConfigRuleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfigRuleCommand)
  .de(de_DeleteConfigRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfigRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfigRuleCommandInput;
      output: DeleteConfigRuleCommandOutput;
    };
  };
}
