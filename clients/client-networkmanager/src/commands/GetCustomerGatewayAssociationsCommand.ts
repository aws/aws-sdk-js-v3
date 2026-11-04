// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCustomerGatewayAssociationsRequest, GetCustomerGatewayAssociationsResponse } from "../models/models_0";
import { GetCustomerGatewayAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetCustomerGatewayAssociationsCommandOutput extends GetCustomerGatewayAssociationsResponse, __MetadataBearer {}

/**
 * Gets the association information for customer gateways that are associated with devices and links in your global network.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetCustomerGatewayAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetCustomerGatewayAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Updating or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class GetCustomerGatewayAssociationsCommand extends command<GetCustomerGatewayAssociationsCommandInput, GetCustomerGatewayAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "GetCustomerGatewayAssociations",
  GetCustomerGatewayAssociations$
) {
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
