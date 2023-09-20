// smithy-typescript generated code
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
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

import { CreateDBClusterMessage, CreateDBClusterResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_CreateDBClusterCommand, se_CreateDBClusterCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDBClusterCommand}.
 */
export interface CreateDBClusterCommandInput extends CreateDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBClusterCommand}.
 */
export interface CreateDBClusterCommandOutput extends CreateDBClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new Amazon Neptune DB cluster.</p>
 *          <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB
 *       cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p>
 *          <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly,
 *       deletion protection is disabled by default (when you create a new production cluster in
 *       the console, deletion protection is enabled by default). You can only delete a DB
 *       cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // CreateDBClusterMessage
 *   AvailabilityZones: [ // AvailabilityZones
 *     "STRING_VALUE",
 *   ],
 *   BackupRetentionPeriod: Number("int"),
 *   CharacterSetName: "STRING_VALUE",
 *   CopyTagsToSnapshot: true || false,
 *   DatabaseName: "STRING_VALUE",
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   DBClusterParameterGroupName: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   DBSubnetGroupName: "STRING_VALUE",
 *   Engine: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE",
 *   Port: Number("int"),
 *   MasterUsername: "STRING_VALUE",
 *   MasterUserPassword: "STRING_VALUE",
 *   OptionGroupName: "STRING_VALUE",
 *   PreferredBackupWindow: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   ReplicationSourceIdentifier: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   StorageEncrypted: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   PreSignedUrl: "STRING_VALUE",
 *   EnableIAMDatabaseAuthentication: true || false,
 *   EnableCloudwatchLogsExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 *   DeletionProtection: true || false,
 *   ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfiguration
 *     MinCapacity: Number("double"),
 *     MaxCapacity: Number("double"),
 *   },
 *   GlobalClusterIdentifier: "STRING_VALUE",
 * };
 * const command = new CreateDBClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBClusterResult
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
 * @param CreateDBClusterCommandInput - {@link CreateDBClusterCommandInput}
 * @returns {@link CreateDBClusterCommandOutput}
 * @see {@link CreateDBClusterCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterAlreadyExistsFault} (client fault)
 *  <p>User already has a DB cluster with the given identifier.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterParameterGroupName</i> does not refer to an
 *       existing DB Cluster parameter group.</p>
 *
 * @throws {@link DBClusterQuotaExceededFault} (client fault)
 *  <p>User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>Subnets in the DB subnet group should cover at least two Availability
 *       Zones unless there is only one Availability Zone.</p>
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBSubnetGroupName</i> does not refer to an
 *       existing DB subnet group.</p>
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster. </p>
 *
 * @throws {@link InsufficientStorageClusterCapacityFault} (client fault)
 *  <p>There is insufficient storage available for the current action. You may
 *        be able to resolve this error by updating your subnet group to use different
 *        Availability Zones that have more storage available.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The DB cluster is not in a valid state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The specified DB instance is not in the <i>available</i> state.</p>
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *  <p>The DB subnet group cannot be deleted because it is in use.</p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The global cluster is in an invalid state and can't perform the requested operation. </p>
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
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 */
export class CreateDBClusterCommand extends $Command<
  CreateDBClusterCommandInput,
  CreateDBClusterCommandOutput,
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
  constructor(readonly input: CreateDBClusterCommandInput) {
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
  ): Handler<CreateDBClusterCommandInput, CreateDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBClusterCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "CreateDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "CreateDBCluster",
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
  private serialize(input: CreateDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDBClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBClusterCommandOutput> {
    return de_CreateDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
