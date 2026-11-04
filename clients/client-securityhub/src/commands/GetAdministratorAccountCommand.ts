// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAdministratorAccountRequest, GetAdministratorAccountResponse } from "../models/models_2";
import { GetAdministratorAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAdministratorAccountCommand}.
 */
export interface GetAdministratorAccountCommandInput extends GetAdministratorAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetAdministratorAccountCommand}.
 */
export interface GetAdministratorAccountCommandOutput extends GetAdministratorAccountResponse, __MetadataBearer {}

/**
 * Provides the details for the Security Hub CSPM administrator account for the current member account.
 *
 * Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetAdministratorAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetAdministratorAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = {};
 * const command = new GetAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetAdministratorAccountResponse
 * //   Administrator: { // Invitation
 * //     AccountId: "STRING_VALUE",
 * //     InvitationId: "STRING_VALUE",
 * //     InvitedAt: new Date("TIMESTAMP"),
 * //     MemberStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAdministratorAccountCommandInput - {@link GetAdministratorAccountCommandInput}
 * @returns {@link GetAdministratorAccountCommandOutput}
 * @see {@link GetAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link GetAdministratorAccountCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetAdministratorAccountCommand extends command<GetAdministratorAccountCommandInput, GetAdministratorAccountCommandOutput>(
  _ep0,
  _mw0,
  "GetAdministratorAccount",
  GetAdministratorAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAdministratorAccountResponse;
    };
    sdk: {
      input: GetAdministratorAccountCommandInput;
      output: GetAdministratorAccountCommandOutput;
    };
  };
}
