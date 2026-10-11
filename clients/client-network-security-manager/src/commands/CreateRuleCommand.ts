// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRuleInput, CreateRuleOutput } from "../models/models_0";
import { CreateRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandInput extends CreateRuleInput {}
/**
 * @public
 *
 * The output of {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandOutput extends CreateRuleOutput, __MetadataBearer {}

/**
 * <p>Creates a rule. A rule defines a network security configuration to enforce, such as an AWS WAF rule group or configuration data. Use <code>isPublished</code> to create the rule in published (<code>ACTIVE</code>) or draft (<code>DRAFT</code>) state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, CreateRuleCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, CreateRuleCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // CreateRuleInput
 *   clientToken: "STRING_VALUE",
 *   ruleName: "STRING_VALUE", // required
 *   firewallType: "WAF", // required
 *   ruleType: "CONFIGURATION" || "INSPECTION", // required
 *   ruleDescription: "STRING_VALUE",
 *   configuration: "DOCUMENT_VALUE", // required
 *   isPublished: true || false,
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuleOutput
 * //   ruleId: "STRING_VALUE", // required
 * //   ruleArn: "STRING_VALUE", // required
 * //   ruleName: "STRING_VALUE", // required
 * //   firewallType: "WAF", // required
 * //   ruleType: "CONFIGURATION" || "INSPECTION",
 * //   ruleDescription: "STRING_VALUE",
 * //   configuration: "DOCUMENT_VALUE", // required
 * //   status: "DRAFT" || "ACTIVE" || "DISABLED", // required
 * //   version: "STRING_VALUE", // required
 * //   updateToken: "STRING_VALUE",
 * //   isSnapshot: true || false,
 * //   hasPublishedVersion: true || false,
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateRuleCommandInput - {@link CreateRuleCommandInput}
 * @returns {@link CreateRuleCommandOutput}
 * @see {@link CreateRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRuleCommandOutput} for command's `response` shape.
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
 * @example Create a WAF rule
 * ```javascript
 * // Creates a new WAF inspection rule in draft state.
 * const input = {
 *   clientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   configuration:   { /* empty *\/ },
 *   firewallType: "WAF",
 *   isPublished: false,
 *   ruleDescription: "Blocks requests from known malicious IP addresses",
 *   ruleName: "block-known-bad-ips",
 *   ruleType: "INSPECTION"
 * };
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configuration:   { /* empty *\/ },
 *   firewallType: "WAF",
 *   hasPublishedVersion: false,
 *   isSnapshot: false,
 *   ruleArn: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123",
 *   ruleDescription: "Blocks requests from known malicious IP addresses",
 *   ruleId: "abc123",
 *   ruleName: "block-known-bad-ips",
 *   ruleType: "INSPECTION",
 *   status: "DRAFT",
 *   updateToken: "c1d2e3f4-4a5b-4c6d-9e7f-8a9b0c1d2e3f",
 *   version: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRuleCommand extends command<CreateRuleCommandInput, CreateRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreateRule",
  CreateRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRuleInput;
      output: CreateRuleOutput;
    };
    sdk: {
      input: CreateRuleCommandInput;
      output: CreateRuleCommandOutput;
    };
  };
}
