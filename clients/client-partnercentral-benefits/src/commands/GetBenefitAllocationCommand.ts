// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetBenefitAllocationInput, GetBenefitAllocationOutput } from "../models/models_0";
import {
  PartnerCentralBenefitsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralBenefitsClient";
import { GetBenefitAllocation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBenefitAllocationCommand}.
 */
export interface GetBenefitAllocationCommandInput extends GetBenefitAllocationInput {}
/**
 * @public
 *
 * The output of {@link GetBenefitAllocationCommand}.
 */
export interface GetBenefitAllocationCommandOutput extends GetBenefitAllocationOutput, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific benefit allocation that has been granted to a partner.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralBenefitsClient, GetBenefitAllocationCommand } from "@aws-sdk/client-partnercentral-benefits"; // ES Modules import
 * // const { PartnerCentralBenefitsClient, GetBenefitAllocationCommand } = require("@aws-sdk/client-partnercentral-benefits"); // CommonJS import
 * // import type { PartnerCentralBenefitsClientConfig } from "@aws-sdk/client-partnercentral-benefits";
 * const config = {}; // type is PartnerCentralBenefitsClientConfig
 * const client = new PartnerCentralBenefitsClient(config);
 * const input = { // GetBenefitAllocationInput
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetBenefitAllocationCommand(input);
 * const response = await client.send(command);
 * // { // GetBenefitAllocationOutput
 * //   Id: "STRING_VALUE",
 * //   Catalog: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Status: "ACTIVE" || "INACTIVE" || "FULFILLED",
 * //   StatusReason: "STRING_VALUE",
 * //   BenefitApplicationId: "STRING_VALUE",
 * //   BenefitId: "STRING_VALUE",
 * //   FulfillmentType: "CREDITS" || "CASH" || "ACCESS",
 * //   ApplicableBenefitIds: [ // BenefitIdentifiers
 * //     "STRING_VALUE",
 * //   ],
 * //   FulfillmentDetail: { // FulfillmentDetails Union: only one key present
 * //     DisbursementDetails: { // DisbursementDetails
 * //       DisbursedAmount: { // MonetaryValue
 * //         Amount: "STRING_VALUE", // required
 * //         CurrencyCode: "AED" || "AMD" || "ARS" || "AUD" || "AWG" || "AZN" || "BBD" || "BDT" || "BGN" || "BMD" || "BND" || "BOB" || "BRL" || "BSD" || "BYR" || "BZD" || "CAD" || "CHF" || "CLP" || "CNY" || "COP" || "CRC" || "CZK" || "DKK" || "DOP" || "EEK" || "EGP" || "EUR" || "GBP" || "GEL" || "GHS" || "GTQ" || "GYD" || "HKD" || "HNL" || "HRK" || "HTG" || "HUF" || "IDR" || "ILS" || "INR" || "ISK" || "JMD" || "JPY" || "KES" || "KHR" || "KRW" || "KYD" || "KZT" || "LBP" || "LKR" || "LTL" || "LVL" || "MAD" || "MNT" || "MOP" || "MUR" || "MVR" || "MXN" || "MYR" || "NAD" || "NGN" || "NIO" || "NOK" || "NZD" || "PAB" || "PEN" || "PHP" || "PKR" || "PLN" || "PYG" || "QAR" || "RON" || "RUB" || "SAR" || "SEK" || "SGD" || "SIT" || "SKK" || "THB" || "TND" || "TRY" || "TTD" || "TWD" || "TZS" || "UAH" || "USD" || "UYU" || "UZS" || "VND" || "XAF" || "XCD" || "XOF" || "XPF" || "ZAR", // required
 * //       },
 * //       IssuanceDetails: { // IssuanceDetail
 * //         IssuanceId: "STRING_VALUE",
 * //         IssuanceAmount: {
 * //           Amount: "STRING_VALUE", // required
 * //           CurrencyCode: "AED" || "AMD" || "ARS" || "AUD" || "AWG" || "AZN" || "BBD" || "BDT" || "BGN" || "BMD" || "BND" || "BOB" || "BRL" || "BSD" || "BYR" || "BZD" || "CAD" || "CHF" || "CLP" || "CNY" || "COP" || "CRC" || "CZK" || "DKK" || "DOP" || "EEK" || "EGP" || "EUR" || "GBP" || "GEL" || "GHS" || "GTQ" || "GYD" || "HKD" || "HNL" || "HRK" || "HTG" || "HUF" || "IDR" || "ILS" || "INR" || "ISK" || "JMD" || "JPY" || "KES" || "KHR" || "KRW" || "KYD" || "KZT" || "LBP" || "LKR" || "LTL" || "LVL" || "MAD" || "MNT" || "MOP" || "MUR" || "MVR" || "MXN" || "MYR" || "NAD" || "NGN" || "NIO" || "NOK" || "NZD" || "PAB" || "PEN" || "PHP" || "PKR" || "PLN" || "PYG" || "QAR" || "RON" || "RUB" || "SAR" || "SEK" || "SGD" || "SIT" || "SKK" || "THB" || "TND" || "TRY" || "TTD" || "TWD" || "TZS" || "UAH" || "USD" || "UYU" || "UZS" || "VND" || "XAF" || "XCD" || "XOF" || "XPF" || "ZAR", // required
 * //         },
 * //         IssuedAt: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     ConsumableDetails: { // ConsumableDetails
 * //       AllocatedAmount: {
 * //         Amount: "STRING_VALUE", // required
 * //         CurrencyCode: "AED" || "AMD" || "ARS" || "AUD" || "AWG" || "AZN" || "BBD" || "BDT" || "BGN" || "BMD" || "BND" || "BOB" || "BRL" || "BSD" || "BYR" || "BZD" || "CAD" || "CHF" || "CLP" || "CNY" || "COP" || "CRC" || "CZK" || "DKK" || "DOP" || "EEK" || "EGP" || "EUR" || "GBP" || "GEL" || "GHS" || "GTQ" || "GYD" || "HKD" || "HNL" || "HRK" || "HTG" || "HUF" || "IDR" || "ILS" || "INR" || "ISK" || "JMD" || "JPY" || "KES" || "KHR" || "KRW" || "KYD" || "KZT" || "LBP" || "LKR" || "LTL" || "LVL" || "MAD" || "MNT" || "MOP" || "MUR" || "MVR" || "MXN" || "MYR" || "NAD" || "NGN" || "NIO" || "NOK" || "NZD" || "PAB" || "PEN" || "PHP" || "PKR" || "PLN" || "PYG" || "QAR" || "RON" || "RUB" || "SAR" || "SEK" || "SGD" || "SIT" || "SKK" || "THB" || "TND" || "TRY" || "TTD" || "TWD" || "TZS" || "UAH" || "USD" || "UYU" || "UZS" || "VND" || "XAF" || "XCD" || "XOF" || "XPF" || "ZAR", // required
 * //       },
 * //       RemainingAmount: {
 * //         Amount: "STRING_VALUE", // required
 * //         CurrencyCode: "AED" || "AMD" || "ARS" || "AUD" || "AWG" || "AZN" || "BBD" || "BDT" || "BGN" || "BMD" || "BND" || "BOB" || "BRL" || "BSD" || "BYR" || "BZD" || "CAD" || "CHF" || "CLP" || "CNY" || "COP" || "CRC" || "CZK" || "DKK" || "DOP" || "EEK" || "EGP" || "EUR" || "GBP" || "GEL" || "GHS" || "GTQ" || "GYD" || "HKD" || "HNL" || "HRK" || "HTG" || "HUF" || "IDR" || "ILS" || "INR" || "ISK" || "JMD" || "JPY" || "KES" || "KHR" || "KRW" || "KYD" || "KZT" || "LBP" || "LKR" || "LTL" || "LVL" || "MAD" || "MNT" || "MOP" || "MUR" || "MVR" || "MXN" || "MYR" || "NAD" || "NGN" || "NIO" || "NOK" || "NZD" || "PAB" || "PEN" || "PHP" || "PKR" || "PLN" || "PYG" || "QAR" || "RON" || "RUB" || "SAR" || "SEK" || "SGD" || "SIT" || "SKK" || "THB" || "TND" || "TRY" || "TTD" || "TWD" || "TZS" || "UAH" || "USD" || "UYU" || "UZS" || "VND" || "XAF" || "XCD" || "XOF" || "XPF" || "ZAR", // required
 * //       },
 * //       UtilizedAmount: {
 * //         Amount: "STRING_VALUE", // required
 * //         CurrencyCode: "AED" || "AMD" || "ARS" || "AUD" || "AWG" || "AZN" || "BBD" || "BDT" || "BGN" || "BMD" || "BND" || "BOB" || "BRL" || "BSD" || "BYR" || "BZD" || "CAD" || "CHF" || "CLP" || "CNY" || "COP" || "CRC" || "CZK" || "DKK" || "DOP" || "EEK" || "EGP" || "EUR" || "GBP" || "GEL" || "GHS" || "GTQ" || "GYD" || "HKD" || "HNL" || "HRK" || "HTG" || "HUF" || "IDR" || "ILS" || "INR" || "ISK" || "JMD" || "JPY" || "KES" || "KHR" || "KRW" || "KYD" || "KZT" || "LBP" || "LKR" || "LTL" || "LVL" || "MAD" || "MNT" || "MOP" || "MUR" || "MVR" || "MXN" || "MYR" || "NAD" || "NGN" || "NIO" || "NOK" || "NZD" || "PAB" || "PEN" || "PHP" || "PKR" || "PLN" || "PYG" || "QAR" || "RON" || "RUB" || "SAR" || "SEK" || "SGD" || "SIT" || "SKK" || "THB" || "TND" || "TRY" || "TTD" || "TWD" || "TZS" || "UAH" || "USD" || "UYU" || "UZS" || "VND" || "XAF" || "XCD" || "XOF" || "XPF" || "ZAR", // required
 * //       },
 * //       IssuanceDetails: {
 * //         IssuanceId: "STRING_VALUE",
 * //         IssuanceAmount: "<MonetaryValue>",
 * //         IssuedAt: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     CreditDetails: { // CreditDetails
 * //       AllocatedAmount: "<MonetaryValue>", // required
 * //       IssuedAmount: "<MonetaryValue>", // required
 * //       Codes: [ // CreditCodes // required
 * //         { // CreditCode
 * //           AwsAccountId: "STRING_VALUE", // required
 * //           Value: "<MonetaryValue>", // required
 * //           AwsCreditCode: "STRING_VALUE", // required
 * //           Status: "ACTIVE" || "INACTIVE" || "FULFILLED", // required
 * //           IssuedAt: new Date("TIMESTAMP"), // required
 * //           ExpiresAt: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //     },
 * //     AccessDetails: { // AccessDetails
 * //       Description: "STRING_VALUE",
 * //     },
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   StartsAt: new Date("TIMESTAMP"),
 * //   ExpiresAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetBenefitAllocationCommandInput - {@link GetBenefitAllocationCommandInput}
 * @returns {@link GetBenefitAllocationCommandOutput}
 * @see {@link GetBenefitAllocationCommandInput} for command's `input` shape.
 * @see {@link GetBenefitAllocationCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralBenefitsClientResolvedConfig | config} for PartnerCentralBenefitsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Thrown when the caller does not have sufficient permissions to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an unexpected error occurs on the server side during request processing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource cannot be found or does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Thrown when the request rate exceeds the allowed limits and the request is being throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the request contains invalid parameters or fails input validation requirements.</p>
 *
 * @throws {@link PartnerCentralBenefitsServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralBenefits service.</p>
 *
 *
 * @public
 */
export class GetBenefitAllocationCommand extends $Command
  .classBuilder<
    GetBenefitAllocationCommandInput,
    GetBenefitAllocationCommandOutput,
    PartnerCentralBenefitsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralBenefitsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralBenefitsService", "GetBenefitAllocation", {})
  .n("PartnerCentralBenefitsClient", "GetBenefitAllocationCommand")
  .sc(GetBenefitAllocation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBenefitAllocationInput;
      output: GetBenefitAllocationOutput;
    };
    sdk: {
      input: GetBenefitAllocationCommandInput;
      output: GetBenefitAllocationCommandOutput;
    };
  };
}
