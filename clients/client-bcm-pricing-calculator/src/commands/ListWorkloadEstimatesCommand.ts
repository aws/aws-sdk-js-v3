// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkloadEstimatesRequest, ListWorkloadEstimatesResponse } from "../models/models_0";
import { ListWorkloadEstimates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all workload estimates for the account.
 *
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
 *
 * The requested data is currently unavailable.
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
export class ListWorkloadEstimatesCommand extends command<ListWorkloadEstimatesCommandInput, ListWorkloadEstimatesCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkloadEstimates",
  ListWorkloadEstimates$
) {
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
