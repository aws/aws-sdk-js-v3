// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { RestoreDBClusterToPointInTimeMessage, RestoreDBClusterToPointInTimeResult } from "../models/models_1";
import {
  de_RestoreDBClusterToPointInTimeCommand,
  se_RestoreDBClusterToPointInTimeCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreDBClusterToPointInTimeCommand}.
 */
export interface RestoreDBClusterToPointInTimeCommandInput extends RestoreDBClusterToPointInTimeMessage {}
/**
 * @public
 *
 * The output of {@link RestoreDBClusterToPointInTimeCommand}.
 */
export interface RestoreDBClusterToPointInTimeCommandOutput
  extends RestoreDBClusterToPointInTimeResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point
 *             in time before <code>LatestRestorableTime</code> for up to
 *                 <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the
 *             source DB cluster with the same configuration as the original DB cluster, except that
 *             the new DB cluster is created with the default DB security group.</p>
 *          <note>
 *             <p>For Aurora, this action only restores the DB cluster, not the DB instances for that DB
 *                 cluster. You must invoke the <code>CreateDBInstance</code> action to create DB
 *                 instances for the restored DB cluster, specifying the identifier of the restored DB
 *                 cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after
 *                 the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB
 *                 cluster is available.</p>
 *          </note>
 *          <p>For more information on Amazon Aurora DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBClusterToPointInTimeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBClusterToPointInTimeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // RestoreDBClusterToPointInTimeMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   RestoreType: "STRING_VALUE",
 *   SourceDBClusterIdentifier: "STRING_VALUE", // required
 *   RestoreToTime: new Date("TIMESTAMP"),
 *   UseLatestRestorableTime: true || false,
 *   Port: Number("int"),
 *   DBSubnetGroupName: "STRING_VALUE",
 *   OptionGroupName: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   KmsKeyId: "STRING_VALUE",
 *   EnableIAMDatabaseAuthentication: true || false,
 *   BacktrackWindow: Number("long"),
 *   EnableCloudwatchLogsExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 *   DBClusterParameterGroupName: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   CopyTagsToSnapshot: true || false,
 *   Domain: "STRING_VALUE",
 *   DomainIAMRoleName: "STRING_VALUE",
 *   ScalingConfiguration: { // ScalingConfiguration
 *     MinCapacity: Number("int"),
 *     MaxCapacity: Number("int"),
 *     AutoPause: true || false,
 *     SecondsUntilAutoPause: Number("int"),
 *     TimeoutAction: "STRING_VALUE",
 *     SecondsBeforeTimeout: Number("int"),
 *   },
 *   EngineMode: "STRING_VALUE",
 *   DBClusterInstanceClass: "STRING_VALUE",
 *   StorageType: "STRING_VALUE",
 *   PubliclyAccessible: true || false,
 *   Iops: Number("int"),
 *   ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfiguration
 *     MinCapacity: Number("double"),
 *     MaxCapacity: Number("double"),
 *   },
 *   NetworkType: "STRING_VALUE",
 * };
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * // { // RestoreDBClusterToPointInTimeResult
 * //   DBCluster: { // DBCluster
 * //     AllocatedStorage: Number("int"),
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     BackupRetentionPeriod: Number("int"),
 * //     CharacterSetName: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     DBClusterParameterGroup: "STRING_VALUE",
 * //     DBSubnetGroup: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     AutomaticRestartTime: new Date("TIMESTAMP"),
 * //     PercentProgress: "STRING_VALUE",
 * //     EarliestRestorableTime: new Date("TIMESTAMP"),
 * //     Endpoint: "STRING_VALUE",
 * //     ReaderEndpoint: "STRING_VALUE",
 * //     CustomEndpoints: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     MultiAZ: true || false,
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LatestRestorableTime: new Date("TIMESTAMP"),
 * //     Port: Number("int"),
 * //     MasterUsername: "STRING_VALUE",
 * //     DBClusterOptionGroupMemberships: [ // DBClusterOptionGroupMemberships
 * //       { // DBClusterOptionGroupStatus
 * //         DBClusterOptionGroupName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
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
 * //         FeatureName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     CloneGroupId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     EarliestBacktrackTime: new Date("TIMESTAMP"),
 * //     BacktrackWindow: Number("long"),
 * //     BacktrackConsumedChangeRecords: Number("long"),
 * //     EnabledCloudwatchLogsExports: [ // LogTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     Capacity: Number("int"),
 * //     EngineMode: "STRING_VALUE",
 * //     ScalingConfigurationInfo: { // ScalingConfigurationInfo
 * //       MinCapacity: Number("int"),
 * //       MaxCapacity: Number("int"),
 * //       AutoPause: true || false,
 * //       SecondsUntilAutoPause: Number("int"),
 * //       TimeoutAction: "STRING_VALUE",
 * //       SecondsBeforeTimeout: Number("int"),
 * //     },
 * //     DeletionProtection: true || false,
 * //     HttpEndpointEnabled: true || false,
 * //     ActivityStreamMode: "sync" || "async",
 * //     ActivityStreamStatus: "stopped" || "starting" || "started" || "stopping",
 * //     ActivityStreamKmsKeyId: "STRING_VALUE",
 * //     ActivityStreamKinesisStreamName: "STRING_VALUE",
 * //     CopyTagsToSnapshot: true || false,
 * //     CrossAccountClone: true || false,
 * //     DomainMemberships: [ // DomainMembershipList
 * //       { // DomainMembership
 * //         Domain: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         FQDN: "STRING_VALUE",
 * //         IAMRoleName: "STRING_VALUE",
 * //         OU: "STRING_VALUE",
 * //         AuthSecretArn: "STRING_VALUE",
 * //         DnsIps: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     GlobalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "unknown",
 * //     GlobalWriteForwardingRequested: true || false,
 * //     PendingModifiedValues: { // ClusterPendingModifiedValues
 * //       PendingCloudwatchLogsExports: { // PendingCloudwatchLogsExports
 * //         LogTypesToEnable: [
 * //           "STRING_VALUE",
 * //         ],
 * //         LogTypesToDisable: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       MasterUserPassword: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       BackupRetentionPeriod: Number("int"),
 * //       AllocatedStorage: Number("int"),
 * //       Iops: Number("int"),
 * //       StorageType: "STRING_VALUE",
 * //     },
 * //     DBClusterInstanceClass: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     PubliclyAccessible: true || false,
 * //     AutoMinorVersionUpgrade: true || false,
 * //     MonitoringInterval: Number("int"),
 * //     MonitoringRoleArn: "STRING_VALUE",
 * //     PerformanceInsightsEnabled: true || false,
 * //     PerformanceInsightsKMSKeyId: "STRING_VALUE",
 * //     PerformanceInsightsRetentionPeriod: Number("int"),
 * //     ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfigurationInfo
 * //       MinCapacity: Number("double"),
 * //       MaxCapacity: Number("double"),
 * //     },
 * //     NetworkType: "STRING_VALUE",
 * //     DBSystemId: "STRING_VALUE",
 * //     MasterUserSecret: { // MasterUserSecret
 * //       SecretArn: "STRING_VALUE",
 * //       SecretStatus: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     IOOptimizedNextAllowedModificationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreDBClusterToPointInTimeCommandInput - {@link RestoreDBClusterToPointInTimeCommandInput}
 * @returns {@link RestoreDBClusterToPointInTimeCommandOutput}
 * @see {@link RestoreDBClusterToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterAlreadyExistsFault} (client fault)
 *  <p>The user already has a DB cluster with the given identifier.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing DB
 *             cluster parameter group.</p>
 *
 * @throws {@link DBClusterQuotaExceededFault} (client fault)
 *  <p>The user attempted to create a new DB cluster and the user has already reached the
 *             maximum allowed DB cluster quota.</p>
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group.</p>
 *
 * @throws {@link DomainNotFoundFault} (client fault)
 *  <p>
 *             <code>Domain</code> doesn't refer to an existing Active Directory domain.</p>
 *
 * @throws {@link InsufficientDBClusterCapacityFault} (client fault)
 *  <p>The DB cluster doesn't have enough capacity for the current operation.</p>
 *
 * @throws {@link InsufficientStorageClusterCapacityFault} (client fault)
 *  <p>There is insufficient storage available for the current action. You might be able to
 *             resolve this error by updating your subnet group to use different Availability Zones
 *             that have more storage available.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value isn't a valid DB cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *  <p>The state of the DB snapshot doesn't allow deletion.</p>
 *
 * @throws {@link InvalidRestoreFault} (client fault)
 *  <p>Cannot restore from VPC backup to non-VPC DB instance.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The DB subnet group doesn't cover all Availability Zones after it's
 *             created because of users' change.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *  <p>The specified option group could not be found.</p>
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed amount of storage
 *             available across all DB instances.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To restore a DB cluster to a specified time
 * ```javascript
 * // The following example restores the DB cluster named database-4 to the latest possible time. Using copy-on-write as the restore type restores the new DB cluster as a clone of the source DB cluster.
 * const input = {
 *   "DBClusterIdentifier": "sample-cluster-clone",
 *   "RestoreType": "copy-on-write",
 *   "SourceDBClusterIdentifier": "database-4",
 *   "UseLatestRestorableTime": true
 * };
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBCluster": {
 *     "AllocatedStorage": 1,
 *     "AssociatedRoles": [],
 *     "AvailabilityZones": [
 *       "us-west-2c",
 *       "us-west-2a",
 *       "us-west-2b"
 *     ],
 *     "BackupRetentionPeriod": 7,
 *     "CloneGroupId": "8d19331a-099a-45a4-b4aa-11aa22bb33cc44dd",
 *     "ClusterCreateTime": "2020-03-10T19:57:38.967Z",
 *     "CopyTagsToSnapshot": false,
 *     "CrossAccountClone": false,
 *     "DBClusterArn": "arn:aws:rds:us-west-2:123456789012:cluster:sample-cluster-clone",
 *     "DBClusterIdentifier": "sample-cluster-clone",
 *     "DBClusterMembers": [],
 *     "DBClusterParameterGroup": "default.aurora-postgresql10",
 *     "DBSubnetGroup": "default",
 *     "DatabaseName": "",
 *     "DbClusterResourceId": "cluster-BIZ77GDSA2XBSTNPFW1EXAMPLE",
 *     "DeletionProtection": false,
 *     "Endpoint": "sample-cluster-clone.cluster-############.us-west-2.rds.amazonaws.com",
 *     "Engine": "aurora-postgresql",
 *     "EngineMode": "provisioned",
 *     "EngineVersion": "10.7",
 *     "HostedZoneId": "Z1PVIF0EXAMPLE",
 *     "HttpEndpointEnabled": false,
 *     "IAMDatabaseAuthenticationEnabled": false,
 *     "KmsKeyId": "arn:aws:kms:us-west-2:123456789012:key/287364e4-33e3-4755-a3b0-a1b2c3d4e5f6",
 *     "MasterUsername": "postgres",
 *     "MultiAZ": false,
 *     "Port": 5432,
 *     "PreferredBackupWindow": "09:33-10:03",
 *     "PreferredMaintenanceWindow": "sun:12:22-sun:12:52",
 *     "ReadReplicaIdentifiers": [],
 *     "ReaderEndpoint": "sample-cluster-clone.cluster-ro-############.us-west-2.rds.amazonaws.com",
 *     "Status": "creating",
 *     "StorageEncrypted": true,
 *     "VpcSecurityGroups": [
 *       {
 *         "Status": "active",
 *         "VpcSecurityGroupId": "sg-########"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-restore-a-db-cluster-to-a-specified-time-1680069105508
 * ```
 *
 */
export class RestoreDBClusterToPointInTimeCommand extends $Command<
  RestoreDBClusterToPointInTimeCommandInput,
  RestoreDBClusterToPointInTimeCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: RestoreDBClusterToPointInTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreDBClusterToPointInTimeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RestoreDBClusterToPointInTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: RestoreDBClusterToPointInTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RestoreDBClusterToPointInTimeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBClusterToPointInTimeCommandOutput> {
    return de_RestoreDBClusterToPointInTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
