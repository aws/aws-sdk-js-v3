import {
  MediaTailorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MediaTailorClient";
import {
  DeletePlaybackConfigurationRequest,
  DeletePlaybackConfigurationResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1DeletePlaybackConfigurationCommand,
  serializeAws_restJson1_1DeletePlaybackConfigurationCommand
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

export type DeletePlaybackConfigurationCommandInput = DeletePlaybackConfigurationRequest;
export type DeletePlaybackConfigurationCommandOutput = DeletePlaybackConfigurationResponse;

export class DeletePlaybackConfigurationCommand extends $Command<
  DeletePlaybackConfigurationCommandInput,
  DeletePlaybackConfigurationCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePlaybackConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeletePlaybackConfigurationCommandInput,
    DeletePlaybackConfigurationCommandOutput
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
    input: DeletePlaybackConfigurationCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DeletePlaybackConfigurationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeletePlaybackConfigurationCommandOutput> {
    return deserializeAws_restJson1_1DeletePlaybackConfigurationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
