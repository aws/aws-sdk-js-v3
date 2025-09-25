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
import { ListBillEstimatesRequest, ListBillEstimatesResponse } from "../models/models_0";
import { ListBillEstimates } from "../schemas/schemas_9_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBillEstimatesCommand}.
 */
export interface ListBillEstimatesCommandInput extends ListBillEstimatesRequest {}
/**
 * @public
 *
 * The output of {@link ListBillEstimatesCommand}.
 */
export interface ListBillEstimatesCommandOutput extends ListBillEstimatesResponse, __MetadataBearer {}

/**
 * <p> Lists all bill estimates for the account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, ListBillEstimatesCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, ListBillEstimatesCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // ListBillEstimatesRequest
 *   filters: [ // ListBillEstimatesFilters
 *     { // ListBillEstimatesFilter
 *       name: "STATUS" || "NAME", // required
 *       values: [ // ListBillEstimatesFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       matchOption: "EQUALS" || "STARTS_WITH" || "CONTAINS",
 *     },
 *   ],
 *   createdAtFilter: { // FilterTimestamp
 *     afterTimestamp: new Date("TIMESTAMP"),
 *     beforeTimestamp: new Date("TIMESTAMP"),
 *   },
 *   expiresAtFilter: {
 *     afterTimestamp: new Date("TIMESTAMP"),
 *     beforeTimestamp: new Date("TIMESTAMP"),
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBillEstimatesCommand(input);
 * const response = await client.send(command);
 * // { // ListBillEstimatesResponse
 * //   items: [ // BillEstimateSummaries
 * //     { // BillEstimateSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       status: "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //       billInterval: { // BillInterval
 * //         start: new Date("TIMESTAMP"),
 * //         end: new Date("TIMESTAMP"),
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       expiresAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillEstimatesCommandInput - {@link ListBillEstimatesCommandInput}
 * @returns {@link ListBillEstimatesCommandOutput}
 * @see {@link ListBillEstimatesCommandInput} for command's `input` shape.
 * @see {@link ListBillEstimatesCommandOutput} for command's `response` shape.
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
export class ListBillEstimatesCommand extends $Command
  .classBuilder<
    ListBillEstimatesCommandInput,
    ListBillEstimatesCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "ListBillEstimates", {})
  .n("BCMPricingCalculatorClient", "ListBillEstimatesCommand")
  .sc(ListBillEstimates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillEstimatesRequest;
      output: ListBillEstimatesResponse;
    };
    sdk: {
      input: ListBillEstimatesCommandInput;
      output: ListBillEstimatesCommandOutput;
    };
  };
}
