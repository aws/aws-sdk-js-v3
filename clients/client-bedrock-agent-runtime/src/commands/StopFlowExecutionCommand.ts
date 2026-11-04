// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopFlowExecutionRequest, StopFlowExecutionResponse } from "../models/models_0";
import { StopFlowExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopFlowExecutionCommand}.
 */
export interface StopFlowExecutionCommandInput extends StopFlowExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StopFlowExecutionCommand}.
 */
export interface StopFlowExecutionCommandOutput extends StopFlowExecutionResponse, __MetadataBearer {}

/**
 * Stops an Amazon Bedrock flow's execution. This operation prevents further processing of the flow and changes the execution status to `Aborted`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, StopFlowExecutionCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, StopFlowExecutionCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // StopFlowExecutionRequest
 *   flowIdentifier: "STRING_VALUE", // required
 *   flowAliasIdentifier: "STRING_VALUE", // required
 *   executionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StopFlowExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StopFlowExecutionResponse
 * //   executionArn: "STRING_VALUE",
 * //   status: "Running" || "Succeeded" || "Failed" || "TimedOut" || "Aborted", // required
 * // };
 *
 * ```
 *
 * @param StopFlowExecutionCommandInput - {@link StopFlowExecutionCommandInput}
 * @returns {@link StopFlowExecutionCommandOutput}
 * @see {@link StopFlowExecutionCommandInput} for command's `input` shape.
 * @see {@link StopFlowExecutionCommandOutput} for command's `response` shape.
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
export class StopFlowExecutionCommand extends command<StopFlowExecutionCommandInput, StopFlowExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StopFlowExecution",
  StopFlowExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopFlowExecutionRequest;
      output: StopFlowExecutionResponse;
    };
    sdk: {
      input: StopFlowExecutionCommandInput;
      output: StopFlowExecutionCommandOutput;
    };
  };
}
