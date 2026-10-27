// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CancelContractualInvestmentAttestationRequest,
  CancelContractualInvestmentAttestationResponse,
} from "../models/models_0";
import { CancelContractualInvestmentAttestation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelContractualInvestmentAttestationCommand}.
 */
export interface CancelContractualInvestmentAttestationCommandInput extends CancelContractualInvestmentAttestationRequest {}
/**
 * @public
 *
 * The output of {@link CancelContractualInvestmentAttestationCommand}.
 */
export interface CancelContractualInvestmentAttestationCommandOutput extends CancelContractualInvestmentAttestationResponse, __MetadataBearer {}

/**
 * <p>Cancels a contractual investment attestation. This operation is idempotent, so retrying is safe. You can cancel an attestation only while it is still pending (its <code>isCancellable</code> value is <code>true</code>).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, CancelContractualInvestmentAttestationCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, CancelContractualInvestmentAttestationCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // CancelContractualInvestmentAttestationRequest
 *   attestationId: "STRING_VALUE", // required
 *   contractArn: "STRING_VALUE", // required
 *   reason: "STRING_VALUE", // required
 * };
 * const command = new CancelContractualInvestmentAttestationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelContractualInvestmentAttestationCommandInput - {@link CancelContractualInvestmentAttestationCommandInput}
 * @returns {@link CancelContractualInvestmentAttestationCommandOutput}
 * @see {@link CancelContractualInvestmentAttestationCommandInput} for command's `input` shape.
 * @see {@link CancelContractualInvestmentAttestationCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ARN in the request doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link BillingServiceException}
 * <p>Base exception class for all service exceptions from Billing service.</p>
 *
 *
 * @example Invoke CancelContractualInvestmentAttestation
 * ```javascript
 * //
 * const input = {
 *   attestationId: "a1b2c3d4-5678-90ab-cdef-111122223333",
 *   contractArn: "arn:aws:billing::123456789012:contract/1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *   reason: "Example cancellation reason"
 * };
 * const command = new CancelContractualInvestmentAttestationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CancelContractualInvestmentAttestationCommand extends command<CancelContractualInvestmentAttestationCommandInput, CancelContractualInvestmentAttestationCommandOutput>(
  _ep0,
  _mw0,
  "CancelContractualInvestmentAttestation",
  CancelContractualInvestmentAttestation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelContractualInvestmentAttestationRequest;
      output: {};
    };
    sdk: {
      input: CancelContractualInvestmentAttestationCommandInput;
      output: CancelContractualInvestmentAttestationCommandOutput;
    };
  };
}
