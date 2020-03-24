import {
  IoTDataPlaneClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTDataPlaneClient";
import {
  UpdateThingShadowRequest,
  UpdateThingShadowResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1UpdateThingShadowCommand,
  serializeAws_restJson1_1UpdateThingShadowCommand
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

export type UpdateThingShadowCommandInput = UpdateThingShadowRequest;
export type UpdateThingShadowCommandOutput = UpdateThingShadowResponse;

export class UpdateThingShadowCommand extends $Command<
  UpdateThingShadowCommandInput,
  UpdateThingShadowCommandOutput,
  IoTDataPlaneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateThingShadowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateThingShadowCommandInput, UpdateThingShadowCommandOutput> {
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
    input: UpdateThingShadowCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1UpdateThingShadowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateThingShadowCommandOutput> {
    return deserializeAws_restJson1_1UpdateThingShadowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
