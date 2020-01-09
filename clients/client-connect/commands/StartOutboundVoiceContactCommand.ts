import {
  ConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ConnectClient";
import {
  StartOutboundVoiceContactRequest,
  StartOutboundVoiceContactResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1StartOutboundVoiceContactCommand,
  serializeAws_restJson1_1StartOutboundVoiceContactCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type StartOutboundVoiceContactCommandInput = StartOutboundVoiceContactRequest;
export type StartOutboundVoiceContactCommandOutput = StartOutboundVoiceContactResponse;

export class StartOutboundVoiceContactCommand extends $Command<
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartOutboundVoiceContactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartOutboundVoiceContactCommandInput,
    StartOutboundVoiceContactCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartOutboundVoiceContactCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1StartOutboundVoiceContactCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<StartOutboundVoiceContactCommandOutput> {
    return deserializeAws_restJson1_1StartOutboundVoiceContactCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
