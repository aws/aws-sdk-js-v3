// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAutomationRuleRequest, UpdateAutomationRuleResponse } from "../models/models_0";
import { UpdateAutomationRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates an existing automation rule.
 *
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
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 *         values: [ // StringCriteriaValues
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     resourceArn: [
 *       {
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 *         values: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     ebsVolumeType: [
 *       {
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 *         values: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     ebsVolumeSizeInGib: [ // IntegerCriteriaConditionList
 *       { // IntegerCriteriaCondition
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 *         values: [ // IntegerList
 *           Number("int"),
 *         ],
 *       },
 *     ],
 *     estimatedMonthlySavings: [ // DoubleCriteriaConditionList
 *       { // DoubleCriteriaCondition
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 *         values: [ // DoubleList
 *           Number("double"),
 *         ],
 *       },
 *     ],
 *     resourceTag: [ // ResourceTagsCriteriaConditionList
 *       { // ResourceTagsCriteriaCondition
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 *         key: "STRING_VALUE",
 *         values: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     lookBackPeriodInDays: [
 *       {
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 *         values: [
 *           Number("int"),
 *         ],
 *       },
 *     ],
 *     restartNeeded: [
 *       {
 *         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
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
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 * //         values: [ // StringCriteriaValues
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     resourceArn: [
 * //       {
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 * //         values: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     ebsVolumeType: [
 * //       {
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 * //         values: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     ebsVolumeSizeInGib: [ // IntegerCriteriaConditionList
 * //       { // IntegerCriteriaCondition
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 * //         values: [ // IntegerList
 * //           Number("int"),
 * //         ],
 * //       },
 * //     ],
 * //     estimatedMonthlySavings: [ // DoubleCriteriaConditionList
 * //       { // DoubleCriteriaCondition
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 * //         values: [ // DoubleList
 * //           Number("double"),
 * //         ],
 * //       },
 * //     ],
 * //     resourceTag: [ // ResourceTagsCriteriaConditionList
 * //       { // ResourceTagsCriteriaCondition
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 * //         key: "STRING_VALUE",
 * //         values: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     lookBackPeriodInDays: [
 * //       {
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
 * //         values: [
 * //           Number("int"),
 * //         ],
 * //       },
 * //     ],
 * //     restartNeeded: [
 * //       {
 * //         comparison: "StringEquals" || "StringNotEquals" || "StringEqualsIgnoreCase" || "StringNotEqualsIgnoreCase" || "StringLike" || "StringNotLike" || "NumericEquals" || "NumericNotEquals" || "NumericLessThan" || "NumericLessThanEquals" || "NumericGreaterThan" || "NumericGreaterThanEquals" || "StringEqualsIfExists" || "StringNotEqualsIfExists" || "StringEqualsIgnoreCaseIfExists" || "StringNotEqualsIgnoreCaseIfExists" || "StringLikeIfExists" || "StringNotLikeIfExists" || "NumericEqualsIfExists" || "NumericNotEqualsIfExists" || "NumericLessThanIfExists" || "NumericLessThanEqualsIfExists" || "NumericGreaterThanIfExists" || "NumericGreaterThanEqualsIfExists",
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
 * @throws {@link OptInRequiredException} (client fault)
 *
 * The account must be opted in to Compute Optimizer Automation before performing this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
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
export class UpdateAutomationRuleCommand extends command<UpdateAutomationRuleCommandInput, UpdateAutomationRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAutomationRule",
  UpdateAutomationRule$
) {
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
