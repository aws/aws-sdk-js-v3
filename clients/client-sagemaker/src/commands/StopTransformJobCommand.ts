// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopTransformJobRequest } from "../models/models_4";
import { StopTransformJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopTransformJobCommand}.
 */
export interface StopTransformJobCommandInput extends StopTransformJobRequest {}
/**
 * @public
 *
 * The output of {@link StopTransformJobCommand}.
 */
export interface StopTransformJobCommandOutput extends __MetadataBearer {}

/**
 * Stops a batch transform job.
 *
 * When Amazon SageMaker receives a `StopTransformJob` request, the status of the job changes to `Stopping`. After Amazon SageMaker stops the job, the status is set to `Stopped`. When you stop a batch transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopTransformJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopTransformJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StopTransformJobRequest
 *   TransformJobName: "STRING_VALUE", // required
 * };
 * const command = new StopTransformJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTransformJobCommandInput - {@link StopTransformJobCommandInput}
 * @returns {@link StopTransformJobCommandOutput}
 * @see {@link StopTransformJobCommandInput} for command's `input` shape.
 * @see {@link StopTransformJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class StopTransformJobCommand extends command<StopTransformJobCommandInput, StopTransformJobCommandOutput>(
  _ep0,
  _mw0,
  "StopTransformJob",
  StopTransformJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTransformJobRequest;
      output: {};
    };
    sdk: {
      input: StopTransformJobCommandInput;
      output: StopTransformJobCommandOutput;
    };
  };
}
