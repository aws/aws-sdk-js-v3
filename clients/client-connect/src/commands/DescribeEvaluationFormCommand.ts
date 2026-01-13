// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeEvaluationFormRequest } from "../models/models_1";
import type { DescribeEvaluationFormResponse } from "../models/models_3";
import { DescribeEvaluationForm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEvaluationFormCommand}.
 */
export interface DescribeEvaluationFormCommandInput extends DescribeEvaluationFormRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEvaluationFormCommand}.
 */
export interface DescribeEvaluationFormCommandOutput extends DescribeEvaluationFormResponse, __MetadataBearer {}

/**
 * <p>Describes an evaluation form in the specified Amazon Connect instance. If the version property is not
 *    provided, the latest version of the evaluation form is described.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeEvaluationFormCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeEvaluationFormCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeEvaluationFormRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   EvaluationFormVersion: Number("int"),
 * };
 * const command = new DescribeEvaluationFormCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEvaluationFormResponse
 * //   EvaluationForm: { // EvaluationForm
 * //     EvaluationFormId: "STRING_VALUE", // required
 * //     EvaluationFormVersion: Number("int"), // required
 * //     Locked: true || false, // required
 * //     EvaluationFormArn: "STRING_VALUE", // required
 * //     Title: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Status: "DRAFT" || "ACTIVE", // required
 * //     Items: [ // EvaluationFormItemsList // required
 * //       { // EvaluationFormItem Union: only one key present
 * //         Section: { // EvaluationFormSection
 * //           Title: "STRING_VALUE", // required
 * //           RefId: "STRING_VALUE", // required
 * //           Instructions: "STRING_VALUE",
 * //           Items: [ // required
 * //             {//  Union: only one key present
 * //               Section: {
 * //                 Title: "STRING_VALUE", // required
 * //                 RefId: "STRING_VALUE", // required
 * //                 Instructions: "STRING_VALUE",
 * //                 Items: "<EvaluationFormItemsList>", // required
 * //                 Weight: Number("double"),
 * //               },
 * //               Question: { // EvaluationFormQuestion
 * //                 Title: "STRING_VALUE", // required
 * //                 Instructions: "STRING_VALUE",
 * //                 RefId: "STRING_VALUE", // required
 * //                 NotApplicableEnabled: true || false,
 * //                 QuestionType: "TEXT" || "SINGLESELECT" || "NUMERIC" || "MULTISELECT" || "DATETIME", // required
 * //                 QuestionTypeProperties: { // EvaluationFormQuestionTypeProperties Union: only one key present
 * //                   Numeric: { // EvaluationFormNumericQuestionProperties
 * //                     MinValue: Number("int"), // required
 * //                     MaxValue: Number("int"), // required
 * //                     Options: [ // EvaluationFormNumericQuestionOptionList
 * //                       { // EvaluationFormNumericQuestionOption
 * //                         MinValue: Number("int"), // required
 * //                         MaxValue: Number("int"), // required
 * //                         Score: Number("int"),
 * //                         AutomaticFail: true || false,
 * //                         AutomaticFailConfiguration: { // AutomaticFailConfiguration
 * //                           TargetSection: "STRING_VALUE",
 * //                         },
 * //                       },
 * //                     ],
 * //                     Automation: { // EvaluationFormNumericQuestionAutomation Union: only one key present
 * //                       PropertyValue: { // NumericQuestionPropertyValueAutomation
 * //                         Label: "OVERALL_CUSTOMER_SENTIMENT_SCORE" || "OVERALL_AGENT_SENTIMENT_SCORE" || "CUSTOMER_SENTIMENT_SCORE_WITHOUT_AGENT" || "CUSTOMER_SENTIMENT_SCORE_WITH_AGENT" || "NON_TALK_TIME" || "NON_TALK_TIME_PERCENTAGE" || "NUMBER_OF_INTERRUPTIONS" || "CONTACT_DURATION" || "AGENT_INTERACTION_DURATION" || "CUSTOMER_HOLD_TIME" || "LONGEST_HOLD_DURATION" || "NUMBER_OF_HOLDS" || "AGENT_INTERACTION_AND_HOLD_DURATION", // required
 * //                       },
 * //                       AnswerSource: { // EvaluationFormQuestionAutomationAnswerSource
 * //                         SourceType: "CONTACT_LENS_DATA" || "GEN_AI", // required
 * //                       },
 * //                     },
 * //                   },
 * //                   SingleSelect: { // EvaluationFormSingleSelectQuestionProperties
 * //                     Options: [ // EvaluationFormSingleSelectQuestionOptionList // required
 * //                       { // EvaluationFormSingleSelectQuestionOption
 * //                         RefId: "STRING_VALUE", // required
 * //                         Text: "STRING_VALUE", // required
 * //                         Score: Number("int"),
 * //                         AutomaticFail: true || false,
 * //                         AutomaticFailConfiguration: {
 * //                           TargetSection: "STRING_VALUE",
 * //                         },
 * //                       },
 * //                     ],
 * //                     DisplayAs: "DROPDOWN" || "RADIO",
 * //                     Automation: { // EvaluationFormSingleSelectQuestionAutomation
 * //                       Options: [ // EvaluationFormSingleSelectQuestionAutomationOptionList
 * //                         { // EvaluationFormSingleSelectQuestionAutomationOption Union: only one key present
 * //                           RuleCategory: { // SingleSelectQuestionRuleCategoryAutomation
 * //                             Category: "STRING_VALUE", // required
 * //                             Condition: "PRESENT" || "NOT_PRESENT", // required
 * //                             OptionRefId: "STRING_VALUE", // required
 * //                           },
 * //                         },
 * //                       ],
 * //                       DefaultOptionRefId: "STRING_VALUE",
 * //                       AnswerSource: {
 * //                         SourceType: "CONTACT_LENS_DATA" || "GEN_AI", // required
 * //                       },
 * //                     },
 * //                   },
 * //                   Text: { // EvaluationFormTextQuestionProperties
 * //                     Automation: { // EvaluationFormTextQuestionAutomation
 * //                       AnswerSource: {
 * //                         SourceType: "CONTACT_LENS_DATA" || "GEN_AI", // required
 * //                       },
 * //                     },
 * //                   },
 * //                   MultiSelect: { // EvaluationFormMultiSelectQuestionProperties
 * //                     Options: [ // EvaluationFormMultiSelectQuestionOptionList // required
 * //                       { // EvaluationFormMultiSelectQuestionOption
 * //                         RefId: "STRING_VALUE", // required
 * //                         Text: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     DisplayAs: "DROPDOWN" || "CHECKBOX",
 * //                     Automation: { // EvaluationFormMultiSelectQuestionAutomation
 * //                       Options: [ // EvaluationFormMultiSelectQuestionAutomationOptionList
 * //                         { // EvaluationFormMultiSelectQuestionAutomationOption Union: only one key present
 * //                           RuleCategory: { // MultiSelectQuestionRuleCategoryAutomation
 * //                             Category: "STRING_VALUE", // required
 * //                             Condition: "PRESENT" || "NOT_PRESENT", // required
 * //                             OptionRefIds: [ // ReferenceIdList // required
 * //                               "STRING_VALUE",
 * //                             ],
 * //                           },
 * //                         },
 * //                       ],
 * //                       DefaultOptionRefIds: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       AnswerSource: {
 * //                         SourceType: "CONTACT_LENS_DATA" || "GEN_AI", // required
 * //                       },
 * //                     },
 * //                   },
 * //                 },
 * //                 Enablement: { // EvaluationFormItemEnablementConfiguration
 * //                   Condition: { // EvaluationFormItemEnablementCondition
 * //                     Operands: [ // EvaluationFormItemEnablementConditionOperandList // required
 * //                       { // EvaluationFormItemEnablementConditionOperand Union: only one key present
 * //                         Expression: { // EvaluationFormItemEnablementExpression
 * //                           Source: { // EvaluationFormItemEnablementSource
 * //                             Type: "QUESTION_REF_ID", // required
 * //                             RefId: "STRING_VALUE",
 * //                           },
 * //                           Values: [ // EvaluationFormItemEnablementSourceValueList // required
 * //                             { // EvaluationFormItemEnablementSourceValue
 * //                               Type: "OPTION_REF_ID", // required
 * //                               RefId: "STRING_VALUE",
 * //                             },
 * //                           ],
 * //                           Comparator: "IN" || "NOT_IN" || "ALL_IN" || "EXACT", // required
 * //                         },
 * //                         Condition: {
 * //                           Operands: [ // required
 * //                             {//  Union: only one key present
 * //                               Expression: {
 * //                                 Source: {
 * //                                   Type: "QUESTION_REF_ID", // required
 * //                                   RefId: "STRING_VALUE",
 * //                                 },
 * //                                 Values: [ // required
 * //                                   {
 * //                                     Type: "OPTION_REF_ID", // required
 * //                                     RefId: "STRING_VALUE",
 * //                                   },
 * //                                 ],
 * //                                 Comparator: "IN" || "NOT_IN" || "ALL_IN" || "EXACT", // required
 * //                               },
 * //                               Condition: "<EvaluationFormItemEnablementCondition>",
 * //                             },
 * //                           ],
 * //                           Operator: "OR" || "AND",
 * //                         },
 * //                       },
 * //                     ],
 * //                     Operator: "OR" || "AND",
 * //                   },
 * //                   Action: "DISABLE" || "ENABLE", // required
 * //                   DefaultAction: "DISABLE" || "ENABLE",
 * //                 },
 * //                 Weight: Number("double"),
 * //               },
 * //             },
 * //           ],
 * //           Weight: Number("double"),
 * //         },
 * //         Question: {
 * //           Title: "STRING_VALUE", // required
 * //           Instructions: "STRING_VALUE",
 * //           RefId: "STRING_VALUE", // required
 * //           NotApplicableEnabled: true || false,
 * //           QuestionType: "TEXT" || "SINGLESELECT" || "NUMERIC" || "MULTISELECT" || "DATETIME", // required
 * //           QuestionTypeProperties: {//  Union: only one key present
 * //             Numeric: {
 * //               MinValue: Number("int"), // required
 * //               MaxValue: Number("int"), // required
 * //               Options: [
 * //                 {
 * //                   MinValue: Number("int"), // required
 * //                   MaxValue: Number("int"), // required
 * //                   Score: Number("int"),
 * //                   AutomaticFail: true || false,
 * //                   AutomaticFailConfiguration: {
 * //                     TargetSection: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //               Automation: {//  Union: only one key present
 * //                 PropertyValue: {
 * //                   Label: "OVERALL_CUSTOMER_SENTIMENT_SCORE" || "OVERALL_AGENT_SENTIMENT_SCORE" || "CUSTOMER_SENTIMENT_SCORE_WITHOUT_AGENT" || "CUSTOMER_SENTIMENT_SCORE_WITH_AGENT" || "NON_TALK_TIME" || "NON_TALK_TIME_PERCENTAGE" || "NUMBER_OF_INTERRUPTIONS" || "CONTACT_DURATION" || "AGENT_INTERACTION_DURATION" || "CUSTOMER_HOLD_TIME" || "LONGEST_HOLD_DURATION" || "NUMBER_OF_HOLDS" || "AGENT_INTERACTION_AND_HOLD_DURATION", // required
 * //                 },
 * //                 AnswerSource: {
 * //                   SourceType: "CONTACT_LENS_DATA" || "GEN_AI", // required
 * //                 },
 * //               },
 * //             },
 * //             SingleSelect: {
 * //               Options: [ // required
 * //                 {
 * //                   RefId: "STRING_VALUE", // required
 * //                   Text: "STRING_VALUE", // required
 * //                   Score: Number("int"),
 * //                   AutomaticFail: true || false,
 * //                   AutomaticFailConfiguration: {
 * //                     TargetSection: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //               DisplayAs: "DROPDOWN" || "RADIO",
 * //               Automation: {
 * //                 Options: [
 * //                   {//  Union: only one key present
 * //                     RuleCategory: {
 * //                       Category: "STRING_VALUE", // required
 * //                       Condition: "PRESENT" || "NOT_PRESENT", // required
 * //                       OptionRefId: "STRING_VALUE", // required
 * //                     },
 * //                   },
 * //                 ],
 * //                 DefaultOptionRefId: "STRING_VALUE",
 * //                 AnswerSource: "<EvaluationFormQuestionAutomationAnswerSource>",
 * //               },
 * //             },
 * //             Text: {
 * //               Automation: {
 * //                 AnswerSource: "<EvaluationFormQuestionAutomationAnswerSource>",
 * //               },
 * //             },
 * //             MultiSelect: {
 * //               Options: [ // required
 * //                 {
 * //                   RefId: "STRING_VALUE", // required
 * //                   Text: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //               DisplayAs: "DROPDOWN" || "CHECKBOX",
 * //               Automation: {
 * //                 Options: [
 * //                   {//  Union: only one key present
 * //                     RuleCategory: {
 * //                       Category: "STRING_VALUE", // required
 * //                       Condition: "PRESENT" || "NOT_PRESENT", // required
 * //                       OptionRefIds: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   },
 * //                 ],
 * //                 DefaultOptionRefIds: "<ReferenceIdList>",
 * //                 AnswerSource: "<EvaluationFormQuestionAutomationAnswerSource>",
 * //               },
 * //             },
 * //           },
 * //           Enablement: {
 * //             Condition: "<EvaluationFormItemEnablementCondition>", // required
 * //             Action: "DISABLE" || "ENABLE", // required
 * //             DefaultAction: "DISABLE" || "ENABLE",
 * //           },
 * //           Weight: Number("double"),
 * //         },
 * //       },
 * //     ],
 * //     ScoringStrategy: { // EvaluationFormScoringStrategy
 * //       Mode: "QUESTION_ONLY" || "SECTION_ONLY", // required
 * //       Status: "ENABLED" || "DISABLED", // required
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"), // required
 * //     CreatedBy: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     LastModifiedBy: "STRING_VALUE", // required
 * //     AutoEvaluationConfiguration: { // EvaluationFormAutoEvaluationConfiguration
 * //       Enabled: true || false, // required
 * //     },
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     TargetConfiguration: { // EvaluationFormTargetConfiguration
 * //       ContactInteractionType: "AGENT" || "AUTOMATED", // required
 * //     },
 * //     LanguageConfiguration: { // EvaluationFormLanguageConfiguration
 * //       FormLanguage: "de-DE" || "en-US" || "es-ES" || "fr-FR" || "it-IT" || "pt-BR",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEvaluationFormCommandInput - {@link DescribeEvaluationFormCommandInput}
 * @returns {@link DescribeEvaluationFormCommandOutput}
 * @see {@link DescribeEvaluationFormCommandInput} for command's `input` shape.
 * @see {@link DescribeEvaluationFormCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class DescribeEvaluationFormCommand extends $Command
  .classBuilder<
    DescribeEvaluationFormCommandInput,
    DescribeEvaluationFormCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DescribeEvaluationForm", {})
  .n("ConnectClient", "DescribeEvaluationFormCommand")
  .sc(DescribeEvaluationForm$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEvaluationFormRequest;
      output: DescribeEvaluationFormResponse;
    };
    sdk: {
      input: DescribeEvaluationFormCommandInput;
      output: DescribeEvaluationFormCommandOutput;
    };
  };
}
