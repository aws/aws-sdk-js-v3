import {
  GreengrassClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GreengrassClient";
import {
  UpdateDeviceDefinitionRequest,
  UpdateDeviceDefinitionResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1UpdateDeviceDefinitionCommand,
  serializeAws_restJson1_1UpdateDeviceDefinitionCommand
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

export type UpdateDeviceDefinitionCommandInput = UpdateDeviceDefinitionRequest;
export type UpdateDeviceDefinitionCommandOutput = UpdateDeviceDefinitionResponse;

export class UpdateDeviceDefinitionCommand extends $Command<
  UpdateDeviceDefinitionCommandInput,
  UpdateDeviceDefinitionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDeviceDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateDeviceDefinitionCommandInput,
    UpdateDeviceDefinitionCommandOutput
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
    input: UpdateDeviceDefinitionCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1UpdateDeviceDefinitionCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateDeviceDefinitionCommandOutput> {
    return deserializeAws_restJson1_1UpdateDeviceDefinitionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
