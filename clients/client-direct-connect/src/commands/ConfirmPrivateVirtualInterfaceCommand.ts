// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfirmPrivateVirtualInterfaceRequest, ConfirmPrivateVirtualInterfaceResponse } from "../models/models_0";
import { ConfirmPrivateVirtualInterface } from "../schemas/schemas_12_ConfirmPrivateVirtualInterface";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfirmPrivateVirtualInterfaceCommand}.
 */
export interface ConfirmPrivateVirtualInterfaceCommandInput extends ConfirmPrivateVirtualInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link ConfirmPrivateVirtualInterfaceCommand}.
 */
export interface ConfirmPrivateVirtualInterfaceCommandOutput
  extends ConfirmPrivateVirtualInterfaceResponse,
    __MetadataBearer {}

/**
 * <p>Accepts ownership of a private virtual interface created by another Amazon Web Services account.</p>
 *          <p>After the virtual interface owner makes this call, the virtual interface is
 *       created and attached to the specified virtual private gateway or Direct Connect gateway, and is
 *       made available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmPrivateVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmPrivateVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // ConfirmPrivateVirtualInterfaceRequest
 *   virtualInterfaceId: "STRING_VALUE", // required
 *   virtualGatewayId: "STRING_VALUE",
 *   directConnectGatewayId: "STRING_VALUE",
 * };
 * const command = new ConfirmPrivateVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmPrivateVirtualInterfaceResponse
 * //   virtualInterfaceState: "confirming" || "verifying" || "pending" || "available" || "down" || "testing" || "deleting" || "deleted" || "rejected" || "unknown",
 * // };
 *
 * ```
 *
 * @param ConfirmPrivateVirtualInterfaceCommandInput - {@link ConfirmPrivateVirtualInterfaceCommandInput}
 * @returns {@link ConfirmPrivateVirtualInterfaceCommandOutput}
 * @see {@link ConfirmPrivateVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link ConfirmPrivateVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class ConfirmPrivateVirtualInterfaceCommand extends $Command
  .classBuilder<
    ConfirmPrivateVirtualInterfaceCommandInput,
    ConfirmPrivateVirtualInterfaceCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "ConfirmPrivateVirtualInterface", {})
  .n("DirectConnectClient", "ConfirmPrivateVirtualInterfaceCommand")
  .sc(ConfirmPrivateVirtualInterface)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfirmPrivateVirtualInterfaceRequest;
      output: ConfirmPrivateVirtualInterfaceResponse;
    };
    sdk: {
      input: ConfirmPrivateVirtualInterfaceCommandInput;
      output: ConfirmPrivateVirtualInterfaceCommandOutput;
    };
  };
}
