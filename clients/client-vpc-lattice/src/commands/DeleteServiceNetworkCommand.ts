// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteServiceNetworkRequest, DeleteServiceNetworkResponse } from "../models/models_0";
import { DeleteServiceNetwork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a service network. You can only delete the service network if there is no service or VPC associated with it. If you delete a service network, all resources related to the service network, such as the resource policy, auth policy, and access log subscriptions, are also deleted. For more information, see [Delete a service network](https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#delete-service-network) in the *Amazon VPC Lattice User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteServiceNetworkCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteServiceNetworkCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
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
export class DeleteServiceNetworkCommand extends command<DeleteServiceNetworkCommandInput, DeleteServiceNetworkCommandOutput>(
  _ep0,
  _mw0,
  "DeleteServiceNetwork",
  DeleteServiceNetwork$
) {
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
