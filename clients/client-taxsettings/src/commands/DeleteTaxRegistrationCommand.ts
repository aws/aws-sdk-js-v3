// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTaxRegistrationRequest, DeleteTaxRegistrationResponse } from "../models/models_0";
import { DeleteTaxRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Deletes tax registration for a single account. </p> <note> <p>This API operation can't be used to delete your tax registration in Brazil. Use the <a href="https://console.aws.amazon.com/billing/home#/paymentpreferences/paymentmethods">Payment preferences</a> page in the Billing and Cost Management console instead.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, DeleteTaxRegistrationCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, DeleteTaxRegistrationCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
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
 *  <p>The exception when the input doesn't pass validation for at least one of the input parameters. </p>
 *
 * @throws {@link TaxSettingsServiceException}
 * <p>Base exception class for all service exceptions from TaxSettings service.</p>
 *
 *
 * @public
 */
export class DeleteTaxRegistrationCommand extends command<DeleteTaxRegistrationCommandInput, DeleteTaxRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTaxRegistration",
  DeleteTaxRegistration$
) {
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
