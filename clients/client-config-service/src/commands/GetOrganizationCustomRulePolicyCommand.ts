// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetOrganizationCustomRulePolicyRequest, GetOrganizationCustomRulePolicyResponse } from "../models/models_0";
import { GetOrganizationCustomRulePolicy } from "../schemas/schemas_31_Organization";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOrganizationCustomRulePolicyCommand}.
 */
export interface GetOrganizationCustomRulePolicyCommandInput extends GetOrganizationCustomRulePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetOrganizationCustomRulePolicyCommand}.
 */
export interface GetOrganizationCustomRulePolicyCommandOutput
  extends GetOrganizationCustomRulePolicyResponse,
    __MetadataBearer {}

/**
 * <p>Returns the policy definition containing the logic for your organization Config Custom Policy rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetOrganizationCustomRulePolicyCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetOrganizationCustomRulePolicyCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // GetOrganizationCustomRulePolicyRequest
 *   OrganizationConfigRuleName: "STRING_VALUE", // required
 * };
 * const command = new GetOrganizationCustomRulePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationCustomRulePolicyResponse
 * //   PolicyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOrganizationCustomRulePolicyCommandInput - {@link GetOrganizationCustomRulePolicyCommandInput}
 * @returns {@link GetOrganizationCustomRulePolicyCommandOutput}
 * @see {@link GetOrganizationCustomRulePolicyCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationCustomRulePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class GetOrganizationCustomRulePolicyCommand extends $Command
  .classBuilder<
    GetOrganizationCustomRulePolicyCommandInput,
    GetOrganizationCustomRulePolicyCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "GetOrganizationCustomRulePolicy", {})
  .n("ConfigServiceClient", "GetOrganizationCustomRulePolicyCommand")
  .sc(GetOrganizationCustomRulePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOrganizationCustomRulePolicyRequest;
      output: GetOrganizationCustomRulePolicyResponse;
    };
    sdk: {
      input: GetOrganizationCustomRulePolicyCommandInput;
      output: GetOrganizationCustomRulePolicyCommandOutput;
    };
  };
}
