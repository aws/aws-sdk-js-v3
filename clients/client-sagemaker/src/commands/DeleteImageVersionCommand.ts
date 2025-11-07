// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteImageVersionRequest, DeleteImageVersionResponse } from "../models/models_2";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteImageVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteImageVersionCommand}.
 */
export interface DeleteImageVersionCommandInput extends DeleteImageVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImageVersionCommand}.
 */
export interface DeleteImageVersionCommandOutput extends DeleteImageVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes a version of a SageMaker AI image. The container image the version represents isn't deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteImageVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteImageVersionRequest
 *   ImageName: "STRING_VALUE", // required
 *   Version: Number("int"),
 *   Alias: "STRING_VALUE",
 * };
 * const command = new DeleteImageVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteImageVersionCommandInput - {@link DeleteImageVersionCommandInput}
 * @returns {@link DeleteImageVersionCommandOutput}
 * @see {@link DeleteImageVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteImageVersionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteImageVersionCommand extends $Command
  .classBuilder<
    DeleteImageVersionCommandInput,
    DeleteImageVersionCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteImageVersion", {})
  .n("SageMakerClient", "DeleteImageVersionCommand")
  .sc(DeleteImageVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImageVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteImageVersionCommandInput;
      output: DeleteImageVersionCommandOutput;
    };
  };
}
