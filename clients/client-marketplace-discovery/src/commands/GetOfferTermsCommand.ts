// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MarketplaceDiscoveryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceDiscoveryClient";
import type { GetOfferTermsInput, GetOfferTermsOutput } from "../models/models_0";
import { GetOfferTerms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOfferTermsCommand}.
 */
export interface GetOfferTermsCommandInput extends GetOfferTermsInput {}
/**
 * @public
 *
 * The output of {@link GetOfferTermsCommand}.
 */
export interface GetOfferTermsCommandOutput extends GetOfferTermsOutput, __MetadataBearer {}

/**
 * <p>Returns the terms attached to an offer, such as pricing terms (usage-based, contract, BYOL, free trial), legal terms, payment schedules, validity terms, support terms, and renewal terms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDiscoveryClient, GetOfferTermsCommand } from "@aws-sdk/client-marketplace-discovery"; // ES Modules import
 * // const { MarketplaceDiscoveryClient, GetOfferTermsCommand } = require("@aws-sdk/client-marketplace-discovery"); // CommonJS import
 * // import type { MarketplaceDiscoveryClientConfig } from "@aws-sdk/client-marketplace-discovery";
 * const config = {}; // type is MarketplaceDiscoveryClientConfig
 * const client = new MarketplaceDiscoveryClient(config);
 * const input = { // GetOfferTermsInput
 *   offerId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetOfferTermsCommand(input);
 * const response = await client.send(command);
 * // { // GetOfferTermsOutput
 * //   offerTerms: [ // OfferTermsList // required
 * //     { // OfferTerm Union: only one key present
 * //       byolPricingTerm: { // ByolPricingTerm
 * //         id: "STRING_VALUE", // required
 * //         type: "ByolPricingTerm" || "ConfigurableUpfrontPricingTerm" || "FixedUpfrontPricingTerm" || "UsageBasedPricingTerm" || "FreeTrialPricingTerm" || "LegalTerm" || "PaymentScheduleTerm" || "RecurringPaymentTerm" || "RenewalTerm" || "SupportTerm" || "ValidityTerm" || "VariablePaymentTerm", // required
 * //       },
 * //       configurableUpfrontPricingTerm: { // ConfigurableUpfrontPricingTerm
 * //         id: "STRING_VALUE", // required
 * //         type: "ByolPricingTerm" || "ConfigurableUpfrontPricingTerm" || "FixedUpfrontPricingTerm" || "UsageBasedPricingTerm" || "FreeTrialPricingTerm" || "LegalTerm" || "PaymentScheduleTerm" || "RecurringPaymentTerm" || "RenewalTerm" || "SupportTerm" || "ValidityTerm" || "VariablePaymentTerm", // required
 * //         currencyCode: "STRING_VALUE", // required
 * //         rateCards: [ // ConfigurableUpfrontRateCardList
 * //           { // ConfigurableUpfrontRateCardItem
 * //             selector: { // Selector
 * //               type: "Duration", // required
 * //               value: "STRING_VALUE", // required
 * //             },
 * //             constraints: { // Constraints
 * //               multipleDimensionSelection: "Allowed" || "Disallowed", // required
 * //               quantityConfiguration: "Allowed" || "Disallowed", // required
 * //             },
 * //             rateCard: [ // RateCardList // required
 * //               { // RateCardItem
 * //                 dimensionKey: "STRING_VALUE", // required
 * //                 displayName: "STRING_VALUE", // required
 * //                 description: "STRING_VALUE",
 * //                 dimensionLabels: [ // DimensionLabelList
 * //                   { // DimensionLabel
 * //                     labelType: "Region" || "SagemakerOption", // required
 * //                     labelValue: "STRING_VALUE", // required
 * //                     displayName: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 unit: "STRING_VALUE", // required
 * //                 price: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       fixedUpfrontPricingTerm: { // FixedUpfrontPricingTerm
 * //         id: "STRING_VALUE", // required
 * //         type: "ByolPricingTerm" || "ConfigurableUpfrontPricingTerm" || "FixedUpfrontPricingTerm" || "UsageBasedPricingTerm" || "FreeTrialPricingTerm" || "LegalTerm" || "PaymentScheduleTerm" || "RecurringPaymentTerm" || "RenewalTerm" || "SupportTerm" || "ValidityTerm" || "VariablePaymentTerm", // required
 * //         currencyCode: "STRING_VALUE", // required
 * //         duration: "STRING_VALUE",
 * //         price: "STRING_VALUE", // required
 * //         grants: [ // GrantList // required
 * //           { // GrantItem
 * //             dimensionKey: "STRING_VALUE", // required
 * //             displayName: "STRING_VALUE", // required
 * //             description: "STRING_VALUE",
 * //             dimensionLabels: [
 * //               {
 * //                 labelType: "Region" || "SagemakerOption", // required
 * //                 labelValue: "STRING_VALUE", // required
 * //                 displayName: "STRING_VALUE",
 * //               },
 * //             ],
 * //             unit: "STRING_VALUE", // required
 * //             maxQuantity: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       freeTrialPricingTerm: { // FreeTrialPricingTerm
 * //         id: "STRING_VALUE", // required
 * //         type: "ByolPricingTerm" || "ConfigurableUpfrontPricingTerm" || "FixedUpfrontPricingTerm" || "UsageBasedPricingTerm" || "FreeTrialPricingTerm" || "LegalTerm" || "PaymentScheduleTerm" || "RecurringPaymentTerm" || "RenewalTerm" || "SupportTerm" || "ValidityTerm" || "VariablePaymentTerm", // required
 * //         duration: "STRING_VALUE",
 * //         grants: [ // required
 * //           {
 * //             dimensionKey: "STRING_VALUE", // required
 * //             displayName: "STRING_VALUE", // required
 * //             description: "STRING_VALUE",
 * //             dimensionLabels: [
 * //               {
 * //                 labelType: "Region" || "SagemakerOption", // required
 * //                 labelValue: "STRING_VALUE", // required
 * //                 displayName: "STRING_VALUE",
 * //               },
 * //             ],
 * //             unit: "STRING_VALUE", // required
 * //             maxQuantity: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       legalTerm: { // LegalTerm
 * //         id: "STRING_VALUE", // required
 * //         type: "ByolPricingTerm" || "ConfigurableUpfrontPricingTerm" || "FixedUpfrontPricingTerm" || "UsageBasedPricingTerm" || "FreeTrialPricingTerm" || "LegalTerm" || "PaymentScheduleTerm" || "RecurringPaymentTerm" || "RenewalTerm" || "SupportTerm" || "ValidityTerm" || "VariablePaymentTerm", // required
 * //         documents: [ // DocumentList // required
 * //           { // DocumentItem
 * //             type: "CustomEula" || "CustomDsa" || "EnterpriseEula" || "StandardEula" || "StandardDsa", // required
 * //             url: "STRING_VALUE", // required
 * //             version: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       paymentScheduleTerm: { // PaymentScheduleTerm
 * //         id: "STRING_VALUE", // required
 * //         type: "ByolPricingTerm" || "ConfigurableUpfrontPricingTerm" || "FixedUpfrontPricingTerm" || "UsageBasedPricingTerm" || "FreeTrialPricingTerm" || "LegalTerm" || "PaymentScheduleTerm" || "RecurringPaymentTerm" || "RenewalTerm" || "SupportTerm" || "ValidityTerm" || "VariablePaymentTerm", // required
 * //         currencyCode: "STRING_VALUE", // required
 * //         schedule: [ // ScheduleList // required
 * //           { // ScheduleItem
 * //             chargeDate: new Date("TIMESTAMP"), // required
 * //             chargeAmount: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       recurringPaymentTerm: { // RecurringPaymentTerm
 * //         id: "STRING_VALUE", // required
 * //         type: "ByolPricingTerm" || "ConfigurableUpfrontPricingTerm" || "FixedUpfrontPricingTerm" || "UsageBasedPricingTerm" || "FreeTrialPricingTerm" || "LegalTerm" || "PaymentScheduleTerm" || "RecurringPaymentTerm" || "RenewalTerm" || "SupportTerm" || "ValidityTerm" || "VariablePaymentTerm", // required
 * //         currencyCode: "STRING_VALUE", // required
 * //         billingPeriod: "Monthly", // required
 * //         price: "STRING_VALUE", // required
 * //       },
 * //       renewalTerm: { // RenewalTerm
 * //         id: "STRING_VALUE", // required
 * //         type: "ByolPricingTerm" || "ConfigurableUpfrontPricingTerm" || "FixedUpfrontPricingTerm" || "UsageBasedPricingTerm" || "FreeTrialPricingTerm" || "LegalTerm" || "PaymentScheduleTerm" || "RecurringPaymentTerm" || "RenewalTerm" || "SupportTerm" || "ValidityTerm" || "VariablePaymentTerm", // required
 * //       },
 * //       supportTerm: { // SupportTerm
 * //         id: "STRING_VALUE", // required
 * //         type: "ByolPricingTerm" || "ConfigurableUpfrontPricingTerm" || "FixedUpfrontPricingTerm" || "UsageBasedPricingTerm" || "FreeTrialPricingTerm" || "LegalTerm" || "PaymentScheduleTerm" || "RecurringPaymentTerm" || "RenewalTerm" || "SupportTerm" || "ValidityTerm" || "VariablePaymentTerm", // required
 * //         refundPolicy: "STRING_VALUE", // required
 * //       },
 * //       usageBasedPricingTerm: { // UsageBasedPricingTerm
 * //         id: "STRING_VALUE", // required
 * //         type: "ByolPricingTerm" || "ConfigurableUpfrontPricingTerm" || "FixedUpfrontPricingTerm" || "UsageBasedPricingTerm" || "FreeTrialPricingTerm" || "LegalTerm" || "PaymentScheduleTerm" || "RecurringPaymentTerm" || "RenewalTerm" || "SupportTerm" || "ValidityTerm" || "VariablePaymentTerm", // required
 * //         currencyCode: "STRING_VALUE", // required
 * //         rateCards: [ // UsageBasedRateCardList // required
 * //           { // UsageBasedRateCardItem
 * //             rateCard: [ // required
 * //               {
 * //                 dimensionKey: "STRING_VALUE", // required
 * //                 displayName: "STRING_VALUE", // required
 * //                 description: "STRING_VALUE",
 * //                 dimensionLabels: [
 * //                   {
 * //                     labelType: "Region" || "SagemakerOption", // required
 * //                     labelValue: "STRING_VALUE", // required
 * //                     displayName: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 unit: "STRING_VALUE", // required
 * //                 price: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       validityTerm: { // ValidityTerm
 * //         id: "STRING_VALUE", // required
 * //         type: "ByolPricingTerm" || "ConfigurableUpfrontPricingTerm" || "FixedUpfrontPricingTerm" || "UsageBasedPricingTerm" || "FreeTrialPricingTerm" || "LegalTerm" || "PaymentScheduleTerm" || "RecurringPaymentTerm" || "RenewalTerm" || "SupportTerm" || "ValidityTerm" || "VariablePaymentTerm", // required
 * //         agreementDuration: "STRING_VALUE",
 * //         agreementEndDate: new Date("TIMESTAMP"),
 * //         agreementStartDate: new Date("TIMESTAMP"),
 * //       },
 * //       variablePaymentTerm: { // VariablePaymentTerm
 * //         id: "STRING_VALUE", // required
 * //         type: "ByolPricingTerm" || "ConfigurableUpfrontPricingTerm" || "FixedUpfrontPricingTerm" || "UsageBasedPricingTerm" || "FreeTrialPricingTerm" || "LegalTerm" || "PaymentScheduleTerm" || "RecurringPaymentTerm" || "RenewalTerm" || "SupportTerm" || "ValidityTerm" || "VariablePaymentTerm", // required
 * //         currencyCode: "STRING_VALUE", // required
 * //         maxTotalChargeAmount: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOfferTermsCommandInput - {@link GetOfferTermsCommandInput}
 * @returns {@link GetOfferTermsCommandOutput}
 * @see {@link GetOfferTermsCommandInput} for command's `input` shape.
 * @see {@link GetOfferTermsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceDiscoveryClientResolvedConfig | config} for MarketplaceDiscoveryClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceDiscovery service.</p>
 *
 *
 * @example GetOfferTerms for Usage-based ML Model offer
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleUsageBasedId"
 * };
 * const command = new GetOfferTermsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   offerTerms: [
 *     {
 *       usageBasedPricingTerm: {
 *         currencyCode: "USD",
 *         id: "term-sampleUsageBasedPricingId",
 *         rateCards: [
 *           {
 *             rateCard: [
 *               {
 *                 description: "Model inference on the ml.m5.2xlarge instance type, batch mode",
 *                 dimensionKey: "ml.m5.2xlarge.m.i.b",
 *                 dimensionLabels: [
 *                   {
 *                     displayName: "Model Batch Transform",
 *                     labelType: "SagemakerOption",
 *                     labelValue: "Model Batch Transform"
 *                   }
 *                 ],
 *                 displayName: "ml.m5.2xlarge Inference (Batch)",
 *                 price: "2.00000000",
 *                 unit: "HostHrs"
 *               },
 *               {
 *                 description: "Model inference on the ml.m5.2xlarge instance type, real-time mode",
 *                 dimensionKey: "ml.m5.2xlarge.m.i.r",
 *                 dimensionLabels: [
 *                   {
 *                     displayName: "Model Real-Time Inference",
 *                     labelType: "SagemakerOption",
 *                     labelValue: "Model Real-Time Inference"
 *                   }
 *                 ],
 *                 displayName: "ml.m5.2xlarge Inference (Real-Time)",
 *                 price: "2.00000000",
 *                 unit: "HostHrs"
 *               },
 *               {
 *                 description: "Model inference on the ml.m5.large instance type, batch mode",
 *                 dimensionKey: "ml.m5.large.m.i.b",
 *                 dimensionLabels: [
 *                   {
 *                     displayName: "Model Batch Transform",
 *                     labelType: "SagemakerOption",
 *                     labelValue: "Model Batch Transform"
 *                   }
 *                 ],
 *                 displayName: "ml.m5.large Inference (Batch)",
 *                 price: "2.00000000",
 *                 unit: "HostHrs"
 *               },
 *               {
 *                 description: "Model inference on the ml.m5.large instance type, real-time mode",
 *                 dimensionKey: "ml.m5.large.m.i.r",
 *                 dimensionLabels: [
 *                   {
 *                     displayName: "Model Real-Time Inference",
 *                     labelType: "SagemakerOption",
 *                     labelValue: "Model Real-Time Inference"
 *                   }
 *                 ],
 *                 displayName: "ml.m5.large Inference (Real-Time)",
 *                 price: "2.00000000",
 *                 unit: "HostHrs"
 *               }
 *             ]
 *           }
 *         ],
 *         type: "UsageBasedPricingTerm"
 *       }
 *     },
 *     {
 *       fixedUpfrontPricingTerm: {
 *         currencyCode: "USD",
 *         duration: "P365D",
 *         grants: [
 *           {
 *             description: "Model inference on the ml.m5.2xlarge instance type, batch mode",
 *             dimensionKey: "ml.m5.2xlarge.m.i.b",
 *             dimensionLabels: [
 *               {
 *                 displayName: "Model Batch Transform",
 *                 labelType: "SagemakerOption",
 *                 labelValue: "Model Batch Transform"
 *               }
 *             ],
 *             displayName: "ml.m5.2xlarge Inference (Batch)",
 *             maxQuantity: 2147483647,
 *             unit: "HostHrs"
 *           },
 *           {
 *             description: "Model inference on the ml.m5.2xlarge instance type, real-time mode",
 *             dimensionKey: "ml.m5.2xlarge.m.i.r",
 *             dimensionLabels: [
 *               {
 *                 displayName: "Model Real-Time Inference",
 *                 labelType: "SagemakerOption",
 *                 labelValue: "Model Real-Time Inference"
 *               }
 *             ],
 *             displayName: "ml.m5.2xlarge Inference (Real-Time)",
 *             maxQuantity: 2147483647,
 *             unit: "HostHrs"
 *           },
 *           {
 *             description: "Model inference on the ml.m5.large instance type, batch mode",
 *             dimensionKey: "ml.m5.large.m.i.b",
 *             dimensionLabels: [
 *               {
 *                 displayName: "Model Batch Transform",
 *                 labelType: "SagemakerOption",
 *                 labelValue: "Model Batch Transform"
 *               }
 *             ],
 *             displayName: "ml.m5.large Inference (Batch)",
 *             maxQuantity: 2147483647,
 *             unit: "HostHrs"
 *           },
 *           {
 *             description: "Model inference on the ml.m5.large instance type, real-time mode",
 *             dimensionKey: "ml.m5.large.m.i.r",
 *             dimensionLabels: [
 *               {
 *                 displayName: "Model Real-Time Inference",
 *                 labelType: "SagemakerOption",
 *                 labelValue: "Model Real-Time Inference"
 *               }
 *             ],
 *             displayName: "ml.m5.large Inference (Real-Time)",
 *             maxQuantity: 2147483647,
 *             unit: "HostHrs"
 *           }
 *         ],
 *         id: "term-sampleFixedUpfrontPricingId",
 *         price: "0.00000000",
 *         type: "FixedUpfrontPricingTerm"
 *       }
 *     },
 *     {
 *       legalTerm: {
 *         documents: [
 *           {
 *             type: "StandardEula",
 *             url: "https://example.com/legal/standard-eula"
 *           }
 *         ],
 *         id: "term-sampleLegalId",
 *         type: "LegalTerm"
 *       }
 *     },
 *     {
 *       validityTerm: {
 *         agreementDuration: "P2011D",
 *         id: "term-sampleValidityId",
 *         type: "ValidityTerm"
 *       }
 *     },
 *     {
 *       paymentScheduleTerm: {
 *         currencyCode: "USD",
 *         id: "term-samplePaymentScheduleId",
 *         schedule: [
 *           {
 *             chargeAmount: "5.00000000",
 *             chargeDate: "2026-07-15T00:00:00.000Z"
 *           }
 *         ],
 *         type: "PaymentScheduleTerm"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example GetOfferTerms for BYOL offer
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleByolId"
 * };
 * const command = new GetOfferTermsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   offerTerms: [
 *     {
 *       byolPricingTerm: {
 *         id: "term-byol-001",
 *         type: "ByolPricingTerm"
 *       }
 *     },
 *     {
 *       legalTerm: {
 *         documents: [
 *           {
 *             type: "CustomEula",
 *             url: "https://example.com/eula"
 *           }
 *         ],
 *         id: "term-legal-003",
 *         type: "LegalTerm"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example GetOfferTerms for configurable upfront pricing
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleConfigUpfrontId"
 * };
 * const command = new GetOfferTermsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   offerTerms: [
 *     {
 *       configurableUpfrontPricingTerm: {
 *         currencyCode: "USD",
 *         id: "term-config-001",
 *         rateCards: [
 *           {
 *             constraints: {
 *               multipleDimensionSelection: "Allowed",
 *               quantityConfiguration: "Allowed"
 *             },
 *             rateCard: [
 *               {
 *                 dimensionKey: "api_calls_us_east_1",
 *                 dimensionLabels: [
 *                   {
 *                     displayName: "US East (N. Virginia)",
 *                     labelType: "Region",
 *                     labelValue: "us-east-1"
 *                   }
 *                 ],
 *                 displayName: "API Calls (US East)",
 *                 price: "0.001",
 *                 unit: "Requests"
 *               },
 *               {
 *                 dimensionKey: "api_calls_us_west_2",
 *                 dimensionLabels: [
 *                   {
 *                     displayName: "US West (Oregon)",
 *                     labelType: "Region",
 *                     labelValue: "us-west-2"
 *                   }
 *                 ],
 *                 displayName: "API Calls (US West)",
 *                 price: "0.001",
 *                 unit: "Requests"
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
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example GetOfferTerms for free trial offer
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleFreeTrialId"
 * };
 * const command = new GetOfferTermsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   offerTerms: [
 *     {
 *       freeTrialPricingTerm: {
 *         duration: "P30D",
 *         grants: [
 *           {
 *             dimensionKey: "ml.m5.large.m.i.r",
 *             dimensionLabels: [
 *               {
 *                 displayName: "Model Real-Time Inference",
 *                 labelType: "SagemakerOption",
 *                 labelValue: "Model Real-Time Inference"
 *               }
 *             ],
 *             displayName: "ml.m5.large Inference (Real-Time)",
 *             maxQuantity: 100,
 *             unit: "HostHrs"
 *           }
 *         ],
 *         id: "term-trial-001",
 *         type: "FreeTrialPricingTerm"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example GetOfferTerms for recurring payment
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleRecurringId"
 * };
 * const command = new GetOfferTermsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   offerTerms: [
 *     {
 *       recurringPaymentTerm: {
 *         billingPeriod: "Monthly",
 *         currencyCode: "USD",
 *         id: "term-recurring-001",
 *         price: "99.00",
 *         type: "RecurringPaymentTerm"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example GetOfferTerms for variable payment
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleVariableId"
 * };
 * const command = new GetOfferTermsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   offerTerms: [
 *     {
 *       variablePaymentTerm: {
 *         currencyCode: "USD",
 *         id: "term-variable-001",
 *         maxTotalChargeAmount: "10000.00",
 *         type: "VariablePaymentTerm"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example GetOfferTerms for renewal term
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleRenewalId"
 * };
 * const command = new GetOfferTermsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   offerTerms: [
 *     {
 *       renewalTerm: {
 *         id: "term-renewal-001",
 *         type: "RenewalTerm"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example GetOfferTerms for support term
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleSupportId"
 * };
 * const command = new GetOfferTermsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   offerTerms: [
 *     {
 *       supportTerm: {
 *         id: "term-support-001",
 *         refundPolicy: "30-day money back guarantee",
 *         type: "SupportTerm"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example GetOfferTerms for validity term with dates
 * ```javascript
 * //
 * const input = {
 *   offerId: "offer-sampleValidityId"
 * };
 * const command = new GetOfferTermsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   offerTerms: [
 *     {
 *       validityTerm: {
 *         agreementDuration: "P365D",
 *         agreementEndDate: "2026-12-31T23:59:59.000Z",
 *         agreementStartDate: "2026-01-01T00:00:00.000Z",
 *         id: "term-validity-001",
 *         type: "ValidityTerm"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetOfferTermsCommand extends $Command
  .classBuilder<
    GetOfferTermsCommandInput,
    GetOfferTermsCommandOutput,
    MarketplaceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMarketplaceDiscovery", "GetOfferTerms", {})
  .n("MarketplaceDiscoveryClient", "GetOfferTermsCommand")
  .sc(GetOfferTerms$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOfferTermsInput;
      output: GetOfferTermsOutput;
    };
    sdk: {
      input: GetOfferTermsCommandInput;
      output: GetOfferTermsCommandOutput;
    };
  };
}
