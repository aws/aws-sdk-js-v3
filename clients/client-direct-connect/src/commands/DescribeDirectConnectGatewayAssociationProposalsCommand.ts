// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDirectConnectGatewayAssociationProposalsRequest,
  DescribeDirectConnectGatewayAssociationProposalsResult,
} from "../models/models_0";
import {
  de_DescribeDirectConnectGatewayAssociationProposalsCommand,
  se_DescribeDirectConnectGatewayAssociationProposalsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDirectConnectGatewayAssociationProposalsCommand}.
 */
export interface DescribeDirectConnectGatewayAssociationProposalsCommandInput
  extends DescribeDirectConnectGatewayAssociationProposalsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectConnectGatewayAssociationProposalsCommand}.
 */
export interface DescribeDirectConnectGatewayAssociationProposalsCommandOutput
  extends DescribeDirectConnectGatewayAssociationProposalsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAssociationProposalsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAssociationProposalsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeDirectConnectGatewayAssociationProposalsRequest
 *   directConnectGatewayId: "STRING_VALUE",
 *   proposalId: "STRING_VALUE",
 *   associatedGatewayId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDirectConnectGatewayAssociationProposalsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectConnectGatewayAssociationProposalsResult
 * //   directConnectGatewayAssociationProposals: [ // DirectConnectGatewayAssociationProposalList
 * //     { // DirectConnectGatewayAssociationProposal
 * //       proposalId: "STRING_VALUE",
 * //       directConnectGatewayId: "STRING_VALUE",
 * //       directConnectGatewayOwnerAccount: "STRING_VALUE",
 * //       proposalState: "requested" || "accepted" || "deleted",
 * //       associatedGateway: { // AssociatedGateway
 * //         id: "STRING_VALUE",
 * //         type: "virtualPrivateGateway" || "transitGateway",
 * //         ownerAccount: "STRING_VALUE",
 * //         region: "STRING_VALUE",
 * //       },
 * //       existingAllowedPrefixesToDirectConnectGateway: [ // RouteFilterPrefixList
 * //         { // RouteFilterPrefix
 * //           cidr: "STRING_VALUE",
 * //         },
 * //       ],
 * //       requestedAllowedPrefixesToDirectConnectGateway: [
 * //         {
 * //           cidr: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDirectConnectGatewayAssociationProposalsCommandInput - {@link DescribeDirectConnectGatewayAssociationProposalsCommandInput}
 * @returns {@link DescribeDirectConnectGatewayAssociationProposalsCommandOutput}
 * @see {@link DescribeDirectConnectGatewayAssociationProposalsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAssociationProposalsCommandOutput} for command's `response` shape.
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
export class DescribeDirectConnectGatewayAssociationProposalsCommand extends $Command
  .classBuilder<
    DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    DescribeDirectConnectGatewayAssociationProposalsCommandOutput,
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
  .s("OvertureService", "DescribeDirectConnectGatewayAssociationProposals", {})
  .n("DirectConnectClient", "DescribeDirectConnectGatewayAssociationProposalsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDirectConnectGatewayAssociationProposalsCommand)
  .de(de_DescribeDirectConnectGatewayAssociationProposalsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDirectConnectGatewayAssociationProposalsRequest;
      output: DescribeDirectConnectGatewayAssociationProposalsResult;
    };
    sdk: {
      input: DescribeDirectConnectGatewayAssociationProposalsCommandInput;
      output: DescribeDirectConnectGatewayAssociationProposalsCommandOutput;
    };
  };
}
