import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { UpdateRoomMembershipRequest, UpdateRoomMembershipResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateRoomMembershipCommand,
  serializeAws_restJson1UpdateRoomMembershipCommand,
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

export type UpdateRoomMembershipCommandInput = UpdateRoomMembershipRequest;
export type UpdateRoomMembershipCommandOutput = UpdateRoomMembershipResponse & __MetadataBearer;

/**
 * <p>Updates room membership details, such as the member role, for a room in an Amazon Chime Enterprise account. The member role designates
 *       whether the member is a chat room administrator or a general chat room member. The member role
 *       can be updated only for user IDs.</p>
 */
export class UpdateRoomMembershipCommand extends $Command<
  UpdateRoomMembershipCommandInput,
  UpdateRoomMembershipCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRoomMembershipCommandInput) {
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
  ): Handler<UpdateRoomMembershipCommandInput, UpdateRoomMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateRoomMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRoomMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRoomMembershipResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRoomMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRoomMembershipCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRoomMembershipCommandOutput> {
    return deserializeAws_restJson1UpdateRoomMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
