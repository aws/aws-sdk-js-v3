// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateDirectConnectGatewayAssociationRequest,
  CreateDirectConnectGatewayAssociationResult,
} from "../models/models_0";
import { CreateDirectConnectGatewayAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDirectConnectGatewayAssociationCommand}.
 */
export interface CreateDirectConnectGatewayAssociationCommandInput
  extends CreateDirectConnectGatewayAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDirectConnectGatewayAssociationCommand}.
 */
export interface CreateDirectConnectGatewayAssociationCommandOutput
  extends CreateDirectConnectGatewayAssociationResult,
    __MetadataBearer {}

/**
 * <p>Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual
 *       private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateDirectConnectGatewayAssociationCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateDirectConnectGatewayAssociationCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // CreateDirectConnectGatewayAssociationRequest
 *   directConnectGatewayId: "STRING_VALUE", // required
 *   gatewayId: "STRING_VALUE",
 *   addAllowedPrefixesToDirectConnectGateway: [ // RouteFilterPrefixList
 *     { // RouteFilterPrefix
 *       cidr: "STRING_VALUE",
 *     },
 *   ],
 *   virtualGatewayId: "STRING_VALUE",
 * };
 * const command = new CreateDirectConnectGatewayAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDirectConnectGatewayAssociationResult
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
 * @param CreateDirectConnectGatewayAssociationCommandInput - {@link CreateDirectConnectGatewayAssociationCommandInput}
 * @returns {@link CreateDirectConnectGatewayAssociationCommandOutput}
 * @see {@link CreateDirectConnectGatewayAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateDirectConnectGatewayAssociationCommandOutput} for command's `response` shape.
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
export class CreateDirectConnectGatewayAssociationCommand extends $Command
  .classBuilder<
    CreateDirectConnectGatewayAssociationCommandInput,
    CreateDirectConnectGatewayAssociationCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "CreateDirectConnectGatewayAssociation", {})
  .n("DirectConnectClient", "CreateDirectConnectGatewayAssociationCommand")
  .sc(CreateDirectConnectGatewayAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDirectConnectGatewayAssociationRequest;
      output: CreateDirectConnectGatewayAssociationResult;
    };
    sdk: {
      input: CreateDirectConnectGatewayAssociationCommandInput;
      output: CreateDirectConnectGatewayAssociationCommandOutput;
    };
  };
}
