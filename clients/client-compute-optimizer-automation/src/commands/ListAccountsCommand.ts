// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccountsRequest, ListAccountsResponse } from "../models/models_0";
import { ListAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccountsCommand}.
 */
export interface ListAccountsCommandInput extends ListAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountsCommand}.
 */
export interface ListAccountsCommandOutput extends ListAccountsResponse, __MetadataBearer {}

/**
 * Lists the accounts in your organization that are enrolled in Compute Optimizer and whether they have enabled Automation.
 *
 * > **Note:** Only the management account or a delegated administrator can perform this action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, ListAccountsCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, ListAccountsCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // ListAccountsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountsResponse
 * //   accounts: [ // AccountInfoList // required
 * //     { // AccountInfo
 * //       accountId: "STRING_VALUE", // required
 * //       status: "Active" || "Inactive" || "Pending" || "Failed", // required
 * //       organizationRuleMode: "AnyAllowed" || "NoneAllowed", // required
 * //       statusReason: "STRING_VALUE",
 * //       lastUpdatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountsCommandInput - {@link ListAccountsCommandInput}
 * @returns {@link ListAccountsCommandOutput}
 * @see {@link ListAccountsCommandInput} for command's `input` shape.
 * @see {@link ListAccountsCommandOutput} for command's `response` shape.
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
export class ListAccountsCommand extends command<ListAccountsCommandInput, ListAccountsCommandOutput>(
  _ep0,
  _mw0,
  "ListAccounts",
  ListAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountsRequest;
      output: ListAccountsResponse;
    };
    sdk: {
      input: ListAccountsCommandInput;
      output: ListAccountsCommandOutput;
    };
  };
}
