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
  GetChannelMembershipPreferencesRequest,
  GetChannelMembershipPreferencesRequestFilterSensitiveLog,
  GetChannelMembershipPreferencesResponse,
  GetChannelMembershipPreferencesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetChannelMembershipPreferencesCommand,
  serializeAws_restJson1GetChannelMembershipPreferencesCommand,
} from "../protocols/Aws_restJson1";

export interface GetChannelMembershipPreferencesCommandInput extends GetChannelMembershipPreferencesRequest {}
export interface GetChannelMembershipPreferencesCommandOutput
  extends GetChannelMembershipPreferencesResponse,
    __MetadataBearer {}

/**
 * <p>Gets the membership preferences of an <code>AppInstanceUser</code> for the specified channel. The <code>AppInstanceUser</code> must be a member of the channel.
 *          Only the <code>AppInstanceUser</code> who owns the membership can retrieve preferences. Users in the <code>AppInstanceAdmin</code> and channel moderator roles can't retrieve preferences for other users.
 *          Banned users can't retrieve membership preferences for the channel from which they are banned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, GetChannelMembershipPreferencesCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, GetChannelMembershipPreferencesCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new GetChannelMembershipPreferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChannelMembershipPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetChannelMembershipPreferencesCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 */
export class GetChannelMembershipPreferencesCommand extends $Command<
  GetChannelMembershipPreferencesCommandInput,
  GetChannelMembershipPreferencesCommandOutput,
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

  constructor(readonly input: GetChannelMembershipPreferencesCommandInput) {
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
  ): Handler<GetChannelMembershipPreferencesCommandInput, GetChannelMembershipPreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetChannelMembershipPreferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "GetChannelMembershipPreferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetChannelMembershipPreferencesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetChannelMembershipPreferencesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetChannelMembershipPreferencesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetChannelMembershipPreferencesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetChannelMembershipPreferencesCommandOutput> {
    return deserializeAws_restJson1GetChannelMembershipPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
