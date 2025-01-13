// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetEvaluationJobRequest,
  GetEvaluationJobRequestFilterSensitiveLog,
  GetEvaluationJobResponse,
  GetEvaluationJobResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetEvaluationJobCommand, se_GetEvaluationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEvaluationJobCommand}.
 */
export interface GetEvaluationJobCommandInput extends GetEvaluationJobRequest {}
/**
 * @public
 *
 * The output of {@link GetEvaluationJobCommand}.
 */
export interface GetEvaluationJobCommandOutput extends GetEvaluationJobResponse, __MetadataBearer {}

/**
 * <p>Gets information about an evaluation job, such as the status of the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetEvaluationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetEvaluationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // GetEvaluationJobRequest
 *   jobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetEvaluationJobCommand(input);
 * const response = await client.send(command);
 * // { // GetEvaluationJobResponse
 * //   jobName: "STRING_VALUE", // required
 * //   status: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped" || "Deleting", // required
 * //   jobArn: "STRING_VALUE", // required
 * //   jobDescription: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE", // required
 * //   customerEncryptionKeyId: "STRING_VALUE",
 * //   jobType: "Human" || "Automated", // required
 * //   applicationType: "ModelEvaluation" || "RagEvaluation",
 * //   evaluationConfig: { // EvaluationConfig Union: only one key present
 * //     automated: { // AutomatedEvaluationConfig
 * //       datasetMetricConfigs: [ // EvaluationDatasetMetricConfigs // required
 * //         { // EvaluationDatasetMetricConfig
 * //           taskType: "Summarization" || "Classification" || "QuestionAndAnswer" || "Generation" || "Custom", // required
 * //           dataset: { // EvaluationDataset
 * //             name: "STRING_VALUE", // required
 * //             datasetLocation: { // EvaluationDatasetLocation Union: only one key present
 * //               s3Uri: "STRING_VALUE",
 * //             },
 * //           },
 * //           metricNames: [ // EvaluationMetricNames // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       evaluatorModelConfig: { // EvaluatorModelConfig Union: only one key present
 * //         bedrockEvaluatorModels: [ // BedrockEvaluatorModels
 * //           { // BedrockEvaluatorModel
 * //             modelIdentifier: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     human: { // HumanEvaluationConfig
 * //       humanWorkflowConfig: { // HumanWorkflowConfig
 * //         flowDefinitionArn: "STRING_VALUE", // required
 * //         instructions: "STRING_VALUE",
 * //       },
 * //       customMetrics: [ // HumanEvaluationCustomMetrics
 * //         { // HumanEvaluationCustomMetric
 * //           name: "STRING_VALUE", // required
 * //           description: "STRING_VALUE",
 * //           ratingMethod: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       datasetMetricConfigs: [ // required
 * //         {
 * //           taskType: "Summarization" || "Classification" || "QuestionAndAnswer" || "Generation" || "Custom", // required
 * //           dataset: {
 * //             name: "STRING_VALUE", // required
 * //             datasetLocation: {//  Union: only one key present
 * //               s3Uri: "STRING_VALUE",
 * //             },
 * //           },
 * //           metricNames: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   inferenceConfig: { // EvaluationInferenceConfig Union: only one key present
 * //     models: [ // EvaluationModelConfigs
 * //       { // EvaluationModelConfig Union: only one key present
 * //         bedrockModel: { // EvaluationBedrockModel
 * //           modelIdentifier: "STRING_VALUE", // required
 * //           inferenceParams: "STRING_VALUE",
 * //           performanceConfig: { // PerformanceConfiguration
 * //             latency: "standard" || "optimized",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     ragConfigs: [ // RagConfigs
 * //       { // RAGConfig Union: only one key present
 * //         knowledgeBaseConfig: { // KnowledgeBaseConfig Union: only one key present
 * //           retrieveConfig: { // RetrieveConfig
 * //             knowledgeBaseId: "STRING_VALUE", // required
 * //             knowledgeBaseRetrievalConfiguration: { // KnowledgeBaseRetrievalConfiguration
 * //               vectorSearchConfiguration: { // KnowledgeBaseVectorSearchConfiguration
 * //                 numberOfResults: Number("int"),
 * //                 overrideSearchType: "HYBRID" || "SEMANTIC",
 * //                 filter: { // RetrievalFilter Union: only one key present
 * //                   equals: { // FilterAttribute
 * //                     key: "STRING_VALUE", // required
 * //                     value: "DOCUMENT_VALUE", // required
 * //                   },
 * //                   notEquals: {
 * //                     key: "STRING_VALUE", // required
 * //                     value: "DOCUMENT_VALUE", // required
 * //                   },
 * //                   greaterThan: {
 * //                     key: "STRING_VALUE", // required
 * //                     value: "DOCUMENT_VALUE", // required
 * //                   },
 * //                   greaterThanOrEquals: {
 * //                     key: "STRING_VALUE", // required
 * //                     value: "DOCUMENT_VALUE", // required
 * //                   },
 * //                   lessThan: {
 * //                     key: "STRING_VALUE", // required
 * //                     value: "DOCUMENT_VALUE", // required
 * //                   },
 * //                   lessThanOrEquals: "<FilterAttribute>",
 * //                   in: "<FilterAttribute>",
 * //                   notIn: "<FilterAttribute>",
 * //                   startsWith: "<FilterAttribute>",
 * //                   listContains: "<FilterAttribute>",
 * //                   stringContains: "<FilterAttribute>",
 * //                   andAll: [ // RetrievalFilterList
 * //                     {//  Union: only one key present
 * //                       equals: "<FilterAttribute>",
 * //                       notEquals: "<FilterAttribute>",
 * //                       greaterThan: "<FilterAttribute>",
 * //                       greaterThanOrEquals: "<FilterAttribute>",
 * //                       lessThan: "<FilterAttribute>",
 * //                       lessThanOrEquals: "<FilterAttribute>",
 * //                       in: "<FilterAttribute>",
 * //                       notIn: "<FilterAttribute>",
 * //                       startsWith: "<FilterAttribute>",
 * //                       listContains: "<FilterAttribute>",
 * //                       stringContains: "<FilterAttribute>",
 * //                       andAll: [
 * //                         "<RetrievalFilter>",
 * //                       ],
 * //                       orAll: [
 * //                         "<RetrievalFilter>",
 * //                       ],
 * //                     },
 * //                   ],
 * //                   orAll: [
 * //                     "<RetrievalFilter>",
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //           },
 * //           retrieveAndGenerateConfig: { // RetrieveAndGenerateConfiguration
 * //             type: "KNOWLEDGE_BASE" || "EXTERNAL_SOURCES", // required
 * //             knowledgeBaseConfiguration: { // KnowledgeBaseRetrieveAndGenerateConfiguration
 * //               knowledgeBaseId: "STRING_VALUE", // required
 * //               modelArn: "STRING_VALUE", // required
 * //               retrievalConfiguration: {
 * //                 vectorSearchConfiguration: {
 * //                   numberOfResults: Number("int"),
 * //                   overrideSearchType: "HYBRID" || "SEMANTIC",
 * //                   filter: "<RetrievalFilter>",
 * //                 },
 * //               },
 * //               generationConfiguration: { // GenerationConfiguration
 * //                 promptTemplate: { // PromptTemplate
 * //                   textPromptTemplate: "STRING_VALUE",
 * //                 },
 * //                 guardrailConfiguration: { // GuardrailConfiguration
 * //                   guardrailId: "STRING_VALUE", // required
 * //                   guardrailVersion: "STRING_VALUE", // required
 * //                 },
 * //                 kbInferenceConfig: { // KbInferenceConfig
 * //                   textInferenceConfig: { // TextInferenceConfig
 * //                     temperature: Number("float"),
 * //                     topP: Number("float"),
 * //                     maxTokens: Number("int"),
 * //                     stopSequences: [ // RAGStopSequences
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 },
 * //                 additionalModelRequestFields: { // AdditionalModelRequestFields
 * //                   "<keys>": "DOCUMENT_VALUE",
 * //                 },
 * //               },
 * //               orchestrationConfiguration: { // OrchestrationConfiguration
 * //                 queryTransformationConfiguration: { // QueryTransformationConfiguration
 * //                   type: "QUERY_DECOMPOSITION", // required
 * //                 },
 * //               },
 * //             },
 * //             externalSourcesConfiguration: { // ExternalSourcesRetrieveAndGenerateConfiguration
 * //               modelArn: "STRING_VALUE", // required
 * //               sources: [ // ExternalSources // required
 * //                 { // ExternalSource
 * //                   sourceType: "S3" || "BYTE_CONTENT", // required
 * //                   s3Location: { // S3ObjectDoc
 * //                     uri: "STRING_VALUE", // required
 * //                   },
 * //                   byteContent: { // ByteContentDoc
 * //                     identifier: "STRING_VALUE", // required
 * //                     contentType: "STRING_VALUE", // required
 * //                     data: new Uint8Array(), // required
 * //                   },
 * //                 },
 * //               ],
 * //               generationConfiguration: { // ExternalSourcesGenerationConfiguration
 * //                 promptTemplate: {
 * //                   textPromptTemplate: "STRING_VALUE",
 * //                 },
 * //                 guardrailConfiguration: {
 * //                   guardrailId: "STRING_VALUE", // required
 * //                   guardrailVersion: "STRING_VALUE", // required
 * //                 },
 * //                 kbInferenceConfig: {
 * //                   textInferenceConfig: {
 * //                     temperature: Number("float"),
 * //                     topP: Number("float"),
 * //                     maxTokens: Number("int"),
 * //                     stopSequences: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 },
 * //                 additionalModelRequestFields: {
 * //                   "<keys>": "DOCUMENT_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   outputDataConfig: { // EvaluationOutputDataConfig
 * //     s3Uri: "STRING_VALUE", // required
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * //   failureMessages: [ // ErrorMessages
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEvaluationJobCommandInput - {@link GetEvaluationJobCommandInput}
 * @returns {@link GetEvaluationJobCommandOutput}
 * @see {@link GetEvaluationJobCommandInput} for command's `input` shape.
 * @see {@link GetEvaluationJobCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetEvaluationJobCommand extends $Command
  .classBuilder<
    GetEvaluationJobCommandInput,
    GetEvaluationJobCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "GetEvaluationJob", {})
  .n("BedrockClient", "GetEvaluationJobCommand")
  .f(GetEvaluationJobRequestFilterSensitiveLog, GetEvaluationJobResponseFilterSensitiveLog)
  .ser(se_GetEvaluationJobCommand)
  .de(de_GetEvaluationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEvaluationJobRequest;
      output: GetEvaluationJobResponse;
    };
    sdk: {
      input: GetEvaluationJobCommandInput;
      output: GetEvaluationJobCommandOutput;
    };
  };
}
