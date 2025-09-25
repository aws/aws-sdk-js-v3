// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTransitGatewayPeeringRequest, GetTransitGatewayPeeringResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { GetTransitGatewayPeering } from "../schemas/schemas_10_Gateway";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayPeeringCommand}.
 */
export interface GetTransitGatewayPeeringCommandInput extends GetTransitGatewayPeeringRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayPeeringCommand}.
 */
export interface GetTransitGatewayPeeringCommandOutput extends GetTransitGatewayPeeringResponse, __MetadataBearer {}

/**
 * <p>Returns information about a transit gateway peer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayPeeringCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayPeeringCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetTransitGatewayPeeringRequest
 *   PeeringId: "STRING_VALUE", // required
 * };
 * const command = new GetTransitGatewayPeeringCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayPeeringResponse
 * //   TransitGatewayPeering: { // TransitGatewayPeering
 * //     Peering: { // Peering
 * //       CoreNetworkId: "STRING_VALUE",
 * //       CoreNetworkArn: "STRING_VALUE",
 * //       PeeringId: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       PeeringType: "TRANSIT_GATEWAY",
 * //       State: "CREATING" || "FAILED" || "AVAILABLE" || "DELETING",
 * //       EdgeLocation: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastModificationErrors: [ // PeeringErrorList
 * //         { // PeeringError
 * //           Code: "TRANSIT_GATEWAY_NOT_FOUND" || "TRANSIT_GATEWAY_PEERS_LIMIT_EXCEEDED" || "MISSING_PERMISSIONS" || "INTERNAL_ERROR" || "EDGE_LOCATION_PEER_DUPLICATE" || "INVALID_TRANSIT_GATEWAY_STATE",
 * //           Message: "STRING_VALUE",
 * //           ResourceArn: "STRING_VALUE",
 * //           RequestId: "STRING_VALUE",
 * //           MissingPermissionsContext: { // PermissionsErrorContext
 * //             MissingPermission: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     TransitGatewayArn: "STRING_VALUE",
 * //     TransitGatewayPeeringAttachmentId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayPeeringCommandInput - {@link GetTransitGatewayPeeringCommandInput}
 * @returns {@link GetTransitGatewayPeeringCommandOutput}
 * @see {@link GetTransitGatewayPeeringCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayPeeringCommandOutput} for command's `response` shape.
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
export class GetTransitGatewayPeeringCommand extends $Command
  .classBuilder<
    GetTransitGatewayPeeringCommandInput,
    GetTransitGatewayPeeringCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "GetTransitGatewayPeering", {})
  .n("NetworkManagerClient", "GetTransitGatewayPeeringCommand")
  .sc(GetTransitGatewayPeering)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransitGatewayPeeringRequest;
      output: GetTransitGatewayPeeringResponse;
    };
    sdk: {
      input: GetTransitGatewayPeeringCommandInput;
      output: GetTransitGatewayPeeringCommandOutput;
    };
  };
}
