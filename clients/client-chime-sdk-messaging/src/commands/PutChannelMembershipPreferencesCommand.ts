// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

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
  de_PutChannelMembershipPreferencesCommand,
  se_PutChannelMembershipPreferencesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutChannelMembershipPreferencesCommand}.
 */
export interface PutChannelMembershipPreferencesCommandInput extends PutChannelMembershipPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link PutChannelMembershipPreferencesCommand}.
 */
export interface PutChannelMembershipPreferencesCommandOutput
  extends PutChannelMembershipPreferencesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Sets the membership preferences of an <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
 *          for the specified channel. The user or bot must be a member of the channel. Only the user or bot who owns the
 *          membership can set preferences. Users or bots in the <code>AppInstanceAdmin</code> and channel moderator roles can't set
 *          preferences for other users. Banned users or bots can't set membership preferences for the channel from
 *          which they are banned.</p>
 *          <note>
 *             <p>The x-amz-chime-bearer request header is mandatory. Use the ARN of an
 *          <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the
 *          header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, PutChannelMembershipPreferencesCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, PutChannelMembershipPreferencesCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // PutChannelMembershipPreferencesRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MemberArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 *   Preferences: { // ChannelMembershipPreferences
 *     PushNotifications: { // PushNotificationPreferences
 *       AllowNotifications: "ALL" || "NONE" || "FILTERED", // required
 *       FilterRule: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new PutChannelMembershipPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // PutChannelMembershipPreferencesResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   Member: { // Identity
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * //   Preferences: { // ChannelMembershipPreferences
 * //     PushNotifications: { // PushNotificationPreferences
 * //       AllowNotifications: "ALL" || "NONE" || "FILTERED", // required
 * //       FilterRule: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutChannelMembershipPreferencesCommandInput - {@link PutChannelMembershipPreferencesCommandInput}
 * @returns {@link PutChannelMembershipPreferencesCommandOutput}
 * @see {@link PutChannelMembershipPreferencesCommandInput} for command's `input` shape.
 * @see {@link PutChannelMembershipPreferencesCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMessagingServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMessaging service.</p>
 *
 */
export class PutChannelMembershipPreferencesCommand extends $Command<
  PutChannelMembershipPreferencesCommandInput,
  PutChannelMembershipPreferencesCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PutChannelMembershipPreferencesCommandInput) {
    super();
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
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeMessagingService",
        operation: "PutChannelMembershipPreferences",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: PutChannelMembershipPreferencesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutChannelMembershipPreferencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutChannelMembershipPreferencesCommandOutput> {
    return de_PutChannelMembershipPreferencesCommand(output, context);
  }
}
