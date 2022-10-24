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
  RefreshSchemasMessage,
  RefreshSchemasMessageFilterSensitiveLog,
  RefreshSchemasResponse,
  RefreshSchemasResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RefreshSchemasCommand,
  serializeAws_json1_1RefreshSchemasCommand,
} from "../protocols/Aws_json1_1";

export interface RefreshSchemasCommandInput extends RefreshSchemasMessage {}
export interface RefreshSchemasCommandOutput extends RefreshSchemasResponse, __MetadataBearer {}

/**
 * <p>Populates the schema for the specified endpoint. This is an asynchronous operation and
 *          can take several minutes. You can check the status of this operation by calling the
 *          DescribeRefreshSchemasStatus operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, RefreshSchemasCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, RefreshSchemasCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new RefreshSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RefreshSchemasCommandInput} for command's `input` shape.
 * @see {@link RefreshSchemasCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class RefreshSchemasCommand extends $Command<
  RefreshSchemasCommandInput,
  RefreshSchemasCommandOutput,
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

  constructor(readonly input: RefreshSchemasCommandInput) {
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
  ): Handler<RefreshSchemasCommandInput, RefreshSchemasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RefreshSchemasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "RefreshSchemasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RefreshSchemasMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RefreshSchemasResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RefreshSchemasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RefreshSchemasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RefreshSchemasCommandOutput> {
    return deserializeAws_json1_1RefreshSchemasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
