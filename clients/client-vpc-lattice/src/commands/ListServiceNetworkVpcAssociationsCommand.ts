// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListServiceNetworkVpcAssociationsRequest,
  ListServiceNetworkVpcAssociationsResponse,
} from "../models/models_0";
import {
  de_ListServiceNetworkVpcAssociationsCommand,
  se_ListServiceNetworkVpcAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceNetworkVpcAssociationsCommand}.
 */
export interface ListServiceNetworkVpcAssociationsCommandInput extends ListServiceNetworkVpcAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceNetworkVpcAssociationsCommand}.
 */
export interface ListServiceNetworkVpcAssociationsCommandOutput
  extends ListServiceNetworkVpcAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the service network and VPC associations. You can filter the list either by VPC or
 *    service network. You must provide either the service network identifier or the VPC
 *    identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListServiceNetworkVpcAssociationsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListServiceNetworkVpcAssociationsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // ListServiceNetworkVpcAssociationsRequest
 *   serviceNetworkIdentifier: "STRING_VALUE",
 *   vpcIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceNetworkVpcAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceNetworkVpcAssociationsResponse
 * //   items: [ // ServiceNetworkVpcAssociationList // required
 * //     { // ServiceNetworkVpcAssociationSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       createdBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       serviceNetworkId: "STRING_VALUE",
 * //       serviceNetworkName: "STRING_VALUE",
 * //       serviceNetworkArn: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceNetworkVpcAssociationsCommandInput - {@link ListServiceNetworkVpcAssociationsCommandInput}
 * @returns {@link ListServiceNetworkVpcAssociationsCommandOutput}
 * @see {@link ListServiceNetworkVpcAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListServiceNetworkVpcAssociationsCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 * @public
 */
export class ListServiceNetworkVpcAssociationsCommand extends $Command
  .classBuilder<
    ListServiceNetworkVpcAssociationsCommandInput,
    ListServiceNetworkVpcAssociationsCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MercuryControlPlane", "ListServiceNetworkVpcAssociations", {})
  .n("VPCLatticeClient", "ListServiceNetworkVpcAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListServiceNetworkVpcAssociationsCommand)
  .de(de_ListServiceNetworkVpcAssociationsCommand)
  .build() {}
