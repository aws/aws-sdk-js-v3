import {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../NetworkManagerClient";
import { UpdateDeviceRequest, UpdateDeviceResponse } from "../models/index";
import {
  deserializeAws_restJson1UpdateDeviceCommand,
  serializeAws_restJson1UpdateDeviceCommand
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

export type UpdateDeviceCommandInput = UpdateDeviceRequest;
export type UpdateDeviceCommandOutput = UpdateDeviceResponse & __MetadataBearer;

export class UpdateDeviceCommand extends $Command<
  UpdateDeviceCommandInput,
  UpdateDeviceCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDeviceCommandInput, UpdateDeviceCommandOutput> {
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
    input: UpdateDeviceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDeviceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDeviceCommandOutput> {
    return deserializeAws_restJson1UpdateDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
