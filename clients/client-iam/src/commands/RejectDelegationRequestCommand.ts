// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RejectDelegationRequestRequest } from "../models/models_0";
import { RejectDelegationRequest } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectDelegationRequestCommand}.
 */
export interface RejectDelegationRequestCommandInput extends RejectDelegationRequestRequest {}
/**
 * @public
 *
 * The output of {@link RejectDelegationRequestCommand}.
 */
export interface RejectDelegationRequestCommandOutput extends __MetadataBearer {}

/**
 * <p>Rejects a delegation request, denying the requested temporary access.</p>
 *          <p>Once a request is rejected, it cannot be accepted or updated later. Rejected requests expire after 7 days.</p>
 *          <p>When rejecting a request, an optional explanation can be added using the <code>Notes</code> request parameter.</p>
 *          <p>
 *             For more details, see
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies-temporary-delegation.html#temporary-delegation-managing-permissions">
 *                 Managing Permissions for Delegation Requests</a>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RejectDelegationRequestCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RejectDelegationRequestCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // RejectDelegationRequestRequest
 *   DelegationRequestId: "STRING_VALUE", // required
 *   Notes: "STRING_VALUE",
 * };
 * const command = new RejectDelegationRequestCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RejectDelegationRequestCommandInput - {@link RejectDelegationRequestCommandInput}
 * @returns {@link RejectDelegationRequestCommandOutput}
 * @see {@link RejectDelegationRequestCommandInput} for command's `input` shape.
 * @see {@link RejectDelegationRequestCommandOutput} for command's `response` shape.
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
export class RejectDelegationRequestCommand extends $Command
  .classBuilder<
    RejectDelegationRequestCommandInput,
    RejectDelegationRequestCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "RejectDelegationRequest", {})
  .n("IAMClient", "RejectDelegationRequestCommand")
  .sc(RejectDelegationRequest)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectDelegationRequestRequest;
      output: {};
    };
    sdk: {
      input: RejectDelegationRequestCommandInput;
      output: RejectDelegationRequestCommandOutput;
    };
  };
}
