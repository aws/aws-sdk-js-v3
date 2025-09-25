// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteHumanTaskUiRequest, DeleteHumanTaskUiResponse } from "../models/models_2";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteHumanTaskUi } from "../schemas/schemas_74_Human";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteHumanTaskUiCommand}.
 */
export interface DeleteHumanTaskUiCommandInput extends DeleteHumanTaskUiRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHumanTaskUiCommand}.
 */
export interface DeleteHumanTaskUiCommandOutput extends DeleteHumanTaskUiResponse, __MetadataBearer {}

/**
 * <p>Use this operation to delete a human task user interface (worker task template).</p> <p> To see a list of human task user interfaces (work task templates) in your account, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListHumanTaskUis.html">ListHumanTaskUis</a>. When you delete a worker task template, it no longer appears when you call <code>ListHumanTaskUis</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteHumanTaskUiCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteHumanTaskUiCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteHumanTaskUiRequest
 *   HumanTaskUiName: "STRING_VALUE", // required
 * };
 * const command = new DeleteHumanTaskUiCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHumanTaskUiCommandInput - {@link DeleteHumanTaskUiCommandInput}
 * @returns {@link DeleteHumanTaskUiCommandOutput}
 * @see {@link DeleteHumanTaskUiCommandInput} for command's `input` shape.
 * @see {@link DeleteHumanTaskUiCommandOutput} for command's `response` shape.
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
export class DeleteHumanTaskUiCommand extends $Command
  .classBuilder<
    DeleteHumanTaskUiCommandInput,
    DeleteHumanTaskUiCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteHumanTaskUi", {})
  .n("SageMakerClient", "DeleteHumanTaskUiCommand")
  .sc(DeleteHumanTaskUi)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHumanTaskUiRequest;
      output: {};
    };
    sdk: {
      input: DeleteHumanTaskUiCommandInput;
      output: DeleteHumanTaskUiCommandOutput;
    };
  };
}
