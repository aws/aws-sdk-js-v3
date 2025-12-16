// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCoreNetworkChangeEventsRequest, GetCoreNetworkChangeEventsResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { GetCoreNetworkChangeEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCoreNetworkChangeEventsCommand}.
 */
export interface GetCoreNetworkChangeEventsCommandInput extends GetCoreNetworkChangeEventsRequest {}
/**
 * @public
 *
 * The output of {@link GetCoreNetworkChangeEventsCommand}.
 */
export interface GetCoreNetworkChangeEventsCommandOutput extends GetCoreNetworkChangeEventsResponse, __MetadataBearer {}

/**
 * <p>Returns information about a core network change event.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetCoreNetworkChangeEventsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetCoreNetworkChangeEventsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetCoreNetworkChangeEventsRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PolicyVersionId: Number("int"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCoreNetworkChangeEventsCommand(input);
 * const response = await client.send(command);
 * // { // GetCoreNetworkChangeEventsResponse
 * //   CoreNetworkChangeEvents: [ // CoreNetworkChangeEventList
 * //     { // CoreNetworkChangeEvent
 * //       Type: "CORE_NETWORK_SEGMENT" || "NETWORK_FUNCTION_GROUP" || "CORE_NETWORK_EDGE" || "ATTACHMENT_MAPPING" || "ATTACHMENT_ROUTE_PROPAGATION" || "ATTACHMENT_ROUTE_STATIC" || "ROUTING_POLICY" || "ROUTING_POLICY_SEGMENT_ASSOCIATION" || "ROUTING_POLICY_EDGE_ASSOCIATION" || "ROUTING_POLICY_ATTACHMENT_ASSOCIATION" || "CORE_NETWORK_CONFIGURATION" || "SEGMENTS_CONFIGURATION" || "SEGMENT_ACTIONS_CONFIGURATION" || "ATTACHMENT_POLICIES_CONFIGURATION",
 * //       Action: "ADD" || "MODIFY" || "REMOVE",
 * //       IdentifierPath: "STRING_VALUE",
 * //       EventTime: new Date("TIMESTAMP"),
 * //       Status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //       Values: { // CoreNetworkChangeEventValues
 * //         EdgeLocation: "STRING_VALUE",
 * //         PeerEdgeLocation: "STRING_VALUE",
 * //         RoutingPolicyDirection: "inbound" || "outbound",
 * //         SegmentName: "STRING_VALUE",
 * //         NetworkFunctionGroupName: "STRING_VALUE",
 * //         AttachmentId: "STRING_VALUE",
 * //         Cidr: "STRING_VALUE",
 * //         RoutingPolicyAssociationDetails: [ // RoutingPolicyAssociationDetailsList
 * //           { // RoutingPolicyAssociationDetail
 * //             RoutingPolicyNames: [ // ConstrainedStringList
 * //               "STRING_VALUE",
 * //             ],
 * //             SharedSegments: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCoreNetworkChangeEventsCommandInput - {@link GetCoreNetworkChangeEventsCommandInput}
 * @returns {@link GetCoreNetworkChangeEventsCommandOutput}
 * @see {@link GetCoreNetworkChangeEventsCommandInput} for command's `input` shape.
 * @see {@link GetCoreNetworkChangeEventsCommandOutput} for command's `response` shape.
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
export class GetCoreNetworkChangeEventsCommand extends $Command
  .classBuilder<
    GetCoreNetworkChangeEventsCommandInput,
    GetCoreNetworkChangeEventsCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "GetCoreNetworkChangeEvents", {})
  .n("NetworkManagerClient", "GetCoreNetworkChangeEventsCommand")
  .sc(GetCoreNetworkChangeEvents$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCoreNetworkChangeEventsRequest;
      output: GetCoreNetworkChangeEventsResponse;
    };
    sdk: {
      input: GetCoreNetworkChangeEventsCommandInput;
      output: GetCoreNetworkChangeEventsCommandOutput;
    };
  };
}
