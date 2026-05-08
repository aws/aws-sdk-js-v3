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
import type { StartBatchEvaluationRequest, StartBatchEvaluationResponse } from "../models/models_0";
import { StartBatchEvaluation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartBatchEvaluationCommand}.
 */
export interface StartBatchEvaluationCommandInput extends StartBatchEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link StartBatchEvaluationCommand}.
 */
export interface StartBatchEvaluationCommandOutput extends StartBatchEvaluationResponse, __MetadataBearer {}

/**
 * <p>Starts a batch evaluation job that evaluates agent performance across multiple sessions. Batch evaluations pull agent traces from CloudWatch Logs or an existing online evaluation configuration and run specified evaluators and insights against them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, StartBatchEvaluationCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, StartBatchEvaluationCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // StartBatchEvaluationRequest
 *   batchEvaluationName: "STRING_VALUE", // required
 *   evaluators: [ // EvaluatorList
 *     { // Evaluator
 *       evaluatorId: "STRING_VALUE", // required
 *     },
 *   ],
 *   dataSourceConfig: { // DataSourceConfig Union: only one key present
 *     cloudWatchLogs: { // CloudWatchLogsSource
 *       serviceNames: [ // EvaluationStringList // required
 *         "STRING_VALUE",
 *       ],
 *       logGroupNames: [ // required
 *         "STRING_VALUE",
 *       ],
 *       filterConfig: { // CloudWatchFilterConfig
 *         sessionIds: [
 *           "STRING_VALUE",
 *         ],
 *         timeRange: { // SessionFilterConfig
 *           startTime: new Date("TIMESTAMP"),
 *           endTime: new Date("TIMESTAMP"),
 *         },
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   evaluationMetadata: { // EvaluationMetadata Union: only one key present
 *     sessionMetadata: [ // SessionMetadataList
 *       { // SessionMetadataShape
 *         sessionId: "STRING_VALUE", // required
 *         testScenarioId: "STRING_VALUE",
 *         groundTruth: { // GroundTruthSource Union: only one key present
 *           inline: { // InlineGroundTruth
 *             assertions: [ // EvaluationContentList
 *               { // EvaluationContent Union: only one key present
 *                 text: "STRING_VALUE",
 *               },
 *             ],
 *             expectedTrajectory: { // EvaluationExpectedTrajectory
 *               toolNames: [ // EvaluationToolNames
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             turns: [ // GroundTruthTurnList
 *               { // GroundTruthTurn
 *                 input: { // GroundTruthTurnInput Union: only one key present
 *                   prompt: "STRING_VALUE",
 *                 },
 *                 expectedResponse: {//  Union: only one key present
 *                   text: "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *           },
 *         },
 *         metadata: { // StringMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new StartBatchEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // StartBatchEvaluationResponse
 * //   batchEvaluationId: "STRING_VALUE", // required
 * //   batchEvaluationArn: "STRING_VALUE", // required
 * //   batchEvaluationName: "STRING_VALUE", // required
 * //   evaluators: [ // EvaluatorList
 * //     { // Evaluator
 * //       evaluatorId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED" || "STOPPING" || "STOPPED" || "DELETING", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   outputConfig: { // OutputConfig Union: only one key present
 * //     cloudWatchConfig: { // CloudWatchOutputConfig
 * //       logGroupName: "STRING_VALUE", // required
 * //       logStreamName: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartBatchEvaluationCommandInput - {@link StartBatchEvaluationCommandInput}
 * @returns {@link StartBatchEvaluationCommandOutput}
 * @see {@link StartBatchEvaluationCommandInput} for command's `input` shape.
 * @see {@link StartBatchEvaluationCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
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
export class StartBatchEvaluationCommand extends $Command
  .classBuilder<
    StartBatchEvaluationCommandInput,
    StartBatchEvaluationCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "StartBatchEvaluation", {})
  .n("BedrockAgentCoreClient", "StartBatchEvaluationCommand")
  .sc(StartBatchEvaluation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBatchEvaluationRequest;
      output: StartBatchEvaluationResponse;
    };
    sdk: {
      input: StartBatchEvaluationCommandInput;
      output: StartBatchEvaluationCommandOutput;
    };
  };
}
