// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccessLogSubscriptionRequest, DeleteAccessLogSubscriptionResponse } from "../models/models_0";
import { DeleteAccessLogSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessLogSubscriptionCommand}.
 */
export interface DeleteAccessLogSubscriptionCommandInput extends DeleteAccessLogSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessLogSubscriptionCommand}.
 */
export interface DeleteAccessLogSubscriptionCommandOutput extends DeleteAccessLogSubscriptionResponse, __MetadataBearer {}

/**
 * Deletes the specified access log subscription.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteAccessLogSubscriptionCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteAccessLogSubscriptionCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // DeleteAccessLogSubscriptionRequest
 *   accessLogSubscriptionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessLogSubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessLogSubscriptionCommandInput - {@link DeleteAccessLogSubscriptionCommandInput}
 * @returns {@link DeleteAccessLogSubscriptionCommandOutput}
 * @see {@link DeleteAccessLogSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessLogSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user does not have sufficient access to perform this action.
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
export class DeleteAccessLogSubscriptionCommand extends command<DeleteAccessLogSubscriptionCommandInput, DeleteAccessLogSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccessLogSubscription",
  DeleteAccessLogSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessLogSubscriptionRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessLogSubscriptionCommandInput;
      output: DeleteAccessLogSubscriptionCommandOutput;
    };
  };
}
