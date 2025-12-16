// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { AcceptDelegationRequestRequest } from "../models/models_0";
import { AcceptDelegationRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptDelegationRequestCommand}.
 */
export interface AcceptDelegationRequestCommandInput extends AcceptDelegationRequestRequest {}
/**
 * @public
 *
 * The output of {@link AcceptDelegationRequestCommand}.
 */
export interface AcceptDelegationRequestCommandOutput extends __MetadataBearer {}

/**
 * <p>Accepts a delegation request, granting the requested temporary access.</p>
 *          <p>Once the delegation request is accepted, it is eligible to send the exchange token to the partner.
 *             The <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_SendDelegationToken.html">SendDelegationToken</a>
 *              API has to be explicitly called to send the delegation token.
 *         </p>
 *          <p>At the time of acceptance, IAM records the details and the state of the identity that called this API.
 *             This is the identity that gets mapped to the delegated credential.
 *         </p>
 *          <p>An accepted request may be rejected before the exchange token is sent to the partner.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AcceptDelegationRequestCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AcceptDelegationRequestCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // AcceptDelegationRequestRequest
 *   DelegationRequestId: "STRING_VALUE", // required
 * };
 * const command = new AcceptDelegationRequestCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptDelegationRequestCommandInput - {@link AcceptDelegationRequestCommandInput}
 * @returns {@link AcceptDelegationRequestCommandOutput}
 * @see {@link AcceptDelegationRequestCommandInput} for command's `input` shape.
 * @see {@link AcceptDelegationRequestCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
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
export class AcceptDelegationRequestCommand extends $Command
  .classBuilder<
    AcceptDelegationRequestCommandInput,
    AcceptDelegationRequestCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "AcceptDelegationRequest", {})
  .n("IAMClient", "AcceptDelegationRequestCommand")
  .sc(AcceptDelegationRequest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptDelegationRequestRequest;
      output: {};
    };
    sdk: {
      input: AcceptDelegationRequestCommandInput;
      output: AcceptDelegationRequestCommandOutput;
    };
  };
}
