// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListInvitationsRequest, ListInvitationsResponse } from "../models/models_3";
import { ListInvitations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListInvitationsCommand}.
 */
export interface ListInvitationsCommandInput extends ListInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link ListInvitationsCommand}.
 */
export interface ListInvitationsCommandOutput extends ListInvitationsResponse, __MetadataBearer {}

/**
 * > **Note:** We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see [Managing Security Hub CSPM administrator and member accounts with Organizations](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-accounts-orgs.html) in the *Security Hub CSPM User Guide*.
 *
 * Lists all Security Hub CSPM membership invitations that were sent to the calling account.
 *
 * Only accounts that are managed by invitation can use this operation. Accounts that are managed using the integration with Organizations don't receive invitations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListInvitationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListInvitationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListInvitationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvitationsResponse
 * //   Invitations: [ // InvitationList
 * //     { // Invitation
 * //       AccountId: "STRING_VALUE",
 * //       InvitationId: "STRING_VALUE",
 * //       InvitedAt: new Date("TIMESTAMP"),
 * //       MemberStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInvitationsCommandInput - {@link ListInvitationsCommandInput}
 * @returns {@link ListInvitationsCommandOutput}
 * @see {@link ListInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListInvitationsCommandOutput} for command's `response` shape.
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
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @public
 */
export class ListInvitationsCommand extends command<ListInvitationsCommandInput, ListInvitationsCommandOutput>(
  _ep0,
  _mw0,
  "ListInvitations",
  ListInvitations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInvitationsRequest;
      output: ListInvitationsResponse;
    };
    sdk: {
      input: ListInvitationsCommandInput;
      output: ListInvitationsCommandOutput;
    };
  };
}
