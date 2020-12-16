import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { ReloadTablesMessage, ReloadTablesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ReloadTablesCommand,
  serializeAws_json1_1ReloadTablesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ReloadTablesCommandInput = ReloadTablesMessage;
export type ReloadTablesCommandOutput = ReloadTablesResponse & __MetadataBearer;

/**
 * <p>Reloads the target database table with the source data. </p>
 */
export class ReloadTablesCommand extends $Command<
  ReloadTablesCommandInput,
  ReloadTablesCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReloadTablesCommandInput) {
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
  ): Handler<ReloadTablesCommandInput, ReloadTablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ReloadTablesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReloadTablesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ReloadTablesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReloadTablesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ReloadTablesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReloadTablesCommandOutput> {
    return deserializeAws_json1_1ReloadTablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
