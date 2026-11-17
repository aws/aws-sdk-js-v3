// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDatasetGenerationsRequest, ListDatasetGenerationsResponse } from "../models/models_0";
import { ListDatasetGenerations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDatasetGenerationsCommand}.
 */
export interface ListDatasetGenerationsCommandInput extends ListDatasetGenerationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetGenerationsCommand}.
 */
export interface ListDatasetGenerationsCommandOutput extends ListDatasetGenerationsResponse, __MetadataBearer {}

/**
 * <p>Lists the generations for a dataset. AgentCore keeps a generation until you delete it with <code>DeleteDatasetGeneration</code> or delete the dataset. To get a generation's counts and the request it was started with, call <code>GetDatasetGeneration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, ListDatasetGenerationsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, ListDatasetGenerationsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // ListDatasetGenerationsRequest
 *   datasetId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDatasetGenerationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetGenerationsResponse
 * //   datasetGenerations: [ // DatasetGenerationSummaryList // required
 * //     { // DatasetGenerationSummary
 * //       generationId: "STRING_VALUE", // required
 * //       datasetId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       scenarioType: "FIXED" || "DYNAMIC", // required
 * //       status: "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED" || "DELETING", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       completedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetGenerationsCommandInput - {@link ListDatasetGenerationsCommandInput}
 * @returns {@link ListDatasetGenerationsCommandOutput}
 * @see {@link ListDatasetGenerationsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetGenerationsCommandOutput} for command's `response` shape.
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
export class ListDatasetGenerationsCommand extends command<ListDatasetGenerationsCommandInput, ListDatasetGenerationsCommandOutput>(
  _ep0,
  _mw0,
  "ListDatasetGenerations",
  ListDatasetGenerations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetGenerationsRequest;
      output: ListDatasetGenerationsResponse;
    };
    sdk: {
      input: ListDatasetGenerationsCommandInput;
      output: ListDatasetGenerationsCommandOutput;
    };
  };
}
