import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { ListSchemaVersionsRequest, ListSchemaVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListSchemaVersionsCommand,
  serializeAws_restJson1ListSchemaVersionsCommand,
} from "../protocols/Aws_restJson1";
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

export type ListSchemaVersionsCommandInput = ListSchemaVersionsRequest;
export type ListSchemaVersionsCommandOutput = ListSchemaVersionsResponse & __MetadataBearer;

/**
 * <p>Provides a list of the schema versions and related information.</p>
 */
export class ListSchemaVersionsCommand extends $Command<
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
  SchemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSchemaVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "ListSchemaVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSchemaVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSchemaVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSchemaVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSchemaVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSchemaVersionsCommandOutput> {
    return deserializeAws_restJson1ListSchemaVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
