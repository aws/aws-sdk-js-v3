import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoT1ClickDevicesServiceClient";
import {
  InvokeDeviceMethodRequest,
  InvokeDeviceMethodResponse
} from "../models/index";
import {
  deserializeAws_restJson1InvokeDeviceMethodCommand,
  serializeAws_restJson1InvokeDeviceMethodCommand
} from "../protocols/Aws_restJson1";
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
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type InvokeDeviceMethodCommandInput = InvokeDeviceMethodRequest;
export type InvokeDeviceMethodCommandOutput = InvokeDeviceMethodResponse &
  __MetadataBearer;

export class InvokeDeviceMethodCommand extends $Command<
  InvokeDeviceMethodCommandInput,
  InvokeDeviceMethodCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InvokeDeviceMethodCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickDevicesServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvokeDeviceMethodCommandInput, InvokeDeviceMethodCommandOutput> {
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
    input: InvokeDeviceMethodCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1InvokeDeviceMethodCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InvokeDeviceMethodCommandOutput> {
    return deserializeAws_restJson1InvokeDeviceMethodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
