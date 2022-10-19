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
  CreateChannelFlowRequest,
  CreateChannelFlowRequestFilterSensitiveLog,
  CreateChannelFlowResponse,
  CreateChannelFlowResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateChannelFlowCommand,
  serializeAws_restJson1CreateChannelFlowCommand,
} from "../protocols/Aws_restJson1";

export interface CreateChannelFlowCommandInput extends CreateChannelFlowRequest {}
export interface CreateChannelFlowCommandOutput extends CreateChannelFlowResponse, __MetadataBearer {}

/**
 * <p>Creates a channel flow, a container for processors. Processors are AWS Lambda functions
 *          that perform actions on chat messages, such as stripping out profanity. You can associate
 *          channel flows with channels, and the processors in the channel flow then take action on all
 *          messages sent to that channel. This is a developer API.</p>
 *
 *            <p>Channel flows process the following items:</p>
 *          <ol>
 *             <li>
 *                <p>New and updated messages</p>
 *             </li>
 *             <li>
 *                <p>Persistent and non-persistent messages</p>
 *             </li>
 *             <li>
 *                <p>The Standard message type</p>
 *             </li>
 *          </ol>
 *
 *          <note>
 *             <p>Channel flows don't process Control or System messages. For more information about the message types provided by Chime SDK Messaging, refer to
 *            <a href="https://docs.aws.amazon.com/chime/latest/dg/using-the-messaging-sdk.html#msg-types">Message types</a> in the <i>Amazon Chime developer guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, CreateChannelFlowCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, CreateChannelFlowCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new CreateChannelFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChannelFlowCommandInput} for command's `input` shape.
 * @see {@link CreateChannelFlowCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 */
export class CreateChannelFlowCommand extends $Command<
  CreateChannelFlowCommandInput,
  CreateChannelFlowCommandOutput,
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

  constructor(readonly input: CreateChannelFlowCommandInput) {
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
  ): Handler<CreateChannelFlowCommandInput, CreateChannelFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateChannelFlowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "CreateChannelFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateChannelFlowRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateChannelFlowResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateChannelFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateChannelFlowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChannelFlowCommandOutput> {
    return deserializeAws_restJson1CreateChannelFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
