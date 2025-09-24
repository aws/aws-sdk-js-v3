// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteDirectConnectGatewayAssociationRequest,
  DeleteDirectConnectGatewayAssociationResult,
} from "../models/models_0";
import { DeleteDirectConnectGatewayAssociation } from "../schemas/schemas_8_DirectConnect";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDirectConnectGatewayAssociationCommand}.
 */
export interface DeleteDirectConnectGatewayAssociationCommandInput
  extends DeleteDirectConnectGatewayAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDirectConnectGatewayAssociationCommand}.
 */
export interface DeleteDirectConnectGatewayAssociationCommandOutput
  extends DeleteDirectConnectGatewayAssociationResult,
    __MetadataBearer {}

/**
 * <p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p>
 *          <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteDirectConnectGatewayAssociationCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteDirectConnectGatewayAssociationCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DeleteDirectConnectGatewayAssociationRequest
 *   associationId: "STRING_VALUE",
 *   directConnectGatewayId: "STRING_VALUE",
 *   virtualGatewayId: "STRING_VALUE",
 * };
 * const command = new DeleteDirectConnectGatewayAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDirectConnectGatewayAssociationResult
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
 * @param DeleteDirectConnectGatewayAssociationCommandInput - {@link DeleteDirectConnectGatewayAssociationCommandInput}
 * @returns {@link DeleteDirectConnectGatewayAssociationCommandOutput}
 * @see {@link DeleteDirectConnectGatewayAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectConnectGatewayAssociationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteDirectConnectGatewayAssociationCommand extends $Command
  .classBuilder<
    DeleteDirectConnectGatewayAssociationCommandInput,
    DeleteDirectConnectGatewayAssociationCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DeleteDirectConnectGatewayAssociation", {})
  .n("DirectConnectClient", "DeleteDirectConnectGatewayAssociationCommand")
  .sc(DeleteDirectConnectGatewayAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDirectConnectGatewayAssociationRequest;
      output: DeleteDirectConnectGatewayAssociationResult;
    };
    sdk: {
      input: DeleteDirectConnectGatewayAssociationCommandInput;
      output: DeleteDirectConnectGatewayAssociationCommandOutput;
    };
  };
}
