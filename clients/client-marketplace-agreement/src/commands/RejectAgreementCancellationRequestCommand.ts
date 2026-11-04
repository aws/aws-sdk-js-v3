// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RejectAgreementCancellationRequestInput,
  RejectAgreementCancellationRequestOutput,
} from "../models/models_0";
import { RejectAgreementCancellationRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RejectAgreementCancellationRequestCommand}.
 */
export interface RejectAgreementCancellationRequestCommandInput extends RejectAgreementCancellationRequestInput {}
/**
 * @public
 *
 * The output of {@link RejectAgreementCancellationRequestCommand}.
 */
export interface RejectAgreementCancellationRequestCommandOutput extends RejectAgreementCancellationRequestOutput, __MetadataBearer {}

/**
 * Allows buyers (acceptors) to reject a cancellation request that is in `PENDING_APPROVAL` status. Once rejected, the cancellation request transitions to `REJECTED` status and the agreement remains active. Buyers must provide a reason for the rejection.
 *
 * > **Note:** Only cancellation requests in `PENDING_APPROVAL` status can be rejected. A `ConflictException` is thrown if the cancellation request is in any other status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, RejectAgreementCancellationRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, RejectAgreementCancellationRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // RejectAgreementCancellationRequestInput
 *   agreementId: "STRING_VALUE", // required
 *   agreementCancellationRequestId: "STRING_VALUE", // required
 *   rejectionReason: "STRING_VALUE", // required
 * };
 * const command = new RejectAgreementCancellationRequestCommand(input);
 * const response = await client.send(command);
 * // { // RejectAgreementCancellationRequestOutput
 * //   agreementId: "STRING_VALUE",
 * //   agreementCancellationRequestId: "STRING_VALUE",
 * //   status: "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED" || "VALIDATION_FAILED",
 * //   statusMessage: "STRING_VALUE",
 * //   reasonCode: "INCORRECT_TERMS_ACCEPTED" || "REPLACING_AGREEMENT" || "TEST_AGREEMENT" || "ALTERNATIVE_PROCUREMENT_CHANNEL" || "PRODUCT_DISCONTINUED" || "UNINTENDED_RENEWAL" || "BUYER_DISSATISFACTION" || "OTHER",
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param RejectAgreementCancellationRequestCommandInput - {@link RejectAgreementCancellationRequestCommandInput}
 * @returns {@link RejectAgreementCancellationRequestCommandOutput}
 * @see {@link RejectAgreementCancellationRequestCommandInput} for command's `input` shape.
 * @see {@link RejectAgreementCancellationRequestCommandOutput} for command's `response` shape.
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
export class RejectAgreementCancellationRequestCommand extends command<RejectAgreementCancellationRequestCommandInput, RejectAgreementCancellationRequestCommandOutput>(
  _ep0,
  _mw0,
  "RejectAgreementCancellationRequest",
  RejectAgreementCancellationRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectAgreementCancellationRequestInput;
      output: RejectAgreementCancellationRequestOutput;
    };
    sdk: {
      input: RejectAgreementCancellationRequestCommandInput;
      output: RejectAgreementCancellationRequestCommandOutput;
    };
  };
}
