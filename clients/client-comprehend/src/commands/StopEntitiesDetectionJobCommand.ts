// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopEntitiesDetectionJobRequest, StopEntitiesDetectionJobResponse } from "../models/models_1";
import { de_StopEntitiesDetectionJobCommand, se_StopEntitiesDetectionJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopEntitiesDetectionJobCommand}.
 */
export interface StopEntitiesDetectionJobCommandInput extends StopEntitiesDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link StopEntitiesDetectionJobCommand}.
 */
export interface StopEntitiesDetectionJobCommandOutput extends StopEntitiesDetectionJobResponse, __MetadataBearer {}

/**
 * <p>Stops an entities detection job in progress.</p>
 *          <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put
 *       into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it
 *       is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the
 *         <code>STOPPED</code> state.</p>
 *          <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the
 *         <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400
 *       Internal Request Exception. </p>
 *          <p>When a job is stopped, any documents already processed are written to the output
 *       location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StopEntitiesDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopEntitiesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // StopEntitiesDetectionJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopEntitiesDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // StopEntitiesDetectionJobResponse
 * //   JobId: "STRING_VALUE",
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StopEntitiesDetectionJobCommandInput - {@link StopEntitiesDetectionJobCommandInput}
 * @returns {@link StopEntitiesDetectionJobCommandOutput}
 * @see {@link StopEntitiesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StopEntitiesDetectionJobCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StopEntitiesDetectionJobCommand extends $Command
  .classBuilder<
    StopEntitiesDetectionJobCommandInput,
    StopEntitiesDetectionJobCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "StopEntitiesDetectionJob", {})
  .n("ComprehendClient", "StopEntitiesDetectionJobCommand")
  .f(void 0, void 0)
  .ser(se_StopEntitiesDetectionJobCommand)
  .de(de_StopEntitiesDetectionJobCommand)
  .build() {}
