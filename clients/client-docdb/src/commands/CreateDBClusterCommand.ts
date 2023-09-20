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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CreateDBClusterMessage, CreateDBClusterResult } from "../models/models_0";
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
 * <p>Creates a new Amazon DocumentDB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CreateDBClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CreateDBClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // CreateDBClusterMessage
 *   AvailabilityZones: [ // AvailabilityZones
 *     "STRING_VALUE",
 *   ],
 *   BackupRetentionPeriod: Number("int"),
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
 *   PreferredBackupWindow: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   StorageEncrypted: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   PreSignedUrl: "STRING_VALUE",
 *   EnableCloudwatchLogsExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 *   DeletionProtection: true || false,
 *   GlobalClusterIdentifier: "STRING_VALUE",
 * };
 * const command = new CreateDBClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBClusterResult
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
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDBClusterCommandInput - {@link CreateDBClusterCommandInput}
 * @returns {@link CreateDBClusterCommandOutput}
 * @see {@link CreateDBClusterCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterAlreadyExistsFault} (client fault)
 *  <p>You already have a cluster with the given identifier.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing cluster. </p>
 *
 * @throws {@link DBClusterParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing cluster parameter group. </p>
 *
 * @throws {@link DBClusterQuotaExceededFault} (client fault)
 *  <p>The cluster can't be created because you have reached the maximum allowed quota of clusters.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing instance. </p>
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>Subnets in the subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing subnet group. </p>
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global cluster.</p>
 *
 * @throws {@link InsufficientStorageClusterCapacityFault} (client fault)
 *  <p>There is not enough storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available. </p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The cluster isn't in a valid state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p> The specified instance isn't in the <i>available</i> state.
 *         </p>
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *  <p>The subnet group can't be deleted because it's in use.</p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is not valid, or multiple subnets were requested that are not all
 *             in a common virtual private cloud (VPC).</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The subnet group doesn't cover all Availability Zones after it is created
 *             because of changes that were made.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred when accessing an KMS key.</p>
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>The request would cause you to exceed the allowed amount of storage available across
 *             all instances.</p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 */
export class CreateDBClusterCommand extends $Command<
  CreateDBClusterCommandInput,
  CreateDBClusterCommandOutput,
  DocDBClientResolvedConfig
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
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDBClusterCommandInput, CreateDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
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
