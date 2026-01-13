// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDeploymentGroupsInput, ListDeploymentGroupsOutput } from "../models/models_0";
import { ListDeploymentGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the deployment groups for an application registered with the Amazon Web Services
 *             user or Amazon Web Services account.</p>
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
 *  <p>The application does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
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
export class ListDeploymentGroupsCommand extends $Command
  .classBuilder<
    ListDeploymentGroupsCommandInput,
    ListDeploymentGroupsCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "ListDeploymentGroups", {})
  .n("CodeDeployClient", "ListDeploymentGroupsCommand")
  .sc(ListDeploymentGroups$)
  .build() {
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
