// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteServiceNetworkServiceAssociationRequest,
  DeleteServiceNetworkServiceAssociationResponse,
} from "../models/models_0";
import {
  de_DeleteServiceNetworkServiceAssociationCommand,
  se_DeleteServiceNetworkServiceAssociationCommand,
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
 * The input for {@link DeleteServiceNetworkServiceAssociationCommand}.
 */
export interface DeleteServiceNetworkServiceAssociationCommandInput
  extends DeleteServiceNetworkServiceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceNetworkServiceAssociationCommand}.
 */
export interface DeleteServiceNetworkServiceAssociationCommandOutput
  extends DeleteServiceNetworkServiceAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the association between a service and a service network. This
 *    operation fails if an association is still in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteServiceNetworkServiceAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteServiceNetworkServiceAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new VPCLatticeClient(config);
 * const input = { // DeleteServiceNetworkServiceAssociationRequest
 *   serviceNetworkServiceAssociationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceNetworkServiceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceNetworkServiceAssociationResponse
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteServiceNetworkServiceAssociationCommandInput - {@link DeleteServiceNetworkServiceAssociationCommandInput}
 * @returns {@link DeleteServiceNetworkServiceAssociationCommandOutput}
 * @see {@link DeleteServiceNetworkServiceAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceNetworkServiceAssociationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteServiceNetworkServiceAssociationCommand extends $Command
  .classBuilder<
    DeleteServiceNetworkServiceAssociationCommandInput,
    DeleteServiceNetworkServiceAssociationCommandOutput,
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
  .s("MercuryControlPlane", "DeleteServiceNetworkServiceAssociation", {})
  .n("VPCLatticeClient", "DeleteServiceNetworkServiceAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteServiceNetworkServiceAssociationCommand)
  .de(de_DeleteServiceNetworkServiceAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceNetworkServiceAssociationRequest;
      output: DeleteServiceNetworkServiceAssociationResponse;
    };
    sdk: {
      input: DeleteServiceNetworkServiceAssociationCommandInput;
      output: DeleteServiceNetworkServiceAssociationCommandOutput;
    };
  };
}
