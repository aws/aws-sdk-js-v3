// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPolicySummariesRequest, ListPolicySummariesResponse } from "../models/models_1";
import { ListPolicySummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicySummariesCommand}.
 */
export interface ListPolicySummariesCommandInput extends ListPolicySummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicySummariesCommand}.
 */
export interface ListPolicySummariesCommandOutput extends ListPolicySummariesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of metadata-only policy summaries within a policy engine without decrypting customer content. This lightweight read operation returns resource identifiers, status, and timestamps for each policy, but does not include policy definitions, descriptions, or status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListPolicySummariesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListPolicySummariesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListPolicySummariesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   policyEngineId: "STRING_VALUE", // required
 *   targetResourceScope: "STRING_VALUE",
 * };
 * const command = new ListPolicySummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicySummariesResponse
 * //   policies: [ // PolicySummaryList // required
 * //     { // PolicySummary
 * //       policyId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       policyEngineId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       policyArn: "STRING_VALUE", // required
 * //       status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //       enforcementMode: "ACTIVE" || "LOG_ONLY",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPolicySummariesCommandInput - {@link ListPolicySummariesCommandInput}
 * @returns {@link ListPolicySummariesCommandOutput}
 * @see {@link ListPolicySummariesCommandInput} for command's `input` shape.
 * @see {@link ListPolicySummariesCommandOutput} for command's `response` shape.
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
export class ListPolicySummariesCommand extends $Command
  .classBuilder<
    ListPolicySummariesCommandInput,
    ListPolicySummariesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListPolicySummaries", {})
  .n("BedrockAgentCoreControlClient", "ListPolicySummariesCommand")
  .sc(ListPolicySummaries$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicySummariesRequest;
      output: ListPolicySummariesResponse;
    };
    sdk: {
      input: ListPolicySummariesCommandInput;
      output: ListPolicySummariesCommandOutput;
    };
  };
}
