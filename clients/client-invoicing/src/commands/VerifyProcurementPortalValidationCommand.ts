// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  VerifyProcurementPortalValidationRequest,
  VerifyProcurementPortalValidationResponse,
} from "../models/models_0";
import { VerifyProcurementPortalValidation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link VerifyProcurementPortalValidationCommand}.
 */
export interface VerifyProcurementPortalValidationCommandInput extends VerifyProcurementPortalValidationRequest {}
/**
 * @public
 *
 * The output of {@link VerifyProcurementPortalValidationCommand}.
 */
export interface VerifyProcurementPortalValidationCommandOutput extends VerifyProcurementPortalValidationResponse, __MetadataBearer {}

/**
 * <p> <i> <b>This feature API is subject to changing at any time. For more information, see the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Betas and Previews).</b> </i> </p> <p>Submits a validation code to complete the validation of a procurement portal preference. Use this operation after calling <code>SendProcurementPortalValidation</code> to confirm ownership and connectivity of the configured procurement portal endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, VerifyProcurementPortalValidationCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, VerifyProcurementPortalValidationCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // VerifyProcurementPortalValidationRequest
 *   ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 *   Code: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new VerifyProcurementPortalValidationCommand(input);
 * const response = await client.send(command);
 * // { // VerifyProcurementPortalValidationResponse
 * //   ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param VerifyProcurementPortalValidationCommandInput - {@link VerifyProcurementPortalValidationCommandInput}
 * @returns {@link VerifyProcurementPortalValidationCommandOutput}
 * @see {@link VerifyProcurementPortalValidationCommandInput} for command's `input` shape.
 * @see {@link VerifyProcurementPortalValidationCommandOutput} for command's `response` shape.
 * @see {@link InvoicingClientResolvedConfig | config} for InvoicingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The processing request failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link InvoicingServiceException}
 * <p>Base exception class for all service exceptions from Invoicing service.</p>
 *
 *
 * @example VerifyProcurementPortalValidation call
 * ```javascript
 * //
 * const input = {
 *   Code: "validation-code-123",
 *   ProcurementPortalPreferenceArn: "arn:aws:invoicing::111111111111:procurement-portal-preference/f71dd02e-f855-4b13-b793-0fd25c0b3ecd"
 * };
 * const command = new VerifyProcurementPortalValidationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ProcurementPortalPreferenceArn: "arn:aws:invoicing::111111111111:procurement-portal-preference/f71dd02e-f855-4b13-b793-0fd25c0b3ecd"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class VerifyProcurementPortalValidationCommand extends command<VerifyProcurementPortalValidationCommandInput, VerifyProcurementPortalValidationCommandOutput>(
  _ep0,
  _mw0,
  "VerifyProcurementPortalValidation",
  VerifyProcurementPortalValidation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyProcurementPortalValidationRequest;
      output: VerifyProcurementPortalValidationResponse;
    };
    sdk: {
      input: VerifyProcurementPortalValidationCommandInput;
      output: VerifyProcurementPortalValidationCommandOutput;
    };
  };
}
