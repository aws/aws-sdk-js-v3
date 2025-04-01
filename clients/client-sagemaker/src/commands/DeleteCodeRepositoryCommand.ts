// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCodeRepositoryInput } from "../models/models_2";
import { de_DeleteCodeRepositoryCommand, se_DeleteCodeRepositoryCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCodeRepositoryCommand}.
 */
export interface DeleteCodeRepositoryCommandInput extends DeleteCodeRepositoryInput {}
/**
 * @public
 *
 * The output of {@link DeleteCodeRepositoryCommand}.
 */
export interface DeleteCodeRepositoryCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified Git repository from your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteCodeRepositoryInput
 *   CodeRepositoryName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCodeRepositoryCommandInput - {@link DeleteCodeRepositoryCommandInput}
 * @returns {@link DeleteCodeRepositoryCommandOutput}
 * @see {@link DeleteCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteCodeRepositoryCommand extends $Command
  .classBuilder<
    DeleteCodeRepositoryCommandInput,
    DeleteCodeRepositoryCommandOutput,
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
  .s("SageMaker", "DeleteCodeRepository", {})
  .n("SageMakerClient", "DeleteCodeRepositoryCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCodeRepositoryCommand)
  .de(de_DeleteCodeRepositoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCodeRepositoryInput;
      output: {};
    };
    sdk: {
      input: DeleteCodeRepositoryCommandInput;
      output: DeleteCodeRepositoryCommandOutput;
    };
  };
}
