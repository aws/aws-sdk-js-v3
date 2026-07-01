// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIntegratedResourcesInput, UpdateIntegratedResourcesOutput } from "../models/models_0";
import { UpdateIntegratedResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateIntegratedResourcesCommand}.
 */
export interface UpdateIntegratedResourcesCommandInput extends UpdateIntegratedResourcesInput {}
/**
 * @public
 *
 * The output of {@link UpdateIntegratedResourcesCommand}.
 */
export interface UpdateIntegratedResourcesCommandOutput extends UpdateIntegratedResourcesOutput, __MetadataBearer {}

/**
 * <p>Updates the integrated resources for an agent space, including their capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, UpdateIntegratedResourcesCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, UpdateIntegratedResourcesCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // UpdateIntegratedResourcesInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   integrationId: "STRING_VALUE", // required
 *   items: [ // IntegratedResourceInputItemList // required
 *     { // IntegratedResourceInputItem
 *       resource: { // IntegratedResource Union: only one key present
 *         githubRepository: { // GitHubRepositoryResource
 *           name: "STRING_VALUE", // required
 *           owner: "STRING_VALUE", // required
 *         },
 *         gitlabRepository: { // GitLabRepositoryResource
 *           name: "STRING_VALUE", // required
 *           namespace: "STRING_VALUE", // required
 *         },
 *         bitbucketRepository: { // BitbucketRepositoryResource
 *           name: "STRING_VALUE", // required
 *           workspace: "STRING_VALUE", // required
 *         },
 *         confluenceDocument: { // ConfluenceDocumentResource
 *           name: "STRING_VALUE", // required
 *           spaceKey: "STRING_VALUE", // required
 *           pageId: "STRING_VALUE", // required
 *           title: "STRING_VALUE",
 *           spaceTitle: "STRING_VALUE",
 *         },
 *       },
 *       capabilities: { // ProviderResourceCapabilities Union: only one key present
 *         github: { // GitHubResourceCapabilities
 *           leaveComments: true || false,
 *           remediateCode: true || false,
 *         },
 *         gitlab: { // GitLabResourceCapabilities
 *           leaveComments: true || false,
 *           remediateCode: true || false,
 *         },
 *         bitbucket: { // BitbucketResourceCapabilities
 *           leaveComments: true || false,
 *           remediateCode: true || false,
 *         },
 *         confluence: { // ConfluenceResourceCapabilities
 *           fetchDocument: true || false,
 *           createDocument: true || false,
 *           updateDocument: true || false,
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateIntegratedResourcesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateIntegratedResourcesCommandInput - {@link UpdateIntegratedResourcesCommandInput}
 * @returns {@link UpdateIntegratedResourcesCommandOutput}
 * @see {@link UpdateIntegratedResourcesCommandInput} for command's `input` shape.
 * @see {@link UpdateIntegratedResourcesCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
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
export class UpdateIntegratedResourcesCommand extends command<UpdateIntegratedResourcesCommandInput, UpdateIntegratedResourcesCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIntegratedResources",
  UpdateIntegratedResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIntegratedResourcesInput;
      output: {};
    };
    sdk: {
      input: UpdateIntegratedResourcesCommandInput;
      output: UpdateIntegratedResourcesCommandOutput;
    };
  };
}
