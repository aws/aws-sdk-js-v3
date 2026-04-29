// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetBatchEvaluationRequest, GetBatchEvaluationResponse } from "../models/models_0";
import { GetBatchEvaluation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBatchEvaluationCommand}.
 */
export interface GetBatchEvaluationCommandInput extends GetBatchEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link GetBatchEvaluationCommand}.
 */
export interface GetBatchEvaluationCommandOutput extends GetBatchEvaluationResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a batch evaluation, including its status, configuration, results, and any error details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetBatchEvaluationCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetBatchEvaluationCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetBatchEvaluationRequest
 *   batchEvaluationId: "STRING_VALUE", // required
 * };
 * const command = new GetBatchEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // GetBatchEvaluationResponse
 * //   batchEvaluationId: "STRING_VALUE", // required
 * //   batchEvaluationArn: "STRING_VALUE", // required
 * //   batchEvaluationName: "STRING_VALUE", // required
 * //   status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED" || "STOPPING" || "STOPPED" || "DELETING", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   evaluators: [ // EvaluatorList
 * //     { // Evaluator
 * //       evaluatorId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   dataSourceConfig: { // DataSourceConfig Union: only one key present
 * //     cloudWatchLogs: { // CloudWatchLogsSource
 * //       serviceNames: [ // EvaluationStringList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       logGroupNames: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       filterConfig: { // CloudWatchFilterConfig
 * //         sessionIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         timeRange: { // SessionFilterConfig
 * //           startTime: new Date("TIMESTAMP"),
 * //           endTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //     },
 * //   },
 * //   outputConfig: { // OutputConfig Union: only one key present
 * //     cloudWatchConfig: { // CloudWatchOutputConfig
 * //       logGroupName: "STRING_VALUE", // required
 * //       logStreamName: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   evaluationResults: { // EvaluationJobResults
 * //     numberOfSessionsCompleted: Number("int"),
 * //     numberOfSessionsInProgress: Number("int"),
 * //     numberOfSessionsFailed: Number("int"),
 * //     totalNumberOfSessions: Number("int"),
 * //     numberOfSessionsIgnored: Number("int"),
 * //     evaluatorSummaries: [ // EvaluatorSummaryList
 * //       { // EvaluatorSummary
 * //         evaluatorId: "STRING_VALUE",
 * //         statistics: { // EvaluatorStatistics
 * //           averageScore: Number("double"),
 * //         },
 * //         totalEvaluated: Number("int"),
 * //         totalFailed: Number("int"),
 * //       },
 * //     ],
 * //   },
 * //   errorDetails: [ // ErrorDetailsList
 * //     "STRING_VALUE",
 * //   ],
 * //   description: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetBatchEvaluationCommandInput - {@link GetBatchEvaluationCommandInput}
 * @returns {@link GetBatchEvaluationCommandOutput}
 * @see {@link GetBatchEvaluationCommandInput} for command's `input` shape.
 * @see {@link GetBatchEvaluationCommandOutput} for command's `response` shape.
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
export class GetBatchEvaluationCommand extends $Command
  .classBuilder<
    GetBatchEvaluationCommandInput,
    GetBatchEvaluationCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "GetBatchEvaluation", {})
  .n("BedrockAgentCoreClient", "GetBatchEvaluationCommand")
  .sc(GetBatchEvaluation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBatchEvaluationRequest;
      output: GetBatchEvaluationResponse;
    };
    sdk: {
      input: GetBatchEvaluationCommandInput;
      output: GetBatchEvaluationCommandOutput;
    };
  };
}
