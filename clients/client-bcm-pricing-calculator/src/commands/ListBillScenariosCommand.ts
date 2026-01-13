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
import type { ListBillScenariosRequest, ListBillScenariosResponse } from "../models/models_0";
import { ListBillScenarios$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBillScenariosCommand}.
 */
export interface ListBillScenariosCommandInput extends ListBillScenariosRequest {}
/**
 * @public
 *
 * The output of {@link ListBillScenariosCommand}.
 */
export interface ListBillScenariosCommandOutput extends ListBillScenariosResponse, __MetadataBearer {}

/**
 * <p> Lists all bill scenarios for the account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, ListBillScenariosCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, ListBillScenariosCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // ListBillScenariosRequest
 *   filters: [ // ListBillScenariosFilters
 *     { // ListBillScenariosFilter
 *       name: "STATUS" || "NAME" || "GROUP_SHARING_PREFERENCE" || "COST_CATEGORY_ARN", // required
 *       values: [ // ListBillScenariosFilterValues // required
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
 * const command = new ListBillScenariosCommand(input);
 * const response = await client.send(command);
 * // { // ListBillScenariosResponse
 * //   items: [ // BillScenarioSummaries
 * //     { // BillScenarioSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       billInterval: { // BillInterval
 * //         start: new Date("TIMESTAMP"),
 * //         end: new Date("TIMESTAMP"),
 * //       },
 * //       status: "READY" || "LOCKED" || "FAILED" || "STALE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       expiresAt: new Date("TIMESTAMP"),
 * //       failureMessage: "STRING_VALUE",
 * //       groupSharingPreference: "OPEN" || "PRIORITIZED" || "RESTRICTED",
 * //       costCategoryGroupSharingPreferenceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillScenariosCommandInput - {@link ListBillScenariosCommandInput}
 * @returns {@link ListBillScenariosCommandOutput}
 * @see {@link ListBillScenariosCommandInput} for command's `input` shape.
 * @see {@link ListBillScenariosCommandOutput} for command's `response` shape.
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
export class ListBillScenariosCommand extends $Command
  .classBuilder<
    ListBillScenariosCommandInput,
    ListBillScenariosCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "ListBillScenarios", {})
  .n("BCMPricingCalculatorClient", "ListBillScenariosCommand")
  .sc(ListBillScenarios$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillScenariosRequest;
      output: ListBillScenariosResponse;
    };
    sdk: {
      input: ListBillScenariosCommandInput;
      output: ListBillScenariosCommandOutput;
    };
  };
}
