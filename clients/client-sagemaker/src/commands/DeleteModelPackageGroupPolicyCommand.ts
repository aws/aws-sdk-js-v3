// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteModelPackageGroupPolicyInput } from "../models/models_2";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteModelPackageGroupPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteModelPackageGroupPolicyCommand}.
 */
export interface DeleteModelPackageGroupPolicyCommandInput extends DeleteModelPackageGroupPolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteModelPackageGroupPolicyCommand}.
 */
export interface DeleteModelPackageGroupPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a model group resource policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelPackageGroupPolicyCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelPackageGroupPolicyCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteModelPackageGroupPolicyInput
 *   ModelPackageGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteModelPackageGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteModelPackageGroupPolicyCommandInput - {@link DeleteModelPackageGroupPolicyCommandInput}
 * @returns {@link DeleteModelPackageGroupPolicyCommandOutput}
 * @see {@link DeleteModelPackageGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteModelPackageGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteModelPackageGroupPolicyCommand extends $Command
  .classBuilder<
    DeleteModelPackageGroupPolicyCommandInput,
    DeleteModelPackageGroupPolicyCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteModelPackageGroupPolicy", {})
  .n("SageMakerClient", "DeleteModelPackageGroupPolicyCommand")
  .sc(DeleteModelPackageGroupPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteModelPackageGroupPolicyInput;
      output: {};
    };
    sdk: {
      input: DeleteModelPackageGroupPolicyCommandInput;
      output: DeleteModelPackageGroupPolicyCommandOutput;
    };
  };
}
