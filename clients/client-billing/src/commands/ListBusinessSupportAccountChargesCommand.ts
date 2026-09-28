// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListBusinessSupportAccountChargesRequest,
  ListBusinessSupportAccountChargesResponse,
} from "../models/models_0";
import { ListBusinessSupportAccountCharges$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBusinessSupportAccountChargesCommand}.
 */
export interface ListBusinessSupportAccountChargesCommandInput extends ListBusinessSupportAccountChargesRequest {}
/**
 * @public
 *
 * The output of {@link ListBusinessSupportAccountChargesCommand}.
 */
export interface ListBusinessSupportAccountChargesCommandOutput extends ListBusinessSupportAccountChargesResponse, __MetadataBearer {}

/**
 * <p>Returns Business Support charges broken down at the linked account level for a given billing month.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, ListBusinessSupportAccountChargesCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, ListBusinessSupportAccountChargesCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // ListBusinessSupportAccountChargesRequest
 *   billingMonth: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBusinessSupportAccountChargesCommand(input);
 * const response = await client.send(command);
 * // { // ListBusinessSupportAccountChargesResponse
 * //   billingMonth: "STRING_VALUE", // required
 * //   isEstimated: true || false, // required
 * //   totalSupportCharge: "STRING_VALUE", // required
 * //   totalSupportEligibleSpend: "STRING_VALUE", // required
 * //   accountCount: Number("int"), // required
 * //   accountCharges: [ // BusinessSupportAccountChargeList // required
 * //     { // BusinessSupportAccountCharge
 * //       accountId: "STRING_VALUE", // required
 * //       supportPlanName: "STRING_VALUE", // required
 * //       totalCharge: "STRING_VALUE", // required
 * //       totalUsageBasis: "STRING_VALUE", // required
 * //       tierCharges: [ // BusinessSupportTierChargeList
 * //         { // BusinessSupportTierCharge
 * //           tierDescription: "STRING_VALUE", // required
 * //           tierRate: "STRING_VALUE", // required
 * //           usageSlice: "STRING_VALUE", // required
 * //           tierCharge: "STRING_VALUE", // required
 * //           chargePeriodStartDate: new Date("TIMESTAMP"),
 * //           chargePeriodEndDate: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       supportDiscount: { // BusinessSupportDiscount
 * //         discountAmount: "STRING_VALUE",
 * //         discountPercentage: "STRING_VALUE",
 * //         discountType: "STRING_VALUE",
 * //         discountSource: "STRING_VALUE",
 * //       },
 * //       supportEligibleSpendByService: [ // BusinessSupportServiceSpendList
 * //         { // BusinessSupportServiceSpend
 * //           contributingService: "STRING_VALUE", // required
 * //           itemType: "STRING_VALUE", // required
 * //           description: "STRING_VALUE",
 * //           chargeAmount: "STRING_VALUE", // required
 * //           currency: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBusinessSupportAccountChargesCommandInput - {@link ListBusinessSupportAccountChargesCommandInput}
 * @returns {@link ListBusinessSupportAccountChargesCommandOutput}
 * @see {@link ListBusinessSupportAccountChargesCommandInput} for command's `input` shape.
 * @see {@link ListBusinessSupportAccountChargesCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ARN in the request doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link BillingServiceException}
 * <p>Base exception class for all service exceptions from Billing service.</p>
 *
 *
 * @public
 */
export class ListBusinessSupportAccountChargesCommand extends command<ListBusinessSupportAccountChargesCommandInput, ListBusinessSupportAccountChargesCommandOutput>(
  _ep0,
  _mw0,
  "ListBusinessSupportAccountCharges",
  ListBusinessSupportAccountCharges$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBusinessSupportAccountChargesRequest;
      output: ListBusinessSupportAccountChargesResponse;
    };
    sdk: {
      input: ListBusinessSupportAccountChargesCommandInput;
      output: ListBusinessSupportAccountChargesCommandOutput;
    };
  };
}
