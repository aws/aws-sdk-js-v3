import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { ListKeywordsForDataSourceRequest, ListKeywordsForDataSourceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListKeywordsForDataSourceCommand,
  serializeAws_restJson1ListKeywordsForDataSourceCommand,
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

export type ListKeywordsForDataSourceCommandInput = ListKeywordsForDataSourceRequest;
export type ListKeywordsForDataSourceCommandOutput = ListKeywordsForDataSourceResponse & __MetadataBearer;

/**
 * <p>
 * Returns a list of keywords that pre-mapped to the specified control data source.
 * </p>
 */
export class ListKeywordsForDataSourceCommand extends $Command<
  ListKeywordsForDataSourceCommandInput,
  ListKeywordsForDataSourceCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListKeywordsForDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListKeywordsForDataSourceCommandInput, ListKeywordsForDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ListKeywordsForDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListKeywordsForDataSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListKeywordsForDataSourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListKeywordsForDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListKeywordsForDataSourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListKeywordsForDataSourceCommandOutput> {
    return deserializeAws_restJson1ListKeywordsForDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
