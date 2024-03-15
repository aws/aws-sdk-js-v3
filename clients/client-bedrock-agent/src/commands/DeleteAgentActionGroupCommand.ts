// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAgentActionGroupRequest, DeleteAgentActionGroupResponse } from "../models/models_0";
import { de_DeleteAgentActionGroupCommand, se_DeleteAgentActionGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAgentActionGroupCommand}.
 */
export interface DeleteAgentActionGroupCommandInput extends DeleteAgentActionGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentActionGroupCommand}.
 */
export interface DeleteAgentActionGroupCommandOutput extends DeleteAgentActionGroupResponse, __MetadataBearer {}

/**
 * Deletes an Action Group for existing Amazon Bedrock Agent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DeleteAgentActionGroupCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DeleteAgentActionGroupCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // DeleteAgentActionGroupRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   actionGroupId: "STRING_VALUE", // required
 *   skipResourceInUseCheck: true || false,
 * };
 * const command = new DeleteAgentActionGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAgentActionGroupCommandInput - {@link DeleteAgentActionGroupCommandInput}
 * @returns {@link DeleteAgentActionGroupCommandOutput}
 * @see {@link DeleteAgentActionGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentActionGroupCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteAgentActionGroupCommand extends $Command
  .classBuilder<
    DeleteAgentActionGroupCommandInput,
    DeleteAgentActionGroupCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "DeleteAgentActionGroup", {})
  .n("BedrockAgentClient", "DeleteAgentActionGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAgentActionGroupCommand)
  .de(de_DeleteAgentActionGroupCommand)
  .build() {}
