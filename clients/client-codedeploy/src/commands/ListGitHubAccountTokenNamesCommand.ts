// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGitHubAccountTokenNamesInput, ListGitHubAccountTokenNamesOutput } from "../models/models_0";
import { ListGitHubAccountTokenNames$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the names of stored connections to GitHub accounts.
 *
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
 *
 * The next token was specified in an invalid format.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * The API used does not support the deployment.
 *
 * @throws {@link ResourceValidationException} (client fault)
 *
 * The specified resource could not be validated.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class ListGitHubAccountTokenNamesCommand extends command<ListGitHubAccountTokenNamesCommandInput, ListGitHubAccountTokenNamesCommandOutput>(
  _ep0,
  _mw0,
  "ListGitHubAccountTokenNames",
  ListGitHubAccountTokenNames$
) {
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
