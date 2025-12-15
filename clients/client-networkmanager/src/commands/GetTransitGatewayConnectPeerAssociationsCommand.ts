// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetTransitGatewayConnectPeerAssociationsRequest,
  GetTransitGatewayConnectPeerAssociationsResponse,
} from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { GetTransitGatewayConnectPeerAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayConnectPeerAssociationsCommand}.
 */
export interface GetTransitGatewayConnectPeerAssociationsCommandInput
  extends GetTransitGatewayConnectPeerAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayConnectPeerAssociationsCommand}.
 */
export interface GetTransitGatewayConnectPeerAssociationsCommandOutput
  extends GetTransitGatewayConnectPeerAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about one or more of your transit gateway Connect peer associations in a global network.</p>
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
export class GetTransitGatewayConnectPeerAssociationsCommand extends $Command
  .classBuilder<
    GetTransitGatewayConnectPeerAssociationsCommandInput,
    GetTransitGatewayConnectPeerAssociationsCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "GetTransitGatewayConnectPeerAssociations", {})
  .n("NetworkManagerClient", "GetTransitGatewayConnectPeerAssociationsCommand")
  .sc(GetTransitGatewayConnectPeerAssociations$)
  .build() {
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
