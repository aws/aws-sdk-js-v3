// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetInvitationsCountRequest, GetInvitationsCountResponse } from "../models/models_2";
import { GetInvitationsCount } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInvitationsCountCommand}.
 */
export interface GetInvitationsCountCommandInput extends GetInvitationsCountRequest {}
/**
 * @public
 *
 * The output of {@link GetInvitationsCountCommand}.
 */
export interface GetInvitationsCountCommandOutput extends GetInvitationsCountResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>We recommend using Organizations instead of Security Hub invitations to manage your member accounts.
 *            For information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-accounts-orgs.html">Managing Security Hub administrator and member accounts with Organizations</a>
 *            in the <i>Security Hub User Guide</i>.</p>
 *          </note>
 *          <p>Returns the count of all Security Hub membership invitations that were sent to the
 *          calling member account, not including the currently accepted invitation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetInvitationsCountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetInvitationsCountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = {};
 * const command = new GetInvitationsCountCommand(input);
 * const response = await client.send(command);
 * // { // GetInvitationsCountResponse
 * //   InvitationsCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetInvitationsCountCommandInput - {@link GetInvitationsCountCommandInput}
 * @returns {@link GetInvitationsCountCommandOutput}
 * @see {@link GetInvitationsCountCommandInput} for command's `input` shape.
 * @see {@link GetInvitationsCountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To get a count of membership invitations
 * ```javascript
 * // The following example returns a count of invitations that the Security Hub administrator sent to the current member account, not including the currently accepted invitation.
 *
 *
 * const input = { /* empty *\/ };
 * const command = new GetInvitationsCountCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvitationsCount: 3
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetInvitationsCountCommand extends $Command
  .classBuilder<
    GetInvitationsCountCommandInput,
    GetInvitationsCountCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "GetInvitationsCount", {})
  .n("SecurityHubClient", "GetInvitationsCountCommand")
  .sc(GetInvitationsCount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetInvitationsCountResponse;
    };
    sdk: {
      input: GetInvitationsCountCommandInput;
      output: GetInvitationsCountCommandOutput;
    };
  };
}
