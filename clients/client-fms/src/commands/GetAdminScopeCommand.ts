// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetAdminScopeRequest, GetAdminScopeResponse } from "../models/models_0";
import { de_GetAdminScopeCommand, se_GetAdminScopeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAdminScopeCommand}.
 */
export interface GetAdminScopeCommandInput extends GetAdminScopeRequest {}
/**
 * @public
 *
 * The output of {@link GetAdminScopeCommand}.
 */
export interface GetAdminScopeCommandOutput extends GetAdminScopeResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified account's administrative scope. The administrative scope defines the resources that an Firewall Manager administrator can manage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetAdminScopeCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetAdminScopeCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FMSClient(config);
 * const input = { // GetAdminScopeRequest
 *   AdminAccount: "STRING_VALUE", // required
 * };
 * const command = new GetAdminScopeCommand(input);
 * const response = await client.send(command);
 * // { // GetAdminScopeResponse
 * //   AdminScope: { // AdminScope
 * //     AccountScope: { // AccountScope
 * //       Accounts: [ // AccountIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       AllAccountsEnabled: true || false,
 * //       ExcludeSpecifiedAccounts: true || false,
 * //     },
 * //     OrganizationalUnitScope: { // OrganizationalUnitScope
 * //       OrganizationalUnits: [ // OrganizationalUnitIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       AllOrganizationalUnitsEnabled: true || false,
 * //       ExcludeSpecifiedOrganizationalUnits: true || false,
 * //     },
 * //     RegionScope: { // RegionScope
 * //       Regions: [ // AWSRegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       AllRegionsEnabled: true || false,
 * //     },
 * //     PolicyTypeScope: { // PolicyTypeScope
 * //       PolicyTypes: [ // SecurityServiceTypeList
 * //         "WAF" || "WAFV2" || "SHIELD_ADVANCED" || "SECURITY_GROUPS_COMMON" || "SECURITY_GROUPS_CONTENT_AUDIT" || "SECURITY_GROUPS_USAGE_AUDIT" || "NETWORK_FIREWALL" || "DNS_FIREWALL" || "THIRD_PARTY_FIREWALL" || "IMPORT_NETWORK_FIREWALL" || "NETWORK_ACL_COMMON",
 * //       ],
 * //       AllPolicyTypesEnabled: true || false,
 * //     },
 * //   },
 * //   Status: "ONBOARDING" || "ONBOARDING_COMPLETE" || "OFFBOARDING" || "OFFBOARDING_COMPLETE",
 * // };
 *
 * ```
 *
 * @param GetAdminScopeCommandInput - {@link GetAdminScopeCommandInput}
 * @returns {@link GetAdminScopeCommandOutput}
 * @see {@link GetAdminScopeCommandInput} for command's `input` shape.
 * @see {@link GetAdminScopeCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 * @public
 */
export class GetAdminScopeCommand extends $Command
  .classBuilder<
    GetAdminScopeCommandInput,
    GetAdminScopeCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFMS_20180101", "GetAdminScope", {})
  .n("FMSClient", "GetAdminScopeCommand")
  .f(void 0, void 0)
  .ser(se_GetAdminScopeCommand)
  .de(de_GetAdminScopeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAdminScopeRequest;
      output: GetAdminScopeResponse;
    };
    sdk: {
      input: GetAdminScopeCommandInput;
      output: GetAdminScopeCommandOutput;
    };
  };
}
