// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RejectAgreementPaymentRequestInput, RejectAgreementPaymentRequestOutput } from "../models/models_0";
import { RejectAgreementPaymentRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RejectAgreementPaymentRequestCommand}.
 */
export interface RejectAgreementPaymentRequestCommandInput extends RejectAgreementPaymentRequestInput {}
/**
 * @public
 *
 * The output of {@link RejectAgreementPaymentRequestCommand}.
 */
export interface RejectAgreementPaymentRequestCommandOutput extends RejectAgreementPaymentRequestOutput, __MetadataBearer {}

/**
 * <p>Allows buyers (acceptors) to reject a payment request that is in <code>PENDING_APPROVAL</code> status. Once rejected, the payment request transitions to <code>REJECTED</code> status and cannot be accepted. Buyers can optionally provide a reason for the rejection.</p> <note> <p>Only payment requests in <code>PENDING_APPROVAL</code> status can be rejected. A <code>ConflictException</code> is thrown if the payment request is in any other status.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, RejectAgreementPaymentRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, RejectAgreementPaymentRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // RejectAgreementPaymentRequestInput
 *   paymentRequestId: "STRING_VALUE", // required
 *   agreementId: "STRING_VALUE", // required
 *   rejectionReason: "STRING_VALUE",
 * };
 * const command = new RejectAgreementPaymentRequestCommand(input);
 * const response = await client.send(command);
 * // { // RejectAgreementPaymentRequestOutput
 * //   paymentRequestId: "STRING_VALUE",
 * //   agreementId: "STRING_VALUE",
 * //   status: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED",
 * //   statusMessage: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   chargeAmount: "STRING_VALUE",
 * //   currencyCode: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param RejectAgreementPaymentRequestCommandInput - {@link RejectAgreementPaymentRequestCommandInput}
 * @returns {@link RejectAgreementPaymentRequestCommandOutput}
 * @see {@link RejectAgreementPaymentRequestCommandInput} for command's `input` shape.
 * @see {@link RejectAgreementPaymentRequestCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Request was denied due to a resource conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceAgreementServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceAgreement service.</p>
 *
 *
 * @public
 */
export class RejectAgreementPaymentRequestCommand extends command<RejectAgreementPaymentRequestCommandInput, RejectAgreementPaymentRequestCommandOutput>(
  _ep0,
  _mw0,
  "RejectAgreementPaymentRequest",
  RejectAgreementPaymentRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectAgreementPaymentRequestInput;
      output: RejectAgreementPaymentRequestOutput;
    };
    sdk: {
      input: RejectAgreementPaymentRequestCommandInput;
      output: RejectAgreementPaymentRequestCommandOutput;
    };
  };
}
