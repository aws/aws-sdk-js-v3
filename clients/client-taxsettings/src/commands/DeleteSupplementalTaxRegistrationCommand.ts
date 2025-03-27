// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteSupplementalTaxRegistrationRequest,
  DeleteSupplementalTaxRegistrationResponse,
} from "../models/models_0";
import {
  de_DeleteSupplementalTaxRegistrationCommand,
  se_DeleteSupplementalTaxRegistrationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSupplementalTaxRegistrationCommand}.
 */
export interface DeleteSupplementalTaxRegistrationCommandInput extends DeleteSupplementalTaxRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSupplementalTaxRegistrationCommand}.
 */
export interface DeleteSupplementalTaxRegistrationCommandOutput
  extends DeleteSupplementalTaxRegistrationResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Deletes a supplemental tax registration for a single account.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, DeleteSupplementalTaxRegistrationCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, DeleteSupplementalTaxRegistrationCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * const client = new TaxSettingsClient(config);
 * const input = { // DeleteSupplementalTaxRegistrationRequest
 *   authorityId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSupplementalTaxRegistrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSupplementalTaxRegistrationCommandInput - {@link DeleteSupplementalTaxRegistrationCommandInput}
 * @returns {@link DeleteSupplementalTaxRegistrationCommandOutput}
 * @see {@link DeleteSupplementalTaxRegistrationCommandInput} for command's `input` shape.
 * @see {@link DeleteSupplementalTaxRegistrationCommandOutput} for command's `response` shape.
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
export class DeleteSupplementalTaxRegistrationCommand extends $Command
  .classBuilder<
    DeleteSupplementalTaxRegistrationCommandInput,
    DeleteSupplementalTaxRegistrationCommandOutput,
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
  .s("TaxSettings", "DeleteSupplementalTaxRegistration", {})
  .n("TaxSettingsClient", "DeleteSupplementalTaxRegistrationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSupplementalTaxRegistrationCommand)
  .de(de_DeleteSupplementalTaxRegistrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSupplementalTaxRegistrationRequest;
      output: {};
    };
    sdk: {
      input: DeleteSupplementalTaxRegistrationCommandInput;
      output: DeleteSupplementalTaxRegistrationCommandOutput;
    };
  };
}
