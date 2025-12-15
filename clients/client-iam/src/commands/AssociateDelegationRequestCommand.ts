// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { AssociateDelegationRequestRequest } from "../models/models_0";
import { AssociateDelegationRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateDelegationRequestCommand}.
 */
export interface AssociateDelegationRequestCommandInput extends AssociateDelegationRequestRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDelegationRequestCommand}.
 */
export interface AssociateDelegationRequestCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates a delegation request with the current identity.</p>
 *          <p>If the partner that created the delegation request has specified the owner account during creation,
 *             only an identity from that owner account can call the <code>AssociateDelegationRequest</code> API for
 *             the specified delegation request. Once the <code>AssociateDelegationRequest</code> API call is successful,
 *             the ARN of the current calling identity will be stored as the
 *             <code>ownerId</code>
 *             of the request.
 *         </p>
 *          <p>If the partner that created the delegation request has not specified the owner account during creation,
 *             any caller from any account can call the <code>AssociateDelegationRequest</code> API for
 *             the delegation request. Once this API call is successful, the ARN of the current calling identity will be stored as the
 *             <code>ownerId</code>
 *             and the Amazon Web Services account ID of the current calling identity will be stored as the
 *             <code>ownerAccount</code>
 *             of the request.
 *         </p>
 *          <p>
 *             For more details, see
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies-temporary-delegation.html#temporary-delegation-managing-permissions">
 *                 Managing Permissions for Delegation Requests</a>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AssociateDelegationRequestCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AssociateDelegationRequestCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // AssociateDelegationRequestRequest
 *   DelegationRequestId: "STRING_VALUE", // required
 * };
 * const command = new AssociateDelegationRequestCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDelegationRequestCommandInput - {@link AssociateDelegationRequestCommandInput}
 * @returns {@link AssociateDelegationRequestCommandOutput}
 * @see {@link AssociateDelegationRequestCommandInput} for command's `input` shape.
 * @see {@link AssociateDelegationRequestCommandOutput} for command's `response` shape.
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
export class AssociateDelegationRequestCommand extends $Command
  .classBuilder<
    AssociateDelegationRequestCommandInput,
    AssociateDelegationRequestCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "AssociateDelegationRequest", {})
  .n("IAMClient", "AssociateDelegationRequestCommand")
  .sc(AssociateDelegationRequest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDelegationRequestRequest;
      output: {};
    };
    sdk: {
      input: AssociateDelegationRequestCommandInput;
      output: AssociateDelegationRequestCommandOutput;
    };
  };
}
