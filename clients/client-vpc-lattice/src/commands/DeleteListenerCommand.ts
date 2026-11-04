// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteListenerRequest, DeleteListenerResponse } from "../models/models_0";
import { DeleteListener$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteListenerCommand}.
 */
export interface DeleteListenerCommandInput extends DeleteListenerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteListenerCommand}.
 */
export interface DeleteListenerCommandOutput extends DeleteListenerResponse, __MetadataBearer {}

/**
 * Deletes the specified listener.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteListenerCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteListenerCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // DeleteListenerRequest
 *   serviceIdentifier: "STRING_VALUE", // required
 *   listenerIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteListenerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteListenerCommandInput - {@link DeleteListenerCommandInput}
 * @returns {@link DeleteListenerCommandOutput}
 * @see {@link DeleteListenerCommandInput} for command's `input` shape.
 * @see {@link DeleteListenerCommandOutput} for command's `response` shape.
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
export class DeleteListenerCommand extends command<DeleteListenerCommandInput, DeleteListenerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteListener",
  DeleteListener$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteListenerRequest;
      output: {};
    };
    sdk: {
      input: DeleteListenerCommandInput;
      output: DeleteListenerCommandOutput;
    };
  };
}
