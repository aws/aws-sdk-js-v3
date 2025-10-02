// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAutomatedReasoningPolicyTestResultRequest,
  GetAutomatedReasoningPolicyTestResultResponse,
  GetAutomatedReasoningPolicyTestResultResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetAutomatedReasoningPolicyTestResultCommand,
  se_GetAutomatedReasoningPolicyTestResultCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAutomatedReasoningPolicyTestResultCommand}.
 */
export interface GetAutomatedReasoningPolicyTestResultCommandInput
  extends GetAutomatedReasoningPolicyTestResultRequest {}
/**
 * @public
 *
 * The output of {@link GetAutomatedReasoningPolicyTestResultCommand}.
 */
export interface GetAutomatedReasoningPolicyTestResultCommandOutput
  extends GetAutomatedReasoningPolicyTestResultResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the test result for a specific Automated Reasoning policy test. Returns detailed validation findings and execution status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetAutomatedReasoningPolicyTestResultCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetAutomatedReasoningPolicyTestResultCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetAutomatedReasoningPolicyTestResultRequest
 *   policyArn: "STRING_VALUE", // required
 *   buildWorkflowId: "STRING_VALUE", // required
 *   testCaseId: "STRING_VALUE", // required
 * };
 * const command = new GetAutomatedReasoningPolicyTestResultCommand(input);
 * const response = await client.send(command);
 * // { // GetAutomatedReasoningPolicyTestResultResponse
 * //   testResult: { // AutomatedReasoningPolicyTestResult
 * //     testCase: { // AutomatedReasoningPolicyTestCase
 * //       testCaseId: "STRING_VALUE", // required
 * //       guardContent: "STRING_VALUE", // required
 * //       queryContent: "STRING_VALUE",
 * //       expectedAggregatedFindingsResult: "VALID" || "INVALID" || "SATISFIABLE" || "IMPOSSIBLE" || "TRANSLATION_AMBIGUOUS" || "TOO_COMPLEX" || "NO_TRANSLATION",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       confidenceThreshold: Number("double"),
 * //     },
 * //     policyArn: "STRING_VALUE", // required
 * //     testRunStatus: "NOT_STARTED" || "SCHEDULED" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //     testFindings: [ // AutomatedReasoningCheckFindingList
 * //       { // AutomatedReasoningCheckFinding Union: only one key present
 * //         valid: { // AutomatedReasoningCheckValidFinding
 * //           translation: { // AutomatedReasoningCheckTranslation
 * //             premises: [ // AutomatedReasoningLogicStatementList
 * //               { // AutomatedReasoningLogicStatement
 * //                 logic: "STRING_VALUE", // required
 * //                 naturalLanguage: "STRING_VALUE",
 * //               },
 * //             ],
 * //             claims: [ // required
 * //               {
 * //                 logic: "STRING_VALUE", // required
 * //                 naturalLanguage: "STRING_VALUE",
 * //               },
 * //             ],
 * //             untranslatedPremises: [ // AutomatedReasoningCheckInputTextReferenceList
 * //               { // AutomatedReasoningCheckInputTextReference
 * //                 text: "STRING_VALUE",
 * //               },
 * //             ],
 * //             untranslatedClaims: [
 * //               {
 * //                 text: "STRING_VALUE",
 * //               },
 * //             ],
 * //             confidence: Number("double"), // required
 * //           },
 * //           claimsTrueScenario: { // AutomatedReasoningCheckScenario
 * //             statements: [
 * //               {
 * //                 logic: "STRING_VALUE", // required
 * //                 naturalLanguage: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           supportingRules: [ // AutomatedReasoningCheckRuleList
 * //             { // AutomatedReasoningCheckRule
 * //               id: "STRING_VALUE",
 * //               policyVersionArn: "STRING_VALUE",
 * //             },
 * //           ],
 * //           logicWarning: { // AutomatedReasoningCheckLogicWarning
 * //             type: "ALWAYS_TRUE" || "ALWAYS_FALSE",
 * //             premises: [
 * //               {
 * //                 logic: "STRING_VALUE", // required
 * //                 naturalLanguage: "STRING_VALUE",
 * //               },
 * //             ],
 * //             claims: [
 * //               {
 * //                 logic: "STRING_VALUE", // required
 * //                 naturalLanguage: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         invalid: { // AutomatedReasoningCheckInvalidFinding
 * //           translation: {
 * //             premises: "<AutomatedReasoningLogicStatementList>",
 * //             claims: "<AutomatedReasoningLogicStatementList>", // required
 * //             untranslatedPremises: [
 * //               {
 * //                 text: "STRING_VALUE",
 * //               },
 * //             ],
 * //             untranslatedClaims: [
 * //               {
 * //                 text: "STRING_VALUE",
 * //               },
 * //             ],
 * //             confidence: Number("double"), // required
 * //           },
 * //           contradictingRules: [
 * //             {
 * //               id: "STRING_VALUE",
 * //               policyVersionArn: "STRING_VALUE",
 * //             },
 * //           ],
 * //           logicWarning: {
 * //             type: "ALWAYS_TRUE" || "ALWAYS_FALSE",
 * //             premises: "<AutomatedReasoningLogicStatementList>",
 * //             claims: "<AutomatedReasoningLogicStatementList>",
 * //           },
 * //         },
 * //         satisfiable: { // AutomatedReasoningCheckSatisfiableFinding
 * //           translation: {
 * //             premises: "<AutomatedReasoningLogicStatementList>",
 * //             claims: "<AutomatedReasoningLogicStatementList>", // required
 * //             untranslatedPremises: [
 * //               {
 * //                 text: "STRING_VALUE",
 * //               },
 * //             ],
 * //             untranslatedClaims: "<AutomatedReasoningCheckInputTextReferenceList>",
 * //             confidence: Number("double"), // required
 * //           },
 * //           claimsTrueScenario: {
 * //             statements: "<AutomatedReasoningLogicStatementList>",
 * //           },
 * //           claimsFalseScenario: {
 * //             statements: "<AutomatedReasoningLogicStatementList>",
 * //           },
 * //           logicWarning: {
 * //             type: "ALWAYS_TRUE" || "ALWAYS_FALSE",
 * //             premises: "<AutomatedReasoningLogicStatementList>",
 * //             claims: "<AutomatedReasoningLogicStatementList>",
 * //           },
 * //         },
 * //         impossible: { // AutomatedReasoningCheckImpossibleFinding
 * //           translation: {
 * //             premises: "<AutomatedReasoningLogicStatementList>",
 * //             claims: "<AutomatedReasoningLogicStatementList>", // required
 * //             untranslatedPremises: "<AutomatedReasoningCheckInputTextReferenceList>",
 * //             untranslatedClaims: "<AutomatedReasoningCheckInputTextReferenceList>",
 * //             confidence: Number("double"), // required
 * //           },
 * //           contradictingRules: [
 * //             {
 * //               id: "STRING_VALUE",
 * //               policyVersionArn: "STRING_VALUE",
 * //             },
 * //           ],
 * //           logicWarning: {
 * //             type: "ALWAYS_TRUE" || "ALWAYS_FALSE",
 * //             premises: "<AutomatedReasoningLogicStatementList>",
 * //             claims: "<AutomatedReasoningLogicStatementList>",
 * //           },
 * //         },
 * //         translationAmbiguous: { // AutomatedReasoningCheckTranslationAmbiguousFinding
 * //           options: [ // AutomatedReasoningCheckTranslationOptionList
 * //             { // AutomatedReasoningCheckTranslationOption
 * //               translations: [ // AutomatedReasoningCheckTranslationList
 * //                 {
 * //                   premises: "<AutomatedReasoningLogicStatementList>",
 * //                   claims: "<AutomatedReasoningLogicStatementList>", // required
 * //                   untranslatedPremises: "<AutomatedReasoningCheckInputTextReferenceList>",
 * //                   untranslatedClaims: "<AutomatedReasoningCheckInputTextReferenceList>",
 * //                   confidence: Number("double"), // required
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           differenceScenarios: [ // AutomatedReasoningCheckDifferenceScenarioList
 * //             {
 * //               statements: "<AutomatedReasoningLogicStatementList>",
 * //             },
 * //           ],
 * //         },
 * //         tooComplex: {},
 * //         noTranslations: {},
 * //       },
 * //     ],
 * //     testRunResult: "PASSED" || "FAILED",
 * //     aggregatedTestFindingsResult: "VALID" || "INVALID" || "SATISFIABLE" || "IMPOSSIBLE" || "TRANSLATION_AMBIGUOUS" || "TOO_COMPLEX" || "NO_TRANSLATION",
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAutomatedReasoningPolicyTestResultCommandInput - {@link GetAutomatedReasoningPolicyTestResultCommandInput}
 * @returns {@link GetAutomatedReasoningPolicyTestResultCommandOutput}
 * @see {@link GetAutomatedReasoningPolicyTestResultCommandInput} for command's `input` shape.
 * @see {@link GetAutomatedReasoningPolicyTestResultCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class GetAutomatedReasoningPolicyTestResultCommand extends $Command
  .classBuilder<
    GetAutomatedReasoningPolicyTestResultCommandInput,
    GetAutomatedReasoningPolicyTestResultCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyTestResult", {})
  .n("BedrockClient", "GetAutomatedReasoningPolicyTestResultCommand")
  .f(void 0, GetAutomatedReasoningPolicyTestResultResponseFilterSensitiveLog)
  .ser(se_GetAutomatedReasoningPolicyTestResultCommand)
  .de(de_GetAutomatedReasoningPolicyTestResultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAutomatedReasoningPolicyTestResultRequest;
      output: GetAutomatedReasoningPolicyTestResultResponse;
    };
    sdk: {
      input: GetAutomatedReasoningPolicyTestResultCommandInput;
      output: GetAutomatedReasoningPolicyTestResultCommandOutput;
    };
  };
}
