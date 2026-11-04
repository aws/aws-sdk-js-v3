// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutIntentRequest, PutIntentResponse } from "../models/models_0";
import { PutIntent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutIntentCommand}.
 */
export interface PutIntentCommandInput extends PutIntentRequest {}
/**
 * @public
 *
 * The output of {@link PutIntentCommand}.
 */
export interface PutIntentCommandOutput extends PutIntentResponse, __MetadataBearer {}

/**
 * Creates an intent or replaces an existing intent.
 *
 * To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an `OrderPizza` intent.
 *
 * To create an intent or replace an existing intent, you must provide the following:
 *
 * - Intent name. For example, `OrderPizza`.
 * - Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza."
 * - Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza.
 * - How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application.
 *
 * You can specify other optional information in the request, such as:
 *
 * - A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?"
 * - A conclusion statement to send to the user after the intent has been fulfilled. For example, "I placed your pizza order."
 * - A follow-up prompt that asks the user for additional activity. For example, asking "Do you want to order a drink with your pizza?"
 *
 * If you specify an existing intent name to update the intent, Amazon Lex replaces the values in the `$LATEST` version of the intent with the values in the request. Amazon Lex removes fields that you don't provide in the request. If you don't specify the required fields, Amazon Lex throws an exception. When you update the `$LATEST` version of an intent, the `status` field of any bot that uses the `$LATEST` version of the intent is set to `NOT_BUILT`.
 *
 * For more information, see how-it-works.
 *
 * This operation requires permissions for the `lex:PutIntent` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutIntentCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // PutIntentRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   slots: [ // SlotList
 *     { // Slot
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       slotConstraint: "Required" || "Optional", // required
 *       slotType: "STRING_VALUE",
 *       slotTypeVersion: "STRING_VALUE",
 *       valueElicitationPrompt: { // Prompt
 *         messages: [ // MessageList // required
 *           { // Message
 *             contentType: "PlainText" || "SSML" || "CustomPayload", // required
 *             content: "STRING_VALUE", // required
 *             groupNumber: Number("int"),
 *           },
 *         ],
 *         maxAttempts: Number("int"), // required
 *         responseCard: "STRING_VALUE",
 *       },
 *       priority: Number("int"),
 *       sampleUtterances: [ // SlotUtteranceList
 *         "STRING_VALUE",
 *       ],
 *       responseCard: "STRING_VALUE",
 *       obfuscationSetting: "NONE" || "DEFAULT_OBFUSCATION",
 *       defaultValueSpec: { // SlotDefaultValueSpec
 *         defaultValueList: [ // SlotDefaultValueList // required
 *           { // SlotDefaultValue
 *             defaultValue: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   sampleUtterances: [ // IntentUtteranceList
 *     "STRING_VALUE",
 *   ],
 *   confirmationPrompt: {
 *     messages: [ // required
 *       {
 *         contentType: "PlainText" || "SSML" || "CustomPayload", // required
 *         content: "STRING_VALUE", // required
 *         groupNumber: Number("int"),
 *       },
 *     ],
 *     maxAttempts: Number("int"), // required
 *     responseCard: "STRING_VALUE",
 *   },
 *   rejectionStatement: { // Statement
 *     messages: [ // required
 *       {
 *         contentType: "PlainText" || "SSML" || "CustomPayload", // required
 *         content: "STRING_VALUE", // required
 *         groupNumber: Number("int"),
 *       },
 *     ],
 *     responseCard: "STRING_VALUE",
 *   },
 *   followUpPrompt: { // FollowUpPrompt
 *     prompt: "<Prompt>", // required
 *     rejectionStatement: {
 *       messages: "<MessageList>", // required
 *       responseCard: "STRING_VALUE",
 *     },
 *   },
 *   conclusionStatement: {
 *     messages: "<MessageList>", // required
 *     responseCard: "STRING_VALUE",
 *   },
 *   dialogCodeHook: { // CodeHook
 *     uri: "STRING_VALUE", // required
 *     messageVersion: "STRING_VALUE", // required
 *   },
 *   fulfillmentActivity: { // FulfillmentActivity
 *     type: "ReturnIntent" || "CodeHook", // required
 *     codeHook: {
 *       uri: "STRING_VALUE", // required
 *       messageVersion: "STRING_VALUE", // required
 *     },
 *   },
 *   parentIntentSignature: "STRING_VALUE",
 *   checksum: "STRING_VALUE",
 *   createVersion: true || false,
 *   kendraConfiguration: { // KendraConfiguration
 *     kendraIndex: "STRING_VALUE", // required
 *     queryFilterString: "STRING_VALUE",
 *     role: "STRING_VALUE", // required
 *   },
 *   inputContexts: [ // InputContextList
 *     { // InputContext
 *       name: "STRING_VALUE", // required
 *     },
 *   ],
 *   outputContexts: [ // OutputContextList
 *     { // OutputContext
 *       name: "STRING_VALUE", // required
 *       timeToLiveInSeconds: Number("int"), // required
 *       turnsToLive: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new PutIntentCommand(input);
 * const response = await client.send(command);
 * // { // PutIntentResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   slots: [ // SlotList
 * //     { // Slot
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       slotConstraint: "Required" || "Optional", // required
 * //       slotType: "STRING_VALUE",
 * //       slotTypeVersion: "STRING_VALUE",
 * //       valueElicitationPrompt: { // Prompt
 * //         messages: [ // MessageList // required
 * //           { // Message
 * //             contentType: "PlainText" || "SSML" || "CustomPayload", // required
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
 * //       obfuscationSetting: "NONE" || "DEFAULT_OBFUSCATION",
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
 * //         contentType: "PlainText" || "SSML" || "CustomPayload", // required
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
 * //         contentType: "PlainText" || "SSML" || "CustomPayload", // required
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
 * //     type: "ReturnIntent" || "CodeHook", // required
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
 * //   createVersion: true || false,
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
 * @param PutIntentCommandInput - {@link PutIntentCommandInput}
 * @returns {@link PutIntentCommandOutput}
 * @see {@link PutIntentCommandInput} for command's `input` shape.
 * @see {@link PutIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Try your request again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal Amazon Lex error occurred. Try your request again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeded a limit. Try your request again.
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 *
 * Base exception class for all service exceptions from LexModelBuildingService service.
 *
 * @example To create an intent
 * ```javascript
 * // This example shows how to create an intent for ordering pizzas.
 * const input = {
 *   conclusionStatement: {
 *     messages: [
 *       {
 *         content: "All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
 *         contentType: "PlainText"
 *       },
 *       {
 *         content: "OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
 *         contentType: "PlainText"
 *       }
 *     ],
 *     responseCard: "foo"
 *   },
 *   confirmationPrompt: {
 *     maxAttempts: 1,
 *     messages: [
 *       {
 *         content: "Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
 *         contentType: "PlainText"
 *       }
 *     ]
 *   },
 *   description: "Order a pizza from a local pizzeria.",
 *   fulfillmentActivity: {
 *     type: "ReturnIntent"
 *   },
 *   name: "DocOrderPizza",
 *   rejectionStatement: {
 *     messages: [
 *       {
 *         content: "Ok, I'll cancel your order.",
 *         contentType: "PlainText"
 *       },
 *       {
 *         content: "I cancelled your order.",
 *         contentType: "PlainText"
 *       }
 *     ]
 *   },
 *   sampleUtterances: [
 *     "Order me a pizza.",
 *     "Order me a {Type} pizza.",
 *     "I want a {Crust} crust {Type} pizza",
 *     "I want a {Crust} crust {Type} pizza with {Sauce} sauce."
 *   ],
 *   slots: [
 *     {
 *       description: "The type of pizza to order.",
 *       name: "Type",
 *       priority: 1,
 *       sampleUtterances: [
 *         "Get me a {Type} pizza.",
 *         "A {Type} pizza please.",
 *         "I'd like a {Type} pizza."
 *       ],
 *       slotConstraint: "Required",
 *       slotType: "DocPizzaType",
 *       slotTypeVersion: "$LATEST",
 *       valueElicitationPrompt: {
 *         maxAttempts: 1,
 *         messages: [
 *           {
 *             content: "What type of pizza would you like?",
 *             contentType: "PlainText"
 *           },
 *           {
 *             content: "Vegie or cheese pizza?",
 *             contentType: "PlainText"
 *           },
 *           {
 *             content: "I can get you a vegie or a cheese pizza.",
 *             contentType: "PlainText"
 *           }
 *         ]
 *       }
 *     },
 *     {
 *       description: "The type of pizza crust to order.",
 *       name: "Crust",
 *       priority: 2,
 *       sampleUtterances: [
 *         "Make it a {Crust} crust.",
 *         "I'd like a {Crust} crust."
 *       ],
 *       slotConstraint: "Required",
 *       slotType: "DocPizzaCrustType",
 *       slotTypeVersion: "$LATEST",
 *       valueElicitationPrompt: {
 *         maxAttempts: 1,
 *         messages: [
 *           {
 *             content: "What type of crust would you like?",
 *             contentType: "PlainText"
 *           },
 *           {
 *             content: "Thick or thin crust?",
 *             contentType: "PlainText"
 *           }
 *         ]
 *       }
 *     },
 *     {
 *       description: "The type of sauce to use on the pizza.",
 *       name: "Sauce",
 *       priority: 3,
 *       sampleUtterances: [
 *         "Make it {Sauce} sauce.",
 *         "I'd like {Sauce} sauce."
 *       ],
 *       slotConstraint: "Required",
 *       slotType: "DocPizzaSauceType",
 *       slotTypeVersion: "$LATEST",
 *       valueElicitationPrompt: {
 *         maxAttempts: 1,
 *         messages: [
 *           {
 *             content: "White or red sauce?",
 *             contentType: "PlainText"
 *           },
 *           {
 *             content: "Garlic or tomato sauce?",
 *             contentType: "PlainText"
 *           }
 *         ]
 *       }
 *     }
 *   ]
 * };
 * const command = new PutIntentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   checksum: "ca9bc13d-afc8-4706-bbaf-091f7a5935d6",
 *   conclusionStatement: {
 *     messages: [
 *       {
 *         content: "All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
 *         contentType: "PlainText"
 *       },
 *       {
 *         content: "OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
 *         contentType: "PlainText"
 *       }
 *     ],
 *     responseCard: "foo"
 *   },
 *   confirmationPrompt: {
 *     maxAttempts: 1,
 *     messages: [
 *       {
 *         content: "Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
 *         contentType: "PlainText"
 *       }
 *     ]
 *   },
 *   createdDate: 1.494359783453E9,
 *   description: "Order a pizza from a local pizzeria.",
 *   fulfillmentActivity: {
 *     type: "ReturnIntent"
 *   },
 *   lastUpdatedDate: 1.494359783453E9,
 *   name: "DocOrderPizza",
 *   rejectionStatement: {
 *     messages: [
 *       {
 *         content: "Ok, I'll cancel your order.",
 *         contentType: "PlainText"
 *       },
 *       {
 *         content: "I cancelled your order.",
 *         contentType: "PlainText"
 *       }
 *     ]
 *   },
 *   sampleUtterances: [
 *     "Order me a pizza.",
 *     "Order me a {Type} pizza.",
 *     "I want a {Crust} crust {Type} pizza",
 *     "I want a {Crust} crust {Type} pizza with {Sauce} sauce."
 *   ],
 *   slots: [
 *     {
 *       description: "The type of sauce to use on the pizza.",
 *       name: "Sauce",
 *       priority: 3,
 *       sampleUtterances: [
 *         "Make it {Sauce} sauce.",
 *         "I'd like {Sauce} sauce."
 *       ],
 *       slotConstraint: "Required",
 *       slotType: "DocPizzaSauceType",
 *       slotTypeVersion: "$LATEST",
 *       valueElicitationPrompt: {
 *         maxAttempts: 1,
 *         messages: [
 *           {
 *             content: "White or red sauce?",
 *             contentType: "PlainText"
 *           },
 *           {
 *             content: "Garlic or tomato sauce?",
 *             contentType: "PlainText"
 *           }
 *         ]
 *       }
 *     },
 *     {
 *       description: "The type of pizza to order.",
 *       name: "Type",
 *       priority: 1,
 *       sampleUtterances: [
 *         "Get me a {Type} pizza.",
 *         "A {Type} pizza please.",
 *         "I'd like a {Type} pizza."
 *       ],
 *       slotConstraint: "Required",
 *       slotType: "DocPizzaType",
 *       slotTypeVersion: "$LATEST",
 *       valueElicitationPrompt: {
 *         maxAttempts: 1,
 *         messages: [
 *           {
 *             content: "What type of pizza would you like?",
 *             contentType: "PlainText"
 *           },
 *           {
 *             content: "Vegie or cheese pizza?",
 *             contentType: "PlainText"
 *           },
 *           {
 *             content: "I can get you a vegie or a cheese pizza.",
 *             contentType: "PlainText"
 *           }
 *         ]
 *       }
 *     },
 *     {
 *       description: "The type of pizza crust to order.",
 *       name: "Crust",
 *       priority: 2,
 *       sampleUtterances: [
 *         "Make it a {Crust} crust.",
 *         "I'd like a {Crust} crust."
 *       ],
 *       slotConstraint: "Required",
 *       slotType: "DocPizzaCrustType",
 *       slotTypeVersion: "$LATEST",
 *       valueElicitationPrompt: {
 *         maxAttempts: 1,
 *         messages: [
 *           {
 *             content: "What type of crust would you like?",
 *             contentType: "PlainText"
 *           },
 *           {
 *             content: "Thick or thin crust?",
 *             contentType: "PlainText"
 *           }
 *         ]
 *       }
 *     }
 *   ],
 *   version: "$LATEST"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutIntentCommand extends command<PutIntentCommandInput, PutIntentCommandOutput>(
  _ep0,
  _mw0,
  "PutIntent",
  PutIntent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutIntentRequest;
      output: PutIntentResponse;
    };
    sdk: {
      input: PutIntentCommandInput;
      output: PutIntentCommandOutput;
    };
  };
}
