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
  GetIntentRequest,
  GetIntentRequestFilterSensitiveLog,
  GetIntentResponse,
  GetIntentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetIntentCommand,
  serializeAws_restJson1GetIntentCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link GetIntentCommand}.
 */
export interface GetIntentCommandInput extends GetIntentRequest {}
/**
 * The output of {@link GetIntentCommand}.
 */
export interface GetIntentCommandOutput extends GetIntentResponse, __MetadataBearer {}

/**
 * <p> Returns information about an intent. In addition to the intent
 *       name, you must specify the intent version. </p>
 *          <p> This operation requires permissions to perform the
 *         <code>lex:GetIntent</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetIntentCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntentCommandInput} for command's `input` shape.
 * @see {@link GetIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 *
 * @example To get a information about an intent
 * ```javascript
 * // This example shows how to get information about an intent.
 * const input = {
 *   "version": "$LATEST",
 *   "name": "DocOrderPizza"
 * };
 * const command = new GetIntentCommand(input);
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
 * }
 * *\/
 * ```
 *
 */
export class GetIntentCommand extends $Command<
  GetIntentCommandInput,
  GetIntentCommandOutput,
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

  constructor(readonly input: GetIntentCommandInput) {
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
  ): Handler<GetIntentCommandInput, GetIntentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetIntentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetIntentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIntentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetIntentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIntentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIntentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntentCommandOutput> {
    return deserializeAws_restJson1GetIntentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
