// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendAgreementCancellationRequestInput, SendAgreementCancellationRequestOutput } from "../models/models_0";
import { SendAgreementCancellationRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendAgreementCancellationRequestCommand}.
 */
export interface SendAgreementCancellationRequestCommandInput extends SendAgreementCancellationRequestInput {}
/**
 * @public
 *
 * The output of {@link SendAgreementCancellationRequestCommand}.
 */
export interface SendAgreementCancellationRequestCommandOutput extends SendAgreementCancellationRequestOutput, __MetadataBearer {}

/**
 * Allows sellers (proposers) to submit a cancellation request for an active agreement. The cancellation request is created in `PENDING_APPROVAL` status, at which point the buyer can review it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, SendAgreementCancellationRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, SendAgreementCancellationRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // SendAgreementCancellationRequestInput
 *   agreementId: "STRING_VALUE", // required
 *   reasonCode: "INCORRECT_TERMS_ACCEPTED" || "REPLACING_AGREEMENT" || "TEST_AGREEMENT" || "ALTERNATIVE_PROCUREMENT_CHANNEL" || "PRODUCT_DISCONTINUED" || "UNINTENDED_RENEWAL" || "BUYER_DISSATISFACTION" || "OTHER", // required
 *   clientToken: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new SendAgreementCancellationRequestCommand(input);
 * const response = await client.send(command);
 * // { // SendAgreementCancellationRequestOutput
 * //   agreementId: "STRING_VALUE",
 * //   agreementCancellationRequestId: "STRING_VALUE",
 * //   status: "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED" || "VALIDATION_FAILED",
 * //   reasonCode: "INCORRECT_TERMS_ACCEPTED" || "REPLACING_AGREEMENT" || "TEST_AGREEMENT" || "ALTERNATIVE_PROCUREMENT_CHANNEL" || "PRODUCT_DISCONTINUED" || "UNINTENDED_RENEWAL" || "BUYER_DISSATISFACTION" || "OTHER",
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param SendAgreementCancellationRequestCommandInput - {@link SendAgreementCancellationRequestCommandInput}
 * @returns {@link SendAgreementCancellationRequestCommandOutput}
 * @see {@link SendAgreementCancellationRequestCommandInput} for command's `input` shape.
 * @see {@link SendAgreementCancellationRequestCommandOutput} for command's `response` shape.
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
 * @example Send a cancellation request
 * ```javascript
 * //
 * const input = {
 *   agreementId: "agmt-752jqvg74yo7k4h56cakk6396",
 *   clientToken: "53nQSKWt6AjrsiZPhzQyZT",
 *   description: "Due to budget constraints, we are unable to continue with our current subscription",
 *   reasonCode: "OTHER"
 * };
 * const command = new SendAgreementCancellationRequestCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   agreementCancellationRequestId: "acr-752jqvg74yo7k4h56cakk6396",
 *   agreementId: "agmt-752jqvg74yo7k4h56cakk6396",
 *   createdAt: "2025-01-15T10:30:00Z",
 *   description: "Due to budget constraints, we are unable to continue with our current subscription",
 *   reasonCode: "OTHER",
 *   status: "PENDING_APPROVAL",
 *   updatedAt: "2025-01-15T10:30:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SendAgreementCancellationRequestCommand extends command<SendAgreementCancellationRequestCommandInput, SendAgreementCancellationRequestCommandOutput>(
  _ep0,
  _mw0,
  "SendAgreementCancellationRequest",
  SendAgreementCancellationRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendAgreementCancellationRequestInput;
      output: SendAgreementCancellationRequestOutput;
    };
    sdk: {
      input: SendAgreementCancellationRequestCommandInput;
      output: SendAgreementCancellationRequestCommandOutput;
    };
  };
}
