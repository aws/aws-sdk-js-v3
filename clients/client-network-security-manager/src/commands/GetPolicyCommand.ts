// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPolicyInput, GetPolicyOutput } from "../models/models_0";
import { GetPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPolicyCommand}.
 */
export interface GetPolicyCommandInput extends GetPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetPolicyCommand}.
 */
export interface GetPolicyCommandOutput extends GetPolicyOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details of the specified policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, GetPolicyCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, GetPolicyCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // GetPolicyInput
 *   policyIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyOutput
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
 * @param GetPolicyCommandInput - {@link GetPolicyCommandInput}
 * @returns {@link GetPolicyCommandOutput}
 * @see {@link GetPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists, then try your request again.</p>
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
 * @example Get a policy
 * ```javascript
 * // Retrieves the current published version of a policy by its base ARN, including its associated templates and rules and its enforcement configuration.
 * const input = {
 *   policyIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789"
 * };
 * const command = new GetPolicyCommand(input);
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
 *   policyDescription: "WAF policy for web application protection",
 *   policyId: "xyz789",
 *   policyName: "web-app-waf-policy",
 *   priority: 1,
 *   status: "ACTIVE",
 *   updateToken: "e3f4a5b6-6c7d-4e8f-9a0b-0c1d2e3f4a5b",
 *   version: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetPolicyCommand extends command<GetPolicyCommandInput, GetPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetPolicy",
  GetPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyInput;
      output: GetPolicyOutput;
    };
    sdk: {
      input: GetPolicyCommandInput;
      output: GetPolicyCommandOutput;
    };
  };
}
