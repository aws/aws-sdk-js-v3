// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import {
  GetEventPredictionMetadataRequest,
  GetEventPredictionMetadataResult,
  GetEventPredictionMetadataResultFilterSensitiveLog,
} from "../models/models_0";
import { de_GetEventPredictionMetadataCommand, se_GetEventPredictionMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventPredictionMetadataCommand}.
 */
export interface GetEventPredictionMetadataCommandInput extends GetEventPredictionMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetEventPredictionMetadataCommand}.
 */
export interface GetEventPredictionMetadataCommandOutput extends GetEventPredictionMetadataResult, __MetadataBearer {}

/**
 * <p>
 * Gets details of the past fraud predictions for the specified event ID, event type, detector ID, and detector version ID that was generated in the specified time period.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetEventPredictionMetadataCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetEventPredictionMetadataCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // GetEventPredictionMetadataRequest
 *   eventId: "STRING_VALUE", // required
 *   eventTypeName: "STRING_VALUE", // required
 *   detectorId: "STRING_VALUE", // required
 *   detectorVersionId: "STRING_VALUE", // required
 *   predictionTimestamp: "STRING_VALUE", // required
 * };
 * const command = new GetEventPredictionMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetEventPredictionMetadataResult
 * //   eventId: "STRING_VALUE",
 * //   eventTypeName: "STRING_VALUE",
 * //   entityId: "STRING_VALUE",
 * //   entityType: "STRING_VALUE",
 * //   eventTimestamp: "STRING_VALUE",
 * //   detectorId: "STRING_VALUE",
 * //   detectorVersionId: "STRING_VALUE",
 * //   detectorVersionStatus: "STRING_VALUE",
 * //   eventVariables: [ // ListOfEventVariableSummaries
 * //     { // EventVariableSummary
 * //       name: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //       source: "STRING_VALUE",
 * //     },
 * //   ],
 * //   rules: [ // EvaluatedRuleList
 * //     { // EvaluatedRule
 * //       ruleId: "STRING_VALUE",
 * //       ruleVersion: "STRING_VALUE",
 * //       expression: "STRING_VALUE",
 * //       expressionWithValues: "STRING_VALUE",
 * //       outcomes: [ // ListOfStrings
 * //         "STRING_VALUE",
 * //       ],
 * //       evaluated: true || false,
 * //       matched: true || false,
 * //     },
 * //   ],
 * //   ruleExecutionMode: "ALL_MATCHED" || "FIRST_MATCHED",
 * //   outcomes: [
 * //     "STRING_VALUE",
 * //   ],
 * //   evaluatedModelVersions: [ // ListOfEvaluatedModelVersions
 * //     { // EvaluatedModelVersion
 * //       modelId: "STRING_VALUE",
 * //       modelVersion: "STRING_VALUE",
 * //       modelType: "STRING_VALUE",
 * //       evaluations: [ // ListOfModelVersionEvaluations
 * //         { // ModelVersionEvaluation
 * //           outputVariableName: "STRING_VALUE",
 * //           evaluationScore: "STRING_VALUE",
 * //           predictionExplanations: { // PredictionExplanations
 * //             variableImpactExplanations: [ // listOfVariableImpactExplanations
 * //               { // VariableImpactExplanation
 * //                 eventVariableName: "STRING_VALUE",
 * //                 relativeImpact: "STRING_VALUE",
 * //                 logOddsImpact: Number("float"),
 * //               },
 * //             ],
 * //             aggregatedVariablesImpactExplanations: [ // ListOfAggregatedVariablesImpactExplanations
 * //               { // AggregatedVariablesImpactExplanation
 * //                 eventVariableNames: "<ListOfStrings>",
 * //                 relativeImpact: "STRING_VALUE",
 * //                 logOddsImpact: Number("float"),
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   evaluatedExternalModels: [ // ListOfEvaluatedExternalModels
 * //     { // EvaluatedExternalModel
 * //       modelEndpoint: "STRING_VALUE",
 * //       useEventVariables: true || false,
 * //       inputVariables: { // MapOfStrings
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       outputVariables: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   predictionTimestamp: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEventPredictionMetadataCommandInput - {@link GetEventPredictionMetadataCommandInput}
 * @returns {@link GetEventPredictionMetadataCommandOutput}
 * @see {@link GetEventPredictionMetadataCommandInput} for command's `input` shape.
 * @see {@link GetEventPredictionMetadataCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class GetEventPredictionMetadataCommand extends $Command
  .classBuilder<
    GetEventPredictionMetadataCommandInput,
    GetEventPredictionMetadataCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "GetEventPredictionMetadata", {})
  .n("FraudDetectorClient", "GetEventPredictionMetadataCommand")
  .f(void 0, GetEventPredictionMetadataResultFilterSensitiveLog)
  .ser(se_GetEventPredictionMetadataCommand)
  .de(de_GetEventPredictionMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventPredictionMetadataRequest;
      output: GetEventPredictionMetadataResult;
    };
    sdk: {
      input: GetEventPredictionMetadataCommandInput;
      output: GetEventPredictionMetadataCommandOutput;
    };
  };
}
