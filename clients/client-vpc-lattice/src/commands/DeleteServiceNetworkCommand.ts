// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServiceNetworkRequest, DeleteServiceNetworkResponse } from "../models/models_0";
import { de_DeleteServiceNetworkCommand, se_DeleteServiceNetworkCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceNetworkCommand}.
 */
export interface DeleteServiceNetworkCommandInput extends DeleteServiceNetworkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceNetworkCommand}.
 */
export interface DeleteServiceNetworkCommandOutput extends DeleteServiceNetworkResponse, __MetadataBearer {}

/**
 * <p>Deletes a service network. You can only delete the service network if there is no service or
 *    VPC associated with it. If you delete a service network, all resources related to the service
 *    network, such as the resource policy, auth policy, and access log subscriptions, are also
 *    deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#delete-service-network">Delete a service
 *     network</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteServiceNetworkCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteServiceNetworkCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // DeleteServiceNetworkRequest
 *   serviceNetworkIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceNetworkCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServiceNetworkCommandInput - {@link DeleteServiceNetworkCommandInput}
 * @returns {@link DeleteServiceNetworkCommandOutput}
 * @see {@link DeleteServiceNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceNetworkCommandOutput} for command's `response` shape.
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
export class DeleteServiceNetworkCommand extends $Command
  .classBuilder<
    DeleteServiceNetworkCommandInput,
    DeleteServiceNetworkCommandOutput,
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
  .s("MercuryControlPlane", "DeleteServiceNetwork", {})
  .n("VPCLatticeClient", "DeleteServiceNetworkCommand")
  .f(void 0, void 0)
  .ser(se_DeleteServiceNetworkCommand)
  .de(de_DeleteServiceNetworkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceNetworkRequest;
      output: {};
    };
    sdk: {
      input: DeleteServiceNetworkCommandInput;
      output: DeleteServiceNetworkCommandOutput;
    };
  };
}
