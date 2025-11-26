// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BCMPricingCalculatorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMPricingCalculatorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  BatchCreateBillScenarioUsageModificationRequest,
  BatchCreateBillScenarioUsageModificationResponse,
} from "../models/models_0";
import { BatchCreateBillScenarioUsageModification } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateBillScenarioUsageModificationCommand}.
 */
export interface BatchCreateBillScenarioUsageModificationCommandInput
  extends BatchCreateBillScenarioUsageModificationRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateBillScenarioUsageModificationCommand}.
 */
export interface BatchCreateBillScenarioUsageModificationCommandOutput
  extends BatchCreateBillScenarioUsageModificationResponse,
    __MetadataBearer {}

/**
 * <p> Create Amazon Web Services service usage that you want to model in a Bill Scenario. </p> <note> <p>The <code>BatchCreateBillScenarioUsageModification</code> operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission <code>bcm-pricing-calculator:CreateBillScenarioUsageModification</code> in your policies.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchCreateBillScenarioUsageModificationCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchCreateBillScenarioUsageModificationCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // BatchCreateBillScenarioUsageModificationRequest
 *   billScenarioId: "STRING_VALUE", // required
 *   usageModifications: [ // BatchCreateBillScenarioUsageModificationEntries // required
 *     { // BatchCreateBillScenarioUsageModificationEntry
 *       serviceCode: "STRING_VALUE", // required
 *       usageType: "STRING_VALUE", // required
 *       operation: "STRING_VALUE", // required
 *       availabilityZone: "STRING_VALUE",
 *       key: "STRING_VALUE", // required
 *       group: "STRING_VALUE",
 *       usageAccountId: "STRING_VALUE", // required
 *       amounts: [ // UsageAmounts
 *         { // UsageAmount
 *           startHour: new Date("TIMESTAMP"), // required
 *           amount: Number("double"), // required
 *         },
 *       ],
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
 * const command = new BatchCreateBillScenarioUsageModificationCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateBillScenarioUsageModificationResponse
 * //   items: [ // BatchCreateBillScenarioUsageModificationItems
 * //     { // BatchCreateBillScenarioUsageModificationItem
 * //       serviceCode: "STRING_VALUE", // required
 * //       usageType: "STRING_VALUE", // required
 * //       operation: "STRING_VALUE", // required
 * //       location: "STRING_VALUE",
 * //       availabilityZone: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       group: "STRING_VALUE",
 * //       usageAccountId: "STRING_VALUE",
 * //       quantities: [ // UsageQuantities
 * //         { // UsageQuantity
 * //           startHour: new Date("TIMESTAMP"),
 * //           unit: "STRING_VALUE",
 * //           amount: Number("double"),
 * //         },
 * //       ],
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
 * //   errors: [ // BatchCreateBillScenarioUsageModificationErrors
 * //     { // BatchCreateBillScenarioUsageModificationError
 * //       key: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "BAD_REQUEST" || "NOT_FOUND" || "CONFLICT" || "INTERNAL_SERVER_ERROR",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateBillScenarioUsageModificationCommandInput - {@link BatchCreateBillScenarioUsageModificationCommandInput}
 * @returns {@link BatchCreateBillScenarioUsageModificationCommandOutput}
 * @see {@link BatchCreateBillScenarioUsageModificationCommandInput} for command's `input` shape.
 * @see {@link BatchCreateBillScenarioUsageModificationCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be processed because of conflict in the current state of the resource. </p>
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
export class BatchCreateBillScenarioUsageModificationCommand extends $Command
  .classBuilder<
    BatchCreateBillScenarioUsageModificationCommandInput,
    BatchCreateBillScenarioUsageModificationCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "BatchCreateBillScenarioUsageModification", {})
  .n("BCMPricingCalculatorClient", "BatchCreateBillScenarioUsageModificationCommand")
  .sc(BatchCreateBillScenarioUsageModification)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateBillScenarioUsageModificationRequest;
      output: BatchCreateBillScenarioUsageModificationResponse;
    };
    sdk: {
      input: BatchCreateBillScenarioUsageModificationCommandInput;
      output: BatchCreateBillScenarioUsageModificationCommandOutput;
    };
  };
}
