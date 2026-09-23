// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePolicyInput, UpdatePolicyOutput } from "../models/models_0";
import { UpdatePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePolicyCommand}.
 */
export interface UpdatePolicyCommandInput extends UpdatePolicyInput {}
/**
 * @public
 *
 * The output of {@link UpdatePolicyCommand}.
 */
export interface UpdatePolicyCommandOutput extends UpdatePolicyOutput, __MetadataBearer {}

/**
 * <p>Updates the specified policy. To prevent conflicting concurrent updates, provide the current <code>updateToken</code>. Use <code>isPublished</code> to publish the update or keep the policy as a draft.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, UpdatePolicyCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, UpdatePolicyCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // UpdatePolicyInput
 *   policyIdentifier: "STRING_VALUE", // required
 *   updateToken: "STRING_VALUE", // required
 *   policyDescription: "STRING_VALUE",
 *   priority: Number("int"),
 *   associatedTemplateAndRuleList: [ // TemplateAndRuleReferenceList
 *     { // TemplateOrRuleReference Union: only one key present
 *       templateIdentifier: "STRING_VALUE",
 *       ruleIdentifier: "STRING_VALUE",
 *     },
 *   ],
 *   policyConfiguration: { // PolicyConfiguration
 *     remediationEnabled: true || false, // required
 *     resourcesCleanUp: true || false, // required
 *     wafConfig: { // WafConfig
 *       existingCustomerWebACLResolution: "RETROFIT" || "OVERRIDE_ASSOCIATION" || "NO_REMEDIATION", // required
 *       conflictResolution: "MERGE_WHERE_APPLICABLE", // required
 *     },
 *   },
 *   isPublished: true || false, // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdatePolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePolicyOutput
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
 * @param UpdatePolicyCommandInput - {@link UpdatePolicyCommandInput}
 * @returns {@link UpdatePolicyCommandOutput}
 * @see {@link UpdatePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdatePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists, then try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota.</p>
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
 * @example Update a policy and publish it
 * ```javascript
 * // Updates the policy's description, priority, and configuration and publishes the change. The updateToken from the most recent read is required for optimistic locking.
 * const input = {
 *   associatedTemplateAndRuleList: [
 *     {
 *       templateIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789"
 *     }
 *   ],
 *   isPublished: true,
 *   policyConfiguration: {
 *     remediationEnabled: true,
 *     resourcesCleanUp: false,
 *     wafConfig: {
 *       conflictResolution: "MERGE_WHERE_APPLICABLE",
 *       existingCustomerWebACLResolution: "NO_REMEDIATION"
 *     }
 *   },
 *   policyDescription: "WAF policy for web application protection - updated",
 *   policyIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789",
 *   priority: 2,
 *   updateToken: "e3f4a5b6-6c7d-4e8f-9a0b-0c1d2e3f4a5b"
 * };
 * const command = new UpdatePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedTemplateAndRuleList: [
 *     {
 *       templateArn: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789"
 *     }
 *   ],
 *   firewallType: "WAF",
 *   hasPublishedVersion: true,
 *   isSnapshot: false,
 *   policyArn: "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789",
 *   policyConfiguration: {
 *     remediationEnabled: true,
 *     resourcesCleanUp: false,
 *     wafConfig: {
 *       conflictResolution: "MERGE_WHERE_APPLICABLE",
 *       existingCustomerWebACLResolution: "NO_REMEDIATION"
 *     }
 *   },
 *   policyDescription: "WAF policy for web application protection - updated",
 *   policyId: "xyz789",
 *   policyName: "web-app-waf-policy",
 *   priority: 2,
 *   status: "ACTIVE",
 *   updateToken: "f4a5b6c7-7d8e-4f9a-8b1c-1d2e3f4a5b6c",
 *   updatedAt: "2026-08-20T12:00:00Z",
 *   version: "2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdatePolicyCommand extends command<UpdatePolicyCommandInput, UpdatePolicyCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePolicy",
  UpdatePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePolicyInput;
      output: UpdatePolicyOutput;
    };
    sdk: {
      input: UpdatePolicyCommandInput;
      output: UpdatePolicyCommandOutput;
    };
  };
}
