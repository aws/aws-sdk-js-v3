// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
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
 * import { CodeStarConnectionsClient, GetResourceSyncStatusCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, GetResourceSyncStatusCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeStarConnectionsClient(config);
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
 * //     ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged", // required
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
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged", // required
 * //       Sha: "STRING_VALUE", // required
 * //     },
 * //     StartedAt: new Date("TIMESTAMP"), // required
 * //     Status: "FAILED" || "INITIATED" || "IN_PROGRESS" || "SUCCEEDED", // required
 * //     TargetRevision: {
 * //       Branch: "STRING_VALUE", // required
 * //       Directory: "STRING_VALUE", // required
 * //       OwnerId: "STRING_VALUE", // required
 * //       RepositoryName: "STRING_VALUE", // required
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged", // required
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
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged", // required
 * //       Sha: "STRING_VALUE", // required
 * //     },
 * //     StartedAt: new Date("TIMESTAMP"), // required
 * //     Status: "FAILED" || "INITIATED" || "IN_PROGRESS" || "SUCCEEDED", // required
 * //     TargetRevision: {
 * //       Branch: "STRING_VALUE", // required
 * //       Directory: "STRING_VALUE", // required
 * //       OwnerId: "STRING_VALUE", // required
 * //       RepositoryName: "STRING_VALUE", // required
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged", // required
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
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
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
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 * @public
 */
export class GetResourceSyncStatusCommand extends $Command
  .classBuilder<
    GetResourceSyncStatusCommandInput,
    GetResourceSyncStatusCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_connections_20191201", "GetResourceSyncStatus", {})
  .n("CodeStarConnectionsClient", "GetResourceSyncStatusCommand")
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
