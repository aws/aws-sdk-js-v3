// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDeploymentSnapshotsInput, ListDeploymentSnapshotsOutput } from "../models/models_0";
import { ListDeploymentSnapshots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDeploymentSnapshotsCommand}.
 */
export interface ListDeploymentSnapshotsCommandInput extends ListDeploymentSnapshotsInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentSnapshotsCommand}.
 */
export interface ListDeploymentSnapshotsCommandOutput extends ListDeploymentSnapshotsOutput, __MetadataBearer {}

/**
 * <p>Lists the snapshots of the specified deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListDeploymentSnapshotsCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListDeploymentSnapshotsCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListDeploymentSnapshotsInput
 *   deploymentIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDeploymentSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentSnapshotsOutput
 * //   nextToken: "STRING_VALUE",
 * //   snapshots: [ // DeploymentSummaryList // required
 * //     { // DeploymentSummary
 * //       deploymentId: "STRING_VALUE", // required
 * //       deploymentArn: "STRING_VALUE", // required
 * //       deploymentName: "STRING_VALUE",
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
 * @param ListDeploymentSnapshotsCommandInput - {@link ListDeploymentSnapshotsCommandInput}
 * @returns {@link ListDeploymentSnapshotsCommandOutput}
 * @see {@link ListDeploymentSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentSnapshotsCommandOutput} for command's `response` shape.
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
 * @example List the snapshots of a deployment
 * ```javascript
 * // Lists the immutable snapshots that have been created for a deployment.
 * const input = {
 *   deploymentIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:deployment:def456",
 *   maxResults: 10
 * };
 * const command = new ListDeploymentSnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   snapshots: [
 *     {
 *       deploymentArn: "arn:aws:network-security-manager:us-east-1:123456789012:deployment:def456:2",
 *       deploymentId: "def456",
 *       deploymentName: "prod-us-east-1-deployment",
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
export class ListDeploymentSnapshotsCommand extends command<ListDeploymentSnapshotsCommandInput, ListDeploymentSnapshotsCommandOutput>(
  _ep0,
  _mw0,
  "ListDeploymentSnapshots",
  ListDeploymentSnapshots$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentSnapshotsInput;
      output: ListDeploymentSnapshotsOutput;
    };
    sdk: {
      input: ListDeploymentSnapshotsCommandInput;
      output: ListDeploymentSnapshotsCommandOutput;
    };
  };
}
