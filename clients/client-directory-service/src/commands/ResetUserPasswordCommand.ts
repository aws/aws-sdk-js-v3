// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResetUserPasswordRequest, ResetUserPasswordResult } from "../models/models_0";
import { ResetUserPassword$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Resets the password for any user in your Managed Microsoft AD or Simple AD directory. Disabled users will become enabled and can be authenticated following the API call.
 *
 * You can reset the password for any user in your directory with the following exceptions:
 *
 * - For Simple AD, you cannot reset the password for any user that is a member of either the **Domain Admins** or **Enterprise Admins** group except for the administrator user.
 * - For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the **Amazon Web Services Reserved** OU. For more information about the OU structure for an Managed Microsoft AD directory, see [What Gets Created](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html) in the *Directory Service Administration Guide*.
 *
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
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The specified directory is unavailable.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *
 * The new password provided by the user does not meet the password complexity requirements defined in your directory.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link UserDoesNotExistException} (client fault)
 *
 * The user provided a username that does not exist in your directory.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class ResetUserPasswordCommand extends command<ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput>(
  _ep0,
  _mw0,
  "ResetUserPassword",
  ResetUserPassword$
) {
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
