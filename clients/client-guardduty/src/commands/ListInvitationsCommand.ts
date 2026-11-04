// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListInvitationsRequest, ListInvitationsResponse } from "../models/models_1";
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
 * Lists all GuardDuty membership invitations that were sent to the current Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListInvitationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListInvitationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListInvitationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvitationsResponse
 * //   Invitations: [ // Invitations
 * //     { // Invitation
 * //       AccountId: "STRING_VALUE",
 * //       InvitationId: "STRING_VALUE",
 * //       RelationshipStatus: "STRING_VALUE",
 * //       InvitedAt: "STRING_VALUE",
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
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * A bad request exception object.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal server error exception object.
 *
 * @throws {@link GuardDutyServiceException}
 *
 * Base exception class for all service exceptions from GuardDuty service.
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
