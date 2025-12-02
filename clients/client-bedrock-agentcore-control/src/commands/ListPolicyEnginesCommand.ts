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
import { ListPolicyEnginesRequest, ListPolicyEnginesResponse } from "../models/models_0";
import { ListPolicyEngines } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicyEnginesCommand}.
 */
export interface ListPolicyEnginesCommandInput extends ListPolicyEnginesRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyEnginesCommand}.
 */
export interface ListPolicyEnginesCommandOutput extends ListPolicyEnginesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of policy engines within the AgentCore Policy system. This operation supports pagination to help administrators discover and manage policy engines across their account. Each policy engine serves as a container for related policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListPolicyEnginesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListPolicyEnginesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListPolicyEnginesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPolicyEnginesCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyEnginesResponse
 * //   policyEngines: [ // PolicyEngines // required
 * //     { // PolicyEngine
 * //       policyEngineId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       policyEngineArn: "STRING_VALUE", // required
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
 * @param ListPolicyEnginesCommandInput - {@link ListPolicyEnginesCommandInput}
 * @returns {@link ListPolicyEnginesCommandOutput}
 * @see {@link ListPolicyEnginesCommandInput} for command's `input` shape.
 * @see {@link ListPolicyEnginesCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
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
export class ListPolicyEnginesCommand extends $Command
  .classBuilder<
    ListPolicyEnginesCommandInput,
    ListPolicyEnginesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListPolicyEngines", {})
  .n("BedrockAgentCoreControlClient", "ListPolicyEnginesCommand")
  .sc(ListPolicyEngines)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyEnginesRequest;
      output: ListPolicyEnginesResponse;
    };
    sdk: {
      input: ListPolicyEnginesCommandInput;
      output: ListPolicyEnginesCommandOutput;
    };
  };
}
