// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWebhookInput, UpdateWebhookOutput } from "../models/models_0";
import { UpdateWebhook } from "../schemas/schemas_9_Webhook";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWebhookCommand}.
 */
export interface UpdateWebhookCommandInput extends UpdateWebhookInput {}
/**
 * @public
 *
 * The output of {@link UpdateWebhookCommand}.
 */
export interface UpdateWebhookCommandOutput extends UpdateWebhookOutput, __MetadataBearer {}

/**
 * <p> Updates the webhook associated with an CodeBuild build project. </p>
 *          <note>
 *             <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored.
 *       </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateWebhookCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateWebhookCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // UpdateWebhookInput
 *   projectName: "STRING_VALUE", // required
 *   branchFilter: "STRING_VALUE",
 *   rotateSecret: true || false,
 *   filterGroups: [ // FilterGroups
 *     [ // FilterGroup
 *       { // WebhookFilter
 *         type: "EVENT" || "BASE_REF" || "HEAD_REF" || "ACTOR_ACCOUNT_ID" || "FILE_PATH" || "COMMIT_MESSAGE" || "WORKFLOW_NAME" || "TAG_NAME" || "RELEASE_NAME" || "REPOSITORY_NAME" || "ORGANIZATION_NAME", // required
 *         pattern: "STRING_VALUE", // required
 *         excludeMatchedPattern: true || false,
 *       },
 *     ],
 *   ],
 *   buildType: "BUILD" || "BUILD_BATCH" || "RUNNER_BUILDKITE_BUILD",
 *   pullRequestBuildPolicy: { // PullRequestBuildPolicy
 *     requiresCommentApproval: "DISABLED" || "ALL_PULL_REQUESTS" || "FORK_PULL_REQUESTS", // required
 *     approverRoles: [ // PullRequestBuildApproverRoles
 *       "GITHUB_READ" || "GITHUB_TRIAGE" || "GITHUB_WRITE" || "GITHUB_MAINTAIN" || "GITHUB_ADMIN" || "GITLAB_GUEST" || "GITLAB_PLANNER" || "GITLAB_REPORTER" || "GITLAB_DEVELOPER" || "GITLAB_MAINTAINER" || "GITLAB_OWNER" || "BITBUCKET_READ" || "BITBUCKET_WRITE" || "BITBUCKET_ADMIN",
 *     ],
 *   },
 * };
 * const command = new UpdateWebhookCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWebhookOutput
 * //   webhook: { // Webhook
 * //     url: "STRING_VALUE",
 * //     payloadUrl: "STRING_VALUE",
 * //     secret: "STRING_VALUE",
 * //     branchFilter: "STRING_VALUE",
 * //     filterGroups: [ // FilterGroups
 * //       [ // FilterGroup
 * //         { // WebhookFilter
 * //           type: "EVENT" || "BASE_REF" || "HEAD_REF" || "ACTOR_ACCOUNT_ID" || "FILE_PATH" || "COMMIT_MESSAGE" || "WORKFLOW_NAME" || "TAG_NAME" || "RELEASE_NAME" || "REPOSITORY_NAME" || "ORGANIZATION_NAME", // required
 * //           pattern: "STRING_VALUE", // required
 * //           excludeMatchedPattern: true || false,
 * //         },
 * //       ],
 * //     ],
 * //     buildType: "BUILD" || "BUILD_BATCH" || "RUNNER_BUILDKITE_BUILD",
 * //     manualCreation: true || false,
 * //     lastModifiedSecret: new Date("TIMESTAMP"),
 * //     scopeConfiguration: { // ScopeConfiguration
 * //       name: "STRING_VALUE", // required
 * //       domain: "STRING_VALUE",
 * //       scope: "GITHUB_ORGANIZATION" || "GITHUB_GLOBAL" || "GITLAB_GROUP", // required
 * //     },
 * //     status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING",
 * //     statusMessage: "STRING_VALUE",
 * //     pullRequestBuildPolicy: { // PullRequestBuildPolicy
 * //       requiresCommentApproval: "DISABLED" || "ALL_PULL_REQUESTS" || "FORK_PULL_REQUESTS", // required
 * //       approverRoles: [ // PullRequestBuildApproverRoles
 * //         "GITHUB_READ" || "GITHUB_TRIAGE" || "GITHUB_WRITE" || "GITHUB_MAINTAIN" || "GITHUB_ADMIN" || "GITLAB_GUEST" || "GITLAB_PLANNER" || "GITLAB_REPORTER" || "GITLAB_DEVELOPER" || "GITLAB_MAINTAINER" || "GITLAB_OWNER" || "BITBUCKET_READ" || "BITBUCKET_WRITE" || "BITBUCKET_ADMIN",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWebhookCommandInput - {@link UpdateWebhookCommandInput}
 * @returns {@link UpdateWebhookCommandOutput}
 * @see {@link UpdateWebhookCommandInput} for command's `input` shape.
 * @see {@link UpdateWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link OAuthProviderException} (client fault)
 *  <p>There was a problem with the underlying OAuth provider.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class UpdateWebhookCommand extends $Command
  .classBuilder<
    UpdateWebhookCommandInput,
    UpdateWebhookCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "UpdateWebhook", {})
  .n("CodeBuildClient", "UpdateWebhookCommand")
  .sc(UpdateWebhook)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWebhookInput;
      output: UpdateWebhookOutput;
    };
    sdk: {
      input: UpdateWebhookCommandInput;
      output: UpdateWebhookCommandOutput;
    };
  };
}
