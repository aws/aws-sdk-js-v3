// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetNetworkRoutesRequest, GetNetworkRoutesResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetNetworkRoutesCommand, se_GetNetworkRoutesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkRoutesCommand}.
 */
export interface GetNetworkRoutesCommandInput extends GetNetworkRoutesRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkRoutesCommand}.
 */
export interface GetNetworkRoutesCommandOutput extends GetNetworkRoutesResponse, __MetadataBearer {}

/**
 * <p>Gets the network routes of the specified global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetNetworkRoutesCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetNetworkRoutesCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetNetworkRoutesRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   RouteTableIdentifier: { // RouteTableIdentifier
 *     TransitGatewayRouteTableArn: "STRING_VALUE",
 *     CoreNetworkSegmentEdge: { // CoreNetworkSegmentEdgeIdentifier
 *       CoreNetworkId: "STRING_VALUE",
 *       SegmentName: "STRING_VALUE",
 *       EdgeLocation: "STRING_VALUE",
 *     },
 *     CoreNetworkNetworkFunctionGroup: { // CoreNetworkNetworkFunctionGroupIdentifier
 *       CoreNetworkId: "STRING_VALUE",
 *       NetworkFunctionGroupName: "STRING_VALUE",
 *       EdgeLocation: "STRING_VALUE",
 *     },
 *   },
 *   ExactCidrMatches: [ // ConstrainedStringList
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
 *   PrefixListIds: [
 *     "STRING_VALUE",
 *   ],
 *   States: [ // RouteStateList
 *     "ACTIVE" || "BLACKHOLE",
 *   ],
 *   Types: [ // RouteTypeList
 *     "PROPAGATED" || "STATIC",
 *   ],
 *   DestinationFilters: { // FilterMap
 *     "<keys>": [ // FilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new GetNetworkRoutesCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkRoutesResponse
 * //   RouteTableArn: "STRING_VALUE",
 * //   CoreNetworkSegmentEdge: { // CoreNetworkSegmentEdgeIdentifier
 * //     CoreNetworkId: "STRING_VALUE",
 * //     SegmentName: "STRING_VALUE",
 * //     EdgeLocation: "STRING_VALUE",
 * //   },
 * //   RouteTableType: "TRANSIT_GATEWAY_ROUTE_TABLE" || "CORE_NETWORK_SEGMENT" || "NETWORK_FUNCTION_GROUP",
 * //   RouteTableTimestamp: new Date("TIMESTAMP"),
 * //   NetworkRoutes: [ // NetworkRouteList
 * //     { // NetworkRoute
 * //       DestinationCidrBlock: "STRING_VALUE",
 * //       Destinations: [ // NetworkRouteDestinationList
 * //         { // NetworkRouteDestination
 * //           CoreNetworkAttachmentId: "STRING_VALUE",
 * //           TransitGatewayAttachmentId: "STRING_VALUE",
 * //           SegmentName: "STRING_VALUE",
 * //           NetworkFunctionGroupName: "STRING_VALUE",
 * //           EdgeLocation: "STRING_VALUE",
 * //           ResourceType: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PrefixListId: "STRING_VALUE",
 * //       State: "ACTIVE" || "BLACKHOLE",
 * //       Type: "PROPAGATED" || "STATIC",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetNetworkRoutesCommandInput - {@link GetNetworkRoutesCommandInput}
 * @returns {@link GetNetworkRoutesCommandOutput}
 * @see {@link GetNetworkRoutesCommandInput} for command's `input` shape.
 * @see {@link GetNetworkRoutesCommandOutput} for command's `response` shape.
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
export class GetNetworkRoutesCommand extends $Command
  .classBuilder<
    GetNetworkRoutesCommandInput,
    GetNetworkRoutesCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "GetNetworkRoutes", {})
  .n("NetworkManagerClient", "GetNetworkRoutesCommand")
  .f(void 0, void 0)
  .ser(se_GetNetworkRoutesCommand)
  .de(de_GetNetworkRoutesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkRoutesRequest;
      output: GetNetworkRoutesResponse;
    };
    sdk: {
      input: GetNetworkRoutesCommandInput;
      output: GetNetworkRoutesCommandOutput;
    };
  };
}
