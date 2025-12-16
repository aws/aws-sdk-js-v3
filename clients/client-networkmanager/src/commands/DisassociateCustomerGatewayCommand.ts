// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateCustomerGatewayRequest, DisassociateCustomerGatewayResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { DisassociateCustomerGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateCustomerGatewayCommand}.
 */
export interface DisassociateCustomerGatewayCommandInput extends DisassociateCustomerGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateCustomerGatewayCommand}.
 */
export interface DisassociateCustomerGatewayCommandOutput
  extends DisassociateCustomerGatewayResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a customer gateway from a device and a link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateCustomerGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateCustomerGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DisassociateCustomerGatewayRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   CustomerGatewayArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateCustomerGatewayResponse
 * //   CustomerGatewayAssociation: { // CustomerGatewayAssociation
 * //     CustomerGatewayArn: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     DeviceId: "STRING_VALUE",
 * //     LinkId: "STRING_VALUE",
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateCustomerGatewayCommandInput - {@link DisassociateCustomerGatewayCommandInput}
 * @returns {@link DisassociateCustomerGatewayCommandOutput}
 * @see {@link DisassociateCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link DisassociateCustomerGatewayCommandOutput} for command's `response` shape.
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
export class DisassociateCustomerGatewayCommand extends $Command
  .classBuilder<
    DisassociateCustomerGatewayCommandInput,
    DisassociateCustomerGatewayCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "DisassociateCustomerGateway", {})
  .n("NetworkManagerClient", "DisassociateCustomerGatewayCommand")
  .sc(DisassociateCustomerGateway$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateCustomerGatewayRequest;
      output: DisassociateCustomerGatewayResponse;
    };
    sdk: {
      input: DisassociateCustomerGatewayCommandInput;
      output: DisassociateCustomerGatewayCommandOutput;
    };
  };
}
