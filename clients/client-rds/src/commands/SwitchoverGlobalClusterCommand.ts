// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SwitchoverGlobalClusterMessage, SwitchoverGlobalClusterResult } from "../models/models_1";
import { de_SwitchoverGlobalClusterCommand, se_SwitchoverGlobalClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SwitchoverGlobalClusterCommand}.
 */
export interface SwitchoverGlobalClusterCommandInput extends SwitchoverGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link SwitchoverGlobalClusterCommand}.
 */
export interface SwitchoverGlobalClusterCommandOutput extends SwitchoverGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Switches over the specified secondary DB cluster to be the new primary DB cluster in the global database cluster.
 *        Switchover operations were previously called "managed planned failovers."</p>
 *          <p>Aurora promotes the specified secondary cluster to assume full read/write capabilities and demotes the current primary cluster
 *        to a secondary (read-only) cluster, maintaining the orginal replication topology. All secondary clusters are synchronized with the primary
 *        at the beginning of the process so the new primary continues operations for the Aurora global database without losing any data. Your database
 *        is unavailable for a short time while the primary and selected secondary clusters are assuming their new roles. For more information about
 *        switching over an Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Performing switchovers for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This operation is intended for controlled environments, for operations such as "regional rotation" or to fall back to the original
 *        primary after a global database failover.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, SwitchoverGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, SwitchoverGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // SwitchoverGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE", // required
 *   TargetDbClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new SwitchoverGlobalClusterCommand(input);
 * const response = await client.send(command);
 * // { // SwitchoverGlobalClusterResult
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
 * @param SwitchoverGlobalClusterCommandInput - {@link SwitchoverGlobalClusterCommandInput}
 * @returns {@link SwitchoverGlobalClusterCommandOutput}
 * @see {@link SwitchoverGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link SwitchoverGlobalClusterCommandOutput} for command's `response` shape.
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
export class SwitchoverGlobalClusterCommand extends $Command
  .classBuilder<
    SwitchoverGlobalClusterCommandInput,
    SwitchoverGlobalClusterCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "SwitchoverGlobalCluster", {})
  .n("RDSClient", "SwitchoverGlobalClusterCommand")
  .f(void 0, void 0)
  .ser(se_SwitchoverGlobalClusterCommand)
  .de(de_SwitchoverGlobalClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SwitchoverGlobalClusterMessage;
      output: SwitchoverGlobalClusterResult;
    };
    sdk: {
      input: SwitchoverGlobalClusterCommandInput;
      output: SwitchoverGlobalClusterCommandOutput;
    };
  };
}
