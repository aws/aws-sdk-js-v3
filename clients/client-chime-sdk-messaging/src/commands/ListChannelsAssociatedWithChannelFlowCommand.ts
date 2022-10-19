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
  ListChannelsAssociatedWithChannelFlowRequest,
  ListChannelsAssociatedWithChannelFlowRequestFilterSensitiveLog,
  ListChannelsAssociatedWithChannelFlowResponse,
  ListChannelsAssociatedWithChannelFlowResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommand,
  serializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommand,
} from "../protocols/Aws_restJson1";

export interface ListChannelsAssociatedWithChannelFlowCommandInput
  extends ListChannelsAssociatedWithChannelFlowRequest {}
export interface ListChannelsAssociatedWithChannelFlowCommandOutput
  extends ListChannelsAssociatedWithChannelFlowResponse,
    __MetadataBearer {}

/**
 * <p>Lists all channels associated with a specified channel flow. You can associate a channel flow with multiple channels, but you can only associate a channel with one channel flow. This is a developer API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelsAssociatedWithChannelFlowCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelsAssociatedWithChannelFlowCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new ListChannelsAssociatedWithChannelFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelsAssociatedWithChannelFlowCommandInput} for command's `input` shape.
 * @see {@link ListChannelsAssociatedWithChannelFlowCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 */
export class ListChannelsAssociatedWithChannelFlowCommand extends $Command<
  ListChannelsAssociatedWithChannelFlowCommandInput,
  ListChannelsAssociatedWithChannelFlowCommandOutput,
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

  constructor(readonly input: ListChannelsAssociatedWithChannelFlowCommandInput) {
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
  ): Handler<ListChannelsAssociatedWithChannelFlowCommandInput, ListChannelsAssociatedWithChannelFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListChannelsAssociatedWithChannelFlowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "ListChannelsAssociatedWithChannelFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChannelsAssociatedWithChannelFlowRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListChannelsAssociatedWithChannelFlowResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListChannelsAssociatedWithChannelFlowCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListChannelsAssociatedWithChannelFlowCommandOutput> {
    return deserializeAws_restJson1ListChannelsAssociatedWithChannelFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
