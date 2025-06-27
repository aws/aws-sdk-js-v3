// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopFlowExecutionRequest, StopFlowExecutionResponse } from "../models/models_0";
import { de_StopFlowExecutionCommand, se_StopFlowExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Stops an Amazon Bedrock flow's execution. This operation prevents further processing of the flow and changes the execution status to <code>Aborted</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, StopFlowExecutionCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, StopFlowExecutionCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
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
 *  <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 *
 * @throws {@link BadGatewayException} (server fault)
 *  <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
 *
 * @throws {@link DependencyFailedException} (client fault)
 *  <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentRuntime service.</p>
 *
 *
 * @public
 */
export class StopFlowExecutionCommand extends $Command
  .classBuilder<
    StopFlowExecutionCommandInput,
    StopFlowExecutionCommandOutput,
    BedrockAgentRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentRunTimeService", "StopFlowExecution", {})
  .n("BedrockAgentRuntimeClient", "StopFlowExecutionCommand")
  .f(void 0, void 0)
  .ser(se_StopFlowExecutionCommand)
  .de(de_StopFlowExecutionCommand)
  .build() {
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
