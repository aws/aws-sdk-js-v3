// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateContextStoreRequest, CreateContextStoreResponse } from "../models/models_0";
import { CreateContextStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateContextStoreCommand}.
 */
export interface CreateContextStoreCommandInput extends CreateContextStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateContextStoreCommand}.
 */
export interface CreateContextStoreCommandOutput extends CreateContextStoreResponse, __MetadataBearer {}

/**
 * <p>Creates a context store in a global network. A context store maintains context entries, such as security groups, subnets, and attachments, for the resources connected to the transit gateways that you associate with it.</p>
 *          <p>The context store is in the <code>PENDING</code> state when it's created, and changes to <code>AVAILABLE</code> when it's ready to use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateContextStoreCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateContextStoreCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // CreateContextStoreRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateContextStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateContextStoreResponse
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
 * @param CreateContextStoreCommandInput - {@link CreateContextStoreCommandInput}
 * @returns {@link CreateContextStoreCommandOutput}
 * @see {@link CreateContextStoreCommandInput} for command's `input` shape.
 * @see {@link CreateContextStoreCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
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
export class CreateContextStoreCommand extends command<CreateContextStoreCommandInput, CreateContextStoreCommandOutput>(
  _ep0,
  _mw0,
  "CreateContextStore",
  CreateContextStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContextStoreRequest;
      output: CreateContextStoreResponse;
    };
    sdk: {
      input: CreateContextStoreCommandInput;
      output: CreateContextStoreCommandOutput;
    };
  };
}
