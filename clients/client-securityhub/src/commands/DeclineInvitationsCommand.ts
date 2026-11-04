// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeclineInvitationsRequest, DeclineInvitationsResponse } from "../models/models_2";
import { DeclineInvitations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeclineInvitationsCommand}.
 */
export interface DeclineInvitationsCommandInput extends DeclineInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link DeclineInvitationsCommand}.
 */
export interface DeclineInvitationsCommandOutput extends DeclineInvitationsResponse, __MetadataBearer {}

/**
 * > **Note:** We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see [Managing Security Hub CSPM administrator and member accounts with Organizations](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-accounts-orgs.html) in the *Security Hub CSPM User Guide*.
 *
 * Declines invitations to become a Security Hub CSPM member account.
 *
 * A prospective member account uses this operation to decline an invitation to become a member.
 *
 * Only member accounts that aren't part of an Amazon Web Services organization should use this operation. Organization accounts don't receive invitations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeclineInvitationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeclineInvitationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DeclineInvitationsRequest
 *   AccountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeclineInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // DeclineInvitationsResponse
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
 * @param DeclineInvitationsCommandInput - {@link DeclineInvitationsCommandInput}
 * @returns {@link DeclineInvitationsCommandOutput}
 * @see {@link DeclineInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeclineInvitationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because we can't find the specified resource.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @example To decline invitation to become a member account
 * ```javascript
 * // The following example declines an invitation from the Security Hub administrator account to become a member account. The invited account makes the request.
 * const input = {
 *   AccountIds: [
 *     "123456789012",
 *     "111122223333"
 *   ]
 * };
 * const command = new DeclineInvitationsCommand(input);
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
export class DeclineInvitationsCommand extends command<DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput>(
  _ep0,
  _mw0,
  "DeclineInvitations",
  DeclineInvitations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeclineInvitationsRequest;
      output: DeclineInvitationsResponse;
    };
    sdk: {
      input: DeclineInvitationsCommandInput;
      output: DeclineInvitationsCommandOutput;
    };
  };
}
