// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFeedPolicyRequest, GetFeedPolicyResponse } from "../models/models_0";
import { GetFeedPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFeedPolicyCommand}.
 */
export interface GetFeedPolicyCommandInput extends GetFeedPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetFeedPolicyCommand}.
 */
export interface GetFeedPolicyCommandOutput extends GetFeedPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the resource-based policy attached to the specified feed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, GetFeedPolicyCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, GetFeedPolicyCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // GetFeedPolicyRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetFeedPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetFeedPolicyResponse
 * //   policy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetFeedPolicyCommandInput - {@link GetFeedPolicyCommandInput}
 * @returns {@link GetFeedPolicyCommandOutput}
 * @see {@link GetFeedPolicyCommandInput} for command's `input` shape.
 * @see {@link GetFeedPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the action doesn't exist.</p>
 *
 * @throws {@link TooManyRequestException} (client fault)
 *  <p>The request was denied due to request throttling. Too many requests have been made within a given time period. Reduce the frequency of requests and use exponential backoff when retrying. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying. </p>
 *
 * @throws {@link ElementalInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElementalInference service.</p>
 *
 *
 * @public
 */
export class GetFeedPolicyCommand extends command<GetFeedPolicyCommandInput, GetFeedPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetFeedPolicy",
  GetFeedPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFeedPolicyRequest;
      output: GetFeedPolicyResponse;
    };
    sdk: {
      input: GetFeedPolicyCommandInput;
      output: GetFeedPolicyCommandOutput;
    };
  };
}
