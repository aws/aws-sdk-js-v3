// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCoreNetworksRequest, ListCoreNetworksResponse } from "../models/models_0";
import { ListCoreNetworks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCoreNetworksCommand}.
 */
export interface ListCoreNetworksCommandInput extends ListCoreNetworksRequest {}
/**
 * @public
 *
 * The output of {@link ListCoreNetworksCommand}.
 */
export interface ListCoreNetworksCommandOutput extends ListCoreNetworksResponse, __MetadataBearer {}

/**
 * Returns a list of owned and shared core networks.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListCoreNetworksCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListCoreNetworksCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListCoreNetworksRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCoreNetworksCommand(input);
 * const response = await client.send(command);
 * // { // ListCoreNetworksResponse
 * //   CoreNetworks: [ // CoreNetworkSummaryList
 * //     { // CoreNetworkSummary
 * //       CoreNetworkId: "STRING_VALUE",
 * //       CoreNetworkArn: "STRING_VALUE",
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       State: "CREATING" || "UPDATING" || "AVAILABLE" || "DELETING",
 * //       Description: "STRING_VALUE",
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
 * @param ListCoreNetworksCommandInput - {@link ListCoreNetworksCommandInput}
 * @returns {@link ListCoreNetworksCommandOutput}
 * @see {@link ListCoreNetworksCommandInput} for command's `input` shape.
 * @see {@link ListCoreNetworksCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class ListCoreNetworksCommand extends command<ListCoreNetworksCommandInput, ListCoreNetworksCommandOutput>(
  _ep0,
  _mw0,
  "ListCoreNetworks",
  ListCoreNetworks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCoreNetworksRequest;
      output: ListCoreNetworksResponse;
    };
    sdk: {
      input: ListCoreNetworksCommandInput;
      output: ListCoreNetworksCommandOutput;
    };
  };
}
