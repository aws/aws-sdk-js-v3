// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDeploymentConfigsInput, ListDeploymentConfigsOutput } from "../models/models_0";
import { ListDeploymentConfigs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDeploymentConfigsCommand}.
 */
export interface ListDeploymentConfigsCommandInput extends ListDeploymentConfigsInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentConfigsCommand}.
 */
export interface ListDeploymentConfigsCommandOutput extends ListDeploymentConfigsOutput, __MetadataBearer {}

/**
 * <p>Lists the deployment configurations with the user or Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentConfigsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentConfigsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // ListDeploymentConfigsInput
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDeploymentConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentConfigsOutput
 * //   deploymentConfigsList: [ // DeploymentConfigsList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentConfigsCommandInput - {@link ListDeploymentConfigsCommandInput}
 * @returns {@link ListDeploymentConfigsCommandOutput}
 * @see {@link ListDeploymentConfigsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentConfigsCommandOutput} for command's `response` shape.
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
export class ListDeploymentConfigsCommand extends command<ListDeploymentConfigsCommandInput, ListDeploymentConfigsCommandOutput>(
  _ep0,
  _mw0,
  "ListDeploymentConfigs",
  ListDeploymentConfigs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentConfigsInput;
      output: ListDeploymentConfigsOutput;
    };
    sdk: {
      input: ListDeploymentConfigsCommandInput;
      output: ListDeploymentConfigsCommandOutput;
    };
  };
}
