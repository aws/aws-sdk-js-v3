// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeregisterTransitGatewayRequest, DeregisterTransitGatewayResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { DeregisterTransitGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterTransitGatewayCommand}.
 */
export interface DeregisterTransitGatewayCommandInput extends DeregisterTransitGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterTransitGatewayCommand}.
 */
export interface DeregisterTransitGatewayCommandOutput extends DeregisterTransitGatewayResponse, __MetadataBearer {}

/**
 * <p>Deregisters a transit gateway from your global network. This action does not delete
 *             your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeregisterTransitGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeregisterTransitGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DeregisterTransitGatewayRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   TransitGatewayArn: "STRING_VALUE", // required
 * };
 * const command = new DeregisterTransitGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterTransitGatewayResponse
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
 * @param DeregisterTransitGatewayCommandInput - {@link DeregisterTransitGatewayCommandInput}
 * @returns {@link DeregisterTransitGatewayCommandOutput}
 * @see {@link DeregisterTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link DeregisterTransitGatewayCommandOutput} for command's `response` shape.
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
export class DeregisterTransitGatewayCommand extends $Command
  .classBuilder<
    DeregisterTransitGatewayCommandInput,
    DeregisterTransitGatewayCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "DeregisterTransitGateway", {})
  .n("NetworkManagerClient", "DeregisterTransitGatewayCommand")
  .sc(DeregisterTransitGateway$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterTransitGatewayRequest;
      output: DeregisterTransitGatewayResponse;
    };
    sdk: {
      input: DeregisterTransitGatewayCommandInput;
      output: DeregisterTransitGatewayCommandOutput;
    };
  };
}
