// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTaxRegistrationsRequest, ListTaxRegistrationsResponse } from "../models/models_0";
import { ListTaxRegistrations } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTaxRegistrationsCommand}.
 */
export interface ListTaxRegistrationsCommandInput extends ListTaxRegistrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListTaxRegistrationsCommand}.
 */
export interface ListTaxRegistrationsCommandOutput extends ListTaxRegistrationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the tax registration of accounts listed in a consolidated billing family. This
 *       can be used to retrieve up to 100 accounts' tax registrations in one call (default 50).
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, ListTaxRegistrationsCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, ListTaxRegistrationsCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
 * const client = new TaxSettingsClient(config);
 * const input = { // ListTaxRegistrationsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTaxRegistrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListTaxRegistrationsResponse
 * //   accountDetails: [ // AccountDetailsList // required
 * //     { // AccountDetails
 * //       accountId: "STRING_VALUE",
 * //       taxRegistration: { // TaxRegistrationWithJurisdiction
 * //         registrationId: "STRING_VALUE", // required
 * //         registrationType: "VAT" || "GST" || "CPF" || "CNPJ" || "SST" || "TIN" || "NRIC", // required
 * //         legalName: "STRING_VALUE", // required
 * //         status: "Verified" || "Pending" || "Deleted" || "Rejected", // required
 * //         sector: "Business" || "Individual" || "Government",
 * //         taxDocumentMetadatas: [ // TaxDocumentMetadatas
 * //           { // TaxDocumentMetadata
 * //             taxDocumentAccessToken: "STRING_VALUE", // required
 * //             taxDocumentName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         certifiedEmailId: "STRING_VALUE",
 * //         additionalTaxInformation: { // AdditionalInfoResponse
 * //           malaysiaAdditionalInfo: { // MalaysiaAdditionalInfo
 * //             serviceTaxCodes: [ // MalaysiaServiceTaxCodesList
 * //               "Consultancy" || "Digital Service And Electronic Medium" || "IT Services" || "Training Or Coaching",
 * //             ],
 * //             taxInformationNumber: "STRING_VALUE",
 * //             businessRegistrationNumber: "STRING_VALUE",
 * //           },
 * //           israelAdditionalInfo: { // IsraelAdditionalInfo
 * //             dealerType: "Authorized" || "Non-authorized", // required
 * //             customerType: "Business" || "Individual", // required
 * //           },
 * //           estoniaAdditionalInfo: { // EstoniaAdditionalInfo
 * //             registryCommercialCode: "STRING_VALUE", // required
 * //           },
 * //           canadaAdditionalInfo: { // CanadaAdditionalInfo
 * //             provincialSalesTaxId: "STRING_VALUE",
 * //             canadaQuebecSalesTaxNumber: "STRING_VALUE",
 * //             canadaRetailSalesTaxNumber: "STRING_VALUE",
 * //             isResellerAccount: true || false,
 * //           },
 * //           brazilAdditionalInfo: { // BrazilAdditionalInfo
 * //             ccmCode: "STRING_VALUE",
 * //             legalNatureCode: "STRING_VALUE",
 * //           },
 * //           spainAdditionalInfo: { // SpainAdditionalInfo
 * //             registrationType: "Intra-EU" || "Local", // required
 * //           },
 * //           kenyaAdditionalInfo: { // KenyaAdditionalInfo
 * //             personType: "Legal Person" || "Physical Person" || "Business", // required
 * //           },
 * //           southKoreaAdditionalInfo: { // SouthKoreaAdditionalInfo
 * //             businessRepresentativeName: "STRING_VALUE", // required
 * //             lineOfBusiness: "STRING_VALUE", // required
 * //             itemOfBusiness: "STRING_VALUE", // required
 * //           },
 * //           turkeyAdditionalInfo: { // TurkeyAdditionalInfo
 * //             taxOffice: "STRING_VALUE",
 * //             kepEmailId: "STRING_VALUE",
 * //             secondaryTaxId: "STRING_VALUE",
 * //             industries: "CirculatingOrg" || "ProfessionalOrg" || "Banks" || "Insurance" || "PensionAndBenefitFunds" || "DevelopmentAgencies",
 * //           },
 * //           georgiaAdditionalInfo: { // GeorgiaAdditionalInfo
 * //             personType: "Legal Person" || "Physical Person" || "Business", // required
 * //           },
 * //           italyAdditionalInfo: { // ItalyAdditionalInfo
 * //             sdiAccountId: "STRING_VALUE",
 * //             cigNumber: "STRING_VALUE",
 * //             cupNumber: "STRING_VALUE",
 * //             taxCode: "STRING_VALUE",
 * //           },
 * //           romaniaAdditionalInfo: { // RomaniaAdditionalInfo
 * //             taxRegistrationNumberType: "TaxRegistrationNumber" || "LocalRegistrationNumber", // required
 * //           },
 * //           ukraineAdditionalInfo: { // UkraineAdditionalInfo
 * //             ukraineTrnType: "Business" || "Individual", // required
 * //           },
 * //           polandAdditionalInfo: { // PolandAdditionalInfo
 * //             individualRegistrationNumber: "STRING_VALUE",
 * //             isGroupVatEnabled: true || false,
 * //           },
 * //           saudiArabiaAdditionalInfo: { // SaudiArabiaAdditionalInfo
 * //             taxRegistrationNumberType: "TaxRegistrationNumber" || "TaxIdentificationNumber" || "CommercialRegistrationNumber",
 * //           },
 * //           indiaAdditionalInfo: { // IndiaAdditionalInfo
 * //             pan: "STRING_VALUE",
 * //           },
 * //           indonesiaAdditionalInfo: { // IndonesiaAdditionalInfo
 * //             taxRegistrationNumberType: "NIK" || "PassportNumber" || "NPWP" || "NITKU",
 * //             ppnExceptionDesignationCode: "STRING_VALUE",
 * //             decisionNumber: "STRING_VALUE",
 * //           },
 * //           vietnamAdditionalInfo: { // VietnamAdditionalInfo
 * //             enterpriseIdentificationNumber: "STRING_VALUE",
 * //             electronicTransactionCodeNumber: "STRING_VALUE",
 * //             paymentVoucherNumber: "STRING_VALUE",
 * //             paymentVoucherNumberDate: "STRING_VALUE",
 * //           },
 * //           egyptAdditionalInfo: { // EgyptAdditionalInfo
 * //             uniqueIdentificationNumber: "STRING_VALUE",
 * //             uniqueIdentificationNumberExpirationDate: "STRING_VALUE",
 * //           },
 * //           greeceAdditionalInfo: { // GreeceAdditionalInfo
 * //             contractingAuthorityCode: "STRING_VALUE",
 * //           },
 * //           uzbekistanAdditionalInfo: { // UzbekistanAdditionalInfo
 * //             taxRegistrationNumberType: "Business" || "Individual",
 * //             vatRegistrationNumber: "STRING_VALUE",
 * //           },
 * //         },
 * //         jurisdiction: { // Jurisdiction
 * //           stateOrRegion: "STRING_VALUE",
 * //           countryCode: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       taxInheritanceDetails: { // TaxInheritanceDetails
 * //         parentEntityId: "STRING_VALUE",
 * //         inheritanceObtainedReason: "STRING_VALUE",
 * //       },
 * //       accountMetaData: { // AccountMetaData
 * //         accountName: "STRING_VALUE",
 * //         seller: "STRING_VALUE",
 * //         address: { // Address
 * //           addressLine1: "STRING_VALUE", // required
 * //           addressLine2: "STRING_VALUE",
 * //           addressLine3: "STRING_VALUE",
 * //           districtOrCounty: "STRING_VALUE",
 * //           city: "STRING_VALUE", // required
 * //           stateOrRegion: "STRING_VALUE",
 * //           postalCode: "STRING_VALUE", // required
 * //           countryCode: "STRING_VALUE", // required
 * //         },
 * //         addressType: "TaxAddress" || "BillingAddress" || "ContactAddress",
 * //         addressRoleMap: { // AddressRoleMap
 * //           "<keys>": {
 * //             stateOrRegion: "STRING_VALUE",
 * //             countryCode: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTaxRegistrationsCommandInput - {@link ListTaxRegistrationsCommandInput}
 * @returns {@link ListTaxRegistrationsCommandOutput}
 * @see {@link ListTaxRegistrationsCommandInput} for command's `input` shape.
 * @see {@link ListTaxRegistrationsCommandOutput} for command's `response` shape.
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
export class ListTaxRegistrationsCommand extends $Command
  .classBuilder<
    ListTaxRegistrationsCommandInput,
    ListTaxRegistrationsCommandOutput,
    TaxSettingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TaxSettingsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaxSettings", "ListTaxRegistrations", {})
  .n("TaxSettingsClient", "ListTaxRegistrationsCommand")
  .sc(ListTaxRegistrations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTaxRegistrationsRequest;
      output: ListTaxRegistrationsResponse;
    };
    sdk: {
      input: ListTaxRegistrationsCommandInput;
      output: ListTaxRegistrationsCommandOutput;
    };
  };
}
