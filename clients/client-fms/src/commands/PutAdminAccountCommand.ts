// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutAdminAccountRequest } from "../models/models_0";
import { PutAdminAccount } from "../schemas/schemas_4_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAdminAccountCommand}.
 */
export interface PutAdminAccountCommandInput extends PutAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link PutAdminAccountCommand}.
 */
export interface PutAdminAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see
 *         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // PutAdminAccountRequest
 *   AdminAccount: "STRING_VALUE", // required
 *   AdminScope: { // AdminScope
 *     AccountScope: { // AccountScope
 *       Accounts: [ // AccountIdList
 *         "STRING_VALUE",
 *       ],
 *       AllAccountsEnabled: true || false,
 *       ExcludeSpecifiedAccounts: true || false,
 *     },
 *     OrganizationalUnitScope: { // OrganizationalUnitScope
 *       OrganizationalUnits: [ // OrganizationalUnitIdList
 *         "STRING_VALUE",
 *       ],
 *       AllOrganizationalUnitsEnabled: true || false,
 *       ExcludeSpecifiedOrganizationalUnits: true || false,
 *     },
 *     RegionScope: { // RegionScope
 *       Regions: [ // AWSRegionList
 *         "STRING_VALUE",
 *       ],
 *       AllRegionsEnabled: true || false,
 *     },
 *     PolicyTypeScope: { // PolicyTypeScope
 *       PolicyTypes: [ // SecurityServiceTypeList
 *         "WAF" || "WAFV2" || "SHIELD_ADVANCED" || "SECURITY_GROUPS_COMMON" || "SECURITY_GROUPS_CONTENT_AUDIT" || "SECURITY_GROUPS_USAGE_AUDIT" || "NETWORK_FIREWALL" || "DNS_FIREWALL" || "THIRD_PARTY_FIREWALL" || "IMPORT_NETWORK_FIREWALL" || "NETWORK_ACL_COMMON",
 *       ],
 *       AllPolicyTypesEnabled: true || false,
 *     },
 *   },
 * };
 * const command = new PutAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAdminAccountCommandInput - {@link PutAdminAccountCommandInput}
 * @returns {@link PutAdminAccountCommandOutput}
 * @see {@link PutAdminAccountCommandInput} for command's `input` shape.
 * @see {@link PutAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an Amazon Web Services account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 *
 * @public
 */
export class PutAdminAccountCommand extends $Command
  .classBuilder<
    PutAdminAccountCommandInput,
    PutAdminAccountCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "PutAdminAccount", {})
  .n("FMSClient", "PutAdminAccountCommand")
  .sc(PutAdminAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAdminAccountRequest;
      output: {};
    };
    sdk: {
      input: PutAdminAccountCommandInput;
      output: PutAdminAccountCommandOutput;
    };
  };
}
