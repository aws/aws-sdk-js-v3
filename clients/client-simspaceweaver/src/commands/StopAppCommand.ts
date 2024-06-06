// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopAppInput, StopAppOutput } from "../models/models_0";
import { de_StopAppCommand, se_StopAppCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopAppCommand}.
 */
export interface StopAppCommandInput extends StopAppInput {}
/**
 * @public
 *
 * The output of {@link StopAppCommand}.
 */
export interface StopAppCommandOutput extends StopAppOutput, __MetadataBearer {}

/**
 * <p>Stops the given custom app and shuts down all of its allocated compute resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, StopAppCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, StopAppCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // StopAppInput
 *   Simulation: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE", // required
 *   App: "STRING_VALUE", // required
 * };
 * const command = new StopAppCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAppCommandInput - {@link StopAppCommandInput}
 * @returns {@link StopAppCommandOutput}
 * @see {@link StopAppCommandInput} for command's `input` shape.
 * @see {@link StopAppCommandOutput} for command's `response` shape.
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
export class StopAppCommand extends $Command
  .classBuilder<
    StopAppCommandInput,
    StopAppCommandOutput,
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
  .s("SimSpaceWeaver", "StopApp", {})
  .n("SimSpaceWeaverClient", "StopAppCommand")
  .f(void 0, void 0)
  .ser(se_StopAppCommand)
  .de(de_StopAppCommand)
  .build() {}
