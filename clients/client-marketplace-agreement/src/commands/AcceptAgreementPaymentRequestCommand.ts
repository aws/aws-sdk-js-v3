// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcceptAgreementPaymentRequestInput, AcceptAgreementPaymentRequestOutput } from "../models/models_0";
import { AcceptAgreementPaymentRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptAgreementPaymentRequestCommand}.
 */
export interface AcceptAgreementPaymentRequestCommandInput extends AcceptAgreementPaymentRequestInput {}
/**
 * @public
 *
 * The output of {@link AcceptAgreementPaymentRequestCommand}.
 */
export interface AcceptAgreementPaymentRequestCommandOutput extends AcceptAgreementPaymentRequestOutput, __MetadataBearer {}

/**
 * <p>Allows buyers (acceptors) to accept a payment request that is in <code>PENDING_APPROVAL</code> status. Once accepted, the payment request transitions to <code>APPROVED</code> status and the charge will be processed. Buyers can optionally provide a purchase order reference for their internal tracking.</p> <note> <p>Only payment requests in <code>PENDING_APPROVAL</code> status can be accepted. A <code>ConflictException</code> is thrown if the payment request is in any other status.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, AcceptAgreementPaymentRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, AcceptAgreementPaymentRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // AcceptAgreementPaymentRequestInput
 *   paymentRequestId: "STRING_VALUE", // required
 *   agreementId: "STRING_VALUE", // required
 *   purchaseOrderReference: "STRING_VALUE",
 * };
 * const command = new AcceptAgreementPaymentRequestCommand(input);
 * const response = await client.send(command);
 * // { // AcceptAgreementPaymentRequestOutput
 * //   paymentRequestId: "STRING_VALUE",
 * //   agreementId: "STRING_VALUE",
 * //   status: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED",
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
 * @param AcceptAgreementPaymentRequestCommandInput - {@link AcceptAgreementPaymentRequestCommandInput}
 * @returns {@link AcceptAgreementPaymentRequestCommandOutput}
 * @see {@link AcceptAgreementPaymentRequestCommandInput} for command's `input` shape.
 * @see {@link AcceptAgreementPaymentRequestCommandOutput} for command's `response` shape.
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
export class AcceptAgreementPaymentRequestCommand extends command<AcceptAgreementPaymentRequestCommandInput, AcceptAgreementPaymentRequestCommandOutput>(
  _ep0,
  _mw0,
  "AcceptAgreementPaymentRequest",
  AcceptAgreementPaymentRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptAgreementPaymentRequestInput;
      output: AcceptAgreementPaymentRequestOutput;
    };
    sdk: {
      input: AcceptAgreementPaymentRequestCommandInput;
      output: AcceptAgreementPaymentRequestCommandOutput;
    };
  };
}
