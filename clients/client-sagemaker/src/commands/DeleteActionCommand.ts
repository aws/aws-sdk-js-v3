// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteActionRequest, DeleteActionResponse } from "../models/models_2";
import { de_DeleteActionCommand, se_DeleteActionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteActionCommand}.
 */
export interface DeleteActionCommandInput extends DeleteActionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteActionCommand}.
 */
export interface DeleteActionCommandOutput extends DeleteActionResponse, __MetadataBearer {}

/**
 * <p>Deletes an action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteActionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteActionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteActionRequest
 *   ActionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteActionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteActionResponse
 * //   ActionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteActionCommandInput - {@link DeleteActionCommandInput}
 * @returns {@link DeleteActionCommandOutput}
 * @see {@link DeleteActionCommandInput} for command's `input` shape.
 * @see {@link DeleteActionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteActionCommand extends $Command
  .classBuilder<
    DeleteActionCommandInput,
    DeleteActionCommandOutput,
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
  .s("SageMaker", "DeleteAction", {})
  .n("SageMakerClient", "DeleteActionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteActionCommand)
  .de(de_DeleteActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteActionRequest;
      output: DeleteActionResponse;
    };
    sdk: {
      input: DeleteActionCommandInput;
      output: DeleteActionCommandOutput;
    };
  };
}
