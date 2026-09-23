// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePolicyInput, CreatePolicyOutput } from "../models/models_0";
import { CreatePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePolicyCommand}.
 */
export interface CreatePolicyCommandInput extends CreatePolicyInput {}
/**
 * @public
 *
 * The output of {@link CreatePolicyCommand}.
 */
export interface CreatePolicyCommandOutput extends CreatePolicyOutput, __MetadataBearer {}

/**
 * <p>Creates a policy. A policy combines templates and rules with enforcement settings for a firewall type, such as AWS WAF or AWS Shield Advanced. Use <code>isPublished</code> to create the policy in published (<code>ACTIVE</code>) or draft (<code>DRAFT</code>) state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, CreatePolicyCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, CreatePolicyCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // CreatePolicyInput
 *   clientToken: "STRING_VALUE",
 *   policyName: "STRING_VALUE", // required
 *   policyDescription: "STRING_VALUE",
 *   priority: Number("int"), // required
 *   associatedTemplateAndRuleList: [ // TemplateAndRuleReferenceList
 *     { // TemplateOrRuleReference Union: only one key present
 *       templateIdentifier: "STRING_VALUE",
 *       ruleIdentifier: "STRING_VALUE",
 *     },
 *   ],
 *   firewallType: "WAF" || "SHIELD_ADVANCED", // required
 *   policyConfiguration: { // PolicyConfiguration
 *     remediationEnabled: true || false, // required
 *     resourcesCleanUp: true || false, // required
 *     wafConfig: { // WafConfig
 *       existingCustomerWebACLResolution: "RETROFIT" || "OVERRIDE_ASSOCIATION" || "NO_REMEDIATION", // required
 *       conflictResolution: "MERGE_WHERE_APPLICABLE", // required
 *     },
 *   },
 *   isPublished: true || false,
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreatePolicyOutput
 * //   policyId: "STRING_VALUE", // required
 * //   policyArn: "STRING_VALUE", // required
 * //   policyName: "STRING_VALUE", // required
 * //   policyDescription: "STRING_VALUE",
 * //   status: "DRAFT" || "ACTIVE" || "DISABLED", // required
 * //   priority: Number("int"), // required
 * //   associatedTemplateAndRuleList: [ // AssociatedTemplateAndRuleList // required
 * //     { // AssociatedTemplateOrRule Union: only one key present
 * //       templateArn: "STRING_VALUE",
 * //       ruleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   version: "STRING_VALUE", // required
 * //   updateToken: "STRING_VALUE",
 * //   isSnapshot: true || false,
 * //   hasPublishedVersion: true || false,
 * //   firewallType: "WAF" || "SHIELD_ADVANCED", // required
 * //   policyConfiguration: { // PolicyConfiguration
 * //     remediationEnabled: true || false, // required
 * //     resourcesCleanUp: true || false, // required
 * //     wafConfig: { // WafConfig
 * //       existingCustomerWebACLResolution: "RETROFIT" || "OVERRIDE_ASSOCIATION" || "NO_REMEDIATION", // required
 * //       conflictResolution: "MERGE_WHERE_APPLICABLE", // required
 * //     },
 * //   },
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreatePolicyCommandInput - {@link CreatePolicyCommandInput}
 * @returns {@link CreatePolicyCommandOutput}
 * @see {@link CreatePolicyCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. For example, the resource was modified concurrently, or it is in a state that does not allow the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable. This is a retryable error.</p>
 *
 * @throws {@link TagPolicyViolationException} (client fault)
 *  <p>The request violates a tag policy that is in effect for the account or organization.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Reduce your request rate and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. For details, see the <code>reason</code> and <code>fieldList</code> members of the response.</p>
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkSecurityManager service.</p>
 *
 *
 * @example Create a WAF policy
 * ```javascript
 * // Creates a new WAF policy in draft state with a template association.
 * const input = {
 *   associatedTemplateAndRuleList: [
 *     {
 *       templateIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789"
 *     }
 *   ],
 *   clientToken: "550e8400-e29b-41d4-a716-446655440002",
 *   firewallType: "WAF",
 *   isPublished: false,
 *   policyConfiguration: {
 *     remediationEnabled: false,
 *     resourcesCleanUp: false,
 *     wafConfig: {
 *       conflictResolution: "MERGE_WHERE_APPLICABLE",
 *       existingCustomerWebACLResolution: "NO_REMEDIATION"
 *     }
 *   },
 *   policyDescription: "WAF policy for web application protection",
 *   policyName: "web-app-waf-policy",
 *   priority: 1
 * };
 * const command = new CreatePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedTemplateAndRuleList: [
 *     {
 *       templateArn: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789"
 *     }
 *   ],
 *   firewallType: "WAF",
 *   hasPublishedVersion: false,
 *   isSnapshot: false,
 *   policyArn: "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789",
 *   policyConfiguration: {
 *     remediationEnabled: false,
 *     resourcesCleanUp: false,
 *     wafConfig: {
 *       conflictResolution: "MERGE_WHERE_APPLICABLE",
 *       existingCustomerWebACLResolution: "NO_REMEDIATION"
 *     }
 *   },
 *   policyDescription: "WAF policy for web application protection",
 *   policyId: "xyz789",
 *   policyName: "web-app-waf-policy",
 *   priority: 1,
 *   status: "DRAFT",
 *   updateToken: "e3f4a5b6-6c7d-4e8f-9a0b-0c1d2e3f4a5b",
 *   version: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreatePolicyCommand extends command<CreatePolicyCommandInput, CreatePolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreatePolicy",
  CreatePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePolicyInput;
      output: CreatePolicyOutput;
    };
    sdk: {
      input: CreatePolicyCommandInput;
      output: CreatePolicyCommandOutput;
    };
  };
}
