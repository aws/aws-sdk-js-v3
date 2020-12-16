import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { ListPresetsRequest, ListPresetsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListPresetsCommand,
  serializeAws_restJson1ListPresetsCommand,
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

export type ListPresetsCommandInput = ListPresetsRequest;
export type ListPresetsCommandOutput = ListPresetsResponse & __MetadataBearer;

/**
 * Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.
 */
export class ListPresetsCommand extends $Command<
  ListPresetsCommandInput,
  ListPresetsCommandOutput,
  MediaConvertClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPresetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConvertClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPresetsCommandInput, ListPresetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConvertClient";
    const commandName = "ListPresetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPresetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPresetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPresetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPresetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPresetsCommandOutput> {
    return deserializeAws_restJson1ListPresetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
