// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateAccountsRequest, AssociateAccountsResponse } from "../models/models_0";
import { AssociateAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateAccountsCommand}.
 */
export interface AssociateAccountsCommandInput extends AssociateAccountsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAccountsCommand}.
 */
export interface AssociateAccountsCommandOutput extends AssociateAccountsResponse, __MetadataBearer {}

/**
 * Associates one or more member accounts with your organization's management account, enabling centralized implementation of optimization actions across those accounts. Once associated, the management account (or a delegated administrator) can apply recommended actions to the member account. When you associate a member account, its organization rule mode is automatically set to "Any allowed," which permits the management account to create Automation rules that automatically apply actions to that account. If the member account has not previously enabled the Automation feature, the association process automatically enables it.
 *
 * > **Note:** Only the management account or a delegated administrator can perform this action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, AssociateAccountsCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, AssociateAccountsCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // AssociateAccountsRequest
 *   accountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AssociateAccountsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAccountsResponse
 * //   accountIds: [ // AccountIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateAccountsCommandInput - {@link AssociateAccountsCommandInput}
 * @returns {@link AssociateAccountsCommandOutput}
 * @see {@link AssociateAccountsCommandInput} for command's `input` shape.
 * @see {@link AssociateAccountsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerAutomationClientResolvedConfig | config} for ComputeOptimizerAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You are not authorized to perform this action.
 *
 * @throws {@link IdempotencyTokenInUseException} (client fault)
 *
 * The specified client token is already in use.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * Exception thrown when the same client token is used with different parameters, indicating a mismatch in idempotent request parameters.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred while processing the request.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link NotManagementAccountException} (client fault)
 *
 * The operation can only be performed by a management account.
 *
 * @throws {@link OptInRequiredException} (client fault)
 *
 * The account must be opted in to Compute Optimizer Automation before performing this action.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ComputeOptimizerAutomationServiceException}
 *
 * Base exception class for all service exceptions from ComputeOptimizerAutomation service.
 *
 * @public
 */
export class AssociateAccountsCommand extends command<AssociateAccountsCommandInput, AssociateAccountsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateAccounts",
  AssociateAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAccountsRequest;
      output: AssociateAccountsResponse;
    };
    sdk: {
      input: AssociateAccountsCommandInput;
      output: AssociateAccountsCommandOutput;
    };
  };
}
