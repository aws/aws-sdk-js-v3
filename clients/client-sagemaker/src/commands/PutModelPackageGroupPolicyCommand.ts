// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutModelPackageGroupPolicyInput, PutModelPackageGroupPolicyOutput } from "../models/models_5";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { PutModelPackageGroupPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutModelPackageGroupPolicyCommand}.
 */
export interface PutModelPackageGroupPolicyCommandInput extends PutModelPackageGroupPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutModelPackageGroupPolicyCommand}.
 */
export interface PutModelPackageGroupPolicyCommandOutput extends PutModelPackageGroupPolicyOutput, __MetadataBearer {}

/**
 * <p>Adds a resouce policy to control access to a model group. For information about resoure policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies</a> in the <i>Amazon Web Services Identity and Access Management User Guide.</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, PutModelPackageGroupPolicyCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, PutModelPackageGroupPolicyCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // PutModelPackageGroupPolicyInput
 *   ModelPackageGroupName: "STRING_VALUE", // required
 *   ResourcePolicy: "STRING_VALUE", // required
 * };
 * const command = new PutModelPackageGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutModelPackageGroupPolicyOutput
 * //   ModelPackageGroupArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutModelPackageGroupPolicyCommandInput - {@link PutModelPackageGroupPolicyCommandInput}
 * @returns {@link PutModelPackageGroupPolicyCommandOutput}
 * @see {@link PutModelPackageGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutModelPackageGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class PutModelPackageGroupPolicyCommand extends $Command
  .classBuilder<
    PutModelPackageGroupPolicyCommandInput,
    PutModelPackageGroupPolicyCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "PutModelPackageGroupPolicy", {})
  .n("SageMakerClient", "PutModelPackageGroupPolicyCommand")
  .sc(PutModelPackageGroupPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutModelPackageGroupPolicyInput;
      output: PutModelPackageGroupPolicyOutput;
    };
    sdk: {
      input: PutModelPackageGroupPolicyCommandInput;
      output: PutModelPackageGroupPolicyCommandOutput;
    };
  };
}
