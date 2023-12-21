// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAgentVersionRequest, DeleteAgentVersionResponse } from "../models/models_0";
import { de_DeleteAgentVersionCommand, se_DeleteAgentVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAgentVersionCommand}.
 */
export interface DeleteAgentVersionCommandInput extends DeleteAgentVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentVersionCommand}.
 */
export interface DeleteAgentVersionCommandOutput extends DeleteAgentVersionResponse, __MetadataBearer {}

/**
 * @public
 * Deletes an Agent version for existing Amazon Bedrock Agent
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DeleteAgentVersionCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DeleteAgentVersionCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // DeleteAgentVersionRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   skipResourceInUseCheck: true || false,
 * };
 * const command = new DeleteAgentVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAgentVersionResponse
 * //   agentId: "STRING_VALUE", // required
 * //   agentVersion: "STRING_VALUE", // required
 * //   agentStatus: "CREATING" || "PREPARING" || "PREPARED" || "NOT_PREPARED" || "DELETING" || "FAILED" || "VERSIONING" || "UPDATING", // required
 * // };
 *
 * ```
 *
 * @param DeleteAgentVersionCommandInput - {@link DeleteAgentVersionCommandInput}
 * @returns {@link DeleteAgentVersionCommandOutput}
 * @see {@link DeleteAgentVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentVersionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 */
export class DeleteAgentVersionCommand extends $Command
  .classBuilder<
    DeleteAgentVersionCommandInput,
    DeleteAgentVersionCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: BedrockAgentClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "DeleteAgentVersion", {})
  .n("BedrockAgentClient", "DeleteAgentVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAgentVersionCommand)
  .de(de_DeleteAgentVersionCommand)
  .build() {}
