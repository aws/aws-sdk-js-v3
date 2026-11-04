// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRetrievalInstructionRequest, UpdateRetrievalInstructionResponse } from "../models/models_1";
import { UpdateRetrievalInstruction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRetrievalInstructionCommand}.
 */
export interface UpdateRetrievalInstructionCommandInput extends UpdateRetrievalInstructionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRetrievalInstructionCommand}.
 */
export interface UpdateRetrievalInstructionCommandOutput extends UpdateRetrievalInstructionResponse, __MetadataBearer {}

/**
 * Updates the content of a retrieval instruction. The update is processed asynchronously; the stored content is a candidate until content review passes, and the served content does not change while the update is in flight. The service rejects the request with ConflictException while lastTransitionStatus is CREATING or UPDATING.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateRetrievalInstructionCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateRetrievalInstructionCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // UpdateRetrievalInstructionRequest
 *   retrievalInstructionId: "STRING_VALUE", // required
 *   instruction: { // RetrievalInstructionContent
 *     retrievalGuidance: "STRING_VALUE",
 *     persona: "STRING_VALUE",
 *     answerFormat: "STRING_VALUE",
 *     answerPolicy: "STRING_VALUE",
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateRetrievalInstructionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRetrievalInstructionResponse
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
 * @param UpdateRetrievalInstructionCommandInput - {@link UpdateRetrievalInstructionCommandInput}
 * @returns {@link UpdateRetrievalInstructionCommandOutput}
 * @see {@link UpdateRetrievalInstructionCommandInput} for command's `input` shape.
 * @see {@link UpdateRetrievalInstructionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockAgentServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgent service.
 *
 * @public
 */
export class UpdateRetrievalInstructionCommand extends command<UpdateRetrievalInstructionCommandInput, UpdateRetrievalInstructionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRetrievalInstruction",
  UpdateRetrievalInstruction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRetrievalInstructionRequest;
      output: UpdateRetrievalInstructionResponse;
    };
    sdk: {
      input: UpdateRetrievalInstructionCommandInput;
      output: UpdateRetrievalInstructionCommandOutput;
    };
  };
}
