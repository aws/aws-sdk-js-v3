// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartSandboxConnectionInput, StartSandboxConnectionOutput } from "../models/models_0";
import { de_StartSandboxConnectionCommand, se_StartSandboxConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSandboxConnectionCommand}.
 */
export interface StartSandboxConnectionCommandInput extends StartSandboxConnectionInput {}
/**
 * @public
 *
 * The output of {@link StartSandboxConnectionCommand}.
 */
export interface StartSandboxConnectionCommandOutput extends StartSandboxConnectionOutput, __MetadataBearer {}

/**
 * <p>Starts a sandbox connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StartSandboxConnectionCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StartSandboxConnectionCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // StartSandboxConnectionInput
 *   sandboxId: "STRING_VALUE", // required
 * };
 * const command = new StartSandboxConnectionCommand(input);
 * const response = await client.send(command);
 * // { // StartSandboxConnectionOutput
 * //   ssmSession: { // SSMSession
 * //     sessionId: "STRING_VALUE",
 * //     tokenValue: "STRING_VALUE",
 * //     streamUrl: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartSandboxConnectionCommandInput - {@link StartSandboxConnectionCommandInput}
 * @returns {@link StartSandboxConnectionCommandOutput}
 * @see {@link StartSandboxConnectionCommandInput} for command's `input` shape.
 * @see {@link StartSandboxConnectionCommandOutput} for command's `response` shape.
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
export class StartSandboxConnectionCommand extends $Command
  .classBuilder<
    StartSandboxConnectionCommandInput,
    StartSandboxConnectionCommandOutput,
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
  .s("CodeBuild_20161006", "StartSandboxConnection", {})
  .n("CodeBuildClient", "StartSandboxConnectionCommand")
  .f(void 0, void 0)
  .ser(se_StartSandboxConnectionCommand)
  .de(de_StartSandboxConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSandboxConnectionInput;
      output: StartSandboxConnectionOutput;
    };
    sdk: {
      input: StartSandboxConnectionCommandInput;
      output: StartSandboxConnectionCommandOutput;
    };
  };
}
