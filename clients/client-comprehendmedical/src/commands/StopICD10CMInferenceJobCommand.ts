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
import type { StopICD10CMInferenceJobRequest, StopICD10CMInferenceJobResponse } from "../models/models_0";
import { StopICD10CMInferenceJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopICD10CMInferenceJobCommand}.
 */
export interface StopICD10CMInferenceJobCommandInput extends StopICD10CMInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link StopICD10CMInferenceJobCommand}.
 */
export interface StopICD10CMInferenceJobCommandOutput extends StopICD10CMInferenceJobResponse, __MetadataBearer {}

/**
 * <p>Stops an InferICD10CM inference job in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StopICD10CMInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StopICD10CMInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * // import type { ComprehendMedicalClientConfig } from "@aws-sdk/client-comprehendmedical";
 * const config = {}; // type is ComprehendMedicalClientConfig
 * const client = new ComprehendMedicalClient(config);
 * const input = { // StopICD10CMInferenceJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopICD10CMInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // StopICD10CMInferenceJobResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopICD10CMInferenceJobCommandInput - {@link StopICD10CMInferenceJobCommandInput}
 * @returns {@link StopICD10CMInferenceJobCommandOutput}
 * @see {@link StopICD10CMInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StopICD10CMInferenceJobCommandOutput} for command's `response` shape.
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
export class StopICD10CMInferenceJobCommand extends $Command
  .classBuilder<
    StopICD10CMInferenceJobCommandInput,
    StopICD10CMInferenceJobCommandOutput,
    ComprehendMedicalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendMedicalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComprehendMedical_20181030", "StopICD10CMInferenceJob", {})
  .n("ComprehendMedicalClient", "StopICD10CMInferenceJobCommand")
  .sc(StopICD10CMInferenceJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopICD10CMInferenceJobRequest;
      output: StopICD10CMInferenceJobResponse;
    };
    sdk: {
      input: StopICD10CMInferenceJobCommandInput;
      output: StopICD10CMInferenceJobCommandOutput;
    };
  };
}
