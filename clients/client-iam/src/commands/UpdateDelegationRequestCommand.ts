// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateDelegationRequestRequest } from "../models/models_0";
import { UpdateDelegationRequest } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDelegationRequestCommand}.
 */
export interface UpdateDelegationRequestCommandInput extends UpdateDelegationRequestRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDelegationRequestCommand}.
 */
export interface UpdateDelegationRequestCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates an existing delegation request with additional information. When the delegation
 *             request is updated, it reaches the <code>PENDING_APPROVAL</code> state.
 *         </p>
 *          <p>Once a delegation request has an owner, that owner gets a default permission to update the
 *             delegation request. For more details, see
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies-temporary-delegation.html#temporary-delegation-managing-permissions">
 *                 Managing Permissions for Delegation Requests</a>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateDelegationRequestCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateDelegationRequestCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateDelegationRequestRequest
 *   DelegationRequestId: "STRING_VALUE", // required
 *   Notes: "STRING_VALUE",
 * };
 * const command = new UpdateDelegationRequestCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDelegationRequestCommandInput - {@link UpdateDelegationRequestCommandInput}
 * @returns {@link UpdateDelegationRequestCommandOutput}
 * @see {@link UpdateDelegationRequestCommandInput} for command's `input` shape.
 * @see {@link UpdateDelegationRequestCommandOutput} for command's `response` shape.
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
export class UpdateDelegationRequestCommand extends $Command
  .classBuilder<
    UpdateDelegationRequestCommandInput,
    UpdateDelegationRequestCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "UpdateDelegationRequest", {})
  .n("IAMClient", "UpdateDelegationRequestCommand")
  .sc(UpdateDelegationRequest)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDelegationRequestRequest;
      output: {};
    };
    sdk: {
      input: UpdateDelegationRequestCommandInput;
      output: UpdateDelegationRequestCommandOutput;
    };
  };
}
