// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartClockInput, StartClockOutput } from "../models/models_0";
import { StartClock$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  SimSpaceWeaverClientResolvedConfig,
} from "../SimSpaceWeaverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartClockCommand}.
 */
export interface StartClockCommandInput extends StartClockInput {}
/**
 * @public
 *
 * The output of {@link StartClockCommand}.
 */
export interface StartClockCommandOutput extends StartClockOutput, __MetadataBearer {}

/**
 * <p>Starts the simulation clock.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, StartClockCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, StartClockCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * // import type { SimSpaceWeaverClientConfig } from "@aws-sdk/client-simspaceweaver";
 * const config = {}; // type is SimSpaceWeaverClientConfig
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // StartClockInput
 *   Simulation: "STRING_VALUE", // required
 * };
 * const command = new StartClockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartClockCommandInput - {@link StartClockCommandInput}
 * @returns {@link StartClockCommandOutput}
 * @see {@link StartClockCommandInput} for command's `input` shape.
 * @see {@link StartClockCommandOutput} for command's `response` shape.
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
export class StartClockCommand extends $Command
  .classBuilder<
    StartClockCommandInput,
    StartClockCommandOutput,
    SimSpaceWeaverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SimSpaceWeaverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimSpaceWeaver", "StartClock", {})
  .n("SimSpaceWeaverClient", "StartClockCommand")
  .sc(StartClock$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartClockInput;
      output: {};
    };
    sdk: {
      input: StartClockCommandInput;
      output: StartClockCommandOutput;
    };
  };
}
