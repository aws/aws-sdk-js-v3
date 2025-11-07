// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopRxNormInferenceJobRequest, StopRxNormInferenceJobResponse } from "../models/models_0";
import { StopRxNormInferenceJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopRxNormInferenceJobCommand}.
 */
export interface StopRxNormInferenceJobCommandInput extends StopRxNormInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link StopRxNormInferenceJobCommand}.
 */
export interface StopRxNormInferenceJobCommandOutput extends StopRxNormInferenceJobResponse, __MetadataBearer {}

/**
 * <p>Stops an InferRxNorm inference job in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StopRxNormInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StopRxNormInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * // import type { ComprehendMedicalClientConfig } from "@aws-sdk/client-comprehendmedical";
 * const config = {}; // type is ComprehendMedicalClientConfig
 * const client = new ComprehendMedicalClient(config);
 * const input = { // StopRxNormInferenceJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopRxNormInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // StopRxNormInferenceJobResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopRxNormInferenceJobCommandInput - {@link StopRxNormInferenceJobCommandInput}
 * @returns {@link StopRxNormInferenceJobCommandOutput}
 * @see {@link StopRxNormInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StopRxNormInferenceJobCommandOutput} for command's `response` shape.
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
export class StopRxNormInferenceJobCommand extends $Command
  .classBuilder<
    StopRxNormInferenceJobCommandInput,
    StopRxNormInferenceJobCommandOutput,
    ComprehendMedicalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendMedicalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComprehendMedical_20181030", "StopRxNormInferenceJob", {})
  .n("ComprehendMedicalClient", "StopRxNormInferenceJobCommand")
  .sc(StopRxNormInferenceJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopRxNormInferenceJobRequest;
      output: StopRxNormInferenceJobResponse;
    };
    sdk: {
      input: StopRxNormInferenceJobCommandInput;
      output: StopRxNormInferenceJobCommandOutput;
    };
  };
}
