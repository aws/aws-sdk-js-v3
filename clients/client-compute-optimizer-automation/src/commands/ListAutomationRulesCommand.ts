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
import type { ListAutomationRulesRequest, ListAutomationRulesResponse } from "../models/models_0";
import { ListAutomationRules } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Lists the automation rules that match specified filters. </p>
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
 *  <p> You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal error occurred while processing the request. </p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p> One or more parameter values are not valid. </p>
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
export class ListAutomationRulesCommand extends $Command
  .classBuilder<
    ListAutomationRulesCommandInput,
    ListAutomationRulesCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "ListAutomationRules", {})
  .n("ComputeOptimizerAutomationClient", "ListAutomationRulesCommand")
  .sc(ListAutomationRules)
  .build() {
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
