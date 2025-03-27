// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { PutIntentRequest, PutIntentResponse } from "../models/models_0";
import { de_PutIntentCommand, se_PutIntentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict processing the request. Try your request
 *       again. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p> The checksum of the resource that you are trying to change does
 *       not match the checksum in the request. Check the resource's checksum and
 *       try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
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
export class PutIntentCommand extends $Command
  .classBuilder<
    PutIntentCommandInput,
    PutIntentCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseModelBuildingService", "PutIntent", {})
  .n("LexModelBuildingServiceClient", "PutIntentCommand")
  .f(void 0, void 0)
  .ser(se_PutIntentCommand)
  .de(de_PutIntentCommand)
  .build() {
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
