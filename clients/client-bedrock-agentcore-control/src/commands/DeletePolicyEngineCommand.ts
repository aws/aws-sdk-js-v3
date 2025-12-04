// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeletePolicyEngineRequest, DeletePolicyEngineResponse } from "../models/models_0";
import { DeletePolicyEngine } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePolicyEngineCommand}.
 */
export interface DeletePolicyEngineCommandInput extends DeletePolicyEngineRequest {}
/**
 * @public
 *
 * The output of {@link DeletePolicyEngineCommand}.
 */
export interface DeletePolicyEngineCommandOutput extends DeletePolicyEngineResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing policy engine from the AgentCore Policy system. The policy engine must not have any associated policies before deletion. Once deleted, the policy engine and all its configurations become unavailable for policy management and evaluation. This is an asynchronous operation. Use the <code>GetPolicyEngine</code> operation to poll the <code>status</code> field to track completion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeletePolicyEngineCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeletePolicyEngineCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeletePolicyEngineRequest
 *   policyEngineId: "STRING_VALUE", // required
 * };
 * const command = new DeletePolicyEngineCommand(input);
 * const response = await client.send(command);
 * // { // DeletePolicyEngineResponse
 * //   policyEngineId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   policyEngineArn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   statusReasons: [ // PolicyStatusReasons // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeletePolicyEngineCommandInput - {@link DeletePolicyEngineCommandInput}
 * @returns {@link DeletePolicyEngineCommandOutput}
 * @see {@link DeletePolicyEngineCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyEngineCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class DeletePolicyEngineCommand extends $Command
  .classBuilder<
    DeletePolicyEngineCommandInput,
    DeletePolicyEngineCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "DeletePolicyEngine", {})
  .n("BedrockAgentCoreControlClient", "DeletePolicyEngineCommand")
  .sc(DeletePolicyEngine)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePolicyEngineRequest;
      output: DeletePolicyEngineResponse;
    };
    sdk: {
      input: DeletePolicyEngineCommandInput;
      output: DeletePolicyEngineCommandOutput;
    };
  };
}
