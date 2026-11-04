// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateClusterInput, UpdateClusterOutput } from "../models/models_0";
import { UpdateCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandInput extends UpdateClusterInput {}
/**
 * @public
 *
 * The output of {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandOutput extends UpdateClusterOutput, __MetadataBearer {}

/**
 * The *UpdateCluster* API allows you to modify both single-Region and multi-Region cluster configurations. With the *multiRegionProperties* parameter, you can add or modify witness Region support and manage peer relationships with clusters in other Regions.
 *
 * > **Note:** Note that updating multi-Region clusters requires additional IAM permissions beyond those needed for standard cluster updates, as detailed in the Permissions section.
 *
 * **Required permissions**
 *
 * - **dsql:UpdateCluster**
 *
 *   Permission to update a DSQL cluster.
 *
 *   Resources: `arn:aws:dsql:region:account-id:cluster/cluster-id`
 *
 * - **dsql:PutMultiRegionProperties**
 *
 *   Permission to configure multi-Region properties for a cluster.
 *
 *   Resources: `arn:aws:dsql:region:account-id:cluster/cluster-id`
 *
 * - **dsql:GetCluster**
 *
 *   Permission to retrieve cluster information.
 *
 *   Resources: `arn:aws:dsql:region:account-id:cluster/cluster-id`
 *
 * - **dsql:AddPeerCluster**
 *
 *   Permission to add peer clusters.
 *
 *   Resources:
 *
 *   - Local cluster: `arn:aws:dsql:region:account-id:cluster/cluster-id`
 *   - Each peer cluster: exact ARN of each specified peer cluster
 *
 * - **dsql:RemovePeerCluster**
 *
 *   Permission to remove peer clusters. When you list peer clusters in `multiRegionProperties.clusters`, you need this permission for each current peer cluster that your list omits.
 *
 *   Resources:
 *
 *   - Each removed peer cluster: exact ARN of each removed peer cluster, in its own Region
 *
 * - **dsql:PutWitnessRegion**
 *
 *   Permission to set a witness Region.
 *
 *   Resources: `arn:aws:dsql:region:account-id:cluster/cluster-id`
 *
 *   Condition Keys: dsql:WitnessRegion (matching the specified witness Region)
 *
 *   **This permission is checked both in the cluster Region and in the witness Region.**
 *
 * > **Important:**
 * >
 * > - The witness Region specified in `multiRegionProperties.witnessRegion` cannot be the same as the cluster's Region.
 * > - When you list peer clusters in `multiRegionProperties.clusters`, you need `dsql:AddPeerCluster` for every peer cluster in your request. You need `dsql:RemovePeerCluster` only for the peer clusters that the update removes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, UpdateClusterCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, UpdateClusterCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
 * const config = {}; // type is DSQLClientConfig
 * const client = new DSQLClient(config);
 * const input = { // UpdateClusterInput
 *   identifier: "STRING_VALUE", // required
 *   deletionProtectionEnabled: true || false,
 *   kmsEncryptionKey: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   multiRegionProperties: { // MultiRegionProperties
 *     witnessRegion: "STRING_VALUE",
 *     clusters: [ // ClusterArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterOutput
 * //   identifier: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "IDLE" || "INACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "FAILED" || "PENDING_SETUP" || "PENDING_DELETE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateClusterCommandInput - {@link UpdateClusterCommandInput}
 * @returns {@link UpdateClusterCommandOutput}
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The submitted action has conflicts.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link DSQLServiceException}
 *
 * Base exception class for all service exceptions from DSQL service.
 *
 * @example Update Cluster
 * ```javascript
 * //
 * const input = {
 *   deletionProtectionEnabled: false,
 *   identifier: "kiqenqglxyl2snyvkvnj2c3s2e"
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateClusterCommand extends command<UpdateClusterCommandInput, UpdateClusterCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCluster",
  UpdateCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterInput;
      output: UpdateClusterOutput;
    };
    sdk: {
      input: UpdateClusterCommandInput;
      output: UpdateClusterCommandOutput;
    };
  };
}
