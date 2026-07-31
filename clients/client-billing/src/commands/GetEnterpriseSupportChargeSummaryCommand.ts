// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetEnterpriseSupportChargeSummaryRequest,
  GetEnterpriseSupportChargeSummaryResponse,
} from "../models/models_0";
import { GetEnterpriseSupportChargeSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEnterpriseSupportChargeSummaryCommand}.
 */
export interface GetEnterpriseSupportChargeSummaryCommandInput extends GetEnterpriseSupportChargeSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetEnterpriseSupportChargeSummaryCommand}.
 */
export interface GetEnterpriseSupportChargeSummaryCommandOutput extends GetEnterpriseSupportChargeSummaryResponse, __MetadataBearer {}

/**
 * <p>Returns a summary of Enterprise Support data aggregated across all accounts in the Enterprise Support profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, GetEnterpriseSupportChargeSummaryCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, GetEnterpriseSupportChargeSummaryCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // GetEnterpriseSupportChargeSummaryRequest
 *   billingMonth: "STRING_VALUE", // required
 * };
 * const command = new GetEnterpriseSupportChargeSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetEnterpriseSupportChargeSummaryResponse
 * //   payerAccountId: "STRING_VALUE", // required
 * //   billingMonth: "STRING_VALUE", // required
 * //   billingPeriodStartDate: new Date("TIMESTAMP"), // required
 * //   billingPeriodEndDate: new Date("TIMESTAMP"), // required
 * //   isEstimated: true || false, // required
 * //   billDate: new Date("TIMESTAMP"), // required
 * //   supportCharge: "STRING_VALUE", // required
 * //   totalSupportCharge: "STRING_VALUE", // required
 * //   supportDiscount: "STRING_VALUE", // required
 * //   totalSupportEligibleSpend: "STRING_VALUE", // required
 * //   totalSupportEligibleUsageSpend: "STRING_VALUE", // required
 * //   totalSupportEligibleReservedInstanceSpend: "STRING_VALUE", // required
 * //   totalSupportEligibleSavingsPlanSpend: "STRING_VALUE", // required
 * //   supportChargePercentage: "STRING_VALUE", // required
 * //   supportEffectivePricingPlan: { // PricingPlan
 * //     pricingPlanId: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     startDate: new Date("TIMESTAMP"),
 * //     endDate: new Date("TIMESTAMP"),
 * //     planDiscountPercent: "STRING_VALUE",
 * //     discountAppliesToMinimumCharge: true || false,
 * //     minimumCharge: "STRING_VALUE",
 * //     tiered: "STRING_VALUE",
 * //     tiers: [ // PricingPlanTierList // required
 * //       { // PricingPlanTier
 * //         tierMinimum: "STRING_VALUE", // required
 * //         tierMaximum: "STRING_VALUE",
 * //         baseCharge: "STRING_VALUE", // required
 * //         additionalPercentageOfAggregateCharges: "STRING_VALUE", // required
 * //         aggregateChargesAdjustment: "STRING_VALUE", // required
 * //         incremental: true || false, // required
 * //         increment: "STRING_VALUE",
 * //         incrementCharge: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEnterpriseSupportChargeSummaryCommandInput - {@link GetEnterpriseSupportChargeSummaryCommandInput}
 * @returns {@link GetEnterpriseSupportChargeSummaryCommandOutput}
 * @see {@link GetEnterpriseSupportChargeSummaryCommandInput} for command's `input` shape.
 * @see {@link GetEnterpriseSupportChargeSummaryCommandOutput} for command's `response` shape.
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
export class GetEnterpriseSupportChargeSummaryCommand extends command<GetEnterpriseSupportChargeSummaryCommandInput, GetEnterpriseSupportChargeSummaryCommandOutput>(
  _ep0,
  _mw0,
  "GetEnterpriseSupportChargeSummary",
  GetEnterpriseSupportChargeSummary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnterpriseSupportChargeSummaryRequest;
      output: GetEnterpriseSupportChargeSummaryResponse;
    };
    sdk: {
      input: GetEnterpriseSupportChargeSummaryCommandInput;
      output: GetEnterpriseSupportChargeSummaryCommandOutput;
    };
  };
}
