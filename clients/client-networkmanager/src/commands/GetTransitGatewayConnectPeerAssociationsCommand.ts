// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTransitGatewayConnectPeerAssociationsRequest,
  GetTransitGatewayConnectPeerAssociationsResponse,
} from "../models/models_0";
import { GetTransitGatewayConnectPeerAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayConnectPeerAssociationsCommand}.
 */
export interface GetTransitGatewayConnectPeerAssociationsCommandInput extends GetTransitGatewayConnectPeerAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayConnectPeerAssociationsCommand}.
 */
export interface GetTransitGatewayConnectPeerAssociationsCommandOutput extends GetTransitGatewayConnectPeerAssociationsResponse, __MetadataBearer {}

/**
 * Gets information about one or more of your transit gateway Connect peer associations in a global network.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayConnectPeerAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayConnectPeerAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetTransitGatewayConnectPeerAssociationsRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   TransitGatewayConnectPeerArns: [ // TransitGatewayConnectPeerArnList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetTransitGatewayConnectPeerAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayConnectPeerAssociationsResponse
 * //   TransitGatewayConnectPeerAssociations: [ // TransitGatewayConnectPeerAssociationList
 * //     { // TransitGatewayConnectPeerAssociation
 * //       TransitGatewayConnectPeerArn: "STRING_VALUE",
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
 * @param GetTransitGatewayConnectPeerAssociationsCommandInput - {@link GetTransitGatewayConnectPeerAssociationsCommandInput}
 * @returns {@link GetTransitGatewayConnectPeerAssociationsCommandOutput}
 * @see {@link GetTransitGatewayConnectPeerAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayConnectPeerAssociationsCommandOutput} for command's `response` shape.
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
export class GetTransitGatewayConnectPeerAssociationsCommand extends command<GetTransitGatewayConnectPeerAssociationsCommandInput, GetTransitGatewayConnectPeerAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "GetTransitGatewayConnectPeerAssociations",
  GetTransitGatewayConnectPeerAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransitGatewayConnectPeerAssociationsRequest;
      output: GetTransitGatewayConnectPeerAssociationsResponse;
    };
    sdk: {
      input: GetTransitGatewayConnectPeerAssociationsCommandInput;
      output: GetTransitGatewayConnectPeerAssociationsCommandOutput;
    };
  };
}
