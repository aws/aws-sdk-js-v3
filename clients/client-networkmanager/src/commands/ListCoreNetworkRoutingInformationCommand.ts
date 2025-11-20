// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCoreNetworkRoutingInformationRequest,
  ListCoreNetworkRoutingInformationResponse,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { ListCoreNetworkRoutingInformation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListCoreNetworkRoutingInformationCommandOutput
  extends ListCoreNetworkRoutingInformationResponse,
    __MetadataBearer {}

/**
 * <p>Lists routing information for a core network, including routes and their attributes.</p>
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
 *   LocalPreferenceMatches: [ // ConstrainedStringList
 *     "STRING_VALUE",
 *   ],
 *   ExactAsPathMatches: [
 *     "STRING_VALUE",
 *   ],
 *   MedMatches: [
 *     "STRING_VALUE",
 *   ],
 *   CommunityMatches: [
 *     "STRING_VALUE",
 *   ],
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
export class ListCoreNetworkRoutingInformationCommand extends $Command
  .classBuilder<
    ListCoreNetworkRoutingInformationCommandInput,
    ListCoreNetworkRoutingInformationCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "ListCoreNetworkRoutingInformation", {})
  .n("NetworkManagerClient", "ListCoreNetworkRoutingInformationCommand")
  .sc(ListCoreNetworkRoutingInformation)
  .build() {
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
