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
  PutInvocationStepRequest,
  PutInvocationStepRequestFilterSensitiveLog,
  PutInvocationStepResponse,
} from "../models/models_0";
import { de_PutInvocationStepCommand, se_PutInvocationStepCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Add an invocation step to an invocation in a session. An invocation step stores fine-grained state checkpoints, including text and images, for each interaction. For more information about sessions, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html">Store and retrieve conversation history and context with Amazon Bedrock sessions</a>.</p>
 *          <p>Related APIs:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_GetInvocationStep.html">GetInvocationStep</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListInvocationSteps.html">ListInvocationSteps</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListInvocations.html">ListInvocations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListInvocations.html">ListSessions</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, PutInvocationStepCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, PutInvocationStepCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
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
export class PutInvocationStepCommand extends $Command
  .classBuilder<
    PutInvocationStepCommandInput,
    PutInvocationStepCommandOutput,
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
  .s("AmazonBedrockAgentRunTimeService", "PutInvocationStep", {})
  .n("BedrockAgentRuntimeClient", "PutInvocationStepCommand")
  .f(PutInvocationStepRequestFilterSensitiveLog, void 0)
  .ser(se_PutInvocationStepCommand)
  .de(de_PutInvocationStepCommand)
  .build() {
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
