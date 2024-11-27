// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteOrganizationConfigRuleRequest } from "../models/models_0";
import {
  de_DeleteOrganizationConfigRuleCommand,
  se_DeleteOrganizationConfigRuleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOrganizationConfigRuleCommand}.
 */
export interface DeleteOrganizationConfigRuleCommandInput extends DeleteOrganizationConfigRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOrganizationConfigRuleCommand}.
 */
export interface DeleteOrganizationConfigRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified organization Config rule and all of its evaluation results from all member accounts in that organization. </p>
 *          <p>Only a management account and a delegated administrator account can delete an organization Config rule.
 * 		When calling this API with a delegated administrator, you must ensure Organizations
 * 			<code>ListDelegatedAdministrator</code> permissions are added.</p>
 *          <p>Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete.
 * 			You cannot update a rule while it is in this state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteOrganizationConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteOrganizationConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteOrganizationConfigRuleRequest
 *   OrganizationConfigRuleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteOrganizationConfigRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOrganizationConfigRuleCommandInput - {@link DeleteOrganizationConfigRuleCommandInput}
 * @returns {@link DeleteOrganizationConfigRuleCommandOutput}
 * @see {@link DeleteOrganizationConfigRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchOrganizationConfigRuleException} (client fault)
 *  <p>The Config rule in the request is not valid. Verify that the rule is an organization Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link OrganizationAccessDeniedException} (client fault)
 *  <p>For <code>PutConfigurationAggregator</code> API, you can see this exception for the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>No permission to call <code>EnableAWSServiceAccess</code> API</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>You are not a registered delegated administrator for Config with permissions to call <code>ListDelegatedAdministrators</code> API.
 * 			Ensure that the management account registers delagated administrator for Config service principal name before the delegated administrator creates an aggregator.</p>
 *             </li>
 *          </ul>
 *          <p>For all <code>OrganizationConfigRule</code> and <code>OrganizationConformancePack</code> APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.</p>
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
export class DeleteOrganizationConfigRuleCommand extends $Command
  .classBuilder<
    DeleteOrganizationConfigRuleCommandInput,
    DeleteOrganizationConfigRuleCommandOutput,
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
  .s("StarlingDoveService", "DeleteOrganizationConfigRule", {})
  .n("ConfigServiceClient", "DeleteOrganizationConfigRuleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOrganizationConfigRuleCommand)
  .de(de_DeleteOrganizationConfigRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOrganizationConfigRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteOrganizationConfigRuleCommandInput;
      output: DeleteOrganizationConfigRuleCommandOutput;
    };
  };
}
