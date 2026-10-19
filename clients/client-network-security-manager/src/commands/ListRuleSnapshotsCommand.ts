// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRuleSnapshotsInput, ListRuleSnapshotsOutput } from "../models/models_0";
import { ListRuleSnapshots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRuleSnapshotsCommand}.
 */
export interface ListRuleSnapshotsCommandInput extends ListRuleSnapshotsInput {}
/**
 * @public
 *
 * The output of {@link ListRuleSnapshotsCommand}.
 */
export interface ListRuleSnapshotsCommandOutput extends ListRuleSnapshotsOutput, __MetadataBearer {}

/**
 * <p>Lists the snapshots of the specified rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListRuleSnapshotsCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListRuleSnapshotsCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListRuleSnapshotsInput
 *   ruleIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRuleSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // ListRuleSnapshotsOutput
 * //   nextToken: "STRING_VALUE",
 * //   snapshots: [ // RuleSummaryList // required
 * //     { // RuleSummary
 * //       ruleId: "STRING_VALUE", // required
 * //       ruleArn: "STRING_VALUE", // required
 * //       ruleName: "STRING_VALUE", // required
 * //       firewallType: "WAF",
 * //       ruleType: "CONFIGURATION" || "INSPECTION",
 * //       status: "DRAFT" || "ACTIVE" || "DISABLED",
 * //       version: "STRING_VALUE",
 * //       hasPublishedVersion: true || false,
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRuleSnapshotsCommandInput - {@link ListRuleSnapshotsCommandInput}
 * @returns {@link ListRuleSnapshotsCommandOutput}
 * @see {@link ListRuleSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListRuleSnapshotsCommandOutput} for command's `response` shape.
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
 * @example List the snapshots of a rule
 * ```javascript
 * // Lists the immutable snapshots that have been created for a rule.
 * const input = {
 *   maxResults: 10,
 *   ruleIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123"
 * };
 * const command = new ListRuleSnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   snapshots: [
 *     {
 *       firewallType: "WAF",
 *       ruleArn: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123:2",
 *       ruleId: "abc123",
 *       ruleName: "block-known-bad-ips",
 *       ruleType: "INSPECTION",
 *       status: "ACTIVE",
 *       updatedAt: "2026-08-20T12:00:00Z",
 *       version: "2"
 *     },
 *     {
 *       firewallType: "WAF",
 *       ruleArn: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123:3",
 *       ruleId: "abc123",
 *       ruleName: "block-known-bad-ips",
 *       ruleType: "INSPECTION",
 *       status: "ACTIVE",
 *       updatedAt: "2026-08-21T09:30:00Z",
 *       version: "3"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRuleSnapshotsCommand extends command<ListRuleSnapshotsCommandInput, ListRuleSnapshotsCommandOutput>(
  _ep0,
  _mw0,
  "ListRuleSnapshots",
  ListRuleSnapshots$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRuleSnapshotsInput;
      output: ListRuleSnapshotsOutput;
    };
    sdk: {
      input: ListRuleSnapshotsCommandInput;
      output: ListRuleSnapshotsCommandOutput;
    };
  };
}
