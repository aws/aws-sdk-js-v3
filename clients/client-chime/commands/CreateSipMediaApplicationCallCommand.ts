import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { CreateSipMediaApplicationCallRequest, CreateSipMediaApplicationCallResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateSipMediaApplicationCallCommand,
  serializeAws_restJson1CreateSipMediaApplicationCallCommand,
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

export type CreateSipMediaApplicationCallCommandInput = CreateSipMediaApplicationCallRequest;
export type CreateSipMediaApplicationCallCommandOutput = CreateSipMediaApplicationCallResponse & __MetadataBearer;

/**
 * <p>Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the
 *       specified <code>sipMediaApplicationId</code>.</p>
 */
export class CreateSipMediaApplicationCallCommand extends $Command<
  CreateSipMediaApplicationCallCommandInput,
  CreateSipMediaApplicationCallCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSipMediaApplicationCallCommandInput) {
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
  ): Handler<CreateSipMediaApplicationCallCommandInput, CreateSipMediaApplicationCallCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateSipMediaApplicationCallCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSipMediaApplicationCallRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSipMediaApplicationCallResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSipMediaApplicationCallCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSipMediaApplicationCallCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSipMediaApplicationCallCommandOutput> {
    return deserializeAws_restJson1CreateSipMediaApplicationCallCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
