// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { UpdateIntentRequest, UpdateIntentResponse } from "../models/models_1";
import { UpdateIntent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIntentCommand}.
 */
export interface UpdateIntentCommandInput extends UpdateIntentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIntentCommand}.
 */
export interface UpdateIntentCommandOutput extends UpdateIntentResponse, __MetadataBearer {}

/**
 * <p>Updates the settings for an intent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateIntentCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateIntentCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // UpdateIntentRequest
 *   intentId: "STRING_VALUE", // required
 *   intentName: "STRING_VALUE", // required
 *   intentDisplayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   parentIntentSignature: "STRING_VALUE",
 *   sampleUtterances: [ // SampleUtterancesList
 *     { // SampleUtterance
 *       utterance: "STRING_VALUE", // required
 *     },
 *   ],
 *   dialogCodeHook: { // DialogCodeHookSettings
 *     enabled: true || false, // required
 *   },
 *   fulfillmentCodeHook: { // FulfillmentCodeHookSettings
 *     enabled: true || false, // required
 *     postFulfillmentStatusSpecification: { // PostFulfillmentStatusSpecification
 *       successResponse: { // ResponseSpecification
 *         messageGroups: [ // MessageGroupsList // required
 *           { // MessageGroup
 *             message: { // Message
 *               plainTextMessage: { // PlainTextMessage
 *                 value: "STRING_VALUE", // required
 *               },
 *               customPayload: { // CustomPayload
 *                 value: "STRING_VALUE", // required
 *               },
 *               ssmlMessage: { // SSMLMessage
 *                 value: "STRING_VALUE", // required
 *               },
 *               imageResponseCard: { // ImageResponseCard
 *                 title: "STRING_VALUE", // required
 *                 subtitle: "STRING_VALUE",
 *                 imageUrl: "STRING_VALUE",
 *                 buttons: [ // ButtonsList
 *                   { // Button
 *                     text: "STRING_VALUE", // required
 *                     value: "STRING_VALUE", // required
 *                   },
 *                 ],
 *               },
 *             },
 *             variations: [ // MessageVariationsList
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
 *               "<Message>",
 *             ],
 *           },
 *         ],
 *         allowInterrupt: true || false,
 *       },
 *       successNextStep: { // DialogState
 *         dialogAction: { // DialogAction
 *           type: "ElicitIntent" || "StartIntent" || "ElicitSlot" || "EvaluateConditional" || "InvokeDialogCodeHook" || "ConfirmIntent" || "FulfillIntent" || "CloseIntent" || "EndConversation", // required
 *           slotToElicit: "STRING_VALUE",
 *           suppressNextMessage: true || false,
 *         },
 *         intent: { // IntentOverride
 *           name: "STRING_VALUE",
 *           slots: { // SlotValueOverrideMap
 *             "<keys>": { // SlotValueOverride
 *               shape: "Scalar" || "List",
 *               value: { // SlotValue
 *                 interpretedValue: "STRING_VALUE",
 *               },
 *               values: [ // SlotValues
 *                 {
 *                   shape: "Scalar" || "List",
 *                   value: {
 *                     interpretedValue: "STRING_VALUE",
 *                   },
 *                   values: [
 *                     "<SlotValueOverride>",
 *                   ],
 *                 },
 *               ],
 *             },
 *           },
 *         },
 *         sessionAttributes: { // StringMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       successConditional: { // ConditionalSpecification
 *         active: true || false, // required
 *         conditionalBranches: [ // ConditionalBranches // required
 *           { // ConditionalBranch
 *             name: "STRING_VALUE", // required
 *             condition: { // Condition
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
 *                   "<keys>": "<SlotValueOverride>",
 *                 },
 *               },
 *               sessionAttributes: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *             response: {
 *               messageGroups: [ // required
 *                 {
 *                   message: "<Message>", // required
 *                   variations: [
 *                     "<Message>",
 *                   ],
 *                 },
 *               ],
 *               allowInterrupt: true || false,
 *             },
 *           },
 *         ],
 *         defaultBranch: { // DefaultConditionalBranch
 *           nextStep: "<DialogState>",
 *           response: "<ResponseSpecification>",
 *         },
 *       },
 *       failureNextStep: "<DialogState>",
 *       failureConditional: {
 *         active: true || false, // required
 *         conditionalBranches: [ // required
 *           {
 *             name: "STRING_VALUE", // required
 *             condition: {
 *               expressionString: "STRING_VALUE", // required
 *             },
 *             nextStep: "<DialogState>", // required
 *             response: "<ResponseSpecification>",
 *           },
 *         ],
 *         defaultBranch: {
 *           nextStep: "<DialogState>",
 *           response: "<ResponseSpecification>",
 *         },
 *       },
 *       timeoutNextStep: "<DialogState>",
 *       timeoutConditional: {
 *         active: true || false, // required
 *         conditionalBranches: [ // required
 *           {
 *             name: "STRING_VALUE", // required
 *             condition: {
 *               expressionString: "STRING_VALUE", // required
 *             },
 *             nextStep: "<DialogState>", // required
 *             response: "<ResponseSpecification>",
 *           },
 *         ],
 *         defaultBranch: {
 *           nextStep: "<DialogState>",
 *           response: "<ResponseSpecification>",
 *         },
 *       },
 *     },
 *     fulfillmentUpdatesSpecification: { // FulfillmentUpdatesSpecification
 *       active: true || false, // required
 *       startResponse: { // FulfillmentStartResponseSpecification
 *         delayInSeconds: Number("int"), // required
 *         messageGroups: [ // required
 *           {
 *             message: "<Message>", // required
 *             variations: [
 *               "<Message>",
 *             ],
 *           },
 *         ],
 *         allowInterrupt: true || false,
 *       },
 *       updateResponse: { // FulfillmentUpdateResponseSpecification
 *         frequencyInSeconds: Number("int"), // required
 *         messageGroups: "<MessageGroupsList>", // required
 *         allowInterrupt: true || false,
 *       },
 *       timeoutInSeconds: Number("int"),
 *     },
 *     active: true || false,
 *   },
 *   slotPriorities: [ // SlotPrioritiesList
 *     { // SlotPriority
 *       priority: Number("int"), // required
 *       slotId: "STRING_VALUE", // required
 *     },
 *   ],
 *   intentConfirmationSetting: { // IntentConfirmationSetting
 *     promptSpecification: { // PromptSpecification
 *       messageGroups: "<MessageGroupsList>", // required
 *       maxRetries: Number("int"), // required
 *       allowInterrupt: true || false,
 *       messageSelectionStrategy: "Random" || "Ordered",
 *       promptAttemptsSpecification: { // PromptAttemptsSpecificationMap
 *         "<keys>": { // PromptAttemptSpecification
 *           allowInterrupt: true || false,
 *           allowedInputTypes: { // AllowedInputTypes
 *             allowAudioInput: true || false, // required
 *             allowDTMFInput: true || false, // required
 *           },
 *           audioAndDTMFInputSpecification: { // AudioAndDTMFInputSpecification
 *             startTimeoutMs: Number("int"), // required
 *             audioSpecification: { // AudioSpecification
 *               maxLengthMs: Number("int"), // required
 *               endTimeoutMs: Number("int"), // required
 *             },
 *             dtmfSpecification: { // DTMFSpecification
 *               maxLength: Number("int"), // required
 *               endTimeoutMs: Number("int"), // required
 *               deletionCharacter: "STRING_VALUE", // required
 *               endCharacter: "STRING_VALUE", // required
 *             },
 *           },
 *           textInputSpecification: { // TextInputSpecification
 *             startTimeoutMs: Number("int"), // required
 *           },
 *         },
 *       },
 *     },
 *     declinationResponse: "<ResponseSpecification>",
 *     active: true || false,
 *     confirmationResponse: "<ResponseSpecification>",
 *     confirmationNextStep: "<DialogState>",
 *     confirmationConditional: {
 *       active: true || false, // required
 *       conditionalBranches: [ // required
 *         {
 *           name: "STRING_VALUE", // required
 *           condition: {
 *             expressionString: "STRING_VALUE", // required
 *           },
 *           nextStep: "<DialogState>", // required
 *           response: "<ResponseSpecification>",
 *         },
 *       ],
 *       defaultBranch: {
 *         nextStep: "<DialogState>",
 *         response: "<ResponseSpecification>",
 *       },
 *     },
 *     declinationNextStep: "<DialogState>",
 *     declinationConditional: {
 *       active: true || false, // required
 *       conditionalBranches: [ // required
 *         {
 *           name: "STRING_VALUE", // required
 *           condition: {
 *             expressionString: "STRING_VALUE", // required
 *           },
 *           nextStep: "<DialogState>", // required
 *           response: "<ResponseSpecification>",
 *         },
 *       ],
 *       defaultBranch: {
 *         nextStep: "<DialogState>",
 *         response: "<ResponseSpecification>",
 *       },
 *     },
 *     failureResponse: "<ResponseSpecification>",
 *     failureNextStep: "<DialogState>",
 *     failureConditional: "<ConditionalSpecification>",
 *     codeHook: { // DialogCodeHookInvocationSetting
 *       enableCodeHookInvocation: true || false, // required
 *       active: true || false, // required
 *       invocationLabel: "STRING_VALUE",
 *       postCodeHookSpecification: { // PostDialogCodeHookInvocationSpecification
 *         successResponse: "<ResponseSpecification>",
 *         successNextStep: "<DialogState>",
 *         successConditional: "<ConditionalSpecification>",
 *         failureResponse: "<ResponseSpecification>",
 *         failureNextStep: "<DialogState>",
 *         failureConditional: "<ConditionalSpecification>",
 *         timeoutResponse: "<ResponseSpecification>",
 *         timeoutNextStep: "<DialogState>",
 *         timeoutConditional: "<ConditionalSpecification>",
 *       },
 *     },
 *     elicitationCodeHook: { // ElicitationCodeHookInvocationSetting
 *       enableCodeHookInvocation: true || false, // required
 *       invocationLabel: "STRING_VALUE",
 *     },
 *   },
 *   intentClosingSetting: { // IntentClosingSetting
 *     closingResponse: "<ResponseSpecification>",
 *     active: true || false,
 *     nextStep: "<DialogState>",
 *     conditional: "<ConditionalSpecification>",
 *   },
 *   inputContexts: [ // InputContextsList
 *     { // InputContext
 *       name: "STRING_VALUE", // required
 *     },
 *   ],
 *   outputContexts: [ // OutputContextsList
 *     { // OutputContext
 *       name: "STRING_VALUE", // required
 *       timeToLiveInSeconds: Number("int"), // required
 *       turnsToLive: Number("int"), // required
 *     },
 *   ],
 *   kendraConfiguration: { // KendraConfiguration
 *     kendraIndex: "STRING_VALUE", // required
 *     queryFilterStringEnabled: true || false,
 *     queryFilterString: "STRING_VALUE",
 *   },
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   initialResponseSetting: { // InitialResponseSetting
 *     initialResponse: "<ResponseSpecification>",
 *     nextStep: "<DialogState>",
 *     conditional: "<ConditionalSpecification>",
 *     codeHook: {
 *       enableCodeHookInvocation: true || false, // required
 *       active: true || false, // required
 *       invocationLabel: "STRING_VALUE",
 *       postCodeHookSpecification: {
 *         successResponse: "<ResponseSpecification>",
 *         successNextStep: "<DialogState>",
 *         successConditional: "<ConditionalSpecification>",
 *         failureResponse: "<ResponseSpecification>",
 *         failureNextStep: "<DialogState>",
 *         failureConditional: "<ConditionalSpecification>",
 *         timeoutResponse: "<ResponseSpecification>",
 *         timeoutNextStep: "<DialogState>",
 *         timeoutConditional: "<ConditionalSpecification>",
 *       },
 *     },
 *   },
 *   qnAIntentConfiguration: { // QnAIntentConfiguration
 *     dataSourceConfiguration: { // DataSourceConfiguration
 *       opensearchConfiguration: { // OpensearchConfiguration
 *         domainEndpoint: "STRING_VALUE", // required
 *         indexName: "STRING_VALUE", // required
 *         exactResponse: true || false,
 *         exactResponseFields: { // ExactResponseFields
 *           questionField: "STRING_VALUE", // required
 *           answerField: "STRING_VALUE", // required
 *         },
 *         includeFields: [ // OSIncludeFields
 *           "STRING_VALUE",
 *         ],
 *       },
 *       kendraConfiguration: { // QnAKendraConfiguration
 *         kendraIndex: "STRING_VALUE", // required
 *         queryFilterStringEnabled: true || false,
 *         queryFilterString: "STRING_VALUE",
 *         exactResponse: true || false,
 *       },
 *       bedrockKnowledgeStoreConfiguration: { // BedrockKnowledgeStoreConfiguration
 *         bedrockKnowledgeBaseArn: "STRING_VALUE", // required
 *         exactResponse: true || false,
 *         exactResponseFields: { // BedrockKnowledgeStoreExactResponseFields
 *           answerField: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     bedrockModelConfiguration: { // BedrockModelSpecification
 *       modelArn: "STRING_VALUE", // required
 *       guardrail: { // BedrockGuardrailConfiguration
 *         identifier: "STRING_VALUE", // required
 *         version: "STRING_VALUE", // required
 *       },
 *       traceStatus: "ENABLED" || "DISABLED",
 *       customPrompt: "STRING_VALUE",
 *     },
 *   },
 *   qInConnectIntentConfiguration: { // QInConnectIntentConfiguration
 *     qInConnectAssistantConfiguration: { // QInConnectAssistantConfiguration
 *       assistantArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateIntentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIntentResponse
 * //   intentId: "STRING_VALUE",
 * //   intentName: "STRING_VALUE",
 * //   intentDisplayName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   parentIntentSignature: "STRING_VALUE",
 * //   sampleUtterances: [ // SampleUtterancesList
 * //     { // SampleUtterance
 * //       utterance: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   dialogCodeHook: { // DialogCodeHookSettings
 * //     enabled: true || false, // required
 * //   },
 * //   fulfillmentCodeHook: { // FulfillmentCodeHookSettings
 * //     enabled: true || false, // required
 * //     postFulfillmentStatusSpecification: { // PostFulfillmentStatusSpecification
 * //       successResponse: { // ResponseSpecification
 * //         messageGroups: [ // MessageGroupsList // required
 * //           { // MessageGroup
 * //             message: { // Message
 * //               plainTextMessage: { // PlainTextMessage
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               customPayload: { // CustomPayload
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               ssmlMessage: { // SSMLMessage
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               imageResponseCard: { // ImageResponseCard
 * //                 title: "STRING_VALUE", // required
 * //                 subtitle: "STRING_VALUE",
 * //                 imageUrl: "STRING_VALUE",
 * //                 buttons: [ // ButtonsList
 * //                   { // Button
 * //                     text: "STRING_VALUE", // required
 * //                     value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //             variations: [ // MessageVariationsList
 * //               {
 * //                 plainTextMessage: {
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //                 customPayload: {
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //                 ssmlMessage: {
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //                 imageResponseCard: {
 * //                   title: "STRING_VALUE", // required
 * //                   subtitle: "STRING_VALUE",
 * //                   imageUrl: "STRING_VALUE",
 * //                   buttons: [
 * //                     {
 * //                       text: "STRING_VALUE", // required
 * //                       value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         allowInterrupt: true || false,
 * //       },
 * //       failureResponse: {
 * //         messageGroups: [ // required
 * //           {
 * //             message: {
 * //               plainTextMessage: {
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               customPayload: {
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               ssmlMessage: {
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               imageResponseCard: {
 * //                 title: "STRING_VALUE", // required
 * //                 subtitle: "STRING_VALUE",
 * //                 imageUrl: "STRING_VALUE",
 * //                 buttons: [
 * //                   {
 * //                     text: "STRING_VALUE", // required
 * //                     value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //             variations: [
 * //               {
 * //                 plainTextMessage: {
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //                 customPayload: {
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //                 ssmlMessage: {
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //                 imageResponseCard: {
 * //                   title: "STRING_VALUE", // required
 * //                   subtitle: "STRING_VALUE",
 * //                   imageUrl: "STRING_VALUE",
 * //                   buttons: [
 * //                     {
 * //                       text: "STRING_VALUE", // required
 * //                       value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         allowInterrupt: true || false,
 * //       },
 * //       timeoutResponse: {
 * //         messageGroups: [ // required
 * //           {
 * //             message: {
 * //               plainTextMessage: {
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               customPayload: {
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               ssmlMessage: {
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               imageResponseCard: {
 * //                 title: "STRING_VALUE", // required
 * //                 subtitle: "STRING_VALUE",
 * //                 imageUrl: "STRING_VALUE",
 * //                 buttons: [
 * //                   {
 * //                     text: "STRING_VALUE", // required
 * //                     value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //             variations: [
 * //               "<Message>",
 * //             ],
 * //           },
 * //         ],
 * //         allowInterrupt: true || false,
 * //       },
 * //       successNextStep: { // DialogState
 * //         dialogAction: { // DialogAction
 * //           type: "ElicitIntent" || "StartIntent" || "ElicitSlot" || "EvaluateConditional" || "InvokeDialogCodeHook" || "ConfirmIntent" || "FulfillIntent" || "CloseIntent" || "EndConversation", // required
 * //           slotToElicit: "STRING_VALUE",
 * //           suppressNextMessage: true || false,
 * //         },
 * //         intent: { // IntentOverride
 * //           name: "STRING_VALUE",
 * //           slots: { // SlotValueOverrideMap
 * //             "<keys>": { // SlotValueOverride
 * //               shape: "Scalar" || "List",
 * //               value: { // SlotValue
 * //                 interpretedValue: "STRING_VALUE",
 * //               },
 * //               values: [ // SlotValues
 * //                 {
 * //                   shape: "Scalar" || "List",
 * //                   value: {
 * //                     interpretedValue: "STRING_VALUE",
 * //                   },
 * //                   values: [
 * //                     "<SlotValueOverride>",
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //         sessionAttributes: { // StringMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       successConditional: { // ConditionalSpecification
 * //         active: true || false, // required
 * //         conditionalBranches: [ // ConditionalBranches // required
 * //           { // ConditionalBranch
 * //             name: "STRING_VALUE", // required
 * //             condition: { // Condition
 * //               expressionString: "STRING_VALUE", // required
 * //             },
 * //             nextStep: {
 * //               dialogAction: {
 * //                 type: "ElicitIntent" || "StartIntent" || "ElicitSlot" || "EvaluateConditional" || "InvokeDialogCodeHook" || "ConfirmIntent" || "FulfillIntent" || "CloseIntent" || "EndConversation", // required
 * //                 slotToElicit: "STRING_VALUE",
 * //                 suppressNextMessage: true || false,
 * //               },
 * //               intent: {
 * //                 name: "STRING_VALUE",
 * //                 slots: {
 * //                   "<keys>": "<SlotValueOverride>",
 * //                 },
 * //               },
 * //               sessionAttributes: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //             response: {
 * //               messageGroups: [ // required
 * //                 {
 * //                   message: "<Message>", // required
 * //                   variations: [
 * //                     "<Message>",
 * //                   ],
 * //                 },
 * //               ],
 * //               allowInterrupt: true || false,
 * //             },
 * //           },
 * //         ],
 * //         defaultBranch: { // DefaultConditionalBranch
 * //           nextStep: "<DialogState>",
 * //           response: "<ResponseSpecification>",
 * //         },
 * //       },
 * //       failureNextStep: "<DialogState>",
 * //       failureConditional: {
 * //         active: true || false, // required
 * //         conditionalBranches: [ // required
 * //           {
 * //             name: "STRING_VALUE", // required
 * //             condition: {
 * //               expressionString: "STRING_VALUE", // required
 * //             },
 * //             nextStep: "<DialogState>", // required
 * //             response: "<ResponseSpecification>",
 * //           },
 * //         ],
 * //         defaultBranch: {
 * //           nextStep: "<DialogState>",
 * //           response: "<ResponseSpecification>",
 * //         },
 * //       },
 * //       timeoutNextStep: "<DialogState>",
 * //       timeoutConditional: {
 * //         active: true || false, // required
 * //         conditionalBranches: [ // required
 * //           {
 * //             name: "STRING_VALUE", // required
 * //             condition: {
 * //               expressionString: "STRING_VALUE", // required
 * //             },
 * //             nextStep: "<DialogState>", // required
 * //             response: "<ResponseSpecification>",
 * //           },
 * //         ],
 * //         defaultBranch: {
 * //           nextStep: "<DialogState>",
 * //           response: "<ResponseSpecification>",
 * //         },
 * //       },
 * //     },
 * //     fulfillmentUpdatesSpecification: { // FulfillmentUpdatesSpecification
 * //       active: true || false, // required
 * //       startResponse: { // FulfillmentStartResponseSpecification
 * //         delayInSeconds: Number("int"), // required
 * //         messageGroups: [ // required
 * //           {
 * //             message: "<Message>", // required
 * //             variations: [
 * //               "<Message>",
 * //             ],
 * //           },
 * //         ],
 * //         allowInterrupt: true || false,
 * //       },
 * //       updateResponse: { // FulfillmentUpdateResponseSpecification
 * //         frequencyInSeconds: Number("int"), // required
 * //         messageGroups: "<MessageGroupsList>", // required
 * //         allowInterrupt: true || false,
 * //       },
 * //       timeoutInSeconds: Number("int"),
 * //     },
 * //     active: true || false,
 * //   },
 * //   slotPriorities: [ // SlotPrioritiesList
 * //     { // SlotPriority
 * //       priority: Number("int"), // required
 * //       slotId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   intentConfirmationSetting: { // IntentConfirmationSetting
 * //     promptSpecification: { // PromptSpecification
 * //       messageGroups: "<MessageGroupsList>", // required
 * //       maxRetries: Number("int"), // required
 * //       allowInterrupt: true || false,
 * //       messageSelectionStrategy: "Random" || "Ordered",
 * //       promptAttemptsSpecification: { // PromptAttemptsSpecificationMap
 * //         "<keys>": { // PromptAttemptSpecification
 * //           allowInterrupt: true || false,
 * //           allowedInputTypes: { // AllowedInputTypes
 * //             allowAudioInput: true || false, // required
 * //             allowDTMFInput: true || false, // required
 * //           },
 * //           audioAndDTMFInputSpecification: { // AudioAndDTMFInputSpecification
 * //             startTimeoutMs: Number("int"), // required
 * //             audioSpecification: { // AudioSpecification
 * //               maxLengthMs: Number("int"), // required
 * //               endTimeoutMs: Number("int"), // required
 * //             },
 * //             dtmfSpecification: { // DTMFSpecification
 * //               maxLength: Number("int"), // required
 * //               endTimeoutMs: Number("int"), // required
 * //               deletionCharacter: "STRING_VALUE", // required
 * //               endCharacter: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           textInputSpecification: { // TextInputSpecification
 * //             startTimeoutMs: Number("int"), // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     declinationResponse: "<ResponseSpecification>",
 * //     active: true || false,
 * //     confirmationResponse: "<ResponseSpecification>",
 * //     confirmationNextStep: "<DialogState>",
 * //     confirmationConditional: {
 * //       active: true || false, // required
 * //       conditionalBranches: [ // required
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           condition: {
 * //             expressionString: "STRING_VALUE", // required
 * //           },
 * //           nextStep: "<DialogState>", // required
 * //           response: "<ResponseSpecification>",
 * //         },
 * //       ],
 * //       defaultBranch: {
 * //         nextStep: "<DialogState>",
 * //         response: "<ResponseSpecification>",
 * //       },
 * //     },
 * //     declinationNextStep: "<DialogState>",
 * //     declinationConditional: {
 * //       active: true || false, // required
 * //       conditionalBranches: [ // required
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           condition: {
 * //             expressionString: "STRING_VALUE", // required
 * //           },
 * //           nextStep: "<DialogState>", // required
 * //           response: "<ResponseSpecification>",
 * //         },
 * //       ],
 * //       defaultBranch: {
 * //         nextStep: "<DialogState>",
 * //         response: "<ResponseSpecification>",
 * //       },
 * //     },
 * //     failureResponse: "<ResponseSpecification>",
 * //     failureNextStep: "<DialogState>",
 * //     failureConditional: "<ConditionalSpecification>",
 * //     codeHook: { // DialogCodeHookInvocationSetting
 * //       enableCodeHookInvocation: true || false, // required
 * //       active: true || false, // required
 * //       invocationLabel: "STRING_VALUE",
 * //       postCodeHookSpecification: { // PostDialogCodeHookInvocationSpecification
 * //         successResponse: "<ResponseSpecification>",
 * //         successNextStep: "<DialogState>",
 * //         successConditional: "<ConditionalSpecification>",
 * //         failureResponse: "<ResponseSpecification>",
 * //         failureNextStep: "<DialogState>",
 * //         failureConditional: "<ConditionalSpecification>",
 * //         timeoutResponse: "<ResponseSpecification>",
 * //         timeoutNextStep: "<DialogState>",
 * //         timeoutConditional: "<ConditionalSpecification>",
 * //       },
 * //     },
 * //     elicitationCodeHook: { // ElicitationCodeHookInvocationSetting
 * //       enableCodeHookInvocation: true || false, // required
 * //       invocationLabel: "STRING_VALUE",
 * //     },
 * //   },
 * //   intentClosingSetting: { // IntentClosingSetting
 * //     closingResponse: "<ResponseSpecification>",
 * //     active: true || false,
 * //     nextStep: "<DialogState>",
 * //     conditional: "<ConditionalSpecification>",
 * //   },
 * //   inputContexts: [ // InputContextsList
 * //     { // InputContext
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   outputContexts: [ // OutputContextsList
 * //     { // OutputContext
 * //       name: "STRING_VALUE", // required
 * //       timeToLiveInSeconds: Number("int"), // required
 * //       turnsToLive: Number("int"), // required
 * //     },
 * //   ],
 * //   kendraConfiguration: { // KendraConfiguration
 * //     kendraIndex: "STRING_VALUE", // required
 * //     queryFilterStringEnabled: true || false,
 * //     queryFilterString: "STRING_VALUE",
 * //   },
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   initialResponseSetting: { // InitialResponseSetting
 * //     initialResponse: "<ResponseSpecification>",
 * //     nextStep: "<DialogState>",
 * //     conditional: "<ConditionalSpecification>",
 * //     codeHook: {
 * //       enableCodeHookInvocation: true || false, // required
 * //       active: true || false, // required
 * //       invocationLabel: "STRING_VALUE",
 * //       postCodeHookSpecification: {
 * //         successResponse: "<ResponseSpecification>",
 * //         successNextStep: "<DialogState>",
 * //         successConditional: "<ConditionalSpecification>",
 * //         failureResponse: "<ResponseSpecification>",
 * //         failureNextStep: "<DialogState>",
 * //         failureConditional: "<ConditionalSpecification>",
 * //         timeoutResponse: "<ResponseSpecification>",
 * //         timeoutNextStep: "<DialogState>",
 * //         timeoutConditional: "<ConditionalSpecification>",
 * //       },
 * //     },
 * //   },
 * //   qnAIntentConfiguration: { // QnAIntentConfiguration
 * //     dataSourceConfiguration: { // DataSourceConfiguration
 * //       opensearchConfiguration: { // OpensearchConfiguration
 * //         domainEndpoint: "STRING_VALUE", // required
 * //         indexName: "STRING_VALUE", // required
 * //         exactResponse: true || false,
 * //         exactResponseFields: { // ExactResponseFields
 * //           questionField: "STRING_VALUE", // required
 * //           answerField: "STRING_VALUE", // required
 * //         },
 * //         includeFields: [ // OSIncludeFields
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       kendraConfiguration: { // QnAKendraConfiguration
 * //         kendraIndex: "STRING_VALUE", // required
 * //         queryFilterStringEnabled: true || false,
 * //         queryFilterString: "STRING_VALUE",
 * //         exactResponse: true || false,
 * //       },
 * //       bedrockKnowledgeStoreConfiguration: { // BedrockKnowledgeStoreConfiguration
 * //         bedrockKnowledgeBaseArn: "STRING_VALUE", // required
 * //         exactResponse: true || false,
 * //         exactResponseFields: { // BedrockKnowledgeStoreExactResponseFields
 * //           answerField: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     bedrockModelConfiguration: { // BedrockModelSpecification
 * //       modelArn: "STRING_VALUE", // required
 * //       guardrail: { // BedrockGuardrailConfiguration
 * //         identifier: "STRING_VALUE", // required
 * //         version: "STRING_VALUE", // required
 * //       },
 * //       traceStatus: "ENABLED" || "DISABLED",
 * //       customPrompt: "STRING_VALUE",
 * //     },
 * //   },
 * //   qInConnectIntentConfiguration: { // QInConnectIntentConfiguration
 * //     qInConnectAssistantConfiguration: { // QInConnectAssistantConfiguration
 * //       assistantArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIntentCommandInput - {@link UpdateIntentCommandInput}
 * @returns {@link UpdateIntentCommandOutput}
 * @see {@link UpdateIntentCommandInput} for command's `input` shape.
 * @see {@link UpdateIntentCommandOutput} for command's `response` shape.
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
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class UpdateIntentCommand extends $Command
  .classBuilder<
    UpdateIntentCommandInput,
    UpdateIntentCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "UpdateIntent", {})
  .n("LexModelsV2Client", "UpdateIntentCommand")
  .sc(UpdateIntent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIntentRequest;
      output: UpdateIntentResponse;
    };
    sdk: {
      input: UpdateIntentCommandInput;
      output: UpdateIntentCommandOutput;
    };
  };
}
