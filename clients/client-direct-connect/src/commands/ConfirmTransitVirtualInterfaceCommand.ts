// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ConfirmTransitVirtualInterfaceRequest, ConfirmTransitVirtualInterfaceResponse } from "../models/models_0";
import { ConfirmTransitVirtualInterface$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ConfirmTransitVirtualInterfaceCommand}.
 */
export interface ConfirmTransitVirtualInterfaceCommandInput extends ConfirmTransitVirtualInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link ConfirmTransitVirtualInterfaceCommand}.
 */
export interface ConfirmTransitVirtualInterfaceCommandOutput extends ConfirmTransitVirtualInterfaceResponse, __MetadataBearer {}

/**
 * <p>Accepts ownership of a transit virtual interface created by another Amazon Web Services account.</p>
 *          <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmTransitVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmTransitVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // ConfirmTransitVirtualInterfaceRequest
 *   virtualInterfaceId: "STRING_VALUE", // required
 *   directConnectGatewayId: "STRING_VALUE", // required
 * };
 * const command = new ConfirmTransitVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmTransitVirtualInterfaceResponse
 * //   virtualInterfaceState: "confirming" || "verifying" || "pending" || "available" || "down" || "testing" || "deleting" || "deleted" || "rejected" || "unknown",
 * // };
 *
 * ```
 *
 * @param ConfirmTransitVirtualInterfaceCommandInput - {@link ConfirmTransitVirtualInterfaceCommandInput}
 * @returns {@link ConfirmTransitVirtualInterfaceCommandOutput}
 * @see {@link ConfirmTransitVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link ConfirmTransitVirtualInterfaceCommandOutput} for command's `response` shape.
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
export class ConfirmTransitVirtualInterfaceCommand extends command<ConfirmTransitVirtualInterfaceCommandInput, ConfirmTransitVirtualInterfaceCommandOutput>(
  _ep0,
  _mw0,
  "ConfirmTransitVirtualInterface",
  ConfirmTransitVirtualInterface$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfirmTransitVirtualInterfaceRequest;
      output: ConfirmTransitVirtualInterfaceResponse;
    };
    sdk: {
      input: ConfirmTransitVirtualInterfaceCommandInput;
      output: ConfirmTransitVirtualInterfaceCommandOutput;
    };
  };
}
