// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutTaxRegistrationRequest, PutTaxRegistrationResponse } from "../models/models_0";
import { PutTaxRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutTaxRegistrationCommand}.
 */
export interface PutTaxRegistrationCommandInput extends PutTaxRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link PutTaxRegistrationCommand}.
 */
export interface PutTaxRegistrationCommandOutput extends PutTaxRegistrationResponse, __MetadataBearer {}

/**
 * Adds or updates tax registration for a single account. You can't set a TRN if there's a pending TRN. You'll need to delete the pending TRN first.
 *
 * To call this API operation for specific countries, see the following country-specific requirements.
 *
 * **Bangladesh**
 *
 * - You must specify the tax registration certificate document in the `taxRegistrationDocuments` field of the `VerificationDetails` object.
 *
 * **Brazil**
 *
 * - You must complete the tax registration process in the [Payment preferences](https://console.aws.amazon.com/billing/home#/paymentpreferences/paymentmethods) page in the Billing and Cost Management console. After your TRN and billing address are verified, you can call this API operation.
 * - For Amazon Web Services accounts created through Organizations, you can call this API operation when you don't have a billing address.
 *
 * **Colombia**
 *
 * - You can provide a Registro Único Tributario (RUT) document in the **verificationDetails** field.
 * - If you provide the RUT document, you do not need to provide address and legal name. These will be populated based on your document.
 *
 * **Georgia**
 *
 * - The valid `personType` values are `Physical Person` and `Business`.
 *
 * **Indonesia**
 *
 * - `PutTaxRegistration`: The use of this operation to submit tax information is subject to the [Amazon Web Services service terms](http://aws.amazon.com/service-terms/). By submitting, you’re providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022.
 * - `BatchPutTaxRegistration`: The use of this operation to submit tax information is subject to the [Amazon Web Services service terms](http://aws.amazon.com/service-terms/). By submitting, you’re providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022, through our third-party partner PT Achilles Advanced Management (OnlinePajak).
 * - You must specify the `taxRegistrationNumberType` in the `indonesiaAdditionalInfo` field of the `additionalTaxInformation` object.
 * - If you specify `decisionNumber`, you must specify the `ppnExceptionDesignationCode` in the `indonesiaAdditionalInfo` field of the `additionalTaxInformation` object. If the `taxRegistrationNumberType` is set to NPWP or NITKU, valid values for `ppnExceptionDesignationCode` are either `01`, `02`, `03`, `07`, or `08`.
 *
 *   For other `taxRegistrationNumberType` values, `ppnExceptionDesignationCode` must be either `01`, `07`, or `08`.
 * - If `ppnExceptionDesignationCode` is `07` or `08`, you must specify the `decisionNumber` in the `indonesiaAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Kenya**
 *
 * - You must specify the `personType` in the `kenyaAdditionalInfo` field of the `additionalTaxInformation` object.
 * - If the `personType` is `Physical Person`, you must specify the tax registration certificate document in the `taxRegistrationDocuments` field of the `VerificationDetails` object.
 *
 * **Malaysia**
 *
 * - The sector valid values are `Business` and `Individual`.
 * - `RegistrationType` valid values are `NRIC` for individual, and TIN and sales and service tax (SST) for Business.
 * - For individual, you can specify the `taxInformationNumber` in `MalaysiaAdditionalInfo` with NRIC type, and a valid `MyKad` or NRIC number.
 * - For business, you must specify a `businessRegistrationNumber` in `MalaysiaAdditionalInfo` with a TIN type and tax identification number.
 * - For business resellers, you must specify a `businessRegistrationNumber` and `taxInformationNumber` in `MalaysiaAdditionalInfo` with a sales and service tax (SST) type and a valid SST number.
 * - For business resellers with service codes, you must specify `businessRegistrationNumber`, `taxInformationNumber`, and distinct `serviceTaxCodes` in `MalaysiaAdditionalInfo` with a SST type and valid sales and service tax (SST) number. By using this API operation, Amazon Web Services registers your self-declaration that you’re an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD), and have a valid SST number.
 * - Amazon Web Services reserves the right to seek additional information and/or take other actions to support your self-declaration as appropriate.
 * - Amazon Web Services is currently registered under the following service tax codes. You must include at least one of the service tax codes in the service tax code strings to declare yourself as an authorized registered business reseller.
 *
 *   Taxable service and service tax codes:
 *
 *   Consultancy - 9907061674
 *
 *   Training or coaching service - 9907071685
 *
 *   IT service - 9907101676
 *
 *   Digital services and electronic medium - 9907121690
 *
 * **Mexico**
 *
 * - You must provide a Constancia de Situación fiscal (CSF) document in the **verificationDetails** field.
 * - You do not need to provide address and legal name. These will be populated based on your tax registration number.
 *
 * **Nepal**
 *
 * - The sector valid values are `Business` and `Individual`.
 *
 * **Saudi Arabia**
 *
 * - For `address`, you must specify `addressLine3`.
 *
 * **South Korea**
 *
 * - You must specify the `certifiedEmailId` and `legalName` in the `TaxRegistrationEntry` object. Use Korean characters for `legalName`.
 * - You must specify the `businessRepresentativeName`, `itemOfBusiness`, and `lineOfBusiness` in the `southKoreaAdditionalInfo` field of the `additionalTaxInformation` object. Use Korean characters for these fields.
 * - You must specify the tax registration certificate document in the `taxRegistrationDocuments` field of the `VerificationDetails` object.
 * - For the `address` object, use Korean characters for `addressLine1`, `addressLine2` `city`, `postalCode`, and `stateOrRegion`.
 *
 * **Spain**
 *
 * - You must specify the `registrationType` in the `spainAdditionalInfo` field of the `additionalTaxInformation` object.
 * - If the `registrationType` is `Local`, you must specify the tax registration certificate document in the `taxRegistrationDocuments` field of the `VerificationDetails` object.
 *
 * **Turkey**
 *
 * - You must specify the `sector` in the `taxRegistrationEntry` object.
 * - If your `sector` is `Business`, `Individual`, or `Government`:
 *
 *   - Specify the `taxOffice`. If your `sector` is `Individual`, don't enter this value.
 *   - (Optional) Specify the `kepEmailId`. If your `sector` is `Individual`, don't enter this value.
 *   - **Note:** In the **Tax Settings** page of the Billing console, `Government` appears as **Public institutions**
 * - If your `sector` is `Business` and you're subject to KDV tax, you must specify your industry in the `industries` field.
 * - For `address`, you must specify `districtOrCounty`.
 *
 * **Ukraine**
 *
 * - The sector valid values are `Business` and `Individual`.
 *
 * **Philippines**
 *
 * - You can optionally specify the `isVatRegistered` in the `philippinesAdditionalInfo` field of the `additionalTaxInformation` object to indicate your VAT registration status with the Bureau of Internal Revenue (BIR).
 *
 * **Belgium**
 *
 * - You can optionally specify the `peppolId` in the `belgiumAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Chile**
 *
 * - You can optionally specify the `documentType` and `businessActivity` in the `chileAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **France**
 *
 * - You must specify the `sirenNumber` in the `franceAdditionalInfo` field of the `additionalTaxInformation` object.
 * - You can optionally specify the `eInvoiceRoutingCode` in the `franceAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Monaco**
 *
 * - You must specify the `businessNumber` in the `monacoAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Germany**
 *
 * - You must provide at least one of the following: a Tax Registration Number (TRN) (`registrationId`), the `economicIdentificationNumber`, or the `steuernummer`.
 * - You can optionally specify the `economicIdentificationNumber` (Wirtschafts-Identifikationsnummer, or W-IdNr) and the `steuernummer` (tax number issued by the local tax office) in the `germanyAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Poland**
 *
 * - You can optionally specify the `taxRegistrationNumberType` in the `polandAdditionalInfo` field of the `additionalTaxInformation` object. Valid values are `EUTaxRegistrationNumber`, `LocalTaxRegistrationNumber`, or `LocalRegistrationNumber`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, PutTaxRegistrationCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, PutTaxRegistrationCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
 * const client = new TaxSettingsClient(config);
 * const input = { // PutTaxRegistrationRequest
 *   accountId: "STRING_VALUE",
 *   taxRegistrationEntry: { // TaxRegistrationEntry
 *     registrationId: "STRING_VALUE", // required
 *     registrationType: "VAT" || "GST" || "CPF" || "CNPJ" || "SST" || "TIN" || "NRIC" || "PAN" || "NIP", // required
 *     legalName: "STRING_VALUE",
 *     legalAddress: { // Address
 *       addressLine1: "STRING_VALUE",
 *       addressLine2: "STRING_VALUE",
 *       addressLine3: "STRING_VALUE",
 *       districtOrCounty: "STRING_VALUE",
 *       city: "STRING_VALUE",
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
 *         customerType: "Business" || "Individual",
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
 *         taxRegistrationNumberType: "EUTaxRegistrationNumber" || "LocalTaxRegistrationNumber" || "LocalRegistrationNumber",
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
 *       philippinesAdditionalInfo: { // PhilippinesAdditionalInfo
 *         isVatRegistered: true || false,
 *       },
 *       belgiumAdditionalInfo: { // BelgiumAdditionalInfo
 *         peppolId: "STRING_VALUE",
 *         isMercuriusBoxEnabled: true || false,
 *       },
 *       chileAdditionalInfo: { // ChileAdditionalInfo
 *         documentType: "Invoice" || "Receipt",
 *         businessActivity: "STRING_VALUE",
 *       },
 *       franceAdditionalInfo: { // FranceAdditionalInfo
 *         sirenNumber: "STRING_VALUE", // required
 *         eInvoiceRoutingCode: "STRING_VALUE",
 *       },
 *       monacoAdditionalInfo: { // MonacoAdditionalInfo
 *         businessNumber: "STRING_VALUE", // required
 *       },
 *       germanyAdditionalInfo: { // GermanyAdditionalInfo
 *         economicIdentificationNumber: "STRING_VALUE",
 *         steuernummer: "STRING_VALUE",
 *       },
 *       mexicoAdditionalInfo: { // MexicoAdditionalInfo
 *         taxRegime: "STRING_VALUE",
 *         taxRegimeFullName: "STRING_VALUE",
 *         cfdiUsageCode: "STRING_VALUE",
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
 * const command = new PutTaxRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // PutTaxRegistrationResponse
 * //   status: "Verified" || "Pending" || "Deleted" || "Rejected",
 * // };
 *
 * ```
 *
 * @param PutTaxRegistrationCommandInput - {@link PutTaxRegistrationCommandInput}
 * @returns {@link PutTaxRegistrationCommandOutput}
 * @see {@link PutTaxRegistrationCommandInput} for command's `input` shape.
 * @see {@link PutTaxRegistrationCommandOutput} for command's `response` shape.
 * @see {@link TaxSettingsClientResolvedConfig | config} for TaxSettingsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The exception when the input is creating conflict with the given state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The exception thrown when an unexpected error occurs when processing a request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The exception when the input doesn't pass validation for at least one of the input parameters.
 *
 * @throws {@link TaxSettingsServiceException}
 *
 * Base exception class for all service exceptions from TaxSettings service.
 *
 * @public
 */
export class PutTaxRegistrationCommand extends command<PutTaxRegistrationCommandInput, PutTaxRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "PutTaxRegistration",
  PutTaxRegistration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTaxRegistrationRequest;
      output: PutTaxRegistrationResponse;
    };
    sdk: {
      input: PutTaxRegistrationCommandInput;
      output: PutTaxRegistrationCommandOutput;
    };
  };
}
