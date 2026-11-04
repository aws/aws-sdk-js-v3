// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { FailoverGlobalClusterMessage, FailoverGlobalClusterResult } from "../models/models_1";
import { FailoverGlobalCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link FailoverGlobalClusterCommand}.
 */
export interface FailoverGlobalClusterCommandInput extends FailoverGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link FailoverGlobalClusterCommand}.
 */
export interface FailoverGlobalClusterCommandOutput extends FailoverGlobalClusterResult, __MetadataBearer {}

/**
 * Promotes the specified secondary DB cluster to be the primary DB cluster in the global database cluster to fail over or switch over a global database. Switchover operations were previously called "managed planned failovers."
 *
 * > **Note:** Although this operation can be used either to fail over or to switch over a global database cluster, its intended use is for global database failover. To switch over a global database cluster, we recommend that you use the SwitchoverGlobalCluster operation instead.
 *
 * How you use this operation depends on whether you are failing over or switching over your global database cluster:
 *
 * - Failing over - Specify the `AllowDataLoss` parameter and don't specify the `Switchover` parameter.
 * - Switching over - Specify the `Switchover` parameter or omit it, but don't specify the `AllowDataLoss` parameter.
 *
 * **About failing over and switching over**
 *
 * While failing over and switching over a global database cluster both change the primary DB cluster, you use these operations for different reasons:
 *
 * - *Failing over* - Use this operation to respond to an unplanned event, such as a Regional disaster in the primary Region. Failing over can result in a loss of write transaction data that wasn't replicated to the chosen secondary before the failover event occurred. However, the recovery process that promotes a DB instance on the chosen seconday DB cluster to be the primary writer DB instance guarantees that the data is in a transactionally consistent state.
 *
 *   For more information about failing over an Amazon Aurora global database, see [Performing managed failovers for Aurora global databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-failover.managed-unplanned) in the *Amazon Aurora User Guide*.
 * - *Switching over* - Use this operation on a healthy global database cluster for planned events, such as Regional rotation or to fail back to the original primary DB cluster after a failover operation. With this operation, there is no data loss.
 *
 *   For more information about switching over an Amazon Aurora global database, see [Performing switchovers for Aurora global databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover) in the *Amazon Aurora User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, FailoverGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, FailoverGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // FailoverGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE", // required
 *   TargetDbClusterIdentifier: "STRING_VALUE", // required
 *   AllowDataLoss: true || false,
 *   Switchover: true || false,
 * };
 * const command = new FailoverGlobalClusterCommand(input);
 * const response = await client.send(command);
 * // { // FailoverGlobalClusterResult
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
 * //     StorageEncryptionType: "none" || "sse-kms" || "sse-rds",
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
 * //     Endpoint: "STRING_VALUE",
 * //     FailoverState: { // FailoverState
 * //       Status: "pending" || "failing-over" || "cancelling",
 * //       FromDbClusterArn: "STRING_VALUE",
 * //       ToDbClusterArn: "STRING_VALUE",
 * //       IsDataLossAllowed: true || false,
 * //     },
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param FailoverGlobalClusterCommandInput - {@link FailoverGlobalClusterCommandInput}
 * @returns {@link FailoverGlobalClusterCommandOutput}
 * @see {@link FailoverGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link FailoverGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *
 * `DBClusterIdentifier` doesn't refer to an existing DB cluster.
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *
 * The `GlobalClusterIdentifier` doesn't refer to an existing global database cluster.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The requested operation can't be performed while the cluster is in this state.
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *
 * The global cluster is in an invalid state and can't perform the requested operation.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @public
 */
export class FailoverGlobalClusterCommand extends command<FailoverGlobalClusterCommandInput, FailoverGlobalClusterCommandOutput>(
  _ep0,
  _mw0,
  "FailoverGlobalCluster",
  FailoverGlobalCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: FailoverGlobalClusterMessage;
      output: FailoverGlobalClusterResult;
    };
    sdk: {
      input: FailoverGlobalClusterCommandInput;
      output: FailoverGlobalClusterCommandOutput;
    };
  };
}
