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
  GetChannelMessageStatusRequest,
  GetChannelMessageStatusRequestFilterSensitiveLog,
  GetChannelMessageStatusResponse,
  GetChannelMessageStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetChannelMessageStatusCommand,
  serializeAws_restJson1GetChannelMessageStatusCommand,
} from "../protocols/Aws_restJson1";

export interface GetChannelMessageStatusCommandInput extends GetChannelMessageStatusRequest {}
export interface GetChannelMessageStatusCommandOutput extends GetChannelMessageStatusResponse, __MetadataBearer {}

/**
 * <p>Gets message status for a specified <code>messageId</code>. Use this API to determine the intermediate status of messages going through channel flow processing. The API provides an alternative to
 *          retrieving message status if the event was not received because a client wasn't connected to a websocket. </p>
 *
 *          <p>Messages can have any one of these statuses.</p>
 *
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
 *                <p>Messasge denied by the processor</p>
 *             </dd>
 *          </dl>
 *
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API does not return statuses for denied messages, because we don't store them once the processor denies them. </p>
 *                </li>
 *                <li>
 *                   <p>Only the message sender can invoke this API.</p>
 *                </li>
 *                <li>
 *                   <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, GetChannelMessageStatusCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, GetChannelMessageStatusCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new GetChannelMessageStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChannelMessageStatusCommandInput} for command's `input` shape.
 * @see {@link GetChannelMessageStatusCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
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
      inputFilterSensitiveLog: GetChannelMessageStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetChannelMessageStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetChannelMessageStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetChannelMessageStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChannelMessageStatusCommandOutput> {
    return deserializeAws_restJson1GetChannelMessageStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
