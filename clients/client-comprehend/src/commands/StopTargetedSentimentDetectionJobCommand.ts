// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StopTargetedSentimentDetectionJobRequest,
  StopTargetedSentimentDetectionJobResponse,
} from "../models/models_0";
import { StopTargetedSentimentDetectionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopTargetedSentimentDetectionJobCommand}.
 */
export interface StopTargetedSentimentDetectionJobCommandInput extends StopTargetedSentimentDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link StopTargetedSentimentDetectionJobCommand}.
 */
export interface StopTargetedSentimentDetectionJobCommandOutput extends StopTargetedSentimentDetectionJobResponse, __MetadataBearer {}

/**
 * Stops a targeted sentiment detection job in progress.
 *
 * If the job state is `IN_PROGRESS`, the job is marked for termination and put into the `STOP_REQUESTED` state. If the job completes before it can be stopped, it is put into the `COMPLETED` state; otherwise the job is be stopped and put into the `STOPPED` state.
 *
 * If the job is in the `COMPLETED` or `FAILED` state when you call the `StopDominantLanguageDetectionJob` operation, the operation returns a 400 Internal Request Exception.
 *
 * When a job is stopped, any documents already processed are written to the output location.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StopTargetedSentimentDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopTargetedSentimentDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // StopTargetedSentimentDetectionJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopTargetedSentimentDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // StopTargetedSentimentDetectionJobResponse
 * //   JobId: "STRING_VALUE",
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StopTargetedSentimentDetectionJobCommandInput - {@link StopTargetedSentimentDetectionJobCommandInput}
 * @returns {@link StopTargetedSentimentDetectionJobCommandOutput}
 * @see {@link StopTargetedSentimentDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StopTargetedSentimentDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link JobNotFoundException} (client fault)
 *
 * The specified job was not found. Check the job ID and try again.
 *
 * @throws {@link ComprehendServiceException}
 *
 * Base exception class for all service exceptions from Comprehend service.
 *
 * @public
 */
export class StopTargetedSentimentDetectionJobCommand extends command<StopTargetedSentimentDetectionJobCommandInput, StopTargetedSentimentDetectionJobCommandOutput>(
  _ep0,
  _mw0,
  "StopTargetedSentimentDetectionJob",
  StopTargetedSentimentDetectionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTargetedSentimentDetectionJobRequest;
      output: StopTargetedSentimentDetectionJobResponse;
    };
    sdk: {
      input: StopTargetedSentimentDetectionJobCommandInput;
      output: StopTargetedSentimentDetectionJobCommandOutput;
    };
  };
}
