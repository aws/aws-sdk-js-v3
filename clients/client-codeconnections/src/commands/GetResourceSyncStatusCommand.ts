// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourceSyncStatusInput, GetResourceSyncStatusOutput } from "../models/models_0";
import { de_GetResourceSyncStatusCommand, se_GetResourceSyncStatusCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceSyncStatusCommand}.
 */
export interface GetResourceSyncStatusCommandInput extends GetResourceSyncStatusInput {}
/**
 * @public
 *
 * The output of {@link GetResourceSyncStatusCommand}.
 */
export interface GetResourceSyncStatusCommandOutput extends GetResourceSyncStatusOutput, __MetadataBearer {}

/**
 * <p>Returns the status of the sync with the Git repository for a specific Amazon Web Services
 *       resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, GetResourceSyncStatusCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, GetResourceSyncStatusCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // GetResourceSyncStatusInput
 *   ResourceName: "STRING_VALUE", // required
 *   SyncType: "CFN_STACK_SYNC", // required
 * };
 * const command = new GetResourceSyncStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceSyncStatusOutput
 * //   DesiredState: { // Revision
 * //     Branch: "STRING_VALUE", // required
 * //     Directory: "STRING_VALUE", // required
 * //     OwnerId: "STRING_VALUE", // required
 * //     RepositoryName: "STRING_VALUE", // required
 * //     ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps", // required
 * //     Sha: "STRING_VALUE", // required
 * //   },
 * //   LatestSuccessfulSync: { // ResourceSyncAttempt
 * //     Events: [ // ResourceSyncEventList // required
 * //       { // ResourceSyncEvent
 * //         Event: "STRING_VALUE", // required
 * //         ExternalId: "STRING_VALUE",
 * //         Time: new Date("TIMESTAMP"), // required
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     InitialRevision: {
 * //       Branch: "STRING_VALUE", // required
 * //       Directory: "STRING_VALUE", // required
 * //       OwnerId: "STRING_VALUE", // required
 * //       RepositoryName: "STRING_VALUE", // required
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps", // required
 * //       Sha: "STRING_VALUE", // required
 * //     },
 * //     StartedAt: new Date("TIMESTAMP"), // required
 * //     Status: "FAILED" || "INITIATED" || "IN_PROGRESS" || "SUCCEEDED", // required
 * //     TargetRevision: {
 * //       Branch: "STRING_VALUE", // required
 * //       Directory: "STRING_VALUE", // required
 * //       OwnerId: "STRING_VALUE", // required
 * //       RepositoryName: "STRING_VALUE", // required
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps", // required
 * //       Sha: "STRING_VALUE", // required
 * //     },
 * //     Target: "STRING_VALUE", // required
 * //   },
 * //   LatestSync: {
 * //     Events: [ // required
 * //       {
 * //         Event: "STRING_VALUE", // required
 * //         ExternalId: "STRING_VALUE",
 * //         Time: new Date("TIMESTAMP"), // required
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     InitialRevision: {
 * //       Branch: "STRING_VALUE", // required
 * //       Directory: "STRING_VALUE", // required
 * //       OwnerId: "STRING_VALUE", // required
 * //       RepositoryName: "STRING_VALUE", // required
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps", // required
 * //       Sha: "STRING_VALUE", // required
 * //     },
 * //     StartedAt: new Date("TIMESTAMP"), // required
 * //     Status: "FAILED" || "INITIATED" || "IN_PROGRESS" || "SUCCEEDED", // required
 * //     TargetRevision: {
 * //       Branch: "STRING_VALUE", // required
 * //       Directory: "STRING_VALUE", // required
 * //       OwnerId: "STRING_VALUE", // required
 * //       RepositoryName: "STRING_VALUE", // required
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps", // required
 * //       Sha: "STRING_VALUE", // required
 * //     },
 * //     Target: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourceSyncStatusCommandInput - {@link GetResourceSyncStatusCommandInput}
 * @returns {@link GetResourceSyncStatusCommandOutput}
 * @see {@link GetResourceSyncStatusCommandInput} for command's `input` shape.
 * @see {@link GetResourceSyncStatusCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Received an internal server exception. Try again later.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input is not valid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class GetResourceSyncStatusCommand extends $Command
  .classBuilder<
    GetResourceSyncStatusCommandInput,
    GetResourceSyncStatusCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeConnections_20231201", "GetResourceSyncStatus", {})
  .n("CodeConnectionsClient", "GetResourceSyncStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetResourceSyncStatusCommand)
  .de(de_GetResourceSyncStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceSyncStatusInput;
      output: GetResourceSyncStatusOutput;
    };
    sdk: {
      input: GetResourceSyncStatusCommandInput;
      output: GetResourceSyncStatusCommandOutput;
    };
  };
}
