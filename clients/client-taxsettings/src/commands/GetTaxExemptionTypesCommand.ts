// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTaxExemptionTypesRequest, GetTaxExemptionTypesResponse } from "../models/models_0";
import { de_GetTaxExemptionTypesCommand, se_GetTaxExemptionTypesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTaxExemptionTypesCommand}.
 */
export interface GetTaxExemptionTypesCommandInput extends GetTaxExemptionTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetTaxExemptionTypesCommand}.
 */
export interface GetTaxExemptionTypesCommandOutput extends GetTaxExemptionTypesResponse, __MetadataBearer {}

/**
 * <p>Get supported tax exemption types. The IAM action is <code>tax:GetExemptions</code>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, GetTaxExemptionTypesCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, GetTaxExemptionTypesCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
 * const client = new TaxSettingsClient(config);
 * const input = {};
 * const command = new GetTaxExemptionTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetTaxExemptionTypesResponse
 * //   taxExemptionTypes: [ // TaxExemptionTypes
 * //     { // TaxExemptionType
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       applicableJurisdictions: [ // Authorities
 * //         { // Authority
 * //           country: "STRING_VALUE", // required
 * //           state: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTaxExemptionTypesCommandInput - {@link GetTaxExemptionTypesCommandInput}
 * @returns {@link GetTaxExemptionTypesCommandOutput}
 * @see {@link GetTaxExemptionTypesCommandInput} for command's `input` shape.
 * @see {@link GetTaxExemptionTypesCommandOutput} for command's `response` shape.
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
export class GetTaxExemptionTypesCommand extends $Command
  .classBuilder<
    GetTaxExemptionTypesCommandInput,
    GetTaxExemptionTypesCommandOutput,
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
  .s("TaxSettings", "GetTaxExemptionTypes", {})
  .n("TaxSettingsClient", "GetTaxExemptionTypesCommand")
  .f(void 0, void 0)
  .ser(se_GetTaxExemptionTypesCommand)
  .de(de_GetTaxExemptionTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetTaxExemptionTypesResponse;
    };
    sdk: {
      input: GetTaxExemptionTypesCommandInput;
      output: GetTaxExemptionTypesCommandOutput;
    };
  };
}
