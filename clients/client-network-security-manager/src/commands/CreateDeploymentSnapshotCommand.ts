// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDeploymentSnapshotInput, CreateDeploymentSnapshotOutput } from "../models/models_0";
import { CreateDeploymentSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDeploymentSnapshotCommand}.
 */
export interface CreateDeploymentSnapshotCommandInput extends CreateDeploymentSnapshotInput {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentSnapshotCommand}.
 */
export interface CreateDeploymentSnapshotCommandOutput extends CreateDeploymentSnapshotOutput, __MetadataBearer {}

/**
 * <p>Creates a snapshot of the current published version of the specified deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, CreateDeploymentSnapshotCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, CreateDeploymentSnapshotCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // CreateDeploymentSnapshotInput
 *   deploymentIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDeploymentSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeploymentSnapshotOutput
 * //   deploymentId: "STRING_VALUE", // required
 * //   deploymentArn: "STRING_VALUE", // required
 * //   deploymentName: "STRING_VALUE", // required
 * //   deploymentDescription: "STRING_VALUE",
 * //   status: "DRAFT" || "ACTIVE" || "DISABLED", // required
 * //   deploymentConfiguration: { // DeploymentConfiguration
 * //     enableCrossAccountVisibility: true || false, // required
 * //   },
 * //   associatedPolicyList: [ // AssociatedPolicyList // required
 * //     { // AssociatedPolicy
 * //       policyArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   associatedScopeList: [ // AssociatedScopeList // required
 * //     { // AssociatedScope
 * //       scopeArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   version: "STRING_VALUE", // required
 * //   updateToken: "STRING_VALUE",
 * //   isSnapshot: true || false,
 * //   hasPublishedVersion: true || false,
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateDeploymentSnapshotCommandInput - {@link CreateDeploymentSnapshotCommandInput}
 * @returns {@link CreateDeploymentSnapshotCommandOutput}
 * @see {@link CreateDeploymentSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentSnapshotCommandOutput} for command's `response` shape.
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
 * @example Create a deployment snapshot
 * ```javascript
 * // Creates an immutable snapshot of the current published version of a deployment. The snapshot is addressable by a version-qualified ARN.
 * const input = {
 *   clientToken: "550e8400-e29b-41d4-a716-446655440014",
 *   deploymentIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:deployment:def456"
 * };
 * const command = new CreateDeploymentSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedPolicyList: [
 *     {
 *       policyArn: "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789"
 *     }
 *   ],
 *   associatedScopeList: [
 *     {
 *       scopeArn: "arn:aws:network-security-manager:us-east-1:123456789012:scope:abc123"
 *     }
 *   ],
 *   deploymentArn: "arn:aws:network-security-manager:us-east-1:123456789012:deployment:def456:2",
 *   deploymentConfiguration: {
 *     enableCrossAccountVisibility: true
 *   },
 *   deploymentId: "def456",
 *   deploymentName: "prod-us-east-1-deployment",
 *   isSnapshot: true,
 *   status: "ACTIVE",
 *   updatedAt: "2026-08-20T12:00:00Z",
 *   version: "2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDeploymentSnapshotCommand extends command<CreateDeploymentSnapshotCommandInput, CreateDeploymentSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "CreateDeploymentSnapshot",
  CreateDeploymentSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentSnapshotInput;
      output: CreateDeploymentSnapshotOutput;
    };
    sdk: {
      input: CreateDeploymentSnapshotCommandInput;
      output: CreateDeploymentSnapshotCommandOutput;
    };
  };
}
