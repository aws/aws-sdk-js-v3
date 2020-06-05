import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoT1ClickDevicesServiceClient";
import {
  InitiateDeviceClaimRequest,
  InitiateDeviceClaimResponse
} from "../models/index";
import {
  deserializeAws_restJson1InitiateDeviceClaimCommand,
  serializeAws_restJson1InitiateDeviceClaimCommand
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

export type InitiateDeviceClaimCommandInput = InitiateDeviceClaimRequest;
export type InitiateDeviceClaimCommandOutput = InitiateDeviceClaimResponse &
  __MetadataBearer;

export class InitiateDeviceClaimCommand extends $Command<
  InitiateDeviceClaimCommandInput,
  InitiateDeviceClaimCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InitiateDeviceClaimCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickDevicesServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    InitiateDeviceClaimCommandInput,
    InitiateDeviceClaimCommandOutput
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
    input: InitiateDeviceClaimCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1InitiateDeviceClaimCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InitiateDeviceClaimCommandOutput> {
    return deserializeAws_restJson1InitiateDeviceClaimCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
