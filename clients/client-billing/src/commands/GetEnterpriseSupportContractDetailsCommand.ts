// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetEnterpriseSupportContractDetailsRequest,
  GetEnterpriseSupportContractDetailsResponse,
} from "../models/models_0";
import { GetEnterpriseSupportContractDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEnterpriseSupportContractDetailsCommand}.
 */
export interface GetEnterpriseSupportContractDetailsCommandInput extends GetEnterpriseSupportContractDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetEnterpriseSupportContractDetailsCommand}.
 */
export interface GetEnterpriseSupportContractDetailsCommandOutput extends GetEnterpriseSupportContractDetailsResponse, __MetadataBearer {}

/**
 * <p>Returns Enterprise Support contract details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, GetEnterpriseSupportContractDetailsCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, GetEnterpriseSupportContractDetailsCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // GetEnterpriseSupportContractDetailsRequest
 *   billingMonth: "STRING_VALUE", // required
 * };
 * const command = new GetEnterpriseSupportContractDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetEnterpriseSupportContractDetailsResponse
 * //   isContractActive: true || false,
 * //   supportAllocationMethod: "STRING_VALUE", // required
 * //   supportReservedInstanceAmortizationStartDate: new Date("TIMESTAMP"),
 * //   supportReservedInstanceTreatmentMethod: "STRING_VALUE",
 * //   supportSavingsPlansAmortizationStartDate: new Date("TIMESTAMP"),
 * //   supportSavingsPlansTreatmentMethod: "STRING_VALUE",
 * //   supportProrateStartDate: new Date("TIMESTAMP"),
 * //   contractPayerAccountIds: [ // ContractAccountList // required
 * //     { // ContractAccount
 * //       accountId: "STRING_VALUE", // required
 * //       isGdn: true || false, // required
 * //     },
 * //   ],
 * //   chargedPayerAccountIds: [ // ChargeAccountList // required
 * //     { // ChargeAccount
 * //       accountId: "STRING_VALUE", // required
 * //       chargePercentage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   additionalSupportCharge: [ // AdditionalChargeList
 * //     { // AdditionalCharge
 * //       description: "STRING_VALUE", // required
 * //       amount: "STRING_VALUE",
 * //       chargeType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   additionalSupportEligibleUsageSpend: [
 * //     {
 * //       description: "STRING_VALUE", // required
 * //       amount: "STRING_VALUE",
 * //       chargeType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   pricingPlans: [ // PricingPlanList // required
 * //     { // PricingPlan
 * //       pricingPlanId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       startDate: new Date("TIMESTAMP"),
 * //       endDate: new Date("TIMESTAMP"),
 * //       planDiscountPercent: "STRING_VALUE",
 * //       discountAppliesToMinimumCharge: true || false,
 * //       minimumCharge: "STRING_VALUE",
 * //       tiered: "STRING_VALUE",
 * //       tiers: [ // PricingPlanTierList // required
 * //         { // PricingPlanTier
 * //           tierMinimum: "STRING_VALUE", // required
 * //           tierMaximum: "STRING_VALUE",
 * //           baseCharge: "STRING_VALUE", // required
 * //           additionalPercentageOfAggregateCharges: "STRING_VALUE", // required
 * //           aggregateChargesAdjustment: "STRING_VALUE", // required
 * //           incremental: true || false, // required
 * //           increment: "STRING_VALUE",
 * //           incrementCharge: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEnterpriseSupportContractDetailsCommandInput - {@link GetEnterpriseSupportContractDetailsCommandInput}
 * @returns {@link GetEnterpriseSupportContractDetailsCommandOutput}
 * @see {@link GetEnterpriseSupportContractDetailsCommandInput} for command's `input` shape.
 * @see {@link GetEnterpriseSupportContractDetailsCommandOutput} for command's `response` shape.
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
export class GetEnterpriseSupportContractDetailsCommand extends command<GetEnterpriseSupportContractDetailsCommandInput, GetEnterpriseSupportContractDetailsCommandOutput>(
  _ep0,
  _mw0,
  "GetEnterpriseSupportContractDetails",
  GetEnterpriseSupportContractDetails$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnterpriseSupportContractDetailsRequest;
      output: GetEnterpriseSupportContractDetailsResponse;
    };
    sdk: {
      input: GetEnterpriseSupportContractDetailsCommandInput;
      output: GetEnterpriseSupportContractDetailsCommandOutput;
    };
  };
}
