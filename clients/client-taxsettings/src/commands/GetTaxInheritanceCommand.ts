// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTaxInheritanceRequest, GetTaxInheritanceResponse } from "../models/models_0";
import { GetTaxInheritance } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTaxInheritanceCommand}.
 */
export interface GetTaxInheritanceCommandInput extends GetTaxInheritanceRequest {}
/**
 * @public
 *
 * The output of {@link GetTaxInheritanceCommand}.
 */
export interface GetTaxInheritanceCommandOutput extends GetTaxInheritanceResponse, __MetadataBearer {}

/**
 * <p>The get account tax inheritance status.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, GetTaxInheritanceCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, GetTaxInheritanceCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
 * const client = new TaxSettingsClient(config);
 * const input = {};
 * const command = new GetTaxInheritanceCommand(input);
 * const response = await client.send(command);
 * // { // GetTaxInheritanceResponse
 * //   heritageStatus: "OptIn" || "OptOut",
 * // };
 *
 * ```
 *
 * @param GetTaxInheritanceCommandInput - {@link GetTaxInheritanceCommandInput}
 * @returns {@link GetTaxInheritanceCommandOutput}
 * @see {@link GetTaxInheritanceCommandInput} for command's `input` shape.
 * @see {@link GetTaxInheritanceCommandOutput} for command's `response` shape.
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
export class GetTaxInheritanceCommand extends $Command
  .classBuilder<
    GetTaxInheritanceCommandInput,
    GetTaxInheritanceCommandOutput,
    TaxSettingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TaxSettingsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaxSettings", "GetTaxInheritance", {})
  .n("TaxSettingsClient", "GetTaxInheritanceCommand")
  .sc(GetTaxInheritance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetTaxInheritanceResponse;
    };
    sdk: {
      input: GetTaxInheritanceCommandInput;
      output: GetTaxInheritanceCommandOutput;
    };
  };
}
