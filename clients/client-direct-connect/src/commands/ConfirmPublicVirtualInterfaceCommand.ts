// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfirmPublicVirtualInterfaceRequest, ConfirmPublicVirtualInterfaceResponse } from "../models/models_0";
import {
  de_ConfirmPublicVirtualInterfaceCommand,
  se_ConfirmPublicVirtualInterfaceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfirmPublicVirtualInterfaceCommand}.
 */
export interface ConfirmPublicVirtualInterfaceCommandInput extends ConfirmPublicVirtualInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link ConfirmPublicVirtualInterfaceCommand}.
 */
export interface ConfirmPublicVirtualInterfaceCommandOutput
  extends ConfirmPublicVirtualInterfaceResponse,
    __MetadataBearer {}

/**
 * <p>Accepts ownership of a public virtual interface created by another Amazon Web Services account.</p>
 *          <p>After the virtual interface owner makes this call, the specified virtual interface is
 *       created and made available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmPublicVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmPublicVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // ConfirmPublicVirtualInterfaceRequest
 *   virtualInterfaceId: "STRING_VALUE", // required
 * };
 * const command = new ConfirmPublicVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmPublicVirtualInterfaceResponse
 * //   virtualInterfaceState: "confirming" || "verifying" || "pending" || "available" || "down" || "deleting" || "deleted" || "rejected" || "unknown",
 * // };
 *
 * ```
 *
 * @param ConfirmPublicVirtualInterfaceCommandInput - {@link ConfirmPublicVirtualInterfaceCommandInput}
 * @returns {@link ConfirmPublicVirtualInterfaceCommandOutput}
 * @see {@link ConfirmPublicVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link ConfirmPublicVirtualInterfaceCommandOutput} for command's `response` shape.
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
export class ConfirmPublicVirtualInterfaceCommand extends $Command
  .classBuilder<
    ConfirmPublicVirtualInterfaceCommandInput,
    ConfirmPublicVirtualInterfaceCommandOutput,
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
  .s("OvertureService", "ConfirmPublicVirtualInterface", {})
  .n("DirectConnectClient", "ConfirmPublicVirtualInterfaceCommand")
  .f(void 0, void 0)
  .ser(se_ConfirmPublicVirtualInterfaceCommand)
  .de(de_ConfirmPublicVirtualInterfaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfirmPublicVirtualInterfaceRequest;
      output: ConfirmPublicVirtualInterfaceResponse;
    };
    sdk: {
      input: ConfirmPublicVirtualInterfaceCommandInput;
      output: ConfirmPublicVirtualInterfaceCommandOutput;
    };
  };
}
