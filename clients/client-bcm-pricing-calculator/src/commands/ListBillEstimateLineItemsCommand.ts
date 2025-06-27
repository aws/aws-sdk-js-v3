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
import { ListBillEstimateLineItemsRequest, ListBillEstimateLineItemsResponse } from "../models/models_0";
import { de_ListBillEstimateLineItemsCommand, se_ListBillEstimateLineItemsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Lists the line items associated with a bill estimate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, ListBillEstimateLineItemsCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, ListBillEstimateLineItemsCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
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
export class ListBillEstimateLineItemsCommand extends $Command
  .classBuilder<
    ListBillEstimateLineItemsCommandInput,
    ListBillEstimateLineItemsCommandOutput,
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
  .s("AWSBCMPricingCalculator", "ListBillEstimateLineItems", {})
  .n("BCMPricingCalculatorClient", "ListBillEstimateLineItemsCommand")
  .f(void 0, void 0)
  .ser(se_ListBillEstimateLineItemsCommand)
  .de(de_ListBillEstimateLineItemsCommand)
  .build() {
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
