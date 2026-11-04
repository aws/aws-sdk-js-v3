// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateLensesInput } from "../models/models_0";
import { AssociateLenses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateLensesCommand}.
 */
export interface AssociateLensesCommandInput extends AssociateLensesInput {}
/**
 * @public
 *
 * The output of {@link AssociateLensesCommand}.
 */
export interface AssociateLensesCommandOutput extends __MetadataBearer {}

/**
 * Associate a lens to a workload.
 *
 * Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.
 *
 * > **Note:**
 * >
 * > **Disclaimer**
 * >
 * > By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, AssociateLensesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, AssociateLensesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // AssociateLensesInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAliases: [ // LensAliases // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateLensesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateLensesCommandInput - {@link AssociateLensesCommandInput}
 * @returns {@link AssociateLensesCommandOutput}
 * @see {@link AssociateLensesCommandInput} for command's `input` shape.
 * @see {@link AssociateLensesCommandOutput} for command's `response` shape.
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
export class AssociateLensesCommand extends command<AssociateLensesCommandInput, AssociateLensesCommandOutput>(
  _ep0,
  _mw0,
  "AssociateLenses",
  AssociateLenses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateLensesInput;
      output: {};
    };
    sdk: {
      input: AssociateLensesCommandInput;
      output: AssociateLensesCommandOutput;
    };
  };
}
