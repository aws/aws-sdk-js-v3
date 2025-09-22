// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConnectPeerRequest, DeleteConnectPeerResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DeleteConnectPeer } from "../schemas/schemas_13_Connect";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectPeerCommand}.
 */
export interface DeleteConnectPeerCommandInput extends DeleteConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectPeerCommand}.
 */
export interface DeleteConnectPeerCommandOutput extends DeleteConnectPeerResponse, __MetadataBearer {}

/**
 * <p>Deletes a Connect peer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteConnectPeerRequest
 *   ConnectPeerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteConnectPeerResponse
 * //   ConnectPeer: { // ConnectPeer
 * //     CoreNetworkId: "STRING_VALUE",
 * //     ConnectAttachmentId: "STRING_VALUE",
 * //     ConnectPeerId: "STRING_VALUE",
 * //     EdgeLocation: "STRING_VALUE",
 * //     State: "CREATING" || "FAILED" || "AVAILABLE" || "DELETING",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     Configuration: { // ConnectPeerConfiguration
 * //       CoreNetworkAddress: "STRING_VALUE",
 * //       PeerAddress: "STRING_VALUE",
 * //       InsideCidrBlocks: [ // ConstrainedStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       Protocol: "GRE" || "NO_ENCAP",
 * //       BgpConfigurations: [ // ConnectPeerBgpConfigurationList
 * //         { // ConnectPeerBgpConfiguration
 * //           CoreNetworkAsn: Number("long"),
 * //           PeerAsn: Number("long"),
 * //           CoreNetworkAddress: "STRING_VALUE",
 * //           PeerAddress: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SubnetArn: "STRING_VALUE",
 * //     LastModificationErrors: [ // ConnectPeerErrorList
 * //       { // ConnectPeerError
 * //         Code: "EDGE_LOCATION_NO_FREE_IPS" || "EDGE_LOCATION_PEER_DUPLICATE" || "SUBNET_NOT_FOUND" || "IP_OUTSIDE_SUBNET_CIDR_RANGE" || "INVALID_INSIDE_CIDR_BLOCK" || "NO_ASSOCIATED_CIDR_BLOCK",
 * //         Message: "STRING_VALUE",
 * //         ResourceArn: "STRING_VALUE",
 * //         RequestId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteConnectPeerCommandInput - {@link DeleteConnectPeerCommandInput}
 * @returns {@link DeleteConnectPeerCommandOutput}
 * @see {@link DeleteConnectPeerCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectPeerCommandOutput} for command's `response` shape.
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
export class DeleteConnectPeerCommand extends $Command
  .classBuilder<
    DeleteConnectPeerCommandInput,
    DeleteConnectPeerCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "DeleteConnectPeer", {})
  .n("NetworkManagerClient", "DeleteConnectPeerCommand")
  .sc(DeleteConnectPeer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectPeerRequest;
      output: DeleteConnectPeerResponse;
    };
    sdk: {
      input: DeleteConnectPeerCommandInput;
      output: DeleteConnectPeerCommandOutput;
    };
  };
}
