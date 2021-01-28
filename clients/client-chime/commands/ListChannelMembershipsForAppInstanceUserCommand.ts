import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  ListChannelMembershipsForAppInstanceUserRequest,
  ListChannelMembershipsForAppInstanceUserResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand,
  serializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand,
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

export type ListChannelMembershipsForAppInstanceUserCommandInput = ListChannelMembershipsForAppInstanceUserRequest;
export type ListChannelMembershipsForAppInstanceUserCommandOutput = ListChannelMembershipsForAppInstanceUserResponse &
  __MetadataBearer;

/**
 * <p>Lists all channels that a particular <code>AppInstanceUser</code> is a part of. Only an <code>AppInstanceAdmin</code> can call the
 *            API with a user ARN that is not their own.</p>
 */
export class ListChannelMembershipsForAppInstanceUserCommand extends $Command<
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListChannelMembershipsForAppInstanceUserCommandInput) {
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
  ): Handler<
    ListChannelMembershipsForAppInstanceUserCommandInput,
    ListChannelMembershipsForAppInstanceUserCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListChannelMembershipsForAppInstanceUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChannelMembershipsForAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChannelMembershipsForAppInstanceUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListChannelMembershipsForAppInstanceUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> {
    return deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
