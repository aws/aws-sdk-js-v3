// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisableOrganizationAdminAccountRequest,
  DisableOrganizationAdminAccountResponse,
} from "../models/models_2";
import { DisableOrganizationAdminAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableOrganizationAdminAccountCommand}.
 */
export interface DisableOrganizationAdminAccountCommandInput extends DisableOrganizationAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisableOrganizationAdminAccountCommand}.
 */
export interface DisableOrganizationAdminAccountCommandOutput extends DisableOrganizationAdminAccountResponse, __MetadataBearer {}

/**
 * Disables a Security Hub CSPM administrator account. Can only be called by the organization management account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableOrganizationAdminAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableOrganizationAdminAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DisableOrganizationAdminAccountRequest
 *   AdminAccountId: "STRING_VALUE", // required
 *   Feature: "SecurityHub" || "SecurityHubV2",
 * };
 * const command = new DisableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableOrganizationAdminAccountCommandInput - {@link DisableOrganizationAdminAccountCommandInput}
 * @returns {@link DisableOrganizationAdminAccountCommandOutput}
 * @see {@link DisableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisableOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the action specified in the request.
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
 * @example To remove a Security Hub administrator account
 * ```javascript
 * // The following example removes the Security Hub administrator account in the Region from which the operation was executed. This operation doesn't remove the delegated administrator account in AWS Organizations.
 * const input = {
 *   AdminAccountId: "123456789012"
 * };
 * const command = new DisableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisableOrganizationAdminAccountCommand extends command<DisableOrganizationAdminAccountCommandInput, DisableOrganizationAdminAccountCommandOutput>(
  _ep0,
  _mw0,
  "DisableOrganizationAdminAccount",
  DisableOrganizationAdminAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableOrganizationAdminAccountRequest;
      output: {};
    };
    sdk: {
      input: DisableOrganizationAdminAccountCommandInput;
      output: DisableOrganizationAdminAccountCommandOutput;
    };
  };
}
