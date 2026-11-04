// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendAgreementPaymentRequestInput, SendAgreementPaymentRequestOutput } from "../models/models_0";
import { SendAgreementPaymentRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendAgreementPaymentRequestCommand}.
 */
export interface SendAgreementPaymentRequestCommandInput extends SendAgreementPaymentRequestInput {}
/**
 * @public
 *
 * The output of {@link SendAgreementPaymentRequestCommand}.
 */
export interface SendAgreementPaymentRequestCommandOutput extends SendAgreementPaymentRequestOutput, __MetadataBearer {}

/**
 * Allows sellers (proposers) to submit a payment request to buyers (acceptors) for a specific charge amount for an agreement that includes a `VariablePaymentTerm`. The payment request is created in `PENDING_APPROVAL` status, at which point the buyer can accept or reject it.
 *
 * > **Note:** The agreement must be active and have a `VariablePaymentTerm` to support payment requests. The `chargeAmount` must not exceed the remaining available balance under the `VariablePaymentTerm` `maxTotalChargeAmount`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, SendAgreementPaymentRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, SendAgreementPaymentRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // SendAgreementPaymentRequestInput
 *   clientToken: "STRING_VALUE",
 *   agreementId: "STRING_VALUE", // required
 *   termId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   chargeAmount: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new SendAgreementPaymentRequestCommand(input);
 * const response = await client.send(command);
 * // { // SendAgreementPaymentRequestOutput
 * //   paymentRequestId: "STRING_VALUE",
 * //   agreementId: "STRING_VALUE",
 * //   status: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   chargeAmount: "STRING_VALUE",
 * //   currencyCode: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param SendAgreementPaymentRequestCommandInput - {@link SendAgreementPaymentRequestCommandInput}
 * @returns {@link SendAgreementPaymentRequestCommandOutput}
 * @see {@link SendAgreementPaymentRequestCommandInput} for command's `input` shape.
 * @see {@link SendAgreementPaymentRequestCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Request was denied due to a resource conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link MarketplaceAgreementServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceAgreement service.
 *
 * @public
 */
export class SendAgreementPaymentRequestCommand extends command<SendAgreementPaymentRequestCommandInput, SendAgreementPaymentRequestCommandOutput>(
  _ep0,
  _mw0,
  "SendAgreementPaymentRequest",
  SendAgreementPaymentRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendAgreementPaymentRequestInput;
      output: SendAgreementPaymentRequestOutput;
    };
    sdk: {
      input: SendAgreementPaymentRequestCommandInput;
      output: SendAgreementPaymentRequestCommandOutput;
    };
  };
}
