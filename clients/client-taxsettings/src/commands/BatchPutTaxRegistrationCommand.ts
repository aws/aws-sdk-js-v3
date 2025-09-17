// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchPutTaxRegistrationRequest,
  BatchPutTaxRegistrationRequestFilterSensitiveLog,
  BatchPutTaxRegistrationResponse,
  BatchPutTaxRegistrationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchPutTaxRegistrationCommand, se_BatchPutTaxRegistrationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchPutTaxRegistrationCommand}.
 */
export interface BatchPutTaxRegistrationCommandInput extends BatchPutTaxRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutTaxRegistrationCommand}.
 */
export interface BatchPutTaxRegistrationCommandOutput extends BatchPutTaxRegistrationResponse, __MetadataBearer {}

/**
 * <p>Adds or updates tax registration for multiple accounts in batch. This can be used to add
 *       or update tax registrations for up to five accounts in one batch. You can't set a TRN if there's a pending TRN. You'll need to delete the pending TRN first.</p>
 *          <p>To call this API operation for specific countries, see the following country-specific
 *       requirements.</p>
 *          <p>
 *             <b>Bangladesh</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You must specify the tax registration certificate document in the
 *             <code>taxRegistrationDocuments</code> field of the <code>VerificationDetails</code>
 *           object.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Brazil</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You must complete the tax registration process in the <a href="https://console.aws.amazon.com/billing/home#/paymentpreferences/paymentmethods">Payment preferences</a> page in the Billing and Cost Management console. After your TRN and billing address are verified, you can call this API operation.</p>
 *             </li>
 *             <li>
 *                <p>For Amazon Web Services accounts created through Organizations, you can call this API operation when you don't have a billing address.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Georgia</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The valid <code>personType</code> values are <code>Physical Person</code> and <code>Business</code>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Indonesia</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PutTaxRegistration</code>: The use of this operation to submit tax information is subject to the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services service terms</a>. By submitting, you’re providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchPutTaxRegistration</code>: The use of this operation to submit tax information is subject to the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services service terms</a>. By submitting, you’re providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022, through our third-party partner PT Achilles Advanced Management (OnlinePajak).</p>
 *             </li>
 *             <li>
 *                <p>You must specify the <code>taxRegistrationNumberType</code> in the <code>indonesiaAdditionalInfo</code> field of the <code>additionalTaxInformation</code> object.</p>
 *             </li>
 *             <li>
 *                <p>If you specify <code>decisionNumber</code>, you must specify the <code>ppnExceptionDesignationCode</code> in the <code>indonesiaAdditionalInfo</code> field of the <code>additionalTaxInformation</code> object. If the <code>taxRegistrationNumberType</code> is set to NPWP or NITKU, valid values for <code>ppnExceptionDesignationCode</code> are either <code>01</code>, <code>02</code>, <code>03</code>, <code>07</code>, or <code>08</code>.</p>
 *                <p>For other <code>taxRegistrationNumberType</code> values, <code>ppnExceptionDesignationCode</code> must be either <code>01</code>, <code>07</code>, or <code>08</code>.</p>
 *             </li>
 *             <li>
 *                <p>If <code>ppnExceptionDesignationCode</code> is <code>07</code>, you must specify the <code>decisionNumber</code> in the <code>indonesiaAdditionalInfo</code> field of the <code>additionalTaxInformation</code> object.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Kenya</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You must specify the <code>personType</code> in the <code>kenyaAdditionalInfo</code>
 *           field of the <code>additionalTaxInformation</code> object.</p>
 *             </li>
 *             <li>
 *                <p>If the <code>personType</code> is <code>Physical Person</code>, you must specify the
 *           tax registration certificate document in the <code>taxRegistrationDocuments</code> field
 *           of the <code>VerificationDetails</code> object.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Malaysia</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The sector valid values are <code>Business</code> and <code>Individual</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RegistrationType</code> valid values are <code>NRIC</code> for individual, and TIN and sales and service tax (SST) for Business.</p>
 *             </li>
 *             <li>
 *                <p>For individual, you can specify the <code>taxInformationNumber</code> in <code>MalaysiaAdditionalInfo</code> with NRIC type, and a valid <code>MyKad</code> or NRIC number.</p>
 *             </li>
 *             <li>
 *                <p>For business, you must specify a <code>businessRegistrationNumber</code> in <code>MalaysiaAdditionalInfo</code> with a TIN type and tax identification number.</p>
 *             </li>
 *             <li>
 *                <p>For business resellers, you must specify a <code>businessRegistrationNumber</code> and <code>taxInformationNumber</code> in <code>MalaysiaAdditionalInfo</code> with a sales and service tax (SST) type and a valid SST number.</p>
 *             </li>
 *             <li>
 *                <p>For business resellers with service codes, you must specify <code>businessRegistrationNumber</code>, <code>taxInformationNumber</code>, and distinct <code>serviceTaxCodes</code> in <code>MalaysiaAdditionalInfo</code> with a SST type and valid sales and service tax (SST) number. By using this API operation, Amazon Web Services registers your self-declaration that you’re an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD), and have a valid SST number.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services reserves the right to seek additional information and/or take other actions to
 *           support your self-declaration as appropriate.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services is currently registered under the following service tax codes. You must include
 *           at least one of the service tax codes in the service tax code strings to declare yourself
 *           as an authorized registered business reseller.</p>
 *                <p>Taxable service and service tax codes:</p>
 *                <p>Consultancy - 9907061674</p>
 *                <p>Training or coaching service - 9907071685</p>
 *                <p>IT service - 9907101676</p>
 *                <p>Digital services and electronic medium - 9907121690</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Nepal</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The sector valid values are <code>Business</code> and <code>Individual</code>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Saudi Arabia</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For <code>address</code>, you must specify <code>addressLine3</code>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>South Korea</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You must specify the <code>certifiedEmailId</code> and <code>legalName</code> in the
 *             <code>TaxRegistrationEntry</code> object. Use Korean characters for
 *             <code>legalName</code>.</p>
 *             </li>
 *             <li>
 *                <p>You must specify the <code>businessRepresentativeName</code>,
 *             <code>itemOfBusiness</code>, and <code>lineOfBusiness</code> in the
 *             <code>southKoreaAdditionalInfo</code> field of the <code>additionalTaxInformation</code>
 *           object. Use Korean characters for these fields.</p>
 *             </li>
 *             <li>
 *                <p>You must specify the tax registration certificate document in the
 *             <code>taxRegistrationDocuments</code> field of the <code>VerificationDetails</code>
 *           object.</p>
 *             </li>
 *             <li>
 *                <p>For the <code>address</code> object, use Korean characters for <code>addressLine1</code>, <code>addressLine2</code>
 *                   <code>city</code>, <code>postalCode</code>, and <code>stateOrRegion</code>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Spain</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You must specify the <code>registrationType</code> in the
 *             <code>spainAdditionalInfo</code> field of the <code>additionalTaxInformation</code>
 *           object.</p>
 *             </li>
 *             <li>
 *                <p>If the <code>registrationType</code> is <code>Local</code>, you must specify the tax
 *           registration certificate document in the <code>taxRegistrationDocuments</code> field of
 *           the <code>VerificationDetails</code> object.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Turkey</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You must specify the <code>sector</code> in the <code>taxRegistrationEntry</code> object.</p>
 *             </li>
 *             <li>
 *                <p>If your <code>sector</code> is <code>Business</code>, <code>Individual</code>, or
 *           <code>Government</code>:</p>
 *                <ul>
 *                   <li>
 *                      <p>Specify the <code>taxOffice</code>. If your
 *                 <code>sector</code> is <code>Individual</code>, don't enter this value.</p>
 *                   </li>
 *                   <li>
 *                      <p>(Optional) Specify the <code>kepEmailId</code>. If your
 *                 <code>sector</code> is <code>Individual</code>, don't enter this value.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Note:</b> In the  <b>Tax Settings</b> page of the Billing console, <code>Government</code> appears as <b>Public institutions</b>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>If your <code>sector</code> is <code>Business</code> and you're subject to KDV tax,
 *           you must specify your industry in the <code>industries</code> field.</p>
 *             </li>
 *             <li>
 *                <p>For <code>address</code>, you must specify <code>districtOrCounty</code>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Ukraine</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The sector valid values are <code>Business</code> and <code>Individual</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, BatchPutTaxRegistrationCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, BatchPutTaxRegistrationCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
 * const client = new TaxSettingsClient(config);
 * const input = { // BatchPutTaxRegistrationRequest
 *   accountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 *   taxRegistrationEntry: { // TaxRegistrationEntry
 *     registrationId: "STRING_VALUE", // required
 *     registrationType: "VAT" || "GST" || "CPF" || "CNPJ" || "SST" || "TIN" || "NRIC", // required
 *     legalName: "STRING_VALUE",
 *     legalAddress: { // Address
 *       addressLine1: "STRING_VALUE", // required
 *       addressLine2: "STRING_VALUE",
 *       addressLine3: "STRING_VALUE",
 *       districtOrCounty: "STRING_VALUE",
 *       city: "STRING_VALUE", // required
 *       stateOrRegion: "STRING_VALUE",
 *       postalCode: "STRING_VALUE", // required
 *       countryCode: "STRING_VALUE", // required
 *     },
 *     sector: "Business" || "Individual" || "Government",
 *     additionalTaxInformation: { // AdditionalInfoRequest
 *       malaysiaAdditionalInfo: { // MalaysiaAdditionalInfo
 *         serviceTaxCodes: [ // MalaysiaServiceTaxCodesList
 *           "Consultancy" || "Digital Service And Electronic Medium" || "IT Services" || "Training Or Coaching",
 *         ],
 *         taxInformationNumber: "STRING_VALUE",
 *         businessRegistrationNumber: "STRING_VALUE",
 *       },
 *       israelAdditionalInfo: { // IsraelAdditionalInfo
 *         dealerType: "Authorized" || "Non-authorized", // required
 *         customerType: "Business" || "Individual", // required
 *       },
 *       estoniaAdditionalInfo: { // EstoniaAdditionalInfo
 *         registryCommercialCode: "STRING_VALUE", // required
 *       },
 *       canadaAdditionalInfo: { // CanadaAdditionalInfo
 *         provincialSalesTaxId: "STRING_VALUE",
 *         canadaQuebecSalesTaxNumber: "STRING_VALUE",
 *         canadaRetailSalesTaxNumber: "STRING_VALUE",
 *         isResellerAccount: true || false,
 *       },
 *       spainAdditionalInfo: { // SpainAdditionalInfo
 *         registrationType: "Intra-EU" || "Local", // required
 *       },
 *       kenyaAdditionalInfo: { // KenyaAdditionalInfo
 *         personType: "Legal Person" || "Physical Person" || "Business", // required
 *       },
 *       southKoreaAdditionalInfo: { // SouthKoreaAdditionalInfo
 *         businessRepresentativeName: "STRING_VALUE", // required
 *         lineOfBusiness: "STRING_VALUE", // required
 *         itemOfBusiness: "STRING_VALUE", // required
 *       },
 *       turkeyAdditionalInfo: { // TurkeyAdditionalInfo
 *         taxOffice: "STRING_VALUE",
 *         kepEmailId: "STRING_VALUE",
 *         secondaryTaxId: "STRING_VALUE",
 *         industries: "CirculatingOrg" || "ProfessionalOrg" || "Banks" || "Insurance" || "PensionAndBenefitFunds" || "DevelopmentAgencies",
 *       },
 *       georgiaAdditionalInfo: { // GeorgiaAdditionalInfo
 *         personType: "Legal Person" || "Physical Person" || "Business", // required
 *       },
 *       italyAdditionalInfo: { // ItalyAdditionalInfo
 *         sdiAccountId: "STRING_VALUE",
 *         cigNumber: "STRING_VALUE",
 *         cupNumber: "STRING_VALUE",
 *         taxCode: "STRING_VALUE",
 *       },
 *       romaniaAdditionalInfo: { // RomaniaAdditionalInfo
 *         taxRegistrationNumberType: "TaxRegistrationNumber" || "LocalRegistrationNumber", // required
 *       },
 *       ukraineAdditionalInfo: { // UkraineAdditionalInfo
 *         ukraineTrnType: "Business" || "Individual", // required
 *       },
 *       polandAdditionalInfo: { // PolandAdditionalInfo
 *         individualRegistrationNumber: "STRING_VALUE",
 *         isGroupVatEnabled: true || false,
 *       },
 *       saudiArabiaAdditionalInfo: { // SaudiArabiaAdditionalInfo
 *         taxRegistrationNumberType: "TaxRegistrationNumber" || "TaxIdentificationNumber" || "CommercialRegistrationNumber",
 *       },
 *       indonesiaAdditionalInfo: { // IndonesiaAdditionalInfo
 *         taxRegistrationNumberType: "NIK" || "PassportNumber" || "NPWP" || "NITKU",
 *         ppnExceptionDesignationCode: "STRING_VALUE",
 *         decisionNumber: "STRING_VALUE",
 *       },
 *       vietnamAdditionalInfo: { // VietnamAdditionalInfo
 *         enterpriseIdentificationNumber: "STRING_VALUE",
 *         electronicTransactionCodeNumber: "STRING_VALUE",
 *         paymentVoucherNumber: "STRING_VALUE",
 *         paymentVoucherNumberDate: "STRING_VALUE",
 *       },
 *       egyptAdditionalInfo: { // EgyptAdditionalInfo
 *         uniqueIdentificationNumber: "STRING_VALUE",
 *         uniqueIdentificationNumberExpirationDate: "STRING_VALUE",
 *       },
 *       greeceAdditionalInfo: { // GreeceAdditionalInfo
 *         contractingAuthorityCode: "STRING_VALUE",
 *       },
 *       uzbekistanAdditionalInfo: { // UzbekistanAdditionalInfo
 *         taxRegistrationNumberType: "Business" || "Individual",
 *         vatRegistrationNumber: "STRING_VALUE",
 *       },
 *     },
 *     verificationDetails: { // VerificationDetails
 *       dateOfBirth: "STRING_VALUE",
 *       taxRegistrationDocuments: [ // TaxRegistrationDocuments
 *         { // TaxRegistrationDocument
 *           s3Location: { // SourceS3Location
 *             bucket: "STRING_VALUE", // required
 *             key: "STRING_VALUE", // required
 *           },
 *           file: { // TaxRegistrationDocFile
 *             fileName: "STRING_VALUE", // required
 *             fileContent: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")             // required
 *           },
 *         },
 *       ],
 *     },
 *     certifiedEmailId: "STRING_VALUE",
 *   },
 * };
 * const command = new BatchPutTaxRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutTaxRegistrationResponse
 * //   status: "Verified" || "Pending" || "Deleted" || "Rejected",
 * //   errors: [ // BatchPutTaxRegistrationErrors // required
 * //     { // BatchPutTaxRegistrationError
 * //       accountId: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //       code: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutTaxRegistrationCommandInput - {@link BatchPutTaxRegistrationCommandInput}
 * @returns {@link BatchPutTaxRegistrationCommandOutput}
 * @see {@link BatchPutTaxRegistrationCommandInput} for command's `input` shape.
 * @see {@link BatchPutTaxRegistrationCommandOutput} for command's `response` shape.
 * @see {@link TaxSettingsClientResolvedConfig | config} for TaxSettingsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The exception when the input is creating conflict with the given state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception thrown when an unexpected error occurs when processing a request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception when the input doesn't pass validation for at least one of the input
 *       parameters. </p>
 *
 * @throws {@link TaxSettingsServiceException}
 * <p>Base exception class for all service exceptions from TaxSettings service.</p>
 *
 *
 * @public
 */
export class BatchPutTaxRegistrationCommand extends $Command
  .classBuilder<
    BatchPutTaxRegistrationCommandInput,
    BatchPutTaxRegistrationCommandOutput,
    TaxSettingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TaxSettingsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TaxSettings", "BatchPutTaxRegistration", {})
  .n("TaxSettingsClient", "BatchPutTaxRegistrationCommand")
  .f(BatchPutTaxRegistrationRequestFilterSensitiveLog, BatchPutTaxRegistrationResponseFilterSensitiveLog)
  .ser(se_BatchPutTaxRegistrationCommand)
  .de(de_BatchPutTaxRegistrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutTaxRegistrationRequest;
      output: BatchPutTaxRegistrationResponse;
    };
    sdk: {
      input: BatchPutTaxRegistrationCommandInput;
      output: BatchPutTaxRegistrationCommandOutput;
    };
  };
}
