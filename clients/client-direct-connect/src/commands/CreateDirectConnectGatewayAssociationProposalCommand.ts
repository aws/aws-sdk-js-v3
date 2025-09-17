// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateDirectConnectGatewayAssociationProposalRequest,
  CreateDirectConnectGatewayAssociationProposalResult,
} from "../models/models_0";
import {
  de_CreateDirectConnectGatewayAssociationProposalCommand,
  se_CreateDirectConnectGatewayAssociationProposalCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDirectConnectGatewayAssociationProposalCommand}.
 */
export interface CreateDirectConnectGatewayAssociationProposalCommandInput
  extends CreateDirectConnectGatewayAssociationProposalRequest {}
/**
 * @public
 *
 * The output of {@link CreateDirectConnectGatewayAssociationProposalCommand}.
 */
export interface CreateDirectConnectGatewayAssociationProposalCommandOutput
  extends CreateDirectConnectGatewayAssociationProposalResult,
    __MetadataBearer {}

/**
 * <p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p>
 *          <p>You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateDirectConnectGatewayAssociationProposalCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateDirectConnectGatewayAssociationProposalCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // CreateDirectConnectGatewayAssociationProposalRequest
 *   directConnectGatewayId: "STRING_VALUE", // required
 *   directConnectGatewayOwnerAccount: "STRING_VALUE", // required
 *   gatewayId: "STRING_VALUE", // required
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
 * const command = new CreateDirectConnectGatewayAssociationProposalCommand(input);
 * const response = await client.send(command);
 * // { // CreateDirectConnectGatewayAssociationProposalResult
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
 * @param CreateDirectConnectGatewayAssociationProposalCommandInput - {@link CreateDirectConnectGatewayAssociationProposalCommandInput}
 * @returns {@link CreateDirectConnectGatewayAssociationProposalCommandOutput}
 * @see {@link CreateDirectConnectGatewayAssociationProposalCommandInput} for command's `input` shape.
 * @see {@link CreateDirectConnectGatewayAssociationProposalCommandOutput} for command's `response` shape.
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
export class CreateDirectConnectGatewayAssociationProposalCommand extends $Command
  .classBuilder<
    CreateDirectConnectGatewayAssociationProposalCommandInput,
    CreateDirectConnectGatewayAssociationProposalCommandOutput,
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
  .s("OvertureService", "CreateDirectConnectGatewayAssociationProposal", {})
  .n("DirectConnectClient", "CreateDirectConnectGatewayAssociationProposalCommand")
  .f(void 0, void 0)
  .ser(se_CreateDirectConnectGatewayAssociationProposalCommand)
  .de(de_CreateDirectConnectGatewayAssociationProposalCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDirectConnectGatewayAssociationProposalRequest;
      output: CreateDirectConnectGatewayAssociationProposalResult;
    };
    sdk: {
      input: CreateDirectConnectGatewayAssociationProposalCommandInput;
      output: CreateDirectConnectGatewayAssociationProposalCommandOutput;
    };
  };
}
