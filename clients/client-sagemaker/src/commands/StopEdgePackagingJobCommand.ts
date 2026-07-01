// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopEdgePackagingJobRequest } from "../models/models_4";
import { StopEdgePackagingJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopEdgePackagingJobCommand}.
 */
export interface StopEdgePackagingJobCommandInput extends StopEdgePackagingJobRequest {}
/**
 * @public
 *
 * The output of {@link StopEdgePackagingJobCommand}.
 */
export interface StopEdgePackagingJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Request to stop an edge packaging job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopEdgePackagingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopEdgePackagingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StopEdgePackagingJobRequest
 *   EdgePackagingJobName: "STRING_VALUE", // required
 * };
 * const command = new StopEdgePackagingJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopEdgePackagingJobCommandInput - {@link StopEdgePackagingJobCommandInput}
 * @returns {@link StopEdgePackagingJobCommandOutput}
 * @see {@link StopEdgePackagingJobCommandInput} for command's `input` shape.
 * @see {@link StopEdgePackagingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class StopEdgePackagingJobCommand extends command<StopEdgePackagingJobCommandInput, StopEdgePackagingJobCommandOutput>(
  _ep0,
  _mw0,
  "StopEdgePackagingJob",
  StopEdgePackagingJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopEdgePackagingJobRequest;
      output: {};
    };
    sdk: {
      input: StopEdgePackagingJobCommandInput;
      output: StopEdgePackagingJobCommandOutput;
    };
  };
}
