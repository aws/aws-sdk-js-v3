// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteSupplementalTaxRegistrationRequest,
  DeleteSupplementalTaxRegistrationResponse,
} from "../models/models_0";
import { DeleteSupplementalTaxRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteSupplementalTaxRegistrationCommandOutput extends DeleteSupplementalTaxRegistrationResponse, __MetadataBearer {}

/**
 * <p> Deletes a supplemental tax registration for a single account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, DeleteSupplementalTaxRegistrationCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, DeleteSupplementalTaxRegistrationCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
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
 *  <p>The exception when the input doesn't pass validation for at least one of the input parameters. </p>
 *
 * @throws {@link TaxSettingsServiceException}
 * <p>Base exception class for all service exceptions from TaxSettings service.</p>
 *
 *
 * @public
 */
export class DeleteSupplementalTaxRegistrationCommand extends command<DeleteSupplementalTaxRegistrationCommandInput, DeleteSupplementalTaxRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSupplementalTaxRegistration",
  DeleteSupplementalTaxRegistration$
) {
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
