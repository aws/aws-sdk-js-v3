// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConnectPeerRequest, DeleteConnectPeerResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_DeleteConnectPeerCommand, se_DeleteConnectPeerCommand } from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "DeleteConnectPeer", {})
  .n("NetworkManagerClient", "DeleteConnectPeerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConnectPeerCommand)
  .de(de_DeleteConnectPeerCommand)
  .build() {}
