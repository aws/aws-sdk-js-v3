// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CancelAgreementCancellationRequestInput,
  CancelAgreementCancellationRequestOutput,
} from "../models/models_0";
import { CancelAgreementCancellationRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelAgreementCancellationRequestCommand}.
 */
export interface CancelAgreementCancellationRequestCommandInput extends CancelAgreementCancellationRequestInput {}
/**
 * @public
 *
 * The output of {@link CancelAgreementCancellationRequestCommand}.
 */
export interface CancelAgreementCancellationRequestCommandOutput extends CancelAgreementCancellationRequestOutput, __MetadataBearer {}

/**
 * <p>Allows sellers (proposers) to withdraw an existing agreement cancellation request that is in a pending state. Once cancelled, the cancellation request transitions to <code>CANCELLED</code> status and can no longer be approved or rejected by the buyer.</p> <note> <p>Only cancellation requests in <code>PENDING_APPROVAL</code> status can be cancelled. A <code>ConflictException</code> is thrown if the cancellation request is in any other status.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, CancelAgreementCancellationRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, CancelAgreementCancellationRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // CancelAgreementCancellationRequestInput
 *   agreementId: "STRING_VALUE", // required
 *   agreementCancellationRequestId: "STRING_VALUE", // required
 *   cancellationReason: "STRING_VALUE", // required
 * };
 * const command = new CancelAgreementCancellationRequestCommand(input);
 * const response = await client.send(command);
 * // { // CancelAgreementCancellationRequestOutput
 * //   agreementCancellationRequestId: "STRING_VALUE",
 * //   agreementId: "STRING_VALUE",
 * //   reasonCode: "INCORRECT_TERMS_ACCEPTED" || "REPLACING_AGREEMENT" || "TEST_AGREEMENT" || "ALTERNATIVE_PROCUREMENT_CHANNEL" || "PRODUCT_DISCONTINUED" || "UNINTENDED_RENEWAL" || "BUYER_DISSATISFACTION" || "OTHER",
 * //   description: "STRING_VALUE",
 * //   status: "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED" || "VALIDATION_FAILED",
 * //   statusMessage: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CancelAgreementCancellationRequestCommandInput - {@link CancelAgreementCancellationRequestCommandInput}
 * @returns {@link CancelAgreementCancellationRequestCommandOutput}
 * @see {@link CancelAgreementCancellationRequestCommandInput} for command's `input` shape.
 * @see {@link CancelAgreementCancellationRequestCommandOutput} for command's `response` shape.
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
 * @example Cancel a cancellation request
 * ```javascript
 * //
 * const input = {
 *   agreementCancellationRequestId: "acr-752jqvg74yo7k4h56cakk6396",
 *   agreementId: "agmt-752jqvg74yo7k4h56cakk6396",
 *   cancellationReason: "Requested agreement cancellation by mistake"
 * };
 * const command = new CancelAgreementCancellationRequestCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   agreementCancellationRequestId: "acr-752jqvg74yo7k4h56cakk6396",
 *   agreementId: "agmt-752jqvg74yo7k4h56cakk6396",
 *   createdAt: "2025-01-15T10:30:00Z",
 *   description: "Product is being discontinued and no longer supported",
 *   reasonCode: "PRODUCT_DISCONTINUED",
 *   status: "CANCELLED",
 *   statusMessage: "Cancellation requested by seller",
 *   updatedAt: "2025-01-16T10:30:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelAgreementCancellationRequestCommand extends command<CancelAgreementCancellationRequestCommandInput, CancelAgreementCancellationRequestCommandOutput>(
  _ep0,
  _mw0,
  "CancelAgreementCancellationRequest",
  CancelAgreementCancellationRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelAgreementCancellationRequestInput;
      output: CancelAgreementCancellationRequestOutput;
    };
    sdk: {
      input: CancelAgreementCancellationRequestCommandInput;
      output: CancelAgreementCancellationRequestCommandOutput;
    };
  };
}
