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
import { ListFlowExecutionsRequest, ListFlowExecutionsResponse } from "../models/models_0";
import { de_ListFlowExecutionsCommand, se_ListFlowExecutionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all executions of a flow. Results can be paginated and include summary information about each execution, such as status, start and end times, and the execution's Amazon Resource Name (ARN).</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, ListFlowExecutionsCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, ListFlowExecutionsCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
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
export class ListFlowExecutionsCommand extends $Command
  .classBuilder<
    ListFlowExecutionsCommandInput,
    ListFlowExecutionsCommandOutput,
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
  .s("AmazonBedrockAgentRunTimeService", "ListFlowExecutions", {})
  .n("BedrockAgentRuntimeClient", "ListFlowExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_ListFlowExecutionsCommand)
  .de(de_ListFlowExecutionsCommand)
  .build() {
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
