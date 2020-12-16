import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { ListWorldTemplatesRequest, ListWorldTemplatesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListWorldTemplatesCommand,
  serializeAws_restJson1ListWorldTemplatesCommand,
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

export type ListWorldTemplatesCommandInput = ListWorldTemplatesRequest;
export type ListWorldTemplatesCommandOutput = ListWorldTemplatesResponse & __MetadataBearer;

/**
 * <p>Lists world templates.</p>
 */
export class ListWorldTemplatesCommand extends $Command<
  ListWorldTemplatesCommandInput,
  ListWorldTemplatesCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWorldTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorldTemplatesCommandInput, ListWorldTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "ListWorldTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWorldTemplatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorldTemplatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWorldTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWorldTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorldTemplatesCommandOutput> {
    return deserializeAws_restJson1ListWorldTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
