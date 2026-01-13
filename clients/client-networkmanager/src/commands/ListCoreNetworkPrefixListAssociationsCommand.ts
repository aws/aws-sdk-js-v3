// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListCoreNetworkPrefixListAssociationsRequest,
  ListCoreNetworkPrefixListAssociationsResponse,
} from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { ListCoreNetworkPrefixListAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCoreNetworkPrefixListAssociationsCommand}.
 */
export interface ListCoreNetworkPrefixListAssociationsCommandInput extends ListCoreNetworkPrefixListAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCoreNetworkPrefixListAssociationsCommand}.
 */
export interface ListCoreNetworkPrefixListAssociationsCommandOutput extends ListCoreNetworkPrefixListAssociationsResponse, __MetadataBearer {}

/**
 * <p>Lists the prefix list associations for a core network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListCoreNetworkPrefixListAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListCoreNetworkPrefixListAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListCoreNetworkPrefixListAssociationsRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PrefixListArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCoreNetworkPrefixListAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCoreNetworkPrefixListAssociationsResponse
 * //   PrefixListAssociations: [ // PrefixListAssociationList
 * //     { // PrefixListAssociation
 * //       CoreNetworkId: "STRING_VALUE",
 * //       PrefixListArn: "STRING_VALUE",
 * //       PrefixListAlias: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCoreNetworkPrefixListAssociationsCommandInput - {@link ListCoreNetworkPrefixListAssociationsCommandInput}
 * @returns {@link ListCoreNetworkPrefixListAssociationsCommandOutput}
 * @see {@link ListCoreNetworkPrefixListAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListCoreNetworkPrefixListAssociationsCommandOutput} for command's `response` shape.
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
export class ListCoreNetworkPrefixListAssociationsCommand extends $Command
  .classBuilder<
    ListCoreNetworkPrefixListAssociationsCommandInput,
    ListCoreNetworkPrefixListAssociationsCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "ListCoreNetworkPrefixListAssociations", {})
  .n("NetworkManagerClient", "ListCoreNetworkPrefixListAssociationsCommand")
  .sc(ListCoreNetworkPrefixListAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCoreNetworkPrefixListAssociationsRequest;
      output: ListCoreNetworkPrefixListAssociationsResponse;
    };
    sdk: {
      input: ListCoreNetworkPrefixListAssociationsCommandInput;
      output: ListCoreNetworkPrefixListAssociationsCommandOutput;
    };
  };
}
