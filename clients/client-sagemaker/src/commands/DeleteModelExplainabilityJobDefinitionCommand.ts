// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteModelExplainabilityJobDefinitionRequest } from "../models/models_2";
import {
  de_DeleteModelExplainabilityJobDefinitionCommand,
  se_DeleteModelExplainabilityJobDefinitionCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteModelExplainabilityJobDefinitionCommand}.
 */
export interface DeleteModelExplainabilityJobDefinitionCommandInput
  extends DeleteModelExplainabilityJobDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteModelExplainabilityJobDefinitionCommand}.
 */
export interface DeleteModelExplainabilityJobDefinitionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Amazon SageMaker model explainability job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelExplainabilityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelExplainabilityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteModelExplainabilityJobDefinitionRequest
 *   JobDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteModelExplainabilityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteModelExplainabilityJobDefinitionCommandInput - {@link DeleteModelExplainabilityJobDefinitionCommandInput}
 * @returns {@link DeleteModelExplainabilityJobDefinitionCommandOutput}
 * @see {@link DeleteModelExplainabilityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteModelExplainabilityJobDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteModelExplainabilityJobDefinitionCommand extends $Command
  .classBuilder<
    DeleteModelExplainabilityJobDefinitionCommandInput,
    DeleteModelExplainabilityJobDefinitionCommandOutput,
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
  .s("SageMaker", "DeleteModelExplainabilityJobDefinition", {})
  .n("SageMakerClient", "DeleteModelExplainabilityJobDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteModelExplainabilityJobDefinitionCommand)
  .de(de_DeleteModelExplainabilityJobDefinitionCommand)
  .build() {}
