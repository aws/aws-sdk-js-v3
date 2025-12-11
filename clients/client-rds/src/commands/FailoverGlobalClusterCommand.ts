// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FailoverGlobalClusterMessage, FailoverGlobalClusterResult } from "../models/models_1";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { FailoverGlobalCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Promotes the specified secondary DB cluster to be the primary DB cluster in the global database cluster to fail over or switch over a global database. Switchover operations were previously called "managed planned failovers."</p>
 *          <note>
 *             <p>Although this operation can be used either to fail over or to switch over a global database cluster, its intended use is for global database failover.
 *         To switch over a global database cluster, we recommend that you use the <a>SwitchoverGlobalCluster</a> operation instead.</p>
 *          </note>
 *          <p>How you use this operation depends on whether you are failing over or switching over your global database cluster:</p>
 *          <ul>
 *             <li>
 *                <p>Failing over - Specify the <code>AllowDataLoss</code> parameter and don't specify the <code>Switchover</code> parameter.</p>
 *             </li>
 *             <li>
 *                <p>Switching over - Specify the <code>Switchover</code> parameter or omit it, but don't specify the <code>AllowDataLoss</code> parameter.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>About failing over and switching over</b>
 *          </p>
 *          <p>While failing over and switching over a global database cluster both change the primary DB cluster, you use these operations for different reasons:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Failing over</i> - Use this operation to respond to an unplanned event, such as a Regional disaster in the primary Region.
 *             Failing over can result in a loss of write transaction data that wasn't replicated to the chosen secondary before the failover event occurred.
 *             However, the recovery process that promotes a DB instance on the chosen seconday DB cluster to be the primary writer DB instance guarantees
 *             that the data is in a transactionally consistent state.</p>
 *                <p>For more information about failing over an Amazon Aurora global database, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-failover.managed-unplanned">Performing managed failovers for Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Switching over</i> - Use this operation on a healthy global database cluster for planned events, such as Regional rotation or to
 *             fail back to the original primary DB cluster after a failover operation. With this operation, there is no data loss.</p>
 *                <p>For more information about switching over an Amazon Aurora global database, see
 *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Performing switchovers for Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *             </li>
 *          </ul>
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
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The global cluster is in an invalid state and can't perform the requested operation.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class FailoverGlobalClusterCommand extends $Command
  .classBuilder<
    FailoverGlobalClusterCommandInput,
    FailoverGlobalClusterCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "FailoverGlobalCluster", {})
  .n("RDSClient", "FailoverGlobalClusterCommand")
  .sc(FailoverGlobalCluster)
  .build() {
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
