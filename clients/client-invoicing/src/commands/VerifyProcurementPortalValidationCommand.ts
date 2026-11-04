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
 * ***This feature API is subject to changing at any time. For more information, see the [Amazon Web Services Service Terms](https://aws.amazon.com/service-terms/) (Betas and Previews).***
 *
 * Submits a validation code to complete the validation of a procurement portal preference. Use this operation after calling `SendProcurementPortalValidation` to confirm ownership and connectivity of the configured procurement portal endpoint.
 *
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
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The processing request failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InvoicingServiceException}
 *
 * Base exception class for all service exceptions from Invoicing service.
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
