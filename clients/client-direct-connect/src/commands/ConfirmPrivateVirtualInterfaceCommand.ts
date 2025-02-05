// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfirmPrivateVirtualInterfaceRequest, ConfirmPrivateVirtualInterfaceResponse } from "../models/models_0";
import {
  de_ConfirmPrivateVirtualInterfaceCommand,
  se_ConfirmPrivateVirtualInterfaceCommand,
} from "../protocols/Aws_json1_1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DirectConnectClient(config);
 * const input = { // ConfirmPrivateVirtualInterfaceRequest
 *   virtualInterfaceId: "STRING_VALUE", // required
 *   virtualGatewayId: "STRING_VALUE",
 *   directConnectGatewayId: "STRING_VALUE",
 * };
 * const command = new ConfirmPrivateVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmPrivateVirtualInterfaceResponse
 * //   virtualInterfaceState: "confirming" || "verifying" || "pending" || "available" || "down" || "deleting" || "deleted" || "rejected" || "unknown",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OvertureService", "ConfirmPrivateVirtualInterface", {})
  .n("DirectConnectClient", "ConfirmPrivateVirtualInterfaceCommand")
  .f(void 0, void 0)
  .ser(se_ConfirmPrivateVirtualInterfaceCommand)
  .de(de_ConfirmPrivateVirtualInterfaceCommand)
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
