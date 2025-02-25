// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTaxExemptionsRequest, ListTaxExemptionsResponse } from "../models/models_0";
import { de_ListTaxExemptionsCommand, se_ListTaxExemptionsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTaxExemptionsCommand}.
 */
export interface ListTaxExemptionsCommandInput extends ListTaxExemptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTaxExemptionsCommand}.
 */
export interface ListTaxExemptionsCommandOutput extends ListTaxExemptionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the tax exemption of accounts listed in a consolidated billing family. The IAM action is <code>tax:GetExemptions</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, ListTaxExemptionsCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, ListTaxExemptionsCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * const client = new TaxSettingsClient(config);
 * const input = { // ListTaxExemptionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTaxExemptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTaxExemptionsResponse
 * //   nextToken: "STRING_VALUE",
 * //   taxExemptionDetailsMap: { // TaxExemptionDetailsMap
 * //     "<keys>": { // TaxExemptionDetails
 * //       taxExemptions: [ // TaxExemptions
 * //         { // TaxExemption
 * //           authority: { // Authority
 * //             country: "STRING_VALUE", // required
 * //             state: "STRING_VALUE",
 * //           },
 * //           taxExemptionType: { // TaxExemptionType
 * //             displayName: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //             applicableJurisdictions: [ // Authorities
 * //               {
 * //                 country: "STRING_VALUE", // required
 * //                 state: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           effectiveDate: new Date("TIMESTAMP"),
 * //           expirationDate: new Date("TIMESTAMP"),
 * //           systemEffectiveDate: new Date("TIMESTAMP"),
 * //           status: "None" || "Valid" || "Expired" || "Pending",
 * //         },
 * //       ],
 * //       heritageObtainedDetails: true || false,
 * //       heritageObtainedParentEntity: "STRING_VALUE",
 * //       heritageObtainedReason: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTaxExemptionsCommandInput - {@link ListTaxExemptionsCommandInput}
 * @returns {@link ListTaxExemptionsCommandOutput}
 * @see {@link ListTaxExemptionsCommandInput} for command's `input` shape.
 * @see {@link ListTaxExemptionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListTaxExemptionsCommand extends $Command
  .classBuilder<
    ListTaxExemptionsCommandInput,
    ListTaxExemptionsCommandOutput,
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
  .s("TaxSettings", "ListTaxExemptions", {})
  .n("TaxSettingsClient", "ListTaxExemptionsCommand")
  .f(void 0, void 0)
  .ser(se_ListTaxExemptionsCommand)
  .de(de_ListTaxExemptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTaxExemptionsRequest;
      output: ListTaxExemptionsResponse;
    };
    sdk: {
      input: ListTaxExemptionsCommandInput;
      output: ListTaxExemptionsCommandOutput;
    };
  };
}
