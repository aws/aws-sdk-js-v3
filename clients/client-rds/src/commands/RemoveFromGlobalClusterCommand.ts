// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveFromGlobalClusterMessage, RemoveFromGlobalClusterResult } from "../models/models_1";
import { de_RemoveFromGlobalClusterCommand, se_RemoveFromGlobalClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveFromGlobalClusterCommand}.
 */
export interface RemoveFromGlobalClusterCommandInput extends RemoveFromGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link RemoveFromGlobalClusterCommand}.
 */
export interface RemoveFromGlobalClusterCommandOutput extends RemoveFromGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a
 *         standalone cluster with read-write capability instead of being read-only and receiving data from a
 *         primary cluster in a different Region.</p>
 *          <note>
 *             <p>This operation only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveFromGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveFromGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // RemoveFromGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE",
 *   DbClusterIdentifier: "STRING_VALUE",
 * };
 * const command = new RemoveFromGlobalClusterCommand(input);
 * const response = await client.send(command);
 * // { // RemoveFromGlobalClusterResult
 * //   GlobalCluster: { // GlobalCluster
 * //     GlobalClusterIdentifier: "STRING_VALUE",
 * //     GlobalClusterResourceId: "STRING_VALUE",
 * //     GlobalClusterArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     EngineLifecycleSupport: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     StorageEncrypted: true || false,
 * //     DeletionProtection: true || false,
 * //     GlobalClusterMembers: [ // GlobalClusterMemberList
 * //       { // GlobalClusterMember
 * //         DBClusterArn: "STRING_VALUE",
 * //         Readers: [ // ReadersArnList
 * //           "STRING_VALUE",
 * //         ],
 * //         IsWriter: true || false,
 * //         GlobalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "unknown",
 * //         SynchronizationStatus: "connected" || "pending-resync",
 * //       },
 * //     ],
 * //     FailoverState: { // FailoverState
 * //       Status: "pending" || "failing-over" || "cancelling",
 * //       FromDbClusterArn: "STRING_VALUE",
 * //       ToDbClusterArn: "STRING_VALUE",
 * //       IsDataLossAllowed: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RemoveFromGlobalClusterCommandInput - {@link RemoveFromGlobalClusterCommandInput}
 * @returns {@link RemoveFromGlobalClusterCommandOutput}
 * @see {@link RemoveFromGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link RemoveFromGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster.</p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The global cluster is in an invalid state and can't perform the requested operation.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To detach an Aurora secondary cluster from an Aurora global database cluster
 * ```javascript
 * // The following example detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster changes from being read-only to a standalone cluster with read-write capability.
 * const input = {
 *   "DbClusterIdentifier": "arn:aws:rds:us-west-2:123456789012:cluster:DB-1",
 *   "GlobalClusterIdentifier": "myglobalcluster"
 * };
 * const command = new RemoveFromGlobalClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GlobalCluster": {
 *     "DeletionProtection": false,
 *     "Engine": "aurora-postgresql",
 *     "EngineVersion": "10.11",
 *     "GlobalClusterArn": "arn:aws:rds::123456789012:global-cluster:myglobalcluster",
 *     "GlobalClusterIdentifier": "myglobalcluster",
 *     "GlobalClusterMembers": [
 *       {
 *         "DBClusterArn": "arn:aws:rds:us-east-1:123456789012:cluster:js-global-cluster",
 *         "IsWriter": true,
 *         "Readers": [
 *           "arn:aws:rds:us-west-2:123456789012:cluster:DB-1"
 *         ]
 *       },
 *       {
 *         "DBClusterArn": "arn:aws:rds:us-west-2:123456789012:cluster:DB-1",
 *         "GlobalWriteForwardingStatus": "disabled",
 *         "IsWriter": false,
 *         "Readers": []
 *       }
 *     ],
 *     "GlobalClusterResourceId": "cluster-abc123def456gh",
 *     "Status": "available",
 *     "StorageEncrypted": true
 *   }
 * }
 * *\/
 * // example id: to-detach-an-aurora-secondary-cluster-from-an-aurora-global-database-cluster-1680072605847
 * ```
 *
 */
export class RemoveFromGlobalClusterCommand extends $Command
  .classBuilder<
    RemoveFromGlobalClusterCommandInput,
    RemoveFromGlobalClusterCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "RemoveFromGlobalCluster", {})
  .n("RDSClient", "RemoveFromGlobalClusterCommand")
  .f(void 0, void 0)
  .ser(se_RemoveFromGlobalClusterCommand)
  .de(de_RemoveFromGlobalClusterCommand)
  .build() {}
