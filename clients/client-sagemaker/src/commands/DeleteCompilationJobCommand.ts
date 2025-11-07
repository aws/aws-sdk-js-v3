// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCompilationJobRequest } from "../models/models_2";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteCompilationJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCompilationJobCommand}.
 */
export interface DeleteCompilationJobCommandInput extends DeleteCompilationJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCompilationJobCommand}.
 */
export interface DeleteCompilationJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified compilation job. This action deletes only the compilation job resource in Amazon SageMaker AI. It doesn't delete other resources that are related to that job, such as the model artifacts that the job creates, the compilation logs in CloudWatch, the compiled model, or the IAM role.</p> <p>You can delete a compilation job only if its current status is <code>COMPLETED</code>, <code>FAILED</code>, or <code>STOPPED</code>. If the job status is <code>STARTING</code> or <code>INPROGRESS</code>, stop the job, and then delete it after its status becomes <code>STOPPED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteCompilationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteCompilationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteCompilationJobRequest
 *   CompilationJobName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCompilationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCompilationJobCommandInput - {@link DeleteCompilationJobCommandInput}
 * @returns {@link DeleteCompilationJobCommandOutput}
 * @see {@link DeleteCompilationJobCommandInput} for command's `input` shape.
 * @see {@link DeleteCompilationJobCommandOutput} for command's `response` shape.
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
export class DeleteCompilationJobCommand extends $Command
  .classBuilder<
    DeleteCompilationJobCommandInput,
    DeleteCompilationJobCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteCompilationJob", {})
  .n("SageMakerClient", "DeleteCompilationJobCommand")
  .sc(DeleteCompilationJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCompilationJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteCompilationJobCommandInput;
      output: DeleteCompilationJobCommandOutput;
    };
  };
}
