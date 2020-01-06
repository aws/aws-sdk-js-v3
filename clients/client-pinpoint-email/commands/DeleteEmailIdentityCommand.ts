import {
  PinpointEmailClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PinpointEmailClient";
import {
  DeleteEmailIdentityRequest,
  DeleteEmailIdentityResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1DeleteEmailIdentityCommand,
  serializeAws_restJson1_1DeleteEmailIdentityCommand
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

export type DeleteEmailIdentityCommandInput = DeleteEmailIdentityRequest;
export type DeleteEmailIdentityCommandOutput = DeleteEmailIdentityResponse;

export class DeleteEmailIdentityCommand extends $Command<
  DeleteEmailIdentityCommandInput,
  DeleteEmailIdentityCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEmailIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteEmailIdentityCommandInput,
    DeleteEmailIdentityCommandOutput
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
    input: DeleteEmailIdentityCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DeleteEmailIdentityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteEmailIdentityCommandOutput> {
    return deserializeAws_restJson1_1DeleteEmailIdentityCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
