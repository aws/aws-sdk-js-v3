// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchUpdateBillScenarioUsageModificationRequest,
  BatchUpdateBillScenarioUsageModificationResponse,
} from "../models/models_0";
import { BatchUpdateBillScenarioUsageModification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchUpdateBillScenarioUsageModificationCommand}.
 */
export interface BatchUpdateBillScenarioUsageModificationCommandInput extends BatchUpdateBillScenarioUsageModificationRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateBillScenarioUsageModificationCommand}.
 */
export interface BatchUpdateBillScenarioUsageModificationCommandOutput extends BatchUpdateBillScenarioUsageModificationResponse, __MetadataBearer {}

/**
 * Update a newly added or existing usage lines. You can update the usage amounts, usage hour, and usage group based on a usage ID and a Bill scenario ID.
 *
 * > **Note:** The `BatchUpdateBillScenarioUsageModification` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:UpdateBillScenarioUsageModification` in your policies.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchUpdateBillScenarioUsageModificationCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchUpdateBillScenarioUsageModificationCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // BatchUpdateBillScenarioUsageModificationRequest
 *   billScenarioId: "STRING_VALUE", // required
 *   usageModifications: [ // BatchUpdateBillScenarioUsageModificationEntries // required
 *     { // BatchUpdateBillScenarioUsageModificationEntry
 *       id: "STRING_VALUE", // required
 *       group: "STRING_VALUE",
 *       amounts: [ // UsageAmounts
 *         { // UsageAmount
 *           startHour: new Date("TIMESTAMP"), // required
 *           amount: Number("double"), // required
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchUpdateBillScenarioUsageModificationCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateBillScenarioUsageModificationResponse
 * //   items: [ // BillScenarioUsageModificationItems
 * //     { // BillScenarioUsageModificationItem
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
 * //     },
 * //   ],
 * //   errors: [ // BatchUpdateBillScenarioUsageModificationErrors
 * //     { // BatchUpdateBillScenarioUsageModificationError
 * //       id: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "BAD_REQUEST" || "NOT_FOUND" || "CONFLICT" || "INTERNAL_SERVER_ERROR",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateBillScenarioUsageModificationCommandInput - {@link BatchUpdateBillScenarioUsageModificationCommandInput}
 * @returns {@link BatchUpdateBillScenarioUsageModificationCommandOutput}
 * @see {@link BatchUpdateBillScenarioUsageModificationCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateBillScenarioUsageModificationCommandOutput} for command's `response` shape.
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
export class BatchUpdateBillScenarioUsageModificationCommand extends command<BatchUpdateBillScenarioUsageModificationCommandInput, BatchUpdateBillScenarioUsageModificationCommandOutput>(
  _ep0,
  _mw0,
  "BatchUpdateBillScenarioUsageModification",
  BatchUpdateBillScenarioUsageModification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateBillScenarioUsageModificationRequest;
      output: BatchUpdateBillScenarioUsageModificationResponse;
    };
    sdk: {
      input: BatchUpdateBillScenarioUsageModificationCommandInput;
      output: BatchUpdateBillScenarioUsageModificationCommandOutput;
    };
  };
}
