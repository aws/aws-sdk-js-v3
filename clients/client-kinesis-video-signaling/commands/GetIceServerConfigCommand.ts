import {
  KinesisVideoSignalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../KinesisVideoSignalingClient";
import {
  GetIceServerConfigRequest,
  GetIceServerConfigResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1GetIceServerConfigCommand,
  serializeAws_restJson1_1GetIceServerConfigCommand
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

export type GetIceServerConfigCommandInput = GetIceServerConfigRequest;
export type GetIceServerConfigCommandOutput = GetIceServerConfigResponse;

export class GetIceServerConfigCommand extends $Command<
  GetIceServerConfigCommandInput,
  GetIceServerConfigCommandOutput,
  KinesisVideoSignalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIceServerConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoSignalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIceServerConfigCommandInput, GetIceServerConfigCommandOutput> {
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
    input: GetIceServerConfigCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetIceServerConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetIceServerConfigCommandOutput> {
    return deserializeAws_restJson1_1GetIceServerConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
