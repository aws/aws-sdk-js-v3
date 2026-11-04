// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StopDominantLanguageDetectionJobRequest,
  StopDominantLanguageDetectionJobResponse,
} from "../models/models_0";
import { StopDominantLanguageDetectionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopDominantLanguageDetectionJobCommand}.
 */
export interface StopDominantLanguageDetectionJobCommandInput extends StopDominantLanguageDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link StopDominantLanguageDetectionJobCommand}.
 */
export interface StopDominantLanguageDetectionJobCommandOutput extends StopDominantLanguageDetectionJobResponse, __MetadataBearer {}

/**
 * Stops a dominant language detection job in progress.
 *
 * If the job state is `IN_PROGRESS` the job is marked for termination and put into the `STOP_REQUESTED` state. If the job completes before it can be stopped, it is put into the `COMPLETED` state; otherwise the job is stopped and put into the `STOPPED` state.
 *
 * If the job is in the `COMPLETED` or `FAILED` state when you call the `StopDominantLanguageDetectionJob` operation, the operation returns a 400 Internal Request Exception.
 *
 * When a job is stopped, any documents already processed are written to the output location.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StopDominantLanguageDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopDominantLanguageDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // StopDominantLanguageDetectionJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopDominantLanguageDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // StopDominantLanguageDetectionJobResponse
 * //   JobId: "STRING_VALUE",
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StopDominantLanguageDetectionJobCommandInput - {@link StopDominantLanguageDetectionJobCommandInput}
 * @returns {@link StopDominantLanguageDetectionJobCommandOutput}
 * @see {@link StopDominantLanguageDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StopDominantLanguageDetectionJobCommandOutput} for command's `response` shape.
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
export class StopDominantLanguageDetectionJobCommand extends command<StopDominantLanguageDetectionJobCommandInput, StopDominantLanguageDetectionJobCommandOutput>(
  _ep0,
  _mw0,
  "StopDominantLanguageDetectionJob",
  StopDominantLanguageDetectionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDominantLanguageDetectionJobRequest;
      output: StopDominantLanguageDetectionJobResponse;
    };
    sdk: {
      input: StopDominantLanguageDetectionJobCommandInput;
      output: StopDominantLanguageDetectionJobCommandOutput;
    };
  };
}
