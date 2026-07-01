// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListQuotesInput, ListQuotesOutput } from "../models/models_0";
import { ListQuotes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListQuotesCommand}.
 */
export interface ListQuotesCommandInput extends ListQuotesInput {}
/**
 * @public
 *
 * The output of {@link ListQuotesCommand}.
 */
export interface ListQuotesCommandOutput extends ListQuotesOutput, __MetadataBearer {}

/**
 * <p>Lists the quotes for your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListQuotesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListQuotesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // ListQuotesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListQuotesCommand(input);
 * const response = await client.send(command);
 * // { // ListQuotesOutput
 * //   Quotes: [ // QuoteSummaryListDefinition
 * //     { // QuoteSummary
 * //       QuoteId: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       QuoteStatus: "CREATED" || "ORDER_SUBMITTED" || "EXPIRED",
 * //       StatusMessage: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       CountryCode: "STRING_VALUE",
 * //       RequestedCapacities: [ // QuoteCapacityList
 * //         { // QuoteCapacity
 * //           QuoteCapacityType: "EC2" || "EBS" || "S3",
 * //           Unit: "STRING_VALUE",
 * //           Quantity: Number("float"),
 * //         },
 * //       ],
 * //       RequestedConstraints: [ // QuoteConstraintList
 * //         { // QuoteConstraint
 * //           QuoteConstraintType: "RACK_MAXIMUM" || "RACK_MAX_POWER_KVA" || "RACK_MAX_WEIGHT_LBS",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RequestedPaymentOptions: [ // PaymentOptionList
 * //         "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT",
 * //       ],
 * //       RequestedPaymentTerms: [ // PaymentTermList
 * //         "THREE_YEARS" || "ONE_YEAR" || "FIVE_YEARS",
 * //       ],
 * //       QuoteOptions: [ // QuoteOptionList
 * //         { // QuoteOption
 * //           QuoteOptionIdentifier: "STRING_VALUE",
 * //           Capacities: [
 * //             {
 * //               QuoteCapacityType: "EC2" || "EBS" || "S3",
 * //               Unit: "STRING_VALUE",
 * //               Quantity: Number("float"),
 * //             },
 * //           ],
 * //           CapacitySummary: { // CapacitySummary
 * //             ExistingCapacities: "<QuoteCapacityList>",
 * //             FinalCapacities: "<QuoteCapacityList>",
 * //             CapacityChange: "<QuoteCapacityList>",
 * //           },
 * //           Specifications: [ // QuoteSpecificationList
 * //             { // QuoteSpecification
 * //               QuoteSpecificationType: "UPDATED_RACK" || "NEW_RACK" || "EXISTING_RACK" || "SERVER",
 * //               ExistingRackSpecificationDetails: { // RackSpecificationDetails
 * //                 RackId: "STRING_VALUE",
 * //                 RackUse: "NETWORKING" || "COMPUTE",
 * //                 RackPowerDrawKva: Number("float"),
 * //                 RackWeightLbs: Number("float"),
 * //                 RackHeightInches: Number("float"),
 * //                 RackWidthInches: Number("float"),
 * //                 RackDepthInches: Number("float"),
 * //                 RackUnitHeight: "HEIGHT_42U" || "HEIGHT_2U" || "HEIGHT_1U",
 * //                 EC2Capacities: [ // EC2CapacityListDefinition
 * //                   { // EC2Capacity
 * //                     Family: "STRING_VALUE",
 * //                     MaxSize: "STRING_VALUE",
 * //                     Quantity: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               FinalRackSpecificationDetails: {
 * //                 RackId: "STRING_VALUE",
 * //                 RackUse: "NETWORKING" || "COMPUTE",
 * //                 RackPowerDrawKva: Number("float"),
 * //                 RackWeightLbs: Number("float"),
 * //                 RackHeightInches: Number("float"),
 * //                 RackWidthInches: Number("float"),
 * //                 RackDepthInches: Number("float"),
 * //                 RackUnitHeight: "HEIGHT_42U" || "HEIGHT_2U" || "HEIGHT_1U",
 * //                 EC2Capacities: [
 * //                   {
 * //                     Family: "STRING_VALUE",
 * //                     MaxSize: "STRING_VALUE",
 * //                     Quantity: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               ServerSpecificationDetails: { // ServerSpecificationDetails
 * //                 ServerPowerDrawKva: Number("float"),
 * //                 ServerWeightLbs: Number("float"),
 * //                 ServerHeightInches: Number("float"),
 * //                 ServerWidthInches: Number("float"),
 * //                 ServerDepthInches: Number("float"),
 * //                 RackUnitHeight: "HEIGHT_42U" || "HEIGHT_2U" || "HEIGHT_1U",
 * //                 EC2Capacities: [
 * //                   {
 * //                     Family: "STRING_VALUE",
 * //                     MaxSize: "STRING_VALUE",
 * //                     Quantity: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //           PricingOptions: [ // PricingOptionList
 * //             { // PricingOption
 * //               PricingType: "SUBSCRIPTION",
 * //               SubscriptionPricingDetails: { // SubscriptionPricingDetails
 * //                 PaymentOption: "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT",
 * //                 PaymentTerm: "THREE_YEARS" || "ONE_YEAR" || "FIVE_YEARS",
 * //                 UpfrontPrice: Number("float"),
 * //                 MonthlyRecurringPrice: Number("float"),
 * //                 Currency: "USD",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       SubmittedOrderId: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       ExpirationDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQuotesCommandInput - {@link ListQuotesCommandInput}
 * @returns {@link ListQuotesCommandOutput}
 * @see {@link ListQuotesCommandInput} for command's `input` shape.
 * @see {@link ListQuotesCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class ListQuotesCommand extends command<ListQuotesCommandInput, ListQuotesCommandOutput>(
  _ep0,
  _mw0,
  "ListQuotes",
  ListQuotes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQuotesInput;
      output: ListQuotesOutput;
    };
    sdk: {
      input: ListQuotesCommandInput;
      output: ListQuotesCommandOutput;
    };
  };
}
