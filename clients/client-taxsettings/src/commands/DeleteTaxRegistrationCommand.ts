// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTaxRegistrationRequest, DeleteTaxRegistrationResponse } from "../models/models_0";
import { de_DeleteTaxRegistrationCommand, se_DeleteTaxRegistrationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTaxRegistrationCommand}.
 */
export interface DeleteTaxRegistrationCommandInput extends DeleteTaxRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTaxRegistrationCommand}.
 */
export interface DeleteTaxRegistrationCommandOutput extends DeleteTaxRegistrationResponse, __MetadataBearer {}

/**
 * <p>Deletes tax registration for a single account. </p>
 *          <note>
 *             <p>This API operation can't be used to delete your tax registration in Brazil. Use the <a href="https://console.aws.amazon.com/billing/home#/paymentpreferences/paymentmethods">Payment preferences</a> page in the Billing and Cost Management console instead.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, DeleteTaxRegistrationCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, DeleteTaxRegistrationCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * const client = new TaxSettingsClient(config);
 * const input = { // DeleteTaxRegistrationRequest
 *   accountId: "STRING_VALUE",
 * };
 * const command = new DeleteTaxRegistrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTaxRegistrationCommandInput - {@link DeleteTaxRegistrationCommandInput}
 * @returns {@link DeleteTaxRegistrationCommandOutput}
 * @see {@link DeleteTaxRegistrationCommandInput} for command's `input` shape.
 * @see {@link DeleteTaxRegistrationCommandOutput} for command's `response` shape.
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
export class DeleteTaxRegistrationCommand extends $Command
  .classBuilder<
    DeleteTaxRegistrationCommandInput,
    DeleteTaxRegistrationCommandOutput,
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
  .s("TaxSettings", "DeleteTaxRegistration", {})
  .n("TaxSettingsClient", "DeleteTaxRegistrationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTaxRegistrationCommand)
  .de(de_DeleteTaxRegistrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTaxRegistrationRequest;
      output: {};
    };
    sdk: {
      input: DeleteTaxRegistrationCommandInput;
      output: DeleteTaxRegistrationCommandOutput;
    };
  };
}
