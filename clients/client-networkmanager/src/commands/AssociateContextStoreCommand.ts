// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateContextStoreRequest, AssociateContextStoreResponse } from "../models/models_0";
import { AssociateContextStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateContextStoreCommand}.
 */
export interface AssociateContextStoreCommandInput extends AssociateContextStoreRequest {}
/**
 * @public
 *
 * The output of {@link AssociateContextStoreCommand}.
 */
export interface AssociateContextStoreCommandOutput extends AssociateContextStoreResponse, __MetadataBearer {}

/**
 * <p>Associates a transit gateway with a context store. The transit gateway must be registered with the global network of the context store, and can't be associated with more than one context store. The context store must be in the <code>AVAILABLE</code> state.</p>
 *          <p>The association is in the <code>ASSOCIATING</code> state when it's created, and changes to <code>ASSOCIATED</code> when it's complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, AssociateContextStoreCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, AssociateContextStoreCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // AssociateContextStoreRequest
 *   ContextStoreId: "STRING_VALUE", // required
 *   TransitGatewayArn: "STRING_VALUE",
 * };
 * const command = new AssociateContextStoreCommand(input);
 * const response = await client.send(command);
 * // { // AssociateContextStoreResponse
 * //   ContextStoreAssociation: { // ContextStoreAssociation
 * //     ContextStoreId: "STRING_VALUE",
 * //     TransitGatewayArn: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     State: "ASSOCIATING" || "ASSOCIATED" || "DISASSOCIATING" || "FAILED",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateContextStoreCommandInput - {@link AssociateContextStoreCommandInput}
 * @returns {@link AssociateContextStoreCommandOutput}
 * @see {@link AssociateContextStoreCommandInput} for command's `input` shape.
 * @see {@link AssociateContextStoreCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class AssociateContextStoreCommand extends command<AssociateContextStoreCommandInput, AssociateContextStoreCommandOutput>(
  _ep0,
  _mw0,
  "AssociateContextStore",
  AssociateContextStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateContextStoreRequest;
      output: AssociateContextStoreResponse;
    };
    sdk: {
      input: AssociateContextStoreCommandInput;
      output: AssociateContextStoreCommandOutput;
    };
  };
}
