// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAIWorkloadConfigRequest, DeleteAIWorkloadConfigResponse } from "../models/models_2";
import { DeleteAIWorkloadConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAIWorkloadConfigCommand}.
 */
export interface DeleteAIWorkloadConfigCommandInput extends DeleteAIWorkloadConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAIWorkloadConfigCommand}.
 */
export interface DeleteAIWorkloadConfigCommandOutput extends DeleteAIWorkloadConfigResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified AI workload configuration. You cannot delete a configuration that is referenced by an active benchmark job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteAIWorkloadConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteAIWorkloadConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteAIWorkloadConfigRequest
 *   AIWorkloadConfigName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAIWorkloadConfigCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAIWorkloadConfigResponse
 * //   AIWorkloadConfigArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAIWorkloadConfigCommandInput - {@link DeleteAIWorkloadConfigCommandInput}
 * @returns {@link DeleteAIWorkloadConfigCommandOutput}
 * @see {@link DeleteAIWorkloadConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteAIWorkloadConfigCommandOutput} for command's `response` shape.
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
export class DeleteAIWorkloadConfigCommand extends command<DeleteAIWorkloadConfigCommandInput, DeleteAIWorkloadConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAIWorkloadConfig",
  DeleteAIWorkloadConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAIWorkloadConfigRequest;
      output: DeleteAIWorkloadConfigResponse;
    };
    sdk: {
      input: DeleteAIWorkloadConfigCommandInput;
      output: DeleteAIWorkloadConfigCommandOutput;
    };
  };
}
