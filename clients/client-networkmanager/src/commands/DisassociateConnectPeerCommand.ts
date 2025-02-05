// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateConnectPeerRequest, DisassociateConnectPeerResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_DisassociateConnectPeerCommand, se_DisassociateConnectPeerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateConnectPeerCommand}.
 */
export interface DisassociateConnectPeerCommandInput extends DisassociateConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateConnectPeerCommand}.
 */
export interface DisassociateConnectPeerCommandOutput extends DisassociateConnectPeerResponse, __MetadataBearer {}

/**
 * <p>Disassociates a core network Connect peer from a device and a link. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NetworkManagerClient(config);
 * const input = { // DisassociateConnectPeerRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   ConnectPeerId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateConnectPeerResponse
 * //   ConnectPeerAssociation: { // ConnectPeerAssociation
 * //     ConnectPeerId: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     DeviceId: "STRING_VALUE",
 * //     LinkId: "STRING_VALUE",
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateConnectPeerCommandInput - {@link DisassociateConnectPeerCommandInput}
 * @returns {@link DisassociateConnectPeerCommandOutput}
 * @see {@link DisassociateConnectPeerCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectPeerCommandOutput} for command's `response` shape.
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
export class DisassociateConnectPeerCommand extends $Command
  .classBuilder<
    DisassociateConnectPeerCommandInput,
    DisassociateConnectPeerCommandOutput,
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
  .s("NetworkManager", "DisassociateConnectPeer", {})
  .n("NetworkManagerClient", "DisassociateConnectPeerCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateConnectPeerCommand)
  .de(de_DisassociateConnectPeerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateConnectPeerRequest;
      output: DisassociateConnectPeerResponse;
    };
    sdk: {
      input: DisassociateConnectPeerCommandInput;
      output: DisassociateConnectPeerCommandOutput;
    };
  };
}
