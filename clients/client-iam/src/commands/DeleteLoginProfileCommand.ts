// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteLoginProfileRequest } from "../models/models_0";
import { de_DeleteLoginProfileCommand, se_DeleteLoginProfileCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLoginProfileCommand}.
 */
export interface DeleteLoginProfileCommandInput extends DeleteLoginProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLoginProfileCommand}.
 */
export interface DeleteLoginProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the password for the specified IAM user, For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_admin-change-user.html">Managing
 *                 passwords for IAM users</a>.</p>
 *          <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b>
 *             page in the IAM console to delete a password for any IAM user. You can use <a>ChangePassword</a> to update, but not delete, your own password in the
 *                 <b>My Security Credentials</b> page in the
 *             Amazon Web Services Management Console.</p>
 *          <important>
 *             <p>Deleting a user's password does not prevent a user from accessing Amazon Web Services through
 *                 the command line interface or the API. To prevent all user access, you must also
 *                 either make any access keys inactive or delete them. For more information about
 *                 making keys inactive or deleting them, see <a>UpdateAccessKey</a> and
 *                     <a>DeleteAccessKey</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // DeleteLoginProfileRequest
 *   UserName: "STRING_VALUE",
 * };
 * const command = new DeleteLoginProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLoginProfileCommandInput - {@link DeleteLoginProfileCommandInput}
 * @returns {@link DeleteLoginProfileCommandOutput}
 * @see {@link DeleteLoginProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link EntityTemporarilyUnmodifiableException} (client fault)
 *  <p>The request was rejected because it referenced an entity that is temporarily unmodifiable,
 *       such as a user name that was deleted and then recreated. The error indicates that the request
 *       is likely to succeed if you try again after waiting several minutes. The error message
 *       describes the entity.</p>
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
 * @public
 * @example To delete a password for an IAM user
 * ```javascript
 * // The following command deletes the password for the IAM user named Bob.
 * const input = {
 *   "UserName": "Bob"
 * };
 * const command = new DeleteLoginProfileCommand(input);
 * await client.send(command);
 * // example id: 1fe57059-fc73-42e2-b992-517b7d573b5c
 * ```
 *
 */
export class DeleteLoginProfileCommand extends $Command
  .classBuilder<
    DeleteLoginProfileCommandInput,
    DeleteLoginProfileCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "DeleteLoginProfile", {})
  .n("IAMClient", "DeleteLoginProfileCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLoginProfileCommand)
  .de(de_DeleteLoginProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLoginProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteLoginProfileCommandInput;
      output: DeleteLoginProfileCommandOutput;
    };
  };
}
