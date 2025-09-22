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
import { StopSNOMEDCTInferenceJobRequest, StopSNOMEDCTInferenceJobResponse } from "../models/models_0";
import { StopSNOMEDCTInferenceJob } from "../schemas/schemas_6_StopSNOMEDCTInferenceJob";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopSNOMEDCTInferenceJobCommand}.
 */
export interface StopSNOMEDCTInferenceJobCommandInput extends StopSNOMEDCTInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link StopSNOMEDCTInferenceJobCommand}.
 */
export interface StopSNOMEDCTInferenceJobCommandOutput extends StopSNOMEDCTInferenceJobResponse, __MetadataBearer {}

/**
 * <p>
 *       Stops an InferSNOMEDCT inference job in progress.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StopSNOMEDCTInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StopSNOMEDCTInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * // import type { ComprehendMedicalClientConfig } from "@aws-sdk/client-comprehendmedical";
 * const config = {}; // type is ComprehendMedicalClientConfig
 * const client = new ComprehendMedicalClient(config);
 * const input = { // StopSNOMEDCTInferenceJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopSNOMEDCTInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // StopSNOMEDCTInferenceJobResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopSNOMEDCTInferenceJobCommandInput - {@link StopSNOMEDCTInferenceJobCommandInput}
 * @returns {@link StopSNOMEDCTInferenceJobCommandOutput}
 * @see {@link StopSNOMEDCTInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StopSNOMEDCTInferenceJobCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again. Contact customer support for more information about a service
 *       limit increase. </p>
 *
 * @throws {@link ComprehendMedicalServiceException}
 * <p>Base exception class for all service exceptions from ComprehendMedical service.</p>
 *
 *
 * @public
 */
export class StopSNOMEDCTInferenceJobCommand extends $Command
  .classBuilder<
    StopSNOMEDCTInferenceJobCommandInput,
    StopSNOMEDCTInferenceJobCommandOutput,
    ComprehendMedicalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendMedicalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComprehendMedical_20181030", "StopSNOMEDCTInferenceJob", {})
  .n("ComprehendMedicalClient", "StopSNOMEDCTInferenceJobCommand")
  .sc(StopSNOMEDCTInferenceJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopSNOMEDCTInferenceJobRequest;
      output: StopSNOMEDCTInferenceJobResponse;
    };
    sdk: {
      input: StopSNOMEDCTInferenceJobCommandInput;
      output: StopSNOMEDCTInferenceJobCommandOutput;
    };
  };
}
