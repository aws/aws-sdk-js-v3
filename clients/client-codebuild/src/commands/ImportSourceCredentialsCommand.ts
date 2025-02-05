// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ImportSourceCredentialsInput,
  ImportSourceCredentialsInputFilterSensitiveLog,
  ImportSourceCredentialsOutput,
} from "../models/models_0";
import { de_ImportSourceCredentialsCommand, se_ImportSourceCredentialsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportSourceCredentialsCommand}.
 */
export interface ImportSourceCredentialsCommandInput extends ImportSourceCredentialsInput {}
/**
 * @public
 *
 * The output of {@link ImportSourceCredentialsCommand}.
 */
export interface ImportSourceCredentialsCommandOutput extends ImportSourceCredentialsOutput, __MetadataBearer {}

/**
 * <p> Imports the source repository credentials for an CodeBuild project that has its
 *             source code stored in a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ImportSourceCredentialsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ImportSourceCredentialsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeBuildClient(config);
 * const input = { // ImportSourceCredentialsInput
 *   username: "STRING_VALUE",
 *   token: "STRING_VALUE", // required
 *   serverType: "GITHUB" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "GITLAB" || "GITLAB_SELF_MANAGED", // required
 *   authType: "OAUTH" || "BASIC_AUTH" || "PERSONAL_ACCESS_TOKEN" || "CODECONNECTIONS" || "SECRETS_MANAGER", // required
 *   shouldOverwrite: true || false,
 * };
 * const command = new ImportSourceCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // ImportSourceCredentialsOutput
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportSourceCredentialsCommandInput - {@link ImportSourceCredentialsCommandInput}
 * @returns {@link ImportSourceCredentialsCommandOutput}
 * @see {@link ImportSourceCredentialsCommandInput} for command's `input` shape.
 * @see {@link ImportSourceCredentialsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link AccountLimitExceededException} (client fault)
 *  <p>An Amazon Web Services service limit was exceeded for the calling Amazon Web Services account.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be created, because an Amazon Web Services resource with the same
 *             settings already exists.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 * @public
 */
export class ImportSourceCredentialsCommand extends $Command
  .classBuilder<
    ImportSourceCredentialsCommandInput,
    ImportSourceCredentialsCommandOutput,
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
  .s("CodeBuild_20161006", "ImportSourceCredentials", {})
  .n("CodeBuildClient", "ImportSourceCredentialsCommand")
  .f(ImportSourceCredentialsInputFilterSensitiveLog, void 0)
  .ser(se_ImportSourceCredentialsCommand)
  .de(de_ImportSourceCredentialsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportSourceCredentialsInput;
      output: ImportSourceCredentialsOutput;
    };
    sdk: {
      input: ImportSourceCredentialsCommandInput;
      output: ImportSourceCredentialsCommandOutput;
    };
  };
}
