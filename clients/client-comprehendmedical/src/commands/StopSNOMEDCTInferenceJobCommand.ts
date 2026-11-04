// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopSNOMEDCTInferenceJobRequest, StopSNOMEDCTInferenceJobResponse } from "../models/models_0";
import { StopSNOMEDCTInferenceJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Stops an InferSNOMEDCT inference job in progress.
 *
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
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request that you made is invalid. Check your request to determine why it's invalid and then retry the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource identified by the specified Amazon Resource Name (ARN) was not found. Check the ARN and try your request again.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * You have made too many requests within a short period of time. Wait for a short time and then try your request again. Contact customer support for more information about a service limit increase.
 *
 * @throws {@link ComprehendMedicalServiceException}
 *
 * Base exception class for all service exceptions from ComprehendMedical service.
 *
 * @public
 */
export class StopSNOMEDCTInferenceJobCommand extends command<StopSNOMEDCTInferenceJobCommandInput, StopSNOMEDCTInferenceJobCommandOutput>(
  _ep0,
  _mw0,
  "StopSNOMEDCTInferenceJob",
  StopSNOMEDCTInferenceJob$
) {
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
