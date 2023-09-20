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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { RestoreDBClusterFromSnapshotMessage, RestoreDBClusterFromSnapshotResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_RestoreDBClusterFromSnapshotCommand, se_RestoreDBClusterFromSnapshotCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreDBClusterFromSnapshotCommand}.
 */
export interface RestoreDBClusterFromSnapshotCommandInput extends RestoreDBClusterFromSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link RestoreDBClusterFromSnapshotCommand}.
 */
export interface RestoreDBClusterFromSnapshotCommandOutput
  extends RestoreDBClusterFromSnapshotResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p>
 *          <p>If a DB snapshot is specified, the target DB cluster is created from the source DB
 *       snapshot with a default configuration and default security group.</p>
 *          <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB
 *       cluster restore point with the same configuration as the original source DB cluster, except
 *       that the new DB cluster is created with the default security group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RestoreDBClusterFromSnapshotCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RestoreDBClusterFromSnapshotCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // RestoreDBClusterFromSnapshotMessage
 *   AvailabilityZones: [ // AvailabilityZones
 *     "STRING_VALUE",
 *   ],
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   SnapshotIdentifier: "STRING_VALUE", // required
 *   Engine: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE",
 *   Port: Number("int"),
 *   DBSubnetGroupName: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE",
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
 *   EnableCloudwatchLogsExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 *   DBClusterParameterGroupName: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   CopyTagsToSnapshot: true || false,
 *   ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfiguration
 *     MinCapacity: Number("double"),
 *     MaxCapacity: Number("double"),
 *   },
 * };
 * const command = new RestoreDBClusterFromSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // RestoreDBClusterFromSnapshotResult
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
 * //     CopyTagsToSnapshot: true || false,
 * //     EnabledCloudwatchLogsExports: [ // LogTypeList
 * //       "STRING_VALUE",
 * //     ],
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
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       BackupRetentionPeriod: Number("int"),
 * //       AllocatedStorage: Number("int"),
 * //       Iops: Number("int"),
 * //     },
 * //     DeletionProtection: true || false,
 * //     CrossAccountClone: true || false,
 * //     AutomaticRestartTime: new Date("TIMESTAMP"),
 * //     ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfigurationInfo
 * //       MinCapacity: Number("double"),
 * //       MaxCapacity: Number("double"),
 * //     },
 * //     GlobalClusterIdentifier: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreDBClusterFromSnapshotCommandInput - {@link RestoreDBClusterFromSnapshotCommandInput}
 * @returns {@link RestoreDBClusterFromSnapshotCommandOutput}
 * @see {@link RestoreDBClusterFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterAlreadyExistsFault} (client fault)
 *  <p>User already has a DB cluster with the given identifier.</p>
 *
 * @throws {@link DBClusterParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterParameterGroupName</i> does not refer to an
 *       existing DB Cluster parameter group.</p>
 *
 * @throws {@link DBClusterQuotaExceededFault} (client fault)
 *  <p>User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterSnapshotIdentifier</i> does not refer to an existing
 *       DB cluster snapshot.</p>
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot.</p>
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBSubnetGroupName</i> does not refer to an
 *       existing DB subnet group.</p>
 *
 * @throws {@link InsufficientDBClusterCapacityFault} (client fault)
 *  <p>The DB cluster does not have enough capacity for the current operation.</p>
 *
 * @throws {@link InsufficientStorageClusterCapacityFault} (client fault)
 *  <p>There is insufficient storage available for the current action. You may
 *        be able to resolve this error by updating your subnet group to use different
 *        Availability Zones that have more storage available.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value is not a valid DB cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *  <p>The state of the DB snapshot does not allow deletion.</p>
 *
 * @throws {@link InvalidRestoreFault} (client fault)
 *  <p>Cannot restore from vpc backup to non-vpc DB instance.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are
 *       not all in a common VPC.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>DB subnet group does not cover all Availability Zones after it is created
 *       because users' change.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>Error accessing KMS key.</p>
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *  <p>The designated option group could not be found.</p>
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 */
export class RestoreDBClusterFromSnapshotCommand extends $Command<
  RestoreDBClusterFromSnapshotCommandInput,
  RestoreDBClusterFromSnapshotCommandOutput,
  NeptuneClientResolvedConfig
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
  constructor(readonly input: RestoreDBClusterFromSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreDBClusterFromSnapshotCommandInput, RestoreDBClusterFromSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreDBClusterFromSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "RestoreDBClusterFromSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "RestoreDBClusterFromSnapshot",
      },
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
  private serialize(input: RestoreDBClusterFromSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RestoreDBClusterFromSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBClusterFromSnapshotCommandOutput> {
    return de_RestoreDBClusterFromSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
