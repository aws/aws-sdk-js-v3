// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEvaluationFormRequest, UpdateEvaluationFormResponse } from "../models/models_3";
import { UpdateEvaluationForm } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEvaluationFormCommand}.
 */
export interface UpdateEvaluationFormCommandInput extends UpdateEvaluationFormRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEvaluationFormCommand}.
 */
export interface UpdateEvaluationFormCommandOutput extends UpdateEvaluationFormResponse, __MetadataBearer {}

/**
 * <p>Updates details about a specific evaluation form version in the specified Amazon Connect
 *    instance. Question and section identifiers cannot be duplicated within the same evaluation
 *    form.</p>
 *          <p>This operation does not support partial updates. Instead it does a full update of evaluation
 *    form content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateEvaluationFormCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateEvaluationFormCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateEvaluationFormRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   EvaluationFormVersion: Number("int"), // required
 *   CreateNewVersion: true || false,
 *   Title: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Items: [ // EvaluationFormItemsList // required
 *     { // EvaluationFormItem Union: only one key present
 *       Section: { // EvaluationFormSection
 *         Title: "STRING_VALUE", // required
 *         RefId: "STRING_VALUE", // required
 *         Instructions: "STRING_VALUE",
 *         Items: [ // required
 *           {//  Union: only one key present
 *             Section: {
 *               Title: "STRING_VALUE", // required
 *               RefId: "STRING_VALUE", // required
 *               Instructions: "STRING_VALUE",
 *               Items: "<EvaluationFormItemsList>", // required
 *               Weight: Number("double"),
 *             },
 *             Question: { // EvaluationFormQuestion
 *               Title: "STRING_VALUE", // required
 *               Instructions: "STRING_VALUE",
 *               RefId: "STRING_VALUE", // required
 *               NotApplicableEnabled: true || false,
 *               QuestionType: "TEXT" || "SINGLESELECT" || "NUMERIC", // required
 *               QuestionTypeProperties: { // EvaluationFormQuestionTypeProperties Union: only one key present
 *                 Numeric: { // EvaluationFormNumericQuestionProperties
 *                   MinValue: Number("int"), // required
 *                   MaxValue: Number("int"), // required
 *                   Options: [ // EvaluationFormNumericQuestionOptionList
 *                     { // EvaluationFormNumericQuestionOption
 *                       MinValue: Number("int"), // required
 *                       MaxValue: Number("int"), // required
 *                       Score: Number("int"),
 *                       AutomaticFail: true || false,
 *                       AutomaticFailConfiguration: { // AutomaticFailConfiguration
 *                         TargetSection: "STRING_VALUE",
 *                       },
 *                     },
 *                   ],
 *                   Automation: { // EvaluationFormNumericQuestionAutomation Union: only one key present
 *                     PropertyValue: { // NumericQuestionPropertyValueAutomation
 *                       Label: "OVERALL_CUSTOMER_SENTIMENT_SCORE" || "OVERALL_AGENT_SENTIMENT_SCORE" || "NON_TALK_TIME" || "NON_TALK_TIME_PERCENTAGE" || "NUMBER_OF_INTERRUPTIONS" || "CONTACT_DURATION" || "AGENT_INTERACTION_DURATION" || "CUSTOMER_HOLD_TIME" || "LONGEST_HOLD_DURATION" || "NUMBER_OF_HOLDS" || "AGENT_INTERACTION_AND_HOLD_DURATION", // required
 *                     },
 *                     AnswerSource: { // EvaluationFormQuestionAutomationAnswerSource
 *                       SourceType: "CONTACT_LENS_DATA" || "GEN_AI", // required
 *                     },
 *                   },
 *                 },
 *                 SingleSelect: { // EvaluationFormSingleSelectQuestionProperties
 *                   Options: [ // EvaluationFormSingleSelectQuestionOptionList // required
 *                     { // EvaluationFormSingleSelectQuestionOption
 *                       RefId: "STRING_VALUE", // required
 *                       Text: "STRING_VALUE", // required
 *                       Score: Number("int"),
 *                       AutomaticFail: true || false,
 *                       AutomaticFailConfiguration: {
 *                         TargetSection: "STRING_VALUE",
 *                       },
 *                     },
 *                   ],
 *                   DisplayAs: "DROPDOWN" || "RADIO",
 *                   Automation: { // EvaluationFormSingleSelectQuestionAutomation
 *                     Options: [ // EvaluationFormSingleSelectQuestionAutomationOptionList
 *                       { // EvaluationFormSingleSelectQuestionAutomationOption Union: only one key present
 *                         RuleCategory: { // SingleSelectQuestionRuleCategoryAutomation
 *                           Category: "STRING_VALUE", // required
 *                           Condition: "PRESENT" || "NOT_PRESENT", // required
 *                           OptionRefId: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                     DefaultOptionRefId: "STRING_VALUE",
 *                     AnswerSource: {
 *                       SourceType: "CONTACT_LENS_DATA" || "GEN_AI", // required
 *                     },
 *                   },
 *                 },
 *                 Text: { // EvaluationFormTextQuestionProperties
 *                   Automation: { // EvaluationFormTextQuestionAutomation
 *                     AnswerSource: {
 *                       SourceType: "CONTACT_LENS_DATA" || "GEN_AI", // required
 *                     },
 *                   },
 *                 },
 *               },
 *               Enablement: { // EvaluationFormItemEnablementConfiguration
 *                 Condition: { // EvaluationFormItemEnablementCondition
 *                   Operands: [ // EvaluationFormItemEnablementConditionOperandList // required
 *                     { // EvaluationFormItemEnablementConditionOperand Union: only one key present
 *                       Expression: { // EvaluationFormItemEnablementExpression
 *                         Source: { // EvaluationFormItemEnablementSource
 *                           Type: "QUESTION_REF_ID", // required
 *                           RefId: "STRING_VALUE",
 *                         },
 *                         Values: [ // EvaluationFormItemEnablementSourceValueList // required
 *                           { // EvaluationFormItemEnablementSourceValue
 *                             Type: "OPTION_REF_ID", // required
 *                             RefId: "STRING_VALUE",
 *                           },
 *                         ],
 *                         Comparator: "IN" || "NOT_IN", // required
 *                       },
 *                       Condition: {
 *                         Operands: [ // required
 *                           {//  Union: only one key present
 *                             Expression: {
 *                               Source: {
 *                                 Type: "QUESTION_REF_ID", // required
 *                                 RefId: "STRING_VALUE",
 *                               },
 *                               Values: [ // required
 *                                 {
 *                                   Type: "OPTION_REF_ID", // required
 *                                   RefId: "STRING_VALUE",
 *                                 },
 *                               ],
 *                               Comparator: "IN" || "NOT_IN", // required
 *                             },
 *                             Condition: "<EvaluationFormItemEnablementCondition>",
 *                           },
 *                         ],
 *                         Operator: "OR" || "AND",
 *                       },
 *                     },
 *                   ],
 *                   Operator: "OR" || "AND",
 *                 },
 *                 Action: "DISABLE" || "ENABLE", // required
 *                 DefaultAction: "DISABLE" || "ENABLE",
 *               },
 *               Weight: Number("double"),
 *             },
 *           },
 *         ],
 *         Weight: Number("double"),
 *       },
 *       Question: {
 *         Title: "STRING_VALUE", // required
 *         Instructions: "STRING_VALUE",
 *         RefId: "STRING_VALUE", // required
 *         NotApplicableEnabled: true || false,
 *         QuestionType: "TEXT" || "SINGLESELECT" || "NUMERIC", // required
 *         QuestionTypeProperties: {//  Union: only one key present
 *           Numeric: {
 *             MinValue: Number("int"), // required
 *             MaxValue: Number("int"), // required
 *             Options: [
 *               {
 *                 MinValue: Number("int"), // required
 *                 MaxValue: Number("int"), // required
 *                 Score: Number("int"),
 *                 AutomaticFail: true || false,
 *                 AutomaticFailConfiguration: {
 *                   TargetSection: "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *             Automation: {//  Union: only one key present
 *               PropertyValue: {
 *                 Label: "OVERALL_CUSTOMER_SENTIMENT_SCORE" || "OVERALL_AGENT_SENTIMENT_SCORE" || "NON_TALK_TIME" || "NON_TALK_TIME_PERCENTAGE" || "NUMBER_OF_INTERRUPTIONS" || "CONTACT_DURATION" || "AGENT_INTERACTION_DURATION" || "CUSTOMER_HOLD_TIME" || "LONGEST_HOLD_DURATION" || "NUMBER_OF_HOLDS" || "AGENT_INTERACTION_AND_HOLD_DURATION", // required
 *               },
 *               AnswerSource: {
 *                 SourceType: "CONTACT_LENS_DATA" || "GEN_AI", // required
 *               },
 *             },
 *           },
 *           SingleSelect: {
 *             Options: [ // required
 *               {
 *                 RefId: "STRING_VALUE", // required
 *                 Text: "STRING_VALUE", // required
 *                 Score: Number("int"),
 *                 AutomaticFail: true || false,
 *                 AutomaticFailConfiguration: {
 *                   TargetSection: "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *             DisplayAs: "DROPDOWN" || "RADIO",
 *             Automation: {
 *               Options: [
 *                 {//  Union: only one key present
 *                   RuleCategory: {
 *                     Category: "STRING_VALUE", // required
 *                     Condition: "PRESENT" || "NOT_PRESENT", // required
 *                     OptionRefId: "STRING_VALUE", // required
 *                   },
 *                 },
 *               ],
 *               DefaultOptionRefId: "STRING_VALUE",
 *               AnswerSource: {
 *                 SourceType: "CONTACT_LENS_DATA" || "GEN_AI", // required
 *               },
 *             },
 *           },
 *           Text: {
 *             Automation: {
 *               AnswerSource: "<EvaluationFormQuestionAutomationAnswerSource>",
 *             },
 *           },
 *         },
 *         Enablement: {
 *           Condition: "<EvaluationFormItemEnablementCondition>", // required
 *           Action: "DISABLE" || "ENABLE", // required
 *           DefaultAction: "DISABLE" || "ENABLE",
 *         },
 *         Weight: Number("double"),
 *       },
 *     },
 *   ],
 *   ScoringStrategy: { // EvaluationFormScoringStrategy
 *     Mode: "QUESTION_ONLY" || "SECTION_ONLY", // required
 *     Status: "ENABLED" || "DISABLED", // required
 *   },
 *   AutoEvaluationConfiguration: { // EvaluationFormAutoEvaluationConfiguration
 *     Enabled: true || false, // required
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateEvaluationFormCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEvaluationFormResponse
 * //   EvaluationFormId: "STRING_VALUE", // required
 * //   EvaluationFormArn: "STRING_VALUE", // required
 * //   EvaluationFormVersion: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param UpdateEvaluationFormCommandInput - {@link UpdateEvaluationFormCommandInput}
 * @returns {@link UpdateEvaluationFormCommandOutput}
 * @see {@link UpdateEvaluationFormCommandInput} for command's `input` shape.
 * @see {@link UpdateEvaluationFormCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateEvaluationFormCommand extends $Command
  .classBuilder<
    UpdateEvaluationFormCommandInput,
    UpdateEvaluationFormCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateEvaluationForm", {})
  .n("ConnectClient", "UpdateEvaluationFormCommand")
  .sc(UpdateEvaluationForm)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEvaluationFormRequest;
      output: UpdateEvaluationFormResponse;
    };
    sdk: {
      input: UpdateEvaluationFormCommandInput;
      output: UpdateEvaluationFormCommandOutput;
    };
  };
}
