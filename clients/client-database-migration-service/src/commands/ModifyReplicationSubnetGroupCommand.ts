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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { ModifyReplicationSubnetGroupMessage, ModifyReplicationSubnetGroupResponse } from "../models/models_1";
import {
  de_ModifyReplicationSubnetGroupCommand,
  se_ModifyReplicationSubnetGroupCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyReplicationSubnetGroupCommand}.
 */
export interface ModifyReplicationSubnetGroupCommandInput extends ModifyReplicationSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyReplicationSubnetGroupCommand}.
 */
export interface ModifyReplicationSubnetGroupCommandOutput
  extends ModifyReplicationSubnetGroupResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the settings for the specified replication subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyReplicationSubnetGroupCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyReplicationSubnetGroupCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyReplicationSubnetGroupMessage
 *   ReplicationSubnetGroupIdentifier: "STRING_VALUE", // required
 *   ReplicationSubnetGroupDescription: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyReplicationSubnetGroupResponse
 * //   ReplicationSubnetGroup: { // ReplicationSubnetGroup
 * //     ReplicationSubnetGroupIdentifier: "STRING_VALUE",
 * //     ReplicationSubnetGroupDescription: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetGroupStatus: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         SubnetIdentifier: "STRING_VALUE",
 * //         SubnetAvailabilityZone: { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //         SubnetStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SupportedNetworkTypes: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyReplicationSubnetGroupCommandInput - {@link ModifyReplicationSubnetGroupCommandInput}
 * @returns {@link ModifyReplicationSubnetGroupCommandOutput}
 * @see {@link ModifyReplicationSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The subnet provided isn't valid.</p>
 *
 * @throws {@link ReplicationSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link SubnetAlreadyInUse} (client fault)
 *  <p>The specified subnet is already in use.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Modify replication subnet group
 * ```javascript
 * // Modifies the settings for the specified replication subnet group.
 * const input = {
 *   "ReplicationSubnetGroupDescription": "",
 *   "ReplicationSubnetGroupIdentifier": "",
 *   "SubnetIds": []
 * };
 * const command = new ModifyReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationSubnetGroup": {}
 * }
 * *\/
 * // example id: modify-replication-subnet-group-1481762275392
 * ```
 *
 */
export class ModifyReplicationSubnetGroupCommand extends $Command<
  ModifyReplicationSubnetGroupCommandInput,
  ModifyReplicationSubnetGroupCommandOutput,
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
  constructor(readonly input: ModifyReplicationSubnetGroupCommandInput) {
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
  ): Handler<ModifyReplicationSubnetGroupCommandInput, ModifyReplicationSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyReplicationSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ModifyReplicationSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "ModifyReplicationSubnetGroup",
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
  private serialize(input: ModifyReplicationSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyReplicationSubnetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyReplicationSubnetGroupCommandOutput> {
    return de_ModifyReplicationSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
