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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import {
  CreateIntentRequest,
  CreateIntentRequestFilterSensitiveLog,
  CreateIntentResponse,
  CreateIntentResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1CreateIntentCommand,
  serializeAws_restJson1CreateIntentCommand,
} from "../protocols/Aws_restJson1";

export interface CreateIntentCommandInput extends CreateIntentRequest {}
export interface CreateIntentCommandOutput extends CreateIntentResponse, __MetadataBearer {}

/**
 * <p>Creates an intent.</p>
 *          <p>To define the interaction between the user and your bot, you define
 *          one or more intents. For example, for a pizza ordering bot you would
 *          create an <code>OrderPizza</code> intent.</p>
 *          <p>When you create an intent, you must provide a name. You can
 *          optionally provide the following:</p>
 *          <ul>
 *             <li>
 *                <p>Sample utterances. For example, "I want to order a pizza" and
 *                "Can I order a pizza." You can't provide utterances for built-in
 *                intents.</p>
 *             </li>
 *             <li>
 *                <p>Information to be gathered. You specify slots for the
 *                information that you bot requests from the user. You can specify
 *                standard slot types, such as date and time, or custom slot types
 *                for your application.</p>
 *             </li>
 *             <li>
 *                <p>How the intent is fulfilled. You can provide a Lambda function
 *                or configure the intent to return the intent information to your
 *                client application. If you use a Lambda function, Amazon Lex invokes
 *                the function when all of the intent information is
 *                available.</p>
 *             </li>
 *             <li>
 *                <p>A confirmation prompt to send to the user to confirm an
 *                intent. For example, "Shall I order your pizza?"</p>
 *             </li>
 *             <li>
 *                <p>A conclusion statement to send to the user after the intent is
 *                fulfilled. For example, "I ordered your pizza."</p>
 *             </li>
 *             <li>
 *                <p>A follow-up prompt that asks the user for additional activity.
 *                For example, "Do you want a drink with your pizza?"</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateIntentCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateIntentCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIntentCommandInput} for command's `input` shape.
 * @see {@link CreateIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 */
export class CreateIntentCommand extends $Command<
  CreateIntentCommandInput,
  CreateIntentCommandOutput,
  LexModelsV2ClientResolvedConfig
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

  constructor(readonly input: CreateIntentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIntentCommandInput, CreateIntentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateIntentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "CreateIntentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIntentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateIntentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIntentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateIntentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateIntentCommandOutput> {
    return deserializeAws_restJson1CreateIntentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
