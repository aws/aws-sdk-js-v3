import {
  ConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ConnectClient";
import { UpdateUserRoutingProfileRequest } from "../models/index";
import {
  deserializeAws_restJson1_1UpdateUserRoutingProfileCommand,
  serializeAws_restJson1_1UpdateUserRoutingProfileCommand
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
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer
} from "@aws-sdk/types";

export type UpdateUserRoutingProfileCommandInput = UpdateUserRoutingProfileRequest;
export type UpdateUserRoutingProfileCommandOutput = __MetadataBearer;

export class UpdateUserRoutingProfileCommand extends $Command<
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateUserRoutingProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateUserRoutingProfileCommandInput,
    UpdateUserRoutingProfileCommandOutput
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
    input: UpdateUserRoutingProfileCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1UpdateUserRoutingProfileCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateUserRoutingProfileCommandOutput> {
    return deserializeAws_restJson1_1UpdateUserRoutingProfileCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
