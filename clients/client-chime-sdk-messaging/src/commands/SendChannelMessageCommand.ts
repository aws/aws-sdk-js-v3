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
  SendChannelMessageRequest,
  SendChannelMessageRequestFilterSensitiveLog,
  SendChannelMessageResponse,
} from "../models/models_0";
import { de_SendChannelMessageCommand, se_SendChannelMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendChannelMessageCommand}.
 */
export interface SendChannelMessageCommandInput extends SendChannelMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendChannelMessageCommand}.
 */
export interface SendChannelMessageCommandOutput extends SendChannelMessageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sends a message to a particular channel that the member is a part of.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *             <p>Also, <code>STANDARD</code> messages can be up to 4KB in size and contain metadata. Metadata is arbitrary,
 *             and you can use it in a variety of ways, such as containing a link to an attachment.</p>
 *             <p>
 *                <code>CONTROL</code> messages are limited to 30 bytes and do not contain metadata.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, SendChannelMessageCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, SendChannelMessageCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // SendChannelMessageRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   Content: "STRING_VALUE", // required
 *   Type: "STANDARD" || "CONTROL", // required
 *   Persistence: "PERSISTENT" || "NON_PERSISTENT", // required
 *   Metadata: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 *   PushNotification: { // PushNotificationConfiguration
 *     Title: "STRING_VALUE",
 *     Body: "STRING_VALUE",
 *     Type: "DEFAULT" || "VOIP",
 *   },
 *   MessageAttributes: { // MessageAttributeMap
 *     "<keys>": { // MessageAttributeValue
 *       StringValues: [ // MessageAttributeStringValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   SubChannelId: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
 *   Target: [ // TargetList
 *     { // Target
 *       MemberArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new SendChannelMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendChannelMessageResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   MessageId: "STRING_VALUE",
 * //   Status: { // ChannelMessageStatusStructure
 * //     Value: "SENT" || "PENDING" || "FAILED" || "DENIED",
 * //     Detail: "STRING_VALUE",
 * //   },
 * //   SubChannelId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendChannelMessageCommandInput - {@link SendChannelMessageCommandInput}
 * @returns {@link SendChannelMessageCommandOutput}
 * @see {@link SendChannelMessageCommandInput} for command's `input` shape.
 * @see {@link SendChannelMessageCommandOutput} for command's `response` shape.
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
export class SendChannelMessageCommand extends $Command<
  SendChannelMessageCommandInput,
  SendChannelMessageCommandOutput,
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
  constructor(readonly input: SendChannelMessageCommandInput) {
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
  ): Handler<SendChannelMessageCommandInput, SendChannelMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendChannelMessageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "SendChannelMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendChannelMessageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeMessagingService",
        operation: "SendChannelMessage",
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
  private serialize(input: SendChannelMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendChannelMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendChannelMessageCommandOutput> {
    return de_SendChannelMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
