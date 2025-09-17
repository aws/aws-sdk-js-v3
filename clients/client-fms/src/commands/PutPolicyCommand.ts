// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutPolicyRequest, PutPolicyResponse } from "../models/models_0";
import { de_PutPolicyCommand, se_PutPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPolicyCommand}.
 */
export interface PutPolicyCommandInput extends PutPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutPolicyCommand}.
 */
export interface PutPolicyCommandOutput extends PutPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates an Firewall Manager policy.</p>
 *          <p>A Firewall Manager policy is specific to the individual policy type. If you want to enforce multiple
 * 		policy types across accounts, you can create multiple policies. You can create more than one
 * 		policy for each type. </p>
 *          <p>If you add a new account to an organization that you created with Organizations, Firewall Manager
 * 		automatically applies the policy to the resources in that account that are within scope of
 * 		the policy. </p>
 *          <p>Firewall Manager provides the following types of policies: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>WAF policy</b> - This policy applies WAF web ACL
 * 				protections to specified accounts and resources. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Shield Advanced policy</b> - This policy applies Shield Advanced
 * 				protection to specified accounts and resources. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Security Groups policy</b> - This type of policy gives you
 * 				control over security groups that are in use throughout your organization in
 * 				Organizations and lets you enforce a baseline set of rules across your organization. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Network ACL policy</b> - This type of policy gives you
 * 				control over the network ACLs that are in use throughout your organization in
 * 				Organizations and lets you enforce a baseline set of first and last network ACL rules across your organization. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Network Firewall policy</b> - This policy applies
 * 				Network Firewall protection to your organization's VPCs. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>DNS Firewall policy</b> - This policy applies
 * 				Amazon Route 53 Resolver DNS Firewall protections to your organization's VPCs. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Third-party firewall policy</b> - This policy applies third-party firewall protections. Third-party firewalls are available by subscription through the Amazon Web Services Marketplace console at <a href="http://aws.amazon.com/marketplace">Amazon Web Services Marketplace</a>.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>Palo Alto Networks Cloud NGFW policy</b> - This policy applies Palo Alto Networks Cloud Next Generation Firewall (NGFW) protections and Palo Alto Networks Cloud NGFW rulestacks to your organization's VPCs.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Fortigate CNF policy</b> - This policy applies
 * 						Fortigate Cloud Native Firewall (CNF) protections. Fortigate CNF is a cloud-centered solution that blocks Zero-Day threats and secures cloud infrastructures with industry-leading advanced threat prevention, smart web application firewalls (WAF), and API protection.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutPolicyCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutPolicyCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // PutPolicyRequest
 *   Policy: { // Policy
 *     PolicyId: "STRING_VALUE",
 *     PolicyName: "STRING_VALUE", // required
 *     PolicyUpdateToken: "STRING_VALUE",
 *     SecurityServicePolicyData: { // SecurityServicePolicyData
 *       Type: "WAF" || "WAFV2" || "SHIELD_ADVANCED" || "SECURITY_GROUPS_COMMON" || "SECURITY_GROUPS_CONTENT_AUDIT" || "SECURITY_GROUPS_USAGE_AUDIT" || "NETWORK_FIREWALL" || "DNS_FIREWALL" || "THIRD_PARTY_FIREWALL" || "IMPORT_NETWORK_FIREWALL" || "NETWORK_ACL_COMMON", // required
 *       ManagedServiceData: "STRING_VALUE",
 *       PolicyOption: { // PolicyOption
 *         NetworkFirewallPolicy: { // NetworkFirewallPolicy
 *           FirewallDeploymentModel: "CENTRALIZED" || "DISTRIBUTED",
 *         },
 *         ThirdPartyFirewallPolicy: { // ThirdPartyFirewallPolicy
 *           FirewallDeploymentModel: "CENTRALIZED" || "DISTRIBUTED",
 *         },
 *         NetworkAclCommonPolicy: { // NetworkAclCommonPolicy
 *           NetworkAclEntrySet: { // NetworkAclEntrySet
 *             FirstEntries: [ // NetworkAclEntries
 *               { // NetworkAclEntry
 *                 IcmpTypeCode: { // NetworkAclIcmpTypeCode
 *                   Code: Number("int"),
 *                   Type: Number("int"),
 *                 },
 *                 Protocol: "STRING_VALUE", // required
 *                 PortRange: { // NetworkAclPortRange
 *                   From: Number("int"),
 *                   To: Number("int"),
 *                 },
 *                 CidrBlock: "STRING_VALUE",
 *                 Ipv6CidrBlock: "STRING_VALUE",
 *                 RuleAction: "allow" || "deny", // required
 *                 Egress: true || false, // required
 *               },
 *             ],
 *             ForceRemediateForFirstEntries: true || false, // required
 *             LastEntries: [
 *               {
 *                 IcmpTypeCode: {
 *                   Code: Number("int"),
 *                   Type: Number("int"),
 *                 },
 *                 Protocol: "STRING_VALUE", // required
 *                 PortRange: {
 *                   From: Number("int"),
 *                   To: Number("int"),
 *                 },
 *                 CidrBlock: "STRING_VALUE",
 *                 Ipv6CidrBlock: "STRING_VALUE",
 *                 RuleAction: "allow" || "deny", // required
 *                 Egress: true || false, // required
 *               },
 *             ],
 *             ForceRemediateForLastEntries: true || false, // required
 *           },
 *         },
 *       },
 *     },
 *     ResourceType: "STRING_VALUE", // required
 *     ResourceTypeList: [ // ResourceTypeList
 *       "STRING_VALUE",
 *     ],
 *     ResourceTags: [ // ResourceTags
 *       { // ResourceTag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     ExcludeResourceTags: true || false, // required
 *     RemediationEnabled: true || false, // required
 *     DeleteUnusedFMManagedResources: true || false,
 *     IncludeMap: { // CustomerPolicyScopeMap
 *       "<keys>": [ // CustomerPolicyScopeIdList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ExcludeMap: {
 *       "<keys>": [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ResourceSetIds: [ // ResourceSetIds
 *       "STRING_VALUE",
 *     ],
 *     PolicyDescription: "STRING_VALUE",
 *     PolicyStatus: "ACTIVE" || "OUT_OF_ADMIN_SCOPE",
 *     ResourceTagLogicalOperator: "AND" || "OR",
 *   },
 *   TagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutPolicyResponse
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
 * @param PutPolicyCommandInput - {@link PutPolicyCommandInput}
 * @returns {@link PutPolicyCommandOutput}
 * @see {@link PutPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>The value of the <code>Type</code> parameter is invalid.</p>
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
 *
 * @public
 */
export class PutPolicyCommand extends $Command
  .classBuilder<
    PutPolicyCommandInput,
    PutPolicyCommandOutput,
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
  .s("AWSFMS_20180101", "PutPolicy", {})
  .n("FMSClient", "PutPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutPolicyCommand)
  .de(de_PutPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPolicyRequest;
      output: PutPolicyResponse;
    };
    sdk: {
      input: PutPolicyCommandInput;
      output: PutPolicyCommandOutput;
    };
  };
}
