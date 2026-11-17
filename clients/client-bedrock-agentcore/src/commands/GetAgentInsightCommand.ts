// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAgentInsightRequest, GetAgentInsightResponse } from "../models/models_0";
import { GetAgentInsight$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentInsightCommand}.
 */
export interface GetAgentInsightCommandInput extends GetAgentInsightRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentInsightCommand}.
 */
export interface GetAgentInsightCommandOutput extends GetAgentInsightResponse, __MetadataBearer {}

/**
 * <p>Amazon Bedrock AgentCore Agent Insights identifies patterns detected across your agent sessions. Use Agent Insights to identify recurring issues and prioritize fixes.</p> <p>Retrieves detailed information about an Amazon Bedrock AgentCore Agent Insight, including its archive status, affected sessions, and, when applicable, the batch evaluation that produced it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetAgentInsightCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetAgentInsightCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetAgentInsightRequest
 *   applicationName: "STRING_VALUE", // required
 *   agentInsightId: "STRING_VALUE", // required
 * };
 * const command = new GetAgentInsightCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentInsightResponse
 * //   type: "FAILURE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   affectedSessionCount: Number("int"),
 * //   sampleSessions: [ // InsightSampleSessionList
 * //     { // SampleSession
 * //       sessionId: "STRING_VALUE", // required
 * //       lastSeenAt: new Date("TIMESTAMP"),
 * //       findings: [ // SessionFindingList
 * //         { // SessionFinding
 * //           targetId: "STRING_VALUE",
 * //           targetType: "SPAN_ID" || "TRACE_ID" || "SPAN_NAME",
 * //           description: "STRING_VALUE", // required
 * //           category: "STRING_VALUE",
 * //           confidence: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   rootCauses: [ // InsightRootCauseList
 * //     { // InsightRootCause
 * //       name: "STRING_VALUE", // required
 * //       explanation: "STRING_VALUE", // required
 * //       affectedSessionCount: Number("int"),
 * //       suggestedFix: "STRING_VALUE",
 * //       sampleSessions: [
 * //         {
 * //           sessionId: "STRING_VALUE", // required
 * //           lastSeenAt: new Date("TIMESTAMP"),
 * //           findings: [
 * //             {
 * //               targetId: "STRING_VALUE",
 * //               targetType: "SPAN_ID" || "TRACE_ID" || "SPAN_NAME",
 * //               description: "STRING_VALUE", // required
 * //               category: "STRING_VALUE",
 * //               confidence: Number("double"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   agentInsightId: "STRING_VALUE", // required
 * //   applicationName: "STRING_VALUE", // required
 * //   batchEvaluationId: "STRING_VALUE",
 * //   customerMetadataStatus: "AVAILABLE" || "CUSTOMER_KEY_UNAVAILABLE" || "UNAVAILABLE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   archiveStatus: "ACTIVE" || "ARCHIVED", // required
 * //   lastSeenAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAgentInsightCommandInput - {@link GetAgentInsightCommandInput}
 * @returns {@link GetAgentInsightCommandOutput}
 * @see {@link GetAgentInsightCommandInput} for command's `input` shape.
 * @see {@link GetAgentInsightCommandOutput} for command's `response` shape.
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
export class GetAgentInsightCommand extends command<GetAgentInsightCommandInput, GetAgentInsightCommandOutput>(
  _ep0,
  _mw0,
  "GetAgentInsight",
  GetAgentInsight$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentInsightRequest;
      output: GetAgentInsightResponse;
    };
    sdk: {
      input: GetAgentInsightCommandInput;
      output: GetAgentInsightCommandOutput;
    };
  };
}
