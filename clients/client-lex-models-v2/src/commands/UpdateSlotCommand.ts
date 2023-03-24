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
import { UpdateSlotRequest, UpdateSlotResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateSlotCommand,
  serializeAws_restJson1UpdateSlotCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateSlotCommand}.
 */
export interface UpdateSlotCommandInput extends UpdateSlotRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSlotCommand}.
 */
export interface UpdateSlotCommandOutput extends UpdateSlotResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the settings for a slot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateSlotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateSlotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = {
 *   slotId: "STRING_VALUE", // required
 *   slotName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   slotTypeId: "STRING_VALUE",
 *   valueElicitationSetting: {
 *     defaultValueSpecification: {
 *       defaultValueList: [ // required
 *         {
 *           defaultValue: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     slotConstraint: "Required" || "Optional", // required
 *     promptSpecification: {
 *       messageGroups: [ // required
 *         {
 *           message: {
 *             plainTextMessage: {
 *               value: "STRING_VALUE", // required
 *             },
 *             customPayload: {
 *               value: "STRING_VALUE", // required
 *             },
 *             ssmlMessage: {
 *               value: "STRING_VALUE", // required
 *             },
 *             imageResponseCard: {
 *               title: "STRING_VALUE", // required
 *               subtitle: "STRING_VALUE",
 *               imageUrl: "STRING_VALUE",
 *               buttons: [
 *                 {
 *                   text: "STRING_VALUE", // required
 *                   value: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *           },
 *           variations: [
 *             {
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
 *           ],
 *         },
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
 *     sampleUtterances: [
 *       {
 *         utterance: "STRING_VALUE", // required
 *       },
 *     ],
 *     waitAndContinueSpecification: {
 *       waitingResponse: {
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
 *       continueResponse: {
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
 *       stillWaitingResponse: {
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
 *         frequencyInSeconds: Number("int"), // required
 *         timeoutInSeconds: Number("int"), // required
 *         allowInterrupt: true || false,
 *       },
 *       active: true || false,
 *     },
 *     slotCaptureSetting: {
 *       captureResponse: {
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
 *       captureNextStep: {
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
 *       captureConditional: {
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
 *                 "<MessageGroupsList>",
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
 *       failureResponse: {
 *         messageGroups: "<ResponseSpecification>",
 *         allowInterrupt: "<ResponseSpecification>",
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
 *       codeHook: {
 *         enableCodeHookInvocation: true || false, // required
 *         active: true || false, // required
 *         invocationLabel: "STRING_VALUE",
 *         postCodeHookSpecification: {
 *           successResponse: {
 *             messageGroups: "<ResponseSpecification>",
 *             allowInterrupt: "<ResponseSpecification>",
 *           },
 *           successNextStep: {
 *             dialogAction: "<DialogState>",
 *             intent: "<DialogState>",
 *             sessionAttributes: "<DialogState>",
 *           },
 *           successConditional: {
 *             active: true || false, // required
 *             conditionalBranches: [ // required
 *               {
 *                 name: "STRING_VALUE", // required
 *                 condition: {
 *                   expressionString: "STRING_VALUE", // required
 *                 },
 *                 nextStep: {
 *                   dialogAction: "<DialogState>",
 *                   intent: "<DialogState>",
 *                   sessionAttributes: "<DialogState>",
 *                 },
 *                 response: {
 *                   messageGroups: "<ResponseSpecification>",
 *                   allowInterrupt: "<ResponseSpecification>",
 *                 },
 *               },
 *             ],
 *             defaultBranch: {
 *               nextStep: {
 *                 dialogAction: "<DialogState>",
 *                 intent: "<DialogState>",
 *                 sessionAttributes: "<DialogState>",
 *               },
 *               response: {
 *                 messageGroups: "<ResponseSpecification>",
 *                 allowInterrupt: "<ResponseSpecification>",
 *               },
 *             },
 *           },
 *           failureResponse: {
 *             messageGroups: "<ResponseSpecification>",
 *             allowInterrupt: "<ResponseSpecification>",
 *           },
 *           failureNextStep: {
 *             dialogAction: "<DialogState>",
 *             intent: "<DialogState>",
 *             sessionAttributes: "<DialogState>",
 *           },
 *           failureConditional: {
 *             active: true || false, // required
 *             conditionalBranches: [ // required
 *               {
 *                 name: "STRING_VALUE", // required
 *                 condition: {
 *                   expressionString: "STRING_VALUE", // required
 *                 },
 *                 nextStep: {
 *                   dialogAction: "<DialogState>",
 *                   intent: "<DialogState>",
 *                   sessionAttributes: "<DialogState>",
 *                 },
 *                 response: {
 *                   messageGroups: "<ResponseSpecification>",
 *                   allowInterrupt: "<ResponseSpecification>",
 *                 },
 *               },
 *             ],
 *             defaultBranch: {
 *               nextStep: {
 *                 dialogAction: "<DialogState>",
 *                 intent: "<DialogState>",
 *                 sessionAttributes: "<DialogState>",
 *               },
 *               response: {
 *                 messageGroups: "<ResponseSpecification>",
 *                 allowInterrupt: "<ResponseSpecification>",
 *               },
 *             },
 *           },
 *           timeoutResponse: {
 *             messageGroups: "<ResponseSpecification>",
 *             allowInterrupt: "<ResponseSpecification>",
 *           },
 *           timeoutNextStep: {
 *             dialogAction: "<DialogState>",
 *             intent: "<DialogState>",
 *             sessionAttributes: "<DialogState>",
 *           },
 *           timeoutConditional: {
 *             active: true || false, // required
 *             conditionalBranches: [ // required
 *               {
 *                 name: "STRING_VALUE", // required
 *                 condition: {
 *                   expressionString: "STRING_VALUE", // required
 *                 },
 *                 nextStep: {
 *                   dialogAction: "<DialogState>",
 *                   intent: "<DialogState>",
 *                   sessionAttributes: "<DialogState>",
 *                 },
 *                 response: {
 *                   messageGroups: "<ResponseSpecification>",
 *                   allowInterrupt: "<ResponseSpecification>",
 *                 },
 *               },
 *             ],
 *             defaultBranch: {
 *               nextStep: {
 *                 dialogAction: "<DialogState>",
 *                 intent: "<DialogState>",
 *                 sessionAttributes: "<DialogState>",
 *               },
 *               response: {
 *                 messageGroups: "<ResponseSpecification>",
 *                 allowInterrupt: "<ResponseSpecification>",
 *               },
 *             },
 *           },
 *         },
 *       },
 *       elicitationCodeHook: {
 *         enableCodeHookInvocation: true || false, // required
 *         invocationLabel: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   obfuscationSetting: {
 *     obfuscationSettingType: "None" || "DefaultObfuscation", // required
 *   },
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   intentId: "STRING_VALUE", // required
 *   multipleValuesSetting: {
 *     allowMultipleValues: true || false,
 *   },
 *   subSlotSetting: {
 *     expression: "STRING_VALUE",
 *     slotSpecifications: {
 *       "<keys>": {
 *         slotTypeId: "STRING_VALUE", // required
 *         valueElicitationSetting: {
 *           defaultValueSpecification: {
 *             defaultValueList: [ // required
 *               {
 *                 defaultValue: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           promptSpecification: {
 *             messageGroups: [ // required
 *               "<MessageGroupsList>",
 *             ],
 *             maxRetries: Number("int"), // required
 *             allowInterrupt: true || false,
 *             messageSelectionStrategy: "Random" || "Ordered",
 *             promptAttemptsSpecification: {
 *               "<keys>": {
 *                 allowInterrupt: true || false,
 *                 allowedInputTypes: {
 *                   allowAudioInput: true || false, // required
 *                   allowDTMFInput: true || false, // required
 *                 },
 *                 audioAndDTMFInputSpecification: {
 *                   startTimeoutMs: Number("int"), // required
 *                   audioSpecification: {
 *                     maxLengthMs: Number("int"), // required
 *                     endTimeoutMs: Number("int"), // required
 *                   },
 *                   dtmfSpecification: {
 *                     maxLength: Number("int"), // required
 *                     endTimeoutMs: Number("int"), // required
 *                     deletionCharacter: "STRING_VALUE", // required
 *                     endCharacter: "STRING_VALUE", // required
 *                   },
 *                 },
 *                 textInputSpecification: {
 *                   startTimeoutMs: Number("int"), // required
 *                 },
 *               },
 *             },
 *           },
 *           sampleUtterances: [
 *             {
 *               utterance: "STRING_VALUE", // required
 *             },
 *           ],
 *           waitAndContinueSpecification: {
 *             waitingResponse: {
 *               messageGroups: "<ResponseSpecification>",
 *               allowInterrupt: "<ResponseSpecification>",
 *             },
 *             continueResponse: {
 *               messageGroups: "<ResponseSpecification>",
 *               allowInterrupt: "<ResponseSpecification>",
 *             },
 *             stillWaitingResponse: {
 *               messageGroups: [ // required
 *                 "<MessageGroupsList>",
 *               ],
 *               frequencyInSeconds: Number("int"), // required
 *               timeoutInSeconds: Number("int"), // required
 *               allowInterrupt: true || false,
 *             },
 *             active: true || false,
 *           },
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateSlotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateSlotCommandInput - {@link UpdateSlotCommandInput}
 * @returns {@link UpdateSlotCommandOutput}
 * @see {@link UpdateSlotCommandInput} for command's `input` shape.
 * @see {@link UpdateSlotCommandOutput} for command's `response` shape.
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
export class UpdateSlotCommand extends $Command<
  UpdateSlotCommandInput,
  UpdateSlotCommandOutput,
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
  constructor(readonly input: UpdateSlotCommandInput) {
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
  ): Handler<UpdateSlotCommandInput, UpdateSlotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateSlotCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "UpdateSlotCommand";
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
  private serialize(input: UpdateSlotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSlotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSlotCommandOutput> {
    return deserializeAws_restJson1UpdateSlotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
