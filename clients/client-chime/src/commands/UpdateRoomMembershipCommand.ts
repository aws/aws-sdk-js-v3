// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  UpdateRoomMembershipRequest,
  UpdateRoomMembershipRequestFilterSensitiveLog,
  UpdateRoomMembershipResponse,
  UpdateRoomMembershipResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateRoomMembershipCommand,
  serializeAws_restJson1UpdateRoomMembershipCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateRoomMembershipCommandInput extends UpdateRoomMembershipRequest {}
export interface UpdateRoomMembershipCommandOutput extends UpdateRoomMembershipResponse, __MetadataBearer {}

/**
 * <p>Updates room membership details, such as the member role, for a room in an Amazon Chime
 *             Enterprise account. The member role designates whether the member is a chat room
 *             administrator or a general chat room member. The member role can be updated only for
 *             user IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link UpdateRoomMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class UpdateRoomMembershipCommand extends $Command<
  UpdateRoomMembershipCommandInput,
  UpdateRoomMembershipCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRoomMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateRoomMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRoomMembershipRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRoomMembershipResponseFilterSensitiveLog,
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
