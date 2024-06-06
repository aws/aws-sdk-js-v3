// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartAppInput, StartAppInputFilterSensitiveLog, StartAppOutput } from "../models/models_0";
import { de_StartAppCommand, se_StartAppCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAppCommand}.
 */
export interface StartAppCommandInput extends StartAppInput {}
/**
 * @public
 *
 * The output of {@link StartAppCommand}.
 */
export interface StartAppCommandOutput extends StartAppOutput, __MetadataBearer {}

/**
 * <p>Starts a custom app with the configuration specified in the simulation schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, StartAppCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, StartAppCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // StartAppInput
 *   ClientToken: "STRING_VALUE",
 *   Simulation: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   LaunchOverrides: { // LaunchOverrides
 *     LaunchCommands: [ // LaunchCommandList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new StartAppCommand(input);
 * const response = await client.send(command);
 * // { // StartAppOutput
 * //   Name: "STRING_VALUE",
 * //   Domain: "STRING_VALUE",
 * //   Simulation: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAppCommandInput - {@link StartAppCommandInput}
 * @returns {@link StartAppCommandOutput}
 * @see {@link StartAppCommandInput} for command's `input` shape.
 * @see {@link StartAppCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
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
export class StartAppCommand extends $Command
  .classBuilder<
    StartAppCommandInput,
    StartAppCommandOutput,
    SimSpaceWeaverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SimSpaceWeaverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimSpaceWeaver", "StartApp", {})
  .n("SimSpaceWeaverClient", "StartAppCommand")
  .f(StartAppInputFilterSensitiveLog, void 0)
  .ser(se_StartAppCommand)
  .de(de_StartAppCommand)
  .build() {}
