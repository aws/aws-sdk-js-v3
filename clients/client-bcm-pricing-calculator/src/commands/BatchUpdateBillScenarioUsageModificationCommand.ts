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
import {
  BatchUpdateBillScenarioUsageModificationRequest,
  BatchUpdateBillScenarioUsageModificationResponse,
} from "../models/models_0";
import {
  de_BatchUpdateBillScenarioUsageModificationCommand,
  se_BatchUpdateBillScenarioUsageModificationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateBillScenarioUsageModificationCommand}.
 */
export interface BatchUpdateBillScenarioUsageModificationCommandInput
  extends BatchUpdateBillScenarioUsageModificationRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateBillScenarioUsageModificationCommand}.
 */
export interface BatchUpdateBillScenarioUsageModificationCommandOutput
  extends BatchUpdateBillScenarioUsageModificationResponse,
    __MetadataBearer {}

/**
 * <p>
 *                         Update a newly added or existing usage lines. You can update the usage amounts, usage hour, and usage group based on a usage ID and a Bill scenario ID.
 *                 </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchUpdateBillScenarioUsageModificationCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchUpdateBillScenarioUsageModificationCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
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
 * @public
 */
export class BatchUpdateBillScenarioUsageModificationCommand extends $Command
  .classBuilder<
    BatchUpdateBillScenarioUsageModificationCommandInput,
    BatchUpdateBillScenarioUsageModificationCommandOutput,
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
  .s("AWSBCMPricingCalculator", "BatchUpdateBillScenarioUsageModification", {})
  .n("BCMPricingCalculatorClient", "BatchUpdateBillScenarioUsageModificationCommand")
  .f(void 0, void 0)
  .ser(se_BatchUpdateBillScenarioUsageModificationCommand)
  .de(de_BatchUpdateBillScenarioUsageModificationCommand)
  .build() {
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
