// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBillEstimateLineItemsRequest, ListBillEstimateLineItemsResponse } from "../models/models_0";
import { ListBillEstimateLineItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBillEstimateLineItemsCommand}.
 */
export interface ListBillEstimateLineItemsCommandInput extends ListBillEstimateLineItemsRequest {}
/**
 * @public
 *
 * The output of {@link ListBillEstimateLineItemsCommand}.
 */
export interface ListBillEstimateLineItemsCommandOutput extends ListBillEstimateLineItemsResponse, __MetadataBearer {}

/**
 * Lists the line items associated with a bill estimate.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, ListBillEstimateLineItemsCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, ListBillEstimateLineItemsCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // ListBillEstimateLineItemsRequest
 *   billEstimateId: "STRING_VALUE", // required
 *   filters: [ // ListBillEstimateLineItemsFilters
 *     { // ListBillEstimateLineItemsFilter
 *       name: "USAGE_ACCOUNT_ID" || "SERVICE_CODE" || "USAGE_TYPE" || "OPERATION" || "LOCATION" || "LINE_ITEM_TYPE", // required
 *       values: [ // ListBillEstimateLineItemsFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       matchOption: "EQUALS" || "STARTS_WITH" || "CONTAINS",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBillEstimateLineItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillEstimateLineItemsResponse
 * //   items: [ // BillEstimateLineItemSummaries
 * //     { // BillEstimateLineItemSummary
 * //       serviceCode: "STRING_VALUE", // required
 * //       usageType: "STRING_VALUE", // required
 * //       operation: "STRING_VALUE", // required
 * //       location: "STRING_VALUE",
 * //       availabilityZone: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       lineItemId: "STRING_VALUE",
 * //       lineItemType: "STRING_VALUE",
 * //       payerAccountId: "STRING_VALUE",
 * //       usageAccountId: "STRING_VALUE",
 * //       estimatedUsageQuantity: { // UsageQuantityResult
 * //         amount: Number("double"),
 * //         unit: "STRING_VALUE",
 * //       },
 * //       estimatedCost: { // CostAmount
 * //         amount: Number("double"),
 * //         currency: "USD",
 * //       },
 * //       historicalUsageQuantity: {
 * //         amount: Number("double"),
 * //         unit: "STRING_VALUE",
 * //       },
 * //       historicalCost: {
 * //         amount: Number("double"),
 * //         currency: "USD",
 * //       },
 * //       savingsPlanArns: [ // SavingsPlanArns
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillEstimateLineItemsCommandInput - {@link ListBillEstimateLineItemsCommandInput}
 * @returns {@link ListBillEstimateLineItemsCommandOutput}
 * @see {@link ListBillEstimateLineItemsCommandInput} for command's `input` shape.
 * @see {@link ListBillEstimateLineItemsCommandOutput} for command's `response` shape.
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
export class ListBillEstimateLineItemsCommand extends command<ListBillEstimateLineItemsCommandInput, ListBillEstimateLineItemsCommandOutput>(
  _ep0,
  _mw0,
  "ListBillEstimateLineItems",
  ListBillEstimateLineItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillEstimateLineItemsRequest;
      output: ListBillEstimateLineItemsResponse;
    };
    sdk: {
      input: ListBillEstimateLineItemsCommandInput;
      output: ListBillEstimateLineItemsCommandOutput;
    };
  };
}
