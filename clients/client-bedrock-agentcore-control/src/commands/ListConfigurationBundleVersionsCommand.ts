// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListConfigurationBundleVersionsRequest,
  ListConfigurationBundleVersionsResponse,
} from "../models/models_0";
import { ListConfigurationBundleVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConfigurationBundleVersionsCommand}.
 */
export interface ListConfigurationBundleVersionsCommandInput extends ListConfigurationBundleVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationBundleVersionsCommand}.
 */
export interface ListConfigurationBundleVersionsCommandOutput extends ListConfigurationBundleVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists all versions of a configuration bundle, with optional filtering by branch name or creation source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListConfigurationBundleVersionsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListConfigurationBundleVersionsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListConfigurationBundleVersionsRequest
 *   bundleId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: { // VersionFilter
 *     branchName: "STRING_VALUE",
 *     createdByName: "STRING_VALUE",
 *     latestPerBranch: true || false,
 *   },
 * };
 * const command = new ListConfigurationBundleVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationBundleVersionsResponse
 * //   versions: [ // ConfigurationBundleVersionSummaryList // required
 * //     { // ConfigurationBundleVersionSummary
 * //       bundleArn: "STRING_VALUE", // required
 * //       bundleId: "STRING_VALUE", // required
 * //       versionId: "STRING_VALUE", // required
 * //       lineageMetadata: { // VersionLineageMetadata
 * //         parentVersionIds: [ // ConfigurationBundleVersionList
 * //           "STRING_VALUE",
 * //         ],
 * //         branchName: "STRING_VALUE",
 * //         createdBy: { // VersionCreatedBySource
 * //           name: "STRING_VALUE", // required
 * //           arn: "STRING_VALUE",
 * //         },
 * //         commitMessage: "STRING_VALUE",
 * //       },
 * //       versionCreatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationBundleVersionsCommandInput - {@link ListConfigurationBundleVersionsCommandInput}
 * @returns {@link ListConfigurationBundleVersionsCommandOutput}
 * @see {@link ListConfigurationBundleVersionsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationBundleVersionsCommandOutput} for command's `response` shape.
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
export class ListConfigurationBundleVersionsCommand extends command<ListConfigurationBundleVersionsCommandInput, ListConfigurationBundleVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListConfigurationBundleVersions",
  ListConfigurationBundleVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationBundleVersionsRequest;
      output: ListConfigurationBundleVersionsResponse;
    };
    sdk: {
      input: ListConfigurationBundleVersionsCommandInput;
      output: ListConfigurationBundleVersionsCommandOutput;
    };
  };
}
