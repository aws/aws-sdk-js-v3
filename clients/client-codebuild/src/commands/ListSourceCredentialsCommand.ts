// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSourceCredentialsInput, ListSourceCredentialsOutput } from "../models/models_0";
import { de_ListSourceCredentialsCommand, se_ListSourceCredentialsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSourceCredentialsCommand}.
 */
export interface ListSourceCredentialsCommandInput extends ListSourceCredentialsInput {}
/**
 * @public
 *
 * The output of {@link ListSourceCredentialsCommand}.
 */
export interface ListSourceCredentialsCommandOutput extends ListSourceCredentialsOutput, __MetadataBearer {}

/**
 * <p> Returns a list of <code>SourceCredentialsInfo</code> objects. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSourceCredentialsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSourceCredentialsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = {};
 * const command = new ListSourceCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceCredentialsOutput
 * //   sourceCredentialsInfos: [ // SourceCredentialsInfos
 * //     { // SourceCredentialsInfo
 * //       arn: "STRING_VALUE",
 * //       serverType: "GITHUB" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "GITLAB" || "GITLAB_SELF_MANAGED",
 * //       authType: "OAUTH" || "BASIC_AUTH" || "PERSONAL_ACCESS_TOKEN" || "CODECONNECTIONS" || "SECRETS_MANAGER",
 * //       resource: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSourceCredentialsCommandInput - {@link ListSourceCredentialsCommandInput}
 * @returns {@link ListSourceCredentialsCommandOutput}
 * @see {@link ListSourceCredentialsCommandInput} for command's `input` shape.
 * @see {@link ListSourceCredentialsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class ListSourceCredentialsCommand extends $Command
  .classBuilder<
    ListSourceCredentialsCommandInput,
    ListSourceCredentialsCommandOutput,
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
  .s("CodeBuild_20161006", "ListSourceCredentials", {})
  .n("CodeBuildClient", "ListSourceCredentialsCommand")
  .f(void 0, void 0)
  .ser(se_ListSourceCredentialsCommand)
  .de(de_ListSourceCredentialsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListSourceCredentialsOutput;
    };
    sdk: {
      input: ListSourceCredentialsCommandInput;
      output: ListSourceCredentialsCommandOutput;
    };
  };
}
