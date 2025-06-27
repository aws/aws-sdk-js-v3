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
import { GetFlowExecutionRequest, GetFlowExecutionResponse } from "../models/models_0";
import { de_GetFlowExecutionCommand, se_GetFlowExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFlowExecutionCommand}.
 */
export interface GetFlowExecutionCommandInput extends GetFlowExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetFlowExecutionCommand}.
 */
export interface GetFlowExecutionCommandOutput extends GetFlowExecutionResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about a specific flow execution, including its status, start and end times, and any errors that occurred during execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, GetFlowExecutionCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, GetFlowExecutionCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // GetFlowExecutionRequest
 *   flowIdentifier: "STRING_VALUE", // required
 *   flowAliasIdentifier: "STRING_VALUE", // required
 *   executionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetFlowExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetFlowExecutionResponse
 * //   executionArn: "STRING_VALUE", // required
 * //   status: "Running" || "Succeeded" || "Failed" || "TimedOut" || "Aborted", // required
 * //   startedAt: new Date("TIMESTAMP"), // required
 * //   endedAt: new Date("TIMESTAMP"),
 * //   errors: [ // FlowExecutionErrors
 * //     { // FlowExecutionError
 * //       nodeName: "STRING_VALUE",
 * //       error: "ExecutionTimedOut",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   flowAliasIdentifier: "STRING_VALUE", // required
 * //   flowIdentifier: "STRING_VALUE", // required
 * //   flowVersion: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetFlowExecutionCommandInput - {@link GetFlowExecutionCommandInput}
 * @returns {@link GetFlowExecutionCommandOutput}
 * @see {@link GetFlowExecutionCommandInput} for command's `input` shape.
 * @see {@link GetFlowExecutionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
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
export class GetFlowExecutionCommand extends $Command
  .classBuilder<
    GetFlowExecutionCommandInput,
    GetFlowExecutionCommandOutput,
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
  .s("AmazonBedrockAgentRunTimeService", "GetFlowExecution", {})
  .n("BedrockAgentRuntimeClient", "GetFlowExecutionCommand")
  .f(void 0, void 0)
  .ser(se_GetFlowExecutionCommand)
  .de(de_GetFlowExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFlowExecutionRequest;
      output: GetFlowExecutionResponse;
    };
    sdk: {
      input: GetFlowExecutionCommandInput;
      output: GetFlowExecutionCommandOutput;
    };
  };
}
