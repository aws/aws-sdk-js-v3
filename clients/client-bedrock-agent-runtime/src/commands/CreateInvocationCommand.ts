// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateInvocationRequest, CreateInvocationResponse } from "../models/models_1";
import { CreateInvocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new invocation within a session. An invocation groups the related invocation steps that store the content from a conversation. For more information about sessions, see [Store and retrieve conversation history and context with Amazon Bedrock sessions](https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html).
 *
 * Related APIs
 *
 * - [ListInvocations](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListInvocations.html)
 * - [ListSessions](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListSessions.html)
 * - [GetSession](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_GetSession.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, CreateInvocationCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, CreateInvocationCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
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
 *
 * The request is denied because of missing access permissions. Check your permissions and retry your request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict performing an operation. Resolve the conflict and retry your request.
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
export class CreateInvocationCommand extends command<CreateInvocationCommandInput, CreateInvocationCommandOutput>(
  _ep0,
  _mw0,
  "CreateInvocation",
  CreateInvocation$
) {
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
