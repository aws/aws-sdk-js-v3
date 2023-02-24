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

import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import {
  CreateChannelBanRequest,
  CreateChannelBanRequestFilterSensitiveLog,
  CreateChannelBanResponse,
  CreateChannelBanResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateChannelBanCommand,
  serializeAws_restJson1CreateChannelBanCommand,
} from "../protocols/Aws_restJson1";

export interface CreateChannelBanCommandInput extends CreateChannelBanRequest {}
export interface CreateChannelBanCommandOutput extends CreateChannelBanResponse, __MetadataBearer {}

/**
 * <p>Permanently bans a member from a channel. Moderators can't add banned members to a
 *          channel. To undo a ban, you first have to <code>DeleteChannelBan</code>, and then
 *             <code>CreateChannelMembership</code>. Bans are cleaned up when you delete users or
 *          channels.</p>
 *          <p>If you ban a user who is already part of a channel, that user is automatically kicked
 *          from the channel.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, CreateChannelBanCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, CreateChannelBanCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new CreateChannelBanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChannelBanCommandInput} for command's `input` shape.
 * @see {@link CreateChannelBanCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 */
export class CreateChannelBanCommand extends $Command<
  CreateChannelBanCommandInput,
  CreateChannelBanCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
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

  constructor(readonly input: CreateChannelBanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMessagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateChannelBanCommandInput, CreateChannelBanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateChannelBanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "CreateChannelBanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateChannelBanRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateChannelBanResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateChannelBanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateChannelBanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChannelBanCommandOutput> {
    return deserializeAws_restJson1CreateChannelBanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
