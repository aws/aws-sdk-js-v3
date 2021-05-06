import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { RedactRoomMessageRequest, RedactRoomMessageResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RedactRoomMessageCommand,
  serializeAws_restJson1RedactRoomMessageCommand,
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

export interface RedactRoomMessageCommandInput extends RedactRoomMessageRequest {}
export interface RedactRoomMessageCommandOutput extends RedactRoomMessageResponse, __MetadataBearer {}

/**
 * <p>Redacts the specified message from the specified Amazon Chime channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RedactRoomMessageCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RedactRoomMessageCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new RedactRoomMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RedactRoomMessageCommandInput} for command's `input` shape.
 * @see {@link RedactRoomMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RedactRoomMessageCommand extends $Command<
  RedactRoomMessageCommandInput,
  RedactRoomMessageCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RedactRoomMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RedactRoomMessageCommandInput, RedactRoomMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "RedactRoomMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RedactRoomMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RedactRoomMessageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RedactRoomMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RedactRoomMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RedactRoomMessageCommandOutput> {
    return deserializeAws_restJson1RedactRoomMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
