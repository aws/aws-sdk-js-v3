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
import type { ListDatasetExamplesRequest, ListDatasetExamplesResponse } from "../models/models_0";
import { ListDatasetExamples$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetExamplesCommand}.
 */
export interface ListDatasetExamplesCommandInput extends ListDatasetExamplesRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetExamplesCommand}.
 */
export interface ListDatasetExamplesCommandOutput extends ListDatasetExamplesResponse, __MetadataBearer {}

/**
 * <p> Returns paginated examples from the dataset. The server embeds the resolved version in the pagination token. Once pagination begins, all subsequent pages are pinned to that version regardless of concurrent mutations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListDatasetExamplesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListDatasetExamplesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListDatasetExamplesRequest
 *   datasetId: "STRING_VALUE", // required
 *   datasetVersion: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDatasetExamplesCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetExamplesResponse
 * //   datasetArn: "STRING_VALUE", // required
 * //   datasetId: "STRING_VALUE", // required
 * //   datasetVersion: "STRING_VALUE", // required
 * //   examples: [ // DatasetExampleList // required
 * //     "DOCUMENT_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetExamplesCommandInput - {@link ListDatasetExamplesCommandInput}
 * @returns {@link ListDatasetExamplesCommandOutput}
 * @see {@link ListDatasetExamplesCommandInput} for command's `input` shape.
 * @see {@link ListDatasetExamplesCommandOutput} for command's `response` shape.
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
export class ListDatasetExamplesCommand extends $Command
  .classBuilder<
    ListDatasetExamplesCommandInput,
    ListDatasetExamplesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListDatasetExamples", {})
  .n("BedrockAgentCoreControlClient", "ListDatasetExamplesCommand")
  .sc(ListDatasetExamples$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetExamplesRequest;
      output: ListDatasetExamplesResponse;
    };
    sdk: {
      input: ListDatasetExamplesCommandInput;
      output: ListDatasetExamplesCommandOutput;
    };
  };
}
