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
import { CreateInvocationRequest, CreateInvocationResponse } from "../models/models_1";
import { de_CreateInvocationCommand, se_CreateInvocationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInvocationCommand}.
 */
export interface CreateInvocationCommandInput extends CreateInvocationRequest {}
/**
 * @public
 *
 * The output of {@link CreateInvocationCommand}.
 */
export interface CreateInvocationCommandOutput extends CreateInvocationResponse, __MetadataBearer {}

/**
 * <p>Creates a new invocation within a session. An invocation groups the related invocation steps that store the content from a conversation. For more information about sessions, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html">Store and retrieve conversation history and context with Amazon Bedrock sessions</a>.</p> <p>Related APIs</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListInvocations.html">ListInvocations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListSessions.html">ListSessions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_GetSession.html">GetSession</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, CreateInvocationCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, CreateInvocationCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // CreateInvocationRequest
 *   invocationId: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   sessionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CreateInvocationCommand(input);
 * const response = await client.send(command);
 * // { // CreateInvocationResponse
 * //   sessionId: "STRING_VALUE", // required
 * //   invocationId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateInvocationCommandInput - {@link CreateInvocationCommandInput}
 * @returns {@link CreateInvocationCommandOutput}
 * @see {@link CreateInvocationCommandInput} for command's `input` shape.
 * @see {@link CreateInvocationCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
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
export class CreateInvocationCommand extends $Command
  .classBuilder<
    CreateInvocationCommandInput,
    CreateInvocationCommandOutput,
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
  .s("AmazonBedrockAgentRunTimeService", "CreateInvocation", {})
  .n("BedrockAgentRuntimeClient", "CreateInvocationCommand")
  .f(void 0, void 0)
  .ser(se_CreateInvocationCommand)
  .de(de_CreateInvocationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInvocationRequest;
      output: CreateInvocationResponse;
    };
    sdk: {
      input: CreateInvocationCommandInput;
      output: CreateInvocationCommandOutput;
    };
  };
}
