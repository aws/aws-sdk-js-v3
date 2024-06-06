// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateApplicationFleetRequest, DisassociateApplicationFleetResult } from "../models/models_0";
import {
  de_DisassociateApplicationFleetCommand,
  se_DisassociateApplicationFleetCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateApplicationFleetCommand}.
 */
export interface DisassociateApplicationFleetCommandInput extends DisassociateApplicationFleetRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateApplicationFleetCommand}.
 */
export interface DisassociateApplicationFleetCommandOutput
  extends DisassociateApplicationFleetResult,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified application from the fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DisassociateApplicationFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DisassociateApplicationFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DisassociateApplicationFleetRequest
 *   FleetName: "STRING_VALUE", // required
 *   ApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateApplicationFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateApplicationFleetCommandInput - {@link DisassociateApplicationFleetCommandInput}
 * @returns {@link DisassociateApplicationFleetCommandOutput}
 * @see {@link DisassociateApplicationFleetCommandInput} for command's `input` shape.
 * @see {@link DisassociateApplicationFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 * @public
 */
export class DisassociateApplicationFleetCommand extends $Command
  .classBuilder<
    DisassociateApplicationFleetCommandInput,
    DisassociateApplicationFleetCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "DisassociateApplicationFleet", {})
  .n("AppStreamClient", "DisassociateApplicationFleetCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateApplicationFleetCommand)
  .de(de_DisassociateApplicationFleetCommand)
  .build() {}
