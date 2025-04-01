// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyGlobalClusterMessage, ModifyGlobalClusterResult } from "../models/models_1";
import { de_ModifyGlobalClusterCommand, se_ModifyGlobalClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyGlobalClusterCommand}.
 */
export interface ModifyGlobalClusterCommandInput extends ModifyGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link ModifyGlobalClusterCommand}.
 */
export interface ModifyGlobalClusterCommandOutput extends ModifyGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Modifies a setting for an Amazon Aurora global database cluster. You can change one or more database configuration
 *         parameters by specifying these parameters and the new values in the request. For more information on
 *         Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the
 *         <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This operation only applies to Aurora global database clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE",
 *   NewGlobalClusterIdentifier: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   EngineVersion: "STRING_VALUE",
 *   AllowMajorVersionUpgrade: true || false,
 * };
 * const command = new ModifyGlobalClusterCommand(input);
 * const response = await client.send(command);
 * // { // ModifyGlobalClusterResult
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
 * @param ModifyGlobalClusterCommandInput - {@link ModifyGlobalClusterCommandInput}
 * @returns {@link ModifyGlobalClusterCommandOutput}
 * @see {@link ModifyGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link GlobalClusterAlreadyExistsFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> already exists. Specify a new global database identifier
 *         (unique name) to create a new global database cluster or to rename an existing one.</p>
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The global cluster is in an invalid state and can't perform the requested operation.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To modify a global database cluster
 * ```javascript
 * // The following example enables deletion protection for an Aurora MySQL-based global database cluster.
 * const input = {
 *   DeletionProtection: true,
 *   GlobalClusterIdentifier: "myglobalcluster"
 * };
 * const command = new ModifyGlobalClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GlobalCluster: {
 *     DeletionProtection: true,
 *     Engine: "aurora-mysql",
 *     EngineVersion: "5.7.mysql_aurora.2.07.2",
 *     GlobalClusterArn: "arn:aws:rds::123456789012:global-cluster:myglobalcluster",
 *     GlobalClusterIdentifier: "myglobalcluster",
 *     GlobalClusterMembers:     [],
 *     GlobalClusterResourceId: "cluster-f0e523bfe07aabb",
 *     Status: "available",
 *     StorageEncrypted: false
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyGlobalClusterCommand extends $Command
  .classBuilder<
    ModifyGlobalClusterCommandInput,
    ModifyGlobalClusterCommandOutput,
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
  .s("AmazonRDSv19", "ModifyGlobalCluster", {})
  .n("RDSClient", "ModifyGlobalClusterCommand")
  .f(void 0, void 0)
  .ser(se_ModifyGlobalClusterCommand)
  .de(de_ModifyGlobalClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyGlobalClusterMessage;
      output: ModifyGlobalClusterResult;
    };
    sdk: {
      input: ModifyGlobalClusterCommandInput;
      output: ModifyGlobalClusterCommandOutput;
    };
  };
}
