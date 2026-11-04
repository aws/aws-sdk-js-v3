// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ApplyPendingMaintenanceActionMessage, ApplyPendingMaintenanceActionResult } from "../models/models_0";
import { ApplyPendingMaintenanceAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ApplyPendingMaintenanceActionCommand}.
 */
export interface ApplyPendingMaintenanceActionCommandInput extends ApplyPendingMaintenanceActionMessage {}
/**
 * @public
 *
 * The output of {@link ApplyPendingMaintenanceActionCommand}.
 */
export interface ApplyPendingMaintenanceActionCommandOutput extends ApplyPendingMaintenanceActionResult, __MetadataBearer {}

/**
 * Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ApplyPendingMaintenanceActionCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ApplyPendingMaintenanceActionCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
 * const input = { // ApplyPendingMaintenanceActionMessage
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ApplyAction: "STRING_VALUE", // required
 *   OptInType: "STRING_VALUE", // required
 * };
 * const command = new ApplyPendingMaintenanceActionCommand(input);
 * const response = await client.send(command);
 * // { // ApplyPendingMaintenanceActionResult
 * //   ResourcePendingMaintenanceActions: { // ResourcePendingMaintenanceActions
 * //     ResourceIdentifier: "STRING_VALUE",
 * //     PendingMaintenanceActionDetails: [ // PendingMaintenanceActionDetails
 * //       { // PendingMaintenanceAction
 * //         Action: "STRING_VALUE",
 * //         AutoAppliedAfterDate: new Date("TIMESTAMP"),
 * //         ForcedApplyDate: new Date("TIMESTAMP"),
 * //         OptInStatus: "STRING_VALUE",
 * //         CurrentApplyDate: new Date("TIMESTAMP"),
 * //         Description: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ApplyPendingMaintenanceActionCommandInput - {@link ApplyPendingMaintenanceActionCommandInput}
 * @returns {@link ApplyPendingMaintenanceActionCommandOutput}
 * @see {@link ApplyPendingMaintenanceActionCommandInput} for command's `input` shape.
 * @see {@link ApplyPendingMaintenanceActionCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The cluster isn't in a valid state.
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *
 * The specified instance isn't in the *available* state.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The specified resource ID was not found.
 *
 * @throws {@link DocDBServiceException}
 *
 * Base exception class for all service exceptions from DocDB service.
 *
 * @public
 */
export class ApplyPendingMaintenanceActionCommand extends command<ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput>(
  _ep0,
  _mw0,
  "ApplyPendingMaintenanceAction",
  ApplyPendingMaintenanceAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApplyPendingMaintenanceActionMessage;
      output: ApplyPendingMaintenanceActionResult;
    };
    sdk: {
      input: ApplyPendingMaintenanceActionCommandInput;
      output: ApplyPendingMaintenanceActionCommandOutput;
    };
  };
}
