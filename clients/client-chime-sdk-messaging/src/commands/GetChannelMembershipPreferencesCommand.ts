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
  GetChannelMembershipPreferencesRequest,
  GetChannelMembershipPreferencesResponse,
  GetChannelMembershipPreferencesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetChannelMembershipPreferencesCommand,
  se_GetChannelMembershipPreferencesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetChannelMembershipPreferencesCommand}.
 */
export interface GetChannelMembershipPreferencesCommandInput extends GetChannelMembershipPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelMembershipPreferencesCommand}.
 */
export interface GetChannelMembershipPreferencesCommandOutput
  extends GetChannelMembershipPreferencesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the membership preferences of an <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
 *          for the specified channel. A user or a bot must be a member of the channel and own the membership in order to retrieve membership preferences.
 *          Users or bots in the <code>AppInstanceAdmin</code> and channel moderator roles can't
 *          retrieve preferences for other users or bots. Banned users or bots can't retrieve membership preferences for the
 *          channel from which they are banned.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *          ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *          the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, GetChannelMembershipPreferencesCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, GetChannelMembershipPreferencesCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // GetChannelMembershipPreferencesRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MemberArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new GetChannelMembershipPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelMembershipPreferencesResponse
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
 * @param GetChannelMembershipPreferencesCommandInput - {@link GetChannelMembershipPreferencesCommandInput}
 * @returns {@link GetChannelMembershipPreferencesCommandOutput}
 * @see {@link GetChannelMembershipPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetChannelMembershipPreferencesCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetChannelMembershipPreferencesResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeMessagingService",
        operation: "GetChannelMembershipPreferences",
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
    input: GetChannelMembershipPreferencesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetChannelMembershipPreferencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetChannelMembershipPreferencesCommandOutput> {
    return de_GetChannelMembershipPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
