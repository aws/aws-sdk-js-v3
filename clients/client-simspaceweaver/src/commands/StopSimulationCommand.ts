// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopSimulationInput, StopSimulationOutput } from "../models/models_0";
import { de_StopSimulationCommand, se_StopSimulationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopSimulationCommand}.
 */
export interface StopSimulationCommandInput extends StopSimulationInput {}
/**
 * @public
 *
 * The output of {@link StopSimulationCommand}.
 */
export interface StopSimulationCommandOutput extends StopSimulationOutput, __MetadataBearer {}

/**
 * <p>Stops the given simulation.</p>
 *          <important>
 *             <p>You can't restart a simulation after you stop it. If you want to restart a simulation, then
 *             you must stop it, delete it, and start a new instance of it.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, StopSimulationCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, StopSimulationCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // StopSimulationInput
 *   Simulation: "STRING_VALUE", // required
 * };
 * const command = new StopSimulationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopSimulationCommandInput - {@link StopSimulationCommandInput}
 * @returns {@link StopSimulationCommandOutput}
 * @see {@link StopSimulationCommandInput} for command's `input` shape.
 * @see {@link StopSimulationCommandOutput} for command's `response` shape.
 * @see {@link SimSpaceWeaverClientResolvedConfig | config} for SimSpaceWeaverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SimSpaceWeaverServiceException}
 * <p>Base exception class for all service exceptions from SimSpaceWeaver service.</p>
 *
 * @public
 */
export class StopSimulationCommand extends $Command
  .classBuilder<
    StopSimulationCommandInput,
    StopSimulationCommandOutput,
    SimSpaceWeaverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SimSpaceWeaverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimSpaceWeaver", "StopSimulation", {})
  .n("SimSpaceWeaverClient", "StopSimulationCommand")
  .f(void 0, void 0)
  .ser(se_StopSimulationCommand)
  .de(de_StopSimulationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopSimulationInput;
      output: {};
    };
    sdk: {
      input: StopSimulationCommandInput;
      output: StopSimulationCommandOutput;
    };
  };
}
