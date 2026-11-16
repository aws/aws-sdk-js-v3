// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContextStoreRequest, DeleteContextStoreResponse } from "../models/models_0";
import { DeleteContextStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContextStoreCommand}.
 */
export interface DeleteContextStoreCommandInput extends DeleteContextStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContextStoreCommand}.
 */
export interface DeleteContextStoreCommandOutput extends DeleteContextStoreResponse, __MetadataBearer {}

/**
 * <p>Deletes a context store. The context store must be in the <code>AVAILABLE</code> state. You must disassociate all transit gateways from the context store before you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteContextStoreCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteContextStoreCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteContextStoreRequest
 *   ContextStoreId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContextStoreCommand(input);
 * const response = await client.send(command);
 * // { // DeleteContextStoreResponse
 * //   ContextStore: { // ContextStore
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     ContextStoreId: "STRING_VALUE",
 * //     ContextStoreArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     State: "PENDING" || "AVAILABLE" || "UPDATING" || "DELETING" || "DELETED",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteContextStoreCommandInput - {@link DeleteContextStoreCommandInput}
 * @returns {@link DeleteContextStoreCommandOutput}
 * @see {@link DeleteContextStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteContextStoreCommandOutput} for command's `response` shape.
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
export class DeleteContextStoreCommand extends command<DeleteContextStoreCommandInput, DeleteContextStoreCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContextStore",
  DeleteContextStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContextStoreRequest;
      output: DeleteContextStoreResponse;
    };
    sdk: {
      input: DeleteContextStoreCommandInput;
      output: DeleteContextStoreCommandOutput;
    };
  };
}
