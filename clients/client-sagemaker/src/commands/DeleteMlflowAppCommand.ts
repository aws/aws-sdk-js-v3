// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteMlflowAppRequest, DeleteMlflowAppResponse } from "../models/models_2";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteMlflowApp } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMlflowAppCommand}.
 */
export interface DeleteMlflowAppCommandInput extends DeleteMlflowAppRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMlflowAppCommand}.
 */
export interface DeleteMlflowAppCommandOutput extends DeleteMlflowAppResponse, __MetadataBearer {}

/**
 * <p>Deletes an MLflow App.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteMlflowAppCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteMlflowAppCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteMlflowAppRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteMlflowAppCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMlflowAppResponse
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteMlflowAppCommandInput - {@link DeleteMlflowAppCommandInput}
 * @returns {@link DeleteMlflowAppCommandOutput}
 * @see {@link DeleteMlflowAppCommandInput} for command's `input` shape.
 * @see {@link DeleteMlflowAppCommandOutput} for command's `response` shape.
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
export class DeleteMlflowAppCommand extends $Command
  .classBuilder<
    DeleteMlflowAppCommandInput,
    DeleteMlflowAppCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteMlflowApp", {})
  .n("SageMakerClient", "DeleteMlflowAppCommand")
  .sc(DeleteMlflowApp)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMlflowAppRequest;
      output: DeleteMlflowAppResponse;
    };
    sdk: {
      input: DeleteMlflowAppCommandInput;
      output: DeleteMlflowAppCommandOutput;
    };
  };
}
