// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateServiceNetworkVpcAssociationRequest,
  UpdateServiceNetworkVpcAssociationResponse,
} from "../models/models_0";
import {
  de_UpdateServiceNetworkVpcAssociationCommand,
  se_UpdateServiceNetworkVpcAssociationCommand,
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
 * The input for {@link UpdateServiceNetworkVpcAssociationCommand}.
 */
export interface UpdateServiceNetworkVpcAssociationCommandInput extends UpdateServiceNetworkVpcAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceNetworkVpcAssociationCommand}.
 */
export interface UpdateServiceNetworkVpcAssociationCommandOutput
  extends UpdateServiceNetworkVpcAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the service network and VPC association. If you add a security group to the service
 *    network and VPC association, the association must continue to have at least one security
 *    group. You can add or edit security groups at any time. However, to remove all security groups,
 *    you must first delete the association and then recreate it without security groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateServiceNetworkVpcAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateServiceNetworkVpcAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // UpdateServiceNetworkVpcAssociationRequest
 *   serviceNetworkVpcAssociationIdentifier: "STRING_VALUE", // required
 *   securityGroupIds: [ // SecurityGroupList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateServiceNetworkVpcAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceNetworkVpcAssociationResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE",
 * //   securityGroupIds: [ // SecurityGroupList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateServiceNetworkVpcAssociationCommandInput - {@link UpdateServiceNetworkVpcAssociationCommandInput}
 * @returns {@link UpdateServiceNetworkVpcAssociationCommandOutput}
 * @see {@link UpdateServiceNetworkVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceNetworkVpcAssociationCommandOutput} for command's `response` shape.
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
export class UpdateServiceNetworkVpcAssociationCommand extends $Command
  .classBuilder<
    UpdateServiceNetworkVpcAssociationCommandInput,
    UpdateServiceNetworkVpcAssociationCommandOutput,
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
  .s("MercuryControlPlane", "UpdateServiceNetworkVpcAssociation", {})
  .n("VPCLatticeClient", "UpdateServiceNetworkVpcAssociationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateServiceNetworkVpcAssociationCommand)
  .de(de_UpdateServiceNetworkVpcAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceNetworkVpcAssociationRequest;
      output: UpdateServiceNetworkVpcAssociationResponse;
    };
    sdk: {
      input: UpdateServiceNetworkVpcAssociationCommandInput;
      output: UpdateServiceNetworkVpcAssociationCommandOutput;
    };
  };
}
