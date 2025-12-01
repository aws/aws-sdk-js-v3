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
import type { ListAutomationRulePreviewRequest, ListAutomationRulePreviewResponse } from "../models/models_0";
import { ListAutomationRulePreview } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAutomationRulePreviewCommand}.
 */
export interface ListAutomationRulePreviewCommandInput extends ListAutomationRulePreviewRequest {}
/**
 * @public
 *
 * The output of {@link ListAutomationRulePreviewCommand}.
 */
export interface ListAutomationRulePreviewCommandOutput extends ListAutomationRulePreviewResponse, __MetadataBearer {}

/**
 * <p>Returns a preview of the recommended actions that match your Automation rule's configuration and criteria. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, ListAutomationRulePreviewCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, ListAutomationRulePreviewCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // ListAutomationRulePreviewRequest
 *   ruleType: "OrganizationRule" || "AccountRule", // required
 *   organizationScope: { // OrganizationScope
 *     accountIds: [ // OrganizationConfigurationAccountIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   recommendedActionTypes: [ // RecommendedActionTypeList // required
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
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAutomationRulePreviewCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomationRulePreviewResponse
 * //   previewResults: [ // PreviewResults
 * //     { // PreviewResult
 * //       recommendedActionId: "STRING_VALUE",
 * //       resourceArn: "STRING_VALUE",
 * //       resourceId: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       resourceType: "EbsVolume",
 * //       lookBackPeriodInDays: Number("int"),
 * //       recommendedActionType: "SnapshotAndDeleteUnattachedEbsVolume" || "UpgradeEbsVolumeType",
 * //       currentResourceSummary: "STRING_VALUE",
 * //       currentResourceDetails: { // ResourceDetails Union: only one key present
 * //         ebsVolume: { // EbsVolume
 * //           configuration: { // EbsVolumeConfiguration
 * //             type: "STRING_VALUE",
 * //             sizeInGib: Number("int"),
 * //             iops: Number("int"),
 * //             throughput: Number("int"),
 * //           },
 * //         },
 * //       },
 * //       recommendedResourceSummary: "STRING_VALUE",
 * //       recommendedResourceDetails: {//  Union: only one key present
 * //         ebsVolume: {
 * //           configuration: {
 * //             type: "STRING_VALUE",
 * //             sizeInGib: Number("int"),
 * //             iops: Number("int"),
 * //             throughput: Number("int"),
 * //           },
 * //         },
 * //       },
 * //       restartNeeded: true || false,
 * //       estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //         currency: "STRING_VALUE", // required
 * //         beforeDiscountSavings: Number("double"), // required
 * //         afterDiscountSavings: Number("double"), // required
 * //         savingsEstimationMode: "BeforeDiscount" || "AfterDiscount", // required
 * //       },
 * //       resourceTags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutomationRulePreviewCommandInput - {@link ListAutomationRulePreviewCommandInput}
 * @returns {@link ListAutomationRulePreviewCommandOutput}
 * @see {@link ListAutomationRulePreviewCommandInput} for command's `input` shape.
 * @see {@link ListAutomationRulePreviewCommandOutput} for command's `response` shape.
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
export class ListAutomationRulePreviewCommand extends $Command
  .classBuilder<
    ListAutomationRulePreviewCommandInput,
    ListAutomationRulePreviewCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "ListAutomationRulePreview", {})
  .n("ComputeOptimizerAutomationClient", "ListAutomationRulePreviewCommand")
  .sc(ListAutomationRulePreview)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutomationRulePreviewRequest;
      output: ListAutomationRulePreviewResponse;
    };
    sdk: {
      input: ListAutomationRulePreviewCommandInput;
      output: ListAutomationRulePreviewCommandOutput;
    };
  };
}
