// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartRouteAnalysisRequest, StartRouteAnalysisResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_StartRouteAnalysisCommand, se_StartRouteAnalysisCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartRouteAnalysisCommand}.
 */
export interface StartRouteAnalysisCommandInput extends StartRouteAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link StartRouteAnalysisCommand}.
 */
export interface StartRouteAnalysisCommandOutput extends StartRouteAnalysisResponse, __MetadataBearer {}

/**
 * <p>Starts analyzing the routing path between the specified source and destination. For more information,
 *             see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/route-analyzer.html">Route Analyzer</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, StartRouteAnalysisCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, StartRouteAnalysisCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // StartRouteAnalysisRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   Source: { // RouteAnalysisEndpointOptionsSpecification
 *     TransitGatewayAttachmentArn: "STRING_VALUE",
 *     IpAddress: "STRING_VALUE",
 *   },
 *   Destination: {
 *     TransitGatewayAttachmentArn: "STRING_VALUE",
 *     IpAddress: "STRING_VALUE",
 *   },
 *   IncludeReturnPath: true || false,
 *   UseMiddleboxes: true || false,
 * };
 * const command = new StartRouteAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // StartRouteAnalysisResponse
 * //   RouteAnalysis: { // RouteAnalysis
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     OwnerAccountId: "STRING_VALUE",
 * //     RouteAnalysisId: "STRING_VALUE",
 * //     StartTimestamp: new Date("TIMESTAMP"),
 * //     Status: "RUNNING" || "COMPLETED" || "FAILED",
 * //     Source: { // RouteAnalysisEndpointOptions
 * //       TransitGatewayAttachmentArn: "STRING_VALUE",
 * //       TransitGatewayArn: "STRING_VALUE",
 * //       IpAddress: "STRING_VALUE",
 * //     },
 * //     Destination: {
 * //       TransitGatewayAttachmentArn: "STRING_VALUE",
 * //       TransitGatewayArn: "STRING_VALUE",
 * //       IpAddress: "STRING_VALUE",
 * //     },
 * //     IncludeReturnPath: true || false,
 * //     UseMiddleboxes: true || false,
 * //     ForwardPath: { // RouteAnalysisPath
 * //       CompletionStatus: { // RouteAnalysisCompletion
 * //         ResultCode: "CONNECTED" || "NOT_CONNECTED",
 * //         ReasonCode: "TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND" || "TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY" || "CYCLIC_PATH_DETECTED" || "TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND" || "ROUTE_NOT_FOUND" || "BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND" || "INACTIVE_ROUTE_FOR_DESTINATION_FOUND" || "TRANSIT_GATEWAY_ATTACHMENT_ATTACH_ARN_NO_MATCH" || "MAX_HOPS_EXCEEDED" || "POSSIBLE_MIDDLEBOX" || "NO_DESTINATION_ARN_PROVIDED",
 * //         ReasonContext: { // ReasonContextMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       Path: [ // PathComponentList
 * //         { // PathComponent
 * //           Sequence: Number("int"),
 * //           Resource: { // NetworkResourceSummary
 * //             RegisteredGatewayArn: "STRING_VALUE",
 * //             ResourceArn: "STRING_VALUE",
 * //             ResourceType: "STRING_VALUE",
 * //             Definition: "STRING_VALUE",
 * //             NameTag: "STRING_VALUE",
 * //             IsMiddlebox: true || false,
 * //           },
 * //           DestinationCidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     ReturnPath: {
 * //       CompletionStatus: {
 * //         ResultCode: "CONNECTED" || "NOT_CONNECTED",
 * //         ReasonCode: "TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND" || "TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY" || "CYCLIC_PATH_DETECTED" || "TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND" || "ROUTE_NOT_FOUND" || "BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND" || "INACTIVE_ROUTE_FOR_DESTINATION_FOUND" || "TRANSIT_GATEWAY_ATTACHMENT_ATTACH_ARN_NO_MATCH" || "MAX_HOPS_EXCEEDED" || "POSSIBLE_MIDDLEBOX" || "NO_DESTINATION_ARN_PROVIDED",
 * //         ReasonContext: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       Path: [
 * //         {
 * //           Sequence: Number("int"),
 * //           Resource: {
 * //             RegisteredGatewayArn: "STRING_VALUE",
 * //             ResourceArn: "STRING_VALUE",
 * //             ResourceType: "STRING_VALUE",
 * //             Definition: "STRING_VALUE",
 * //             NameTag: "STRING_VALUE",
 * //             IsMiddlebox: true || false,
 * //           },
 * //           DestinationCidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartRouteAnalysisCommandInput - {@link StartRouteAnalysisCommandInput}
 * @returns {@link StartRouteAnalysisCommandOutput}
 * @see {@link StartRouteAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartRouteAnalysisCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StartRouteAnalysisCommand extends $Command
  .classBuilder<
    StartRouteAnalysisCommandInput,
    StartRouteAnalysisCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "StartRouteAnalysis", {})
  .n("NetworkManagerClient", "StartRouteAnalysisCommand")
  .f(void 0, void 0)
  .ser(se_StartRouteAnalysisCommand)
  .de(de_StartRouteAnalysisCommand)
  .build() {}
