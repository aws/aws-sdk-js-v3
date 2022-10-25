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
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import {
  PutBotRequest,
  PutBotRequestFilterSensitiveLog,
  PutBotResponse,
  PutBotResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_restJson1PutBotCommand, serializeAws_restJson1PutBotCommand } from "../protocols/Aws_restJson1";

export interface PutBotCommandInput extends PutBotRequest {}
export interface PutBotCommandOutput extends PutBotResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Lex conversational bot or replaces an existing bot.
 *       When you create or update a bot you are only required to specify a name, a
 *       locale, and whether the bot is directed toward children under age 13. You
 *       can use this to add intents later, or to remove intents from an existing
 *       bot. When you create a bot with the minimum information, the bot is
 *       created or updated but Amazon Lex returns the <code></code> response
 *         <code>FAILED</code>. You can build the bot after you add one or more
 *       intents. For more information about Amazon Lex bots, see <a>how-it-works</a>. </p>
 *          <p>If you specify the name of an existing bot, the fields in the
 *       request replace the existing values in the <code>$LATEST</code> version of
 *       the bot. Amazon Lex removes any fields that you don't provide values for in the
 *       request, except for the <code>idleTTLInSeconds</code> and
 *         <code>privacySettings</code> fields, which are set to their default
 *       values. If you don't specify values for required fields, Amazon Lex throws an
 *       exception.</p>
 *
 *          <p>This operation requires permissions for the <code>lex:PutBot</code>
 *       action. For more information, see <a>security-iam</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutBotCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutBotCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new PutBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBotCommandInput} for command's `input` shape.
 * @see {@link PutBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class PutBotCommand extends $Command<
  PutBotCommandInput,
  PutBotCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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

  constructor(readonly input: PutBotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBotCommandInput, PutBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutBotCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "PutBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutBotResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutBotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBotCommandOutput> {
    return deserializeAws_restJson1PutBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
