// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateCollectorInput } from "../models/models_0";
import { DisassociateCollector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateCollectorCommand}.
 */
export interface DisassociateCollectorCommandInput extends DisassociateCollectorInput {}
/**
 * @public
 *
 * The output of {@link DisassociateCollectorCommand}.
 */
export interface DisassociateCollectorCommandOutput extends __MetadataBearer {}

/**
 * Removes one Collector association from this Environment, preserving its other associations. The stored Collector data-access role is cleared when no Collector associations remain. The Environment owner must have permission to disassociate. A current Collector access grant is not required, and the Collector does not need to remain active or present, so stale or revoked associations can be cleaned up.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, DisassociateCollectorCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, DisassociateCollectorCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // DisassociateCollectorInput
 *   environmentId: "STRING_VALUE", // required
 *   collectorArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateCollectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateCollectorCommandInput - {@link DisassociateCollectorCommandInput}
 * @returns {@link DisassociateCollectorCommandOutput}
 * @see {@link DisassociateCollectorCommandInput} for command's `input` shape.
 * @see {@link DisassociateCollectorCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class DisassociateCollectorCommand extends command<DisassociateCollectorCommandInput, DisassociateCollectorCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateCollector",
  DisassociateCollector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateCollectorInput;
      output: {};
    };
    sdk: {
      input: DisassociateCollectorCommandInput;
      output: DisassociateCollectorCommandOutput;
    };
  };
}
