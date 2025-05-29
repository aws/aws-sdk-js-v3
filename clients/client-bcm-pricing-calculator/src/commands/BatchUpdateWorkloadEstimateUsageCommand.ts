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
import { BatchUpdateWorkloadEstimateUsageRequest, BatchUpdateWorkloadEstimateUsageResponse } from "../models/models_0";
import {
  de_BatchUpdateWorkloadEstimateUsageCommand,
  se_BatchUpdateWorkloadEstimateUsageCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateWorkloadEstimateUsageCommand}.
 */
export interface BatchUpdateWorkloadEstimateUsageCommandInput extends BatchUpdateWorkloadEstimateUsageRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateWorkloadEstimateUsageCommand}.
 */
export interface BatchUpdateWorkloadEstimateUsageCommandOutput
  extends BatchUpdateWorkloadEstimateUsageResponse,
    __MetadataBearer {}

/**
 * <p> Update a newly added or existing usage lines. You can update the usage amounts and usage group based on a usage ID and a Workload estimate ID. </p> <note> <p>The <code>BatchUpdateWorkloadEstimateUsage</code> operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission <code>bcm-pricing-calculator:UpdateWorkloadEstimateUsage</code> in your policies.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchUpdateWorkloadEstimateUsageCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchUpdateWorkloadEstimateUsageCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // BatchUpdateWorkloadEstimateUsageRequest
 *   workloadEstimateId: "STRING_VALUE", // required
 *   usage: [ // BatchUpdateWorkloadEstimateUsageEntries // required
 *     { // BatchUpdateWorkloadEstimateUsageEntry
 *       id: "STRING_VALUE", // required
 *       group: "STRING_VALUE",
 *       amount: Number("double"),
 *     },
 *   ],
 * };
 * const command = new BatchUpdateWorkloadEstimateUsageCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateWorkloadEstimateUsageResponse
 * //   items: [ // WorkloadEstimateUsageItems
 * //     { // WorkloadEstimateUsageItem
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
 * //     },
 * //   ],
 * //   errors: [ // BatchUpdateWorkloadEstimateUsageErrors
 * //     { // BatchUpdateWorkloadEstimateUsageError
 * //       id: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "BAD_REQUEST" || "NOT_FOUND" || "CONFLICT" || "INTERNAL_SERVER_ERROR",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateWorkloadEstimateUsageCommandInput - {@link BatchUpdateWorkloadEstimateUsageCommandInput}
 * @returns {@link BatchUpdateWorkloadEstimateUsageCommandOutput}
 * @see {@link BatchUpdateWorkloadEstimateUsageCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateWorkloadEstimateUsageCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p> The requested data is currently unavailable. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource was not found. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The request would cause you to exceed your service quota. </p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input provided fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link BCMPricingCalculatorServiceException}
 * <p>Base exception class for all service exceptions from BCMPricingCalculator service.</p>
 *
 *
 * @public
 */
export class BatchUpdateWorkloadEstimateUsageCommand extends $Command
  .classBuilder<
    BatchUpdateWorkloadEstimateUsageCommandInput,
    BatchUpdateWorkloadEstimateUsageCommandOutput,
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
  .s("AWSBCMPricingCalculator", "BatchUpdateWorkloadEstimateUsage", {})
  .n("BCMPricingCalculatorClient", "BatchUpdateWorkloadEstimateUsageCommand")
  .f(void 0, void 0)
  .ser(se_BatchUpdateWorkloadEstimateUsageCommand)
  .de(de_BatchUpdateWorkloadEstimateUsageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateWorkloadEstimateUsageRequest;
      output: BatchUpdateWorkloadEstimateUsageResponse;
    };
    sdk: {
      input: BatchUpdateWorkloadEstimateUsageCommandInput;
      output: BatchUpdateWorkloadEstimateUsageCommandOutput;
    };
  };
}
