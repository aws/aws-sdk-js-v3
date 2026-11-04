// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopPiiEntitiesDetectionJobRequest, StopPiiEntitiesDetectionJobResponse } from "../models/models_0";
import { StopPiiEntitiesDetectionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopPiiEntitiesDetectionJobCommand}.
 */
export interface StopPiiEntitiesDetectionJobCommandInput extends StopPiiEntitiesDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link StopPiiEntitiesDetectionJobCommand}.
 */
export interface StopPiiEntitiesDetectionJobCommandOutput extends StopPiiEntitiesDetectionJobResponse, __MetadataBearer {}

/**
 * Stops a PII entities detection job in progress.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StopPiiEntitiesDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopPiiEntitiesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // StopPiiEntitiesDetectionJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopPiiEntitiesDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // StopPiiEntitiesDetectionJobResponse
 * //   JobId: "STRING_VALUE",
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StopPiiEntitiesDetectionJobCommandInput - {@link StopPiiEntitiesDetectionJobCommandInput}
 * @returns {@link StopPiiEntitiesDetectionJobCommandOutput}
 * @see {@link StopPiiEntitiesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StopPiiEntitiesDetectionJobCommandOutput} for command's `response` shape.
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
export class StopPiiEntitiesDetectionJobCommand extends command<StopPiiEntitiesDetectionJobCommandInput, StopPiiEntitiesDetectionJobCommandOutput>(
  _ep0,
  _mw0,
  "StopPiiEntitiesDetectionJob",
  StopPiiEntitiesDetectionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopPiiEntitiesDetectionJobRequest;
      output: StopPiiEntitiesDetectionJobResponse;
    };
    sdk: {
      input: StopPiiEntitiesDetectionJobCommandInput;
      output: StopPiiEntitiesDetectionJobCommandOutput;
    };
  };
}
