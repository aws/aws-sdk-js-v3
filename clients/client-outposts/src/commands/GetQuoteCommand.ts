// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetQuoteInput, GetQuoteOutput } from "../models/models_0";
import { GetQuote$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQuoteCommand}.
 */
export interface GetQuoteCommandInput extends GetQuoteInput {}
/**
 * @public
 *
 * The output of {@link GetQuoteCommand}.
 */
export interface GetQuoteCommandOutput extends GetQuoteOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified quote.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetQuoteCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetQuoteCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // GetQuoteInput
 *   QuoteIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetQuoteCommand(input);
 * const response = await client.send(command);
 * // { // GetQuoteOutput
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
 * @param GetQuoteCommandInput - {@link GetQuoteCommandInput}
 * @returns {@link GetQuoteCommandOutput}
 * @see {@link GetQuoteCommandInput} for command's `input` shape.
 * @see {@link GetQuoteCommandOutput} for command's `response` shape.
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
export class GetQuoteCommand extends command<GetQuoteCommandInput, GetQuoteCommandOutput>(
  _ep0,
  _mw0,
  "GetQuote",
  GetQuote$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQuoteInput;
      output: GetQuoteOutput;
    };
    sdk: {
      input: GetQuoteCommandInput;
      output: GetQuoteCommandOutput;
    };
  };
}
