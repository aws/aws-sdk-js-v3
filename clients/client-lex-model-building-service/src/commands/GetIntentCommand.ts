// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetIntentRequest, GetIntentResponse } from "../models/models_0";
import { de_GetIntentCommand, se_GetIntentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIntentCommand}.
 */
export interface GetIntentCommandInput extends GetIntentRequest {}
/**
 * @public
 *
 * The output of {@link GetIntentCommand}.
 */
export interface GetIntentCommandOutput extends GetIntentResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // GetIntentRequest
 *   name: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 * };
 * const command = new GetIntentCommand(input);
 * const response = await client.send(command);
 * // { // GetIntentResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   slots: [ // SlotList
 * //     { // Slot
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       slotConstraint: "STRING_VALUE", // required
 * //       slotType: "STRING_VALUE",
 * //       slotTypeVersion: "STRING_VALUE",
 * //       valueElicitationPrompt: { // Prompt
 * //         messages: [ // MessageList // required
 * //           { // Message
 * //             contentType: "STRING_VALUE", // required
 * //             content: "STRING_VALUE", // required
 * //             groupNumber: Number("int"),
 * //           },
 * //         ],
 * //         maxAttempts: Number("int"), // required
 * //         responseCard: "STRING_VALUE",
 * //       },
 * //       priority: Number("int"),
 * //       sampleUtterances: [ // SlotUtteranceList
 * //         "STRING_VALUE",
 * //       ],
 * //       responseCard: "STRING_VALUE",
 * //       obfuscationSetting: "STRING_VALUE",
 * //       defaultValueSpec: { // SlotDefaultValueSpec
 * //         defaultValueList: [ // SlotDefaultValueList // required
 * //           { // SlotDefaultValue
 * //             defaultValue: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   sampleUtterances: [ // IntentUtteranceList
 * //     "STRING_VALUE",
 * //   ],
 * //   confirmationPrompt: {
 * //     messages: [ // required
 * //       {
 * //         contentType: "STRING_VALUE", // required
 * //         content: "STRING_VALUE", // required
 * //         groupNumber: Number("int"),
 * //       },
 * //     ],
 * //     maxAttempts: Number("int"), // required
 * //     responseCard: "STRING_VALUE",
 * //   },
 * //   rejectionStatement: { // Statement
 * //     messages: [ // required
 * //       {
 * //         contentType: "STRING_VALUE", // required
 * //         content: "STRING_VALUE", // required
 * //         groupNumber: Number("int"),
 * //       },
 * //     ],
 * //     responseCard: "STRING_VALUE",
 * //   },
 * //   followUpPrompt: { // FollowUpPrompt
 * //     prompt: "<Prompt>", // required
 * //     rejectionStatement: {
 * //       messages: "<MessageList>", // required
 * //       responseCard: "STRING_VALUE",
 * //     },
 * //   },
 * //   conclusionStatement: {
 * //     messages: "<MessageList>", // required
 * //     responseCard: "STRING_VALUE",
 * //   },
 * //   dialogCodeHook: { // CodeHook
 * //     uri: "STRING_VALUE", // required
 * //     messageVersion: "STRING_VALUE", // required
 * //   },
 * //   fulfillmentActivity: { // FulfillmentActivity
 * //     type: "STRING_VALUE", // required
 * //     codeHook: {
 * //       uri: "STRING_VALUE", // required
 * //       messageVersion: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   parentIntentSignature: "STRING_VALUE",
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   createdDate: new Date("TIMESTAMP"),
 * //   version: "STRING_VALUE",
 * //   checksum: "STRING_VALUE",
 * //   kendraConfiguration: { // KendraConfiguration
 * //     kendraIndex: "STRING_VALUE", // required
 * //     queryFilterString: "STRING_VALUE",
 * //     role: "STRING_VALUE", // required
 * //   },
 * //   inputContexts: [ // InputContextList
 * //     { // InputContext
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   outputContexts: [ // OutputContextList
 * //     { // OutputContext
 * //       name: "STRING_VALUE", // required
 * //       timeToLiveInSeconds: Number("int"), // required
 * //       turnsToLive: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetIntentCommandInput - {@link GetIntentCommandInput}
 * @returns {@link GetIntentCommandOutput}
 * @see {@link GetIntentCommandInput} for command's `input` shape.
 * @see {@link GetIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
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
 * // example id: to-get-a-information-about-an-intent-1494432574147
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetIntentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIntentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntentCommandOutput> {
    return de_GetIntentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
