import {
  RAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RAMClient";
import {
  GetResourceShareInvitationsRequest,
  GetResourceShareInvitationsResponse
} from "../models/index";
import {
  deserializeAws_restJson1GetResourceShareInvitationsCommand,
  serializeAws_restJson1GetResourceShareInvitationsCommand
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

export type GetResourceShareInvitationsCommandInput = GetResourceShareInvitationsRequest;
export type GetResourceShareInvitationsCommandOutput = GetResourceShareInvitationsResponse &
  __MetadataBearer;

export class GetResourceShareInvitationsCommand extends $Command<
  GetResourceShareInvitationsCommandInput,
  GetResourceShareInvitationsCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResourceShareInvitationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetResourceShareInvitationsCommandInput,
    GetResourceShareInvitationsCommandOutput
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
    input: GetResourceShareInvitationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetResourceShareInvitationsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResourceShareInvitationsCommandOutput> {
    return deserializeAws_restJson1GetResourceShareInvitationsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
