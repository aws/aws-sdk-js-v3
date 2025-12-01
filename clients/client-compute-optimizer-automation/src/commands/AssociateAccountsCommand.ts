// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ComputeOptimizerAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComputeOptimizerAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateAccountsRequest, AssociateAccountsResponse } from "../models/models_0";
import { AssociateAccounts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Associates one or more member accounts with your organization's management account, enabling centralized implementation of optimization actions across those accounts. Once associated, the management account (or a delegated administrator) can apply recommended actions to the member account. When you associate a member account, its organization rule mode is automatically set to "Any allowed," which permits the management account to create Automation rules that automatically apply actions to that account. If the member account has not previously enabled the Automation feature, the association process automatically enables it.</p> <note> <p>Only the management account or a delegated administrator can perform this action.</p> </note>
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
 *  <p> You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link IdempotencyTokenInUseException} (client fault)
 *  <p> The specified client token is already in use. </p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>Exception thrown when the same client token is used with different parameters, indicating a mismatch in idempotent request parameters.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal error occurred while processing the request. </p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p> One or more parameter values are not valid. </p>
 *
 * @throws {@link NotManagementAccountException} (client fault)
 *  <p> The operation can only be performed by a management account. </p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p> The account must be opted in to Compute Optimizer Automation before performing this action. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p> The service is temporarily unavailable. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ComputeOptimizerAutomationServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizerAutomation service.</p>
 *
 *
 * @public
 */
export class AssociateAccountsCommand extends $Command
  .classBuilder<
    AssociateAccountsCommandInput,
    AssociateAccountsCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "AssociateAccounts", {})
  .n("ComputeOptimizerAutomationClient", "AssociateAccountsCommand")
  .sc(AssociateAccounts)
  .build() {
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
