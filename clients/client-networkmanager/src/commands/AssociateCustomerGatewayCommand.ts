// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateCustomerGatewayRequest, AssociateCustomerGatewayResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { AssociateCustomerGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateCustomerGatewayCommand}.
 */
export interface AssociateCustomerGatewayCommandInput extends AssociateCustomerGatewayRequest {}
/**
 * @public
 *
 * The output of {@link AssociateCustomerGatewayCommand}.
 */
export interface AssociateCustomerGatewayCommandOutput extends AssociateCustomerGatewayResponse, __MetadataBearer {}

/**
 * <p>Associates a customer gateway with a device and optionally, with a link. If you
 *             specify a link, it must be associated with the specified device. </p>
 *          <p>You can only associate customer gateways that are connected to a VPN attachment on a
 *             transit gateway or core network registered in your global network. When you register a
 *             transit gateway or core network, customer gateways that are connected to the transit
 *             gateway are automatically included in the global network. To list customer gateways
 *             that are connected to a transit gateway, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html">DescribeVpnConnections</a> EC2 API and filter by
 *                 <code>transit-gateway-id</code>.</p>
 *          <p>You cannot associate a customer gateway with more than one device and link. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, AssociateCustomerGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, AssociateCustomerGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // AssociateCustomerGatewayRequest
 *   CustomerGatewayArn: "STRING_VALUE", // required
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 *   LinkId: "STRING_VALUE",
 * };
 * const command = new AssociateCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * // { // AssociateCustomerGatewayResponse
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
 * @param AssociateCustomerGatewayCommandInput - {@link AssociateCustomerGatewayCommandInput}
 * @returns {@link AssociateCustomerGatewayCommandOutput}
 * @see {@link AssociateCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link AssociateCustomerGatewayCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
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
export class AssociateCustomerGatewayCommand extends $Command
  .classBuilder<
    AssociateCustomerGatewayCommandInput,
    AssociateCustomerGatewayCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "AssociateCustomerGateway", {})
  .n("NetworkManagerClient", "AssociateCustomerGatewayCommand")
  .sc(AssociateCustomerGateway$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateCustomerGatewayRequest;
      output: AssociateCustomerGatewayResponse;
    };
    sdk: {
      input: AssociateCustomerGatewayCommandInput;
      output: AssociateCustomerGatewayCommandOutput;
    };
  };
}
