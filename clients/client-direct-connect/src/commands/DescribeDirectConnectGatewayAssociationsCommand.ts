// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDirectConnectGatewayAssociationsRequest,
  DescribeDirectConnectGatewayAssociationsResult,
} from "../models/models_0";
import {
  de_DescribeDirectConnectGatewayAssociationsCommand,
  se_DescribeDirectConnectGatewayAssociationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDirectConnectGatewayAssociationsCommand}.
 */
export interface DescribeDirectConnectGatewayAssociationsCommandInput
  extends DescribeDirectConnectGatewayAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectConnectGatewayAssociationsCommand}.
 */
export interface DescribeDirectConnectGatewayAssociationsCommandOutput
  extends DescribeDirectConnectGatewayAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>A Direct Connect gateway</p>
 *                <p>The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway.</p>
 *             </li>
 *             <li>
 *                <p>A virtual private gateway</p>
 *                <p>The response contains the Direct Connect gateway.</p>
 *             </li>
 *             <li>
 *                <p>A transit gateway</p>
 *                <p>The response contains the Direct Connect gateway.</p>
 *             </li>
 *             <li>
 *                <p>A Direct Connect gateway and a virtual private gateway</p>
 *                <p>The response contains the association between the Direct Connect gateway and virtual private gateway.</p>
 *             </li>
 *             <li>
 *                <p>A Direct Connect gateway and a transit gateway</p>
 *                <p>The response contains the association between the Direct Connect gateway and transit gateway.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAssociationsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAssociationsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeDirectConnectGatewayAssociationsRequest
 *   associationId: "STRING_VALUE",
 *   associatedGatewayId: "STRING_VALUE",
 *   directConnectGatewayId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   virtualGatewayId: "STRING_VALUE",
 * };
 * const command = new DescribeDirectConnectGatewayAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectConnectGatewayAssociationsResult
 * //   directConnectGatewayAssociations: [ // DirectConnectGatewayAssociationList
 * //     { // DirectConnectGatewayAssociation
 * //       directConnectGatewayId: "STRING_VALUE",
 * //       directConnectGatewayOwnerAccount: "STRING_VALUE",
 * //       associationState: "associating" || "associated" || "disassociating" || "disassociated" || "updating",
 * //       stateChangeError: "STRING_VALUE",
 * //       associatedGateway: { // AssociatedGateway
 * //         id: "STRING_VALUE",
 * //         type: "virtualPrivateGateway" || "transitGateway",
 * //         ownerAccount: "STRING_VALUE",
 * //         region: "STRING_VALUE",
 * //       },
 * //       associationId: "STRING_VALUE",
 * //       allowedPrefixesToDirectConnectGateway: [ // RouteFilterPrefixList
 * //         { // RouteFilterPrefix
 * //           cidr: "STRING_VALUE",
 * //         },
 * //       ],
 * //       associatedCoreNetwork: { // AssociatedCoreNetwork
 * //         id: "STRING_VALUE",
 * //         ownerAccount: "STRING_VALUE",
 * //         attachmentId: "STRING_VALUE",
 * //       },
 * //       virtualGatewayId: "STRING_VALUE",
 * //       virtualGatewayRegion: "STRING_VALUE",
 * //       virtualGatewayOwnerAccount: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDirectConnectGatewayAssociationsCommandInput - {@link DescribeDirectConnectGatewayAssociationsCommandInput}
 * @returns {@link DescribeDirectConnectGatewayAssociationsCommandOutput}
 * @see {@link DescribeDirectConnectGatewayAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAssociationsCommandOutput} for command's `response` shape.
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
export class DescribeDirectConnectGatewayAssociationsCommand extends $Command
  .classBuilder<
    DescribeDirectConnectGatewayAssociationsCommandInput,
    DescribeDirectConnectGatewayAssociationsCommandOutput,
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
  .s("OvertureService", "DescribeDirectConnectGatewayAssociations", {})
  .n("DirectConnectClient", "DescribeDirectConnectGatewayAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDirectConnectGatewayAssociationsCommand)
  .de(de_DescribeDirectConnectGatewayAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDirectConnectGatewayAssociationsRequest;
      output: DescribeDirectConnectGatewayAssociationsResult;
    };
    sdk: {
      input: DescribeDirectConnectGatewayAssociationsCommandInput;
      output: DescribeDirectConnectGatewayAssociationsCommandOutput;
    };
  };
}
