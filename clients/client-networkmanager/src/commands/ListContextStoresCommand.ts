// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContextStoresRequest, ListContextStoresResponse } from "../models/models_0";
import { ListContextStores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContextStoresCommand}.
 */
export interface ListContextStoresCommandInput extends ListContextStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListContextStoresCommand}.
 */
export interface ListContextStoresCommandOutput extends ListContextStoresResponse, __MetadataBearer {}

/**
 * <p>Returns the context stores in your account. You can optionally return only the context stores in a specific global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListContextStoresCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListContextStoresCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListContextStoresRequest
 *   GlobalNetworkId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListContextStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListContextStoresResponse
 * //   ContextStores: [ // ContextStoreList
 * //     { // ContextStore
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       ContextStoreId: "STRING_VALUE",
 * //       ContextStoreArn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       State: "PENDING" || "AVAILABLE" || "UPDATING" || "DELETING" || "DELETED",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContextStoresCommandInput - {@link ListContextStoresCommandInput}
 * @returns {@link ListContextStoresCommandOutput}
 * @see {@link ListContextStoresCommandInput} for command's `input` shape.
 * @see {@link ListContextStoresCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class ListContextStoresCommand extends command<ListContextStoresCommandInput, ListContextStoresCommandOutput>(
  _ep0,
  _mw0,
  "ListContextStores",
  ListContextStores$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContextStoresRequest;
      output: ListContextStoresResponse;
    };
    sdk: {
      input: ListContextStoresCommandInput;
      output: ListContextStoresCommandOutput;
    };
  };
}
