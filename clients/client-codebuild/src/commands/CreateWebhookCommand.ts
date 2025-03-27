// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWebhookInput, CreateWebhookOutput } from "../models/models_0";
import { de_CreateWebhookCommand, se_CreateWebhookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWebhookCommand}.
 */
export interface CreateWebhookCommandInput extends CreateWebhookInput {}
/**
 * @public
 *
 * The output of {@link CreateWebhookCommand}.
 */
export interface CreateWebhookCommandOutput extends CreateWebhookOutput, __MetadataBearer {}

/**
 * <p>For an existing CodeBuild build project that has its source code stored in a GitHub or
 *       Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a
 *       code change is pushed to the repository.</p>
 *          <important>
 *             <p>If you enable webhooks for an CodeBuild project, and the project is used as a build
 *         step in CodePipeline, then two identical builds are created for each commit. One build is
 *         triggered through webhooks, and one through CodePipeline. Because billing is on a per-build
 *         basis, you are billed for both builds. Therefore, if you are using CodePipeline, we
 *         recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the
 *         Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, CreateWebhookCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, CreateWebhookCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // CreateWebhookInput
 *   projectName: "STRING_VALUE", // required
 *   branchFilter: "STRING_VALUE",
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
 *   manualCreation: true || false,
 *   scopeConfiguration: { // ScopeConfiguration
 *     name: "STRING_VALUE", // required
 *     domain: "STRING_VALUE",
 *     scope: "GITHUB_ORGANIZATION" || "GITHUB_GLOBAL" || "GITLAB_GROUP", // required
 *   },
 * };
 * const command = new CreateWebhookCommand(input);
 * const response = await client.send(command);
 * // { // CreateWebhookOutput
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
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateWebhookCommandInput - {@link CreateWebhookCommandInput}
 * @returns {@link CreateWebhookCommandOutput}
 * @see {@link CreateWebhookCommandInput} for command's `input` shape.
 * @see {@link CreateWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link OAuthProviderException} (client fault)
 *  <p>There was a problem with the underlying OAuth provider.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be created, because an Amazon Web Services resource with the same
 *             settings already exists.</p>
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
export class CreateWebhookCommand extends $Command
  .classBuilder<
    CreateWebhookCommandInput,
    CreateWebhookCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "CreateWebhook", {})
  .n("CodeBuildClient", "CreateWebhookCommand")
  .f(void 0, void 0)
  .ser(se_CreateWebhookCommand)
  .de(de_CreateWebhookCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWebhookInput;
      output: CreateWebhookOutput;
    };
    sdk: {
      input: CreateWebhookCommandInput;
      output: CreateWebhookCommandOutput;
    };
  };
}
