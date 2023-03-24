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
import { CreateIntentRequest, CreateIntentResponse } from "../models/models_1";
import {
  deserializeAws_restJson1CreateIntentCommand,
  serializeAws_restJson1CreateIntentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateIntentCommand}.
 */
export interface CreateIntentCommandInput extends CreateIntentRequest {}
/**
 * @public
 *
 * The output of {@link CreateIntentCommand}.
 */
export interface CreateIntentCommandOutput extends CreateIntentResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = {
 *   intentName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   parentIntentSignature: "STRING_VALUE",
 *   sampleUtterances: [
 *     {
 *       utterance: "STRING_VALUE", // required
 *     },
 *   ],
 *   dialogCodeHook: {
 *     enabled: true || false, // required
 *   },
 *   fulfillmentCodeHook: {
 *     enabled: true || false, // required
 *     postFulfillmentStatusSpecification: {
 *       successResponse: {
 *         messageGroups: [ // required
 *           {
 *             message: {
 *               plainTextMessage: {
 *                 value: "STRING_VALUE", // required
 *               },
 *               customPayload: {
 *                 value: "STRING_VALUE", // required
 *               },
 *               ssmlMessage: {
 *                 value: "STRING_VALUE", // required
 *               },
 *               imageResponseCard: {
 *                 title: "STRING_VALUE", // required
 *                 subtitle: "STRING_VALUE",
 *                 imageUrl: "STRING_VALUE",
 *                 buttons: [
 *                   {
 *                     text: "STRING_VALUE", // required
 *                     value: "STRING_VALUE", // required
 *                   },
 *                 ],
 *               },
 *             },
 *             variations: [
 *               {
 *                 plainTextMessage: {
 *                   value: "STRING_VALUE", // required
 *                 },
 *                 customPayload: {
 *                   value: "STRING_VALUE", // required
 *                 },
 *                 ssmlMessage: {
 *                   value: "STRING_VALUE", // required
 *                 },
 *                 imageResponseCard: {
 *                   title: "STRING_VALUE", // required
 *                   subtitle: "STRING_VALUE",
 *                   imageUrl: "STRING_VALUE",
 *                   buttons: [
 *                     {
 *                       text: "STRING_VALUE", // required
 *                       value: "STRING_VALUE", // required
 *                     },
 *                   ],
 *                 },
 *               },
 *             ],
 *           },
 *         ],
 *         allowInterrupt: true || false,
 *       },
 *       failureResponse: {
 *         messageGroups: [ // required
 *           {
 *             message: {
 *               plainTextMessage: {
 *                 value: "STRING_VALUE", // required
 *               },
 *               customPayload: {
 *                 value: "STRING_VALUE", // required
 *               },
 *               ssmlMessage: {
 *                 value: "STRING_VALUE", // required
 *               },
 *               imageResponseCard: {
 *                 title: "STRING_VALUE", // required
 *                 subtitle: "STRING_VALUE",
 *                 imageUrl: "STRING_VALUE",
 *                 buttons: [
 *                   {
 *                     text: "STRING_VALUE", // required
 *                     value: "STRING_VALUE", // required
 *                   },
 *                 ],
 *               },
 *             },
 *             variations: [
 *               {
 *                 plainTextMessage: {
 *                   value: "STRING_VALUE", // required
 *                 },
 *                 customPayload: {
 *                   value: "STRING_VALUE", // required
 *                 },
 *                 ssmlMessage: {
 *                   value: "STRING_VALUE", // required
 *                 },
 *                 imageResponseCard: {
 *                   title: "STRING_VALUE", // required
 *                   subtitle: "STRING_VALUE",
 *                   imageUrl: "STRING_VALUE",
 *                   buttons: [
 *                     {
 *                       text: "STRING_VALUE", // required
 *                       value: "STRING_VALUE", // required
 *                     },
 *                   ],
 *                 },
 *               },
 *             ],
 *           },
 *         ],
 *         allowInterrupt: true || false,
 *       },
 *       timeoutResponse: {
 *         messageGroups: [ // required
 *           {
 *             message: {
 *               plainTextMessage: {
 *                 value: "STRING_VALUE", // required
 *               },
 *               customPayload: {
 *                 value: "STRING_VALUE", // required
 *               },
 *               ssmlMessage: {
 *                 value: "STRING_VALUE", // required
 *               },
 *               imageResponseCard: {
 *                 title: "STRING_VALUE", // required
 *                 subtitle: "STRING_VALUE",
 *                 imageUrl: "STRING_VALUE",
 *                 buttons: [
 *                   {
 *                     text: "STRING_VALUE", // required
 *                     value: "STRING_VALUE", // required
 *                   },
 *                 ],
 *               },
 *             },
 *             variations: [
 *               {
 *                 plainTextMessage: {
 *                   value: "STRING_VALUE", // required
 *                 },
 *                 customPayload: {
 *                   value: "STRING_VALUE", // required
 *                 },
 *                 ssmlMessage: {
 *                   value: "STRING_VALUE", // required
 *                 },
 *                 imageResponseCard: {
 *                   title: "STRING_VALUE", // required
 *                   subtitle: "STRING_VALUE",
 *                   imageUrl: "STRING_VALUE",
 *                   buttons: [
 *                     {
 *                       text: "STRING_VALUE", // required
 *                       value: "STRING_VALUE", // required
 *                     },
 *                   ],
 *                 },
 *               },
 *             ],
 *           },
 *         ],
 *         allowInterrupt: true || false,
 *       },
 *       successNextStep: {
 *         dialogAction: {
 *           type: "ElicitIntent" || "StartIntent" || "ElicitSlot" || "EvaluateConditional" || "InvokeDialogCodeHook" || "ConfirmIntent" || "FulfillIntent" || "CloseIntent" || "EndConversation", // required
 *           slotToElicit: "STRING_VALUE",
 *           suppressNextMessage: true || false,
 *         },
 *         intent: {
 *           name: "STRING_VALUE",
 *           slots: {
 *             "<keys>": {
 *               shape: "Scalar" || "List",
 *               value: {
 *                 interpretedValue: "STRING_VALUE",
 *               },
 *               values: [
 *                 {
 *                   shape: "Scalar" || "List",
 *                   value: {
 *                     interpretedValue: "STRING_VALUE",
 *                   },
 *                   values: [
 *                     {
 *                       shape: "<SlotValueOverride>",
 *                       value: "<SlotValueOverride>",
 *                       values: "<SlotValueOverride>",
 *                     },
 *                   ],
 *                 },
 *               ],
 *             },
 *           },
 *         },
 *         sessionAttributes: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       successConditional: {
 *         active: true || false, // required
 *         conditionalBranches: [ // required
 *           {
 *             name: "STRING_VALUE", // required
 *             condition: {
 *               expressionString: "STRING_VALUE", // required
 *             },
 *             nextStep: {
 *               dialogAction: {
 *                 type: "ElicitIntent" || "StartIntent" || "ElicitSlot" || "EvaluateConditional" || "InvokeDialogCodeHook" || "ConfirmIntent" || "FulfillIntent" || "CloseIntent" || "EndConversation", // required
 *                 slotToElicit: "STRING_VALUE",
 *                 suppressNextMessage: true || false,
 *               },
 *               intent: {
 *                 name: "STRING_VALUE",
 *                 slots: {
 *                   "<keys>": {
 *                     shape: "<SlotValueOverride>",
 *                     value: "<SlotValueOverride>",
 *                     values: "<SlotValueOverride>",
 *                   },
 *                 },
 *               },
 *               sessionAttributes: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *             response: {
 *               messageGroups: [ // required
 *                 {
 *                   message: {
 *                     plainTextMessage: "<Message>",
 *                     customPayload: "<Message>",
 *                     ssmlMessage: "<Message>",
 *                     imageResponseCard: "<Message>",
 *                   },
 *                   variations: [
 *                     {
 *                       plainTextMessage: "<Message>",
 *                       customPayload: "<Message>",
 *                       ssmlMessage: "<Message>",
 *                       imageResponseCard: "<Message>",
 *                     },
 *                   ],
 *                 },
 *               ],
 *               allowInterrupt: true || false,
 *             },
 *           },
 *         ],
 *         defaultBranch: {
 *           nextStep: {
 *             dialogAction: "<DialogState>",
 *             intent: "<DialogState>",
 *             sessionAttributes: "<DialogState>",
 *           },
 *           response: {
 *             messageGroups: "<ResponseSpecification>",
 *             allowInterrupt: "<ResponseSpecification>",
 *           },
 *         },
 *       },
 *       failureNextStep: {
 *         dialogAction: "<DialogState>",
 *         intent: "<DialogState>",
 *         sessionAttributes: "<DialogState>",
 *       },
 *       failureConditional: {
 *         active: true || false, // required
 *         conditionalBranches: [ // required
 *           {
 *             name: "STRING_VALUE", // required
 *             condition: {
 *               expressionString: "STRING_VALUE", // required
 *             },
 *             nextStep: {
 *               dialogAction: "<DialogState>",
 *               intent: "<DialogState>",
 *               sessionAttributes: "<DialogState>",
 *             },
 *             response: {
 *               messageGroups: "<ResponseSpecification>",
 *               allowInterrupt: "<ResponseSpecification>",
 *             },
 *           },
 *         ],
 *         defaultBranch: {
 *           nextStep: {
 *             dialogAction: "<DialogState>",
 *             intent: "<DialogState>",
 *             sessionAttributes: "<DialogState>",
 *           },
 *           response: {
 *             messageGroups: "<ResponseSpecification>",
 *             allowInterrupt: "<ResponseSpecification>",
 *           },
 *         },
 *       },
 *       timeoutNextStep: {
 *         dialogAction: "<DialogState>",
 *         intent: "<DialogState>",
 *         sessionAttributes: "<DialogState>",
 *       },
 *       timeoutConditional: {
 *         active: true || false, // required
 *         conditionalBranches: [ // required
 *           {
 *             name: "STRING_VALUE", // required
 *             condition: {
 *               expressionString: "STRING_VALUE", // required
 *             },
 *             nextStep: {
 *               dialogAction: "<DialogState>",
 *               intent: "<DialogState>",
 *               sessionAttributes: "<DialogState>",
 *             },
 *             response: {
 *               messageGroups: "<ResponseSpecification>",
 *               allowInterrupt: "<ResponseSpecification>",
 *             },
 *           },
 *         ],
 *         defaultBranch: {
 *           nextStep: {
 *             dialogAction: "<DialogState>",
 *             intent: "<DialogState>",
 *             sessionAttributes: "<DialogState>",
 *           },
 *           response: {
 *             messageGroups: "<ResponseSpecification>",
 *             allowInterrupt: "<ResponseSpecification>",
 *           },
 *         },
 *       },
 *     },
 *     fulfillmentUpdatesSpecification: {
 *       active: true || false, // required
 *       startResponse: {
 *         delayInSeconds: Number("int"), // required
 *         messageGroups: [ // required
 *           {
 *             message: {
 *               plainTextMessage: "<Message>",
 *               customPayload: "<Message>",
 *               ssmlMessage: "<Message>",
 *               imageResponseCard: "<Message>",
 *             },
 *             variations: [
 *               {
 *                 plainTextMessage: "<Message>",
 *                 customPayload: "<Message>",
 *                 ssmlMessage: "<Message>",
 *                 imageResponseCard: "<Message>",
 *               },
 *             ],
 *           },
 *         ],
 *         allowInterrupt: true || false,
 *       },
 *       updateResponse: {
 *         frequencyInSeconds: Number("int"), // required
 *         messageGroups: [ // required
 *           {
 *             message: {
 *               plainTextMessage: "<Message>",
 *               customPayload: "<Message>",
 *               ssmlMessage: "<Message>",
 *               imageResponseCard: "<Message>",
 *             },
 *             variations: [
 *               {
 *                 plainTextMessage: "<Message>",
 *                 customPayload: "<Message>",
 *                 ssmlMessage: "<Message>",
 *                 imageResponseCard: "<Message>",
 *               },
 *             ],
 *           },
 *         ],
 *         allowInterrupt: true || false,
 *       },
 *       timeoutInSeconds: Number("int"),
 *     },
 *     active: true || false,
 *   },
 *   intentConfirmationSetting: {
 *     promptSpecification: {
 *       messageGroups: [ // required
 *         "<MessageGroupsList>",
 *       ],
 *       maxRetries: Number("int"), // required
 *       allowInterrupt: true || false,
 *       messageSelectionStrategy: "Random" || "Ordered",
 *       promptAttemptsSpecification: {
 *         "<keys>": {
 *           allowInterrupt: true || false,
 *           allowedInputTypes: {
 *             allowAudioInput: true || false, // required
 *             allowDTMFInput: true || false, // required
 *           },
 *           audioAndDTMFInputSpecification: {
 *             startTimeoutMs: Number("int"), // required
 *             audioSpecification: {
 *               maxLengthMs: Number("int"), // required
 *               endTimeoutMs: Number("int"), // required
 *             },
 *             dtmfSpecification: {
 *               maxLength: Number("int"), // required
 *               endTimeoutMs: Number("int"), // required
 *               deletionCharacter: "STRING_VALUE", // required
 *               endCharacter: "STRING_VALUE", // required
 *             },
 *           },
 *           textInputSpecification: {
 *             startTimeoutMs: Number("int"), // required
 *           },
 *         },
 *       },
 *     },
 *     declinationResponse: {
 *       messageGroups: "<ResponseSpecification>",
 *       allowInterrupt: "<ResponseSpecification>",
 *     },
 *     active: true || false,
 *     confirmationResponse: {
 *       messageGroups: "<ResponseSpecification>",
 *       allowInterrupt: "<ResponseSpecification>",
 *     },
 *     confirmationNextStep: {
 *       dialogAction: "<DialogState>",
 *       intent: "<DialogState>",
 *       sessionAttributes: "<DialogState>",
 *     },
 *     confirmationConditional: {
 *       active: true || false, // required
 *       conditionalBranches: [ // required
 *         {
 *           name: "STRING_VALUE", // required
 *           condition: {
 *             expressionString: "STRING_VALUE", // required
 *           },
 *           nextStep: {
 *             dialogAction: "<DialogState>",
 *             intent: "<DialogState>",
 *             sessionAttributes: "<DialogState>",
 *           },
 *           response: {
 *             messageGroups: "<ResponseSpecification>",
 *             allowInterrupt: "<ResponseSpecification>",
 *           },
 *         },
 *       ],
 *       defaultBranch: {
 *         nextStep: {
 *           dialogAction: "<DialogState>",
 *           intent: "<DialogState>",
 *           sessionAttributes: "<DialogState>",
 *         },
 *         response: {
 *           messageGroups: "<ResponseSpecification>",
 *           allowInterrupt: "<ResponseSpecification>",
 *         },
 *       },
 *     },
 *     declinationNextStep: {
 *       dialogAction: "<DialogState>",
 *       intent: "<DialogState>",
 *       sessionAttributes: "<DialogState>",
 *     },
 *     declinationConditional: {
 *       active: true || false, // required
 *       conditionalBranches: [ // required
 *         {
 *           name: "STRING_VALUE", // required
 *           condition: {
 *             expressionString: "STRING_VALUE", // required
 *           },
 *           nextStep: {
 *             dialogAction: "<DialogState>",
 *             intent: "<DialogState>",
 *             sessionAttributes: "<DialogState>",
 *           },
 *           response: {
 *             messageGroups: "<ResponseSpecification>",
 *             allowInterrupt: "<ResponseSpecification>",
 *           },
 *         },
 *       ],
 *       defaultBranch: {
 *         nextStep: {
 *           dialogAction: "<DialogState>",
 *           intent: "<DialogState>",
 *           sessionAttributes: "<DialogState>",
 *         },
 *         response: {
 *           messageGroups: "<ResponseSpecification>",
 *           allowInterrupt: "<ResponseSpecification>",
 *         },
 *       },
 *     },
 *     failureResponse: {
 *       messageGroups: "<ResponseSpecification>",
 *       allowInterrupt: "<ResponseSpecification>",
 *     },
 *     failureNextStep: {
 *       dialogAction: "<DialogState>",
 *       intent: "<DialogState>",
 *       sessionAttributes: "<DialogState>",
 *     },
 *     failureConditional: {
 *       active: true || false, // required
 *       conditionalBranches: [ // required
 *         {
 *           name: "STRING_VALUE", // required
 *           condition: {
 *             expressionString: "STRING_VALUE", // required
 *           },
 *           nextStep: {
 *             dialogAction: "<DialogState>",
 *             intent: "<DialogState>",
 *             sessionAttributes: "<DialogState>",
 *           },
 *           response: {
 *             messageGroups: "<ResponseSpecification>",
 *             allowInterrupt: "<ResponseSpecification>",
 *           },
 *         },
 *       ],
 *       defaultBranch: {
 *         nextStep: {
 *           dialogAction: "<DialogState>",
 *           intent: "<DialogState>",
 *           sessionAttributes: "<DialogState>",
 *         },
 *         response: {
 *           messageGroups: "<ResponseSpecification>",
 *           allowInterrupt: "<ResponseSpecification>",
 *         },
 *       },
 *     },
 *     codeHook: {
 *       enableCodeHookInvocation: true || false, // required
 *       active: true || false, // required
 *       invocationLabel: "STRING_VALUE",
 *       postCodeHookSpecification: {
 *         successResponse: {
 *           messageGroups: "<ResponseSpecification>",
 *           allowInterrupt: "<ResponseSpecification>",
 *         },
 *         successNextStep: {
 *           dialogAction: "<DialogState>",
 *           intent: "<DialogState>",
 *           sessionAttributes: "<DialogState>",
 *         },
 *         successConditional: {
 *           active: "<ConditionalSpecification>",
 *           conditionalBranches: "<ConditionalSpecification>",
 *           defaultBranch: "<ConditionalSpecification>",
 *         },
 *         failureResponse: {
 *           messageGroups: "<ResponseSpecification>",
 *           allowInterrupt: "<ResponseSpecification>",
 *         },
 *         failureNextStep: {
 *           dialogAction: "<DialogState>",
 *           intent: "<DialogState>",
 *           sessionAttributes: "<DialogState>",
 *         },
 *         failureConditional: {
 *           active: "<ConditionalSpecification>",
 *           conditionalBranches: "<ConditionalSpecification>",
 *           defaultBranch: "<ConditionalSpecification>",
 *         },
 *         timeoutResponse: {
 *           messageGroups: "<ResponseSpecification>",
 *           allowInterrupt: "<ResponseSpecification>",
 *         },
 *         timeoutNextStep: {
 *           dialogAction: "<DialogState>",
 *           intent: "<DialogState>",
 *           sessionAttributes: "<DialogState>",
 *         },
 *         timeoutConditional: {
 *           active: "<ConditionalSpecification>",
 *           conditionalBranches: "<ConditionalSpecification>",
 *           defaultBranch: "<ConditionalSpecification>",
 *         },
 *       },
 *     },
 *     elicitationCodeHook: {
 *       enableCodeHookInvocation: true || false, // required
 *       invocationLabel: "STRING_VALUE",
 *     },
 *   },
 *   intentClosingSetting: {
 *     closingResponse: {
 *       messageGroups: "<ResponseSpecification>",
 *       allowInterrupt: "<ResponseSpecification>",
 *     },
 *     active: true || false,
 *     nextStep: {
 *       dialogAction: "<DialogState>",
 *       intent: "<DialogState>",
 *       sessionAttributes: "<DialogState>",
 *     },
 *     conditional: {
 *       active: "<ConditionalSpecification>",
 *       conditionalBranches: "<ConditionalSpecification>",
 *       defaultBranch: "<ConditionalSpecification>",
 *     },
 *   },
 *   inputContexts: [
 *     {
 *       name: "STRING_VALUE", // required
 *     },
 *   ],
 *   outputContexts: [
 *     {
 *       name: "STRING_VALUE", // required
 *       timeToLiveInSeconds: Number("int"), // required
 *       turnsToLive: Number("int"), // required
 *     },
 *   ],
 *   kendraConfiguration: {
 *     kendraIndex: "STRING_VALUE", // required
 *     queryFilterStringEnabled: true || false,
 *     queryFilterString: "STRING_VALUE",
 *   },
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   initialResponseSetting: {
 *     initialResponse: {
 *       messageGroups: "<ResponseSpecification>",
 *       allowInterrupt: "<ResponseSpecification>",
 *     },
 *     nextStep: {
 *       dialogAction: "<DialogState>",
 *       intent: "<DialogState>",
 *       sessionAttributes: "<DialogState>",
 *     },
 *     conditional: {
 *       active: "<ConditionalSpecification>",
 *       conditionalBranches: "<ConditionalSpecification>",
 *       defaultBranch: "<ConditionalSpecification>",
 *     },
 *     codeHook: {
 *       enableCodeHookInvocation: true || false, // required
 *       active: true || false, // required
 *       invocationLabel: "STRING_VALUE",
 *       postCodeHookSpecification: {
 *         successResponse: {
 *           messageGroups: "<ResponseSpecification>",
 *           allowInterrupt: "<ResponseSpecification>",
 *         },
 *         successNextStep: {
 *           dialogAction: "<DialogState>",
 *           intent: "<DialogState>",
 *           sessionAttributes: "<DialogState>",
 *         },
 *         successConditional: {
 *           active: "<ConditionalSpecification>",
 *           conditionalBranches: "<ConditionalSpecification>",
 *           defaultBranch: "<ConditionalSpecification>",
 *         },
 *         failureResponse: {
 *           messageGroups: "<ResponseSpecification>",
 *           allowInterrupt: "<ResponseSpecification>",
 *         },
 *         failureNextStep: {
 *           dialogAction: "<DialogState>",
 *           intent: "<DialogState>",
 *           sessionAttributes: "<DialogState>",
 *         },
 *         failureConditional: {
 *           active: "<ConditionalSpecification>",
 *           conditionalBranches: "<ConditionalSpecification>",
 *           defaultBranch: "<ConditionalSpecification>",
 *         },
 *         timeoutResponse: {
 *           messageGroups: "<ResponseSpecification>",
 *           allowInterrupt: "<ResponseSpecification>",
 *         },
 *         timeoutNextStep: {
 *           dialogAction: "<DialogState>",
 *           intent: "<DialogState>",
 *           sessionAttributes: "<DialogState>",
 *         },
 *         timeoutConditional: {
 *           active: "<ConditionalSpecification>",
 *           conditionalBranches: "<ConditionalSpecification>",
 *           defaultBranch: "<ConditionalSpecification>",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new CreateIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateIntentCommandInput - {@link CreateIntentCommandInput}
 * @returns {@link CreateIntentCommandOutput}
 * @see {@link CreateIntentCommandInput} for command's `input` shape.
 * @see {@link CreateIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
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

  /**
   * @public
   */
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
  private serialize(input: CreateIntentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateIntentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateIntentCommandOutput> {
    return deserializeAws_restJson1CreateIntentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
