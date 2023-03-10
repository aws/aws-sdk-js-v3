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
  ChannelFlowCallbackRequest,
  ChannelFlowCallbackRequestFilterSensitiveLog,
  ChannelFlowCallbackResponse,
  ChannelFlowCallbackResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ChannelFlowCallbackCommand,
  serializeAws_restJson1ChannelFlowCallbackCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ChannelFlowCallbackCommand}.
 */
export interface ChannelFlowCallbackCommandInput extends ChannelFlowCallbackRequest {}
/**
 * The output of {@link ChannelFlowCallbackCommand}.
 */
export interface ChannelFlowCallbackCommandOutput extends ChannelFlowCallbackResponse, __MetadataBearer {}

/**
 * <p>Calls back Chime SDK Messaging with a processing response message. This should be invoked from the processor Lambda. This is a developer API.</p>
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
 * const command = new ChannelFlowCallbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
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
      outputFilterSensitiveLog: ChannelFlowCallbackResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ChannelFlowCallbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ChannelFlowCallbackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ChannelFlowCallbackCommandOutput> {
    return deserializeAws_restJson1ChannelFlowCallbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
