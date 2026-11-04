// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePolicyRequest, UpdatePolicyResponse } from "../models/models_2";
import { UpdatePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates an existing policy within the AgentCore Policy system. This operation allows modification of the policy description and definition while maintaining the policy's identity. The updated policy is validated against the Cedar schema before being applied. This is an asynchronous operation. Use the `GetPolicy` operation to poll the `status` field to track completion.
 *
 * If the updated policy is a temporal policy, the policy engine invalidates all active temporal sessions. If the update adds or removes temporal operators, the policy engine also invalidates active temporal sessions. For more information about temporal policy sessions, see [session-based temporal policies](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-session-based-temporal.html). The policy engine returns an HTTP 409 `ConflictException` to in-flight sessions. To resume, you must start a new session with a new session ID.
 *
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
 *   description: { // UpdatedDescription
 *     optionalValue: "STRING_VALUE",
 *   },
 *   definition: { // PolicyDefinition Union: only one key present
 *     cedar: { // CedarPolicy
 *       statement: "STRING_VALUE", // required
 *     },
 *     policyGeneration: { // PolicyGenerationDetails
 *       policyGenerationId: "STRING_VALUE", // required
 *       policyGenerationAssetId: "STRING_VALUE", // required
 *     },
 *     policy: { // PolicyStatement
 *       statement: "STRING_VALUE", // required
 *     },
 *   },
 *   validationMode: "FAIL_ON_ANY_FINDINGS" || "IGNORE_ALL_FINDINGS",
 *   enforcementMode: "ACTIVE" || "LOG_ONLY",
 * };
 * const command = new UpdatePolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePolicyResponse
 * //   policyId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   policyEngineId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   policyArn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   enforcementMode: "ACTIVE" || "LOG_ONLY",
 * //   definition: { // PolicyDefinition Union: only one key present
 * //     cedar: { // CedarPolicy
 * //       statement: "STRING_VALUE", // required
 * //     },
 * //     policyGeneration: { // PolicyGenerationDetails
 * //       policyGenerationId: "STRING_VALUE", // required
 * //       policyGenerationAssetId: "STRING_VALUE", // required
 * //     },
 * //     policy: { // PolicyStatement
 * //       statement: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
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
 *
 * This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This exception is thrown when a request is made beyond the service quota
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentCoreControl service.
 *
 * @public
 */
export class UpdatePolicyCommand extends command<UpdatePolicyCommandInput, UpdatePolicyCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePolicy",
  UpdatePolicy$
) {
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
