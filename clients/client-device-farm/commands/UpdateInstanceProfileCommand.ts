import {
  DeviceFarmClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DeviceFarmClient";
import {
  UpdateInstanceProfileRequest,
  UpdateInstanceProfileResult
} from "../models/index";
import {
  deserializeAws_json1_1UpdateInstanceProfileCommand,
  serializeAws_json1_1UpdateInstanceProfileCommand
} from "../protocols/Aws_json1_1";
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

export type UpdateInstanceProfileCommandInput = UpdateInstanceProfileRequest;
export type UpdateInstanceProfileCommandOutput = UpdateInstanceProfileResult &
  __MetadataBearer;

export class UpdateInstanceProfileCommand extends $Command<
  UpdateInstanceProfileCommandInput,
  UpdateInstanceProfileCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateInstanceProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateInstanceProfileCommandInput,
    UpdateInstanceProfileCommandOutput
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
    input: UpdateInstanceProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateInstanceProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateInstanceProfileCommandOutput> {
    return deserializeAws_json1_1UpdateInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
