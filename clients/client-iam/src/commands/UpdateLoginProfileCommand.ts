// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateLoginProfileRequest, UpdateLoginProfileRequestFilterSensitiveLog } from "../models/models_1";
import { de_UpdateLoginProfileCommand, se_UpdateLoginProfileCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLoginProfileCommand}.
 */
export interface UpdateLoginProfileCommandInput extends UpdateLoginProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLoginProfileCommand}.
 */
export interface UpdateLoginProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services
 *             API, or the <b>Users</b> page in the IAM console to change
 *             the password for any IAM user. Use <a>ChangePassword</a> to change your own
 *             password in the <b>My Security Credentials</b> page in the
 *             Amazon Web Services Management Console.</p>
 *          <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // UpdateLoginProfileRequest
 *   UserName: "STRING_VALUE", // required
 *   Password: "STRING_VALUE",
 *   PasswordResetRequired: true || false,
 * };
 * const command = new UpdateLoginProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLoginProfileCommandInput - {@link UpdateLoginProfileCommandInput}
 * @returns {@link UpdateLoginProfileCommandOutput}
 * @see {@link UpdateLoginProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateLoginProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link PasswordPolicyViolationException} (client fault)
 *  <p>The request was rejected because the provided password did not meet the requirements
 *       imposed by the account password policy.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 * @example To change the password for an IAM user
 * ```javascript
 * // The following command creates or changes the password for the IAM user named Bob.
 * const input = {
 *   "Password": "SomeKindOfPassword123!@#",
 *   "UserName": "Bob"
 * };
 * const command = new UpdateLoginProfileCommand(input);
 * await client.send(command);
 * // example id: 036d9498-ecdb-4ed6-a8d8-366c383d1487
 * ```
 *
 */
export class UpdateLoginProfileCommand extends $Command
  .classBuilder<
    UpdateLoginProfileCommandInput,
    UpdateLoginProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "UpdateLoginProfile", {})
  .n("IAMClient", "UpdateLoginProfileCommand")
  .f(UpdateLoginProfileRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateLoginProfileCommand)
  .de(de_UpdateLoginProfileCommand)
  .build() {}
