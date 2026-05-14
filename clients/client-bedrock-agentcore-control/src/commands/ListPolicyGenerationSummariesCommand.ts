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
import type { ListPolicyGenerationSummariesRequest, ListPolicyGenerationSummariesResponse } from "../models/models_1";
import { ListPolicyGenerationSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicyGenerationSummariesCommand}.
 */
export interface ListPolicyGenerationSummariesCommandInput extends ListPolicyGenerationSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyGenerationSummariesCommand}.
 */
export interface ListPolicyGenerationSummariesCommandOutput extends ListPolicyGenerationSummariesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of metadata-only policy generation summaries within a policy engine without decrypting customer content. This lightweight read operation returns resource identifiers, status, timestamps, and findings for each policy generation, but does not include status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListPolicyGenerationSummariesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListPolicyGenerationSummariesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListPolicyGenerationSummariesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   policyEngineId: "STRING_VALUE", // required
 * };
 * const command = new ListPolicyGenerationSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyGenerationSummariesResponse
 * //   policyGenerations: [ // PolicyGenerationSummaryList // required
 * //     { // PolicyGenerationSummary
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
 * //       findings: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPolicyGenerationSummariesCommandInput - {@link ListPolicyGenerationSummariesCommandInput}
 * @returns {@link ListPolicyGenerationSummariesCommandOutput}
 * @see {@link ListPolicyGenerationSummariesCommandInput} for command's `input` shape.
 * @see {@link ListPolicyGenerationSummariesCommandOutput} for command's `response` shape.
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
export class ListPolicyGenerationSummariesCommand extends $Command
  .classBuilder<
    ListPolicyGenerationSummariesCommandInput,
    ListPolicyGenerationSummariesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListPolicyGenerationSummaries", {})
  .n("BedrockAgentCoreControlClient", "ListPolicyGenerationSummariesCommand")
  .sc(ListPolicyGenerationSummaries$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyGenerationSummariesRequest;
      output: ListPolicyGenerationSummariesResponse;
    };
    sdk: {
      input: ListPolicyGenerationSummariesCommandInput;
      output: ListPolicyGenerationSummariesCommandOutput;
    };
  };
}
