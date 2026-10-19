// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRetrievalInstructionRequest, CreateRetrievalInstructionResponse } from "../models/models_1";
import { CreateRetrievalInstruction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRetrievalInstructionCommand}.
 */
export interface CreateRetrievalInstructionCommandInput extends CreateRetrievalInstructionRequest {}
/**
 * @public
 *
 * The output of {@link CreateRetrievalInstructionCommand}.
 */
export interface CreateRetrievalInstructionCommandOutput extends CreateRetrievalInstructionResponse, __MetadataBearer {}

/**
 * <p>Creates a new retrieval instruction. The retrieval instruction is usable once its status becomes ACTIVE. Use GetRetrievalInstruction to check whether it is ready.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreateRetrievalInstructionCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreateRetrievalInstructionCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // CreateRetrievalInstructionRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   instruction: { // RetrievalInstructionContent
 *     retrievalGuidance: "STRING_VALUE",
 *     persona: "STRING_VALUE",
 *     answerFormat: "STRING_VALUE",
 *     answerPolicy: "STRING_VALUE",
 *   },
 *   description: "STRING_VALUE",
 *   customerEncryptionKeyArn: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRetrievalInstructionCommand(input);
 * const response = await client.send(command);
 * // { // CreateRetrievalInstructionResponse
 * //   retrievalInstructionId: "STRING_VALUE", // required
 * //   retrievalInstructionArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "INACTIVE", // required
 * //   lastTransitionStatus: "CREATING" || "UPDATING" || "CREATE_SUCCESSFUL" || "CREATE_FAILED" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateRetrievalInstructionCommandInput - {@link CreateRetrievalInstructionCommandInput}
 * @returns {@link CreateRetrievalInstructionCommandOutput}
 * @see {@link CreateRetrievalInstructionCommandInput} for command's `input` shape.
 * @see {@link CreateRetrievalInstructionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
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
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 *
 * @public
 */
export class CreateRetrievalInstructionCommand extends command<CreateRetrievalInstructionCommandInput, CreateRetrievalInstructionCommandOutput>(
  _ep0,
  _mw0,
  "CreateRetrievalInstruction",
  CreateRetrievalInstruction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRetrievalInstructionRequest;
      output: CreateRetrievalInstructionResponse;
    };
    sdk: {
      input: CreateRetrievalInstructionCommandInput;
      output: CreateRetrievalInstructionCommandOutput;
    };
  };
}
