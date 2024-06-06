// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeSlotRequest, DescribeSlotResponse } from "../models/models_1";
import { de_DescribeSlotCommand, se_DescribeSlotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSlotCommand}.
 */
export interface DescribeSlotCommandInput extends DescribeSlotRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSlotCommand}.
 */
export interface DescribeSlotCommandOutput extends DescribeSlotResponse, __MetadataBearer {}

/**
 * <p>Gets metadata information about a slot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeSlotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeSlotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeSlotRequest
 *   slotId: "STRING_VALUE", // required
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   intentId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSlotCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSlotResponse
 * //   slotId: "STRING_VALUE",
 * //   slotName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   slotTypeId: "STRING_VALUE",
 * //   valueElicitationSetting: { // SlotValueElicitationSetting
 * //     defaultValueSpecification: { // SlotDefaultValueSpecification
 * //       defaultValueList: [ // SlotDefaultValueList // required
 * //         { // SlotDefaultValue
 * //           defaultValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     slotConstraint: "Required" || "Optional", // required
 * //     promptSpecification: { // PromptSpecification
 * //       messageGroups: [ // MessageGroupsList // required
 * //         { // MessageGroup
 * //           message: { // Message
 * //             plainTextMessage: { // PlainTextMessage
 * //               value: "STRING_VALUE", // required
 * //             },
 * //             customPayload: { // CustomPayload
 * //               value: "STRING_VALUE", // required
 * //             },
 * //             ssmlMessage: { // SSMLMessage
 * //               value: "STRING_VALUE", // required
 * //             },
 * //             imageResponseCard: { // ImageResponseCard
 * //               title: "STRING_VALUE", // required
 * //               subtitle: "STRING_VALUE",
 * //               imageUrl: "STRING_VALUE",
 * //               buttons: [ // ButtonsList
 * //                 { // Button
 * //                   text: "STRING_VALUE", // required
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //           variations: [ // MessageVariationsList
 * //             {
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
 * //           ],
 * //         },
 * //       ],
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
 * //     sampleUtterances: [ // SampleUtterancesList
 * //       { // SampleUtterance
 * //         utterance: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     waitAndContinueSpecification: { // WaitAndContinueSpecification
 * //       waitingResponse: { // ResponseSpecification
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
 * //       continueResponse: {
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
 * //       stillWaitingResponse: { // StillWaitingResponseSpecification
 * //         messageGroups: [ // required
 * //           {
 * //             message: "<Message>", // required
 * //             variations: [
 * //               "<Message>",
 * //             ],
 * //           },
 * //         ],
 * //         frequencyInSeconds: Number("int"), // required
 * //         timeoutInSeconds: Number("int"), // required
 * //         allowInterrupt: true || false,
 * //       },
 * //       active: true || false,
 * //     },
 * //     slotCaptureSetting: { // SlotCaptureSetting
 * //       captureResponse: {
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
 * //       captureNextStep: { // DialogState
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
 * //       captureConditional: { // ConditionalSpecification
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
 * //               messageGroups: "<MessageGroupsList>", // required
 * //               allowInterrupt: true || false,
 * //             },
 * //           },
 * //         ],
 * //         defaultBranch: { // DefaultConditionalBranch
 * //           nextStep: "<DialogState>",
 * //           response: "<ResponseSpecification>",
 * //         },
 * //       },
 * //       failureResponse: "<ResponseSpecification>",
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
 * //       codeHook: { // DialogCodeHookInvocationSetting
 * //         enableCodeHookInvocation: true || false, // required
 * //         active: true || false, // required
 * //         invocationLabel: "STRING_VALUE",
 * //         postCodeHookSpecification: { // PostDialogCodeHookInvocationSpecification
 * //           successResponse: "<ResponseSpecification>",
 * //           successNextStep: "<DialogState>",
 * //           successConditional: {
 * //             active: true || false, // required
 * //             conditionalBranches: [ // required
 * //               {
 * //                 name: "STRING_VALUE", // required
 * //                 condition: {
 * //                   expressionString: "STRING_VALUE", // required
 * //                 },
 * //                 nextStep: "<DialogState>", // required
 * //                 response: "<ResponseSpecification>",
 * //               },
 * //             ],
 * //             defaultBranch: {
 * //               nextStep: "<DialogState>",
 * //               response: "<ResponseSpecification>",
 * //             },
 * //           },
 * //           failureResponse: "<ResponseSpecification>",
 * //           failureNextStep: "<DialogState>",
 * //           failureConditional: {
 * //             active: true || false, // required
 * //             conditionalBranches: [ // required
 * //               {
 * //                 name: "STRING_VALUE", // required
 * //                 condition: {
 * //                   expressionString: "STRING_VALUE", // required
 * //                 },
 * //                 nextStep: "<DialogState>", // required
 * //                 response: "<ResponseSpecification>",
 * //               },
 * //             ],
 * //             defaultBranch: {
 * //               nextStep: "<DialogState>",
 * //               response: "<ResponseSpecification>",
 * //             },
 * //           },
 * //           timeoutResponse: "<ResponseSpecification>",
 * //           timeoutNextStep: "<DialogState>",
 * //           timeoutConditional: {
 * //             active: true || false, // required
 * //             conditionalBranches: [ // required
 * //               {
 * //                 name: "STRING_VALUE", // required
 * //                 condition: {
 * //                   expressionString: "STRING_VALUE", // required
 * //                 },
 * //                 nextStep: "<DialogState>", // required
 * //                 response: "<ResponseSpecification>",
 * //               },
 * //             ],
 * //             defaultBranch: {
 * //               nextStep: "<DialogState>",
 * //               response: "<ResponseSpecification>",
 * //             },
 * //           },
 * //         },
 * //       },
 * //       elicitationCodeHook: { // ElicitationCodeHookInvocationSetting
 * //         enableCodeHookInvocation: true || false, // required
 * //         invocationLabel: "STRING_VALUE",
 * //       },
 * //     },
 * //     slotResolutionSetting: { // SlotResolutionSetting
 * //       slotResolutionStrategy: "EnhancedFallback" || "Default", // required
 * //     },
 * //   },
 * //   obfuscationSetting: { // ObfuscationSetting
 * //     obfuscationSettingType: "None" || "DefaultObfuscation", // required
 * //   },
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   intentId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   multipleValuesSetting: { // MultipleValuesSetting
 * //     allowMultipleValues: true || false,
 * //   },
 * //   subSlotSetting: { // SubSlotSetting
 * //     expression: "STRING_VALUE",
 * //     slotSpecifications: { // SubSlotSpecificationMap
 * //       "<keys>": { // Specifications
 * //         slotTypeId: "STRING_VALUE", // required
 * //         valueElicitationSetting: { // SubSlotValueElicitationSetting
 * //           defaultValueSpecification: {
 * //             defaultValueList: [ // required
 * //               {
 * //                 defaultValue: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           promptSpecification: {
 * //             messageGroups: "<MessageGroupsList>", // required
 * //             maxRetries: Number("int"), // required
 * //             allowInterrupt: true || false,
 * //             messageSelectionStrategy: "Random" || "Ordered",
 * //             promptAttemptsSpecification: {
 * //               "<keys>": {
 * //                 allowInterrupt: true || false,
 * //                 allowedInputTypes: {
 * //                   allowAudioInput: true || false, // required
 * //                   allowDTMFInput: true || false, // required
 * //                 },
 * //                 audioAndDTMFInputSpecification: {
 * //                   startTimeoutMs: Number("int"), // required
 * //                   audioSpecification: {
 * //                     maxLengthMs: Number("int"), // required
 * //                     endTimeoutMs: Number("int"), // required
 * //                   },
 * //                   dtmfSpecification: {
 * //                     maxLength: Number("int"), // required
 * //                     endTimeoutMs: Number("int"), // required
 * //                     deletionCharacter: "STRING_VALUE", // required
 * //                     endCharacter: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //                 textInputSpecification: {
 * //                   startTimeoutMs: Number("int"), // required
 * //                 },
 * //               },
 * //             },
 * //           },
 * //           sampleUtterances: [
 * //             {
 * //               utterance: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           waitAndContinueSpecification: {
 * //             waitingResponse: "<ResponseSpecification>", // required
 * //             continueResponse: "<ResponseSpecification>", // required
 * //             stillWaitingResponse: {
 * //               messageGroups: "<MessageGroupsList>", // required
 * //               frequencyInSeconds: Number("int"), // required
 * //               timeoutInSeconds: Number("int"), // required
 * //               allowInterrupt: true || false,
 * //             },
 * //             active: true || false,
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSlotCommandInput - {@link DescribeSlotCommandInput}
 * @returns {@link DescribeSlotCommandOutput}
 * @see {@link DescribeSlotCommandInput} for command's `input` shape.
 * @see {@link DescribeSlotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
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
 * @public
 */
export class DescribeSlotCommand extends $Command
  .classBuilder<
    DescribeSlotCommandInput,
    DescribeSlotCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "DescribeSlot", {})
  .n("LexModelsV2Client", "DescribeSlotCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSlotCommand)
  .de(de_DescribeSlotCommand)
  .build() {}
