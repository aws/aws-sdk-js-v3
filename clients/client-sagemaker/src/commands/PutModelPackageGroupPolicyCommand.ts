// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutModelPackageGroupPolicyInput, PutModelPackageGroupPolicyOutput } from "../models/models_4";
import { PutModelPackageGroupPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds a resouce policy to control access to a model group. For information about resoure policies, see [Identity-based policies and resource-based policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html) in the *Amazon Web Services Identity and Access Management User Guide.*.
 *
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
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class PutModelPackageGroupPolicyCommand extends command<PutModelPackageGroupPolicyCommandInput, PutModelPackageGroupPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutModelPackageGroupPolicy",
  PutModelPackageGroupPolicy$
) {
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
