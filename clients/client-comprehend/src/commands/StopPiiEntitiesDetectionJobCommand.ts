// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopPiiEntitiesDetectionJobRequest, StopPiiEntitiesDetectionJobResponse } from "../models/models_1";
import { de_StopPiiEntitiesDetectionJobCommand, se_StopPiiEntitiesDetectionJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface StopPiiEntitiesDetectionJobCommandOutput
  extends StopPiiEntitiesDetectionJobResponse,
    __MetadataBearer {}

/**
 * <p>Stops a PII entities detection job in progress.</p>
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
export class StopPiiEntitiesDetectionJobCommand extends $Command
  .classBuilder<
    StopPiiEntitiesDetectionJobCommandInput,
    StopPiiEntitiesDetectionJobCommandOutput,
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
  .s("Comprehend_20171127", "StopPiiEntitiesDetectionJob", {})
  .n("ComprehendClient", "StopPiiEntitiesDetectionJobCommand")
  .f(void 0, void 0)
  .ser(se_StopPiiEntitiesDetectionJobCommand)
  .de(de_StopPiiEntitiesDetectionJobCommand)
  .build() {
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
