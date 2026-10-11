// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTemplateInput, CreateTemplateOutput } from "../models/models_0";
import { CreateTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTemplateCommand}.
 */
export interface CreateTemplateCommandInput extends CreateTemplateInput {}
/**
 * @public
 *
 * The output of {@link CreateTemplateCommand}.
 */
export interface CreateTemplateCommandOutput extends CreateTemplateOutput, __MetadataBearer {}

/**
 * <p>Creates a template. A template groups one or more rules to simplify reuse across policies. You can also associate rules with a policy directly, without a template. Use <code>isPublished</code> to create the template in published (<code>ACTIVE</code>) or draft (<code>DRAFT</code>) state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, CreateTemplateCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, CreateTemplateCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // CreateTemplateInput
 *   clientToken: "STRING_VALUE",
 *   templateName: "STRING_VALUE", // required
 *   templateDescription: "STRING_VALUE",
 *   associatedRuleList: [ // RuleReferenceList // required
 *     { // RuleReference
 *       ruleIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   firewallType: "WAF", // required
 *   isPublished: true || false,
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateTemplateOutput
 * //   templateId: "STRING_VALUE", // required
 * //   templateArn: "STRING_VALUE", // required
 * //   templateName: "STRING_VALUE", // required
 * //   templateDescription: "STRING_VALUE",
 * //   status: "DRAFT" || "ACTIVE" || "DISABLED", // required
 * //   version: "STRING_VALUE", // required
 * //   associatedRuleList: [ // AssociatedRuleList // required
 * //     { // AssociatedRule
 * //       ruleArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   updateToken: "STRING_VALUE",
 * //   isSnapshot: true || false,
 * //   hasPublishedVersion: true || false,
 * //   firewallType: "WAF", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateTemplateCommandInput - {@link CreateTemplateCommandInput}
 * @returns {@link CreateTemplateCommandOutput}
 * @see {@link CreateTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateCommandOutput} for command's `response` shape.
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
 * @example Create a WAF template
 * ```javascript
 * // Creates a new WAF template in published (ACTIVE) state with an associated rule.
 * const input = {
 *   associatedRuleList: [
 *     {
 *       ruleIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123"
 *     }
 *   ],
 *   clientToken: "550e8400-e29b-41d4-a716-446655440004",
 *   firewallType: "WAF",
 *   isPublished: true,
 *   templateDescription: "Standard WAF template with baseline rule groups",
 *   templateName: "standard-waf-template"
 * };
 * const command = new CreateTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedRuleList: [
 *     {
 *       ruleArn: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123"
 *     }
 *   ],
 *   firewallType: "WAF",
 *   hasPublishedVersion: true,
 *   isSnapshot: false,
 *   status: "ACTIVE",
 *   templateArn: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789",
 *   templateDescription: "Standard WAF template with baseline rule groups",
 *   templateId: "xyz789",
 *   templateName: "standard-waf-template",
 *   updateToken: "d2e3f4a5-5b6c-4d7e-8f9a-9b0c1d2e3f4a",
 *   version: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateTemplateCommand extends command<CreateTemplateCommandInput, CreateTemplateCommandOutput>(
  _ep0,
  _mw0,
  "CreateTemplate",
  CreateTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTemplateInput;
      output: CreateTemplateOutput;
    };
    sdk: {
      input: CreateTemplateCommandInput;
      output: CreateTemplateCommandOutput;
    };
  };
}
