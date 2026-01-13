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
import type { ListPoliciesRequest, ListPoliciesResponse } from "../models/models_1";
import { ListPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandInput extends ListPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandOutput extends ListPoliciesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of policies within the AgentCore Policy engine. This operation supports pagination and filtering to help administrators manage and discover policies across policy engines. Results can be filtered by policy engine or resource associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListPoliciesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListPoliciesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListPoliciesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   policyEngineId: "STRING_VALUE", // required
 *   targetResourceScope: "STRING_VALUE",
 * };
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListPoliciesResponse
 * //   policies: [ // Policies // required
 * //     { // Policy
 * //       policyId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       policyEngineId: "STRING_VALUE", // required
 * //       definition: { // PolicyDefinition Union: only one key present
 * //         cedar: { // CedarPolicy
 * //           statement: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       policyArn: "STRING_VALUE", // required
 * //       status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //       statusReasons: [ // PolicyStatusReasons // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPoliciesCommandInput - {@link ListPoliciesCommandInput}
 * @returns {@link ListPoliciesCommandOutput}
 * @see {@link ListPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesCommandOutput} for command's `response` shape.
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
export class ListPoliciesCommand extends $Command
  .classBuilder<
    ListPoliciesCommandInput,
    ListPoliciesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListPolicies", {})
  .n("BedrockAgentCoreControlClient", "ListPoliciesCommand")
  .sc(ListPolicies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPoliciesRequest;
      output: ListPoliciesResponse;
    };
    sdk: {
      input: ListPoliciesCommandInput;
      output: ListPoliciesCommandOutput;
    };
  };
}
