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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { ModifyReplicationConfigMessage, ModifyReplicationConfigResponse } from "../models/models_0";
import { de_ModifyReplicationConfigCommand, se_ModifyReplicationConfigCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyReplicationConfigCommand}.
 */
export interface ModifyReplicationConfigCommandInput extends ModifyReplicationConfigMessage {}
/**
 * @public
 *
 * The output of {@link ModifyReplicationConfigCommand}.
 */
export interface ModifyReplicationConfigCommandOutput extends ModifyReplicationConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies an existing DMS Serverless replication configuration that you can use
 *          to start a replication. This command includes input validation and logic to check
 *          the state of any replication that uses this configuration. You can only modify a replication
 *          configuration before any replication that uses it has started. As soon as you have initially
 *          started a replication with a given configuiration, you can't modify that configuration,
 *          even if you stop it.</p>
 *          <p>Other run statuses that allow you to run this command include FAILED and CREATED.
 *          A provisioning state that allows you to run this command is FAILED_PROVISION.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyReplicationConfigCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyReplicationConfigCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyReplicationConfigMessage
 *   ReplicationConfigArn: "STRING_VALUE", // required
 *   ReplicationConfigIdentifier: "STRING_VALUE",
 *   ReplicationType: "full-load" || "cdc" || "full-load-and-cdc",
 *   TableMappings: "STRING_VALUE",
 *   ReplicationSettings: "STRING_VALUE",
 *   SupplementalSettings: "STRING_VALUE",
 *   ComputeConfig: { // ComputeConfig
 *     AvailabilityZone: "STRING_VALUE",
 *     DnsNameServers: "STRING_VALUE",
 *     KmsKeyId: "STRING_VALUE",
 *     MaxCapacityUnits: Number("int"),
 *     MinCapacityUnits: Number("int"),
 *     MultiAZ: true || false,
 *     PreferredMaintenanceWindow: "STRING_VALUE",
 *     ReplicationSubnetGroupId: "STRING_VALUE",
 *     VpcSecurityGroupIds: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   SourceEndpointArn: "STRING_VALUE",
 *   TargetEndpointArn: "STRING_VALUE",
 * };
 * const command = new ModifyReplicationConfigCommand(input);
 * const response = await client.send(command);
 * // { // ModifyReplicationConfigResponse
 * //   ReplicationConfig: { // ReplicationConfig
 * //     ReplicationConfigIdentifier: "STRING_VALUE",
 * //     ReplicationConfigArn: "STRING_VALUE",
 * //     SourceEndpointArn: "STRING_VALUE",
 * //     TargetEndpointArn: "STRING_VALUE",
 * //     ReplicationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //     ComputeConfig: { // ComputeConfig
 * //       AvailabilityZone: "STRING_VALUE",
 * //       DnsNameServers: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       MaxCapacityUnits: Number("int"),
 * //       MinCapacityUnits: Number("int"),
 * //       MultiAZ: true || false,
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       ReplicationSubnetGroupId: "STRING_VALUE",
 * //       VpcSecurityGroupIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ReplicationSettings: "STRING_VALUE",
 * //     SupplementalSettings: "STRING_VALUE",
 * //     TableMappings: "STRING_VALUE",
 * //     ReplicationConfigCreateTime: new Date("TIMESTAMP"),
 * //     ReplicationConfigUpdateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyReplicationConfigCommandInput - {@link ModifyReplicationConfigCommandInput}
 * @returns {@link ModifyReplicationConfigCommandOutput}
 * @see {@link ModifyReplicationConfigCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationConfigCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The subnet provided isn't valid.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ReplicationSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class ModifyReplicationConfigCommand extends $Command<
  ModifyReplicationConfigCommandInput,
  ModifyReplicationConfigCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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
  constructor(readonly input: ModifyReplicationConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyReplicationConfigCommandInput, ModifyReplicationConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyReplicationConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ModifyReplicationConfigCommand";
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
  private serialize(input: ModifyReplicationConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyReplicationConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyReplicationConfigCommandOutput> {
    return de_ModifyReplicationConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
