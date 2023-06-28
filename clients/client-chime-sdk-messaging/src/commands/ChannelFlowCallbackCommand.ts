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
} from "@smithy/types";

import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import {
  ChannelFlowCallbackRequest,
  ChannelFlowCallbackRequestFilterSensitiveLog,
  ChannelFlowCallbackResponse,
} from "../models/models_0";
import { de_ChannelFlowCallbackCommand, se_ChannelFlowCallbackCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ChannelFlowCallbackCommand}.
 */
export interface ChannelFlowCallbackCommandInput extends ChannelFlowCallbackRequest {}
/**
 * @public
 *
 * The output of {@link ChannelFlowCallbackCommand}.
 */
export interface ChannelFlowCallbackCommandOutput extends ChannelFlowCallbackResponse, __MetadataBearer {}

/**
 * @public
 * <p>Calls back Amazon Chime SDK messaging with a processing response message. This should be invoked from the processor Lambda. This is a developer API.</p>
 *          <p>You can return one of the following processing responses:</p>
 *          <ul>
 *             <li>
 *                <p>Update message content or metadata</p>
 *             </li>
 *             <li>
 *                <p>Deny a message</p>
 *             </li>
 *             <li>
 *                <p>Make no changes to the message</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ChannelFlowCallbackCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ChannelFlowCallbackCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ChannelFlowCallbackRequest
 *   CallbackId: "STRING_VALUE", // required
 *   ChannelArn: "STRING_VALUE", // required
 *   DeleteResource: true || false,
 *   ChannelMessage: { // ChannelMessageCallback
 *     MessageId: "STRING_VALUE", // required
 *     Content: "STRING_VALUE",
 *     Metadata: "STRING_VALUE",
 *     PushNotification: { // PushNotificationConfiguration
 *       Title: "STRING_VALUE",
 *       Body: "STRING_VALUE",
 *       Type: "DEFAULT" || "VOIP",
 *     },
 *     MessageAttributes: { // MessageAttributeMap
 *       "<keys>": { // MessageAttributeValue
 *         StringValues: [ // MessageAttributeStringValues
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     SubChannelId: "STRING_VALUE",
 *     ContentType: "STRING_VALUE",
 *   },
 * };
 * const command = new ChannelFlowCallbackCommand(input);
 * const response = await client.send(command);
 * // { // ChannelFlowCallbackResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   CallbackId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ChannelFlowCallbackCommandInput - {@link ChannelFlowCallbackCommandInput}
 * @returns {@link ChannelFlowCallbackCommandOutput}
 * @see {@link ChannelFlowCallbackCommandInput} for command's `input` shape.
 * @see {@link ChannelFlowCallbackCommandOutput} for command's `response` shape.
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
export class ChannelFlowCallbackCommand extends $Command<
  ChannelFlowCallbackCommandInput,
  ChannelFlowCallbackCommandOutput,
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
  constructor(readonly input: ChannelFlowCallbackCommandInput) {
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
  ): Handler<ChannelFlowCallbackCommandInput, ChannelFlowCallbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ChannelFlowCallbackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "ChannelFlowCallbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ChannelFlowCallbackRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ChannelFlowCallbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ChannelFlowCallbackCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ChannelFlowCallbackCommandOutput> {
    return de_ChannelFlowCallbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
