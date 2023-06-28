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

import { CreateBlueGreenDeploymentRequest, CreateBlueGreenDeploymentResponse } from "../models/models_0";
import { de_CreateBlueGreenDeploymentCommand, se_CreateBlueGreenDeploymentCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateBlueGreenDeploymentCommand}.
 */
export interface CreateBlueGreenDeploymentCommandInput extends CreateBlueGreenDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link CreateBlueGreenDeploymentCommand}.
 */
export interface CreateBlueGreenDeploymentCommandOutput extends CreateBlueGreenDeploymentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a blue/green deployment.</p>
 *          <p>A blue/green deployment creates a staging environment that copies the production environment.
 *             In a blue/green deployment, the blue environment is the current production environment.
 *             The green environment is the staging environment. The staging environment stays in sync
 *             with the current production environment using logical replication.</p>
 *          <p>You can make changes to the databases in the green environment without affecting
 *             production workloads. For example, you can upgrade the major or minor DB engine version, change
 *             database parameters, or make schema changes in the staging environment. You can thoroughly test
 *             changes in the green environment. When ready, you can switch over the environments to promote the
 *             green environment to be the new production environment. The switchover typically takes under a minute.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments
 *             for database updates</a> in the <i>Amazon RDS User Guide</i> and
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">
 *             Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *             User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateBlueGreenDeploymentCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateBlueGreenDeploymentCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateBlueGreenDeploymentRequest
 *   BlueGreenDeploymentName: "STRING_VALUE", // required
 *   Source: "STRING_VALUE", // required
 *   TargetEngineVersion: "STRING_VALUE",
 *   TargetDBParameterGroupName: "STRING_VALUE",
 *   TargetDBClusterParameterGroupName: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CreateBlueGreenDeploymentResponse
 * //   BlueGreenDeployment: { // BlueGreenDeployment
 * //     BlueGreenDeploymentIdentifier: "STRING_VALUE",
 * //     BlueGreenDeploymentName: "STRING_VALUE",
 * //     Source: "STRING_VALUE",
 * //     Target: "STRING_VALUE",
 * //     SwitchoverDetails: [ // SwitchoverDetailList
 * //       { // SwitchoverDetail
 * //         SourceMember: "STRING_VALUE",
 * //         TargetMember: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tasks: [ // BlueGreenDeploymentTaskList
 * //       { // BlueGreenDeploymentTask
 * //         Name: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Status: "STRING_VALUE",
 * //     StatusDetails: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     DeleteTime: new Date("TIMESTAMP"),
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
 * @param CreateBlueGreenDeploymentCommandInput - {@link CreateBlueGreenDeploymentCommandInput}
 * @returns {@link CreateBlueGreenDeploymentCommandOutput}
 * @see {@link CreateBlueGreenDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateBlueGreenDeploymentCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link BlueGreenDeploymentAlreadyExistsFault} (client fault)
 *  <p>A blue/green deployment with the specified name already exists.</p>
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
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link InstanceQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB
 *             instances.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link SourceClusterNotSupportedFault} (client fault)
 *  <p>The source DB cluster isn't supported for a blue/green deployment.</p>
 *
 * @throws {@link SourceDatabaseNotSupportedFault} (client fault)
 *  <p>The source DB instance isn't supported for a blue/green deployment.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To create a blue/green deployment for an RDS for MySQL DB instance
 * ```javascript
 * // The following example creates a blue/green deployment for a MySQL DB instance.
 * const input = {
 *   "BlueGreenDeploymentName": "bgd-test-instance",
 *   "Source": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance",
 *   "TargetDBParameterGroupName": "mysql-80-group",
 *   "TargetEngineVersion": "8.0"
 * };
 * const command = new CreateBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "BlueGreenDeployment": {
 *     "BlueGreenDeploymentIdentifier": "bgd-v53303651eexfake",
 *     "BlueGreenDeploymentName": "bgd-cli-test-instance",
 *     "CreateTime": "2022-02-25T21:18:51.183000+00:00",
 *     "Source": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance",
 *     "Status": "PROVISIONING",
 *     "SwitchoverDetails": [
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-1"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-2"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-3"
 *       }
 *     ],
 *     "Tasks": [
 *       {
 *         "Name": "CREATING_READ_REPLICA_OF_SOURCE",
 *         "Status": "PENDING"
 *       },
 *       {
 *         "Name": "DB_ENGINE_VERSION_UPGRADE",
 *         "Status": "PENDING"
 *       },
 *       {
 *         "Name": "CONFIGURE_BACKUPS",
 *         "Status": "PENDING"
 *       },
 *       {
 *         "Name": "CREATING_TOPOLOGY_OF_SOURCE",
 *         "Status": "PENDING"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-create-a-bluegreen-deployment-for-an-rds-for-mysql-db-instance-1679688377231
 * ```
 *
 * @example To create a blue/green deployment for an Aurora MySQL DB cluster
 * ```javascript
 * // The following example creates a blue/green deployment for an Aurora MySQL DB cluster.
 * const input = {
 *   "BlueGreenDeploymentName": "my-blue-green-deployment",
 *   "Source": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster",
 *   "TargetDBClusterParameterGroupName": "mysql-80-cluster-group",
 *   "TargetDBParameterGroupName": "ams-80-binlog-enabled",
 *   "TargetEngineVersion": "8.0"
 * };
 * const command = new CreateBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "BlueGreenDeployment": {
 *     "BlueGreenDeploymentIdentifier": "bgd-wi89nwzglccsfake",
 *     "BlueGreenDeploymentName": "my-blue-green-deployment",
 *     "CreateTime": "2022-02-25T21:12:00.288000+00:00",
 *     "Source": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster",
 *     "Status": "PROVISIONING",
 *     "SwitchoverDetails": [
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster",
 *         "Status": "PROVISIONING"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-1",
 *         "Status": "PROVISIONING"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-2",
 *         "Status": "PROVISIONING"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-3",
 *         "Status": "PROVISIONING"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-excluded-member-endpoint",
 *         "Status": "PROVISIONING"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-reader-endpoint",
 *         "Status": "PROVISIONING"
 *       }
 *     ],
 *     "Tasks": [
 *       {
 *         "Name": "CREATING_READ_REPLICA_OF_SOURCE",
 *         "Status": "PENDING"
 *       },
 *       {
 *         "Name": "DB_ENGINE_VERSION_UPGRADE",
 *         "Status": "PENDING"
 *       },
 *       {
 *         "Name": "CREATE_DB_INSTANCES_FOR_CLUSTER",
 *         "Status": "PENDING"
 *       },
 *       {
 *         "Name": "CREATE_CUSTOM_ENDPOINTS",
 *         "Status": "PENDING"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-create-a-bluegreen-deployment-for-an-aurora-mysql-db-cluster-1679703605487
 * ```
 *
 */
export class CreateBlueGreenDeploymentCommand extends $Command<
  CreateBlueGreenDeploymentCommandInput,
  CreateBlueGreenDeploymentCommandOutput,
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
  constructor(readonly input: CreateBlueGreenDeploymentCommandInput) {
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
  ): Handler<CreateBlueGreenDeploymentCommandInput, CreateBlueGreenDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBlueGreenDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateBlueGreenDeploymentCommand";
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
  private serialize(input: CreateBlueGreenDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBlueGreenDeploymentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateBlueGreenDeploymentCommandOutput> {
    return de_CreateBlueGreenDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
