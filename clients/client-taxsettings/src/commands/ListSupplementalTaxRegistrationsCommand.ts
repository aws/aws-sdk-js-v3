// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSupplementalTaxRegistrationsRequest, ListSupplementalTaxRegistrationsResponse } from "../models/models_0";
import { ListSupplementalTaxRegistrations } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSupplementalTaxRegistrationsCommand}.
 */
export interface ListSupplementalTaxRegistrationsCommandInput extends ListSupplementalTaxRegistrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSupplementalTaxRegistrationsCommand}.
 */
export interface ListSupplementalTaxRegistrationsCommandOutput
  extends ListSupplementalTaxRegistrationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Retrieves supplemental tax registrations for a single account.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, ListSupplementalTaxRegistrationsCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, ListSupplementalTaxRegistrationsCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
 * const client = new TaxSettingsClient(config);
 * const input = { // ListSupplementalTaxRegistrationsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSupplementalTaxRegistrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSupplementalTaxRegistrationsResponse
 * //   taxRegistrations: [ // SupplementalTaxRegistrationList // required
 * //     { // SupplementalTaxRegistration
 * //       registrationId: "STRING_VALUE", // required
 * //       registrationType: "VAT", // required
 * //       legalName: "STRING_VALUE", // required
 * //       address: { // Address
 * //         addressLine1: "STRING_VALUE", // required
 * //         addressLine2: "STRING_VALUE",
 * //         addressLine3: "STRING_VALUE",
 * //         districtOrCounty: "STRING_VALUE",
 * //         city: "STRING_VALUE", // required
 * //         stateOrRegion: "STRING_VALUE",
 * //         postalCode: "STRING_VALUE", // required
 * //         countryCode: "STRING_VALUE", // required
 * //       },
 * //       authorityId: "STRING_VALUE", // required
 * //       status: "Verified" || "Pending" || "Deleted" || "Rejected", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSupplementalTaxRegistrationsCommandInput - {@link ListSupplementalTaxRegistrationsCommandInput}
 * @returns {@link ListSupplementalTaxRegistrationsCommandOutput}
 * @see {@link ListSupplementalTaxRegistrationsCommandInput} for command's `input` shape.
 * @see {@link ListSupplementalTaxRegistrationsCommandOutput} for command's `response` shape.
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
export class ListSupplementalTaxRegistrationsCommand extends $Command
  .classBuilder<
    ListSupplementalTaxRegistrationsCommandInput,
    ListSupplementalTaxRegistrationsCommandOutput,
    TaxSettingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TaxSettingsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaxSettings", "ListSupplementalTaxRegistrations", {})
  .n("TaxSettingsClient", "ListSupplementalTaxRegistrationsCommand")
  .sc(ListSupplementalTaxRegistrations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSupplementalTaxRegistrationsRequest;
      output: ListSupplementalTaxRegistrationsResponse;
    };
    sdk: {
      input: ListSupplementalTaxRegistrationsCommandInput;
      output: ListSupplementalTaxRegistrationsCommandOutput;
    };
  };
}
