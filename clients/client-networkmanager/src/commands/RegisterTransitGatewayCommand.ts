// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RegisterTransitGatewayRequest, RegisterTransitGatewayResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { RegisterTransitGateway } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterTransitGatewayCommand}.
 */
export interface RegisterTransitGatewayCommandInput extends RegisterTransitGatewayRequest {}
/**
 * @public
 *
 * The output of {@link RegisterTransitGatewayCommand}.
 */
export interface RegisterTransitGatewayCommandOutput extends RegisterTransitGatewayResponse, __MetadataBearer {}

/**
 * <p>Registers a transit gateway in your global network. Not all Regions support transit
 *             gateways for global networks. For a list of the supported Regions, see <a href="https://docs.aws.amazon.com/network-manager/latest/tgwnm/what-are-global-networks.html#nm-available-regions">Region Availability</a> in the <i>Amazon Web Services Transit Gateways for Global
 *                 Networks User Guide</i>. The transit gateway can be in any of the supported
 *             Amazon Web Services Regions, but it must be owned by the same Amazon Web Services account that owns the global
 *             network. You cannot register a transit gateway in more than one global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, RegisterTransitGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, RegisterTransitGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // RegisterTransitGatewayRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   TransitGatewayArn: "STRING_VALUE", // required
 * };
 * const command = new RegisterTransitGatewayCommand(input);
 * const response = await client.send(command);
 * // { // RegisterTransitGatewayResponse
 * //   TransitGatewayRegistration: { // TransitGatewayRegistration
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     TransitGatewayArn: "STRING_VALUE",
 * //     State: { // TransitGatewayRegistrationStateReason
 * //       Code: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED" || "FAILED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterTransitGatewayCommandInput - {@link RegisterTransitGatewayCommandInput}
 * @returns {@link RegisterTransitGatewayCommandOutput}
 * @see {@link RegisterTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link RegisterTransitGatewayCommandOutput} for command's `response` shape.
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
export class RegisterTransitGatewayCommand extends $Command
  .classBuilder<
    RegisterTransitGatewayCommandInput,
    RegisterTransitGatewayCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "RegisterTransitGateway", {})
  .n("NetworkManagerClient", "RegisterTransitGatewayCommand")
  .sc(RegisterTransitGateway)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterTransitGatewayRequest;
      output: RegisterTransitGatewayResponse;
    };
    sdk: {
      input: RegisterTransitGatewayCommandInput;
      output: RegisterTransitGatewayCommandOutput;
    };
  };
}
