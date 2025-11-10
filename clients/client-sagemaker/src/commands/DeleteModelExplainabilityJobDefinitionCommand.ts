// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteModelExplainabilityJobDefinitionRequest } from "../models/models_2";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteModelExplainabilityJobDefinition } from "../schemas/schemas_0";

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
 * <p>Deletes an Amazon SageMaker AI model explainability job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelExplainabilityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelExplainabilityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteModelExplainabilityJobDefinition", {})
  .n("SageMakerClient", "DeleteModelExplainabilityJobDefinitionCommand")
  .sc(DeleteModelExplainabilityJobDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteModelExplainabilityJobDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteModelExplainabilityJobDefinitionCommandInput;
      output: DeleteModelExplainabilityJobDefinitionCommandOutput;
    };
  };
}
