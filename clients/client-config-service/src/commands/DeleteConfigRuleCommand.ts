// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteConfigRuleRequest } from "../models/models_0";
import { DeleteConfigRule$ } from "../schemas/schemas_0";

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
 *                <b>Recommendation: Consider excluding the <code>AWS::Config::ResourceCompliance</code> resource type from recording before deleting rules</b>
 *             </p>
 *             <p>Deleting rules creates configuration items (CIs) for <code>AWS::Config::ResourceCompliance</code>
 * 				that can affect your costs for the configuration recorder. If you are deleting rules which evaluate a large number of resource types,
 * 				this can lead to a spike in the number of CIs recorded.</p>
 *             <p>To avoid the associated costs, you can opt to disable recording
 * 				for the <code>AWS::Config::ResourceCompliance</code> resource type before deleting rules, and re-enable recording after the rules have been deleted.</p>
 *             <p>However, since deleting rules is an asynchronous process, it might take an hour or more to complete. During the time
 * 				when recording is disabled for <code>AWS::Config::ResourceCompliance</code>, rule evaluations will not be recorded in the associated resource’s history.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DeleteConfigRule", {})
  .n("ConfigServiceClient", "DeleteConfigRuleCommand")
  .sc(DeleteConfigRule$)
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
