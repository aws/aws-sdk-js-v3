import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { PutEventsConfigurationRequest, PutEventsConfigurationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1PutEventsConfigurationCommand,
  serializeAws_restJson1PutEventsConfigurationCommand,
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

export type PutEventsConfigurationCommandInput = PutEventsConfigurationRequest;
export type PutEventsConfigurationCommandOutput = PutEventsConfigurationResponse & __MetadataBearer;

/**
 * <p>Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime.
 *       Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see <a>Bot</a>.</p>
 */
export class PutEventsConfigurationCommand extends $Command<
  PutEventsConfigurationCommandInput,
  PutEventsConfigurationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEventsConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutEventsConfigurationCommandInput, PutEventsConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutEventsConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEventsConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutEventsConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutEventsConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutEventsConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutEventsConfigurationCommandOutput> {
    return deserializeAws_restJson1PutEventsConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
