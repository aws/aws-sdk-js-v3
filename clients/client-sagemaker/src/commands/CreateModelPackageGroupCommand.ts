// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateModelPackageGroupInput, CreateModelPackageGroupOutput } from "../models/models_1";
import { CreateModelPackageGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateModelPackageGroupCommand}.
 */
export interface CreateModelPackageGroupCommandInput extends CreateModelPackageGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateModelPackageGroupCommand}.
 */
export interface CreateModelPackageGroupCommandOutput extends CreateModelPackageGroupOutput, __MetadataBearer {}

/**
 * <p>Creates a model group. A model group contains a group of model versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelPackageGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelPackageGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateModelPackageGroupInput
 *   ModelPackageGroupName: "STRING_VALUE", // required
 *   ModelPackageGroupDescription: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ManagedConfiguration: { // ManagedConfiguration
 *     ManagedStorageType: "Restricted",
 *   },
 * };
 * const command = new CreateModelPackageGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelPackageGroupOutput
 * //   ModelPackageGroupArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelPackageGroupCommandInput - {@link CreateModelPackageGroupCommandInput}
 * @returns {@link CreateModelPackageGroupCommandOutput}
 * @see {@link CreateModelPackageGroupCommandInput} for command's `input` shape.
 * @see {@link CreateModelPackageGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class CreateModelPackageGroupCommand extends command<CreateModelPackageGroupCommandInput, CreateModelPackageGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateModelPackageGroup",
  CreateModelPackageGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateModelPackageGroupInput;
      output: CreateModelPackageGroupOutput;
    };
    sdk: {
      input: CreateModelPackageGroupCommandInput;
      output: CreateModelPackageGroupCommandOutput;
    };
  };
}
