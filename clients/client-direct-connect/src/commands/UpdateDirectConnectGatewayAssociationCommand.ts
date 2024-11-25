// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateDirectConnectGatewayAssociationRequest,
  UpdateDirectConnectGatewayAssociationResult,
} from "../models/models_0";
import {
  de_UpdateDirectConnectGatewayAssociationCommand,
  se_UpdateDirectConnectGatewayAssociationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDirectConnectGatewayAssociationCommand}.
 */
export interface UpdateDirectConnectGatewayAssociationCommandInput
  extends UpdateDirectConnectGatewayAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDirectConnectGatewayAssociationCommand}.
 */
export interface UpdateDirectConnectGatewayAssociationCommandOutput
  extends UpdateDirectConnectGatewayAssociationResult,
    __MetadataBearer {}

/**
 * <p>Updates the specified attributes of the Direct Connect gateway association.</p>
 *          <p>Add or remove prefixes from the association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateDirectConnectGatewayAssociationCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateDirectConnectGatewayAssociationCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // UpdateDirectConnectGatewayAssociationRequest
 *   associationId: "STRING_VALUE",
 *   addAllowedPrefixesToDirectConnectGateway: [ // RouteFilterPrefixList
 *     { // RouteFilterPrefix
 *       cidr: "STRING_VALUE",
 *     },
 *   ],
 *   removeAllowedPrefixesToDirectConnectGateway: [
 *     {
 *       cidr: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateDirectConnectGatewayAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDirectConnectGatewayAssociationResult
 * //   directConnectGatewayAssociation: { // DirectConnectGatewayAssociation
 * //     directConnectGatewayId: "STRING_VALUE",
 * //     directConnectGatewayOwnerAccount: "STRING_VALUE",
 * //     associationState: "associating" || "associated" || "disassociating" || "disassociated" || "updating",
 * //     stateChangeError: "STRING_VALUE",
 * //     associatedGateway: { // AssociatedGateway
 * //       id: "STRING_VALUE",
 * //       type: "virtualPrivateGateway" || "transitGateway",
 * //       ownerAccount: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //     },
 * //     associationId: "STRING_VALUE",
 * //     allowedPrefixesToDirectConnectGateway: [ // RouteFilterPrefixList
 * //       { // RouteFilterPrefix
 * //         cidr: "STRING_VALUE",
 * //       },
 * //     ],
 * //     associatedCoreNetwork: { // AssociatedCoreNetwork
 * //       id: "STRING_VALUE",
 * //       ownerAccount: "STRING_VALUE",
 * //       attachmentId: "STRING_VALUE",
 * //     },
 * //     virtualGatewayId: "STRING_VALUE",
 * //     virtualGatewayRegion: "STRING_VALUE",
 * //     virtualGatewayOwnerAccount: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDirectConnectGatewayAssociationCommandInput - {@link UpdateDirectConnectGatewayAssociationCommandInput}
 * @returns {@link UpdateDirectConnectGatewayAssociationCommandOutput}
 * @see {@link UpdateDirectConnectGatewayAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectConnectGatewayAssociationCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 * @public
 */
export class UpdateDirectConnectGatewayAssociationCommand extends $Command
  .classBuilder<
    UpdateDirectConnectGatewayAssociationCommandInput,
    UpdateDirectConnectGatewayAssociationCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OvertureService", "UpdateDirectConnectGatewayAssociation", {})
  .n("DirectConnectClient", "UpdateDirectConnectGatewayAssociationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDirectConnectGatewayAssociationCommand)
  .de(de_UpdateDirectConnectGatewayAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDirectConnectGatewayAssociationRequest;
      output: UpdateDirectConnectGatewayAssociationResult;
    };
    sdk: {
      input: UpdateDirectConnectGatewayAssociationCommandInput;
      output: UpdateDirectConnectGatewayAssociationCommandOutput;
    };
  };
}
