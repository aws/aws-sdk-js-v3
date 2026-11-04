// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInvitationsRequest, DeleteInvitationsResponse } from "../models/models_2";
import { DeleteInvitations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see [Managing Security Hub CSPM administrator and member accounts with Organizations](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-accounts-orgs.html) in the *Security Hub CSPM User Guide*.
 *
 * Deletes invitations to become a Security Hub CSPM member account.
 *
 * A Security Hub CSPM administrator account can use this operation to delete invitations sent to one or more prospective member accounts.
 *
 * This operation is only used to delete invitations that are sent to prospective member accounts that aren't part of an Amazon Web Services organization. Organization accounts don't receive invitations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteInvitationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteInvitationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
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
 *
 * Internal server error.
 *
 * @throws {@link InvalidAccessException} (client fault)
 *
 * The account doesn't have permission to perform this action.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because you supplied an invalid or out-of-range value for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account or throttling limits. The error code describes the limit exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because we can't find the specified resource.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @example To delete a custom insight
 * ```javascript
 * // The following example deletes an invitation sent by the Security Hub administrator account to a prospective member account. This operation is used only for invitations sent to accounts that aren't part of an organization. Organization accounts don't receive invitations.
 * const input = {
 *   AccountIds: [
 *     "123456789012"
 *   ]
 * };
 * const command = new DeleteInvitationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   UnprocessedAccounts:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteInvitationsCommand extends command<DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInvitations",
  DeleteInvitations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInvitationsRequest;
      output: DeleteInvitationsResponse;
    };
    sdk: {
      input: DeleteInvitationsCommandInput;
      output: DeleteInvitationsCommandOutput;
    };
  };
}
