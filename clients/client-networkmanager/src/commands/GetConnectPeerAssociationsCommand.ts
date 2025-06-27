// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetConnectPeerAssociationsRequest, GetConnectPeerAssociationsResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetConnectPeerAssociationsCommand, se_GetConnectPeerAssociationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns information about a core network Connect peer associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetConnectPeerAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetConnectPeerAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
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
export class GetConnectPeerAssociationsCommand extends $Command
  .classBuilder<
    GetConnectPeerAssociationsCommandInput,
    GetConnectPeerAssociationsCommandOutput,
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
  .s("NetworkManager", "GetConnectPeerAssociations", {})
  .n("NetworkManagerClient", "GetConnectPeerAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_GetConnectPeerAssociationsCommand)
  .de(de_GetConnectPeerAssociationsCommand)
  .build() {
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
