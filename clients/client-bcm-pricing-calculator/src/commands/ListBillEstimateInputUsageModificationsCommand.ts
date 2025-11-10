// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BCMPricingCalculatorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMPricingCalculatorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListBillEstimateInputUsageModificationsRequest,
  ListBillEstimateInputUsageModificationsResponse,
} from "../models/models_0";
import { ListBillEstimateInputUsageModifications } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBillEstimateInputUsageModificationsCommand}.
 */
export interface ListBillEstimateInputUsageModificationsCommandInput
  extends ListBillEstimateInputUsageModificationsRequest {}
/**
 * @public
 *
 * The output of {@link ListBillEstimateInputUsageModificationsCommand}.
 */
export interface ListBillEstimateInputUsageModificationsCommandOutput
  extends ListBillEstimateInputUsageModificationsResponse,
    __MetadataBearer {}

/**
 * <p> Lists the input usage modifications associated with a bill estimate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, ListBillEstimateInputUsageModificationsCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, ListBillEstimateInputUsageModificationsCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // ListBillEstimateInputUsageModificationsRequest
 *   billEstimateId: "STRING_VALUE", // required
 *   filters: [ // ListUsageFilters
 *     { // ListUsageFilter
 *       name: "USAGE_ACCOUNT_ID" || "SERVICE_CODE" || "USAGE_TYPE" || "OPERATION" || "LOCATION" || "USAGE_GROUP" || "HISTORICAL_USAGE_ACCOUNT_ID" || "HISTORICAL_SERVICE_CODE" || "HISTORICAL_USAGE_TYPE" || "HISTORICAL_OPERATION" || "HISTORICAL_LOCATION", // required
 *       values: [ // ListUsageFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       matchOption: "EQUALS" || "STARTS_WITH" || "CONTAINS",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBillEstimateInputUsageModificationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillEstimateInputUsageModificationsResponse
 * //   items: [ // BillEstimateInputUsageModificationSummaries
 * //     { // BillEstimateInputUsageModificationSummary
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
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillEstimateInputUsageModificationsCommandInput - {@link ListBillEstimateInputUsageModificationsCommandInput}
 * @returns {@link ListBillEstimateInputUsageModificationsCommandOutput}
 * @see {@link ListBillEstimateInputUsageModificationsCommandInput} for command's `input` shape.
 * @see {@link ListBillEstimateInputUsageModificationsCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p> The requested data is currently unavailable. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource was not found. </p>
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
export class ListBillEstimateInputUsageModificationsCommand extends $Command
  .classBuilder<
    ListBillEstimateInputUsageModificationsCommandInput,
    ListBillEstimateInputUsageModificationsCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "ListBillEstimateInputUsageModifications", {})
  .n("BCMPricingCalculatorClient", "ListBillEstimateInputUsageModificationsCommand")
  .sc(ListBillEstimateInputUsageModifications)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillEstimateInputUsageModificationsRequest;
      output: ListBillEstimateInputUsageModificationsResponse;
    };
    sdk: {
      input: ListBillEstimateInputUsageModificationsCommandInput;
      output: ListBillEstimateInputUsageModificationsCommandOutput;
    };
  };
}
