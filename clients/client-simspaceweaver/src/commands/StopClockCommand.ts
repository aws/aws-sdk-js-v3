// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopClockInput, StopClockOutput } from "../models/models_0";
import { de_StopClockCommand, se_StopClockCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopClockCommand}.
 */
export interface StopClockCommandInput extends StopClockInput {}
/**
 * @public
 *
 * The output of {@link StopClockCommand}.
 */
export interface StopClockCommandOutput extends StopClockOutput, __MetadataBearer {}

/**
 * <p>Stops the simulation clock.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, StopClockCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, StopClockCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // StopClockInput
 *   Simulation: "STRING_VALUE", // required
 * };
 * const command = new StopClockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopClockCommandInput - {@link StopClockCommandInput}
 * @returns {@link StopClockCommandOutput}
 * @see {@link StopClockCommandInput} for command's `input` shape.
 * @see {@link StopClockCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class StopClockCommand extends $Command
  .classBuilder<
    StopClockCommandInput,
    StopClockCommandOutput,
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
  .s("SimSpaceWeaver", "StopClock", {})
  .n("SimSpaceWeaverClient", "StopClockCommand")
  .f(void 0, void 0)
  .ser(se_StopClockCommand)
  .de(de_StopClockCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopClockInput;
      output: {};
    };
    sdk: {
      input: StopClockCommandInput;
      output: StopClockCommandOutput;
    };
  };
}
