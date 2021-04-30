import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListStreamingImagesRequest, ListStreamingImagesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListStreamingImagesCommand,
  serializeAws_restJson1ListStreamingImagesCommand,
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

export interface ListStreamingImagesCommandInput extends ListStreamingImagesRequest {}
export interface ListStreamingImagesCommandOutput extends ListStreamingImagesResponse, __MetadataBearer {}

/**
 * <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by AWS, as well as streaming images that you have created in your studio.</p>
 */
export class ListStreamingImagesCommand extends $Command<
  ListStreamingImagesCommandInput,
  ListStreamingImagesCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStreamingImagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStreamingImagesCommandInput, ListStreamingImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "ListStreamingImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStreamingImagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListStreamingImagesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStreamingImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListStreamingImagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStreamingImagesCommandOutput> {
    return deserializeAws_restJson1ListStreamingImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
