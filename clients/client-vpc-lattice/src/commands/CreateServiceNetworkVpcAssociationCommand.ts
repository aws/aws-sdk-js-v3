// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateServiceNetworkVpcAssociationRequest,
  CreateServiceNetworkVpcAssociationResponse,
} from "../models/models_0";
import { CreateServiceNetworkVpcAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateServiceNetworkVpcAssociationCommandOutput extends CreateServiceNetworkVpcAssociationResponse, __MetadataBearer {}

/**
 * Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see [Manage VPC associations](https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations) in the *Amazon VPC Lattice User Guide*.
 *
 * You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it.
 *
 * As a result of this operation, the association gets created in the service network account and the VPC owner account.
 *
 * If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.
 *
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
 *
 * The user does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource. Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link VPCLatticeServiceException}
 *
 * Base exception class for all service exceptions from VPCLattice service.
 *
 * @public
 */
export class CreateServiceNetworkVpcAssociationCommand extends command<CreateServiceNetworkVpcAssociationCommandInput, CreateServiceNetworkVpcAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateServiceNetworkVpcAssociation",
  CreateServiceNetworkVpcAssociation$
) {
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
