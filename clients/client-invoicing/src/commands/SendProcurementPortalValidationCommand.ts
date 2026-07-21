// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SendProcurementPortalValidationRequest,
  SendProcurementPortalValidationResponse,
} from "../models/models_0";
import { SendProcurementPortalValidation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendProcurementPortalValidationCommand}.
 */
export interface SendProcurementPortalValidationCommandInput extends SendProcurementPortalValidationRequest {}
/**
 * @public
 *
 * The output of {@link SendProcurementPortalValidationCommand}.
 */
export interface SendProcurementPortalValidationCommandOutput extends SendProcurementPortalValidationResponse, __MetadataBearer {}

/**
 * <p> <i> <b>This feature API is subject to changing at any time. For more information, see the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Betas and Previews).</b> </i> </p> <p>Sends a validation request for a procurement portal preference. This operation initiates the validation process by issuing a validation code that confirms ownership and connectivity of the configured procurement portal endpoint. Use <code>VerifyProcurementPortalValidation</code> to submit the received code and complete validation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, SendProcurementPortalValidationCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, SendProcurementPortalValidationCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // SendProcurementPortalValidationRequest
 *   ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new SendProcurementPortalValidationCommand(input);
 * const response = await client.send(command);
 * // { // SendProcurementPortalValidationResponse
 * //   ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendProcurementPortalValidationCommandInput - {@link SendProcurementPortalValidationCommandInput}
 * @returns {@link SendProcurementPortalValidationCommandOutput}
 * @see {@link SendProcurementPortalValidationCommandInput} for command's `input` shape.
 * @see {@link SendProcurementPortalValidationCommandOutput} for command's `response` shape.
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
 * @example SendProcurementPortalValidation call
 * ```javascript
 * //
 * const input = {
 *   ProcurementPortalPreferenceArn: "arn:aws:invoicing::111111111111:procurement-portal-preference/f71dd02e-f855-4b13-b793-0fd25c0b3ecd"
 * };
 * const command = new SendProcurementPortalValidationCommand(input);
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
export class SendProcurementPortalValidationCommand extends command<SendProcurementPortalValidationCommandInput, SendProcurementPortalValidationCommandOutput>(
  _ep0,
  _mw0,
  "SendProcurementPortalValidation",
  SendProcurementPortalValidation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendProcurementPortalValidationRequest;
      output: SendProcurementPortalValidationResponse;
    };
    sdk: {
      input: SendProcurementPortalValidationCommandInput;
      output: SendProcurementPortalValidationCommandOutput;
    };
  };
}
