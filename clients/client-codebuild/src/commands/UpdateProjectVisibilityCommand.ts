// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateProjectVisibilityInput, UpdateProjectVisibilityOutput } from "../models/models_0";
import { UpdateProjectVisibility } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProjectVisibilityCommand}.
 */
export interface UpdateProjectVisibilityCommandInput extends UpdateProjectVisibilityInput {}
/**
 * @public
 *
 * The output of {@link UpdateProjectVisibilityCommand}.
 */
export interface UpdateProjectVisibilityCommandOutput extends UpdateProjectVisibilityOutput, __MetadataBearer {}

/**
 * <p>Changes the public visibility for a project. The project's build results, logs, and
 *       artifacts are available to the general public.  For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build
 *         projects</a> in the <i>CodeBuild User Guide</i>.</p>
 *          <important>
 *             <p>The following should be kept in mind when making your projects public:</p>
 *             <ul>
 *                <li>
 *                   <p>All of a project's build results, logs, and artifacts, including builds that were run
 *             when the project was private, are available to the general public.</p>
 *                </li>
 *                <li>
 *                   <p>All build logs and artifacts are available to the public. Environment variables, source
 *             code, and other sensitive information may have been output to the build logs and artifacts.
 *             You must be careful about what information is output to the build logs. Some best practice
 *             are:</p>
 *                   <ul>
 *                      <li>
 *                         <p>Do not store sensitive values in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store
 *                 or Secrets Manager to store sensitive values.</p>
 *                      </li>
 *                      <li>
 *                         <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best
 *                   practices for using webhooks</a> in the <i>CodeBuild User
 *                   Guide</i> to limit which entities can trigger a build, and do
 *                   not store the buildspec in the project itself, to ensure that your webhooks are as
 *                   secure as possible.</p>
 *                      </li>
 *                   </ul>
 *                </li>
 *                <li>
 *                   <p>A malicious user can use public builds to distribute malicious artifacts. We recommend
 *             that you review all pull requests to verify that the pull request is a legitimate change. We
 *             also recommend that you validate any artifacts with their checksums to make sure that the
 *             correct artifacts are being downloaded.</p>
 *                </li>
 *             </ul>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateProjectVisibilityCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateProjectVisibilityCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // UpdateProjectVisibilityInput
 *   projectArn: "STRING_VALUE", // required
 *   projectVisibility: "PUBLIC_READ" || "PRIVATE", // required
 *   resourceAccessRole: "STRING_VALUE",
 * };
 * const command = new UpdateProjectVisibilityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProjectVisibilityOutput
 * //   projectArn: "STRING_VALUE",
 * //   publicProjectAlias: "STRING_VALUE",
 * //   projectVisibility: "PUBLIC_READ" || "PRIVATE",
 * // };
 *
 * ```
 *
 * @param UpdateProjectVisibilityCommandInput - {@link UpdateProjectVisibilityCommandInput}
 * @returns {@link UpdateProjectVisibilityCommandOutput}
 * @see {@link UpdateProjectVisibilityCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectVisibilityCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
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
export class UpdateProjectVisibilityCommand extends $Command
  .classBuilder<
    UpdateProjectVisibilityCommandInput,
    UpdateProjectVisibilityCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "UpdateProjectVisibility", {})
  .n("CodeBuildClient", "UpdateProjectVisibilityCommand")
  .sc(UpdateProjectVisibility)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProjectVisibilityInput;
      output: UpdateProjectVisibilityOutput;
    };
    sdk: {
      input: UpdateProjectVisibilityCommandInput;
      output: UpdateProjectVisibilityCommandOutput;
    };
  };
}
