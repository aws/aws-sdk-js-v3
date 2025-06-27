// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopKeyPhrasesDetectionJobRequest, StopKeyPhrasesDetectionJobResponse } from "../models/models_1";
import { de_StopKeyPhrasesDetectionJobCommand, se_StopKeyPhrasesDetectionJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopKeyPhrasesDetectionJobCommand}.
 */
export interface StopKeyPhrasesDetectionJobCommandInput extends StopKeyPhrasesDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link StopKeyPhrasesDetectionJobCommand}.
 */
export interface StopKeyPhrasesDetectionJobCommandOutput extends StopKeyPhrasesDetectionJobResponse, __MetadataBearer {}

/**
 * <p>Stops a key phrases detection job in progress.</p>
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
 * import { ComprehendClient, StopKeyPhrasesDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopKeyPhrasesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // StopKeyPhrasesDetectionJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopKeyPhrasesDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // StopKeyPhrasesDetectionJobResponse
 * //   JobId: "STRING_VALUE",
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StopKeyPhrasesDetectionJobCommandInput - {@link StopKeyPhrasesDetectionJobCommandInput}
 * @returns {@link StopKeyPhrasesDetectionJobCommandOutput}
 * @see {@link StopKeyPhrasesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StopKeyPhrasesDetectionJobCommandOutput} for command's `response` shape.
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
export class StopKeyPhrasesDetectionJobCommand extends $Command
  .classBuilder<
    StopKeyPhrasesDetectionJobCommandInput,
    StopKeyPhrasesDetectionJobCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "StopKeyPhrasesDetectionJob", {})
  .n("ComprehendClient", "StopKeyPhrasesDetectionJobCommand")
  .f(void 0, void 0)
  .ser(se_StopKeyPhrasesDetectionJobCommand)
  .de(de_StopKeyPhrasesDetectionJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopKeyPhrasesDetectionJobRequest;
      output: StopKeyPhrasesDetectionJobResponse;
    };
    sdk: {
      input: StopKeyPhrasesDetectionJobCommandInput;
      output: StopKeyPhrasesDetectionJobCommandOutput;
    };
  };
}
