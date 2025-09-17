// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFleetInput, DeleteFleetOutput } from "../models/models_0";
import { de_DeleteFleetCommand, se_DeleteFleetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFleetCommand}.
 */
export interface DeleteFleetCommandInput extends DeleteFleetInput {}
/**
 * @public
 *
 * The output of {@link DeleteFleetCommand}.
 */
export interface DeleteFleetCommandOutput extends DeleteFleetOutput, __MetadataBearer {}

/**
 * <p>Deletes a compute fleet. When you delete a compute fleet, its builds are not deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteFleetCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteFleetCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // DeleteFleetInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFleetCommandInput - {@link DeleteFleetCommandInput}
 * @returns {@link DeleteFleetCommandOutput}
 * @see {@link DeleteFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class DeleteFleetCommand extends $Command
  .classBuilder<
    DeleteFleetCommandInput,
    DeleteFleetCommandOutput,
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
  .s("CodeBuild_20161006", "DeleteFleet", {})
  .n("CodeBuildClient", "DeleteFleetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFleetCommand)
  .de(de_DeleteFleetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFleetInput;
      output: {};
    };
    sdk: {
      input: DeleteFleetCommandInput;
      output: DeleteFleetCommandOutput;
    };
  };
}
