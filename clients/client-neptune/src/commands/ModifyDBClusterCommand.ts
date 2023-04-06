// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ModifyDBClusterMessage, ModifyDBClusterResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_ModifyDBClusterCommand, se_ModifyDBClusterCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link ModifyDBClusterCommand}.
 */
export interface ModifyDBClusterCommandInput extends ModifyDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBClusterCommand}.
 */
export interface ModifyDBClusterCommandOutput extends ModifyDBClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Modify a setting for a DB cluster. You can change one or more database configuration
 *       parameters by specifying these parameters and the new values in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // ModifyDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   NewDBClusterIdentifier: "STRING_VALUE",
 *   ApplyImmediately: true || false,
 *   BackupRetentionPeriod: Number("int"),
 *   DBClusterParameterGroupName: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   Port: Number("int"),
 *   MasterUserPassword: "STRING_VALUE",
 *   OptionGroupName: "STRING_VALUE",
 *   PreferredBackupWindow: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   EnableIAMDatabaseAuthentication: true || false,
 *   CloudwatchLogsExportConfiguration: { // CloudwatchLogsExportConfiguration
 *     EnableLogTypes: [ // LogTypeList
 *       "STRING_VALUE",
 *     ],
 *     DisableLogTypes: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   EngineVersion: "STRING_VALUE",
 *   AllowMajorVersionUpgrade: true || false,
 *   DBInstanceParameterGroupName: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   CopyTagsToSnapshot: true || false,
 *   ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfiguration
 *     MinCapacity: Number("double"),
 *     MaxCapacity: Number("double"),
 *   },
 * };
 * const command = new ModifyDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyDBClusterCommandInput - {@link ModifyDBClusterCommandInput}
 * @returns {@link ModifyDBClusterCommandOutput}
 * @see {@link ModifyDBClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterCommandOutput} for command's `response` shape.
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
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBSubnetGroupName</i> does not refer to an
 *       existing DB subnet group.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The DB cluster is not in a valid state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The specified DB instance is not in the <i>available</i> state.</p>
 *
 * @throws {@link InvalidDBSecurityGroupStateFault} (client fault)
 *  <p>The state of the DB security group does not allow deletion.</p>
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *  <p>The DB subnet group cannot be deleted because it is in use.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are
 *       not all in a common VPC.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>DB subnet group does not cover all Availability Zones after it is created
 *       because users' change.</p>
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
 *
 *
 */
export class ModifyDBClusterCommand extends $Command<
  ModifyDBClusterCommandInput,
  ModifyDBClusterCommandOutput,
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
  constructor(readonly input: ModifyDBClusterCommandInput) {
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
  ): Handler<ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "ModifyDBClusterCommand";
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
  private serialize(input: ModifyDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDBClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBClusterCommandOutput> {
    return de_ModifyDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
