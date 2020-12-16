import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { ListConfigurationRevisionsRequest, ListConfigurationRevisionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListConfigurationRevisionsCommand,
  serializeAws_restJson1ListConfigurationRevisionsCommand,
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

export type ListConfigurationRevisionsCommandInput = ListConfigurationRevisionsRequest;
export type ListConfigurationRevisionsCommandOutput = ListConfigurationRevisionsResponse & __MetadataBearer;

/**
 * Returns a list of all revisions for the specified configuration.
 */
export class ListConfigurationRevisionsCommand extends $Command<
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
  MqClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListConfigurationRevisionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConfigurationRevisionsCommandInput, ListConfigurationRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "ListConfigurationRevisionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConfigurationRevisionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListConfigurationRevisionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConfigurationRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListConfigurationRevisionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListConfigurationRevisionsCommandOutput> {
    return deserializeAws_restJson1ListConfigurationRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
