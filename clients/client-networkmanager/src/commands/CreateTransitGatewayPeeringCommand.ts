// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTransitGatewayPeeringRequest, CreateTransitGatewayPeeringResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { CreateTransitGatewayPeering$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTransitGatewayPeeringCommand}.
 */
export interface CreateTransitGatewayPeeringCommandInput extends CreateTransitGatewayPeeringRequest {}
/**
 * @public
 *
 * The output of {@link CreateTransitGatewayPeeringCommand}.
 */
export interface CreateTransitGatewayPeeringCommandOutput
  extends CreateTransitGatewayPeeringResponse,
    __MetadataBearer {}

/**
 * <p>Creates a transit gateway peering connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateTransitGatewayPeeringCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateTransitGatewayPeeringCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // CreateTransitGatewayPeeringRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   TransitGatewayArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateTransitGatewayPeeringCommand(input);
 * const response = await client.send(command);
 * // { // CreateTransitGatewayPeeringResponse
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
 * @param CreateTransitGatewayPeeringCommandInput - {@link CreateTransitGatewayPeeringCommandInput}
 * @returns {@link CreateTransitGatewayPeeringCommandOutput}
 * @see {@link CreateTransitGatewayPeeringCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayPeeringCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreateTransitGatewayPeeringCommand extends $Command
  .classBuilder<
    CreateTransitGatewayPeeringCommandInput,
    CreateTransitGatewayPeeringCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "CreateTransitGatewayPeering", {})
  .n("NetworkManagerClient", "CreateTransitGatewayPeeringCommand")
  .sc(CreateTransitGatewayPeering$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTransitGatewayPeeringRequest;
      output: CreateTransitGatewayPeeringResponse;
    };
    sdk: {
      input: CreateTransitGatewayPeeringCommandInput;
      output: CreateTransitGatewayPeeringCommandOutput;
    };
  };
}
