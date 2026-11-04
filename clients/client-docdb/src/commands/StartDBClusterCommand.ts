// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDBClusterMessage, StartDBClusterResult } from "../models/models_0";
import { StartDBCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDBClusterCommand}.
 */
export interface StartDBClusterCommandInput extends StartDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link StartDBClusterCommand}.
 */
export interface StartDBClusterCommandOutput extends StartDBClusterResult, __MetadataBearer {}

/**
 * Restarts the stopped cluster that is specified by `DBClusterIdentifier`. For more information, see [Stopping and Starting an Amazon DocumentDB Cluster](https://docs.aws.amazon.com/documentdb/latest/devguide/db-cluster-stop-start.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, StartDBClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, StartDBClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
 * const input = { // StartDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartDBClusterCommand(input);
 * const response = await client.send(command);
 * // { // StartDBClusterResult
 * //   DBCluster: { // DBCluster
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     BackupRetentionPeriod: Number("int"),
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     DBClusterParameterGroup: "STRING_VALUE",
 * //     DBSubnetGroup: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     PercentProgress: "STRING_VALUE",
 * //     EarliestRestorableTime: new Date("TIMESTAMP"),
 * //     Endpoint: "STRING_VALUE",
 * //     ReaderEndpoint: "STRING_VALUE",
 * //     MultiAZ: true || false,
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LatestRestorableTime: new Date("TIMESTAMP"),
 * //     Port: Number("int"),
 * //     MasterUsername: "STRING_VALUE",
 * //     PreferredBackupWindow: "STRING_VALUE",
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     ReplicationSourceIdentifier: "STRING_VALUE",
 * //     ReadReplicaIdentifiers: [ // ReadReplicaIdentifierList
 * //       "STRING_VALUE",
 * //     ],
 * //     DBClusterMembers: [ // DBClusterMemberList
 * //       { // DBClusterMember
 * //         DBInstanceIdentifier: "STRING_VALUE",
 * //         IsClusterWriter: true || false,
 * //         DBClusterParameterGroupStatus: "STRING_VALUE",
 * //         PromotionTier: Number("int"),
 * //       },
 * //     ],
 * //     VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //       { // VpcSecurityGroupMembership
 * //         VpcSecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     HostedZoneId: "STRING_VALUE",
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DbClusterResourceId: "STRING_VALUE",
 * //     DBClusterArn: "STRING_VALUE",
 * //     AssociatedRoles: [ // DBClusterRoles
 * //       { // DBClusterRole
 * //         RoleArn: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CloneGroupId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     EnabledCloudwatchLogsExports: [ // LogTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     DeletionProtection: true || false,
 * //     IOOptimizedNextAllowedModificationTime: new Date("TIMESTAMP"),
 * //     StorageType: "STRING_VALUE",
 * //     ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfigurationInfo
 * //       MinCapacity: Number("double"),
 * //       MaxCapacity: Number("double"),
 * //     },
 * //     ServerlessV2PlatformVersion: "STRING_VALUE",
 * //     MasterUserSecret: { // ClusterMasterUserSecret
 * //       SecretArn: "STRING_VALUE",
 * //       SecretStatus: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     NetworkType: "STRING_VALUE",
 * //     CopyTagsToSnapshot: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param StartDBClusterCommandInput - {@link StartDBClusterCommandInput}
 * @returns {@link StartDBClusterCommandOutput}
 * @see {@link StartDBClusterCommandInput} for command's `input` shape.
 * @see {@link StartDBClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *
 * `DBClusterIdentifier` doesn't refer to an existing cluster.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The cluster isn't in a valid state.
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *
 * The specified instance isn't in the *available* state.
 *
 * @throws {@link DocDBServiceException}
 *
 * Base exception class for all service exceptions from DocDB service.
 *
 * @public
 */
export class StartDBClusterCommand extends command<StartDBClusterCommandInput, StartDBClusterCommandOutput>(
  _ep0,
  _mw0,
  "StartDBCluster",
  StartDBCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDBClusterMessage;
      output: StartDBClusterResult;
    };
    sdk: {
      input: StartDBClusterCommandInput;
      output: StartDBClusterCommandOutput;
    };
  };
}
