// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInvitationsRequest, DeleteInvitationsResponse } from "../models/models_2";
import { de_DeleteInvitationsCommand, se_DeleteInvitationsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInvitationsCommand}.
 */
export interface DeleteInvitationsCommandInput extends DeleteInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInvitationsCommand}.
 */
export interface DeleteInvitationsCommandOutput extends DeleteInvitationsResponse, __MetadataBearer {}

/**
 * <p>Deletes invitations received by the Amazon Web Services account to become a member account.</p>
 *          <p>A Security Hub administrator account can use this operation to delete invitations sent to one or more member accounts.</p>
 *          <p>This operation is only used to delete invitations that are sent to member accounts that aren't part of an organization.
 *          Organization accounts don't receive invitations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteInvitationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteInvitationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // DeleteInvitationsRequest
 *   AccountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInvitationsResponse
 * //   UnprocessedAccounts: [ // ResultList
 * //     { // Result
 * //       AccountId: "STRING_VALUE",
 * //       ProcessingResult: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteInvitationsCommandInput - {@link DeleteInvitationsCommandInput}
 * @returns {@link DeleteInvitationsCommandOutput}
 * @see {@link DeleteInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeleteInvitationsCommandOutput} for command's `response` shape.
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
 * @example To delete a custom insight
 * ```javascript
 * // The following example deletes an invitation sent by the Security Hub administrator account to a prospective member account. This operation is used only for invitations sent to accounts that aren't part of an organization. Organization accounts don't receive invitations.
 * const input = {
 *   "AccountIds": [
 *     "123456789012"
 *   ]
 * };
 * const command = new DeleteInvitationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "UnprocessedAccounts": []
 * }
 * *\/
 * // example id: to-delete-a-custom-insight-1675702697204
 * ```
 *
 */
export class DeleteInvitationsCommand extends $Command
  .classBuilder<
    DeleteInvitationsCommandInput,
    DeleteInvitationsCommandOutput,
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
  .s("SecurityHubAPIService", "DeleteInvitations", {})
  .n("SecurityHubClient", "DeleteInvitationsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteInvitationsCommand)
  .de(de_DeleteInvitationsCommand)
  .build() {}
