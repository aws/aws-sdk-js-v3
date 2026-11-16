// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContextStoreAssociationsRequest, ListContextStoreAssociationsResponse } from "../models/models_0";
import { ListContextStoreAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContextStoreAssociationsCommand}.
 */
export interface ListContextStoreAssociationsCommandInput extends ListContextStoreAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListContextStoreAssociationsCommand}.
 */
export interface ListContextStoreAssociationsCommandOutput extends ListContextStoreAssociationsResponse, __MetadataBearer {}

/**
 * <p>Returns the transit gateway associations of a context store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListContextStoreAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListContextStoreAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListContextStoreAssociationsRequest
 *   ContextStoreId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListContextStoreAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListContextStoreAssociationsResponse
 * //   ContextStoreAssociations: [ // ContextStoreAssociationList
 * //     { // ContextStoreAssociation
 * //       ContextStoreId: "STRING_VALUE",
 * //       TransitGatewayArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       State: "ASSOCIATING" || "ASSOCIATED" || "DISASSOCIATING" || "FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContextStoreAssociationsCommandInput - {@link ListContextStoreAssociationsCommandInput}
 * @returns {@link ListContextStoreAssociationsCommandOutput}
 * @see {@link ListContextStoreAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListContextStoreAssociationsCommandOutput} for command's `response` shape.
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
export class ListContextStoreAssociationsCommand extends command<ListContextStoreAssociationsCommandInput, ListContextStoreAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListContextStoreAssociations",
  ListContextStoreAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContextStoreAssociationsRequest;
      output: ListContextStoreAssociationsResponse;
    };
    sdk: {
      input: ListContextStoreAssociationsCommandInput;
      output: ListContextStoreAssociationsCommandOutput;
    };
  };
}
