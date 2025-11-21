// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ComputeOptimizerAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComputeOptimizerAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAutomationRuleRequest, UpdateAutomationRuleResponse } from "../models/models_0";
import { UpdateAutomationRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAutomationRuleCommand}.
 */
export interface UpdateAutomationRuleCommandInput extends UpdateAutomationRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAutomationRuleCommand}.
 */
export interface UpdateAutomationRuleCommandOutput extends UpdateAutomationRuleResponse, __MetadataBearer {}

/**
 * <p> Updates an existing automation rule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, UpdateAutomationRuleCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, UpdateAutomationRuleCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // UpdateAutomationRuleRequest
 *   ruleArn: "STRING_VALUE", // required
 *   ruleRevision: Number("long"), // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   ruleType: "OrganizationRule" || "AccountRule",
 *   organizationConfiguration: { // OrganizationConfiguration
 *     ruleApplyOrder: "BeforeAccountRules" || "AfterAccountRules",
 *     accountIds: [ // OrganizationConfigurationAccountIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   priority: "STRING_VALUE",
 *   recommendedActionTypes: [ // RecommendedActionTypeList
 *     "SnapshotAndDeleteUnattachedEbsVolume" || "UpgradeEbsVolumeType",
 *   ],
 *   criteria: { // Criteria
 *     region: [ // StringCriteriaConditionList
 *       { // StringCriteriaCondition
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 *         values: [ // StringCriteriaValues
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     resourceArn: [
 *       {
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 *         values: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     ebsVolumeType: [
 *       {
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 *         values: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     ebsVolumeSizeInGib: [ // IntegerCriteriaConditionList
 *       { // IntegerCriteriaCondition
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 *         values: [ // IntegerList
 *           Number("int"),
 *         ],
 *       },
 *     ],
 *     estimatedMonthlySavings: [ // DoubleCriteriaConditionList
 *       { // DoubleCriteriaCondition
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 *         values: [ // DoubleList
 *           Number("double"),
 *         ],
 *       },
 *     ],
 *     resourceTag: [ // ResourceTagsCriteriaConditionList
 *       { // ResourceTagsCriteriaCondition
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 *         key: "STRING_VALUE",
 *         values: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     lookBackPeriodInDays: [
 *       {
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 *         values: [
 *           Number("int"),
 *         ],
 *       },
 *     ],
 *     restartNeeded: [
 *       {
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals",
 *         values: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   schedule: { // Schedule
 *     scheduleExpression: "STRING_VALUE",
 *     scheduleExpressionTimezone: "STRING_VALUE",
 *     executionWindowInMinutes: Number("int"),
 *   },
 *   status: "Active" || "Inactive",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateAutomationRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAutomationRuleResponse
 * //   ruleArn: "STRING_VALUE",
 * //   ruleRevision: Number("long"),
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   ruleType: "OrganizationRule" || "AccountRule",
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
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   lastUpdatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateAutomationRuleCommandInput - {@link UpdateAutomationRuleCommandInput}
 * @returns {@link UpdateAutomationRuleCommandOutput}
 * @see {@link UpdateAutomationRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateAutomationRuleCommandOutput} for command's `response` shape.
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
export class UpdateAutomationRuleCommand extends $Command
  .classBuilder<
    UpdateAutomationRuleCommandInput,
    UpdateAutomationRuleCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "UpdateAutomationRule", {})
  .n("ComputeOptimizerAutomationClient", "UpdateAutomationRuleCommand")
  .sc(UpdateAutomationRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAutomationRuleRequest;
      output: UpdateAutomationRuleResponse;
    };
    sdk: {
      input: UpdateAutomationRuleCommandInput;
      output: UpdateAutomationRuleCommandOutput;
    };
  };
}
