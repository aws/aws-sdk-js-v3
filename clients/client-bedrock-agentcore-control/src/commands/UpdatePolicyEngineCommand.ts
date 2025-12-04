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
import type { UpdatePolicyEngineRequest, UpdatePolicyEngineResponse } from "../models/models_0";
import { UpdatePolicyEngine } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePolicyEngineCommand}.
 */
export interface UpdatePolicyEngineCommandInput extends UpdatePolicyEngineRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePolicyEngineCommand}.
 */
export interface UpdatePolicyEngineCommandOutput extends UpdatePolicyEngineResponse, __MetadataBearer {}

/**
 * <p>Updates an existing policy engine within the AgentCore Policy system. This operation allows modification of the policy engine description while maintaining its identity. This is an asynchronous operation. Use the <code>GetPolicyEngine</code> operation to poll the <code>status</code> field to track completion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdatePolicyEngineCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdatePolicyEngineCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdatePolicyEngineRequest
 *   policyEngineId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdatePolicyEngineCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePolicyEngineResponse
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
 * @param UpdatePolicyEngineCommandInput - {@link UpdatePolicyEngineCommandInput}
 * @returns {@link UpdatePolicyEngineCommandOutput}
 * @see {@link UpdatePolicyEngineCommandInput} for command's `input` shape.
 * @see {@link UpdatePolicyEngineCommandOutput} for command's `response` shape.
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
export class UpdatePolicyEngineCommand extends $Command
  .classBuilder<
    UpdatePolicyEngineCommandInput,
    UpdatePolicyEngineCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "UpdatePolicyEngine", {})
  .n("BedrockAgentCoreControlClient", "UpdatePolicyEngineCommand")
  .sc(UpdatePolicyEngine)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePolicyEngineRequest;
      output: UpdatePolicyEngineResponse;
    };
    sdk: {
      input: UpdatePolicyEngineCommandInput;
      output: UpdatePolicyEngineCommandOutput;
    };
  };
}
