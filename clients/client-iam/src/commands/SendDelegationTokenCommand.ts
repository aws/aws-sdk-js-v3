// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { SendDelegationTokenRequest } from "../models/models_0";
import { SendDelegationToken } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendDelegationTokenCommand}.
 */
export interface SendDelegationTokenCommandInput extends SendDelegationTokenRequest {}
/**
 * @public
 *
 * The output of {@link SendDelegationTokenCommand}.
 */
export interface SendDelegationTokenCommandOutput extends __MetadataBearer {}

/**
 * <p>Sends the exchange token for an accepted delegation request.</p>
 *          <p>The exchange token is sent to the partner via an asynchronous notification channel, established by the partner.</p>
 *          <p>The delegation request must be in the <code>ACCEPTED</code> state when calling this API. After the
 *             <code>SendDelegationToken</code> API
 *             call is successful, the request transitions to a <code>FINALIZED</code> state and cannot be rolled back. However, a user may reject
 *         an accepted request before the <code>SendDelegationToken</code> API is called.</p>
 *          <p>
 *             For more details, see
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies-temporary-delegation.html#temporary-delegation-managing-permissions">
 *                 Managing Permissions for Delegation Requests</a>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, SendDelegationTokenCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, SendDelegationTokenCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // SendDelegationTokenRequest
 *   DelegationRequestId: "STRING_VALUE", // required
 * };
 * const command = new SendDelegationTokenCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendDelegationTokenCommandInput - {@link SendDelegationTokenCommandInput}
 * @returns {@link SendDelegationTokenCommandOutput}
 * @see {@link SendDelegationTokenCommandInput} for command's `input` shape.
 * @see {@link SendDelegationTokenCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class SendDelegationTokenCommand extends $Command
  .classBuilder<
    SendDelegationTokenCommandInput,
    SendDelegationTokenCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "SendDelegationToken", {})
  .n("IAMClient", "SendDelegationTokenCommand")
  .sc(SendDelegationToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendDelegationTokenRequest;
      output: {};
    };
    sdk: {
      input: SendDelegationTokenCommandInput;
      output: SendDelegationTokenCommandOutput;
    };
  };
}
