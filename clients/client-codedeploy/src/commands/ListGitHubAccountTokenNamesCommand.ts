// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListGitHubAccountTokenNamesInput, ListGitHubAccountTokenNamesOutput } from "../models/models_0";
import { de_ListGitHubAccountTokenNamesCommand, se_ListGitHubAccountTokenNamesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGitHubAccountTokenNamesCommand}.
 */
export interface ListGitHubAccountTokenNamesCommandInput extends ListGitHubAccountTokenNamesInput {}
/**
 * @public
 *
 * The output of {@link ListGitHubAccountTokenNamesCommand}.
 */
export interface ListGitHubAccountTokenNamesCommandOutput extends ListGitHubAccountTokenNamesOutput, __MetadataBearer {}

/**
 * <p>Lists the names of stored connections to GitHub accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListGitHubAccountTokenNamesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListGitHubAccountTokenNamesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // ListGitHubAccountTokenNamesInput
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListGitHubAccountTokenNamesCommand(input);
 * const response = await client.send(command);
 * // { // ListGitHubAccountTokenNamesOutput
 * //   tokenNameList: [ // GitHubAccountTokenNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGitHubAccountTokenNamesCommandInput - {@link ListGitHubAccountTokenNamesCommandInput}
 * @returns {@link ListGitHubAccountTokenNamesCommandOutput}
 * @see {@link ListGitHubAccountTokenNamesCommandInput} for command's `input` shape.
 * @see {@link ListGitHubAccountTokenNamesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The API used does not support the deployment.</p>
 *
 * @throws {@link ResourceValidationException} (client fault)
 *  <p>The specified resource could not be validated.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class ListGitHubAccountTokenNamesCommand extends $Command
  .classBuilder<
    ListGitHubAccountTokenNamesCommandInput,
    ListGitHubAccountTokenNamesCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeDeploy_20141006", "ListGitHubAccountTokenNames", {})
  .n("CodeDeployClient", "ListGitHubAccountTokenNamesCommand")
  .f(void 0, void 0)
  .ser(se_ListGitHubAccountTokenNamesCommand)
  .de(de_ListGitHubAccountTokenNamesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGitHubAccountTokenNamesInput;
      output: ListGitHubAccountTokenNamesOutput;
    };
    sdk: {
      input: ListGitHubAccountTokenNamesCommandInput;
      output: ListGitHubAccountTokenNamesCommandOutput;
    };
  };
}
