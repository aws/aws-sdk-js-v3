// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutInvocationStepRequest, PutInvocationStepResponse } from "../models/models_1";
import { PutInvocationStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutInvocationStepCommand}.
 */
export interface PutInvocationStepCommandInput extends PutInvocationStepRequest {}
/**
 * @public
 *
 * The output of {@link PutInvocationStepCommand}.
 */
export interface PutInvocationStepCommandOutput extends PutInvocationStepResponse, __MetadataBearer {}

/**
 * Add an invocation step to an invocation in a session. An invocation step stores fine-grained state checkpoints, including text and images, for each interaction. For more information about sessions, see [Store and retrieve conversation history and context with Amazon Bedrock sessions](https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html).
 *
 * Related APIs:
 *
 * - [GetInvocationStep](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_GetInvocationStep.html)
 * - [ListInvocationSteps](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListInvocationSteps.html)
 * - [ListInvocations](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListInvocations.html)
 * - [ListSessions](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListInvocations.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, PutInvocationStepCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, PutInvocationStepCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // PutInvocationStepRequest
 *   sessionIdentifier: "STRING_VALUE", // required
 *   invocationIdentifier: "STRING_VALUE", // required
 *   invocationStepTime: new Date("TIMESTAMP"), // required
 *   payload: { // InvocationStepPayload Union: only one key present
 *     contentBlocks: [ // BedrockSessionContentBlocks
 *       { // BedrockSessionContentBlock Union: only one key present
 *         text: "STRING_VALUE",
 *         image: { // ImageBlock
 *           format: "png" || "jpeg" || "gif" || "webp", // required
 *           source: { // ImageSource Union: only one key present
 *             bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *             s3Location: { // S3Location
 *               uri: "STRING_VALUE", // required
 *             },
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   invocationStepId: "STRING_VALUE",
 * };
 * const command = new PutInvocationStepCommand(input);
 * const response = await client.send(command);
 * // { // PutInvocationStepResponse
 * //   invocationStepId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutInvocationStepCommandInput - {@link PutInvocationStepCommandInput}
 * @returns {@link PutInvocationStepCommandOutput}
 * @see {@link PutInvocationStepCommandInput} for command's `input` shape.
 * @see {@link PutInvocationStepCommandOutput} for command's `response` shape.
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
export class PutInvocationStepCommand extends command<PutInvocationStepCommandInput, PutInvocationStepCommandOutput>(
  _ep0,
  _mw0,
  "PutInvocationStep",
  PutInvocationStep$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutInvocationStepRequest;
      output: PutInvocationStepResponse;
    };
    sdk: {
      input: PutInvocationStepCommandInput;
      output: PutInvocationStepCommandOutput;
    };
  };
}
