import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  ListChannelsModeratedByAppInstanceUserRequest,
  ListChannelsModeratedByAppInstanceUserResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand,
  serializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ListChannelsModeratedByAppInstanceUserCommandInput = ListChannelsModeratedByAppInstanceUserRequest;
export type ListChannelsModeratedByAppInstanceUserCommandOutput = ListChannelsModeratedByAppInstanceUserResponse &
  __MetadataBearer;

/**
 * <p>A list of the channels moderated by an app instance user.</p>
 */
export class ListChannelsModeratedByAppInstanceUserCommand extends $Command<
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListChannelsModeratedByAppInstanceUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChannelsModeratedByAppInstanceUserCommandInput, ListChannelsModeratedByAppInstanceUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListChannelsModeratedByAppInstanceUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChannelsModeratedByAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChannelsModeratedByAppInstanceUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListChannelsModeratedByAppInstanceUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> {
    return deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
