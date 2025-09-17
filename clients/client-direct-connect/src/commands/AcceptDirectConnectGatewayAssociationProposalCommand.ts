// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AcceptDirectConnectGatewayAssociationProposalRequest,
  AcceptDirectConnectGatewayAssociationProposalResult,
} from "../models/models_0";
import {
  de_AcceptDirectConnectGatewayAssociationProposalCommand,
  se_AcceptDirectConnectGatewayAssociationProposalCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptDirectConnectGatewayAssociationProposalCommand}.
 */
export interface AcceptDirectConnectGatewayAssociationProposalCommandInput
  extends AcceptDirectConnectGatewayAssociationProposalRequest {}
/**
 * @public
 *
 * The output of {@link AcceptDirectConnectGatewayAssociationProposalCommand}.
 */
export interface AcceptDirectConnectGatewayAssociationProposalCommandOutput
  extends AcceptDirectConnectGatewayAssociationProposalResult,
    __MetadataBearer {}

/**
 * <p>Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AcceptDirectConnectGatewayAssociationProposalCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AcceptDirectConnectGatewayAssociationProposalCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // AcceptDirectConnectGatewayAssociationProposalRequest
 *   directConnectGatewayId: "STRING_VALUE", // required
 *   proposalId: "STRING_VALUE", // required
 *   associatedGatewayOwnerAccount: "STRING_VALUE", // required
 *   overrideAllowedPrefixesToDirectConnectGateway: [ // RouteFilterPrefixList
 *     { // RouteFilterPrefix
 *       cidr: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AcceptDirectConnectGatewayAssociationProposalCommand(input);
 * const response = await client.send(command);
 * // { // AcceptDirectConnectGatewayAssociationProposalResult
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
 * @param AcceptDirectConnectGatewayAssociationProposalCommandInput - {@link AcceptDirectConnectGatewayAssociationProposalCommandInput}
 * @returns {@link AcceptDirectConnectGatewayAssociationProposalCommandOutput}
 * @see {@link AcceptDirectConnectGatewayAssociationProposalCommandInput} for command's `input` shape.
 * @see {@link AcceptDirectConnectGatewayAssociationProposalCommandOutput} for command's `response` shape.
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
export class AcceptDirectConnectGatewayAssociationProposalCommand extends $Command
  .classBuilder<
    AcceptDirectConnectGatewayAssociationProposalCommandInput,
    AcceptDirectConnectGatewayAssociationProposalCommandOutput,
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
  .s("OvertureService", "AcceptDirectConnectGatewayAssociationProposal", {})
  .n("DirectConnectClient", "AcceptDirectConnectGatewayAssociationProposalCommand")
  .f(void 0, void 0)
  .ser(se_AcceptDirectConnectGatewayAssociationProposalCommand)
  .de(de_AcceptDirectConnectGatewayAssociationProposalCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptDirectConnectGatewayAssociationProposalRequest;
      output: AcceptDirectConnectGatewayAssociationProposalResult;
    };
    sdk: {
      input: AcceptDirectConnectGatewayAssociationProposalCommandInput;
      output: AcceptDirectConnectGatewayAssociationProposalCommandOutput;
    };
  };
}
