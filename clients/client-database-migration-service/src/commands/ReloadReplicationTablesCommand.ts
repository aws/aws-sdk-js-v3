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
import { ReloadReplicationTablesMessage, ReloadReplicationTablesResponse } from "../models/models_1";
import { de_ReloadReplicationTablesCommand, se_ReloadReplicationTablesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReloadReplicationTablesCommand}.
 */
export interface ReloadReplicationTablesCommandInput extends ReloadReplicationTablesMessage {}
/**
 * @public
 *
 * The output of {@link ReloadReplicationTablesCommand}.
 */
export interface ReloadReplicationTablesCommandOutput extends ReloadReplicationTablesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Reloads the target database table with the source data for a given DMS Serverless
 *          replication configuration.</p>
 *          <p>You can only use this operation with a task in the RUNNING state, otherwise the service
 *          will throw an <code>InvalidResourceStateFault</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ReloadReplicationTablesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ReloadReplicationTablesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ReloadReplicationTablesMessage
 *   ReplicationConfigArn: "STRING_VALUE", // required
 *   TablesToReload: [ // TableListToReload // required
 *     { // TableToReload
 *       SchemaName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *     },
 *   ],
 *   ReloadOption: "data-reload" || "validate-only",
 * };
 * const command = new ReloadReplicationTablesCommand(input);
 * const response = await client.send(command);
 * // { // ReloadReplicationTablesResponse
 * //   ReplicationConfigArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReloadReplicationTablesCommandInput - {@link ReloadReplicationTablesCommandInput}
 * @returns {@link ReloadReplicationTablesCommandOutput}
 * @see {@link ReloadReplicationTablesCommandInput} for command's `input` shape.
 * @see {@link ReloadReplicationTablesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class ReloadReplicationTablesCommand extends $Command<
  ReloadReplicationTablesCommandInput,
  ReloadReplicationTablesCommandOutput,
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
  constructor(readonly input: ReloadReplicationTablesCommandInput) {
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
  ): Handler<ReloadReplicationTablesCommandInput, ReloadReplicationTablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReloadReplicationTablesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ReloadReplicationTablesCommand";
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
  private serialize(input: ReloadReplicationTablesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReloadReplicationTablesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReloadReplicationTablesCommandOutput> {
    return de_ReloadReplicationTablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
