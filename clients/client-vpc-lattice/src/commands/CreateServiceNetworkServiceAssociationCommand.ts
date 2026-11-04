// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateServiceNetworkServiceAssociationRequest,
  CreateServiceNetworkServiceAssociationResponse,
} from "../models/models_0";
import { CreateServiceNetworkServiceAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateServiceNetworkServiceAssociationCommand}.
 */
export interface CreateServiceNetworkServiceAssociationCommandInput extends CreateServiceNetworkServiceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceNetworkServiceAssociationCommand}.
 */
export interface CreateServiceNetworkServiceAssociationCommandOutput extends CreateServiceNetworkServiceAssociationResponse, __MetadataBearer {}

/**
 * Associates the specified service with the specified service network. For more information, see [Manage service associations](https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-service-associations) in the *Amazon VPC Lattice User Guide*.
 *
 * You can't use this operation if the service and service network are already associated or if there is a disassociation or deletion in progress. If the association fails, you can retry the operation by deleting the association and recreating it.
 *
 * You cannot associate a service and service network that are shared with a caller. The caller must own either the service or the service network.
 *
 * As a result of this operation, the association is created in the service network account and the association owner account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateServiceNetworkServiceAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateServiceNetworkServiceAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateServiceNetworkServiceAssociationRequest
 *   clientToken: "STRING_VALUE",
 *   serviceIdentifier: "STRING_VALUE", // required
 *   serviceNetworkIdentifier: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateServiceNetworkServiceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceNetworkServiceAssociationResponse
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE",
 * //   customDomainName: "STRING_VALUE",
 * //   dnsEntry: { // DnsEntry
 * //     domainName: "STRING_VALUE",
 * //     hostedZoneId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateServiceNetworkServiceAssociationCommandInput - {@link CreateServiceNetworkServiceAssociationCommandInput}
 * @returns {@link CreateServiceNetworkServiceAssociationCommandOutput}
 * @see {@link CreateServiceNetworkServiceAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateServiceNetworkServiceAssociationCommandOutput} for command's `response` shape.
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
export class CreateServiceNetworkServiceAssociationCommand extends command<CreateServiceNetworkServiceAssociationCommandInput, CreateServiceNetworkServiceAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateServiceNetworkServiceAssociation",
  CreateServiceNetworkServiceAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceNetworkServiceAssociationRequest;
      output: CreateServiceNetworkServiceAssociationResponse;
    };
    sdk: {
      input: CreateServiceNetworkServiceAssociationCommandInput;
      output: CreateServiceNetworkServiceAssociationCommandOutput;
    };
  };
}
