// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateApplicationFleetRequest, DisassociateApplicationFleetResult } from "../models/models_0";
import { DisassociateApplicationFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DisassociateApplicationFleetCommandOutput extends DisassociateApplicationFleetResult, __MetadataBearer {}

/**
 * <p>Disassociates the specified application from the fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DisassociateApplicationFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DisassociateApplicationFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
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
 *
 * @public
 */
export class DisassociateApplicationFleetCommand extends command<DisassociateApplicationFleetCommandInput, DisassociateApplicationFleetCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateApplicationFleet",
  DisassociateApplicationFleet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateApplicationFleetRequest;
      output: {};
    };
    sdk: {
      input: DisassociateApplicationFleetCommandInput;
      output: DisassociateApplicationFleetCommandOutput;
    };
  };
}
