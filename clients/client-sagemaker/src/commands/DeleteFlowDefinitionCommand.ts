// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFlowDefinitionRequest, DeleteFlowDefinitionResponse } from "../models/models_2";
import { de_DeleteFlowDefinitionCommand, se_DeleteFlowDefinitionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFlowDefinitionCommand}.
 */
export interface DeleteFlowDefinitionCommandInput extends DeleteFlowDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFlowDefinitionCommand}.
 */
export interface DeleteFlowDefinitionCommandOutput extends DeleteFlowDefinitionResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified flow definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteFlowDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteFlowDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteFlowDefinitionRequest
 *   FlowDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteFlowDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFlowDefinitionCommandInput - {@link DeleteFlowDefinitionCommandInput}
 * @returns {@link DeleteFlowDefinitionCommandOutput}
 * @see {@link DeleteFlowDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteFlowDefinitionCommand extends $Command
  .classBuilder<
    DeleteFlowDefinitionCommandInput,
    DeleteFlowDefinitionCommandOutput,
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
  .s("SageMaker", "DeleteFlowDefinition", {})
  .n("SageMakerClient", "DeleteFlowDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFlowDefinitionCommand)
  .de(de_DeleteFlowDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFlowDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteFlowDefinitionCommandInput;
      output: DeleteFlowDefinitionCommandOutput;
    };
  };
}
