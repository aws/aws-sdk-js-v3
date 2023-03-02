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
  PutIntentRequest,
  PutIntentRequestFilterSensitiveLog,
  PutIntentResponse,
  PutIntentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutIntentCommand,
  serializeAws_restJson1PutIntentCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link PutIntentCommand}.
 */
export interface PutIntentCommandInput extends PutIntentRequest {}
/**
 * The output of {@link PutIntentCommand}.
 */
export interface PutIntentCommandOutput extends PutIntentResponse, __MetadataBearer {}

/**
 * <p>Creates an intent or replaces an existing intent.</p>
 *          <p>To define the interaction between the user and your bot, you use
 *       one or more intents. For a pizza ordering bot, for example, you would
 *       create an <code>OrderPizza</code> intent. </p>
 *          <p>To create an intent or replace an existing intent, you must provide
 *       the following:</p>
 *          <ul>
 *             <li>
 *                <p>Intent name. For example, <code>OrderPizza</code>.</p>
 *             </li>
 *             <li>
 *                <p>Sample utterances. For example, "Can I order a pizza, please."
 *           and "I want to order a pizza."</p>
 *             </li>
 *             <li>
 *                <p>Information to be gathered. You specify slot types for the
 *           information that your bot will request from the user. You can specify
 *           standard slot types, such as a date or a time, or custom slot types
 *           such as the size and crust of a pizza.</p>
 *             </li>
 *             <li>
 *                <p>How the intent will be fulfilled. You can provide a Lambda
 *           function or configure the intent to return the intent information to
 *           the client application. If you use a Lambda function, when all of the
 *           intent information is available, Amazon Lex invokes your Lambda function.
 *           If you configure your intent to return the intent information to the
 *           client application. </p>
 *             </li>
 *          </ul>
 *          <p>You can specify other optional information in the request, such
 *       as:</p>
 *
 *          <ul>
 *             <li>
 *                <p>A confirmation prompt to ask the user to confirm an intent. For
 *           example, "Shall I order your pizza?"</p>
 *             </li>
 *             <li>
 *                <p>A conclusion statement to send to the user after the intent has
 *           been fulfilled. For example, "I placed your pizza order."</p>
 *             </li>
 *             <li>
 *                <p>A follow-up prompt that asks the user for additional activity.
 *           For example, asking "Do you want to order a drink with your
 *           pizza?"</p>
 *             </li>
 *          </ul>
 *          <p>If you specify an existing intent name to update the intent, Amazon Lex
 *       replaces the values in the <code>$LATEST</code> version of the intent with
 *       the values in the request. Amazon Lex removes fields that you don't provide in
 *       the request. If you don't specify the required fields, Amazon Lex throws an
 *       exception. When you update the <code>$LATEST</code> version of an intent,
 *       the <code>status</code> field of any bot that uses the
 *         <code>$LATEST</code> version of the intent is set to
 *         <code>NOT_BUILT</code>.</p>
 *          <p>For more information, see <a>how-it-works</a>.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:PutIntent</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutIntentCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new PutIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutIntentCommandInput} for command's `input` shape.
 * @see {@link PutIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @example To create an intent
 * ```javascript
 * // This example shows how to create an intent for ordering pizzas.
 * const input = {
 *   "name": "DocOrderPizza",
 *   "conclusionStatement": {
 *     "messages": [
 *       {
 *         "content": "All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
 *         "contentType": "PlainText"
 *       },
 *       {
 *         "content": "OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
 *         "contentType": "PlainText"
 *       }
 *     ],
 *     "responseCard": "foo"
 *   },
 *   "confirmationPrompt": {
 *     "maxAttempts": 1,
 *     "messages": [
 *       {
 *         "content": "Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
 *         "contentType": "PlainText"
 *       }
 *     ]
 *   },
 *   "description": "Order a pizza from a local pizzeria.",
 *   "fulfillmentActivity": {
 *     "type": "ReturnIntent"
 *   },
 *   "rejectionStatement": {
 *     "messages": [
 *       {
 *         "content": "Ok, I'll cancel your order.",
 *         "contentType": "PlainText"
 *       },
 *       {
 *         "content": "I cancelled your order.",
 *         "contentType": "PlainText"
 *       }
 *     ]
 *   },
 *   "sampleUtterances": [
 *     "Order me a pizza.",
 *     "Order me a {Type} pizza.",
 *     "I want a {Crust} crust {Type} pizza",
 *     "I want a {Crust} crust {Type} pizza with {Sauce} sauce."
 *   ],
 *   "slots": [
 *     {
 *       "name": "Type",
 *       "description": "The type of pizza to order.",
 *       "priority": 1,
 *       "sampleUtterances": [
 *         "Get me a {Type} pizza.",
 *         "A {Type} pizza please.",
 *         "I'd like a {Type} pizza."
 *       ],
 *       "slotConstraint": "Required",
 *       "slotType": "DocPizzaType",
 *       "slotTypeVersion": "$LATEST",
 *       "valueElicitationPrompt": {
 *         "maxAttempts": 1,
 *         "messages": [
 *           {
 *             "content": "What type of pizza would you like?",
 *             "contentType": "PlainText"
 *           },
 *           {
 *             "content": "Vegie or cheese pizza?",
 *             "contentType": "PlainText"
 *           },
 *           {
 *             "content": "I can get you a vegie or a cheese pizza.",
 *             "contentType": "PlainText"
 *           }
 *         ]
 *       }
 *     },
 *     {
 *       "name": "Crust",
 *       "description": "The type of pizza crust to order.",
 *       "priority": 2,
 *       "sampleUtterances": [
 *         "Make it a {Crust} crust.",
 *         "I'd like a {Crust} crust."
 *       ],
 *       "slotConstraint": "Required",
 *       "slotType": "DocPizzaCrustType",
 *       "slotTypeVersion": "$LATEST",
 *       "valueElicitationPrompt": {
 *         "maxAttempts": 1,
 *         "messages": [
 *           {
 *             "content": "What type of crust would you like?",
 *             "contentType": "PlainText"
 *           },
 *           {
 *             "content": "Thick or thin crust?",
 *             "contentType": "PlainText"
 *           }
 *         ]
 *       }
 *     },
 *     {
 *       "name": "Sauce",
 *       "description": "The type of sauce to use on the pizza.",
 *       "priority": 3,
 *       "sampleUtterances": [
 *         "Make it {Sauce} sauce.",
 *         "I'd like {Sauce} sauce."
 *       ],
 *       "slotConstraint": "Required",
 *       "slotType": "DocPizzaSauceType",
 *       "slotTypeVersion": "$LATEST",
 *       "valueElicitationPrompt": {
 *         "maxAttempts": 1,
 *         "messages": [
 *           {
 *             "content": "White or red sauce?",
 *             "contentType": "PlainText"
 *           },
 *           {
 *             "content": "Garlic or tomato sauce?",
 *             "contentType": "PlainText"
 *           }
 *         ]
 *       }
 *     }
 *   ]
 * };
 * const command = new PutIntentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "version": "$LATEST",
 *   "name": "DocOrderPizza",
 *   "checksum": "ca9bc13d-afc8-4706-bbaf-091f7a5935d6",
 *   "conclusionStatement": {
 *     "messages": [
 *       {
 *         "content": "All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
 *         "contentType": "PlainText"
 *       },
 *       {
 *         "content": "OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
 *         "contentType": "PlainText"
 *       }
 *     ],
 *     "responseCard": "foo"
 *   },
 *   "confirmationPrompt": {
 *     "maxAttempts": 1,
 *     "messages": [
 *       {
 *         "content": "Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
 *         "contentType": "PlainText"
 *       }
 *     ]
 *   },
 *   "createdDate": 1494359783.453,
 *   "description": "Order a pizza from a local pizzeria.",
 *   "fulfillmentActivity": {
 *     "type": "ReturnIntent"
 *   },
 *   "lastUpdatedDate": 1494359783.453,
 *   "rejectionStatement": {
 *     "messages": [
 *       {
 *         "content": "Ok, I'll cancel your order.",
 *         "contentType": "PlainText"
 *       },
 *       {
 *         "content": "I cancelled your order.",
 *         "contentType": "PlainText"
 *       }
 *     ]
 *   },
 *   "sampleUtterances": [
 *     "Order me a pizza.",
 *     "Order me a {Type} pizza.",
 *     "I want a {Crust} crust {Type} pizza",
 *     "I want a {Crust} crust {Type} pizza with {Sauce} sauce."
 *   ],
 *   "slots": [
 *     {
 *       "name": "Sauce",
 *       "description": "The type of sauce to use on the pizza.",
 *       "priority": 3,
 *       "sampleUtterances": [
 *         "Make it {Sauce} sauce.",
 *         "I'd like {Sauce} sauce."
 *       ],
 *       "slotConstraint": "Required",
 *       "slotType": "DocPizzaSauceType",
 *       "slotTypeVersion": "$LATEST",
 *       "valueElicitationPrompt": {
 *         "maxAttempts": 1,
 *         "messages": [
 *           {
 *             "content": "White or red sauce?",
 *             "contentType": "PlainText"
 *           },
 *           {
 *             "content": "Garlic or tomato sauce?",
 *             "contentType": "PlainText"
 *           }
 *         ]
 *       }
 *     },
 *     {
 *       "name": "Type",
 *       "description": "The type of pizza to order.",
 *       "priority": 1,
 *       "sampleUtterances": [
 *         "Get me a {Type} pizza.",
 *         "A {Type} pizza please.",
 *         "I'd like a {Type} pizza."
 *       ],
 *       "slotConstraint": "Required",
 *       "slotType": "DocPizzaType",
 *       "slotTypeVersion": "$LATEST",
 *       "valueElicitationPrompt": {
 *         "maxAttempts": 1,
 *         "messages": [
 *           {
 *             "content": "What type of pizza would you like?",
 *             "contentType": "PlainText"
 *           },
 *           {
 *             "content": "Vegie or cheese pizza?",
 *             "contentType": "PlainText"
 *           },
 *           {
 *             "content": "I can get you a vegie or a cheese pizza.",
 *             "contentType": "PlainText"
 *           }
 *         ]
 *       }
 *     },
 *     {
 *       "name": "Crust",
 *       "description": "The type of pizza crust to order.",
 *       "priority": 2,
 *       "sampleUtterances": [
 *         "Make it a {Crust} crust.",
 *         "I'd like a {Crust} crust."
 *       ],
 *       "slotConstraint": "Required",
 *       "slotType": "DocPizzaCrustType",
 *       "slotTypeVersion": "$LATEST",
 *       "valueElicitationPrompt": {
 *         "maxAttempts": 1,
 *         "messages": [
 *           {
 *             "content": "What type of crust would you like?",
 *             "contentType": "PlainText"
 *           },
 *           {
 *             "content": "Thick or thin crust?",
 *             "contentType": "PlainText"
 *           }
 *         ]
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class PutIntentCommand extends $Command<
  PutIntentCommandInput,
  PutIntentCommandOutput,
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

  constructor(readonly input: PutIntentCommandInput) {
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
  ): Handler<PutIntentCommandInput, PutIntentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutIntentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "PutIntentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutIntentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutIntentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutIntentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutIntentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutIntentCommandOutput> {
    return deserializeAws_restJson1PutIntentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
