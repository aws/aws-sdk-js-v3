// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteServiceNetworkResourceAssociationRequest,
  DeleteServiceNetworkResourceAssociationResponse,
} from "../models/models_0";
import { DeleteServiceNetworkResourceAssociation } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceNetworkResourceAssociationCommand}.
 */
export interface DeleteServiceNetworkResourceAssociationCommandInput
  extends DeleteServiceNetworkResourceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceNetworkResourceAssociationCommand}.
 */
export interface DeleteServiceNetworkResourceAssociationCommandOutput
  extends DeleteServiceNetworkResourceAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the association between a service network and a resource configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteServiceNetworkResourceAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteServiceNetworkResourceAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // DeleteServiceNetworkResourceAssociationRequest
 *   serviceNetworkResourceAssociationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceNetworkResourceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceNetworkResourceAssociationResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteServiceNetworkResourceAssociationCommandInput - {@link DeleteServiceNetworkResourceAssociationCommandInput}
 * @returns {@link DeleteServiceNetworkResourceAssociationCommandOutput}
 * @see {@link DeleteServiceNetworkResourceAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceNetworkResourceAssociationCommandOutput} for command's `response` shape.
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
export class DeleteServiceNetworkResourceAssociationCommand extends $Command
  .classBuilder<
    DeleteServiceNetworkResourceAssociationCommandInput,
    DeleteServiceNetworkResourceAssociationCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "DeleteServiceNetworkResourceAssociation", {})
  .n("VPCLatticeClient", "DeleteServiceNetworkResourceAssociationCommand")
  .sc(DeleteServiceNetworkResourceAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceNetworkResourceAssociationRequest;
      output: DeleteServiceNetworkResourceAssociationResponse;
    };
    sdk: {
      input: DeleteServiceNetworkResourceAssociationCommandInput;
      output: DeleteServiceNetworkResourceAssociationCommandOutput;
    };
  };
}
