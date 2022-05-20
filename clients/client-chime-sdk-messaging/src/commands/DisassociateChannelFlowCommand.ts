// smithy-typescript generated code
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
import { DisassociateChannelFlowRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateChannelFlowCommand,
  serializeAws_restJson1DisassociateChannelFlowCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociateChannelFlowCommandInput extends DisassociateChannelFlowRequest {}
export interface DisassociateChannelFlowCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates a channel flow from all its channels. Once disassociated, all messages to
 *          that channel stop going through the channel flow processor.</p>
 *          <note>
 *             <p>Only administrators or channel moderators can disassociate a channel flow. The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code>
 *            of the user that makes the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DisassociateChannelFlowCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DisassociateChannelFlowCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new DisassociateChannelFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateChannelFlowCommandInput} for command's `input` shape.
 * @see {@link DisassociateChannelFlowCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 */
export class DisassociateChannelFlowCommand extends $Command<
  DisassociateChannelFlowCommandInput,
  DisassociateChannelFlowCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateChannelFlowCommandInput) {
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
  ): Handler<DisassociateChannelFlowCommandInput, DisassociateChannelFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "DisassociateChannelFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateChannelFlowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateChannelFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateChannelFlowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateChannelFlowCommandOutput> {
    return deserializeAws_restJson1DisassociateChannelFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
