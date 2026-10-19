// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRuleInput, UpdateRuleOutput } from "../models/models_0";
import { UpdateRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRuleCommand}.
 */
export interface UpdateRuleCommandInput extends UpdateRuleInput {}
/**
 * @public
 *
 * The output of {@link UpdateRuleCommand}.
 */
export interface UpdateRuleCommandOutput extends UpdateRuleOutput, __MetadataBearer {}

/**
 * <p>Updates the specified rule. To prevent conflicting concurrent updates, provide the current <code>updateToken</code>. Use <code>isPublished</code> to publish the update or keep the rule as a draft.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, UpdateRuleCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, UpdateRuleCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // UpdateRuleInput
 *   ruleIdentifier: "STRING_VALUE", // required
 *   updateToken: "STRING_VALUE", // required
 *   ruleType: "CONFIGURATION" || "INSPECTION",
 *   ruleDescription: "STRING_VALUE",
 *   configuration: "DOCUMENT_VALUE",
 *   isPublished: true || false, // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRuleOutput
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
 * @param UpdateRuleCommandInput - {@link UpdateRuleCommandInput}
 * @returns {@link UpdateRuleCommandOutput}
 * @see {@link UpdateRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleCommandOutput} for command's `response` shape.
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
 * @example Update a rule and publish it
 * ```javascript
 * // Updates the rule's description and configuration and publishes the change. The updateToken from the most recent read is required for optimistic locking.
 * const input = {
 *   configuration:   { /* empty *\/ },
 *   isPublished: true,
 *   ruleDescription: "Blocks requests from known malicious IP addresses - updated list",
 *   ruleIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123",
 *   ruleType: "INSPECTION",
 *   updateToken: "c1d2e3f4-4a5b-4c6d-9e7f-8a9b0c1d2e3f"
 * };
 * const command = new UpdateRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configuration:   { /* empty *\/ },
 *   firewallType: "WAF",
 *   hasPublishedVersion: true,
 *   isSnapshot: false,
 *   ruleArn: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123",
 *   ruleDescription: "Blocks requests from known malicious IP addresses - updated list",
 *   ruleId: "abc123",
 *   ruleName: "block-known-bad-ips",
 *   ruleType: "INSPECTION",
 *   status: "ACTIVE",
 *   updateToken: "d2e3f4a5-5b6c-4d7e-8f9a-9b0c1d2e3f4a",
 *   updatedAt: "2026-08-20T12:00:00Z",
 *   version: "2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateRuleCommand extends command<UpdateRuleCommandInput, UpdateRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRule",
  UpdateRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuleInput;
      output: UpdateRuleOutput;
    };
    sdk: {
      input: UpdateRuleCommandInput;
      output: UpdateRuleCommandOutput;
    };
  };
}
