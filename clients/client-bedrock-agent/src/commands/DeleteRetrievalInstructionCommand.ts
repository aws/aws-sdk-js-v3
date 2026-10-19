// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRetrievalInstructionRequest, DeleteRetrievalInstructionResponse } from "../models/models_1";
import { DeleteRetrievalInstruction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRetrievalInstructionCommand}.
 */
export interface DeleteRetrievalInstructionCommandInput extends DeleteRetrievalInstructionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRetrievalInstructionCommand}.
 */
export interface DeleteRetrievalInstructionCommandOutput extends DeleteRetrievalInstructionResponse, __MetadataBearer {}

/**
 * <p>Deletes a retrieval instruction or a single version of it. Omit retrievalInstructionVersion to delete the retrieval instruction itself; the service rejects that request with ConflictException while the retrieval instruction has versions or while lastTransitionStatus is CREATING or UPDATING. Specify retrievalInstructionVersion to delete only that version; the retrieval instruction and its other versions are unaffected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DeleteRetrievalInstructionCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DeleteRetrievalInstructionCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // DeleteRetrievalInstructionRequest
 *   retrievalInstructionId: "STRING_VALUE", // required
 *   retrievalInstructionVersion: "STRING_VALUE",
 * };
 * const command = new DeleteRetrievalInstructionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRetrievalInstructionResponse
 * //   retrievalInstructionId: "STRING_VALUE", // required
 * //   retrievalInstructionArn: "STRING_VALUE", // required
 * //   version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteRetrievalInstructionCommandInput - {@link DeleteRetrievalInstructionCommandInput}
 * @returns {@link DeleteRetrievalInstructionCommandOutput}
 * @see {@link DeleteRetrievalInstructionCommandInput} for command's `input` shape.
 * @see {@link DeleteRetrievalInstructionCommandOutput} for command's `response` shape.
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
export class DeleteRetrievalInstructionCommand extends command<DeleteRetrievalInstructionCommandInput, DeleteRetrievalInstructionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRetrievalInstruction",
  DeleteRetrievalInstruction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRetrievalInstructionRequest;
      output: DeleteRetrievalInstructionResponse;
    };
    sdk: {
      input: DeleteRetrievalInstructionCommandInput;
      output: DeleteRetrievalInstructionCommandOutput;
    };
  };
}
