// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteGitHubAccountTokenInput, DeleteGitHubAccountTokenOutput } from "../models/models_0";
import { DeleteGitHubAccountToken } from "../schemas/schemas_7_Account";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGitHubAccountTokenCommand}.
 */
export interface DeleteGitHubAccountTokenCommandInput extends DeleteGitHubAccountTokenInput {}
/**
 * @public
 *
 * The output of {@link DeleteGitHubAccountTokenCommand}.
 */
export interface DeleteGitHubAccountTokenCommandOutput extends DeleteGitHubAccountTokenOutput, __MetadataBearer {}

/**
 * <p>Deletes a GitHub account connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteGitHubAccountTokenCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteGitHubAccountTokenCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // DeleteGitHubAccountTokenInput
 *   tokenName: "STRING_VALUE",
 * };
 * const command = new DeleteGitHubAccountTokenCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGitHubAccountTokenOutput
 * //   tokenName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteGitHubAccountTokenCommandInput - {@link DeleteGitHubAccountTokenCommandInput}
 * @returns {@link DeleteGitHubAccountTokenCommandOutput}
 * @see {@link DeleteGitHubAccountTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteGitHubAccountTokenCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link GitHubAccountTokenDoesNotExistException} (client fault)
 *  <p>No GitHub account connection exists with the named specified in the call.</p>
 *
 * @throws {@link GitHubAccountTokenNameRequiredException} (client fault)
 *  <p>The call is missing a required GitHub account connection name.</p>
 *
 * @throws {@link InvalidGitHubAccountTokenNameException} (client fault)
 *  <p>The format of the specified GitHub account connection name is invalid.</p>
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
export class DeleteGitHubAccountTokenCommand extends $Command
  .classBuilder<
    DeleteGitHubAccountTokenCommandInput,
    DeleteGitHubAccountTokenCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "DeleteGitHubAccountToken", {})
  .n("CodeDeployClient", "DeleteGitHubAccountTokenCommand")
  .sc(DeleteGitHubAccountToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGitHubAccountTokenInput;
      output: DeleteGitHubAccountTokenOutput;
    };
    sdk: {
      input: DeleteGitHubAccountTokenCommandInput;
      output: DeleteGitHubAccountTokenCommandOutput;
    };
  };
}
