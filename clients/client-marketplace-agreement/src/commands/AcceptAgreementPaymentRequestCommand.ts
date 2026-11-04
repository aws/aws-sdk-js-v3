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
 * Allows buyers (acceptors) to accept a payment request that is in `PENDING_APPROVAL` status. Once accepted, the payment request transitions to `APPROVED` status and the charge will be processed. Buyers can optionally provide a purchase order reference for their internal tracking.
 *
 * > **Note:** Only payment requests in `PENDING_APPROVAL` status can be accepted. A `ConflictException` is thrown if the payment request is in any other status.
 *
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
