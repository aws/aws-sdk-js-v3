// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateQuoteInput, CreateQuoteOutput } from "../models/models_0";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { CreateQuote$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQuoteCommand}.
 */
export interface CreateQuoteCommandInput extends CreateQuoteInput {}
/**
 * @public
 *
 * The output of {@link CreateQuoteCommand}.
 */
export interface CreateQuoteCommandOutput extends CreateQuoteOutput, __MetadataBearer {}

/**
 * <p>Creates a quote for an Outpost. A quote provides pricing and configuration options based
 *       on the requested capacity. You can optionally associate the quote with an existing Outpost or
 *       create a standalone quote by specifying only the country code and requested capacities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CreateQuoteCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CreateQuoteCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // CreateQuoteInput
 *   OutpostIdentifier: "STRING_VALUE",
 *   CountryCode: "STRING_VALUE", // required
 *   RequestedCapacities: [ // QuoteCapacityList // required
 *     { // QuoteCapacity
 *       QuoteCapacityType: "EC2" || "EBS" || "S3",
 *       Unit: "STRING_VALUE",
 *       Quantity: Number("float"),
 *     },
 *   ],
 *   RequestedConstraints: [ // QuoteConstraintList
 *     { // QuoteConstraint
 *       QuoteConstraintType: "RACK_MAXIMUM" || "RACK_MAX_POWER_KVA" || "RACK_MAX_WEIGHT_LBS",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   RequestedPaymentOptions: [ // PaymentOptionList
 *     "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT",
 *   ],
 *   RequestedPaymentTerms: [ // PaymentTermList
 *     "THREE_YEARS" || "ONE_YEAR" || "FIVE_YEARS",
 *   ],
 *   Description: "STRING_VALUE",
 * };
 * const command = new CreateQuoteCommand(input);
 * const response = await client.send(command);
 * // { // CreateQuoteOutput
 * //   Quote: { // Quote
 * //     QuoteId: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //     QuoteStatus: "CREATED" || "ORDER_SUBMITTED" || "EXPIRED",
 * //     StatusMessage: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //     CountryCode: "STRING_VALUE",
 * //     RequestedCapacities: [ // QuoteCapacityList
 * //       { // QuoteCapacity
 * //         QuoteCapacityType: "EC2" || "EBS" || "S3",
 * //         Unit: "STRING_VALUE",
 * //         Quantity: Number("float"),
 * //       },
 * //     ],
 * //     RequestedConstraints: [ // QuoteConstraintList
 * //       { // QuoteConstraint
 * //         QuoteConstraintType: "RACK_MAXIMUM" || "RACK_MAX_POWER_KVA" || "RACK_MAX_WEIGHT_LBS",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RequestedPaymentOptions: [ // PaymentOptionList
 * //       "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT",
 * //     ],
 * //     RequestedPaymentTerms: [ // PaymentTermList
 * //       "THREE_YEARS" || "ONE_YEAR" || "FIVE_YEARS",
 * //     ],
 * //     QuoteOptions: [ // QuoteOptionList
 * //       { // QuoteOption
 * //         QuoteOptionIdentifier: "STRING_VALUE",
 * //         Capacities: [
 * //           {
 * //             QuoteCapacityType: "EC2" || "EBS" || "S3",
 * //             Unit: "STRING_VALUE",
 * //             Quantity: Number("float"),
 * //           },
 * //         ],
 * //         CapacitySummary: { // CapacitySummary
 * //           ExistingCapacities: "<QuoteCapacityList>",
 * //           FinalCapacities: "<QuoteCapacityList>",
 * //           CapacityChange: "<QuoteCapacityList>",
 * //         },
 * //         Specifications: [ // QuoteSpecificationList
 * //           { // QuoteSpecification
 * //             QuoteSpecificationType: "UPDATED_RACK" || "NEW_RACK" || "EXISTING_RACK" || "SERVER",
 * //             ExistingRackSpecificationDetails: { // RackSpecificationDetails
 * //               RackId: "STRING_VALUE",
 * //               RackUse: "NETWORKING" || "COMPUTE",
 * //               RackPowerDrawKva: Number("float"),
 * //               RackWeightLbs: Number("float"),
 * //               RackHeightInches: Number("float"),
 * //               RackWidthInches: Number("float"),
 * //               RackDepthInches: Number("float"),
 * //               RackUnitHeight: "HEIGHT_42U" || "HEIGHT_2U" || "HEIGHT_1U",
 * //               EC2Capacities: [ // EC2CapacityListDefinition
 * //                 { // EC2Capacity
 * //                   Family: "STRING_VALUE",
 * //                   MaxSize: "STRING_VALUE",
 * //                   Quantity: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             FinalRackSpecificationDetails: {
 * //               RackId: "STRING_VALUE",
 * //               RackUse: "NETWORKING" || "COMPUTE",
 * //               RackPowerDrawKva: Number("float"),
 * //               RackWeightLbs: Number("float"),
 * //               RackHeightInches: Number("float"),
 * //               RackWidthInches: Number("float"),
 * //               RackDepthInches: Number("float"),
 * //               RackUnitHeight: "HEIGHT_42U" || "HEIGHT_2U" || "HEIGHT_1U",
 * //               EC2Capacities: [
 * //                 {
 * //                   Family: "STRING_VALUE",
 * //                   MaxSize: "STRING_VALUE",
 * //                   Quantity: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             ServerSpecificationDetails: { // ServerSpecificationDetails
 * //               ServerPowerDrawKva: Number("float"),
 * //               ServerWeightLbs: Number("float"),
 * //               ServerHeightInches: Number("float"),
 * //               ServerWidthInches: Number("float"),
 * //               ServerDepthInches: Number("float"),
 * //               RackUnitHeight: "HEIGHT_42U" || "HEIGHT_2U" || "HEIGHT_1U",
 * //               EC2Capacities: [
 * //                 {
 * //                   Family: "STRING_VALUE",
 * //                   MaxSize: "STRING_VALUE",
 * //                   Quantity: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //         PricingOptions: [ // PricingOptionList
 * //           { // PricingOption
 * //             PricingType: "SUBSCRIPTION",
 * //             SubscriptionPricingDetails: { // SubscriptionPricingDetails
 * //               PaymentOption: "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT",
 * //               PaymentTerm: "THREE_YEARS" || "ONE_YEAR" || "FIVE_YEARS",
 * //               UpfrontPrice: Number("float"),
 * //               MonthlyRecurringPrice: Number("float"),
 * //               Currency: "USD",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     OrderingRequirements: [ // OrderingRequirementList
 * //       { // OrderingRequirement
 * //         StatusMessage: "STRING_VALUE",
 * //         OrderingRequirementType: "OUTPOST_ACTIVE_CHECK_ERROR" || "MAXIMUM_ALLOWED_ORDERS_CHECK_ERROR" || "VALID_ZIP_CODE_CHECK_ERROR" || "RACK_PHYSICAL_PROPERTIES_CHECK_ERROR" || "OPERATING_ADDRESS_EXISTENCE_CHECK_ERROR" || "SHIPPING_ADDRESS_EXISTENCE_CHECK_ERROR" || "COUNTRY_CODE_MISMATCH_CHECK_ERROR" || "OUTPOST_GENERATION_MISMATCH_ERROR" || "UNSUPPORTED" || "OUTPOST_ID_MISSING_ON_QUOTE_ERROR" || "ENTERPRISE_SUPPORT_ERROR" || "SHIPPING_ADDRESS_MISSING_CONTACT_NAME_ERROR" || "SHIPPING_ADDRESS_MISSING_CONTACT_NUMBER_ERROR" || "SHIPPING_ADDRESS_MISSING_CONTACT_INFO_ERROR" || "OUTPOST_STATE_CHANGED_ERROR" || "OUTPOST_NOT_FOUND_ERROR" || "OUTPOST_RENEWAL_REQUIRED_ERROR",
 * //         Status: "PASS" || "FAIL" || "EXEMPT",
 * //       },
 * //     ],
 * //     SubmittedOrderId: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     ExpirationDate: new Date("TIMESTAMP"),
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateQuoteCommandInput - {@link CreateQuoteCommandInput}
 * @returns {@link CreateQuoteCommandOutput}
 * @see {@link CreateQuoteCommandInput} for command's `input` shape.
 * @see {@link CreateQuoteCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class CreateQuoteCommand extends $Command
  .classBuilder<
    CreateQuoteCommandInput,
    CreateQuoteCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "CreateQuote", {})
  .n("OutpostsClient", "CreateQuoteCommand")
  .sc(CreateQuote$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQuoteInput;
      output: CreateQuoteOutput;
    };
    sdk: {
      input: CreateQuoteCommandInput;
      output: CreateQuoteCommandOutput;
    };
  };
}
