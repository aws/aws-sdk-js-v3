// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopEventsDetectionJobRequest, StopEventsDetectionJobResponse } from "../models/models_1";
import { de_StopEventsDetectionJobCommand, se_StopEventsDetectionJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * @public
 */
export class StopEventsDetectionJobCommand extends $Command
  .classBuilder<
    StopEventsDetectionJobCommandInput,
    StopEventsDetectionJobCommandOutput,
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
  .s("Comprehend_20171127", "StopEventsDetectionJob", {})
  .n("ComprehendClient", "StopEventsDetectionJobCommand")
  .f(void 0, void 0)
  .ser(se_StopEventsDetectionJobCommand)
  .de(de_StopEventsDetectionJobCommand)
  .build() {}
