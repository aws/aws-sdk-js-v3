// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBatchEvaluationsRequest, ListBatchEvaluationsResponse } from "../models/models_0";
import { ListBatchEvaluations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBatchEvaluationsCommand}.
 */
export interface ListBatchEvaluationsCommandInput extends ListBatchEvaluationsRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchEvaluationsCommand}.
 */
export interface ListBatchEvaluationsCommandOutput extends ListBatchEvaluationsResponse, __MetadataBearer {}

/**
 * <p>Lists all batch evaluations in the account, providing summary information about each evaluation's status and configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, ListBatchEvaluationsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, ListBatchEvaluationsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // ListBatchEvaluationsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBatchEvaluationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBatchEvaluationsResponse
 * //   batchEvaluations: [ // BatchEvaluationSummaryList // required
 * //     { // BatchEvaluationSummary
 * //       batchEvaluationId: "STRING_VALUE", // required
 * //       batchEvaluationArn: "STRING_VALUE", // required
 * //       batchEvaluationName: "STRING_VALUE", // required
 * //       status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED" || "STOPPING" || "STOPPED" || "DELETING", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       description: "STRING_VALUE",
 * //       evaluators: [ // EvaluatorList
 * //         { // Evaluator
 * //           evaluatorId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       insights: [ // InsightList
 * //         { // Insight
 * //           insightId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       evaluationResults: { // EvaluationJobResults
 * //         numberOfSessionsCompleted: Number("int"),
 * //         numberOfSessionsInProgress: Number("int"),
 * //         numberOfSessionsFailed: Number("int"),
 * //         totalNumberOfSessions: Number("int"),
 * //         numberOfSessionsIgnored: Number("int"),
 * //         evaluatorSummaries: [ // EvaluatorSummaryList
 * //           { // EvaluatorSummary
 * //             evaluatorId: "STRING_VALUE",
 * //             statistics: { // EvaluatorStatistics
 * //               averageScore: Number("double"),
 * //             },
 * //             totalEvaluated: Number("int"),
 * //             totalFailed: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       errorDetails: [ // ErrorDetailsList
 * //         "STRING_VALUE",
 * //       ],
 * //       kmsKeyArn: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBatchEvaluationsCommandInput - {@link ListBatchEvaluationsCommandInput}
 * @returns {@link ListBatchEvaluationsCommandOutput}
 * @see {@link ListBatchEvaluationsCommandInput} for command's `input` shape.
 * @see {@link ListBatchEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
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
export class ListBatchEvaluationsCommand extends command<ListBatchEvaluationsCommandInput, ListBatchEvaluationsCommandOutput>(
  _ep0,
  _mw0,
  "ListBatchEvaluations",
  ListBatchEvaluations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBatchEvaluationsRequest;
      output: ListBatchEvaluationsResponse;
    };
    sdk: {
      input: ListBatchEvaluationsCommandInput;
      output: ListBatchEvaluationsCommandOutput;
    };
  };
}
