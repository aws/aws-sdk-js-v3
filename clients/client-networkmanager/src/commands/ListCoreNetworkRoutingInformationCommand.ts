// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListCoreNetworkRoutingInformationRequest,
  ListCoreNetworkRoutingInformationResponse,
} from "../models/models_0";
import { ListCoreNetworkRoutingInformation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCoreNetworkRoutingInformationCommand}.
 */
export interface ListCoreNetworkRoutingInformationCommandInput extends ListCoreNetworkRoutingInformationRequest {}
/**
 * @public
 *
 * The output of {@link ListCoreNetworkRoutingInformationCommand}.
 */
export interface ListCoreNetworkRoutingInformationCommandOutput extends ListCoreNetworkRoutingInformationResponse, __MetadataBearer {}

/**
 * Lists routing information for a core network, including routes and their attributes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListCoreNetworkRoutingInformationCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListCoreNetworkRoutingInformationCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListCoreNetworkRoutingInformationRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   SegmentName: "STRING_VALUE", // required
 *   EdgeLocation: "STRING_VALUE", // required
 *   NextHopFilters: { // FilterMap
 *     "<keys>": [ // FilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ExactPrefixMatches: [ // ConstrainedStringList
 *     "STRING_VALUE",
 *   ],
 *   LongestPrefixMatches: [
 *     "STRING_VALUE",
 *   ],
 *   SubnetOfMatches: [
 *     "STRING_VALUE",
 *   ],
 *   SupernetOfMatches: [
 *     "STRING_VALUE",
 *   ],
 *   LocalPreferenceMatches: [
 *     "STRING_VALUE",
 *   ],
 *   ExactAsPathMatches: "<ConstrainedStringList>",
 *   MedMatches: "<ConstrainedStringList>",
 *   CommunityMatches: "<ConstrainedStringList>",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCoreNetworkRoutingInformationCommand(input);
 * const response = await client.send(command);
 * // { // ListCoreNetworkRoutingInformationResponse
 * //   CoreNetworkRoutingInformation: [ // CoreNetworkRoutingInformationList
 * //     { // CoreNetworkRoutingInformation
 * //       Prefix: "STRING_VALUE",
 * //       NextHop: { // RoutingInformationNextHop
 * //         IpAddress: "STRING_VALUE",
 * //         CoreNetworkAttachmentId: "STRING_VALUE",
 * //         ResourceId: "STRING_VALUE",
 * //         ResourceType: "STRING_VALUE",
 * //         SegmentName: "STRING_VALUE",
 * //         EdgeLocation: "STRING_VALUE",
 * //       },
 * //       LocalPreference: "STRING_VALUE",
 * //       Med: "STRING_VALUE",
 * //       AsPath: [ // ConstrainedStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       Communities: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCoreNetworkRoutingInformationCommandInput - {@link ListCoreNetworkRoutingInformationCommandInput}
 * @returns {@link ListCoreNetworkRoutingInformationCommandOutput}
 * @see {@link ListCoreNetworkRoutingInformationCommandInput} for command's `input` shape.
 * @see {@link ListCoreNetworkRoutingInformationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
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
export class ListCoreNetworkRoutingInformationCommand extends command<ListCoreNetworkRoutingInformationCommandInput, ListCoreNetworkRoutingInformationCommandOutput>(
  _ep0,
  _mw0,
  "ListCoreNetworkRoutingInformation",
  ListCoreNetworkRoutingInformation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCoreNetworkRoutingInformationRequest;
      output: ListCoreNetworkRoutingInformationResponse;
    };
    sdk: {
      input: ListCoreNetworkRoutingInformationCommandInput;
      output: ListCoreNetworkRoutingInformationCommandOutput;
    };
  };
}
