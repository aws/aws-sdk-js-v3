// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFlowExecutionsRequest, ListFlowExecutionsResponse } from "../models/models_0";
import { ListFlowExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFlowExecutionsCommand}.
 */
export interface ListFlowExecutionsCommandInput extends ListFlowExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowExecutionsCommand}.
 */
export interface ListFlowExecutionsCommandOutput extends ListFlowExecutionsResponse, __MetadataBearer {}

/**
 * Lists all executions of a flow. Results can be paginated and include summary information about each execution, such as status, start and end times, and the execution's Amazon Resource Name (ARN).
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, ListFlowExecutionsCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, ListFlowExecutionsCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // ListFlowExecutionsRequest
 *   flowIdentifier: "STRING_VALUE", // required
 *   flowAliasIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFlowExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowExecutionsResponse
 * //   flowExecutionSummaries: [ // FlowExecutionSummaries // required
 * //     { // FlowExecutionSummary
 * //       executionArn: "STRING_VALUE", // required
 * //       flowAliasIdentifier: "STRING_VALUE", // required
 * //       flowIdentifier: "STRING_VALUE", // required
 * //       flowVersion: "STRING_VALUE", // required
 * //       status: "Running" || "Succeeded" || "Failed" || "TimedOut" || "Aborted", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       endedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowExecutionsCommandInput - {@link ListFlowExecutionsCommandInput}
 * @returns {@link ListFlowExecutionsCommandOutput}
 * @see {@link ListFlowExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListFlowExecutionsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions. Check your permissions and retry your request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockAgentRuntimeServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentRuntime service.
 *
 * @public
 */
export class ListFlowExecutionsCommand extends command<ListFlowExecutionsCommandInput, ListFlowExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListFlowExecutions",
  ListFlowExecutions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlowExecutionsRequest;
      output: ListFlowExecutionsResponse;
    };
    sdk: {
      input: ListFlowExecutionsCommandInput;
      output: ListFlowExecutionsCommandOutput;
    };
  };
}
