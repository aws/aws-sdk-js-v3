// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StopPHIDetectionJobRequest, StopPHIDetectionJobResponse } from "../models/models_0";
import { StopPHIDetectionJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopPHIDetectionJobCommand}.
 */
export interface StopPHIDetectionJobCommandInput extends StopPHIDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link StopPHIDetectionJobCommand}.
 */
export interface StopPHIDetectionJobCommandOutput extends StopPHIDetectionJobResponse, __MetadataBearer {}

/**
 * <p>Stops a protected health information (PHI) detection job in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StopPHIDetectionJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StopPHIDetectionJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * // import type { ComprehendMedicalClientConfig } from "@aws-sdk/client-comprehendmedical";
 * const config = {}; // type is ComprehendMedicalClientConfig
 * const client = new ComprehendMedicalClient(config);
 * const input = { // StopPHIDetectionJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopPHIDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // StopPHIDetectionJobResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopPHIDetectionJobCommandInput - {@link StopPHIDetectionJobCommandInput}
 * @returns {@link StopPHIDetectionJobCommandOutput}
 * @see {@link StopPHIDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StopPHIDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for ComprehendMedicalClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal server error occurred. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is invalid. Check your request to determine why it's invalid
 *       and then retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource identified by the specified Amazon Resource Name (ARN) was not found. Check
 *       the ARN and try your request again.</p>
 *
 * @throws {@link ComprehendMedicalServiceException}
 * <p>Base exception class for all service exceptions from ComprehendMedical service.</p>
 *
 *
 * @public
 */
export class StopPHIDetectionJobCommand extends $Command
  .classBuilder<
    StopPHIDetectionJobCommandInput,
    StopPHIDetectionJobCommandOutput,
    ComprehendMedicalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendMedicalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComprehendMedical_20181030", "StopPHIDetectionJob", {})
  .n("ComprehendMedicalClient", "StopPHIDetectionJobCommand")
  .sc(StopPHIDetectionJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopPHIDetectionJobRequest;
      output: StopPHIDetectionJobResponse;
    };
    sdk: {
      input: StopPHIDetectionJobCommandInput;
      output: StopPHIDetectionJobCommandOutput;
    };
  };
}
