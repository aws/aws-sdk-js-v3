// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConnectPeerRequest, CreateConnectPeerResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_CreateConnectPeerCommand, se_CreateConnectPeerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectPeerCommand}.
 */
export interface CreateConnectPeerCommandInput extends CreateConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectPeerCommand}.
 */
export interface CreateConnectPeerCommandOutput extends CreateConnectPeerResponse, __MetadataBearer {}

/**
 * <p>Creates a core network Connect peer for a specified core network connect attachment between a core network and an appliance.
 *          The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NetworkManagerClient(config);
 * const input = { // CreateConnectPeerRequest
 *   ConnectAttachmentId: "STRING_VALUE", // required
 *   CoreNetworkAddress: "STRING_VALUE",
 *   PeerAddress: "STRING_VALUE", // required
 *   BgpOptions: { // BgpOptions
 *     PeerAsn: Number("long"),
 *   },
 *   InsideCidrBlocks: [ // ConstrainedStringList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 *   SubnetArn: "STRING_VALUE",
 * };
 * const command = new CreateConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectPeerResponse
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
 * @param CreateConnectPeerCommandInput - {@link CreateConnectPeerCommandInput}
 * @returns {@link CreateConnectPeerCommandOutput}
 * @see {@link CreateConnectPeerCommandInput} for command's `input` shape.
 * @see {@link CreateConnectPeerCommandOutput} for command's `response` shape.
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
export class CreateConnectPeerCommand extends $Command
  .classBuilder<
    CreateConnectPeerCommandInput,
    CreateConnectPeerCommandOutput,
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
  .s("NetworkManager", "CreateConnectPeer", {})
  .n("NetworkManagerClient", "CreateConnectPeerCommand")
  .f(void 0, void 0)
  .ser(se_CreateConnectPeerCommand)
  .de(de_CreateConnectPeerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectPeerRequest;
      output: CreateConnectPeerResponse;
    };
    sdk: {
      input: CreateConnectPeerCommandInput;
      output: CreateConnectPeerCommandOutput;
    };
  };
}
