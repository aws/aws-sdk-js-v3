// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateAccountsRequest, DisassociateAccountsResponse } from "../models/models_0";
import { DisassociateAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateAccountsCommand}.
 */
export interface DisassociateAccountsCommandInput extends DisassociateAccountsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAccountsCommand}.
 */
export interface DisassociateAccountsCommandOutput extends DisassociateAccountsResponse, __MetadataBearer {}

/**
 * Disassociates member accounts from your organization's management account, removing centralized automation capabilities. Once disassociated, organization rules no longer apply to the member account, and the management account (or delegated administrator) cannot create Automation rules for that account.
 *
 * > **Note:** Only the management account or a delegated administrator can perform this action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, DisassociateAccountsCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, DisassociateAccountsCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // DisassociateAccountsRequest
 *   accountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateAccountsCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateAccountsResponse
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
 * @param DisassociateAccountsCommandInput - {@link DisassociateAccountsCommandInput}
 * @returns {@link DisassociateAccountsCommandOutput}
 * @see {@link DisassociateAccountsCommandInput} for command's `input` shape.
 * @see {@link DisassociateAccountsCommandOutput} for command's `response` shape.
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
export class DisassociateAccountsCommand extends command<DisassociateAccountsCommandInput, DisassociateAccountsCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateAccounts",
  DisassociateAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAccountsRequest;
      output: DisassociateAccountsResponse;
    };
    sdk: {
      input: DisassociateAccountsCommandInput;
      output: DisassociateAccountsCommandOutput;
    };
  };
}
