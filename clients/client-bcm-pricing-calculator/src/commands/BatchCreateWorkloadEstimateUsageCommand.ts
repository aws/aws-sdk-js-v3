// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BCMPricingCalculatorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMPricingCalculatorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchCreateWorkloadEstimateUsageRequest, BatchCreateWorkloadEstimateUsageResponse } from "../models/models_0";
import {
  de_BatchCreateWorkloadEstimateUsageCommand,
  se_BatchCreateWorkloadEstimateUsageCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateWorkloadEstimateUsageCommand}.
 */
export interface BatchCreateWorkloadEstimateUsageCommandInput extends BatchCreateWorkloadEstimateUsageRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateWorkloadEstimateUsageCommand}.
 */
export interface BatchCreateWorkloadEstimateUsageCommandOutput
  extends BatchCreateWorkloadEstimateUsageResponse,
    __MetadataBearer {}

/**
 * <p>
 *                         Create Amazon Web Services service usage that you want to model in a Workload Estimate.
 *                 </p>
 *          <note>
 *             <p>The <code>BatchCreateWorkloadEstimateUsage</code> operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals,
 *                                 include the permission <code>bcm-pricing-calculator:CreateWorkloadEstimateUsage</code> in your policies.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchCreateWorkloadEstimateUsageCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchCreateWorkloadEstimateUsageCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // BatchCreateWorkloadEstimateUsageRequest
 *   workloadEstimateId: "STRING_VALUE", // required
 *   usage: [ // BatchCreateWorkloadEstimateUsageEntries // required
 *     { // BatchCreateWorkloadEstimateUsageEntry
 *       serviceCode: "STRING_VALUE", // required
 *       usageType: "STRING_VALUE", // required
 *       operation: "STRING_VALUE", // required
 *       key: "STRING_VALUE", // required
 *       group: "STRING_VALUE",
 *       usageAccountId: "STRING_VALUE", // required
 *       amount: Number("double"), // required
 *       historicalUsage: { // HistoricalUsageEntity
 *         serviceCode: "STRING_VALUE", // required
 *         usageType: "STRING_VALUE", // required
 *         operation: "STRING_VALUE", // required
 *         location: "STRING_VALUE",
 *         usageAccountId: "STRING_VALUE", // required
 *         billInterval: { // BillInterval
 *           start: new Date("TIMESTAMP"),
 *           end: new Date("TIMESTAMP"),
 *         },
 *         filterExpression: { // Expression
 *           and: [ // ExpressionList
 *             {
 *               and: [
 *                 "<Expression>",
 *               ],
 *               or: [
 *                 "<Expression>",
 *               ],
 *               not: "<Expression>",
 *               costCategories: { // ExpressionFilter
 *                 key: "STRING_VALUE",
 *                 matchOptions: [ // StringList
 *                   "STRING_VALUE",
 *                 ],
 *                 values: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               dimensions: {
 *                 key: "STRING_VALUE",
 *                 matchOptions: [
 *                   "STRING_VALUE",
 *                 ],
 *                 values: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               tags: {
 *                 key: "STRING_VALUE",
 *                 matchOptions: [
 *                   "STRING_VALUE",
 *                 ],
 *                 values: "<StringList>",
 *               },
 *             },
 *           ],
 *           or: [
 *             "<Expression>",
 *           ],
 *           not: "<Expression>",
 *           costCategories: {
 *             key: "STRING_VALUE",
 *             matchOptions: "<StringList>",
 *             values: "<StringList>",
 *           },
 *           dimensions: {
 *             key: "STRING_VALUE",
 *             matchOptions: "<StringList>",
 *             values: "<StringList>",
 *           },
 *           tags: "<ExpressionFilter>",
 *         },
 *       },
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchCreateWorkloadEstimateUsageCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateWorkloadEstimateUsageResponse
 * //   items: [ // BatchCreateWorkloadEstimateUsageItems
 * //     { // BatchCreateWorkloadEstimateUsageItem
 * //       serviceCode: "STRING_VALUE", // required
 * //       usageType: "STRING_VALUE", // required
 * //       operation: "STRING_VALUE", // required
 * //       location: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       usageAccountId: "STRING_VALUE",
 * //       group: "STRING_VALUE",
 * //       quantity: { // WorkloadEstimateUsageQuantity
 * //         unit: "STRING_VALUE",
 * //         amount: Number("double"),
 * //       },
 * //       cost: Number("double"),
 * //       currency: "USD",
 * //       status: "VALID" || "INVALID" || "STALE",
 * //       historicalUsage: { // HistoricalUsageEntity
 * //         serviceCode: "STRING_VALUE", // required
 * //         usageType: "STRING_VALUE", // required
 * //         operation: "STRING_VALUE", // required
 * //         location: "STRING_VALUE",
 * //         usageAccountId: "STRING_VALUE", // required
 * //         billInterval: { // BillInterval
 * //           start: new Date("TIMESTAMP"),
 * //           end: new Date("TIMESTAMP"),
 * //         },
 * //         filterExpression: { // Expression
 * //           and: [ // ExpressionList
 * //             {
 * //               and: [
 * //                 "<Expression>",
 * //               ],
 * //               or: [
 * //                 "<Expression>",
 * //               ],
 * //               not: "<Expression>",
 * //               costCategories: { // ExpressionFilter
 * //                 key: "STRING_VALUE",
 * //                 matchOptions: [ // StringList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 values: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               dimensions: {
 * //                 key: "STRING_VALUE",
 * //                 matchOptions: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 values: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               tags: {
 * //                 key: "STRING_VALUE",
 * //                 matchOptions: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 values: "<StringList>",
 * //               },
 * //             },
 * //           ],
 * //           or: [
 * //             "<Expression>",
 * //           ],
 * //           not: "<Expression>",
 * //           costCategories: {
 * //             key: "STRING_VALUE",
 * //             matchOptions: "<StringList>",
 * //             values: "<StringList>",
 * //           },
 * //           dimensions: {
 * //             key: "STRING_VALUE",
 * //             matchOptions: "<StringList>",
 * //             values: "<StringList>",
 * //           },
 * //           tags: "<ExpressionFilter>",
 * //         },
 * //       },
 * //       key: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // BatchCreateWorkloadEstimateUsageErrors
 * //     { // BatchCreateWorkloadEstimateUsageError
 * //       key: "STRING_VALUE",
 * //       errorCode: "BAD_REQUEST" || "NOT_FOUND" || "CONFLICT" || "INTERNAL_SERVER_ERROR",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateWorkloadEstimateUsageCommandInput - {@link BatchCreateWorkloadEstimateUsageCommandInput}
 * @returns {@link BatchCreateWorkloadEstimateUsageCommandOutput}
 * @see {@link BatchCreateWorkloadEstimateUsageCommandInput} for command's `input` shape.
 * @see {@link BatchCreateWorkloadEstimateUsageCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>
 *         The request could not be processed because of conflict in the current state of the resource.
 *         </p>
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p>
 *         The requested data is currently unavailable.
 *         </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *         The specified resource was not found.
 *         </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *         The request would cause you to exceed your service quota.
 *         </p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         You do not have sufficient access to perform this action.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *         An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support.
 *         </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *         The request was denied due to request throttling.
 *         </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *         The input provided fails to satisfy the constraints specified by an Amazon Web Services service.
 *         </p>
 *
 * @throws {@link BCMPricingCalculatorServiceException}
 * <p>Base exception class for all service exceptions from BCMPricingCalculator service.</p>
 *
 *
 * @public
 */
export class BatchCreateWorkloadEstimateUsageCommand extends $Command
  .classBuilder<
    BatchCreateWorkloadEstimateUsageCommandInput,
    BatchCreateWorkloadEstimateUsageCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBCMPricingCalculator", "BatchCreateWorkloadEstimateUsage", {})
  .n("BCMPricingCalculatorClient", "BatchCreateWorkloadEstimateUsageCommand")
  .f(void 0, void 0)
  .ser(se_BatchCreateWorkloadEstimateUsageCommand)
  .de(de_BatchCreateWorkloadEstimateUsageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateWorkloadEstimateUsageRequest;
      output: BatchCreateWorkloadEstimateUsageResponse;
    };
    sdk: {
      input: BatchCreateWorkloadEstimateUsageCommandInput;
      output: BatchCreateWorkloadEstimateUsageCommandOutput;
    };
  };
}
