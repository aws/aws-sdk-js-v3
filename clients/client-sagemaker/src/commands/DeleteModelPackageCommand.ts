// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteModelPackageInput } from "../models/models_2";
import { de_DeleteModelPackageCommand, se_DeleteModelPackageCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteModelPackageCommand}.
 */
export interface DeleteModelPackageCommandInput extends DeleteModelPackageInput {}
/**
 * @public
 *
 * The output of {@link DeleteModelPackageCommand}.
 */
export interface DeleteModelPackageCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a model package.</p>
 *          <p>A model package is used to create SageMaker models or list on Amazon Web Services Marketplace. Buyers can
 *             subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelPackageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelPackageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // DeleteModelPackageInput
 *   ModelPackageName: "STRING_VALUE", // required
 * };
 * const command = new DeleteModelPackageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteModelPackageCommandInput - {@link DeleteModelPackageCommandInput}
 * @returns {@link DeleteModelPackageCommandOutput}
 * @see {@link DeleteModelPackageCommandInput} for command's `input` shape.
 * @see {@link DeleteModelPackageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DeleteModelPackageCommand extends $Command
  .classBuilder<
    DeleteModelPackageCommandInput,
    DeleteModelPackageCommandOutput,
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
  .s("SageMaker", "DeleteModelPackage", {})
  .n("SageMakerClient", "DeleteModelPackageCommand")
  .f(void 0, void 0)
  .ser(se_DeleteModelPackageCommand)
  .de(de_DeleteModelPackageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteModelPackageInput;
      output: {};
    };
    sdk: {
      input: DeleteModelPackageCommandInput;
      output: DeleteModelPackageCommandOutput;
    };
  };
}
