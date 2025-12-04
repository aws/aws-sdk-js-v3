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
import type { UpdatePolicyRequest, UpdatePolicyResponse } from "../models/models_1";
import { UpdatePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePolicyCommand}.
 */
export interface UpdatePolicyCommandInput extends UpdatePolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePolicyCommand}.
 */
export interface UpdatePolicyCommandOutput extends UpdatePolicyResponse, __MetadataBearer {}

/**
 * <p>Updates an existing policy within the AgentCore Policy system. This operation allows modification of the policy description and definition while maintaining the policy's identity. The updated policy is validated against the Cedar schema before being applied. This is an asynchronous operation. Use the <code>GetPolicy</code> operation to poll the <code>status</code> field to track completion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdatePolicyCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdatePolicyCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdatePolicyRequest
 *   policyEngineId: "STRING_VALUE", // required
 *   policyId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   definition: { // PolicyDefinition Union: only one key present
 *     cedar: { // CedarPolicy
 *       statement: "STRING_VALUE", // required
 *     },
 *   },
 *   validationMode: "FAIL_ON_ANY_FINDINGS" || "IGNORE_ALL_FINDINGS",
 * };
 * const command = new UpdatePolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePolicyResponse
 * //   policyId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   policyEngineId: "STRING_VALUE", // required
 * //   definition: { // PolicyDefinition Union: only one key present
 * //     cedar: { // CedarPolicy
 * //       statement: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   policyArn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   statusReasons: [ // PolicyStatusReasons // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdatePolicyCommandInput - {@link UpdatePolicyCommandInput}
 * @returns {@link UpdatePolicyCommandOutput}
 * @see {@link UpdatePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdatePolicyCommandOutput} for command's `response` shape.
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
export class UpdatePolicyCommand extends $Command
  .classBuilder<
    UpdatePolicyCommandInput,
    UpdatePolicyCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "UpdatePolicy", {})
  .n("BedrockAgentCoreControlClient", "UpdatePolicyCommand")
  .sc(UpdatePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePolicyRequest;
      output: UpdatePolicyResponse;
    };
    sdk: {
      input: UpdatePolicyCommandInput;
      output: UpdatePolicyCommandOutput;
    };
  };
}
