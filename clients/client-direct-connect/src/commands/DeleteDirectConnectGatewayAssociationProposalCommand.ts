// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteDirectConnectGatewayAssociationProposalRequest,
  DeleteDirectConnectGatewayAssociationProposalResult,
} from "../models/models_0";
import {
  de_DeleteDirectConnectGatewayAssociationProposalCommand,
  se_DeleteDirectConnectGatewayAssociationProposalCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDirectConnectGatewayAssociationProposalCommand}.
 */
export interface DeleteDirectConnectGatewayAssociationProposalCommandInput
  extends DeleteDirectConnectGatewayAssociationProposalRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDirectConnectGatewayAssociationProposalCommand}.
 */
export interface DeleteDirectConnectGatewayAssociationProposalCommandOutput
  extends DeleteDirectConnectGatewayAssociationProposalResult,
    __MetadataBearer {}

/**
 * <p>Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteDirectConnectGatewayAssociationProposalCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteDirectConnectGatewayAssociationProposalCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DeleteDirectConnectGatewayAssociationProposalRequest
 *   proposalId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDirectConnectGatewayAssociationProposalCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDirectConnectGatewayAssociationProposalResult
 * //   directConnectGatewayAssociationProposal: { // DirectConnectGatewayAssociationProposal
 * //     proposalId: "STRING_VALUE",
 * //     directConnectGatewayId: "STRING_VALUE",
 * //     directConnectGatewayOwnerAccount: "STRING_VALUE",
 * //     proposalState: "requested" || "accepted" || "deleted",
 * //     associatedGateway: { // AssociatedGateway
 * //       id: "STRING_VALUE",
 * //       type: "virtualPrivateGateway" || "transitGateway",
 * //       ownerAccount: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //     },
 * //     existingAllowedPrefixesToDirectConnectGateway: [ // RouteFilterPrefixList
 * //       { // RouteFilterPrefix
 * //         cidr: "STRING_VALUE",
 * //       },
 * //     ],
 * //     requestedAllowedPrefixesToDirectConnectGateway: [
 * //       {
 * //         cidr: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDirectConnectGatewayAssociationProposalCommandInput - {@link DeleteDirectConnectGatewayAssociationProposalCommandInput}
 * @returns {@link DeleteDirectConnectGatewayAssociationProposalCommandOutput}
 * @see {@link DeleteDirectConnectGatewayAssociationProposalCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectConnectGatewayAssociationProposalCommandOutput} for command's `response` shape.
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
export class DeleteDirectConnectGatewayAssociationProposalCommand extends $Command
  .classBuilder<
    DeleteDirectConnectGatewayAssociationProposalCommandInput,
    DeleteDirectConnectGatewayAssociationProposalCommandOutput,
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
  .s("OvertureService", "DeleteDirectConnectGatewayAssociationProposal", {})
  .n("DirectConnectClient", "DeleteDirectConnectGatewayAssociationProposalCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDirectConnectGatewayAssociationProposalCommand)
  .de(de_DeleteDirectConnectGatewayAssociationProposalCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDirectConnectGatewayAssociationProposalRequest;
      output: DeleteDirectConnectGatewayAssociationProposalResult;
    };
    sdk: {
      input: DeleteDirectConnectGatewayAssociationProposalCommandInput;
      output: DeleteDirectConnectGatewayAssociationProposalCommandOutput;
    };
  };
}
