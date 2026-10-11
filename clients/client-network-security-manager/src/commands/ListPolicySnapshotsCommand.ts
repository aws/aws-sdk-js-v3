// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPolicySnapshotsInput, ListPolicySnapshotsOutput } from "../models/models_0";
import { ListPolicySnapshots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPolicySnapshotsCommand}.
 */
export interface ListPolicySnapshotsCommandInput extends ListPolicySnapshotsInput {}
/**
 * @public
 *
 * The output of {@link ListPolicySnapshotsCommand}.
 */
export interface ListPolicySnapshotsCommandOutput extends ListPolicySnapshotsOutput, __MetadataBearer {}

/**
 * <p>Lists the snapshots of the specified policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListPolicySnapshotsCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListPolicySnapshotsCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListPolicySnapshotsInput
 *   policyIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPolicySnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicySnapshotsOutput
 * //   nextToken: "STRING_VALUE",
 * //   snapshots: [ // PolicySummaryList // required
 * //     { // PolicySummary
 * //       policyId: "STRING_VALUE", // required
 * //       policyArn: "STRING_VALUE", // required
 * //       policyName: "STRING_VALUE",
 * //       status: "DRAFT" || "ACTIVE" || "DISABLED",
 * //       version: "STRING_VALUE",
 * //       hasPublishedVersion: true || false,
 * //       firewallType: "WAF" || "SHIELD_ADVANCED",
 * //       priority: Number("int"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPolicySnapshotsCommandInput - {@link ListPolicySnapshotsCommandInput}
 * @returns {@link ListPolicySnapshotsCommandOutput}
 * @see {@link ListPolicySnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListPolicySnapshotsCommandOutput} for command's `response` shape.
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
 * @example List the snapshots of a policy
 * ```javascript
 * // Lists the immutable snapshots that have been created for a policy.
 * const input = {
 *   maxResults: 10,
 *   policyIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789"
 * };
 * const command = new ListPolicySnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   snapshots: [
 *     {
 *       firewallType: "WAF",
 *       policyArn: "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789:2",
 *       policyId: "xyz789",
 *       policyName: "web-app-waf-policy",
 *       priority: 2,
 *       status: "ACTIVE",
 *       updatedAt: "2026-08-20T12:00:00Z",
 *       version: "2"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListPolicySnapshotsCommand extends command<ListPolicySnapshotsCommandInput, ListPolicySnapshotsCommandOutput>(
  _ep0,
  _mw0,
  "ListPolicySnapshots",
  ListPolicySnapshots$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicySnapshotsInput;
      output: ListPolicySnapshotsOutput;
    };
    sdk: {
      input: ListPolicySnapshotsCommandInput;
      output: ListPolicySnapshotsCommandOutput;
    };
  };
}
