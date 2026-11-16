// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateContextStoreRequest, DisassociateContextStoreResponse } from "../models/models_0";
import { DisassociateContextStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateContextStoreCommand}.
 */
export interface DisassociateContextStoreCommandInput extends DisassociateContextStoreRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateContextStoreCommand}.
 */
export interface DisassociateContextStoreCommandOutput extends DisassociateContextStoreResponse, __MetadataBearer {}

/**
 * <p>Disassociates a transit gateway from a context store. The association must be in the <code>ASSOCIATED</code> or <code>FAILED</code> state. The association stays in the <code>DISASSOCIATING</code> state until the disassociation completes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateContextStoreCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateContextStoreCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DisassociateContextStoreRequest
 *   ContextStoreId: "STRING_VALUE", // required
 *   TransitGatewayArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateContextStoreCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateContextStoreResponse
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
 * @param DisassociateContextStoreCommandInput - {@link DisassociateContextStoreCommandInput}
 * @returns {@link DisassociateContextStoreCommandOutput}
 * @see {@link DisassociateContextStoreCommandInput} for command's `input` shape.
 * @see {@link DisassociateContextStoreCommandOutput} for command's `response` shape.
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
export class DisassociateContextStoreCommand extends command<DisassociateContextStoreCommandInput, DisassociateContextStoreCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateContextStore",
  DisassociateContextStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateContextStoreRequest;
      output: DisassociateContextStoreResponse;
    };
    sdk: {
      input: DisassociateContextStoreCommandInput;
      output: DisassociateContextStoreCommandOutput;
    };
  };
}
