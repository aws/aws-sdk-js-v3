// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateContextStoreRequest, UpdateContextStoreResponse } from "../models/models_0";
import { UpdateContextStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateContextStoreCommand}.
 */
export interface UpdateContextStoreCommandInput extends UpdateContextStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContextStoreCommand}.
 */
export interface UpdateContextStoreCommandOutput extends UpdateContextStoreResponse, __MetadataBearer {}

/**
 * <p>Updates the description of a context store. The context store must be in the <code>AVAILABLE</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateContextStoreCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateContextStoreCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // UpdateContextStoreRequest
 *   ContextStoreId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateContextStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContextStoreResponse
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
 * @param UpdateContextStoreCommandInput - {@link UpdateContextStoreCommandInput}
 * @returns {@link UpdateContextStoreCommandOutput}
 * @see {@link UpdateContextStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateContextStoreCommandOutput} for command's `response` shape.
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
export class UpdateContextStoreCommand extends command<UpdateContextStoreCommandInput, UpdateContextStoreCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContextStore",
  UpdateContextStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContextStoreRequest;
      output: UpdateContextStoreResponse;
    };
    sdk: {
      input: UpdateContextStoreCommandInput;
      output: UpdateContextStoreCommandOutput;
    };
  };
}
