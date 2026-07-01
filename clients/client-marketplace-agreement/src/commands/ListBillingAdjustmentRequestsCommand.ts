// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBillingAdjustmentRequestsInput, ListBillingAdjustmentRequestsOutput } from "../models/models_0";
import { ListBillingAdjustmentRequests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBillingAdjustmentRequestsCommand}.
 */
export interface ListBillingAdjustmentRequestsCommandInput extends ListBillingAdjustmentRequestsInput {}
/**
 * @public
 *
 * The output of {@link ListBillingAdjustmentRequestsCommand}.
 */
export interface ListBillingAdjustmentRequestsCommandOutput extends ListBillingAdjustmentRequestsOutput, __MetadataBearer {}

/**
 * <p>Lists billing adjustment requests for a specific agreement. Sellers (proposers) can use this operation to view all billing adjustment requests associated with an agreement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, ListBillingAdjustmentRequestsCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, ListBillingAdjustmentRequestsCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // ListBillingAdjustmentRequestsInput
 *   agreementId: "STRING_VALUE",
 *   status: "PENDING" || "VALIDATION_FAILED" || "COMPLETED",
 *   createdAfter: new Date("TIMESTAMP"),
 *   createdBefore: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   catalog: "STRING_VALUE",
 *   agreementType: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBillingAdjustmentRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillingAdjustmentRequestsOutput
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // BillingAdjustmentSummaryList // required
 * //     { // BillingAdjustmentSummary
 * //       billingAdjustmentRequestId: "STRING_VALUE", // required
 * //       originalInvoiceId: "STRING_VALUE", // required
 * //       adjustmentAmount: "STRING_VALUE", // required
 * //       currencyCode: "STRING_VALUE", // required
 * //       status: "PENDING" || "VALIDATION_FAILED" || "COMPLETED", // required
 * //       agreementId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       agreementType: "STRING_VALUE", // required
 * //       catalog: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBillingAdjustmentRequestsCommandInput - {@link ListBillingAdjustmentRequestsCommandInput}
 * @returns {@link ListBillingAdjustmentRequestsCommandOutput}
 * @see {@link ListBillingAdjustmentRequestsCommandInput} for command's `input` shape.
 * @see {@link ListBillingAdjustmentRequestsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
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
 * @example List billing adjustment requests
 * ```javascript
 * //
 * const input = {
 *   agreementId: "agmt-SvIzsqYMyQwI3GWgJAe17URx"
 * };
 * const command = new ListBillingAdjustmentRequestsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       adjustmentAmount: "500.00",
 *       agreementId: "agmt-SvIzsqYMyQwI3GWgJAe17URx",
 *       agreementType: "PurchaseAgreement",
 *       billingAdjustmentRequestId: "ba-1a2b3c4d5e6f7g",
 *       catalog: "AWSMarketplace",
 *       createdAt: "2025-06-24T19:30:00Z",
 *       currencyCode: "USD",
 *       originalInvoiceId: "E2E20230929a108cfae",
 *       status: "PENDING",
 *       updatedAt: "2025-06-24T19:30:00Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListBillingAdjustmentRequestsCommand extends command<ListBillingAdjustmentRequestsCommandInput, ListBillingAdjustmentRequestsCommandOutput>(
  _ep0,
  _mw0,
  "ListBillingAdjustmentRequests",
  ListBillingAdjustmentRequests$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillingAdjustmentRequestsInput;
      output: ListBillingAdjustmentRequestsOutput;
    };
    sdk: {
      input: ListBillingAdjustmentRequestsCommandInput;
      output: ListBillingAdjustmentRequestsCommandOutput;
    };
  };
}
