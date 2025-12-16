// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutTaxInheritanceRequest, PutTaxInheritanceResponse } from "../models/models_0";
import { PutTaxInheritance$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTaxInheritanceCommand}.
 */
export interface PutTaxInheritanceCommandInput extends PutTaxInheritanceRequest {}
/**
 * @public
 *
 * The output of {@link PutTaxInheritanceCommand}.
 */
export interface PutTaxInheritanceCommandOutput extends PutTaxInheritanceResponse, __MetadataBearer {}

/**
 * <p>The updated tax inheritance status.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, PutTaxInheritanceCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, PutTaxInheritanceCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
 * const client = new TaxSettingsClient(config);
 * const input = { // PutTaxInheritanceRequest
 *   heritageStatus: "OptIn" || "OptOut",
 * };
 * const command = new PutTaxInheritanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTaxInheritanceCommandInput - {@link PutTaxInheritanceCommandInput}
 * @returns {@link PutTaxInheritanceCommandOutput}
 * @see {@link PutTaxInheritanceCommandInput} for command's `input` shape.
 * @see {@link PutTaxInheritanceCommandOutput} for command's `response` shape.
 * @see {@link TaxSettingsClientResolvedConfig | config} for TaxSettingsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The exception when the input is creating conflict with the given state.</p>
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
export class PutTaxInheritanceCommand extends $Command
  .classBuilder<
    PutTaxInheritanceCommandInput,
    PutTaxInheritanceCommandOutput,
    TaxSettingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TaxSettingsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaxSettings", "PutTaxInheritance", {})
  .n("TaxSettingsClient", "PutTaxInheritanceCommand")
  .sc(PutTaxInheritance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTaxInheritanceRequest;
      output: {};
    };
    sdk: {
      input: PutTaxInheritanceCommandInput;
      output: PutTaxInheritanceCommandOutput;
    };
  };
}
