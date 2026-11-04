// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListBillScenarioUsageModificationsRequest,
  ListBillScenarioUsageModificationsResponse,
} from "../models/models_0";
import { ListBillScenarioUsageModifications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBillScenarioUsageModificationsCommand}.
 */
export interface ListBillScenarioUsageModificationsCommandInput extends ListBillScenarioUsageModificationsRequest {}
/**
 * @public
 *
 * The output of {@link ListBillScenarioUsageModificationsCommand}.
 */
export interface ListBillScenarioUsageModificationsCommandOutput extends ListBillScenarioUsageModificationsResponse, __MetadataBearer {}

/**
 * Lists the usage modifications associated with a bill scenario.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, ListBillScenarioUsageModificationsCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, ListBillScenarioUsageModificationsCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // ListBillScenarioUsageModificationsRequest
 *   billScenarioId: "STRING_VALUE", // required
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
 * const command = new ListBillScenarioUsageModificationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillScenarioUsageModificationsResponse
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
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillScenarioUsageModificationsCommandInput - {@link ListBillScenarioUsageModificationsCommandInput}
 * @returns {@link ListBillScenarioUsageModificationsCommandOutput}
 * @see {@link ListBillScenarioUsageModificationsCommandInput} for command's `input` shape.
 * @see {@link ListBillScenarioUsageModificationsCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *
 * The requested data is currently unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
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
export class ListBillScenarioUsageModificationsCommand extends command<ListBillScenarioUsageModificationsCommandInput, ListBillScenarioUsageModificationsCommandOutput>(
  _ep0,
  _mw0,
  "ListBillScenarioUsageModifications",
  ListBillScenarioUsageModifications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillScenarioUsageModificationsRequest;
      output: ListBillScenarioUsageModificationsResponse;
    };
    sdk: {
      input: ListBillScenarioUsageModificationsCommandInput;
      output: ListBillScenarioUsageModificationsCommandOutput;
    };
  };
}
