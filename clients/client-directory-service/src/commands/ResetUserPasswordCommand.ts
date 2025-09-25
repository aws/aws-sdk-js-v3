// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetUserPasswordRequest, ResetUserPasswordResult } from "../models/models_0";
import { ResetUserPassword } from "../schemas/schemas_10_ResetUserPassword";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetUserPasswordCommand}.
 */
export interface ResetUserPasswordCommandInput extends ResetUserPasswordRequest {}
/**
 * @public
 *
 * The output of {@link ResetUserPasswordCommand}.
 */
export interface ResetUserPasswordCommandOutput extends ResetUserPasswordResult, __MetadataBearer {}

/**
 * <p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory. Disabled
 *       users will become enabled and can be authenticated following the API call.</p>
 *          <p>You can reset the password for any user in your directory with the following
 *       exceptions:</p>
 *          <ul>
 *             <li>
 *                <p>For Simple AD, you cannot reset the password for any user that is a member of either
 *           the <b>Domain Admins</b> or <b>Enterprise
 *             Admins</b> group except for the administrator user.</p>
 *             </li>
 *             <li>
 *                <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based
 *           off of the NetBIOS name that you typed when you created your directory. For example, you
 *           cannot reset the password for a user in the <b>Amazon Web Services
 *             Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD
 *           directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration
 *           Guide</i>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ResetUserPasswordCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ResetUserPasswordCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // ResetUserPasswordRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 *   NewPassword: "STRING_VALUE", // required
 * };
 * const command = new ResetUserPasswordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetUserPasswordCommandInput - {@link ResetUserPasswordCommandInput}
 * @returns {@link ResetUserPasswordCommandOutput}
 * @see {@link ResetUserPasswordCommandInput} for command's `input` shape.
 * @see {@link ResetUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *  <p>The new password provided by the user does not meet the password complexity
 *             requirements defined in your directory.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link UserDoesNotExistException} (client fault)
 *  <p>The user provided a username that does not exist in your directory.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class ResetUserPasswordCommand extends $Command
  .classBuilder<
    ResetUserPasswordCommandInput,
    ResetUserPasswordCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "ResetUserPassword", {})
  .n("DirectoryServiceClient", "ResetUserPasswordCommand")
  .sc(ResetUserPassword)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetUserPasswordRequest;
      output: {};
    };
    sdk: {
      input: ResetUserPasswordCommandInput;
      output: ResetUserPasswordCommandOutput;
    };
  };
}
