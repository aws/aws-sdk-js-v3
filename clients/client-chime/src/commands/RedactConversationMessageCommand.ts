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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  RedactConversationMessageRequest,
  RedactConversationMessageRequestFilterSensitiveLog,
  RedactConversationMessageResponse,
  RedactConversationMessageResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1RedactConversationMessageCommand,
  serializeAws_restJson1RedactConversationMessageCommand,
} from "../protocols/Aws_restJson1";

export interface RedactConversationMessageCommandInput extends RedactConversationMessageRequest {}
export interface RedactConversationMessageCommandOutput extends RedactConversationMessageResponse, __MetadataBearer {}

/**
 * <p>Redacts the specified message from the specified Amazon Chime conversation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RedactConversationMessageCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RedactConversationMessageCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new RedactConversationMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RedactConversationMessageCommandInput} for command's `input` shape.
 * @see {@link RedactConversationMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class RedactConversationMessageCommand extends $Command<
  RedactConversationMessageCommandInput,
  RedactConversationMessageCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: RedactConversationMessageCommandInput) {
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
  ): Handler<RedactConversationMessageCommandInput, RedactConversationMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RedactConversationMessageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "RedactConversationMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RedactConversationMessageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RedactConversationMessageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RedactConversationMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RedactConversationMessageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RedactConversationMessageCommandOutput> {
    return deserializeAws_restJson1RedactConversationMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
