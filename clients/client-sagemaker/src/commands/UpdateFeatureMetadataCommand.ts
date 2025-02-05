// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFeatureMetadataRequest } from "../models/models_5";
import { de_UpdateFeatureMetadataCommand, se_UpdateFeatureMetadataCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFeatureMetadataCommand}.
 */
export interface UpdateFeatureMetadataCommandInput extends UpdateFeatureMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFeatureMetadataCommand}.
 */
export interface UpdateFeatureMetadataCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the description and parameters of the feature group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateFeatureMetadataCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateFeatureMetadataCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // UpdateFeatureMetadataRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   FeatureName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ParameterAdditions: [ // FeatureParameterAdditions
 *     { // FeatureParameter
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ParameterRemovals: [ // FeatureParameterRemovals
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateFeatureMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFeatureMetadataCommandInput - {@link UpdateFeatureMetadataCommandInput}
 * @returns {@link UpdateFeatureMetadataCommandOutput}
 * @see {@link UpdateFeatureMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateFeatureMetadataCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class UpdateFeatureMetadataCommand extends $Command
  .classBuilder<
    UpdateFeatureMetadataCommandInput,
    UpdateFeatureMetadataCommandOutput,
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
  .s("SageMaker", "UpdateFeatureMetadata", {})
  .n("SageMakerClient", "UpdateFeatureMetadataCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFeatureMetadataCommand)
  .de(de_UpdateFeatureMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFeatureMetadataRequest;
      output: {};
    };
    sdk: {
      input: UpdateFeatureMetadataCommandInput;
      output: UpdateFeatureMetadataCommandOutput;
    };
  };
}
