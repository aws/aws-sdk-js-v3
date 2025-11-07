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
import { ListWorkloadEstimatesRequest, ListWorkloadEstimatesResponse } from "../models/models_0";
import { ListWorkloadEstimates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkloadEstimatesCommand}.
 */
export interface ListWorkloadEstimatesCommandInput extends ListWorkloadEstimatesRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkloadEstimatesCommand}.
 */
export interface ListWorkloadEstimatesCommandOutput extends ListWorkloadEstimatesResponse, __MetadataBearer {}

/**
 * <p> Lists all workload estimates for the account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, ListWorkloadEstimatesCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, ListWorkloadEstimatesCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // ListWorkloadEstimatesRequest
 *   createdAtFilter: { // FilterTimestamp
 *     afterTimestamp: new Date("TIMESTAMP"),
 *     beforeTimestamp: new Date("TIMESTAMP"),
 *   },
 *   expiresAtFilter: {
 *     afterTimestamp: new Date("TIMESTAMP"),
 *     beforeTimestamp: new Date("TIMESTAMP"),
 *   },
 *   filters: [ // ListWorkloadEstimatesFilters
 *     { // ListWorkloadEstimatesFilter
 *       name: "STATUS" || "NAME", // required
 *       values: [ // ListWorkloadEstimatesFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       matchOption: "EQUALS" || "STARTS_WITH" || "CONTAINS",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWorkloadEstimatesCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkloadEstimatesResponse
 * //   items: [ // WorkloadEstimateSummaries
 * //     { // WorkloadEstimateSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       expiresAt: new Date("TIMESTAMP"),
 * //       rateType: "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS",
 * //       rateTimestamp: new Date("TIMESTAMP"),
 * //       status: "UPDATING" || "VALID" || "INVALID" || "ACTION_NEEDED",
 * //       totalCost: Number("double"),
 * //       costCurrency: "USD",
 * //       failureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkloadEstimatesCommandInput - {@link ListWorkloadEstimatesCommandInput}
 * @returns {@link ListWorkloadEstimatesCommandOutput}
 * @see {@link ListWorkloadEstimatesCommandInput} for command's `input` shape.
 * @see {@link ListWorkloadEstimatesCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p> The requested data is currently unavailable. </p>
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
export class ListWorkloadEstimatesCommand extends $Command
  .classBuilder<
    ListWorkloadEstimatesCommandInput,
    ListWorkloadEstimatesCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "ListWorkloadEstimates", {})
  .n("BCMPricingCalculatorClient", "ListWorkloadEstimatesCommand")
  .sc(ListWorkloadEstimates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkloadEstimatesRequest;
      output: ListWorkloadEstimatesResponse;
    };
    sdk: {
      input: ListWorkloadEstimatesCommandInput;
      output: ListWorkloadEstimatesCommandOutput;
    };
  };
}
