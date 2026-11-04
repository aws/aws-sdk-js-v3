// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteModelPackageInput } from "../models/models_2";
import { DeleteModelPackage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a model package.
 *
 * A model package is used to create SageMaker models or list on Amazon Web Services Marketplace. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelPackageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelPackageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
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
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class DeleteModelPackageCommand extends command<DeleteModelPackageCommandInput, DeleteModelPackageCommandOutput>(
  _ep0,
  _mw0,
  "DeleteModelPackage",
  DeleteModelPackage$
) {
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
