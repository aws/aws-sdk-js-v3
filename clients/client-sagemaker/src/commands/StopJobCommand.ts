// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopJobRequest, StopJobResponse } from "../models/models_4";
import { StopJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopJobCommand}.
 */
export interface StopJobCommandInput extends StopJobRequest {}
/**
 * @public
 *
 * The output of {@link StopJobCommand}.
 */
export interface StopJobCommandOutput extends StopJobResponse, __MetadataBearer {}

/**
 * <p>Stops a running job. When you call <code>StopJob</code>, Amazon SageMaker sets the job status to <code>Stopping</code>. After the job stops, the status changes to <code>Stopped</code>. Partial results may be available in the output location if the job was in progress. To delete a stopped job, call <code>DeleteJob</code>.</p> <p>The following operations are related to <code>StopJob</code>:</p> <ul> <li> <p> <code>CreateJob</code> </p> </li> <li> <p> <code>DescribeJob</code> </p> </li> <li> <p> <code>DeleteJob</code> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StopJobRequest
 *   JobName: "STRING_VALUE", // required
 *   JobCategory: "AgentRFT" || "AgentRFTEvaluation", // required
 * };
 * const command = new StopJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopJobCommandInput - {@link StopJobCommandInput}
 * @returns {@link StopJobCommandOutput}
 * @see {@link StopJobCommandInput} for command's `input` shape.
 * @see {@link StopJobCommandOutput} for command's `response` shape.
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
export class StopJobCommand extends command<StopJobCommandInput, StopJobCommandOutput>(
  _ep0,
  _mw0,
  "StopJob",
  StopJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopJobRequest;
      output: {};
    };
    sdk: {
      input: StopJobCommandInput;
      output: StopJobCommandOutput;
    };
  };
}
