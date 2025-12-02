// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePolicyRequest, CreatePolicyResponse } from "../models/models_0";
import { CreatePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePolicyCommand}.
 */
export interface CreatePolicyCommandInput extends CreatePolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreatePolicyCommand}.
 */
export interface CreatePolicyCommandOutput extends CreatePolicyResponse, __MetadataBearer {}

/**
 * <p>Creates a policy within the AgentCore Policy system. Policies provide real-time, deterministic control over agentic interactions with AgentCore Gateway. Using the Cedar policy language, you can define fine-grained policies that specify which interactions with Gateway tools are permitted based on input parameters and OAuth claims, ensuring agents operate within defined boundaries and business rules. The policy is validated during creation against the Cedar schema generated from the Gateway's tools' input schemas, which defines the available tools, their parameters, and expected data types. This is an asynchronous operation. Use the <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/API_GetPolicy.html">GetPolicy</a> operation to poll the <code>status</code> field to track completion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreatePolicyCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreatePolicyCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreatePolicyRequest
 *   name: "STRING_VALUE", // required
 *   definition: { // PolicyDefinition Union: only one key present
 *     cedar: { // CedarPolicy
 *       statement: "STRING_VALUE", // required
 *     },
 *   },
 *   description: "STRING_VALUE",
 *   validationMode: "FAIL_ON_ANY_FINDINGS" || "IGNORE_ALL_FINDINGS",
 *   policyEngineId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreatePolicyResponse
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
 * @param CreatePolicyCommandInput - {@link CreatePolicyCommandInput}
 * @returns {@link CreatePolicyCommandOutput}
 * @see {@link CreatePolicyCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
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
export class CreatePolicyCommand extends $Command
  .classBuilder<
    CreatePolicyCommandInput,
    CreatePolicyCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreatePolicy", {})
  .n("BedrockAgentCoreControlClient", "CreatePolicyCommand")
  .sc(CreatePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePolicyRequest;
      output: CreatePolicyResponse;
    };
    sdk: {
      input: CreatePolicyCommandInput;
      output: CreatePolicyCommandOutput;
    };
  };
}
