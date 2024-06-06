// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptAdministratorInvitationRequest, AcceptAdministratorInvitationResponse } from "../models/models_0";
import {
  de_AcceptAdministratorInvitationCommand,
  se_AcceptAdministratorInvitationCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptAdministratorInvitationCommand}.
 */
export interface AcceptAdministratorInvitationCommandInput extends AcceptAdministratorInvitationRequest {}
/**
 * @public
 *
 * The output of {@link AcceptAdministratorInvitationCommand}.
 */
export interface AcceptAdministratorInvitationCommandOutput
  extends AcceptAdministratorInvitationResponse,
    __MetadataBearer {}

/**
 * <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator
 *          account that the invitation was sent from.</p>
 *          <p>This operation is only used by member accounts that are not added through
 *          Organizations.</p>
 *          <p>When the member account accepts the invitation, permission is granted to the administrator
 *          account to view findings generated in the member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, AcceptAdministratorInvitationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, AcceptAdministratorInvitationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // AcceptAdministratorInvitationRequest
 *   AdministratorId: "STRING_VALUE", // required
 *   InvitationId: "STRING_VALUE", // required
 * };
 * const command = new AcceptAdministratorInvitationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptAdministratorInvitationCommandInput - {@link AcceptAdministratorInvitationCommandInput}
 * @returns {@link AcceptAdministratorInvitationCommandOutput}
 * @see {@link AcceptAdministratorInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptAdministratorInvitationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 * @example To accept an invitation be a member account
 * ```javascript
 * // The following example demonstrates how an account can accept an invitation from the Security Hub administrator account to be a member account. This operation is applicable only to member accounts that are not added through AWS Organizations.
 * const input = {
 *   "AdministratorId": "123456789012",
 *   "InvitationId": "7ab938c5d52d7904ad09f9e7c20cc4eb"
 * };
 * const command = new AcceptAdministratorInvitationCommand(input);
 * await client.send(command);
 * // example id: to-accept-an-invitation-be-a-member-account-1674849870467
 * ```
 *
 */
export class AcceptAdministratorInvitationCommand extends $Command
  .classBuilder<
    AcceptAdministratorInvitationCommandInput,
    AcceptAdministratorInvitationCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "AcceptAdministratorInvitation", {})
  .n("SecurityHubClient", "AcceptAdministratorInvitationCommand")
  .f(void 0, void 0)
  .ser(se_AcceptAdministratorInvitationCommand)
  .de(de_AcceptAdministratorInvitationCommand)
  .build() {}
