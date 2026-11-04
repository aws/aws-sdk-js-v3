// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAutomationRulesRequest, ListAutomationRulesResponse } from "../models/models_0";
import { ListAutomationRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAutomationRulesCommand}.
 */
export interface ListAutomationRulesCommandInput extends ListAutomationRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListAutomationRulesCommand}.
 */
export interface ListAutomationRulesCommandOutput extends ListAutomationRulesResponse, __MetadataBearer {}

/**
 * Lists the automation rules that match specified filters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, ListAutomationRulesCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, ListAutomationRulesCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // ListAutomationRulesRequest
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAutomationRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomationRulesResponse
 * //   automationRules: [ // AutomationRules
 * //     { // AutomationRule
 * //       ruleArn: "STRING_VALUE",
 * //       ruleId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       ruleType: "OrganizationRule" || "AccountRule",
 * //       ruleRevision: Number("long"),
 * //       accountId: "STRING_VALUE",
 * //       organizationConfiguration: { // OrganizationConfiguration
 * //         ruleApplyOrder: "BeforeAccountRules" || "AfterAccountRules",
 * //         accountIds: [ // OrganizationConfigurationAccountIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       priority: "STRING_VALUE",
 * //       recommendedActionTypes: [ // RecommendedActionTypeList
 * //         "SnapshotAndDeleteUnattachedEbsVolume" || "UpgradeEbsVolumeType",
 * //       ],
 * //       schedule: { // Schedule
 * //         scheduleExpression: "STRING_VALUE",
 * //         scheduleExpressionTimezone: "STRING_VALUE",
 * //         executionWindowInMinutes: Number("int"),
 * //       },
 * //       status: "Active" || "Inactive",
 * //       createdTimestamp: new Date("TIMESTAMP"),
 * //       lastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutomationRulesCommandInput - {@link ListAutomationRulesCommandInput}
 * @returns {@link ListAutomationRulesCommandOutput}
 * @see {@link ListAutomationRulesCommandInput} for command's `input` shape.
 * @see {@link ListAutomationRulesCommandOutput} for command's `response` shape.
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
export class ListAutomationRulesCommand extends command<ListAutomationRulesCommandInput, ListAutomationRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListAutomationRules",
  ListAutomationRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutomationRulesRequest;
      output: ListAutomationRulesResponse;
    };
    sdk: {
      input: ListAutomationRulesCommandInput;
      output: ListAutomationRulesCommandOutput;
    };
  };
}
