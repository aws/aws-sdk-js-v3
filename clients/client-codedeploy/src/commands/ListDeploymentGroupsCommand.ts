// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDeploymentGroupsInput, ListDeploymentGroupsOutput } from "../models/models_0";
import { de_ListDeploymentGroupsCommand, se_ListDeploymentGroupsCommand } from "../protocols/Aws_json1_1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeDeploy_20141006", "ListDeploymentGroups", {})
  .n("CodeDeployClient", "ListDeploymentGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListDeploymentGroupsCommand)
  .de(de_ListDeploymentGroupsCommand)
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
