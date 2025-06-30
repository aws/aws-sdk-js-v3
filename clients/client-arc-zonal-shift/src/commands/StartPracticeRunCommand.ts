// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartPracticeRunRequest, StartPracticeRunResponse } from "../models/models_0";
import { de_StartPracticeRunCommand, se_StartPracticeRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartPracticeRunCommand}.
 */
export interface StartPracticeRunCommandInput extends StartPracticeRunRequest {}
/**
 * @public
 *
 * The output of {@link StartPracticeRunCommand}.
 */
export interface StartPracticeRunCommandOutput extends StartPracticeRunResponse, __MetadataBearer {}

/**
 * <p>Start an on-demand practice run zonal shift in Amazon Application Recovery Controller. With zonal autoshift enabled, you can start an on-demand practice run to verify preparedness at any time. Amazon Web Services also runs automated practice runs about weekly when you have enabled zonal autoshift.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.considerations.html"> Considerations when you configure zonal autoshift</a> in the Amazon Application Recovery Controller Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, StartPracticeRunCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, StartPracticeRunCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const input = { // StartPracticeRunRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 *   awayFrom: "STRING_VALUE", // required
 *   comment: "STRING_VALUE", // required
 * };
 * const command = new StartPracticeRunCommand(input);
 * const response = await client.send(command);
 * // { // StartPracticeRunResponse
 * //   zonalShiftId: "STRING_VALUE", // required
 * //   resourceIdentifier: "STRING_VALUE", // required
 * //   awayFrom: "STRING_VALUE", // required
 * //   expiryTime: new Date("TIMESTAMP"), // required
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   status: "ACTIVE" || "EXPIRED" || "CANCELED", // required
 * //   comment: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartPracticeRunCommandInput - {@link StartPracticeRunCommandInput}
 * @returns {@link StartPracticeRunCommandOutput}
 * @see {@link StartPracticeRunCommandInput} for command's `input` shape.
 * @see {@link StartPracticeRunCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The input requested a resource that was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ARCZonalShiftServiceException}
 * <p>Base exception class for all service exceptions from ARCZonalShift service.</p>
 *
 *
 * @public
 */
export class StartPracticeRunCommand extends $Command
  .classBuilder<
    StartPracticeRunCommandInput,
    StartPracticeRunCommandOutput,
    ARCZonalShiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCZonalShiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PercDataPlane", "StartPracticeRun", {})
  .n("ARCZonalShiftClient", "StartPracticeRunCommand")
  .f(void 0, void 0)
  .ser(se_StartPracticeRunCommand)
  .de(de_StartPracticeRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPracticeRunRequest;
      output: StartPracticeRunResponse;
    };
    sdk: {
      input: StartPracticeRunCommandInput;
      output: StartPracticeRunCommandOutput;
    };
  };
}
