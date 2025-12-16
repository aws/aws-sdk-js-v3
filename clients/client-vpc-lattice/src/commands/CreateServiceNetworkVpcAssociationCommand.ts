// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateServiceNetworkVpcAssociationRequest,
  CreateServiceNetworkVpcAssociationResponse,
} from "../models/models_0";
import { CreateServiceNetworkVpcAssociation$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceNetworkVpcAssociationCommand}.
 */
export interface CreateServiceNetworkVpcAssociationCommandInput extends CreateServiceNetworkVpcAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceNetworkVpcAssociationCommand}.
 */
export interface CreateServiceNetworkVpcAssociationCommandOutput
  extends CreateServiceNetworkVpcAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations">Manage VPC associations</a> in the <i>Amazon VPC Lattice User Guide</i>.</p> <p>You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it.</p> <p>As a result of this operation, the association gets created in the service network account and the VPC owner account.</p> <p>If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateServiceNetworkVpcAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateServiceNetworkVpcAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateServiceNetworkVpcAssociationRequest
 *   clientToken: "STRING_VALUE",
 *   serviceNetworkIdentifier: "STRING_VALUE", // required
 *   vpcIdentifier: "STRING_VALUE", // required
 *   privateDnsEnabled: true || false,
 *   securityGroupIds: [ // SecurityGroupList
 *     "STRING_VALUE",
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   dnsOptions: { // DnsOptions
 *     privateDnsPreference: "STRING_VALUE",
 *     privateDnsSpecifiedDomains: [ // PrivateDnsSpecifiedDomainsList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateServiceNetworkVpcAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceNetworkVpcAssociationResponse
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE",
 * //   securityGroupIds: [ // SecurityGroupList
 * //     "STRING_VALUE",
 * //   ],
 * //   privateDnsEnabled: true || false,
 * //   dnsOptions: { // DnsOptions
 * //     privateDnsPreference: "STRING_VALUE",
 * //     privateDnsSpecifiedDomains: [ // PrivateDnsSpecifiedDomainsList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateServiceNetworkVpcAssociationCommandInput - {@link CreateServiceNetworkVpcAssociationCommandInput}
 * @returns {@link CreateServiceNetworkVpcAssociationCommandOutput}
 * @see {@link CreateServiceNetworkVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateServiceNetworkVpcAssociationCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class CreateServiceNetworkVpcAssociationCommand extends $Command
  .classBuilder<
    CreateServiceNetworkVpcAssociationCommandInput,
    CreateServiceNetworkVpcAssociationCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "CreateServiceNetworkVpcAssociation", {})
  .n("VPCLatticeClient", "CreateServiceNetworkVpcAssociationCommand")
  .sc(CreateServiceNetworkVpcAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceNetworkVpcAssociationRequest;
      output: CreateServiceNetworkVpcAssociationResponse;
    };
    sdk: {
      input: CreateServiceNetworkVpcAssociationCommandInput;
      output: CreateServiceNetworkVpcAssociationCommandOutput;
    };
  };
}
