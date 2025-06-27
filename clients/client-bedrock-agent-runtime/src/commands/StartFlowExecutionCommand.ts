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
import {
  StartFlowExecutionRequest,
  StartFlowExecutionRequestFilterSensitiveLog,
  StartFlowExecutionResponse,
} from "../models/models_0";
import { de_StartFlowExecutionCommand, se_StartFlowExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts an execution of an Amazon Bedrock flow. Unlike flows that run until completion or time out after five minutes, flow executions let you run flows asynchronously for longer durations. Flow executions also yield control so that your application can perform other tasks.</p> <p>This operation returns an Amazon Resource Name (ARN) that you can use to track and manage your flow execution.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, StartFlowExecutionCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, StartFlowExecutionCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
export class StartFlowExecutionCommand extends $Command
  .classBuilder<
    StartFlowExecutionCommandInput,
    StartFlowExecutionCommandOutput,
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
  .s("AmazonBedrockAgentRunTimeService", "StartFlowExecution", {})
  .n("BedrockAgentRuntimeClient", "StartFlowExecutionCommand")
  .f(StartFlowExecutionRequestFilterSensitiveLog, void 0)
  .ser(se_StartFlowExecutionCommand)
  .de(de_StartFlowExecutionCommand)
  .build() {
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
