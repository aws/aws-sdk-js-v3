// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateServiceNetworkServiceAssociationRequest,
  CreateServiceNetworkServiceAssociationResponse,
} from "../models/models_0";
import {
  de_CreateServiceNetworkServiceAssociationCommand,
  se_CreateServiceNetworkServiceAssociationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceNetworkServiceAssociationCommand}.
 */
export interface CreateServiceNetworkServiceAssociationCommandInput
  extends CreateServiceNetworkServiceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceNetworkServiceAssociationCommand}.
 */
export interface CreateServiceNetworkServiceAssociationCommandOutput
  extends CreateServiceNetworkServiceAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Associates a service with a service network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-service-associations">Manage service associations</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
 *          <p>You can't use this operation if the service and service network are already associated or if
 *    there is a disassociation or deletion in progress. If the association fails, you can retry the
 *    operation by deleting the association and recreating it.</p>
 *          <p>You cannot associate a service and service network that are shared with a caller. The caller
 *    must own either the service or the service network.</p>
 *          <p>As a result of this operation, the association is created in the service network account and
 *    the association owner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateServiceNetworkServiceAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateServiceNetworkServiceAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
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
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Updating or deleting a
 *    resource can cause an inconsistent state.</p>
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
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 * @public
 */
export class CreateServiceNetworkServiceAssociationCommand extends $Command
  .classBuilder<
    CreateServiceNetworkServiceAssociationCommandInput,
    CreateServiceNetworkServiceAssociationCommandOutput,
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
  .s("MercuryControlPlane", "CreateServiceNetworkServiceAssociation", {})
  .n("VPCLatticeClient", "CreateServiceNetworkServiceAssociationCommand")
  .f(void 0, void 0)
  .ser(se_CreateServiceNetworkServiceAssociationCommand)
  .de(de_CreateServiceNetworkServiceAssociationCommand)
  .build() {}
