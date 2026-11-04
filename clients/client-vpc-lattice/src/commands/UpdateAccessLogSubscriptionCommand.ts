// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAccessLogSubscriptionRequest, UpdateAccessLogSubscriptionResponse } from "../models/models_0";
import { UpdateAccessLogSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAccessLogSubscriptionCommand}.
 */
export interface UpdateAccessLogSubscriptionCommandInput extends UpdateAccessLogSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessLogSubscriptionCommand}.
 */
export interface UpdateAccessLogSubscriptionCommandOutput extends UpdateAccessLogSubscriptionResponse, __MetadataBearer {}

/**
 * Updates the specified access log subscription.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateAccessLogSubscriptionCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateAccessLogSubscriptionCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // UpdateAccessLogSubscriptionRequest
 *   accessLogSubscriptionIdentifier: "STRING_VALUE", // required
 *   destinationArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateAccessLogSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessLogSubscriptionResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   resourceId: "STRING_VALUE", // required
 * //   resourceArn: "STRING_VALUE", // required
 * //   destinationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateAccessLogSubscriptionCommandInput - {@link UpdateAccessLogSubscriptionCommandInput}
 * @returns {@link UpdateAccessLogSubscriptionCommandOutput}
 * @see {@link UpdateAccessLogSubscriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessLogSubscriptionCommandOutput} for command's `response` shape.
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
export class UpdateAccessLogSubscriptionCommand extends command<UpdateAccessLogSubscriptionCommandInput, UpdateAccessLogSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccessLogSubscription",
  UpdateAccessLogSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessLogSubscriptionRequest;
      output: UpdateAccessLogSubscriptionResponse;
    };
    sdk: {
      input: UpdateAccessLogSubscriptionCommandInput;
      output: UpdateAccessLogSubscriptionCommandOutput;
    };
  };
}
