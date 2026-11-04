// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetOrganizationCustomRulePolicyRequest,
  GetOrganizationCustomRulePolicyResponse,
} from "../models/models_0";
import { GetOrganizationCustomRulePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetOrganizationCustomRulePolicyCommandOutput extends GetOrganizationCustomRulePolicyResponse, __MetadataBearer {}

/**
 * Returns the policy definition containing the logic for your organization Config Custom Policy rule.
 *
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
 *
 * The Config rule in the request is not valid. Verify that the rule is an organization Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.
 *
 * @throws {@link OrganizationAccessDeniedException} (client fault)
 *
 * For `PutConfigurationAggregator` API, you can see this exception for the following reasons:
 *
 * - No permission to call `EnableAWSServiceAccess` API
 * - The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed. Delete this aggregator and create a new one with the current Amazon Web Services Organization.
 * - The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization. Delete this aggregator and create a new one with the current Amazon Web Services Organization.
 * - You are not a registered delegated administrator for Config with permissions to call `ListDelegatedAdministrators` API. Ensure that the management account registers delagated administrator for Config service principal name before the delegated administrator creates an aggregator.
 *
 * For all `OrganizationConfigRule` and `OrganizationConformancePack` APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class GetOrganizationCustomRulePolicyCommand extends command<GetOrganizationCustomRulePolicyCommandInput, GetOrganizationCustomRulePolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetOrganizationCustomRulePolicy",
  GetOrganizationCustomRulePolicy$
) {
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
