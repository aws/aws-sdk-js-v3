// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAgreementRequestTermsInput, GetAgreementRequestTermsOutput } from "../models/models_0";
import { GetAgreementRequestTerms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgreementRequestTermsCommand}.
 */
export interface GetAgreementRequestTermsCommandInput extends GetAgreementRequestTermsInput {}
/**
 * @public
 *
 * The output of {@link GetAgreementRequestTermsCommand}.
 */
export interface GetAgreementRequestTermsCommandOutput extends GetAgreementRequestTermsOutput, __MetadataBearer {}

/**
 * <p>Retrieves the terms proposed for an agreement request, such as pricing, legal, and renewal terms. The acceptor, or the management account or a delegated administrator of the acceptor's AWS organization, can call this operation. This operation is similar to <code>GetAgreementTerms</code>, but it takes an <code>agreementRequestId</code> instead of an <code>agreementId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, GetAgreementRequestTermsCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, GetAgreementRequestTermsCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // GetAgreementRequestTermsInput
 *   agreementRequestId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetAgreementRequestTermsCommand(input);
 * const response = await client.send(command);
 * // { // GetAgreementRequestTermsOutput
 * //   terms: [ // AgreementRequestTermList // required
 * //     { // AgreementRequestTerm Union: only one key present
 * //       legalTerm: { // LegalTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         documents: [ // DocumentList
 * //           { // DocumentItem
 * //             type: "STRING_VALUE",
 * //             url: "STRING_VALUE",
 * //             version: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       supportTerm: { // SupportTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         refundPolicy: "STRING_VALUE",
 * //       },
 * //       renewalTerm: { // RenewalTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         configuration: { // RenewalTermConfiguration
 * //           enableAutoRenew: true || false, // required
 * //         },
 * //         lockoutPeriod: "STRING_VALUE",
 * //         maxRenewals: Number("int"),
 * //         adjustmentDeadline: "STRING_VALUE",
 * //         priceIncrease: { // PriceIncrease Union: only one key present
 * //           fixedPercentage: { // FixedPercentage
 * //             value: "STRING_VALUE",
 * //           },
 * //           percentageRange: { // PercentageRange
 * //             minValue: "STRING_VALUE",
 * //             maxValue: "STRING_VALUE",
 * //             defaultValue: "STRING_VALUE",
 * //           },
 * //         },
 * //         termTemplates: [ // TermTemplateList
 * //           { // TermTemplate Union: only one key present
 * //             paymentScheduleTermTemplate: { // PaymentScheduleTermTemplate
 * //               schedule: [ // PaymentScheduleEntryList
 * //                 { // PaymentScheduleEntry
 * //                   chargeDateOffset: "STRING_VALUE",
 * //                   chargePercentage: "STRING_VALUE",
 * //                   dayOfMonth: Number("int"),
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       usageBasedPricingTerm: { // UsageBasedPricingTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         currencyCode: "STRING_VALUE",
 * //         rateCards: [ // UsageBasedRateCardList
 * //           { // UsageBasedRateCardItem
 * //             rateCard: [ // RateCardList
 * //               { // RateCardItem
 * //                 dimensionKey: "STRING_VALUE",
 * //                 price: "STRING_VALUE",
 * //                 regionalPrices: [ // RegionalPriceList
 * //                   { // RegionalPrice
 * //                     region: "STRING_VALUE", // required
 * //                     price: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       configurableUpfrontPricingTerm: { // ConfigurableUpfrontPricingTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         currencyCode: "STRING_VALUE",
 * //         rateCards: [ // ConfigurableUpfrontRateCardList
 * //           { // ConfigurableUpfrontRateCardItem
 * //             selector: { // Selector
 * //               type: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //             constraints: { // Constraints
 * //               multipleDimensionSelection: "STRING_VALUE",
 * //               quantityConfiguration: "STRING_VALUE",
 * //             },
 * //             rateCard: [
 * //               {
 * //                 dimensionKey: "STRING_VALUE",
 * //                 price: "STRING_VALUE",
 * //                 regionalPrices: [
 * //                   {
 * //                     region: "STRING_VALUE", // required
 * //                     price: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         configuration: { // ConfigurableUpfrontPricingTermConfiguration
 * //           selectorValue: "STRING_VALUE", // required
 * //           dimensions: [ // DimensionList // required
 * //             { // Dimension
 * //               dimensionKey: "STRING_VALUE", // required
 * //               dimensionValue: Number("int"), // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       byolPricingTerm: { // ByolPricingTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //       },
 * //       recurringPaymentTerm: { // RecurringPaymentTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         currencyCode: "STRING_VALUE",
 * //         billingPeriod: "STRING_VALUE",
 * //         price: "STRING_VALUE",
 * //       },
 * //       validityTerm: { // ValidityTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         agreementDuration: "STRING_VALUE",
 * //         agreementStartDate: new Date("TIMESTAMP"),
 * //         agreementEndDate: new Date("TIMESTAMP"),
 * //       },
 * //       paymentScheduleTerm: { // PaymentScheduleTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         currencyCode: "STRING_VALUE",
 * //         schedule: [ // ScheduleList
 * //           { // ScheduleItem
 * //             chargeDate: new Date("TIMESTAMP"),
 * //             chargeAmount: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       freeTrialPricingTerm: { // FreeTrialPricingTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         duration: "STRING_VALUE",
 * //         grants: [ // GrantList
 * //           { // GrantItem
 * //             dimensionKey: "STRING_VALUE",
 * //             maxQuantity: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       fixedUpfrontPricingTerm: { // FixedUpfrontPricingTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         currencyCode: "STRING_VALUE",
 * //         duration: "STRING_VALUE",
 * //         price: "STRING_VALUE",
 * //         grants: [
 * //           {
 * //             dimensionKey: "STRING_VALUE",
 * //             maxQuantity: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       variablePaymentTerm: { // VariablePaymentTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         currencyCode: "STRING_VALUE",
 * //         maxTotalChargeAmount: "STRING_VALUE",
 * //         configuration: { // VariablePaymentTermConfiguration
 * //           paymentRequestApprovalStrategy: "AUTO_APPROVE_ON_EXPIRATION" || "WAIT_FOR_APPROVAL", // required
 * //           expirationDuration: "STRING_VALUE",
 * //         },
 * //       },
 * //       netPaymentTerm: { // NetPaymentTerm
 * //         type: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         paymentDuePeriod: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAgreementRequestTermsCommandInput - {@link GetAgreementRequestTermsCommandInput}
 * @returns {@link GetAgreementRequestTermsCommandOutput}
 * @see {@link GetAgreementRequestTermsCommandInput} for command's `input` shape.
 * @see {@link GetAgreementRequestTermsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceAgreementServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceAgreement service.</p>
 *
 *
 * @example Get the terms of an agreement request
 * ```javascript
 * //
 * const input = {
 *   agreementRequestId: "ar-EXAMPLE4a539b123d4EXAMPLE78"
 * };
 * const command = new GetAgreementRequestTermsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   terms: [
 *     {
 *       legalTerm: {
 *         documents: [
 *           {
 *             type: "CustomEula",
 *             url: "URL"
 *           }
 *         ],
 *         id: "term-EXAMPLE3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f",
 *         type: "LegalTerm"
 *       }
 *     },
 *     {
 *       configurableUpfrontPricingTerm: {
 *         configuration: {
 *           dimensions: [
 *             {
 *               dimensionKey: "AdminUsers",
 *               dimensionValue: 5
 *             },
 *             {
 *               dimensionKey: "ReadOnlyUsers",
 *               dimensionValue: 10
 *             }
 *           ],
 *           selectorValue: "P12M"
 *         },
 *         currencyCode: "USD",
 *         id: "term-EXAMPLE1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d",
 *         rateCards: [
 *           {
 *             constraints: {
 *               multipleDimensionSelection: "Allowed",
 *               quantityConfiguration: "Allowed"
 *             },
 *             rateCard: [
 *               {
 *                 dimensionKey: "AdminUsers",
 *                 price: "10"
 *               },
 *               {
 *                 dimensionKey: "ReadOnlyUsers",
 *                 price: "5"
 *               }
 *             ],
 *             selector: {
 *               type: "Duration",
 *               value: "P12M"
 *             }
 *           }
 *         ],
 *         type: "ConfigurableUpfrontPricingTerm"
 *       }
 *     },
 *     {
 *       renewalTerm: {
 *         configuration: {
 *           enableAutoRenew: false
 *         },
 *         id: "term-EXAMPLE2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e",
 *         type: "RenewalTerm"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAgreementRequestTermsCommand extends command<GetAgreementRequestTermsCommandInput, GetAgreementRequestTermsCommandOutput>(
  _ep0,
  _mw0,
  "GetAgreementRequestTerms",
  GetAgreementRequestTerms$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgreementRequestTermsInput;
      output: GetAgreementRequestTermsOutput;
    };
    sdk: {
      input: GetAgreementRequestTermsCommandInput;
      output: GetAgreementRequestTermsCommandOutput;
    };
  };
}
