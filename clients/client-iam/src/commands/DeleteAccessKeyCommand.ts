// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteAccessKeyRequest } from "../models/models_0";
import { de_DeleteAccessKeyCommand, se_DeleteAccessKeyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessKeyCommand}.
 */
export interface DeleteAccessKeyCommandInput extends DeleteAccessKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessKeyCommand}.
 */
export interface DeleteAccessKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the access key pair associated with the specified IAM user.</p>
 *          <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the Amazon Web Services access key ID signing the request. This operation works for access keys under
 *             the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root
 *             user credentials even if the Amazon Web Services account has no associated users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteAccessKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteAccessKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // DeleteAccessKeyRequest
 *   UserName: "STRING_VALUE",
 *   AccessKeyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessKeyCommandInput - {@link DeleteAccessKeyCommandInput}
 * @returns {@link DeleteAccessKeyCommandOutput}
 * @see {@link DeleteAccessKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
 * @example To delete an access key for an IAM user
 * ```javascript
 * // The following command deletes one access key (access key ID and secret access key) assigned to the IAM user named Bob.
 * const input = {
 *   AccessKeyId: "AKIDPMS9RO4H3FEXAMPLE",
 *   UserName: "Bob"
 * };
 * const command = new DeleteAccessKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAccessKeyCommand extends $Command
  .classBuilder<
    DeleteAccessKeyCommandInput,
    DeleteAccessKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "DeleteAccessKey", {})
  .n("IAMClient", "DeleteAccessKeyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccessKeyCommand)
  .de(de_DeleteAccessKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessKeyRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessKeyCommandInput;
      output: DeleteAccessKeyCommandOutput;
    };
  };
}
