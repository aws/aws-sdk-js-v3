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
import type { ListDatasetVersionsRequest, ListDatasetVersionsResponse } from "../models/models_0";
import { ListDatasetVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetVersionsCommand}.
 */
export interface ListDatasetVersionsCommandInput extends ListDatasetVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetVersionsCommand}.
 */
export interface ListDatasetVersionsCommandOutput extends ListDatasetVersionsResponse, __MetadataBearer {}

/**
 * <p> Lists all published versions of a dataset, sorted by version number descending (newest first). Does not include the DRAFT working copy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListDatasetVersionsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListDatasetVersionsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListDatasetVersionsRequest
 *   datasetId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDatasetVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetVersionsResponse
 * //   versions: [ // DatasetVersionSummaryList // required
 * //     { // DatasetVersionSummary
 * //       datasetVersion: "STRING_VALUE", // required
 * //       exampleCount: Number("long"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetVersionsCommandInput - {@link ListDatasetVersionsCommandInput}
 * @returns {@link ListDatasetVersionsCommandOutput}
 * @see {@link ListDatasetVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetVersionsCommandOutput} for command's `response` shape.
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
export class ListDatasetVersionsCommand extends $Command
  .classBuilder<
    ListDatasetVersionsCommandInput,
    ListDatasetVersionsCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListDatasetVersions", {})
  .n("BedrockAgentCoreControlClient", "ListDatasetVersionsCommand")
  .sc(ListDatasetVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetVersionsRequest;
      output: ListDatasetVersionsResponse;
    };
    sdk: {
      input: ListDatasetVersionsCommandInput;
      output: ListDatasetVersionsCommandOutput;
    };
  };
}
