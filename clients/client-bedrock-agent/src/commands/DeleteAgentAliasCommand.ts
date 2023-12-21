// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAgentAliasRequest, DeleteAgentAliasResponse } from "../models/models_0";
import { de_DeleteAgentAliasCommand, se_DeleteAgentAliasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAgentAliasCommand}.
 */
export interface DeleteAgentAliasCommandInput extends DeleteAgentAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentAliasCommand}.
 */
export interface DeleteAgentAliasCommandOutput extends DeleteAgentAliasResponse, __MetadataBearer {}

/**
 * @public
 * Deletes an Alias for a Amazon Bedrock Agent
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DeleteAgentAliasCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DeleteAgentAliasCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // DeleteAgentAliasRequest
 *   agentId: "STRING_VALUE", // required
 *   agentAliasId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgentAliasCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAgentAliasResponse
 * //   agentId: "STRING_VALUE", // required
 * //   agentAliasId: "STRING_VALUE", // required
 * //   agentAliasStatus: "CREATING" || "PREPARED" || "FAILED" || "UPDATING" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param DeleteAgentAliasCommandInput - {@link DeleteAgentAliasCommandInput}
 * @returns {@link DeleteAgentAliasCommandOutput}
 * @see {@link DeleteAgentAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentAliasCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
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
export class DeleteAgentAliasCommand extends $Command
  .classBuilder<
    DeleteAgentAliasCommandInput,
    DeleteAgentAliasCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "DeleteAgentAlias", {})
  .n("BedrockAgentClient", "DeleteAgentAliasCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAgentAliasCommand)
  .de(de_DeleteAgentAliasCommand)
  .build() {}
