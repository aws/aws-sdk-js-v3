// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchCreateBillingAdjustmentRequestInput,
  BatchCreateBillingAdjustmentRequestOutput,
} from "../models/models_0";
import { BatchCreateBillingAdjustmentRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchCreateBillingAdjustmentRequestCommand}.
 */
export interface BatchCreateBillingAdjustmentRequestCommandInput extends BatchCreateBillingAdjustmentRequestInput {}
/**
 * @public
 *
 * The output of {@link BatchCreateBillingAdjustmentRequestCommand}.
 */
export interface BatchCreateBillingAdjustmentRequestCommandOutput extends BatchCreateBillingAdjustmentRequestOutput, __MetadataBearer {}

/**
 * <p>Allows sellers (proposers) to submit billing adjustment requests for one or more invoices within an agreement. Each entry in the batch specifies an invoice and the adjustment amount. The operation returns successfully created adjustment request IDs and any errors for entries that failed to process.</p> <note> <p>Each entry requires a unique <code>clientToken</code> for idempotency.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, BatchCreateBillingAdjustmentRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, BatchCreateBillingAdjustmentRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // BatchCreateBillingAdjustmentRequestInput
 *   billingAdjustmentRequestEntries: [ // BatchCreateBillingAdjustmentRequestEntryList // required
 *     { // BatchCreateBillingAdjustmentRequestEntry
 *       agreementId: "STRING_VALUE", // required
 *       originalInvoiceId: "STRING_VALUE", // required
 *       adjustmentAmount: "STRING_VALUE", // required
 *       currencyCode: "STRING_VALUE", // required
 *       adjustmentReasonCode: "INCORRECT_TERMS_ACCEPTED" || "INCORRECT_METERING" || "TEST_ENVIRONMENT_CHARGES" || "ALTERNATIVE_PROCUREMENT_CHANNEL" || "UNINTENDED_RENEWAL" || "BUYER_DISSATISFACTION" || "OTHER", // required
 *       description: "STRING_VALUE",
 *       clientToken: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchCreateBillingAdjustmentRequestCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateBillingAdjustmentRequestOutput
 * //   items: [ // BatchCreateBillingAdjustmentItemList // required
 * //     { // BatchCreateBillingAdjustmentItem
 * //       billingAdjustmentRequestId: "STRING_VALUE", // required
 * //       clientToken: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   errors: [ // BatchCreateBillingAdjustmentErrorList // required
 * //     { // BatchCreateBillingAdjustmentError
 * //       code: "CONFLICT_EXCEPTION" || "VALIDATION_EXCEPTION" || "RESOURCE_NOT_FOUND_EXCEPTION" || "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //       clientToken: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateBillingAdjustmentRequestCommandInput - {@link BatchCreateBillingAdjustmentRequestCommandInput}
 * @returns {@link BatchCreateBillingAdjustmentRequestCommandOutput}
 * @see {@link BatchCreateBillingAdjustmentRequestCommandInput} for command's `input` shape.
 * @see {@link BatchCreateBillingAdjustmentRequestCommandOutput} for command's `response` shape.
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
 * @example Create billing adjustment requests
 * ```javascript
 * //
 * const input = {
 *   billingAdjustmentRequestEntries: [
 *     {
 *       adjustmentAmount: "500.00",
 *       adjustmentReasonCode: "OTHER",
 *       agreementId: "agmt-SvIzsqYMyQwI3GWgJAe17URx",
 *       clientToken: "71a5e82e-a49b-4075-8c7f-52df1d294379",
 *       currencyCode: "USD",
 *       description: "Customer requested adjustment due to service outage during critical business period.",
 *       originalInvoiceId: "E2E20230929a108cfae"
 *     }
 *   ]
 * };
 * const command = new BatchCreateBillingAdjustmentRequestCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   errors:   [],
 *   items: [
 *     {
 *       billingAdjustmentRequestId: "ba-1a2b3c4d5e6f7g",
 *       clientToken: "71a5e82e-a49b-4075-8c7f-52df1d294379"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchCreateBillingAdjustmentRequestCommand extends command<BatchCreateBillingAdjustmentRequestCommandInput, BatchCreateBillingAdjustmentRequestCommandOutput>(
  _ep0,
  _mw0,
  "BatchCreateBillingAdjustmentRequest",
  BatchCreateBillingAdjustmentRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateBillingAdjustmentRequestInput;
      output: BatchCreateBillingAdjustmentRequestOutput;
    };
    sdk: {
      input: BatchCreateBillingAdjustmentRequestCommandInput;
      output: BatchCreateBillingAdjustmentRequestCommandOutput;
    };
  };
}
