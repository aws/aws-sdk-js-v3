// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteModelPackageGroupPolicyInput } from "../models/models_2";
import { DeleteModelPackageGroupPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class DeleteModelPackageGroupPolicyCommand extends command<DeleteModelPackageGroupPolicyCommandInput, DeleteModelPackageGroupPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteModelPackageGroupPolicy",
  DeleteModelPackageGroupPolicy$
) {
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
