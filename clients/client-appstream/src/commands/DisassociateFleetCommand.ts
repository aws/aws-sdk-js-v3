// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateFleetRequest, DisassociateFleetResult } from "../models/models_0";
import { DisassociateFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateFleetCommand}.
 */
export interface DisassociateFleetCommandInput extends DisassociateFleetRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFleetCommand}.
 */
export interface DisassociateFleetCommandOutput extends DisassociateFleetResult, __MetadataBearer {}

/**
 * Disassociates the specified fleet from the specified stack.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DisassociateFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DisassociateFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DisassociateFleetRequest
 *   FleetName: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateFleetCommandInput - {@link DisassociateFleetCommandInput}
 * @returns {@link DisassociateFleetCommandOutput}
 * @see {@link DisassociateFleetCommandInput} for command's `input` shape.
 * @see {@link DisassociateFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class DisassociateFleetCommand extends command<DisassociateFleetCommandInput, DisassociateFleetCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateFleet",
  DisassociateFleet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateFleetRequest;
      output: {};
    };
    sdk: {
      input: DisassociateFleetCommandInput;
      output: DisassociateFleetCommandOutput;
    };
  };
}
