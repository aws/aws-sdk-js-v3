// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InvokeWebSearchInput, InvokeWebSearchOutput } from "../models/models_0";
import { InvokeWebSearch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InvokeWebSearchCommand}.
 */
export interface InvokeWebSearchCommandInput extends InvokeWebSearchInput {}
/**
 * @public
 *
 * The output of {@link InvokeWebSearchCommand}.
 */
export interface InvokeWebSearchCommandOutput extends InvokeWebSearchOutput, __MetadataBearer {}

/**
 * <p>Searches the web and returns a ranked list of results. Each result includes a text extract from the page.</p> <p>You can filter the results by domain and by publication date.</p> <p>To use this operation, you must have the <code>bedrock-agentcore:InvokeWebSearch</code> permission on the resource <code>arn:$\{Partition\}:bedrock-agentcore:$\{Region\}:aws:tool/web-search.v1</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, InvokeWebSearchCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, InvokeWebSearchCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // InvokeWebSearchInput
 *   webSearchId: "STRING_VALUE", // required
 *   searchQuery: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   filters: { // WebSearchFilters
 *     domainFilter: { // DomainFilter
 *       include: [ // DomainList
 *         "STRING_VALUE",
 *       ],
 *       exclude: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     publishedDateFilter: { // PublishedDateFilter
 *       publishedAfter: new Date("TIMESTAMP"),
 *       publishedBefore: new Date("TIMESTAMP"),
 *     },
 *   },
 * };
 * const command = new InvokeWebSearchCommand(input);
 * const response = await client.send(command);
 * // { // InvokeWebSearchOutput
 * //   results: [ // WebSearchResultList // required
 * //     { // WebSearchResult
 * //       title: "STRING_VALUE",
 * //       url: "STRING_VALUE",
 * //       text: "STRING_VALUE", // required
 * //       publishedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param InvokeWebSearchCommandInput - {@link InvokeWebSearchCommandInput}
 * @returns {@link InvokeWebSearchCommandOutput}
 * @see {@link InvokeWebSearchCommandInput} for command's `input` shape.
 * @see {@link InvokeWebSearchCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service can't handle the request right now. Retry the request. If the response includes <code>retryAfterSeconds</code>, wait that many seconds before you retry.</p>
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
 * @example Search the web for recent pages from one domain
 * ```javascript
 * //
 * const input = {
 *   filters: {
 *     domainFilter: {
 *       include: [
 *         "example.com"
 *       ]
 *     },
 *     publishedDateFilter: {
 *       publishedAfter: "2026-01-01T00:00:00Z"
 *     }
 *   },
 *   maxResults: 1,
 *   searchQuery: "Amazon Bedrock AgentCore web search",
 *   webSearchId: "web-search.v1"
 * };
 * const command = new InvokeWebSearchCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   results: [
 *     {
 *       publishedAt: "2026-03-15T08:00:00Z",
 *       text: "Web search lets an agent find current information on the public web and cite its sources.",
 *       title: "Getting started with web search",
 *       url: "https://docs.example.com/web-search/getting-started"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class InvokeWebSearchCommand extends command<InvokeWebSearchCommandInput, InvokeWebSearchCommandOutput>(
  _ep0,
  _mw0,
  "InvokeWebSearch",
  InvokeWebSearch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeWebSearchInput;
      output: InvokeWebSearchOutput;
    };
    sdk: {
      input: InvokeWebSearchCommandInput;
      output: InvokeWebSearchCommandOutput;
    };
  };
}
