// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutTaxExemptionRequest, PutTaxExemptionResponse } from "../models/models_0";
import { de_PutTaxExemptionCommand, se_PutTaxExemptionCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTaxExemptionCommand}.
 */
export interface PutTaxExemptionCommandInput extends PutTaxExemptionRequest {}
/**
 * @public
 *
 * The output of {@link PutTaxExemptionCommand}.
 */
export interface PutTaxExemptionCommandOutput extends PutTaxExemptionResponse, __MetadataBearer {}

/**
 * <p>Adds the tax exemption for a single account or all accounts listed in a consolidated billing family.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, PutTaxExemptionCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, PutTaxExemptionCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * const client = new TaxSettingsClient(config);
 * const input = { // PutTaxExemptionRequest
 *   accountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 *   authority: { // Authority
 *     country: "STRING_VALUE", // required
 *     state: "STRING_VALUE",
 *   },
 *   exemptionType: "STRING_VALUE", // required
 *   exemptionCertificate: { // ExemptionCertificate
 *     documentName: "STRING_VALUE", // required
 *     documentFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")     // required
 *   },
 * };
 * const command = new PutTaxExemptionCommand(input);
 * const response = await client.send(command);
 * // { // PutTaxExemptionResponse
 * //   caseId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutTaxExemptionCommandInput - {@link PutTaxExemptionCommandInput}
 * @returns {@link PutTaxExemptionCommandOutput}
 * @see {@link PutTaxExemptionCommandInput} for command's `input` shape.
 * @see {@link PutTaxExemptionCommandOutput} for command's `response` shape.
 * @see {@link TaxSettingsClientResolvedConfig | config} for TaxSettingsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The access is denied for the Amazon Web Services Support API.
 *     </p>
 *
 * @throws {@link AttachmentUploadException} (client fault)
 *  <p>Failed to upload the tax exemption document to Amazon Web Services Support case.
 *     </p>
 *
 * @throws {@link CaseCreationLimitExceededException} (client fault)
 *  <p>You've exceeded the Amazon Web Services Support case creation limit for your account.
 *     </p>
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
export class PutTaxExemptionCommand extends $Command
  .classBuilder<
    PutTaxExemptionCommandInput,
    PutTaxExemptionCommandOutput,
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
  .s("TaxSettings", "PutTaxExemption", {})
  .n("TaxSettingsClient", "PutTaxExemptionCommand")
  .f(void 0, void 0)
  .ser(se_PutTaxExemptionCommand)
  .de(de_PutTaxExemptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTaxExemptionRequest;
      output: PutTaxExemptionResponse;
    };
    sdk: {
      input: PutTaxExemptionCommandInput;
      output: PutTaxExemptionCommandOutput;
    };
  };
}
