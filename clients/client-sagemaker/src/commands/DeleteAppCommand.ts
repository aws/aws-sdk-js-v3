// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppRequest } from "../models/models_2";
import { de_DeleteAppCommand, se_DeleteAppCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppCommand}.
 */
export interface DeleteAppCommandInput extends DeleteAppRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppCommand}.
 */
export interface DeleteAppCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Used to stop and delete an app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteAppCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteAppCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteAppRequest
 *   DomainId: "STRING_VALUE", // required
 *   UserProfileName: "STRING_VALUE",
 *   SpaceName: "STRING_VALUE",
 *   AppType: "JupyterServer" || "KernelGateway" || "DetailedProfiler" || "TensorBoard" || "VSCode" || "Savitur" || "CodeEditor" || "JupyterLab" || "RStudioServerPro" || "RSession" || "RSessionGateway" || "Canvas" || "DatasetManager" || "SageMakerLite" || "Local", // required
 *   AppName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppCommandInput - {@link DeleteAppCommandInput}
 * @returns {@link DeleteAppCommandOutput}
 * @see {@link DeleteAppCommandInput} for command's `input` shape.
 * @see {@link DeleteAppCommandOutput} for command's `response` shape.
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
 */
export class DeleteAppCommand extends $Command
  .classBuilder<
    DeleteAppCommandInput,
    DeleteAppCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: SageMakerClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DeleteApp", {})
  .n("SageMakerClient", "DeleteAppCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAppCommand)
  .de(de_DeleteAppCommand)
  .build() {}
