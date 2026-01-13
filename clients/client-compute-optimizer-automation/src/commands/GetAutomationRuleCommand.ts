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
import type { GetAutomationRuleRequest, GetAutomationRuleResponse } from "../models/models_0";
import { GetAutomationRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAutomationRuleCommand}.
 */
export interface GetAutomationRuleCommandInput extends GetAutomationRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetAutomationRuleCommand}.
 */
export interface GetAutomationRuleCommandOutput extends GetAutomationRuleResponse, __MetadataBearer {}

/**
 * <p> Retrieves details about a specific automation rule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, GetAutomationRuleCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, GetAutomationRuleCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // GetAutomationRuleRequest
 *   ruleArn: "STRING_VALUE", // required
 * };
 * const command = new GetAutomationRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetAutomationRuleResponse
 * //   ruleArn: "STRING_VALUE",
 * //   ruleId: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   ruleType: "OrganizationRule" || "AccountRule",
 * //   ruleRevision: Number("long"),
 * //   accountId: "STRING_VALUE",
 * //   organizationConfiguration: { // OrganizationConfiguration
 * //     ruleApplyOrder: "BeforeAccountRules" || "AfterAccountRules",
 * //     accountIds: [ // OrganizationConfigurationAccountIds
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   priority: "STRING_VALUE",
 * //   recommendedActionTypes: [ // RecommendedActionTypeList
 * //     "SnapshotAndDeleteUnattachedEbsVolume" || "UpgradeEbsVolumeType",
 * //   ],
 * //   criteria: { // Criteria
 * //     region: [ // StringCriteriaConditionList
 * //       { // StringCriteriaCondition
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 * //         values: [ // StringCriteriaValues
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     resourceArn: [
 * //       {
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 * //         values: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     ebsVolumeType: [
 * //       {
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 * //         values: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     ebsVolumeSizeInGib: [ // IntegerCriteriaConditionList
 * //       { // IntegerCriteriaCondition
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 * //         values: [ // IntegerList
 * //           Number("int"),
 * //         ],
 * //       },
 * //     ],
 * //     estimatedMonthlySavings: [ // DoubleCriteriaConditionList
 * //       { // DoubleCriteriaCondition
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 * //         values: [ // DoubleList
 * //           Number("double"),
 * //         ],
 * //       },
 * //     ],
 * //     resourceTag: [ // ResourceTagsCriteriaConditionList
 * //       { // ResourceTagsCriteriaCondition
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 * //         key: "STRING_VALUE",
 * //         values: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     lookBackPeriodInDays: [
 * //       {
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 * //         values: [
 * //           Number("int"),
 * //         ],
 * //       },
 * //     ],
 * //     restartNeeded: [
 * //       {
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 * //         values: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   schedule: { // Schedule
 * //     scheduleExpression: "STRING_VALUE",
 * //     scheduleExpressionTimezone: "STRING_VALUE",
 * //     executionWindowInMinutes: Number("int"),
 * //   },
 * //   status: "Active" || "Inactive",
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   lastUpdatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAutomationRuleCommandInput - {@link GetAutomationRuleCommandInput}
 * @returns {@link GetAutomationRuleCommandOutput}
 * @see {@link GetAutomationRuleCommandInput} for command's `input` shape.
 * @see {@link GetAutomationRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource was not found. </p>
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
export class GetAutomationRuleCommand extends $Command
  .classBuilder<
    GetAutomationRuleCommandInput,
    GetAutomationRuleCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "GetAutomationRule", {})
  .n("ComputeOptimizerAutomationClient", "GetAutomationRuleCommand")
  .sc(GetAutomationRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAutomationRuleRequest;
      output: GetAutomationRuleResponse;
    };
    sdk: {
      input: GetAutomationRuleCommandInput;
      output: GetAutomationRuleCommandOutput;
    };
  };
}
