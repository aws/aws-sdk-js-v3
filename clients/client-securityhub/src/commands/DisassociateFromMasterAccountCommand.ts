// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateFromMasterAccountRequest, DisassociateFromMasterAccountResponse } from "../models/models_2";
import { DisassociateFromMasterAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateFromMasterAccountCommand}.
 */
export interface DisassociateFromMasterAccountCommandInput extends DisassociateFromMasterAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFromMasterAccountCommand}.
 */
export interface DisassociateFromMasterAccountCommandOutput extends DisassociateFromMasterAccountResponse, __MetadataBearer {}

/**
 * This method is deprecated. Instead, use `DisassociateFromAdministratorAccount`.
 *
 * The Security Hub CSPM console continues to use `DisassociateFromMasterAccount`. It will eventually change to use `DisassociateFromAdministratorAccount`. Any IAM policies that specifically control access to this function must continue to use `DisassociateFromMasterAccount`. You should also add `DisassociateFromAdministratorAccount` to your policies to ensure that the correct permissions are in place after the console begins to use `DisassociateFromAdministratorAccount`.
 *
 * Disassociates the current Security Hub CSPM member account from the associated administrator account.
 *
 * This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.
 *
 * @deprecated This API has been deprecated, use DisassociateFromAdministratorAccount API instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisassociateFromMasterAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisassociateFromMasterAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = {};
 * const command = new DisassociateFromMasterAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateFromMasterAccountCommandInput - {@link DisassociateFromMasterAccountCommandInput}
 * @returns {@link DisassociateFromMasterAccountCommandOutput}
 * @see {@link DisassociateFromMasterAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromMasterAccountCommandOutput} for command's `response` shape.
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
export class DisassociateFromMasterAccountCommand extends command<DisassociateFromMasterAccountCommandInput, DisassociateFromMasterAccountCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateFromMasterAccount",
  DisassociateFromMasterAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisassociateFromMasterAccountCommandInput;
      output: DisassociateFromMasterAccountCommandOutput;
    };
  };
}
