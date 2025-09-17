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
import { ListInvocationStepsRequest, ListInvocationStepsResponse } from "../models/models_1";
import { de_ListInvocationStepsCommand, se_ListInvocationStepsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInvocationStepsCommand}.
 */
export interface ListInvocationStepsCommandInput extends ListInvocationStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListInvocationStepsCommand}.
 */
export interface ListInvocationStepsCommandOutput extends ListInvocationStepsResponse, __MetadataBearer {}

/**
 * <p>Lists all invocation steps associated with a session and optionally, an invocation within the session. For more information about sessions, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html">Store and retrieve conversation history and context with Amazon Bedrock sessions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, ListInvocationStepsCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, ListInvocationStepsCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // ListInvocationStepsRequest
 *   invocationIdentifier: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   sessionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ListInvocationStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvocationStepsResponse
 * //   invocationStepSummaries: [ // InvocationStepSummaries // required
 * //     { // InvocationStepSummary
 * //       sessionId: "STRING_VALUE", // required
 * //       invocationId: "STRING_VALUE", // required
 * //       invocationStepId: "STRING_VALUE", // required
 * //       invocationStepTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInvocationStepsCommandInput - {@link ListInvocationStepsCommandInput}
 * @returns {@link ListInvocationStepsCommandOutput}
 * @see {@link ListInvocationStepsCommandInput} for command's `input` shape.
 * @see {@link ListInvocationStepsCommandOutput} for command's `response` shape.
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
export class ListInvocationStepsCommand extends $Command
  .classBuilder<
    ListInvocationStepsCommandInput,
    ListInvocationStepsCommandOutput,
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
  .s("AmazonBedrockAgentRunTimeService", "ListInvocationSteps", {})
  .n("BedrockAgentRuntimeClient", "ListInvocationStepsCommand")
  .f(void 0, void 0)
  .ser(se_ListInvocationStepsCommand)
  .de(de_ListInvocationStepsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInvocationStepsRequest;
      output: ListInvocationStepsResponse;
    };
    sdk: {
      input: ListInvocationStepsCommandInput;
      output: ListInvocationStepsCommandOutput;
    };
  };
}
