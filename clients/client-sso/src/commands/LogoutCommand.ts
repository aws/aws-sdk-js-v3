// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LogoutRequest } from "../models/models_0";
import { Logout } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOClientResolvedConfig } from "../SSOClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link LogoutCommand}.
 */
export interface LogoutCommandInput extends LogoutRequest {}
/**
 * @public
 *
 * The output of {@link LogoutCommand}.
 */
export interface LogoutCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the locally stored SSO tokens from the client-side cache and sends an API call to
 *       the IAM Identity Center service to invalidate the corresponding server-side IAM Identity Center sign in
 *       session.</p>
 *          <note>
 *             <p>If a user uses IAM Identity Center to access the AWS CLI, the user’s IAM Identity Center sign in session is
 *         used to obtain an IAM session, as specified in the corresponding IAM Identity Center permission set.
 *         More specifically, IAM Identity Center assumes an IAM role in the target account on behalf of the user,
 *         and the corresponding temporary AWS credentials are returned to the client.</p>
 *             <p>After user logout, any existing IAM role sessions that were created by using IAM Identity Center
 *         permission sets continue based on the duration configured in the permission set.
 *         For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/authconcept.html">User
 *           authentications</a> in the <i>IAM Identity Center User
 *         Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, LogoutCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, LogoutCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * // import type { SSOClientConfig } from "@aws-sdk/client-sso";
 * const config = {}; // type is SSOClientConfig
 * const client = new SSOClient(config);
 * const input = { // LogoutRequest
 *   accessToken: "STRING_VALUE", // required
 * };
 * const command = new LogoutCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param LogoutCommandInput - {@link LogoutCommandInput}
 * @returns {@link LogoutCommandOutput}
 * @see {@link LogoutCommandInput} for command's `input` shape.
 * @see {@link LogoutCommandOutput} for command's `response` shape.
 * @see {@link SSOClientResolvedConfig | config} for SSOClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that a problem occurred with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request is being made too frequently and is more than what the server
 *       can handle.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Indicates that the request is not authorized. This can happen due to an invalid access
 *       token in the request.</p>
 *
 * @throws {@link SSOServiceException}
 * <p>Base exception class for all service exceptions from SSO service.</p>
 *
 *
 * @public
 */
export class LogoutCommand extends $Command
  .classBuilder<
    LogoutCommandInput,
    LogoutCommandOutput,
    SSOClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBPortalService", "Logout", {})
  .n("SSOClient", "LogoutCommand")
  .sc(Logout)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: LogoutRequest;
      output: {};
    };
    sdk: {
      input: LogoutCommandInput;
      output: LogoutCommandOutput;
    };
  };
}
