// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteProcessingJobRequest } from "../models/models_2";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteProcessingJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProcessingJobCommand}.
 */
export interface DeleteProcessingJobCommandInput extends DeleteProcessingJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProcessingJobCommand}.
 */
export interface DeleteProcessingJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a processing job. After Amazon SageMaker deletes a processing job, all of the metadata for the processing job is lost. You can delete only processing jobs that are in a terminal state (<code>Stopped</code>, <code>Failed</code>, or <code>Completed</code>). You cannot delete a job that is in the <code>InProgress</code> or <code>Stopping</code> state. After deleting the job, you can reuse its name to create another processing job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteProcessingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteProcessingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteProcessingJobRequest
 *   ProcessingJobName: "STRING_VALUE", // required
 * };
 * const command = new DeleteProcessingJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProcessingJobCommandInput - {@link DeleteProcessingJobCommandInput}
 * @returns {@link DeleteProcessingJobCommandOutput}
 * @see {@link DeleteProcessingJobCommandInput} for command's `input` shape.
 * @see {@link DeleteProcessingJobCommandOutput} for command's `response` shape.
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
export class DeleteProcessingJobCommand extends $Command
  .classBuilder<
    DeleteProcessingJobCommandInput,
    DeleteProcessingJobCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteProcessingJob", {})
  .n("SageMakerClient", "DeleteProcessingJobCommand")
  .sc(DeleteProcessingJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProcessingJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteProcessingJobCommandInput;
      output: DeleteProcessingJobCommandOutput;
    };
  };
}
