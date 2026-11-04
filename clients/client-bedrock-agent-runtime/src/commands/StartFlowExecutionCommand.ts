// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartFlowExecutionRequest, StartFlowExecutionResponse } from "../models/models_0";
import { StartFlowExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartFlowExecutionCommand}.
 */
export interface StartFlowExecutionCommandInput extends StartFlowExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartFlowExecutionCommand}.
 */
export interface StartFlowExecutionCommandOutput extends StartFlowExecutionResponse, __MetadataBearer {}

/**
 * Starts an execution of an Amazon Bedrock flow. Unlike flows that run until completion or time out after five minutes, flow executions let you run flows asynchronously for longer durations. Flow executions also yield control so that your application can perform other tasks.
 *
 * This operation returns an Amazon Resource Name (ARN) that you can use to track and manage your flow execution.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, StartFlowExecutionCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, StartFlowExecutionCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // StartFlowExecutionRequest
 *   flowIdentifier: "STRING_VALUE", // required
 *   flowAliasIdentifier: "STRING_VALUE", // required
 *   flowExecutionName: "STRING_VALUE",
 *   inputs: [ // FlowInputs // required
 *     { // FlowInput
 *       nodeName: "STRING_VALUE", // required
 *       nodeOutputName: "STRING_VALUE",
 *       content: { // FlowInputContent Union: only one key present
 *         document: "DOCUMENT_VALUE",
 *       },
 *       nodeInputName: "STRING_VALUE",
 *     },
 *   ],
 *   modelPerformanceConfiguration: { // ModelPerformanceConfiguration
 *     performanceConfig: { // PerformanceConfiguration
 *       latency: "standard" || "optimized",
 *     },
 *   },
 * };
 * const command = new StartFlowExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartFlowExecutionResponse
 * //   executionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartFlowExecutionCommandInput - {@link StartFlowExecutionCommandInput}
 * @returns {@link StartFlowExecutionCommandOutput}
 * @see {@link StartFlowExecutionCommandInput} for command's `input` shape.
 * @see {@link StartFlowExecutionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions. Check your permissions and retry your request.
 *
 * @throws {@link BadGatewayException} (server fault)
 *
 * There was an issue with a dependency due to a server issue. Retry your request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict performing an operation. Resolve the conflict and retry your request.
 *
 * @throws {@link DependencyFailedException} (client fault)
 *
 * There was an issue with a dependency. Check the resource configurations and retry the request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
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
export class StartFlowExecutionCommand extends command<StartFlowExecutionCommandInput, StartFlowExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StartFlowExecution",
  StartFlowExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFlowExecutionRequest;
      output: StartFlowExecutionResponse;
    };
    sdk: {
      input: StartFlowExecutionCommandInput;
      output: StartFlowExecutionCommandOutput;
    };
  };
}
