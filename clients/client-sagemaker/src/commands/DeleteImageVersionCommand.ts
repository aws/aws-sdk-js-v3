// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteImageVersionRequest, DeleteImageVersionResponse } from "../models/models_2";
import { de_DeleteImageVersionCommand, se_DeleteImageVersionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

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
 * <p>Deletes a version of a SageMaker image. The container image the version represents isn't
 *         deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteImageVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DeleteImageVersion", {})
  .n("SageMakerClient", "DeleteImageVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteImageVersionCommand)
  .de(de_DeleteImageVersionCommand)
  .build() {}
