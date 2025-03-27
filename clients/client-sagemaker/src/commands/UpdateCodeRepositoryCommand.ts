// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCodeRepositoryInput, UpdateCodeRepositoryOutput } from "../models/models_5";
import { de_UpdateCodeRepositoryCommand, se_UpdateCodeRepositoryCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCodeRepositoryCommand}.
 */
export interface UpdateCodeRepositoryCommandInput extends UpdateCodeRepositoryInput {}
/**
 * @public
 *
 * The output of {@link UpdateCodeRepositoryCommand}.
 */
export interface UpdateCodeRepositoryCommandOutput extends UpdateCodeRepositoryOutput, __MetadataBearer {}

/**
 * <p>Updates the specified Git repository with the specified values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateCodeRepositoryInput
 *   CodeRepositoryName: "STRING_VALUE", // required
 *   GitConfig: { // GitConfigForUpdate
 *     SecretArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCodeRepositoryOutput
 * //   CodeRepositoryArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateCodeRepositoryCommandInput - {@link UpdateCodeRepositoryCommandInput}
 * @returns {@link UpdateCodeRepositoryCommandOutput}
 * @see {@link UpdateCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link UpdateCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class UpdateCodeRepositoryCommand extends $Command
  .classBuilder<
    UpdateCodeRepositoryCommandInput,
    UpdateCodeRepositoryCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "UpdateCodeRepository", {})
  .n("SageMakerClient", "UpdateCodeRepositoryCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCodeRepositoryCommand)
  .de(de_UpdateCodeRepositoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCodeRepositoryInput;
      output: UpdateCodeRepositoryOutput;
    };
    sdk: {
      input: UpdateCodeRepositoryCommandInput;
      output: UpdateCodeRepositoryCommandOutput;
    };
  };
}
