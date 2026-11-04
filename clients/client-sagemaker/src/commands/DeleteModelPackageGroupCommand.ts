// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteModelPackageGroupInput } from "../models/models_2";
import { DeleteModelPackageGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteModelPackageGroupCommand}.
 */
export interface DeleteModelPackageGroupCommandInput extends DeleteModelPackageGroupInput {}
/**
 * @public
 *
 * The output of {@link DeleteModelPackageGroupCommand}.
 */
export interface DeleteModelPackageGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified model group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelPackageGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelPackageGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteModelPackageGroupInput
 *   ModelPackageGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteModelPackageGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteModelPackageGroupCommandInput - {@link DeleteModelPackageGroupCommandInput}
 * @returns {@link DeleteModelPackageGroupCommandOutput}
 * @see {@link DeleteModelPackageGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteModelPackageGroupCommandOutput} for command's `response` shape.
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
export class DeleteModelPackageGroupCommand extends command<DeleteModelPackageGroupCommandInput, DeleteModelPackageGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteModelPackageGroup",
  DeleteModelPackageGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteModelPackageGroupInput;
      output: {};
    };
    sdk: {
      input: DeleteModelPackageGroupCommandInput;
      output: DeleteModelPackageGroupCommandOutput;
    };
  };
}
