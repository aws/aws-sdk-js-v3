// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartRecommendationRequest, StartRecommendationResponse } from "../models/models_0";
import { StartRecommendation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartRecommendationCommand}.
 */
export interface StartRecommendationCommandInput extends StartRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link StartRecommendationCommand}.
 */
export interface StartRecommendationCommandOutput extends StartRecommendationResponse, __MetadataBearer {}

/**
 * <p>Starts a recommendation job that analyzes agent traces and generates optimization suggestions for system prompts or tool descriptions to improve agent performance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, StartRecommendationCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, StartRecommendationCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // StartRecommendationRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   type: "SYSTEM_PROMPT_RECOMMENDATION" || "TOOL_DESCRIPTION_RECOMMENDATION", // required
 *   recommendationConfig: { // RecommendationConfig Union: only one key present
 *     systemPromptRecommendationConfig: { // SystemPromptRecommendationConfig
 *       systemPrompt: { // SystemPromptConfig Union: only one key present
 *         text: "STRING_VALUE",
 *         configurationBundle: { // SystemPromptConfigurationBundle
 *           bundleArn: "STRING_VALUE", // required
 *           versionId: "STRING_VALUE", // required
 *           systemPromptJsonPath: "STRING_VALUE", // required
 *         },
 *       },
 *       agentTraces: { // AgentTracesConfig Union: only one key present
 *         sessionSpans: [ // Spans
 *           "DOCUMENT_VALUE",
 *         ],
 *         cloudwatchLogs: { // CloudWatchLogsTraceConfig
 *           logGroupArns: [ // LogGroupArnList // required
 *             "STRING_VALUE",
 *           ],
 *           serviceNames: [ // ServiceNameList // required
 *             "STRING_VALUE",
 *           ],
 *           startTime: new Date("TIMESTAMP"), // required
 *           endTime: new Date("TIMESTAMP"), // required
 *           rule: { // CloudWatchLogsRule
 *             filters: [ // CloudWatchLogsFilterList
 *               { // CloudWatchLogsFilter
 *                 key: "STRING_VALUE", // required
 *                 operator: "Equals" || "NotEquals" || "GreaterThan" || "LessThan" || "GreaterThanOrEqual" || "LessThanOrEqual" || "Contains" || "NotContains", // required
 *                 value: { // FilterValue Union: only one key present
 *                   stringValue: "STRING_VALUE",
 *                   doubleValue: Number("double"),
 *                   booleanValue: true || false,
 *                 },
 *               },
 *             ],
 *           },
 *         },
 *         batchEvaluation: { // BatchEvaluationTraceConfig
 *           batchEvaluationArn: "STRING_VALUE", // required
 *         },
 *       },
 *       evaluationConfig: { // RecommendationEvaluationConfig
 *         evaluators: [ // RecommendationEvaluatorList // required
 *           { // RecommendationEvaluatorReference
 *             evaluatorArn: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *     toolDescriptionRecommendationConfig: { // ToolDescriptionRecommendationConfig
 *       toolDescription: { // ToolDescriptionSource Union: only one key present
 *         toolDescriptionText: { // ToolDescriptionTextInput
 *           tools: [ // ToolDescriptionList // required
 *             { // ToolDescriptionInput
 *               toolName: "STRING_VALUE", // required
 *               toolDescription: { // ToolDescriptionConfig Union: only one key present
 *                 text: "STRING_VALUE",
 *               },
 *             },
 *           ],
 *         },
 *         configurationBundle: { // ToolDescriptionConfigurationBundle
 *           bundleArn: "STRING_VALUE", // required
 *           versionId: "STRING_VALUE", // required
 *           tools: [ // ConfigurationBundleToolEntryList // required
 *             { // ConfigurationBundleToolEntry
 *               toolName: "STRING_VALUE", // required
 *               toolDescriptionJsonPath: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *       agentTraces: {//  Union: only one key present
 *         sessionSpans: [
 *           "DOCUMENT_VALUE",
 *         ],
 *         cloudwatchLogs: {
 *           logGroupArns: [ // required
 *             "STRING_VALUE",
 *           ],
 *           serviceNames: [ // required
 *             "STRING_VALUE",
 *           ],
 *           startTime: new Date("TIMESTAMP"), // required
 *           endTime: new Date("TIMESTAMP"), // required
 *           rule: {
 *             filters: [
 *               {
 *                 key: "STRING_VALUE", // required
 *                 operator: "Equals" || "NotEquals" || "GreaterThan" || "LessThan" || "GreaterThanOrEqual" || "LessThanOrEqual" || "Contains" || "NotContains", // required
 *                 value: {//  Union: only one key present
 *                   stringValue: "STRING_VALUE",
 *                   doubleValue: Number("double"),
 *                   booleanValue: true || false,
 *                 },
 *               },
 *             ],
 *           },
 *         },
 *         batchEvaluation: {
 *           batchEvaluationArn: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   },
 *   kmsKeyArn: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // StartRecommendationResponse
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
 * // };
 *
 * ```
 *
 * @param StartRecommendationCommandInput - {@link StartRecommendationCommandInput}
 * @returns {@link StartRecommendationCommandOutput}
 * @see {@link StartRecommendationCommandInput} for command's `input` shape.
 * @see {@link StartRecommendationCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
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
export class StartRecommendationCommand extends command<StartRecommendationCommandInput, StartRecommendationCommandOutput>(
  _ep0,
  _mw0,
  "StartRecommendation",
  StartRecommendation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRecommendationRequest;
      output: StartRecommendationResponse;
    };
    sdk: {
      input: StartRecommendationCommandInput;
      output: StartRecommendationCommandOutput;
    };
  };
}
