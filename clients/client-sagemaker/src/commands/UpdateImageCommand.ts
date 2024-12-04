// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateImageRequest, UpdateImageResponse } from "../models/models_5";
import { de_UpdateImageCommand, se_UpdateImageCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateImageCommand}.
 */
export interface UpdateImageCommandInput extends UpdateImageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateImageCommand}.
 */
export interface UpdateImageCommandOutput extends UpdateImageResponse, __MetadataBearer {}

/**
 * <p>Updates the properties of a SageMaker image. To change the image's tags, use the
 *          <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html">AddTags</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteTags.html">DeleteTags</a> APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateImageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateImageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateImageRequest
 *   DeleteProperties: [ // ImageDeletePropertyList
 *     "STRING_VALUE",
 *   ],
 *   Description: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
 *   ImageName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateImageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateImageResponse
 * //   ImageArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateImageCommandInput - {@link UpdateImageCommandInput}
 * @returns {@link UpdateImageCommandOutput}
 * @see {@link UpdateImageCommandInput} for command's `input` shape.
 * @see {@link UpdateImageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class UpdateImageCommand extends $Command
  .classBuilder<
    UpdateImageCommandInput,
    UpdateImageCommandOutput,
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
  .s("SageMaker", "UpdateImage", {})
  .n("SageMakerClient", "UpdateImageCommand")
  .f(void 0, void 0)
  .ser(se_UpdateImageCommand)
  .de(de_UpdateImageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateImageRequest;
      output: UpdateImageResponse;
    };
    sdk: {
      input: UpdateImageCommandInput;
      output: UpdateImageCommandOutput;
    };
  };
}
