// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDeploymentGroupsInput, ListDeploymentGroupsOutput } from "../models/models_0";
import { ListDeploymentGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDeploymentGroupsCommand}.
 */
export interface ListDeploymentGroupsCommandInput extends ListDeploymentGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentGroupsCommand}.
 */
export interface ListDeploymentGroupsCommandOutput extends ListDeploymentGroupsOutput, __MetadataBearer {}

/**
 * Lists the deployment groups for an application registered with the Amazon Web Services user or Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentGroupsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentGroupsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // ListDeploymentGroupsInput
 *   applicationName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDeploymentGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentGroupsOutput
 * //   applicationName: "STRING_VALUE",
 * //   deploymentGroups: [ // DeploymentGroupsList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentGroupsCommandInput - {@link ListDeploymentGroupsCommandInput}
 * @returns {@link ListDeploymentGroupsCommandOutput}
 * @see {@link ListDeploymentGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *
 * The application does not exist with the user or Amazon Web Services account.
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *
 * The minimum number of required application names was not specified.
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *
 * The application name was specified in an invalid format.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The next token was specified in an invalid format.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class ListDeploymentGroupsCommand extends command<ListDeploymentGroupsCommandInput, ListDeploymentGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListDeploymentGroups",
  ListDeploymentGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentGroupsInput;
      output: ListDeploymentGroupsOutput;
    };
    sdk: {
      input: ListDeploymentGroupsCommandInput;
      output: ListDeploymentGroupsCommandOutput;
    };
  };
}
