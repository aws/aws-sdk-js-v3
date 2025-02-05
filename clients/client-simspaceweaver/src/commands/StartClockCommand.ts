// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartClockInput, StartClockOutput } from "../models/models_0";
import { de_StartClockCommand, se_StartClockCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimSpaceWeaver", "StartClock", {})
  .n("SimSpaceWeaverClient", "StartClockCommand")
  .f(void 0, void 0)
  .ser(se_StartClockCommand)
  .de(de_StartClockCommand)
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
