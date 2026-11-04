// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AcceptAgreementCancellationRequestInput,
  AcceptAgreementCancellationRequestOutput,
} from "../models/models_0";
import { AcceptAgreementCancellationRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptAgreementCancellationRequestCommand}.
 */
export interface AcceptAgreementCancellationRequestCommandInput extends AcceptAgreementCancellationRequestInput {}
/**
 * @public
 *
 * The output of {@link AcceptAgreementCancellationRequestCommand}.
 */
export interface AcceptAgreementCancellationRequestCommandOutput extends AcceptAgreementCancellationRequestOutput, __MetadataBearer {}

/**
 * Allows buyers (acceptors) to accept a cancellation request that is in `PENDING_APPROVAL` status. Once accepted, the cancellation request transitions to `APPROVED` status and the agreement cancellation will be processed.
 *
 * > **Note:** Only cancellation requests in `PENDING_APPROVAL` status can be accepted. A `ConflictException` is thrown if the cancellation request is in any other status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, AcceptAgreementCancellationRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, AcceptAgreementCancellationRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // AcceptAgreementCancellationRequestInput
 *   agreementId: "STRING_VALUE", // required
 *   agreementCancellationRequestId: "STRING_VALUE", // required
 * };
 * const command = new AcceptAgreementCancellationRequestCommand(input);
 * const response = await client.send(command);
 * // { // AcceptAgreementCancellationRequestOutput
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
 * @param AcceptAgreementCancellationRequestCommandInput - {@link AcceptAgreementCancellationRequestCommandInput}
 * @returns {@link AcceptAgreementCancellationRequestCommandOutput}
 * @see {@link AcceptAgreementCancellationRequestCommandInput} for command's `input` shape.
 * @see {@link AcceptAgreementCancellationRequestCommandOutput} for command's `response` shape.
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
export class AcceptAgreementCancellationRequestCommand extends command<AcceptAgreementCancellationRequestCommandInput, AcceptAgreementCancellationRequestCommandOutput>(
  _ep0,
  _mw0,
  "AcceptAgreementCancellationRequest",
  AcceptAgreementCancellationRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptAgreementCancellationRequestInput;
      output: AcceptAgreementCancellationRequestOutput;
    };
    sdk: {
      input: AcceptAgreementCancellationRequestCommandInput;
      output: AcceptAgreementCancellationRequestCommandOutput;
    };
  };
}
