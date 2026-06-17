// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListIntegratedResourcesInput, ListIntegratedResourcesOutput } from "../models/models_0";
import { ListIntegratedResources$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIntegratedResourcesCommand}.
 */
export interface ListIntegratedResourcesCommandInput extends ListIntegratedResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListIntegratedResourcesCommand}.
 */
export interface ListIntegratedResourcesCommandOutput extends ListIntegratedResourcesOutput, __MetadataBearer {}

/**
 * <p>Lists the integrated resources for an agent space, optionally filtered by integration or resource type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListIntegratedResourcesCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListIntegratedResourcesCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListIntegratedResourcesInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   integrationId: "STRING_VALUE",
 *   resourceType: "CODE_REPOSITORY" || "DOCUMENT",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIntegratedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListIntegratedResourcesOutput
 * //   integratedResourceSummaries: [ // IntegratedResourceSummaryList // required
 * //     { // IntegratedResourceSummary
 * //       integrationId: "STRING_VALUE", // required
 * //       resource: { // IntegratedResourceMetadata Union: only one key present
 * //         githubRepository: { // GitHubRepositoryMetadata
 * //           name: "STRING_VALUE", // required
 * //           providerResourceId: "STRING_VALUE", // required
 * //           owner: "STRING_VALUE", // required
 * //           accessType: "PRIVATE" || "PUBLIC",
 * //         },
 * //         gitlabRepository: { // GitLabRepositoryMetadata
 * //           name: "STRING_VALUE", // required
 * //           providerResourceId: "STRING_VALUE", // required
 * //           namespace: "STRING_VALUE", // required
 * //           accessType: "PRIVATE" || "PUBLIC",
 * //         },
 * //         bitbucketRepository: { // BitbucketRepositoryMetadata
 * //           name: "STRING_VALUE", // required
 * //           providerResourceId: "STRING_VALUE", // required
 * //           workspace: "STRING_VALUE", // required
 * //           accessType: "PRIVATE" || "PUBLIC",
 * //         },
 * //         confluenceDocument: { // ConfluenceDocumentMetadata
 * //           name: "STRING_VALUE", // required
 * //           providerResourceId: "STRING_VALUE", // required
 * //           spaceKey: "STRING_VALUE", // required
 * //           pageId: "STRING_VALUE", // required
 * //           title: "STRING_VALUE",
 * //           spaceTitle: "STRING_VALUE",
 * //         },
 * //       },
 * //       capabilities: { // ProviderResourceCapabilities Union: only one key present
 * //         github: { // GitHubResourceCapabilities
 * //           leaveComments: true || false,
 * //           remediateCode: true || false,
 * //         },
 * //         gitlab: { // GitLabResourceCapabilities
 * //           leaveComments: true || false,
 * //           remediateCode: true || false,
 * //         },
 * //         bitbucket: { // BitbucketResourceCapabilities
 * //           leaveComments: true || false,
 * //           remediateCode: true || false,
 * //         },
 * //         confluence: { // ConfluenceResourceCapabilities
 * //           fetchDocument: true || false,
 * //           createDocument: true || false,
 * //           updateDocument: true || false,
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIntegratedResourcesCommandInput - {@link ListIntegratedResourcesCommandInput}
 * @returns {@link ListIntegratedResourcesCommandOutput}
 * @see {@link ListIntegratedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListIntegratedResourcesCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListIntegratedResourcesCommand extends $Command
  .classBuilder<
    ListIntegratedResourcesCommandInput,
    ListIntegratedResourcesCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "ListIntegratedResources", {})
  .n("SecurityAgentClient", "ListIntegratedResourcesCommand")
  .sc(ListIntegratedResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntegratedResourcesInput;
      output: ListIntegratedResourcesOutput;
    };
    sdk: {
      input: ListIntegratedResourcesCommandInput;
      output: ListIntegratedResourcesCommandOutput;
    };
  };
}
