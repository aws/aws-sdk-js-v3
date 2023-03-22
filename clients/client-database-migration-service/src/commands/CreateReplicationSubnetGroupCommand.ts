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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  CreateReplicationSubnetGroupMessage,
  CreateReplicationSubnetGroupMessageFilterSensitiveLog,
  CreateReplicationSubnetGroupResponse,
  CreateReplicationSubnetGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateReplicationSubnetGroupCommand,
  serializeAws_json1_1CreateReplicationSubnetGroupCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateReplicationSubnetGroupCommand}.
 */
export interface CreateReplicationSubnetGroupCommandInput extends CreateReplicationSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateReplicationSubnetGroupCommand}.
 */
export interface CreateReplicationSubnetGroupCommandOutput
  extends CreateReplicationSubnetGroupResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p>
 *          <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the
 *           service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateReplicationSubnetGroupCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateReplicationSubnetGroupCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new CreateReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateReplicationSubnetGroupCommandInput - {@link CreateReplicationSubnetGroupCommandInput}
 * @returns {@link CreateReplicationSubnetGroupCommandOutput}
 * @see {@link CreateReplicationSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The subnet provided is invalid.</p>
 *
 * @throws {@link ReplicationSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 *
 * @example Create replication subnet group
 * ```javascript
 * // Creates a replication subnet group given a list of the subnet IDs in a VPC.
 * const input = {
 *   "ReplicationSubnetGroupDescription": "US West subnet group",
 *   "ReplicationSubnetGroupIdentifier": "us-west-2ab-vpc-215ds366",
 *   "SubnetIds": [
 *     "subnet-e145356n",
 *     "subnet-58f79200"
 *   ],
 *   "Tags": [
 *     {
 *       "Key": "Acount",
 *       "Value": "145235"
 *     }
 *   ]
 * };
 * const command = new CreateReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationSubnetGroup": {}
 * }
 * *\/
 * // example id: create-replication-subnet-group-1481747297930
 * ```
 *
 */
export class CreateReplicationSubnetGroupCommand extends $Command<
  CreateReplicationSubnetGroupCommandInput,
  CreateReplicationSubnetGroupCommandOutput,
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
  constructor(readonly input: CreateReplicationSubnetGroupCommandInput) {
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
  ): Handler<CreateReplicationSubnetGroupCommandInput, CreateReplicationSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReplicationSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CreateReplicationSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReplicationSubnetGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateReplicationSubnetGroupResponseFilterSensitiveLog,
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
  private serialize(input: CreateReplicationSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateReplicationSubnetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReplicationSubnetGroupCommandOutput> {
    return deserializeAws_json1_1CreateReplicationSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
