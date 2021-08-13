import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { ListChannelBansRequest, ListChannelBansResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListChannelBansCommand,
  serializeAws_restJson1ListChannelBansCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListChannelBansCommandInput extends ListChannelBansRequest {}
export interface ListChannelBansCommandOutput extends ListChannelBansResponse, __MetadataBearer {}

/**
 * <p>Lists all the users banned from a particular channel.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelBansCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelBansCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new ListChannelBansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelBansCommandInput} for command's `input` shape.
 * @see {@link ListChannelBansCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListChannelBansCommand extends $Command<
  ListChannelBansCommandInput,
  ListChannelBansCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListChannelBansCommandInput) {
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
  ): Handler<ListChannelBansCommandInput, ListChannelBansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "ListChannelBansCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChannelBansRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChannelBansResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListChannelBansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChannelBansCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChannelBansCommandOutput> {
    return deserializeAws_restJson1ListChannelBansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
