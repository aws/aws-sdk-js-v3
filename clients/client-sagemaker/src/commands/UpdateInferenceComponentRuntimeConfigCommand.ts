// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateInferenceComponentRuntimeConfigInput,
  UpdateInferenceComponentRuntimeConfigOutput,
} from "../models/models_4";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateInferenceComponentRuntimeConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInferenceComponentRuntimeConfigCommand}.
 */
export interface UpdateInferenceComponentRuntimeConfigCommandInput extends UpdateInferenceComponentRuntimeConfigInput {}
/**
 * @public
 *
 * The output of {@link UpdateInferenceComponentRuntimeConfigCommand}.
 */
export interface UpdateInferenceComponentRuntimeConfigCommandOutput extends UpdateInferenceComponentRuntimeConfigOutput, __MetadataBearer {}

/**
 * <p>Runtime settings for a model that is deployed with an inference component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateInferenceComponentRuntimeConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateInferenceComponentRuntimeConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateInferenceComponentRuntimeConfigInput
 *   InferenceComponentName: "STRING_VALUE", // required
 *   DesiredRuntimeConfig: { // InferenceComponentRuntimeConfig
 *     CopyCount: Number("int"), // required
 *   },
 * };
 * const command = new UpdateInferenceComponentRuntimeConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInferenceComponentRuntimeConfigOutput
 * //   InferenceComponentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateInferenceComponentRuntimeConfigCommandInput - {@link UpdateInferenceComponentRuntimeConfigCommandInput}
 * @returns {@link UpdateInferenceComponentRuntimeConfigCommandOutput}
 * @see {@link UpdateInferenceComponentRuntimeConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateInferenceComponentRuntimeConfigCommandOutput} for command's `response` shape.
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
export class UpdateInferenceComponentRuntimeConfigCommand extends $Command
  .classBuilder<
    UpdateInferenceComponentRuntimeConfigCommandInput,
    UpdateInferenceComponentRuntimeConfigCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "UpdateInferenceComponentRuntimeConfig", {})
  .n("SageMakerClient", "UpdateInferenceComponentRuntimeConfigCommand")
  .sc(UpdateInferenceComponentRuntimeConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInferenceComponentRuntimeConfigInput;
      output: UpdateInferenceComponentRuntimeConfigOutput;
    };
    sdk: {
      input: UpdateInferenceComponentRuntimeConfigCommandInput;
      output: UpdateInferenceComponentRuntimeConfigCommandOutput;
    };
  };
}
