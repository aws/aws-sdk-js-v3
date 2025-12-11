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
import type { ListPolicyGenerationsRequest, ListPolicyGenerationsResponse } from "../models/models_0";
import { ListPolicyGenerations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicyGenerationsCommand}.
 */
export interface ListPolicyGenerationsCommandInput extends ListPolicyGenerationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyGenerationsCommand}.
 */
export interface ListPolicyGenerationsCommandOutput extends ListPolicyGenerationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of policy generation requests within the AgentCore Policy system. This operation supports pagination and filtering to help track and manage AI-powered policy generation operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListPolicyGenerationsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListPolicyGenerationsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListPolicyGenerationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   policyEngineId: "STRING_VALUE", // required
 * };
 * const command = new ListPolicyGenerationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyGenerationsResponse
 * //   policyGenerations: [ // PolicyGenerations // required
 * //     { // PolicyGeneration
 * //       policyEngineId: "STRING_VALUE", // required
 * //       policyGenerationId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       policyGenerationArn: "STRING_VALUE", // required
 * //       resource: { // Resource Union: only one key present
 * //         arn: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       status: "GENERATING" || "GENERATED" || "GENERATE_FAILED" || "DELETE_FAILED", // required
 * //       statusReasons: [ // PolicyStatusReasons // required
 * //         "STRING_VALUE",
 * //       ],
 * //       findings: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPolicyGenerationsCommandInput - {@link ListPolicyGenerationsCommandInput}
 * @returns {@link ListPolicyGenerationsCommandOutput}
 * @see {@link ListPolicyGenerationsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyGenerationsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
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
export class ListPolicyGenerationsCommand extends $Command
  .classBuilder<
    ListPolicyGenerationsCommandInput,
    ListPolicyGenerationsCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListPolicyGenerations", {})
  .n("BedrockAgentCoreControlClient", "ListPolicyGenerationsCommand")
  .sc(ListPolicyGenerations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyGenerationsRequest;
      output: ListPolicyGenerationsResponse;
    };
    sdk: {
      input: ListPolicyGenerationsCommandInput;
      output: ListPolicyGenerationsCommandOutput;
    };
  };
}
