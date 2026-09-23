// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRuleInput, GetRuleOutput } from "../models/models_0";
import { GetRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRuleCommand}.
 */
export interface GetRuleCommandInput extends GetRuleInput {}
/**
 * @public
 *
 * The output of {@link GetRuleCommand}.
 */
export interface GetRuleCommandOutput extends GetRuleOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details of the specified rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, GetRuleCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, GetRuleCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // GetRuleInput
 *   ruleIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetRuleOutput
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
 * @param GetRuleCommandInput - {@link GetRuleCommandInput}
 * @returns {@link GetRuleCommandOutput}
 * @see {@link GetRuleCommandInput} for command's `input` shape.
 * @see {@link GetRuleCommandOutput} for command's `response` shape.
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
 * @example Get a rule
 * ```javascript
 * // Retrieves the current published version of a rule by its base ARN.
 * const input = {
 *   ruleIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123"
 * };
 * const command = new GetRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configuration:   { /* empty *\/ },
 *   firewallType: "WAF",
 *   hasPublishedVersion: true,
 *   isSnapshot: false,
 *   ruleArn: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123",
 *   ruleDescription: "Blocks requests from known malicious IP addresses",
 *   ruleId: "abc123",
 *   ruleName: "block-known-bad-ips",
 *   ruleType: "INSPECTION",
 *   status: "ACTIVE",
 *   updateToken: "c1d2e3f4-4a5b-4c6d-9e7f-8a9b0c1d2e3f",
 *   version: "1"
 * }
 * *\/
 * ```
 *
 * @example Get a specific version of a rule
 * ```javascript
 * // Retrieves a specific immutable version (snapshot) of a rule using a version-qualified ARN. The response has isSnapshot set to true. Omitting the version qualifier returns the current published rule instead.
 * const input = {
 *   ruleIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123:3"
 * };
 * const command = new GetRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configuration:   { /* empty *\/ },
 *   firewallType: "WAF",
 *   isSnapshot: true,
 *   ruleArn: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123:3",
 *   ruleDescription: "Blocks requests from known malicious IP addresses",
 *   ruleId: "abc123",
 *   ruleName: "block-known-bad-ips",
 *   ruleType: "INSPECTION",
 *   status: "ACTIVE",
 *   version: "3"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRuleCommand extends command<GetRuleCommandInput, GetRuleCommandOutput>(
  _ep0,
  _mw0,
  "GetRule",
  GetRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRuleInput;
      output: GetRuleOutput;
    };
    sdk: {
      input: GetRuleCommandInput;
      output: GetRuleCommandOutput;
    };
  };
}
