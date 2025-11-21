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
import { ListRecommendedActionsRequest, ListRecommendedActionsResponse } from "../models/models_0";
import { ListRecommendedActions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendedActionsCommand}.
 */
export interface ListRecommendedActionsCommandInput extends ListRecommendedActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendedActionsCommand}.
 */
export interface ListRecommendedActionsCommandOutput extends ListRecommendedActionsResponse, __MetadataBearer {}

/**
 * <p> Lists the recommended actions based that match specified filters. </p> <note> <p>Management accounts and delegated administrators can retrieve recommended actions that include associated member accounts. You can associate a member account using <code>AssociateAccounts</code>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, ListRecommendedActionsCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, ListRecommendedActionsCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // ListRecommendedActionsRequest
 *   filters: [ // RecommendedActionFilterList
 *     { // RecommendedActionFilter
 *       name: "STRING_VALUE", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRecommendedActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendedActionsResponse
 * //   recommendedActions: [ // RecommendedActions
 * //     { // RecommendedAction
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
 * @param ListRecommendedActionsCommandInput - {@link ListRecommendedActionsCommandInput}
 * @returns {@link ListRecommendedActionsCommandOutput}
 * @see {@link ListRecommendedActionsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendedActionsCommandOutput} for command's `response` shape.
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
export class ListRecommendedActionsCommand extends $Command
  .classBuilder<
    ListRecommendedActionsCommandInput,
    ListRecommendedActionsCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "ListRecommendedActions", {})
  .n("ComputeOptimizerAutomationClient", "ListRecommendedActionsCommand")
  .sc(ListRecommendedActions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendedActionsRequest;
      output: ListRecommendedActionsResponse;
    };
    sdk: {
      input: ListRecommendedActionsCommandInput;
      output: ListRecommendedActionsCommandOutput;
    };
  };
}
