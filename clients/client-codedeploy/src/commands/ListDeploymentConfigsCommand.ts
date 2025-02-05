// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDeploymentConfigsInput, ListDeploymentConfigsOutput } from "../models/models_0";
import { de_ListDeploymentConfigsCommand, se_ListDeploymentConfigsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class ListDeploymentConfigsCommand extends $Command
  .classBuilder<
    ListDeploymentConfigsCommandInput,
    ListDeploymentConfigsCommandOutput,
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
  .s("CodeDeploy_20141006", "ListDeploymentConfigs", {})
  .n("CodeDeployClient", "ListDeploymentConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListDeploymentConfigsCommand)
  .de(de_ListDeploymentConfigsCommand)
  .build() {
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
