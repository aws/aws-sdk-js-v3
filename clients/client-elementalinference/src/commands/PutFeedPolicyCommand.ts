// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutFeedPolicyRequest, PutFeedPolicyResponse } from "../models/models_0";
import { PutFeedPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutFeedPolicyCommand}.
 */
export interface PutFeedPolicyCommandInput extends PutFeedPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutFeedPolicyCommand}.
 */
export interface PutFeedPolicyCommandOutput extends PutFeedPolicyResponse, __MetadataBearer {}

/**
 * Attaches or replaces a resource-based policy on the specified feed. A resource-based policy grants cross-account access to the feed.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, PutFeedPolicyCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, PutFeedPolicyCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // PutFeedPolicyRequest
 *   id: "STRING_VALUE", // required
 *   policy: "STRING_VALUE", // required
 * };
 * const command = new PutFeedPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutFeedPolicyCommandInput - {@link PutFeedPolicyCommandInput}
 * @returns {@link PutFeedPolicyCommandOutput}
 * @see {@link PutFeedPolicyCommandInput} for command's `input` shape.
 * @see {@link PutFeedPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict.
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
export class PutFeedPolicyCommand extends command<PutFeedPolicyCommandInput, PutFeedPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutFeedPolicy",
  PutFeedPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFeedPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutFeedPolicyCommandInput;
      output: PutFeedPolicyCommandOutput;
    };
  };
}
