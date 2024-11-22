// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEvaluationFormResponse } from "../models/models_0";
import { CreateEvaluationFormRequest } from "../models/models_3";
import { de_CreateEvaluationFormCommand, se_CreateEvaluationFormCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEvaluationFormCommand}.
 */
export interface CreateEvaluationFormCommandInput extends CreateEvaluationFormRequest {}
/**
 * @public
 *
 * The output of {@link CreateEvaluationFormCommand}.
 */
export interface CreateEvaluationFormCommandOutput extends CreateEvaluationFormResponse, __MetadataBearer {}

/**
 * <p>Creates an evaluation form in the specified Amazon Connect instance. The form can be
 *    used to define questions related to agent performance, and create sections to organize such
 *    questions. Question and section identifiers cannot be duplicated within the same evaluation
 *    form.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateEvaluationFormCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateEvaluationFormCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreateEvaluationFormRequest
 *   InstanceId: "STRING_VALUE", // required
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
 *                     },
 *                   ],
 *                   Automation: { // EvaluationFormNumericQuestionAutomation Union: only one key present
 *                     PropertyValue: { // NumericQuestionPropertyValueAutomation
 *                       Label: "OVERALL_CUSTOMER_SENTIMENT_SCORE" || "OVERALL_AGENT_SENTIMENT_SCORE" || "NON_TALK_TIME" || "NON_TALK_TIME_PERCENTAGE" || "NUMBER_OF_INTERRUPTIONS" || "CONTACT_DURATION" || "AGENT_INTERACTION_DURATION" || "CUSTOMER_HOLD_TIME", // required
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
 *                     },
 *                   ],
 *                   DisplayAs: "DROPDOWN" || "RADIO",
 *                   Automation: { // EvaluationFormSingleSelectQuestionAutomation
 *                     Options: [ // EvaluationFormSingleSelectQuestionAutomationOptionList // required
 *                       { // EvaluationFormSingleSelectQuestionAutomationOption Union: only one key present
 *                         RuleCategory: { // SingleSelectQuestionRuleCategoryAutomation
 *                           Category: "STRING_VALUE", // required
 *                           Condition: "PRESENT" || "NOT_PRESENT", // required
 *                           OptionRefId: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                     DefaultOptionRefId: "STRING_VALUE",
 *                   },
 *                 },
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
 *               },
 *             ],
 *             Automation: {//  Union: only one key present
 *               PropertyValue: {
 *                 Label: "OVERALL_CUSTOMER_SENTIMENT_SCORE" || "OVERALL_AGENT_SENTIMENT_SCORE" || "NON_TALK_TIME" || "NON_TALK_TIME_PERCENTAGE" || "NUMBER_OF_INTERRUPTIONS" || "CONTACT_DURATION" || "AGENT_INTERACTION_DURATION" || "CUSTOMER_HOLD_TIME", // required
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
 *               },
 *             ],
 *             DisplayAs: "DROPDOWN" || "RADIO",
 *             Automation: {
 *               Options: [ // required
 *                 {//  Union: only one key present
 *                   RuleCategory: {
 *                     Category: "STRING_VALUE", // required
 *                     Condition: "PRESENT" || "NOT_PRESENT", // required
 *                     OptionRefId: "STRING_VALUE", // required
 *                   },
 *                 },
 *               ],
 *               DefaultOptionRefId: "STRING_VALUE",
 *             },
 *           },
 *         },
 *         Weight: Number("double"),
 *       },
 *     },
 *   ],
 *   ScoringStrategy: { // EvaluationFormScoringStrategy
 *     Mode: "QUESTION_ONLY" || "SECTION_ONLY", // required
 *     Status: "ENABLED" || "DISABLED", // required
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateEvaluationFormCommand(input);
 * const response = await client.send(command);
 * // { // CreateEvaluationFormResponse
 * //   EvaluationFormId: "STRING_VALUE", // required
 * //   EvaluationFormArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateEvaluationFormCommandInput - {@link CreateEvaluationFormCommandInput}
 * @returns {@link CreateEvaluationFormCommandOutput}
 * @see {@link CreateEvaluationFormCommandInput} for command's `input` shape.
 * @see {@link CreateEvaluationFormCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateEvaluationFormCommand extends $Command
  .classBuilder<
    CreateEvaluationFormCommandInput,
    CreateEvaluationFormCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "CreateEvaluationForm", {})
  .n("ConnectClient", "CreateEvaluationFormCommand")
  .f(void 0, void 0)
  .ser(se_CreateEvaluationFormCommand)
  .de(de_CreateEvaluationFormCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEvaluationFormRequest;
      output: CreateEvaluationFormResponse;
    };
    sdk: {
      input: CreateEvaluationFormCommandInput;
      output: CreateEvaluationFormCommandOutput;
    };
  };
}
