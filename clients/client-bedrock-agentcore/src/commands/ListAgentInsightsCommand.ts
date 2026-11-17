// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgentInsightsRequest, ListAgentInsightsResponse } from "../models/models_0";
import { ListAgentInsights$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgentInsightsCommand}.
 */
export interface ListAgentInsightsCommandInput extends ListAgentInsightsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentInsightsCommand}.
 */
export interface ListAgentInsightsCommandOutput extends ListAgentInsightsResponse, __MetadataBearer {}

/**
 * <p>Lists Amazon Bedrock AgentCore Agent Insight summaries in your account and Region. Use this operation to review patterns across sessions before you investigate or archive an insight. The response paginates the results. Use the <code>nextToken</code> parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, ListAgentInsightsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, ListAgentInsightsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // ListAgentInsightsRequest
 *   applicationName: "STRING_VALUE",
 *   batchEvaluationId: "STRING_VALUE",
 *   archiveStatus: "ACTIVE" || "ARCHIVED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentInsightsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentInsightsResponse
 * //   agentInsights: [ // AgentInsightSummaryList // required
 * //     { // AgentInsightSummary
 * //       type: "FAILURE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       affectedSessionCount: Number("int"),
 * //       agentInsightId: "STRING_VALUE", // required
 * //       applicationName: "STRING_VALUE", // required
 * //       batchEvaluationId: "STRING_VALUE",
 * //       customerMetadataStatus: "AVAILABLE" || "CUSTOMER_KEY_UNAVAILABLE" || "UNAVAILABLE", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       archiveStatus: "ACTIVE" || "ARCHIVED", // required
 * //       lastSeenAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentInsightsCommandInput - {@link ListAgentInsightsCommandInput}
 * @returns {@link ListAgentInsightsCommandOutput}
 * @see {@link ListAgentInsightsCommandInput} for command's `input` shape.
 * @see {@link ListAgentInsightsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class ListAgentInsightsCommand extends command<ListAgentInsightsCommandInput, ListAgentInsightsCommandOutput>(
  _ep0,
  _mw0,
  "ListAgentInsights",
  ListAgentInsights$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentInsightsRequest;
      output: ListAgentInsightsResponse;
    };
    sdk: {
      input: ListAgentInsightsCommandInput;
      output: ListAgentInsightsCommandOutput;
    };
  };
}
