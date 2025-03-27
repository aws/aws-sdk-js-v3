// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopEntitiesDetectionV2JobRequest, StopEntitiesDetectionV2JobResponse } from "../models/models_0";
import { de_StopEntitiesDetectionV2JobCommand, se_StopEntitiesDetectionV2JobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopEntitiesDetectionV2JobCommand}.
 */
export interface StopEntitiesDetectionV2JobCommandInput extends StopEntitiesDetectionV2JobRequest {}
/**
 * @public
 *
 * The output of {@link StopEntitiesDetectionV2JobCommand}.
 */
export interface StopEntitiesDetectionV2JobCommandOutput extends StopEntitiesDetectionV2JobResponse, __MetadataBearer {}

/**
 * <p>Stops a medical entities detection job in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StopEntitiesDetectionV2JobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StopEntitiesDetectionV2JobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const input = { // StopEntitiesDetectionV2JobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopEntitiesDetectionV2JobCommand(input);
 * const response = await client.send(command);
 * // { // StopEntitiesDetectionV2JobResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopEntitiesDetectionV2JobCommandInput - {@link StopEntitiesDetectionV2JobCommandInput}
 * @returns {@link StopEntitiesDetectionV2JobCommandOutput}
 * @see {@link StopEntitiesDetectionV2JobCommandInput} for command's `input` shape.
 * @see {@link StopEntitiesDetectionV2JobCommandOutput} for command's `response` shape.
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
export class StopEntitiesDetectionV2JobCommand extends $Command
  .classBuilder<
    StopEntitiesDetectionV2JobCommandInput,
    StopEntitiesDetectionV2JobCommandOutput,
    ComprehendMedicalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendMedicalClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ComprehendMedical_20181030", "StopEntitiesDetectionV2Job", {})
  .n("ComprehendMedicalClient", "StopEntitiesDetectionV2JobCommand")
  .f(void 0, void 0)
  .ser(se_StopEntitiesDetectionV2JobCommand)
  .de(de_StopEntitiesDetectionV2JobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopEntitiesDetectionV2JobRequest;
      output: StopEntitiesDetectionV2JobResponse;
    };
    sdk: {
      input: StopEntitiesDetectionV2JobCommandInput;
      output: StopEntitiesDetectionV2JobCommandOutput;
    };
  };
}
