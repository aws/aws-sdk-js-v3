// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListApplicationsInput, ListApplicationsOutput } from "../models/models_0";
import { ListApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListApplicationsCommand}.
 */
export interface ListApplicationsCommandInput extends ListApplicationsInput {}
/**
 * @public
 *
 * The output of {@link ListApplicationsCommand}.
 */
export interface ListApplicationsCommandOutput extends ListApplicationsOutput, __MetadataBearer {}

/**
 * <p>Lists the applications registered with the user or Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListApplicationsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListApplicationsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // ListApplicationsInput
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationsOutput
 * //   applications: [ // ApplicationsList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationsCommandInput - {@link ListApplicationsCommandInput}
 * @returns {@link ListApplicationsCommandOutput}
 * @see {@link ListApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class ListApplicationsCommand extends command<ListApplicationsCommandInput, ListApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "ListApplications",
  ListApplications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationsInput;
      output: ListApplicationsOutput;
    };
    sdk: {
      input: ListApplicationsCommandInput;
      output: ListApplicationsCommandOutput;
    };
  };
}
