// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateGlobalClusterMessage, CreateGlobalClusterResult } from "../models/models_0";
import { de_CreateGlobalClusterCommand, se_CreateGlobalClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGlobalClusterCommand}.
 */
export interface CreateGlobalClusterCommandInput extends CreateGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link CreateGlobalClusterCommand}.
 */
export interface CreateGlobalClusterCommandOutput extends CreateGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Creates an Aurora global database
 *         spread across multiple Amazon Web Services Regions. The global database
 *         contains a single primary cluster with read-write capability,
 *         and a read-only secondary cluster that receives
 *         data from the primary cluster through high-speed replication
 *         performed by the Aurora storage subsystem.</p>
 *          <p>You can create a global database that is initially empty, and then
 *         create the primary and secondary DB clusters in the global database.
 *         Or you can specify an existing Aurora cluster during the create operation,
 *         and this cluster becomes the primary cluster of the global database.</p>
 *          <note>
 *             <p>This operation applies only to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // CreateGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE",
 *   SourceDBClusterIdentifier: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   EngineLifecycleSupport: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   DatabaseName: "STRING_VALUE",
 *   StorageEncrypted: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateGlobalClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateGlobalClusterResult
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
 * @param CreateGlobalClusterCommandInput - {@link CreateGlobalClusterCommandInput}
 * @returns {@link CreateGlobalClusterCommandOutput}
 * @see {@link CreateGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link GlobalClusterAlreadyExistsFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> already exists. Specify a new global database identifier
 *         (unique name) to create a new global database cluster or to rename an existing one.</p>
 *
 * @throws {@link GlobalClusterQuotaExceededFault} (client fault)
 *  <p>The number of global database clusters for this account is already at the maximum allowed.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To create a global DB cluster
 * ```javascript
 * // The following example creates a new Aurora MySQL-compatible global DB cluster.
 * const input = {
 *   "Engine": "aurora-mysql",
 *   "GlobalClusterIdentifier": "myglobalcluster"
 * };
 * const command = new CreateGlobalClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GlobalCluster": {
 *     "DeletionProtection": false,
 *     "Engine": "aurora-mysql",
 *     "EngineVersion": "5.7.mysql_aurora.2.07.2",
 *     "GlobalClusterArn": "arn:aws:rds::123456789012:global-cluster:myglobalcluster",
 *     "GlobalClusterIdentifier": "myglobalcluster",
 *     "GlobalClusterMembers": [],
 *     "GlobalClusterResourceId": "cluster-f0e523bfe07aabb",
 *     "Status": "available",
 *     "StorageEncrypted": false
 *   }
 * }
 * *\/
 * // example id: to-create-a-global-db-cluster-1679957040413
 * ```
 *
 */
export class CreateGlobalClusterCommand extends $Command
  .classBuilder<
    CreateGlobalClusterCommandInput,
    CreateGlobalClusterCommandOutput,
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
  .s("AmazonRDSv19", "CreateGlobalCluster", {})
  .n("RDSClient", "CreateGlobalClusterCommand")
  .f(void 0, void 0)
  .ser(se_CreateGlobalClusterCommand)
  .de(de_CreateGlobalClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGlobalClusterMessage;
      output: CreateGlobalClusterResult;
    };
    sdk: {
      input: CreateGlobalClusterCommandInput;
      output: CreateGlobalClusterCommandOutput;
    };
  };
}
