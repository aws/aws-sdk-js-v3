// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeclineInvitationsRequest, DeclineInvitationsResponse } from "../models/models_0";
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
 * <p>Declines Amazon Macie membership invitations that were received from specific accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DeclineInvitationsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DeclineInvitationsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // DeclineInvitationsRequest
 *   accountIds: [ // __listOf__string // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeclineInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // DeclineInvitationsResponse
 * //   unprocessedAccounts: [ // __listOfUnprocessedAccount
 * //     { // UnprocessedAccount
 * //       accountId: "STRING_VALUE",
 * //       errorCode: "ClientError" || "InternalError",
 * //       errorMessage: "STRING_VALUE",
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
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
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
