// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateLensesInput } from "../models/models_0";
import { DisassociateLenses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateLensesCommand}.
 */
export interface DisassociateLensesCommandInput extends DisassociateLensesInput {}
/**
 * @public
 *
 * The output of {@link DisassociateLensesCommand}.
 */
export interface DisassociateLensesCommandOutput extends __MetadataBearer {}

/**
 * Disassociate a lens from a workload.
 *
 * Up to 10 lenses can be disassociated from a workload in a single API operation.
 *
 * > **Note:** The Amazon Web Services Well-Architected Framework lens (`wellarchitected`) cannot be removed from a workload.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DisassociateLensesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DisassociateLensesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DisassociateLensesInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAliases: [ // LensAliases // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateLensesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateLensesCommandInput - {@link DisassociateLensesCommandInput}
 * @returns {@link DisassociateLensesCommandOutput}
 * @see {@link DisassociateLensesCommandInput} for command's `input` shape.
 * @see {@link DisassociateLensesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class DisassociateLensesCommand extends command<DisassociateLensesCommandInput, DisassociateLensesCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateLenses",
  DisassociateLenses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateLensesInput;
      output: {};
    };
    sdk: {
      input: DisassociateLensesCommandInput;
      output: DisassociateLensesCommandOutput;
    };
  };
}
