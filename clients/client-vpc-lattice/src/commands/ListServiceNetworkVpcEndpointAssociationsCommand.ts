// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListServiceNetworkVpcEndpointAssociationsRequest,
  ListServiceNetworkVpcEndpointAssociationsResponse,
} from "../models/models_0";
import {
  de_ListServiceNetworkVpcEndpointAssociationsCommand,
  se_ListServiceNetworkVpcEndpointAssociationsCommand,
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
 * The input for {@link ListServiceNetworkVpcEndpointAssociationsCommand}.
 */
export interface ListServiceNetworkVpcEndpointAssociationsCommandInput
  extends ListServiceNetworkVpcEndpointAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceNetworkVpcEndpointAssociationsCommand}.
 */
export interface ListServiceNetworkVpcEndpointAssociationsCommandOutput
  extends ListServiceNetworkVpcEndpointAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the associations between a service network and a VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListServiceNetworkVpcEndpointAssociationsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListServiceNetworkVpcEndpointAssociationsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // ListServiceNetworkVpcEndpointAssociationsRequest
 *   serviceNetworkIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceNetworkVpcEndpointAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceNetworkVpcEndpointAssociationsResponse
 * //   items: [ // ServiceNetworkVpcEndpointAssociationList // required
 * //     { // ServiceNetworkEndpointAssociation
 * //       vpcEndpointId: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE",
 * //       vpcEndpointOwnerId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //       serviceNetworkArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceNetworkVpcEndpointAssociationsCommandInput - {@link ListServiceNetworkVpcEndpointAssociationsCommandInput}
 * @returns {@link ListServiceNetworkVpcEndpointAssociationsCommandOutput}
 * @see {@link ListServiceNetworkVpcEndpointAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListServiceNetworkVpcEndpointAssociationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListServiceNetworkVpcEndpointAssociationsCommand extends $Command
  .classBuilder<
    ListServiceNetworkVpcEndpointAssociationsCommandInput,
    ListServiceNetworkVpcEndpointAssociationsCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MercuryControlPlane", "ListServiceNetworkVpcEndpointAssociations", {})
  .n("VPCLatticeClient", "ListServiceNetworkVpcEndpointAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListServiceNetworkVpcEndpointAssociationsCommand)
  .de(de_ListServiceNetworkVpcEndpointAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceNetworkVpcEndpointAssociationsRequest;
      output: ListServiceNetworkVpcEndpointAssociationsResponse;
    };
    sdk: {
      input: ListServiceNetworkVpcEndpointAssociationsCommandInput;
      output: ListServiceNetworkVpcEndpointAssociationsCommandOutput;
    };
  };
}
