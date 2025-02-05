// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopDominantLanguageDetectionJobRequest, StopDominantLanguageDetectionJobResponse } from "../models/models_0";
import {
  de_StopDominantLanguageDetectionJobCommand,
  se_StopDominantLanguageDetectionJobCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface StopDominantLanguageDetectionJobCommandOutput
  extends StopDominantLanguageDetectionJobResponse,
    __MetadataBearer {}

/**
 * <p>Stops a dominant language detection job in progress.</p>
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
 * import { ComprehendClient, StopDominantLanguageDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopDominantLanguageDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
export class StopDominantLanguageDetectionJobCommand extends $Command
  .classBuilder<
    StopDominantLanguageDetectionJobCommandInput,
    StopDominantLanguageDetectionJobCommandOutput,
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
  .s("Comprehend_20171127", "StopDominantLanguageDetectionJob", {})
  .n("ComprehendClient", "StopDominantLanguageDetectionJobCommand")
  .f(void 0, void 0)
  .ser(se_StopDominantLanguageDetectionJobCommand)
  .de(de_StopDominantLanguageDetectionJobCommand)
  .build() {
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
