// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetConnectPeerAssociationsRequest, GetConnectPeerAssociationsResponse } from "../models/models_0";
import { GetConnectPeerAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetConnectPeerAssociationsCommand}.
 */
export interface GetConnectPeerAssociationsCommandInput extends GetConnectPeerAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectPeerAssociationsCommand}.
 */
export interface GetConnectPeerAssociationsCommandOutput extends GetConnectPeerAssociationsResponse, __MetadataBearer {}

/**
 * Returns information about a core network Connect peer associations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetConnectPeerAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetConnectPeerAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetConnectPeerAssociationsRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   ConnectPeerIds: [ // ConnectPeerIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetConnectPeerAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectPeerAssociationsResponse
 * //   ConnectPeerAssociations: [ // ConnectPeerAssociationList
 * //     { // ConnectPeerAssociation
 * //       ConnectPeerId: "STRING_VALUE",
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
 * @param GetConnectPeerAssociationsCommandInput - {@link GetConnectPeerAssociationsCommandInput}
 * @returns {@link GetConnectPeerAssociationsCommandOutput}
 * @see {@link GetConnectPeerAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetConnectPeerAssociationsCommandOutput} for command's `response` shape.
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
export class GetConnectPeerAssociationsCommand extends command<GetConnectPeerAssociationsCommandInput, GetConnectPeerAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "GetConnectPeerAssociations",
  GetConnectPeerAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectPeerAssociationsRequest;
      output: GetConnectPeerAssociationsResponse;
    };
    sdk: {
      input: GetConnectPeerAssociationsCommandInput;
      output: GetConnectPeerAssociationsCommandOutput;
    };
  };
}
