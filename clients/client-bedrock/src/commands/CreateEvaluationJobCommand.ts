// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateEvaluationJobRequest,
  CreateEvaluationJobRequestFilterSensitiveLog,
  CreateEvaluationJobResponse,
} from "../models/models_0";
import { de_CreateEvaluationJobCommand, se_CreateEvaluationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEvaluationJobCommand}.
 */
export interface CreateEvaluationJobCommandInput extends CreateEvaluationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateEvaluationJobCommand}.
 */
export interface CreateEvaluationJobCommandOutput extends CreateEvaluationJobResponse, __MetadataBearer {}

/**
 * <p>API operation for creating and managing Amazon Bedrock automatic model evaluation jobs and model evaluation jobs that use human workers. To learn more about the requirements for creating a model evaluation job see, <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html">Model evaluation</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateEvaluationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateEvaluationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // CreateEvaluationJobRequest
 *   jobName: "STRING_VALUE", // required
 *   jobDescription: "STRING_VALUE",
 *   clientRequestToken: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   customerEncryptionKeyId: "STRING_VALUE",
 *   jobTags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   evaluationConfig: { // EvaluationConfig Union: only one key present
 *     automated: { // AutomatedEvaluationConfig
 *       datasetMetricConfigs: [ // EvaluationDatasetMetricConfigs // required
 *         { // EvaluationDatasetMetricConfig
 *           taskType: "Summarization" || "Classification" || "QuestionAndAnswer" || "Generation" || "Custom", // required
 *           dataset: { // EvaluationDataset
 *             name: "STRING_VALUE", // required
 *             datasetLocation: { // EvaluationDatasetLocation Union: only one key present
 *               s3Uri: "STRING_VALUE",
 *             },
 *           },
 *           metricNames: [ // EvaluationMetricNames // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *     human: { // HumanEvaluationConfig
 *       humanWorkflowConfig: { // HumanWorkflowConfig
 *         flowDefinitionArn: "STRING_VALUE", // required
 *         instructions: "STRING_VALUE",
 *       },
 *       customMetrics: [ // HumanEvaluationCustomMetrics
 *         { // HumanEvaluationCustomMetric
 *           name: "STRING_VALUE", // required
 *           description: "STRING_VALUE",
 *           ratingMethod: "STRING_VALUE", // required
 *         },
 *       ],
 *       datasetMetricConfigs: [ // required
 *         {
 *           taskType: "Summarization" || "Classification" || "QuestionAndAnswer" || "Generation" || "Custom", // required
 *           dataset: {
 *             name: "STRING_VALUE", // required
 *             datasetLocation: {//  Union: only one key present
 *               s3Uri: "STRING_VALUE",
 *             },
 *           },
 *           metricNames: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   },
 *   inferenceConfig: { // EvaluationInferenceConfig Union: only one key present
 *     models: [ // EvaluationModelConfigs
 *       { // EvaluationModelConfig Union: only one key present
 *         bedrockModel: { // EvaluationBedrockModel
 *           modelIdentifier: "STRING_VALUE", // required
 *           inferenceParams: "STRING_VALUE", // required
 *         },
 *       },
 *     ],
 *   },
 *   outputDataConfig: { // EvaluationOutputDataConfig
 *     s3Uri: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateEvaluationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateEvaluationJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateEvaluationJobCommandInput - {@link CreateEvaluationJobCommandInput}
 * @returns {@link CreateEvaluationJobCommandOutput}
 * @see {@link CreateEvaluationJobCommandInput} for command's `input` shape.
 * @see {@link CreateEvaluationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
 * @public
 */
export class CreateEvaluationJobCommand extends $Command
  .classBuilder<
    CreateEvaluationJobCommandInput,
    CreateEvaluationJobCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "CreateEvaluationJob", {})
  .n("BedrockClient", "CreateEvaluationJobCommand")
  .f(CreateEvaluationJobRequestFilterSensitiveLog, void 0)
  .ser(se_CreateEvaluationJobCommand)
  .de(de_CreateEvaluationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEvaluationJobRequest;
      output: CreateEvaluationJobResponse;
    };
    sdk: {
      input: CreateEvaluationJobCommandInput;
      output: CreateEvaluationJobCommandOutput;
    };
  };
}
