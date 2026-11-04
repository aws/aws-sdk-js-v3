// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchCreateWorkloadEstimateUsageRequest,
  BatchCreateWorkloadEstimateUsageResponse,
} from "../models/models_0";
import { BatchCreateWorkloadEstimateUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface BatchCreateWorkloadEstimateUsageCommandOutput extends BatchCreateWorkloadEstimateUsageResponse, __MetadataBearer {}

/**
 * Create Amazon Web Services service usage that you want to model in a Workload Estimate.
 *
 * > **Note:** The `BatchCreateWorkloadEstimateUsage` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:CreateWorkloadEstimateUsage` in your policies.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchCreateWorkloadEstimateUsageCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchCreateWorkloadEstimateUsageCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
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
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *
 * The requested data is currently unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause you to exceed your service quota.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input provided fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link BCMPricingCalculatorServiceException}
 *
 * Base exception class for all service exceptions from BCMPricingCalculator service.
 *
 * @public
 */
export class BatchCreateWorkloadEstimateUsageCommand extends command<BatchCreateWorkloadEstimateUsageCommandInput, BatchCreateWorkloadEstimateUsageCommandOutput>(
  _ep0,
  _mw0,
  "BatchCreateWorkloadEstimateUsage",
  BatchCreateWorkloadEstimateUsage$
) {
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
