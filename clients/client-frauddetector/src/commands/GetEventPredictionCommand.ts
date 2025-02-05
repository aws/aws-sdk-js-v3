// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import {
  GetEventPredictionRequest,
  GetEventPredictionRequestFilterSensitiveLog,
  GetEventPredictionResult,
} from "../models/models_0";
import { de_GetEventPredictionCommand, se_GetEventPredictionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventPredictionCommand}.
 */
export interface GetEventPredictionCommandInput extends GetEventPredictionRequest {}
/**
 * @public
 *
 * The output of {@link GetEventPredictionCommand}.
 */
export interface GetEventPredictionCommandOutput extends GetEventPredictionResult, __MetadataBearer {}

/**
 * <p>Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetEventPredictionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetEventPredictionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FraudDetectorClient(config);
 * const input = { // GetEventPredictionRequest
 *   detectorId: "STRING_VALUE", // required
 *   detectorVersionId: "STRING_VALUE",
 *   eventId: "STRING_VALUE", // required
 *   eventTypeName: "STRING_VALUE", // required
 *   entities: [ // listOfEntities // required
 *     { // Entity
 *       entityType: "STRING_VALUE", // required
 *       entityId: "STRING_VALUE", // required
 *     },
 *   ],
 *   eventTimestamp: "STRING_VALUE", // required
 *   eventVariables: { // EventVariableMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   externalModelEndpointDataBlobs: { // ExternalModelEndpointDataBlobMap
 *     "<keys>": { // ModelEndpointDataBlob
 *       byteBuffer: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       contentType: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new GetEventPredictionCommand(input);
 * const response = await client.send(command);
 * // { // GetEventPredictionResult
 * //   modelScores: [ // ListOfModelScores
 * //     { // ModelScores
 * //       modelVersion: { // ModelVersion
 * //         modelId: "STRING_VALUE", // required
 * //         modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS", // required
 * //         modelVersionNumber: "STRING_VALUE", // required
 * //         arn: "STRING_VALUE",
 * //       },
 * //       scores: { // ModelPredictionMap
 * //         "<keys>": Number("float"),
 * //       },
 * //     },
 * //   ],
 * //   ruleResults: [ // ListOfRuleResults
 * //     { // RuleResult
 * //       ruleId: "STRING_VALUE",
 * //       outcomes: [ // ListOfStrings
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   externalModelOutputs: [ // ListOfExternalModelOutputs
 * //     { // ExternalModelOutputs
 * //       externalModel: { // ExternalModelSummary
 * //         modelEndpoint: "STRING_VALUE",
 * //         modelSource: "SAGEMAKER",
 * //       },
 * //       outputs: { // ExternalModelPredictionMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEventPredictionCommandInput - {@link GetEventPredictionCommandInput}
 * @returns {@link GetEventPredictionCommandOutput}
 * @see {@link GetEventPredictionCommandInput} for command's `input` shape.
 * @see {@link GetEventPredictionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An exception indicating there was a conflict during a delete operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>An exception indicating that the attached customer-owned (external) model threw an exception when Amazon Fraud Detector invoked the model.</p>
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
 * @public
 */
export class GetEventPredictionCommand extends $Command
  .classBuilder<
    GetEventPredictionCommandInput,
    GetEventPredictionCommandOutput,
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
  .s("AWSHawksNestServiceFacade", "GetEventPrediction", {})
  .n("FraudDetectorClient", "GetEventPredictionCommand")
  .f(GetEventPredictionRequestFilterSensitiveLog, void 0)
  .ser(se_GetEventPredictionCommand)
  .de(de_GetEventPredictionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventPredictionRequest;
      output: GetEventPredictionResult;
    };
    sdk: {
      input: GetEventPredictionCommandInput;
      output: GetEventPredictionCommandOutput;
    };
  };
}
