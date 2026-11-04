// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListScopeSnapshotsInput, ListScopeSnapshotsOutput } from "../models/models_0";
import { ListScopeSnapshots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListScopeSnapshotsCommand}.
 */
export interface ListScopeSnapshotsCommandInput extends ListScopeSnapshotsInput {}
/**
 * @public
 *
 * The output of {@link ListScopeSnapshotsCommand}.
 */
export interface ListScopeSnapshotsCommandOutput extends ListScopeSnapshotsOutput, __MetadataBearer {}

/**
 * Lists the snapshots of the specified scope.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListScopeSnapshotsCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListScopeSnapshotsCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListScopeSnapshotsInput
 *   scopeIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListScopeSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // ListScopeSnapshotsOutput
 * //   nextToken: "STRING_VALUE",
 * //   snapshots: [ // ScopeSummaryList // required
 * //     { // ScopeSummary
 * //       scopeId: "STRING_VALUE", // required
 * //       scopeArn: "STRING_VALUE", // required
 * //       scopeName: "STRING_VALUE",
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
 * @param ListScopeSnapshotsCommandInput - {@link ListScopeSnapshotsCommandInput}
 * @returns {@link ListScopeSnapshotsCommandOutput}
 * @see {@link ListScopeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListScopeSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing failed because of an internal error in the service. This is a retryable error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found. Verify that the resource identifier is correct and that the resource exists, then try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling. Reduce your request rate and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed validation. For details, see the `reason` and `fieldList` members of the response.
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkSecurityManager service.
 *
 * @example List the snapshots of a scope
 * ```javascript
 * // Lists the immutable snapshots that have been created for a scope.
 * const input = {
 *   maxResults: 10,
 *   scopeIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:scope:abc123"
 * };
 * const command = new ListScopeSnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   snapshots: [
 *     {
 *       scopeArn: "arn:aws:network-security-manager:us-east-1:123456789012:scope:abc123:2",
 *       scopeId: "abc123",
 *       scopeName: "production-web-apps",
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
export class ListScopeSnapshotsCommand extends command<ListScopeSnapshotsCommandInput, ListScopeSnapshotsCommandOutput>(
  _ep0,
  _mw0,
  "ListScopeSnapshots",
  ListScopeSnapshots$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScopeSnapshotsInput;
      output: ListScopeSnapshotsOutput;
    };
    sdk: {
      input: ListScopeSnapshotsCommandInput;
      output: ListScopeSnapshotsCommandOutput;
    };
  };
}
