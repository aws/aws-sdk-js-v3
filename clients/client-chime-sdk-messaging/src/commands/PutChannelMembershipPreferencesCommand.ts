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
  PutChannelMembershipPreferencesRequest,
  PutChannelMembershipPreferencesRequestFilterSensitiveLog,
  PutChannelMembershipPreferencesResponse,
  PutChannelMembershipPreferencesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutChannelMembershipPreferencesCommand,
  serializeAws_restJson1PutChannelMembershipPreferencesCommand,
} from "../protocols/Aws_restJson1";

export interface PutChannelMembershipPreferencesCommandInput extends PutChannelMembershipPreferencesRequest {}
export interface PutChannelMembershipPreferencesCommandOutput
  extends PutChannelMembershipPreferencesResponse,
    __MetadataBearer {}

/**
 * <p>Sets the membership preferences of an <code>AppInstanceUser</code> for the specified channel. The <code>AppInstanceUser</code> must be a member of the channel.
 *          Only the <code>AppInstanceUser</code> who owns the membership can set preferences. Users in the <code>AppInstanceAdmin</code> and channel moderator roles can't set preferences for other users.
 *          Banned users can't set membership preferences for the channel from which they are banned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, PutChannelMembershipPreferencesCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, PutChannelMembershipPreferencesCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new PutChannelMembershipPreferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutChannelMembershipPreferencesCommandInput} for command's `input` shape.
 * @see {@link PutChannelMembershipPreferencesCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 */
export class PutChannelMembershipPreferencesCommand extends $Command<
  PutChannelMembershipPreferencesCommandInput,
  PutChannelMembershipPreferencesCommandOutput,
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

  constructor(readonly input: PutChannelMembershipPreferencesCommandInput) {
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
  ): Handler<PutChannelMembershipPreferencesCommandInput, PutChannelMembershipPreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutChannelMembershipPreferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "PutChannelMembershipPreferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutChannelMembershipPreferencesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutChannelMembershipPreferencesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutChannelMembershipPreferencesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutChannelMembershipPreferencesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutChannelMembershipPreferencesCommandOutput> {
    return deserializeAws_restJson1PutChannelMembershipPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
