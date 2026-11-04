// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteServiceNetworkServiceAssociationRequest,
  DeleteServiceNetworkServiceAssociationResponse,
} from "../models/models_0";
import { DeleteServiceNetworkServiceAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteServiceNetworkServiceAssociationCommand}.
 */
export interface DeleteServiceNetworkServiceAssociationCommandInput extends DeleteServiceNetworkServiceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceNetworkServiceAssociationCommand}.
 */
export interface DeleteServiceNetworkServiceAssociationCommandOutput extends DeleteServiceNetworkServiceAssociationResponse, __MetadataBearer {}

/**
 * Deletes the association between a service and a service network. This operation fails if an association is still in progress.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteServiceNetworkServiceAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteServiceNetworkServiceAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
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
export class DeleteServiceNetworkServiceAssociationCommand extends command<DeleteServiceNetworkServiceAssociationCommandInput, DeleteServiceNetworkServiceAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteServiceNetworkServiceAssociation",
  DeleteServiceNetworkServiceAssociation$
) {
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
