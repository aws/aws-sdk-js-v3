// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopAIBenchmarkJobRequest, StopAIBenchmarkJobResponse } from "../models/models_4";
import { StopAIBenchmarkJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopAIBenchmarkJobCommand}.
 */
export interface StopAIBenchmarkJobCommandInput extends StopAIBenchmarkJobRequest {}
/**
 * @public
 *
 * The output of {@link StopAIBenchmarkJobCommand}.
 */
export interface StopAIBenchmarkJobCommandOutput extends StopAIBenchmarkJobResponse, __MetadataBearer {}

/**
 * Stops a running AI benchmark job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopAIBenchmarkJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopAIBenchmarkJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StopAIBenchmarkJobRequest
 *   AIBenchmarkJobName: "STRING_VALUE", // required
 * };
 * const command = new StopAIBenchmarkJobCommand(input);
 * const response = await client.send(command);
 * // { // StopAIBenchmarkJobResponse
 * //   AIBenchmarkJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StopAIBenchmarkJobCommandInput - {@link StopAIBenchmarkJobCommandInput}
 * @returns {@link StopAIBenchmarkJobCommandOutput}
 * @see {@link StopAIBenchmarkJobCommandInput} for command's `input` shape.
 * @see {@link StopAIBenchmarkJobCommandOutput} for command's `response` shape.
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
export class StopAIBenchmarkJobCommand extends command<StopAIBenchmarkJobCommandInput, StopAIBenchmarkJobCommandOutput>(
  _ep0,
  _mw0,
  "StopAIBenchmarkJob",
  StopAIBenchmarkJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopAIBenchmarkJobRequest;
      output: StopAIBenchmarkJobResponse;
    };
    sdk: {
      input: StopAIBenchmarkJobCommandInput;
      output: StopAIBenchmarkJobCommandOutput;
    };
  };
}
