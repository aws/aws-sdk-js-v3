// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MarketplaceAgreementClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceAgreementClient";
import { GetAgreementTermsInput, GetAgreementTermsOutput } from "../models/models_0";
import { de_GetAgreementTermsCommand, se_GetAgreementTermsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAgreementTermsCommand}.
 */
export interface GetAgreementTermsCommandInput extends GetAgreementTermsInput {}
/**
 * @public
 *
 * The output of {@link GetAgreementTermsCommand}.
 */
export interface GetAgreementTermsCommandOutput extends GetAgreementTermsOutput, __MetadataBearer {}

/**
 * <p>Obtains details about the terms in an agreement that you participated in as proposer or
 *          acceptor.</p>
 *          <p>The details include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>TermType</code> – The type of term, such as <code>LegalTerm</code>,
 *                   <code>RenewalTerm</code>, or <code>ConfigurableUpfrontPricingTerm</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TermID</code> – The ID of the particular term, which is common between offer
 *                and agreement.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TermPayload</code> – The key information contained in the term, such as the
 *                EULA for <code>LegalTerm</code> or pricing and dimensions for various pricing terms,
 *                such as <code>ConfigurableUpfrontPricingTerm</code> or
 *                   <code>UsageBasedPricingTerm</code>.</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Configuration</code> – The buyer/acceptor's selection at the time of
 *                agreement creation, such as the number of units purchased for a dimension or setting
 *                the <code>EnableAutoRenew</code> flag.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, GetAgreementTermsCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, GetAgreementTermsCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // GetAgreementTermsInput
 *   agreementId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetAgreementTermsCommand(input);
 * const response = await client.send(command);
 * // { // GetAgreementTermsOutput
 * //   acceptedTerms: [ // AcceptedTermList
 * //     { // AcceptedTerm Union: only one key present
 * //       legalTerm: { // LegalTerm
 * //         type: "STRING_VALUE",
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
 * //         refundPolicy: "STRING_VALUE",
 * //       },
 * //       renewalTerm: { // RenewalTerm
 * //         type: "STRING_VALUE",
 * //         configuration: { // RenewalTermConfiguration
 * //           enableAutoRenew: true || false, // required
 * //         },
 * //       },
 * //       usageBasedPricingTerm: { // UsageBasedPricingTerm
 * //         type: "STRING_VALUE",
 * //         currencyCode: "STRING_VALUE",
 * //         rateCards: [ // UsageBasedRateCardList
 * //           { // UsageBasedRateCardItem
 * //             rateCard: [ // RateCardList
 * //               { // RateCardItem
 * //                 dimensionKey: "STRING_VALUE",
 * //                 price: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       configurableUpfrontPricingTerm: { // ConfigurableUpfrontPricingTerm
 * //         type: "STRING_VALUE",
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
 * //       },
 * //       recurringPaymentTerm: { // RecurringPaymentTerm
 * //         type: "STRING_VALUE",
 * //         currencyCode: "STRING_VALUE",
 * //         billingPeriod: "STRING_VALUE",
 * //         price: "STRING_VALUE",
 * //       },
 * //       validityTerm: { // ValidityTerm
 * //         type: "STRING_VALUE",
 * //         agreementDuration: "STRING_VALUE",
 * //         agreementStartDate: new Date("TIMESTAMP"),
 * //         agreementEndDate: new Date("TIMESTAMP"),
 * //       },
 * //       paymentScheduleTerm: { // PaymentScheduleTerm
 * //         type: "STRING_VALUE",
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
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAgreementTermsCommandInput - {@link GetAgreementTermsCommandInput}
 * @returns {@link GetAgreementTermsCommandOutput}
 * @see {@link GetAgreementTermsCommandInput} for command's `input` shape.
 * @see {@link GetAgreementTermsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetAgreementTermsCommand extends $Command
  .classBuilder<
    GetAgreementTermsCommandInput,
    GetAgreementTermsCommandOutput,
    MarketplaceAgreementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceAgreementClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMPCommerceService_v20200301", "GetAgreementTerms", {})
  .n("MarketplaceAgreementClient", "GetAgreementTermsCommand")
  .f(void 0, void 0)
  .ser(se_GetAgreementTermsCommand)
  .de(de_GetAgreementTermsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgreementTermsInput;
      output: GetAgreementTermsOutput;
    };
    sdk: {
      input: GetAgreementTermsCommandInput;
      output: GetAgreementTermsCommandOutput;
    };
  };
}
