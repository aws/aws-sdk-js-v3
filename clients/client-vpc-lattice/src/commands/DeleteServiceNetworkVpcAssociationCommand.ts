// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteServiceNetworkVpcAssociationRequest,
  DeleteServiceNetworkVpcAssociationResponse,
} from "../models/models_0";
import { DeleteServiceNetworkVpcAssociation } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceNetworkVpcAssociationCommand}.
 */
export interface DeleteServiceNetworkVpcAssociationCommandInput extends DeleteServiceNetworkVpcAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceNetworkVpcAssociationCommand}.
 */
export interface DeleteServiceNetworkVpcAssociationCommandOutput
  extends DeleteServiceNetworkVpcAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates the VPC from the service network. You can't disassociate the VPC if there is a create or update association in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteServiceNetworkVpcAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteServiceNetworkVpcAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // DeleteServiceNetworkVpcAssociationRequest
 *   serviceNetworkVpcAssociationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceNetworkVpcAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceNetworkVpcAssociationResponse
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteServiceNetworkVpcAssociationCommandInput - {@link DeleteServiceNetworkVpcAssociationCommandInput}
 * @returns {@link DeleteServiceNetworkVpcAssociationCommandOutput}
 * @see {@link DeleteServiceNetworkVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceNetworkVpcAssociationCommandOutput} for command's `response` shape.
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
export class DeleteServiceNetworkVpcAssociationCommand extends $Command
  .classBuilder<
    DeleteServiceNetworkVpcAssociationCommandInput,
    DeleteServiceNetworkVpcAssociationCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "DeleteServiceNetworkVpcAssociation", {})
  .n("VPCLatticeClient", "DeleteServiceNetworkVpcAssociationCommand")
  .sc(DeleteServiceNetworkVpcAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceNetworkVpcAssociationRequest;
      output: DeleteServiceNetworkVpcAssociationResponse;
    };
    sdk: {
      input: DeleteServiceNetworkVpcAssociationCommandInput;
      output: DeleteServiceNetworkVpcAssociationCommandOutput;
    };
  };
}
