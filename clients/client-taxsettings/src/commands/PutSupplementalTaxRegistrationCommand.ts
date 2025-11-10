// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutSupplementalTaxRegistrationRequest, PutSupplementalTaxRegistrationResponse } from "../models/models_0";
import { PutSupplementalTaxRegistration } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutSupplementalTaxRegistrationCommand}.
 */
export interface PutSupplementalTaxRegistrationCommandInput extends PutSupplementalTaxRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link PutSupplementalTaxRegistrationCommand}.
 */
export interface PutSupplementalTaxRegistrationCommandOutput
  extends PutSupplementalTaxRegistrationResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Stores supplemental tax registration for a single account.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, PutSupplementalTaxRegistrationCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, PutSupplementalTaxRegistrationCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
 * const client = new TaxSettingsClient(config);
 * const input = { // PutSupplementalTaxRegistrationRequest
 *   taxRegistrationEntry: { // SupplementalTaxRegistrationEntry
 *     registrationId: "STRING_VALUE", // required
 *     registrationType: "VAT", // required
 *     legalName: "STRING_VALUE", // required
 *     address: { // Address
 *       addressLine1: "STRING_VALUE", // required
 *       addressLine2: "STRING_VALUE",
 *       addressLine3: "STRING_VALUE",
 *       districtOrCounty: "STRING_VALUE",
 *       city: "STRING_VALUE", // required
 *       stateOrRegion: "STRING_VALUE",
 *       postalCode: "STRING_VALUE", // required
 *       countryCode: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new PutSupplementalTaxRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // PutSupplementalTaxRegistrationResponse
 * //   authorityId: "STRING_VALUE", // required
 * //   status: "Verified" || "Pending" || "Deleted" || "Rejected", // required
 * // };
 *
 * ```
 *
 * @param PutSupplementalTaxRegistrationCommandInput - {@link PutSupplementalTaxRegistrationCommandInput}
 * @returns {@link PutSupplementalTaxRegistrationCommandOutput}
 * @see {@link PutSupplementalTaxRegistrationCommandInput} for command's `input` shape.
 * @see {@link PutSupplementalTaxRegistrationCommandOutput} for command's `response` shape.
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
export class PutSupplementalTaxRegistrationCommand extends $Command
  .classBuilder<
    PutSupplementalTaxRegistrationCommandInput,
    PutSupplementalTaxRegistrationCommandOutput,
    TaxSettingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TaxSettingsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaxSettings", "PutSupplementalTaxRegistration", {})
  .n("TaxSettingsClient", "PutSupplementalTaxRegistrationCommand")
  .sc(PutSupplementalTaxRegistration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSupplementalTaxRegistrationRequest;
      output: PutSupplementalTaxRegistrationResponse;
    };
    sdk: {
      input: PutSupplementalTaxRegistrationCommandInput;
      output: PutSupplementalTaxRegistrationCommandOutput;
    };
  };
}
