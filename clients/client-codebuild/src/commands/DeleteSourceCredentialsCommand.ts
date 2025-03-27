// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSourceCredentialsInput, DeleteSourceCredentialsOutput } from "../models/models_0";
import { de_DeleteSourceCredentialsCommand, se_DeleteSourceCredentialsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSourceCredentialsCommand}.
 */
export interface DeleteSourceCredentialsCommandInput extends DeleteSourceCredentialsInput {}
/**
 * @public
 *
 * The output of {@link DeleteSourceCredentialsCommand}.
 */
export interface DeleteSourceCredentialsCommandOutput extends DeleteSourceCredentialsOutput, __MetadataBearer {}

/**
 * <p> Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteSourceCredentialsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteSourceCredentialsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // DeleteSourceCredentialsInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteSourceCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSourceCredentialsOutput
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSourceCredentialsCommandInput - {@link DeleteSourceCredentialsCommandInput}
 * @returns {@link DeleteSourceCredentialsCommandOutput}
 * @see {@link DeleteSourceCredentialsCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceCredentialsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class DeleteSourceCredentialsCommand extends $Command
  .classBuilder<
    DeleteSourceCredentialsCommandInput,
    DeleteSourceCredentialsCommandOutput,
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
  .s("CodeBuild_20161006", "DeleteSourceCredentials", {})
  .n("CodeBuildClient", "DeleteSourceCredentialsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSourceCredentialsCommand)
  .de(de_DeleteSourceCredentialsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSourceCredentialsInput;
      output: DeleteSourceCredentialsOutput;
    };
    sdk: {
      input: DeleteSourceCredentialsCommandInput;
      output: DeleteSourceCredentialsCommandOutput;
    };
  };
}
