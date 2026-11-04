// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateFromAdministratorAccountRequest,
  DisassociateFromAdministratorAccountResponse,
} from "../models/models_2";
import { DisassociateFromAdministratorAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateFromAdministratorAccountCommand}.
 */
export interface DisassociateFromAdministratorAccountCommandInput extends DisassociateFromAdministratorAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFromAdministratorAccountCommand}.
 */
export interface DisassociateFromAdministratorAccountCommandOutput extends DisassociateFromAdministratorAccountResponse, __MetadataBearer {}

/**
 * Disassociates the current Security Hub CSPM member account from the associated administrator account.
 *
 * This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisassociateFromAdministratorAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisassociateFromAdministratorAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = {};
 * const command = new DisassociateFromAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateFromAdministratorAccountCommandInput - {@link DisassociateFromAdministratorAccountCommandInput}
 * @returns {@link DisassociateFromAdministratorAccountCommandOutput}
 * @see {@link DisassociateFromAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromAdministratorAccountCommandOutput} for command's `response` shape.
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
 * @example To disassociate requesting account from administrator account
 * ```javascript
 * // The following example dissociates the requesting account from its associated administrator account.
 * const input = { /* empty *\/ };
 * const command = new DisassociateFromAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateFromAdministratorAccountCommand extends command<DisassociateFromAdministratorAccountCommandInput, DisassociateFromAdministratorAccountCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateFromAdministratorAccount",
  DisassociateFromAdministratorAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisassociateFromAdministratorAccountCommandInput;
      output: DisassociateFromAdministratorAccountCommandOutput;
    };
  };
}
