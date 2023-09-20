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
import { GetChannelMessageStatusRequest, GetChannelMessageStatusResponse } from "../models/models_0";
import { de_GetChannelMessageStatusCommand, se_GetChannelMessageStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetChannelMessageStatusCommand}.
 */
export interface GetChannelMessageStatusCommandInput extends GetChannelMessageStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelMessageStatusCommand}.
 */
export interface GetChannelMessageStatusCommandOutput extends GetChannelMessageStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets message status for a specified <code>messageId</code>. Use this API to determine the intermediate status of messages going through channel flow processing. The API provides an alternative to
 *          retrieving message status if the event was not received because a client wasn't connected to a websocket. </p>
 *          <p>Messages can have any one of these statuses.</p>
 *          <dl>
 *             <dt>SENT</dt>
 *             <dd>
 *                <p>Message processed successfully</p>
 *             </dd>
 *             <dt>PENDING</dt>
 *             <dd>
 *                <p>Ongoing processing</p>
 *             </dd>
 *             <dt>FAILED</dt>
 *             <dd>
 *                <p>Processing failed</p>
 *             </dd>
 *             <dt>DENIED</dt>
 *             <dd>
 *                <p>Message denied by the processor</p>
 *             </dd>
 *          </dl>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API does not return statuses for denied messages, because we don't store them once the processor denies them. </p>
 *                </li>
 *                <li>
 *                   <p>Only the message sender can invoke this API.</p>
 *                </li>
 *                <li>
 *                   <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, GetChannelMessageStatusCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, GetChannelMessageStatusCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // GetChannelMessageStatusRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MessageId: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 *   SubChannelId: "STRING_VALUE",
 * };
 * const command = new GetChannelMessageStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelMessageStatusResponse
 * //   Status: { // ChannelMessageStatusStructure
 * //     Value: "SENT" || "PENDING" || "FAILED" || "DENIED",
 * //     Detail: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChannelMessageStatusCommandInput - {@link GetChannelMessageStatusCommandInput}
 * @returns {@link GetChannelMessageStatusCommandOutput}
 * @see {@link GetChannelMessageStatusCommandInput} for command's `input` shape.
 * @see {@link GetChannelMessageStatusCommandOutput} for command's `response` shape.
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
export class GetChannelMessageStatusCommand extends $Command<
  GetChannelMessageStatusCommandInput,
  GetChannelMessageStatusCommandOutput,
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
  constructor(readonly input: GetChannelMessageStatusCommandInput) {
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
  ): Handler<GetChannelMessageStatusCommandInput, GetChannelMessageStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetChannelMessageStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "GetChannelMessageStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeMessagingService",
        operation: "GetChannelMessageStatus",
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
  private serialize(input: GetChannelMessageStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetChannelMessageStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChannelMessageStatusCommandOutput> {
    return de_GetChannelMessageStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
