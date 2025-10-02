// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetTaxRegistrationRequest,
  GetTaxRegistrationResponse,
  GetTaxRegistrationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetTaxRegistrationCommand, se_GetTaxRegistrationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTaxRegistrationCommand}.
 */
export interface GetTaxRegistrationCommandInput extends GetTaxRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link GetTaxRegistrationCommand}.
 */
export interface GetTaxRegistrationCommandOutput extends GetTaxRegistrationResponse, __MetadataBearer {}

/**
 * <p>Retrieves tax registration for a single account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, GetTaxRegistrationCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, GetTaxRegistrationCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
 * const client = new TaxSettingsClient(config);
 * const input = { // GetTaxRegistrationRequest
 *   accountId: "STRING_VALUE",
 * };
 * const command = new GetTaxRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // GetTaxRegistrationResponse
 * //   taxRegistration: { // TaxRegistration
 * //     registrationId: "STRING_VALUE", // required
 * //     registrationType: "VAT" || "GST" || "CPF" || "CNPJ" || "SST" || "TIN" || "NRIC", // required
 * //     legalName: "STRING_VALUE", // required
 * //     status: "Verified" || "Pending" || "Deleted" || "Rejected", // required
 * //     sector: "Business" || "Individual" || "Government",
 * //     taxDocumentMetadatas: [ // TaxDocumentMetadatas
 * //       { // TaxDocumentMetadata
 * //         taxDocumentAccessToken: "STRING_VALUE", // required
 * //         taxDocumentName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     certifiedEmailId: "STRING_VALUE",
 * //     additionalTaxInformation: { // AdditionalInfoResponse
 * //       malaysiaAdditionalInfo: { // MalaysiaAdditionalInfo
 * //         serviceTaxCodes: [ // MalaysiaServiceTaxCodesList
 * //           "Consultancy" || "Digital Service And Electronic Medium" || "IT Services" || "Training Or Coaching",
 * //         ],
 * //         taxInformationNumber: "STRING_VALUE",
 * //         businessRegistrationNumber: "STRING_VALUE",
 * //       },
 * //       israelAdditionalInfo: { // IsraelAdditionalInfo
 * //         dealerType: "Authorized" || "Non-authorized", // required
 * //         customerType: "Business" || "Individual", // required
 * //       },
 * //       estoniaAdditionalInfo: { // EstoniaAdditionalInfo
 * //         registryCommercialCode: "STRING_VALUE", // required
 * //       },
 * //       canadaAdditionalInfo: { // CanadaAdditionalInfo
 * //         provincialSalesTaxId: "STRING_VALUE",
 * //         canadaQuebecSalesTaxNumber: "STRING_VALUE",
 * //         canadaRetailSalesTaxNumber: "STRING_VALUE",
 * //         isResellerAccount: true || false,
 * //       },
 * //       brazilAdditionalInfo: { // BrazilAdditionalInfo
 * //         ccmCode: "STRING_VALUE",
 * //         legalNatureCode: "STRING_VALUE",
 * //       },
 * //       spainAdditionalInfo: { // SpainAdditionalInfo
 * //         registrationType: "Intra-EU" || "Local", // required
 * //       },
 * //       kenyaAdditionalInfo: { // KenyaAdditionalInfo
 * //         personType: "Legal Person" || "Physical Person" || "Business", // required
 * //       },
 * //       southKoreaAdditionalInfo: { // SouthKoreaAdditionalInfo
 * //         businessRepresentativeName: "STRING_VALUE", // required
 * //         lineOfBusiness: "STRING_VALUE", // required
 * //         itemOfBusiness: "STRING_VALUE", // required
 * //       },
 * //       turkeyAdditionalInfo: { // TurkeyAdditionalInfo
 * //         taxOffice: "STRING_VALUE",
 * //         kepEmailId: "STRING_VALUE",
 * //         secondaryTaxId: "STRING_VALUE",
 * //         industries: "CirculatingOrg" || "ProfessionalOrg" || "Banks" || "Insurance" || "PensionAndBenefitFunds" || "DevelopmentAgencies",
 * //       },
 * //       georgiaAdditionalInfo: { // GeorgiaAdditionalInfo
 * //         personType: "Legal Person" || "Physical Person" || "Business", // required
 * //       },
 * //       italyAdditionalInfo: { // ItalyAdditionalInfo
 * //         sdiAccountId: "STRING_VALUE",
 * //         cigNumber: "STRING_VALUE",
 * //         cupNumber: "STRING_VALUE",
 * //         taxCode: "STRING_VALUE",
 * //       },
 * //       romaniaAdditionalInfo: { // RomaniaAdditionalInfo
 * //         taxRegistrationNumberType: "TaxRegistrationNumber" || "LocalRegistrationNumber", // required
 * //       },
 * //       ukraineAdditionalInfo: { // UkraineAdditionalInfo
 * //         ukraineTrnType: "Business" || "Individual", // required
 * //       },
 * //       polandAdditionalInfo: { // PolandAdditionalInfo
 * //         individualRegistrationNumber: "STRING_VALUE",
 * //         isGroupVatEnabled: true || false,
 * //       },
 * //       saudiArabiaAdditionalInfo: { // SaudiArabiaAdditionalInfo
 * //         taxRegistrationNumberType: "TaxRegistrationNumber" || "TaxIdentificationNumber" || "CommercialRegistrationNumber",
 * //       },
 * //       indiaAdditionalInfo: { // IndiaAdditionalInfo
 * //         pan: "STRING_VALUE",
 * //       },
 * //       indonesiaAdditionalInfo: { // IndonesiaAdditionalInfo
 * //         taxRegistrationNumberType: "NIK" || "PassportNumber" || "NPWP" || "NITKU",
 * //         ppnExceptionDesignationCode: "STRING_VALUE",
 * //         decisionNumber: "STRING_VALUE",
 * //       },
 * //       vietnamAdditionalInfo: { // VietnamAdditionalInfo
 * //         enterpriseIdentificationNumber: "STRING_VALUE",
 * //         electronicTransactionCodeNumber: "STRING_VALUE",
 * //         paymentVoucherNumber: "STRING_VALUE",
 * //         paymentVoucherNumberDate: "STRING_VALUE",
 * //       },
 * //       egyptAdditionalInfo: { // EgyptAdditionalInfo
 * //         uniqueIdentificationNumber: "STRING_VALUE",
 * //         uniqueIdentificationNumberExpirationDate: "STRING_VALUE",
 * //       },
 * //       greeceAdditionalInfo: { // GreeceAdditionalInfo
 * //         contractingAuthorityCode: "STRING_VALUE",
 * //       },
 * //       uzbekistanAdditionalInfo: { // UzbekistanAdditionalInfo
 * //         taxRegistrationNumberType: "Business" || "Individual",
 * //         vatRegistrationNumber: "STRING_VALUE",
 * //       },
 * //     },
 * //     legalAddress: { // Address
 * //       addressLine1: "STRING_VALUE", // required
 * //       addressLine2: "STRING_VALUE",
 * //       addressLine3: "STRING_VALUE",
 * //       districtOrCounty: "STRING_VALUE",
 * //       city: "STRING_VALUE", // required
 * //       stateOrRegion: "STRING_VALUE",
 * //       postalCode: "STRING_VALUE", // required
 * //       countryCode: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTaxRegistrationCommandInput - {@link GetTaxRegistrationCommandInput}
 * @returns {@link GetTaxRegistrationCommandOutput}
 * @see {@link GetTaxRegistrationCommandInput} for command's `input` shape.
 * @see {@link GetTaxRegistrationCommandOutput} for command's `response` shape.
 * @see {@link TaxSettingsClientResolvedConfig | config} for TaxSettingsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception thrown when an unexpected error occurs when processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception thrown when the input doesn't have a resource associated to it.</p>
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
export class GetTaxRegistrationCommand extends $Command
  .classBuilder<
    GetTaxRegistrationCommandInput,
    GetTaxRegistrationCommandOutput,
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
  .s("TaxSettings", "GetTaxRegistration", {})
  .n("TaxSettingsClient", "GetTaxRegistrationCommand")
  .f(void 0, GetTaxRegistrationResponseFilterSensitiveLog)
  .ser(se_GetTaxRegistrationCommand)
  .de(de_GetTaxRegistrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTaxRegistrationRequest;
      output: GetTaxRegistrationResponse;
    };
    sdk: {
      input: GetTaxRegistrationCommandInput;
      output: GetTaxRegistrationCommandOutput;
    };
  };
}
