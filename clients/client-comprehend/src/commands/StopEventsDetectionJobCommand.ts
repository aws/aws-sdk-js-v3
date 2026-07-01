// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopEventsDetectionJobRequest, StopEventsDetectionJobResponse } from "../models/models_0";
import { StopEventsDetectionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopEventsDetectionJobCommand}.
 */
export interface StopEventsDetectionJobCommandInput extends StopEventsDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link StopEventsDetectionJobCommand}.
 */
export interface StopEventsDetectionJobCommandOutput extends StopEventsDetectionJobResponse, __MetadataBearer {}

/**
 * <p>Stops an events detection job in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StopEventsDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopEventsDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // StopEventsDetectionJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopEventsDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // StopEventsDetectionJobResponse
 * //   JobId: "STRING_VALUE",
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StopEventsDetectionJobCommandInput - {@link StopEventsDetectionJobCommandInput}
 * @returns {@link StopEventsDetectionJobCommandOutput}
 * @see {@link StopEventsDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StopEventsDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link JobNotFoundException} (client fault)
 *  <p>The specified job was not found. Check the job ID and try again.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class StopEventsDetectionJobCommand extends command<StopEventsDetectionJobCommandInput, StopEventsDetectionJobCommandOutput>(
  _ep0,
  _mw0,
  "StopEventsDetectionJob",
  StopEventsDetectionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopEventsDetectionJobRequest;
      output: StopEventsDetectionJobResponse;
    };
    sdk: {
      input: StopEventsDetectionJobCommandInput;
      output: StopEventsDetectionJobCommandOutput;
    };
  };
}
