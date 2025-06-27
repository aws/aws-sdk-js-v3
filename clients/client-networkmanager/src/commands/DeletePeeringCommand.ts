// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePeeringRequest, DeletePeeringResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_DeletePeeringCommand, se_DeletePeeringCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePeeringCommand}.
 */
export interface DeletePeeringCommandInput extends DeletePeeringRequest {}
/**
 * @public
 *
 * The output of {@link DeletePeeringCommand}.
 */
export interface DeletePeeringCommandOutput extends DeletePeeringResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing peering connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeletePeeringCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeletePeeringCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // DeletePeeringRequest
 *   PeeringId: "STRING_VALUE", // required
 * };
 * const command = new DeletePeeringCommand(input);
 * const response = await client.send(command);
 * // { // DeletePeeringResponse
 * //   Peering: { // Peering
 * //     CoreNetworkId: "STRING_VALUE",
 * //     CoreNetworkArn: "STRING_VALUE",
 * //     PeeringId: "STRING_VALUE",
 * //     OwnerAccountId: "STRING_VALUE",
 * //     PeeringType: "TRANSIT_GATEWAY",
 * //     State: "CREATING" || "FAILED" || "AVAILABLE" || "DELETING",
 * //     EdgeLocation: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     LastModificationErrors: [ // PeeringErrorList
 * //       { // PeeringError
 * //         Code: "TRANSIT_GATEWAY_NOT_FOUND" || "TRANSIT_GATEWAY_PEERS_LIMIT_EXCEEDED" || "MISSING_PERMISSIONS" || "INTERNAL_ERROR" || "EDGE_LOCATION_PEER_DUPLICATE" || "INVALID_TRANSIT_GATEWAY_STATE",
 * //         Message: "STRING_VALUE",
 * //         ResourceArn: "STRING_VALUE",
 * //         RequestId: "STRING_VALUE",
 * //         MissingPermissionsContext: { // PermissionsErrorContext
 * //           MissingPermission: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeletePeeringCommandInput - {@link DeletePeeringCommandInput}
 * @returns {@link DeletePeeringCommandOutput}
 * @see {@link DeletePeeringCommandInput} for command's `input` shape.
 * @see {@link DeletePeeringCommandOutput} for command's `response` shape.
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
export class DeletePeeringCommand extends $Command
  .classBuilder<
    DeletePeeringCommandInput,
    DeletePeeringCommandOutput,
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
  .s("NetworkManager", "DeletePeering", {})
  .n("NetworkManagerClient", "DeletePeeringCommand")
  .f(void 0, void 0)
  .ser(se_DeletePeeringCommand)
  .de(de_DeletePeeringCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePeeringRequest;
      output: DeletePeeringResponse;
    };
    sdk: {
      input: DeletePeeringCommandInput;
      output: DeletePeeringCommandOutput;
    };
  };
}
