// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFeedPolicyRequest } from "../models/models_0";
import { DeleteFeedPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFeedPolicyCommand}.
 */
export interface DeleteFeedPolicyCommandInput extends DeleteFeedPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFeedPolicyCommand}.
 */
export interface DeleteFeedPolicyCommandOutput extends __MetadataBearer {}

/**
 * Deletes the resource-based policy attached to the specified feed. After you delete the policy, the operation revokes the cross-account access that the policy granted.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, DeleteFeedPolicyCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, DeleteFeedPolicyCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // DeleteFeedPolicyRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteFeedPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFeedPolicyCommandInput - {@link DeleteFeedPolicyCommandInput}
 * @returns {@link DeleteFeedPolicyCommandOutput}
 * @see {@link DeleteFeedPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteFeedPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the action doesn't exist.
 *
 * @throws {@link TooManyRequestException} (client fault)
 *
 * The request was denied due to request throttling. Too many requests have been made within a given time period. Reduce the frequency of requests and use exponential backoff when retrying.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying.
 *
 * @throws {@link ElementalInferenceServiceException}
 *
 * Base exception class for all service exceptions from ElementalInference service.
 *
 * @public
 */
export class DeleteFeedPolicyCommand extends command<DeleteFeedPolicyCommandInput, DeleteFeedPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFeedPolicy",
  DeleteFeedPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFeedPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteFeedPolicyCommandInput;
      output: DeleteFeedPolicyCommandOutput;
    };
  };
}
