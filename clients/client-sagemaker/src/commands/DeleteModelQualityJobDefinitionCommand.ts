// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteModelQualityJobDefinitionRequest } from "../models/models_2";
import { DeleteModelQualityJobDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteModelQualityJobDefinitionCommand}.
 */
export interface DeleteModelQualityJobDefinitionCommandInput extends DeleteModelQualityJobDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteModelQualityJobDefinitionCommand}.
 */
export interface DeleteModelQualityJobDefinitionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the secified model quality monitoring job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelQualityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelQualityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteModelQualityJobDefinitionRequest
 *   JobDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteModelQualityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteModelQualityJobDefinitionCommandInput - {@link DeleteModelQualityJobDefinitionCommandInput}
 * @returns {@link DeleteModelQualityJobDefinitionCommandOutput}
 * @see {@link DeleteModelQualityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteModelQualityJobDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteModelQualityJobDefinitionCommand extends command<DeleteModelQualityJobDefinitionCommandInput, DeleteModelQualityJobDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteModelQualityJobDefinition",
  DeleteModelQualityJobDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteModelQualityJobDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteModelQualityJobDefinitionCommandInput;
      output: DeleteModelQualityJobDefinitionCommandOutput;
    };
  };
}
