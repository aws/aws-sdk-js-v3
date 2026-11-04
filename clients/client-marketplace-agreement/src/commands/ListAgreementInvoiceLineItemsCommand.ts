// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgreementInvoiceLineItemsInput, ListAgreementInvoiceLineItemsOutput } from "../models/models_0";
import { ListAgreementInvoiceLineItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgreementInvoiceLineItemsCommand}.
 */
export interface ListAgreementInvoiceLineItemsCommandInput extends ListAgreementInvoiceLineItemsInput {}
/**
 * @public
 *
 * The output of {@link ListAgreementInvoiceLineItemsCommand}.
 */
export interface ListAgreementInvoiceLineItemsCommandOutput extends ListAgreementInvoiceLineItemsOutput, __MetadataBearer {}

/**
 * Allows sellers (proposers) to retrieve aggregated billing data from AWS Marketplace agreements using flexible grouping. Supports invoice-level aggregation with filtering by billing period, invoice type, and issued date.
 *
 * > **Note:** The `groupBy` parameter is required and supports only `INVOICE_ID` as a value. The `agreementId` parameter is required.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, ListAgreementInvoiceLineItemsCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, ListAgreementInvoiceLineItemsCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // ListAgreementInvoiceLineItemsInput
 *   agreementId: "STRING_VALUE", // required
 *   groupBy: "INVOICE_ID", // required
 *   invoiceId: "STRING_VALUE",
 *   invoiceType: "INVOICE" || "CREDIT_MEMO",
 *   invoiceBillingPeriod: { // InvoiceBillingPeriod
 *     month: Number("int"), // required
 *     year: Number("int"), // required
 *   },
 *   beforeIssuedTime: new Date("TIMESTAMP"),
 *   afterIssuedTime: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgreementInvoiceLineItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgreementInvoiceLineItemsOutput
 * //   agreementInvoiceLineItemGroupSummaries: [ // AgreementInvoiceLineItemGroupSummaries
 * //     { // AgreementInvoiceLineItemGroupSummary
 * //       agreementId: "STRING_VALUE",
 * //       invoiceId: "STRING_VALUE",
 * //       pricingCurrencyAmount: { // PricingCurrencyAmount
 * //         amount: "STRING_VALUE",
 * //         maxAdjustmentAmount: "STRING_VALUE",
 * //         currencyCode: "STRING_VALUE",
 * //       },
 * //       invoiceBillingPeriod: { // InvoiceBillingPeriod
 * //         month: Number("int"), // required
 * //         year: Number("int"), // required
 * //       },
 * //       issuedTime: new Date("TIMESTAMP"),
 * //       invoiceType: "INVOICE" || "CREDIT_MEMO",
 * //       invoicingEntity: { // InvoicingEntity
 * //         legalName: "STRING_VALUE",
 * //         branchName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgreementInvoiceLineItemsCommandInput - {@link ListAgreementInvoiceLineItemsCommandInput}
 * @returns {@link ListAgreementInvoiceLineItemsCommandOutput}
 * @see {@link ListAgreementInvoiceLineItemsCommandInput} for command's `input` shape.
 * @see {@link ListAgreementInvoiceLineItemsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
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
 * @example List agreement invoice line items
 * ```javascript
 * //
 * const input = {
 *   agreementId: "agmt-EXAMPLESvIzsqYMyQwI3",
 *   groupBy: "INVOICE_ID"
 * };
 * const command = new ListAgreementInvoiceLineItemsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   agreementInvoiceLineItemGroupSummaries: [
 *     {
 *       agreementId: "agmt-EXAMPLESvIzsqYMyQwI3",
 *       invoiceBillingPeriod: {
 *         month: 1,
 *         year: 2025
 *       },
 *       invoiceId: "E2E20250105a108cfae",
 *       invoiceType: "INVOICE",
 *       invoicingEntity: {
 *         legalName: "Amazon Web Services, Inc."
 *       },
 *       issuedTime: "2025-01-05T18:59:09Z",
 *       pricingCurrencyAmount: {
 *         amount: "1080.00",
 *         currencyCode: "USD",
 *         maxAdjustmentAmount: "1000.00"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAgreementInvoiceLineItemsCommand extends command<ListAgreementInvoiceLineItemsCommandInput, ListAgreementInvoiceLineItemsCommandOutput>(
  _ep0,
  _mw0,
  "ListAgreementInvoiceLineItems",
  ListAgreementInvoiceLineItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgreementInvoiceLineItemsInput;
      output: ListAgreementInvoiceLineItemsOutput;
    };
    sdk: {
      input: ListAgreementInvoiceLineItemsCommandInput;
      output: ListAgreementInvoiceLineItemsCommandOutput;
    };
  };
}
