import {
  KinesisVideoClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../KinesisVideoClient";
import {
  GetSignalingChannelEndpointInput,
  GetSignalingChannelEndpointOutput
} from "../models/index";
import {
  deserializeAws_restJson1_1GetSignalingChannelEndpointCommand,
  serializeAws_restJson1_1GetSignalingChannelEndpointCommand
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

export type GetSignalingChannelEndpointCommandInput = GetSignalingChannelEndpointInput;
export type GetSignalingChannelEndpointCommandOutput = GetSignalingChannelEndpointOutput;

export class GetSignalingChannelEndpointCommand extends $Command<
  GetSignalingChannelEndpointCommandInput,
  GetSignalingChannelEndpointCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSignalingChannelEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetSignalingChannelEndpointCommandInput,
    GetSignalingChannelEndpointCommandOutput
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
    input: GetSignalingChannelEndpointCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetSignalingChannelEndpointCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetSignalingChannelEndpointCommandOutput> {
    return deserializeAws_restJson1_1GetSignalingChannelEndpointCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
