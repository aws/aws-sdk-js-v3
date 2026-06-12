// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetRecommendationRequest, GetRecommendationResponse } from "../models/models_0";
import { GetRecommendation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationCommand}.
 */
export interface GetRecommendationCommandInput extends GetRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationCommand}.
 */
export interface GetRecommendationCommandOutput extends GetRecommendationResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a recommendation, including its configuration, status, and results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetRecommendationCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetRecommendationCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetRecommendationRequest
 *   recommendationId: "STRING_VALUE", // required
 * };
 * const command = new GetRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationResponse
 * //   recommendationId: "STRING_VALUE", // required
 * //   recommendationArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   type: "SYSTEM_PROMPT_RECOMMENDATION" || "TOOL_DESCRIPTION_RECOMMENDATION", // required
 * //   recommendationConfig: { // RecommendationConfig Union: only one key present
 * //     systemPromptRecommendationConfig: { // SystemPromptRecommendationConfig
 * //       systemPrompt: { // SystemPromptConfig Union: only one key present
 * //         text: "STRING_VALUE",
 * //         configurationBundle: { // SystemPromptConfigurationBundle
 * //           bundleArn: "STRING_VALUE", // required
 * //           versionId: "STRING_VALUE", // required
 * //           systemPromptJsonPath: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       agentTraces: { // AgentTracesConfig Union: only one key present
 * //         sessionSpans: [ // Spans
 * //           "DOCUMENT_VALUE",
 * //         ],
 * //         cloudwatchLogs: { // CloudWatchLogsTraceConfig
 * //           logGroupArns: [ // LogGroupArnList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           serviceNames: [ // ServiceNameList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           startTime: new Date("TIMESTAMP"), // required
 * //           endTime: new Date("TIMESTAMP"), // required
 * //           rule: { // CloudWatchLogsRule
 * //             filters: [ // CloudWatchLogsFilterList
 * //               { // CloudWatchLogsFilter
 * //                 key: "STRING_VALUE", // required
 * //                 operator: "Equals" || "NotEquals" || "GreaterThan" || "LessThan" || "GreaterThanOrEqual" || "LessThanOrEqual" || "Contains" || "NotContains", // required
 * //                 value: { // FilterValue Union: only one key present
 * //                   stringValue: "STRING_VALUE",
 * //                   doubleValue: Number("double"),
 * //                   booleanValue: true || false,
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         batchEvaluation: { // BatchEvaluationTraceConfig
 * //           batchEvaluationArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       evaluationConfig: { // RecommendationEvaluationConfig
 * //         evaluators: [ // RecommendationEvaluatorList // required
 * //           { // RecommendationEvaluatorReference
 * //             evaluatorArn: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     toolDescriptionRecommendationConfig: { // ToolDescriptionRecommendationConfig
 * //       toolDescription: { // ToolDescriptionSource Union: only one key present
 * //         toolDescriptionText: { // ToolDescriptionTextInput
 * //           tools: [ // ToolDescriptionList // required
 * //             { // ToolDescriptionInput
 * //               toolName: "STRING_VALUE", // required
 * //               toolDescription: { // ToolDescriptionConfig Union: only one key present
 * //                 text: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         configurationBundle: { // ToolDescriptionConfigurationBundle
 * //           bundleArn: "STRING_VALUE", // required
 * //           versionId: "STRING_VALUE", // required
 * //           tools: [ // ConfigurationBundleToolEntryList // required
 * //             { // ConfigurationBundleToolEntry
 * //               toolName: "STRING_VALUE", // required
 * //               toolDescriptionJsonPath: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       agentTraces: {//  Union: only one key present
 * //         sessionSpans: [
 * //           "DOCUMENT_VALUE",
 * //         ],
 * //         cloudwatchLogs: {
 * //           logGroupArns: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           serviceNames: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           startTime: new Date("TIMESTAMP"), // required
 * //           endTime: new Date("TIMESTAMP"), // required
 * //           rule: {
 * //             filters: [
 * //               {
 * //                 key: "STRING_VALUE", // required
 * //                 operator: "Equals" || "NotEquals" || "GreaterThan" || "LessThan" || "GreaterThanOrEqual" || "LessThanOrEqual" || "Contains" || "NotContains", // required
 * //                 value: {//  Union: only one key present
 * //                   stringValue: "STRING_VALUE",
 * //                   doubleValue: Number("double"),
 * //                   booleanValue: true || false,
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         batchEvaluation: {
 * //           batchEvaluationArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   },
 * //   status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "DELETING", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   recommendationResult: { // RecommendationResult Union: only one key present
 * //     systemPromptRecommendationResult: { // SystemPromptRecommendationResult
 * //       recommendedSystemPrompt: "STRING_VALUE",
 * //       configurationBundle: { // RecommendationResultConfigurationBundle
 * //         bundleArn: "STRING_VALUE", // required
 * //         versionId: "STRING_VALUE", // required
 * //       },
 * //       explanation: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //     toolDescriptionRecommendationResult: { // ToolDescriptionRecommendationResult
 * //       tools: [ // ToolDescriptionResultList
 * //         { // ToolDescriptionOutput
 * //           toolName: "STRING_VALUE", // required
 * //           recommendedToolDescription: "STRING_VALUE",
 * //           explanation: "STRING_VALUE",
 * //         },
 * //       ],
 * //       configurationBundle: {
 * //         bundleArn: "STRING_VALUE", // required
 * //         versionId: "STRING_VALUE", // required
 * //       },
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * //   kmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRecommendationCommandInput - {@link GetRecommendationCommandInput}
 * @returns {@link GetRecommendationCommandOutput}
 * @see {@link GetRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class GetRecommendationCommand extends $Command
  .classBuilder<
    GetRecommendationCommandInput,
    GetRecommendationCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "GetRecommendation", {})
  .n("BedrockAgentCoreClient", "GetRecommendationCommand")
  .sc(GetRecommendation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommendationRequest;
      output: GetRecommendationResponse;
    };
    sdk: {
      input: GetRecommendationCommandInput;
      output: GetRecommendationCommandOutput;
    };
  };
}
