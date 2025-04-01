// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCustomerGatewayAssociationsRequest, GetCustomerGatewayAssociationsResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_GetCustomerGatewayAssociationsCommand,
  se_GetCustomerGatewayAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCustomerGatewayAssociationsCommand}.
 */
export interface GetCustomerGatewayAssociationsCommandInput extends GetCustomerGatewayAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomerGatewayAssociationsCommand}.
 */
export interface GetCustomerGatewayAssociationsCommandOutput
  extends GetCustomerGatewayAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Gets the association information for customer gateways that are associated with
 *             devices and links in your global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetCustomerGatewayAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetCustomerGatewayAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetCustomerGatewayAssociationsRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   CustomerGatewayArns: [ // CustomerGatewayArnList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCustomerGatewayAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomerGatewayAssociationsResponse
 * //   CustomerGatewayAssociations: [ // CustomerGatewayAssociationList
 * //     { // CustomerGatewayAssociation
 * //       CustomerGatewayArn: "STRING_VALUE",
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //       LinkId: "STRING_VALUE",
 * //       State: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCustomerGatewayAssociationsCommandInput - {@link GetCustomerGatewayAssociationsCommandInput}
 * @returns {@link GetCustomerGatewayAssociationsCommandOutput}
 * @see {@link GetCustomerGatewayAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetCustomerGatewayAssociationsCommandOutput} for command's `response` shape.
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
export class GetCustomerGatewayAssociationsCommand extends $Command
  .classBuilder<
    GetCustomerGatewayAssociationsCommandInput,
    GetCustomerGatewayAssociationsCommandOutput,
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
  .s("NetworkManager", "GetCustomerGatewayAssociations", {})
  .n("NetworkManagerClient", "GetCustomerGatewayAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_GetCustomerGatewayAssociationsCommand)
  .de(de_GetCustomerGatewayAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomerGatewayAssociationsRequest;
      output: GetCustomerGatewayAssociationsResponse;
    };
    sdk: {
      input: GetCustomerGatewayAssociationsCommandInput;
      output: GetCustomerGatewayAssociationsCommandOutput;
    };
  };
}
