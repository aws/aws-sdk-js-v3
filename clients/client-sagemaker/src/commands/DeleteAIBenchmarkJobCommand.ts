// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAIBenchmarkJobRequest, DeleteAIBenchmarkJobResponse } from "../models/models_2";
import { DeleteAIBenchmarkJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAIBenchmarkJobCommand}.
 */
export interface DeleteAIBenchmarkJobCommandInput extends DeleteAIBenchmarkJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAIBenchmarkJobCommand}.
 */
export interface DeleteAIBenchmarkJobCommandOutput extends DeleteAIBenchmarkJobResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified AI benchmark job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteAIBenchmarkJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteAIBenchmarkJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteAIBenchmarkJobRequest
 *   AIBenchmarkJobName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAIBenchmarkJobCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAIBenchmarkJobResponse
 * //   AIBenchmarkJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAIBenchmarkJobCommandInput - {@link DeleteAIBenchmarkJobCommandInput}
 * @returns {@link DeleteAIBenchmarkJobCommandOutput}
 * @see {@link DeleteAIBenchmarkJobCommandInput} for command's `input` shape.
 * @see {@link DeleteAIBenchmarkJobCommandOutput} for command's `response` shape.
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
export class DeleteAIBenchmarkJobCommand extends command<DeleteAIBenchmarkJobCommandInput, DeleteAIBenchmarkJobCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAIBenchmarkJob",
  DeleteAIBenchmarkJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAIBenchmarkJobRequest;
      output: DeleteAIBenchmarkJobResponse;
    };
    sdk: {
      input: DeleteAIBenchmarkJobCommandInput;
      output: DeleteAIBenchmarkJobCommandOutput;
    };
  };
}
