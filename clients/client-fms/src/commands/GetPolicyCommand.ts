// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import type { GetPolicyRequest, GetPolicyResponse } from "../models/models_0";
import { GetPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPolicyCommand}.
 */
export interface GetPolicyCommandInput extends GetPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicyCommand}.
 */
export interface GetPolicyCommandOutput extends GetPolicyResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified Firewall Manager policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetPolicyCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetPolicyCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // GetPolicyRequest
 *   PolicyId: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyResponse
 * //   Policy: { // Policy
 * //     PolicyId: "STRING_VALUE",
 * //     PolicyName: "STRING_VALUE", // required
 * //     PolicyUpdateToken: "STRING_VALUE",
 * //     SecurityServicePolicyData: { // SecurityServicePolicyData
 * //       Type: "WAF" || "WAFV2" || "SHIELD_ADVANCED" || "SECURITY_GROUPS_COMMON" || "SECURITY_GROUPS_CONTENT_AUDIT" || "SECURITY_GROUPS_USAGE_AUDIT" || "NETWORK_FIREWALL" || "DNS_FIREWALL" || "THIRD_PARTY_FIREWALL" || "IMPORT_NETWORK_FIREWALL" || "NETWORK_ACL_COMMON", // required
 * //       ManagedServiceData: "STRING_VALUE",
 * //       PolicyOption: { // PolicyOption
 * //         NetworkFirewallPolicy: { // NetworkFirewallPolicy
 * //           FirewallDeploymentModel: "CENTRALIZED" || "DISTRIBUTED",
 * //         },
 * //         ThirdPartyFirewallPolicy: { // ThirdPartyFirewallPolicy
 * //           FirewallDeploymentModel: "CENTRALIZED" || "DISTRIBUTED",
 * //         },
 * //         NetworkAclCommonPolicy: { // NetworkAclCommonPolicy
 * //           NetworkAclEntrySet: { // NetworkAclEntrySet
 * //             FirstEntries: [ // NetworkAclEntries
 * //               { // NetworkAclEntry
 * //                 IcmpTypeCode: { // NetworkAclIcmpTypeCode
 * //                   Code: Number("int"),
 * //                   Type: Number("int"),
 * //                 },
 * //                 Protocol: "STRING_VALUE", // required
 * //                 PortRange: { // NetworkAclPortRange
 * //                   From: Number("int"),
 * //                   To: Number("int"),
 * //                 },
 * //                 CidrBlock: "STRING_VALUE",
 * //                 Ipv6CidrBlock: "STRING_VALUE",
 * //                 RuleAction: "allow" || "deny", // required
 * //                 Egress: true || false, // required
 * //               },
 * //             ],
 * //             ForceRemediateForFirstEntries: true || false, // required
 * //             LastEntries: [
 * //               {
 * //                 IcmpTypeCode: {
 * //                   Code: Number("int"),
 * //                   Type: Number("int"),
 * //                 },
 * //                 Protocol: "STRING_VALUE", // required
 * //                 PortRange: {
 * //                   From: Number("int"),
 * //                   To: Number("int"),
 * //                 },
 * //                 CidrBlock: "STRING_VALUE",
 * //                 Ipv6CidrBlock: "STRING_VALUE",
 * //                 RuleAction: "allow" || "deny", // required
 * //                 Egress: true || false, // required
 * //               },
 * //             ],
 * //             ForceRemediateForLastEntries: true || false, // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     ResourceType: "STRING_VALUE", // required
 * //     ResourceTypeList: [ // ResourceTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     ResourceTags: [ // ResourceTags
 * //       { // ResourceTag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ExcludeResourceTags: true || false, // required
 * //     RemediationEnabled: true || false, // required
 * //     DeleteUnusedFMManagedResources: true || false,
 * //     IncludeMap: { // CustomerPolicyScopeMap
 * //       "<keys>": [ // CustomerPolicyScopeIdList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ExcludeMap: {
 * //       "<keys>": [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ResourceSetIds: [ // ResourceSetIds
 * //       "STRING_VALUE",
 * //     ],
 * //     PolicyDescription: "STRING_VALUE",
 * //     PolicyStatus: "ACTIVE" || "OUT_OF_ADMIN_SCOPE",
 * //     ResourceTagLogicalOperator: "AND" || "OR",
 * //   },
 * //   PolicyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPolicyCommandInput - {@link GetPolicyCommandInput}
 * @returns {@link GetPolicyCommandOutput}
 * @see {@link GetPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPolicyCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>The value of the <code>Type</code> parameter is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 *
 * @public
 */
export class GetPolicyCommand extends $Command
  .classBuilder<
    GetPolicyCommandInput,
    GetPolicyCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "GetPolicy", {})
  .n("FMSClient", "GetPolicyCommand")
  .sc(GetPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyRequest;
      output: GetPolicyResponse;
    };
    sdk: {
      input: GetPolicyCommandInput;
      output: GetPolicyCommandOutput;
    };
  };
}
