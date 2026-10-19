// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRetrievalInstructionRequest, GetRetrievalInstructionResponse } from "../models/models_1";
import { GetRetrievalInstruction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRetrievalInstructionCommand}.
 */
export interface GetRetrievalInstructionCommandInput extends GetRetrievalInstructionRequest {}
/**
 * @public
 *
 * The output of {@link GetRetrievalInstructionCommand}.
 */
export interface GetRetrievalInstructionCommandOutput extends GetRetrievalInstructionResponse, __MetadataBearer {}

/**
 * <p>Gets a retrieval instruction. Also used to poll the terminal reporting of an asynchronous create or update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetRetrievalInstructionCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetRetrievalInstructionCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // GetRetrievalInstructionRequest
 *   retrievalInstructionId: "STRING_VALUE", // required
 *   retrievalInstructionVersion: "STRING_VALUE",
 * };
 * const command = new GetRetrievalInstructionCommand(input);
 * const response = await client.send(command);
 * // { // GetRetrievalInstructionResponse
 * //   retrievalInstructionId: "STRING_VALUE", // required
 * //   retrievalInstructionArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "INACTIVE", // required
 * //   lastTransitionStatus: "CREATING" || "UPDATING" || "CREATE_SUCCESSFUL" || "CREATE_FAILED" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED", // required
 * //   instruction: { // RetrievalInstructionContent
 * //     retrievalGuidance: "STRING_VALUE",
 * //     persona: "STRING_VALUE",
 * //     answerFormat: "STRING_VALUE",
 * //     answerPolicy: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   description: "STRING_VALUE",
 * //   customerEncryptionKeyArn: "STRING_VALUE",
 * //   lastTransitionStatusReasons: [ // RetrievalInstructionFailureReasons
 * //     { // RetrievalInstructionFailureReason
 * //       fieldName: "RETRIEVAL_GUIDANCE" || "PERSONA" || "ANSWER_FORMAT" || "ANSWER_POLICY",
 * //       code: "CONTENT_REJECTED" || "CLIENT_ERROR" || "INTERNAL_ERROR", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   version: "STRING_VALUE",
 * //   latestVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRetrievalInstructionCommandInput - {@link GetRetrievalInstructionCommandInput}
 * @returns {@link GetRetrievalInstructionCommandOutput}
 * @see {@link GetRetrievalInstructionCommandInput} for command's `input` shape.
 * @see {@link GetRetrievalInstructionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
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
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 *
 * @public
 */
export class GetRetrievalInstructionCommand extends command<GetRetrievalInstructionCommandInput, GetRetrievalInstructionCommandOutput>(
  _ep0,
  _mw0,
  "GetRetrievalInstruction",
  GetRetrievalInstruction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRetrievalInstructionRequest;
      output: GetRetrievalInstructionResponse;
    };
    sdk: {
      input: GetRetrievalInstructionCommandInput;
      output: GetRetrievalInstructionCommandOutput;
    };
  };
}
