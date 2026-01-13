// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { UpdateAccessKeyRequest } from "../models/models_0";
import { UpdateAccessKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccessKeyCommand}.
 */
export interface UpdateAccessKeyCommandInput extends UpdateAccessKeyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessKeyCommand}.
 */
export interface UpdateAccessKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the status of the specified access key from Active to Inactive, or vice versa.
 *             This operation can be used to disable a user's key as part of a key rotation
 *             workflow.</p>
 *          <p>If the <code>UserName</code> is not specified, the user name is determined implicitly
 *             based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is
 *             used, then <code>UserName</code> is required. If a long-term key is assigned to the
 *             user, then <code>UserName</code> is not required. This operation works for access keys
 *             under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user
 *             credentials even if the Amazon Web Services account has no associated users.</p>
 *          <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a>
 *             in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAccessKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAccessKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateAccessKeyRequest
 *   UserName: "STRING_VALUE",
 *   AccessKeyId: "STRING_VALUE", // required
 *   Status: "Active" || "Inactive" || "Expired", // required
 * };
 * const command = new UpdateAccessKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAccessKeyCommandInput - {@link UpdateAccessKeyCommandInput}
 * @returns {@link UpdateAccessKeyCommandOutput}
 * @see {@link UpdateAccessKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
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
 * @example To activate or deactivate an access key for an IAM user
 * ```javascript
 * // The following command deactivates the specified access key (access key ID and secret access key) for the IAM user named Bob.
 * const input = {
 *   AccessKeyId: "AKIAIOSFODNN7EXAMPLE",
 *   Status: "Inactive",
 *   UserName: "Bob"
 * };
 * const command = new UpdateAccessKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateAccessKeyCommand extends $Command
  .classBuilder<
    UpdateAccessKeyCommandInput,
    UpdateAccessKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "UpdateAccessKey", {})
  .n("IAMClient", "UpdateAccessKeyCommand")
  .sc(UpdateAccessKey$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessKeyRequest;
      output: {};
    };
    sdk: {
      input: UpdateAccessKeyCommandInput;
      output: UpdateAccessKeyCommandOutput;
    };
  };
}
