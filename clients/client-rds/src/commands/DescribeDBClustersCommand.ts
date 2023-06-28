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

import { DBClusterMessage, DescribeDBClustersMessage } from "../models/models_0";
import { de_DescribeDBClustersCommand, se_DescribeDBClustersCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClustersCommand}.
 */
export interface DescribeDBClustersCommandInput extends DescribeDBClustersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClustersCommand}.
 */
export interface DescribeDBClustersCommandOutput extends DBClusterMessage, __MetadataBearer {}

/**
 * @public
 * <p>Describes existing Amazon Aurora DB clusters and Multi-AZ DB clusters. This API supports pagination.</p>
 *          <p>For more information on Amazon Aurora DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 *          <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClustersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClustersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBClustersMessage
 *   DBClusterIdentifier: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   IncludeShared: true || false,
 * };
 * const command = new DescribeDBClustersCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusters: [ // DBClusterList
 * //     { // DBCluster
 * //       AllocatedStorage: Number("int"),
 * //       AvailabilityZones: [ // AvailabilityZones
 * //         "STRING_VALUE",
 * //       ],
 * //       BackupRetentionPeriod: Number("int"),
 * //       CharacterSetName: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       DBClusterParameterGroup: "STRING_VALUE",
 * //       DBSubnetGroup: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       AutomaticRestartTime: new Date("TIMESTAMP"),
 * //       PercentProgress: "STRING_VALUE",
 * //       EarliestRestorableTime: new Date("TIMESTAMP"),
 * //       Endpoint: "STRING_VALUE",
 * //       ReaderEndpoint: "STRING_VALUE",
 * //       CustomEndpoints: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       MultiAZ: true || false,
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       LatestRestorableTime: new Date("TIMESTAMP"),
 * //       Port: Number("int"),
 * //       MasterUsername: "STRING_VALUE",
 * //       DBClusterOptionGroupMemberships: [ // DBClusterOptionGroupMemberships
 * //         { // DBClusterOptionGroupStatus
 * //           DBClusterOptionGroupName: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PreferredBackupWindow: "STRING_VALUE",
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       ReplicationSourceIdentifier: "STRING_VALUE",
 * //       ReadReplicaIdentifiers: [ // ReadReplicaIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //       DBClusterMembers: [ // DBClusterMemberList
 * //         { // DBClusterMember
 * //           DBInstanceIdentifier: "STRING_VALUE",
 * //           IsClusterWriter: true || false,
 * //           DBClusterParameterGroupStatus: "STRING_VALUE",
 * //           PromotionTier: Number("int"),
 * //         },
 * //       ],
 * //       VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //         { // VpcSecurityGroupMembership
 * //           VpcSecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       HostedZoneId: "STRING_VALUE",
 * //       StorageEncrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       DbClusterResourceId: "STRING_VALUE",
 * //       DBClusterArn: "STRING_VALUE",
 * //       AssociatedRoles: [ // DBClusterRoles
 * //         { // DBClusterRole
 * //           RoleArn: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           FeatureName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       CloneGroupId: "STRING_VALUE",
 * //       ClusterCreateTime: new Date("TIMESTAMP"),
 * //       EarliestBacktrackTime: new Date("TIMESTAMP"),
 * //       BacktrackWindow: Number("long"),
 * //       BacktrackConsumedChangeRecords: Number("long"),
 * //       EnabledCloudwatchLogsExports: [ // LogTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       Capacity: Number("int"),
 * //       EngineMode: "STRING_VALUE",
 * //       ScalingConfigurationInfo: { // ScalingConfigurationInfo
 * //         MinCapacity: Number("int"),
 * //         MaxCapacity: Number("int"),
 * //         AutoPause: true || false,
 * //         SecondsUntilAutoPause: Number("int"),
 * //         TimeoutAction: "STRING_VALUE",
 * //         SecondsBeforeTimeout: Number("int"),
 * //       },
 * //       DeletionProtection: true || false,
 * //       HttpEndpointEnabled: true || false,
 * //       ActivityStreamMode: "sync" || "async",
 * //       ActivityStreamStatus: "stopped" || "starting" || "started" || "stopping",
 * //       ActivityStreamKmsKeyId: "STRING_VALUE",
 * //       ActivityStreamKinesisStreamName: "STRING_VALUE",
 * //       CopyTagsToSnapshot: true || false,
 * //       CrossAccountClone: true || false,
 * //       DomainMemberships: [ // DomainMembershipList
 * //         { // DomainMembership
 * //           Domain: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           FQDN: "STRING_VALUE",
 * //           IAMRoleName: "STRING_VALUE",
 * //           OU: "STRING_VALUE",
 * //           AuthSecretArn: "STRING_VALUE",
 * //           DnsIps: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       GlobalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "unknown",
 * //       GlobalWriteForwardingRequested: true || false,
 * //       PendingModifiedValues: { // ClusterPendingModifiedValues
 * //         PendingCloudwatchLogsExports: { // PendingCloudwatchLogsExports
 * //           LogTypesToEnable: [
 * //             "STRING_VALUE",
 * //           ],
 * //           LogTypesToDisable: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         DBClusterIdentifier: "STRING_VALUE",
 * //         MasterUserPassword: "STRING_VALUE",
 * //         IAMDatabaseAuthenticationEnabled: true || false,
 * //         EngineVersion: "STRING_VALUE",
 * //         BackupRetentionPeriod: Number("int"),
 * //         AllocatedStorage: Number("int"),
 * //         Iops: Number("int"),
 * //         StorageType: "STRING_VALUE",
 * //       },
 * //       DBClusterInstanceClass: "STRING_VALUE",
 * //       StorageType: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //       PubliclyAccessible: true || false,
 * //       AutoMinorVersionUpgrade: true || false,
 * //       MonitoringInterval: Number("int"),
 * //       MonitoringRoleArn: "STRING_VALUE",
 * //       PerformanceInsightsEnabled: true || false,
 * //       PerformanceInsightsKMSKeyId: "STRING_VALUE",
 * //       PerformanceInsightsRetentionPeriod: Number("int"),
 * //       ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfigurationInfo
 * //         MinCapacity: Number("double"),
 * //         MaxCapacity: Number("double"),
 * //       },
 * //       NetworkType: "STRING_VALUE",
 * //       DBSystemId: "STRING_VALUE",
 * //       MasterUserSecret: { // MasterUserSecret
 * //         SecretArn: "STRING_VALUE",
 * //         SecretStatus: "STRING_VALUE",
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //       IOOptimizedNextAllowedModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClustersCommandInput - {@link DescribeDBClustersCommandInput}
 * @returns {@link DescribeDBClustersCommandOutput}
 * @see {@link DescribeDBClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClustersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe a DB cluster
 * ```javascript
 * // The following example retrieves the details of the specified DB cluster.
 * const input = {
 *   "DBClusterIdentifier": "mydbcluster"
 * };
 * const command = new DescribeDBClustersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusters": [
 *     {
 *       "AllocatedStorage": 1,
 *       "AssociatedRoles": [],
 *       "AvailabilityZones": [
 *         "us-east-1a",
 *         "us-east-1b",
 *         "us-east-1e"
 *       ],
 *       "BackupRetentionPeriod": 1,
 *       "ClusterCreateTime": "2019-04-15T14:18:42.785Z",
 *       "DBClusterArn": "arn:aws:rds:us-east-1:123456789012:cluster:mydbcluster",
 *       "DBClusterIdentifier": "mydbcluster",
 *       "DBClusterMembers": [
 *         {
 *           "DBClusterParameterGroupStatus": "in-sync",
 *           "DBInstanceIdentifier": "dbinstance3",
 *           "IsClusterWriter": false,
 *           "PromotionTier": 1
 *         },
 *         {
 *           "DBClusterParameterGroupStatus": "in-sync",
 *           "DBInstanceIdentifier": "dbinstance1",
 *           "IsClusterWriter": false,
 *           "PromotionTier": 1
 *         },
 *         {
 *           "DBClusterParameterGroupStatus": "in-sync",
 *           "DBInstanceIdentifier": "dbinstance2",
 *           "IsClusterWriter": false,
 *           "PromotionTier": 1
 *         },
 *         {
 *           "DBClusterParameterGroupStatus": "in-sync",
 *           "DBInstanceIdentifier": "mydbcluster",
 *           "IsClusterWriter": false,
 *           "PromotionTier": 1
 *         },
 *         {
 *           "DBClusterParameterGroupStatus": "in-sync",
 *           "DBInstanceIdentifier": "mydbcluster-us-east-1b",
 *           "IsClusterWriter": false,
 *           "PromotionTier": 1
 *         },
 *         {
 *           "DBClusterParameterGroupStatus": "in-sync",
 *           "DBInstanceIdentifier": "mydbcluster",
 *           "IsClusterWriter": true,
 *           "PromotionTier": 1
 *         }
 *       ],
 *       "DBClusterParameterGroup": "default.aurora-mysql5.7",
 *       "DBSubnetGroup": "default",
 *       "DatabaseName": "mydbcluster",
 *       "DbClusterResourceId": "cluster-AKIAIOSFODNN7EXAMPLE",
 *       "DeletionProtection": false,
 *       "EarliestRestorableTime": "2019-06-19T09:16:28.210Z",
 *       "Endpoint": "mydbcluster.cluster-cnpexample.us-east-1.rds.amazonaws.com",
 *       "Engine": "aurora-mysql",
 *       "EngineMode": "provisioned",
 *       "EngineVersion": "5.7.mysql_aurora.2.04.2",
 *       "HostedZoneId": "Z2R2ITUGPM61AM",
 *       "HttpEndpointEnabled": false,
 *       "IAMDatabaseAuthenticationEnabled": false,
 *       "KmsKeyId": "arn:aws:kms:us-east-1:814387698303:key/AKIAIOSFODNN7EXAMPLE",
 *       "LatestRestorableTime": "2019-06-20T22:38:14.908Z",
 *       "MasterUsername": "myadmin",
 *       "MultiAZ": true,
 *       "Port": 3306,
 *       "PreferredBackupWindow": "09:09-09:39",
 *       "PreferredMaintenanceWindow": "sat:04:09-sat:04:39",
 *       "ReadReplicaIdentifiers": [],
 *       "ReaderEndpoint": "mydbcluster.cluster-ro-cnpexample.us-east-1.rds.amazonaws.com",
 *       "Status": "available",
 *       "StorageEncrypted": true,
 *       "VpcSecurityGroups": [
 *         {
 *           "Status": "active",
 *           "VpcSecurityGroupId": "sg-0b9130572daf3dc16"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-db-cluster-1680215000529
 * ```
 *
 */
export class DescribeDBClustersCommand extends $Command<
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput,
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
  constructor(readonly input: DescribeDBClustersCommandInput) {
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
  ): Handler<DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClustersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBClustersCommand";
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
  private serialize(input: DescribeDBClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBClustersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBClustersCommandOutput> {
    return de_DescribeDBClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
