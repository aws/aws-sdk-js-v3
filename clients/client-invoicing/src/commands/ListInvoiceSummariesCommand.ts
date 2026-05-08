// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import type { ListInvoiceSummariesRequest, ListInvoiceSummariesResponse } from "../models/models_0";
import { ListInvoiceSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInvoiceSummariesCommand}.
 */
export interface ListInvoiceSummariesCommandInput extends ListInvoiceSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListInvoiceSummariesCommand}.
 */
export interface ListInvoiceSummariesCommandOutput extends ListInvoiceSummariesResponse, __MetadataBearer {}

/**
 * <p>Retrieves your invoice details programmatically, without line item details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, ListInvoiceSummariesCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, ListInvoiceSummariesCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // ListInvoiceSummariesRequest
 *   Selector: { // InvoiceSummariesSelector
 *     ResourceType: "ACCOUNT_ID" || "INVOICE_ID", // required
 *     Value: "STRING_VALUE", // required
 *   },
 *   Filter: { // InvoiceSummariesFilter
 *     TimeInterval: { // DateInterval
 *       StartDate: new Date("TIMESTAMP"), // required
 *       EndDate: new Date("TIMESTAMP"), // required
 *     },
 *     BillingPeriod: { // BillingPeriod
 *       Month: Number("int"), // required
 *       Year: Number("int"), // required
 *     },
 *     InvoicingEntity: "STRING_VALUE",
 *     ReceiverRole: "SELLER" || "RESELLER" || "BUYER",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListInvoiceSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListInvoiceSummariesResponse
 * //   InvoiceSummaries: [ // InvoiceSummaries // required
 * //     { // InvoiceSummary
 * //       AccountId: "STRING_VALUE",
 * //       InvoiceId: "STRING_VALUE",
 * //       IssuedDate: new Date("TIMESTAMP"),
 * //       DueDate: new Date("TIMESTAMP"),
 * //       BillSourceAccounts: [ // BillSourceAccountList
 * //         "STRING_VALUE",
 * //       ],
 * //       BillSourceAccountsTotalCount: Number("int"),
 * //       ReceiverRole: "SELLER" || "RESELLER" || "BUYER",
 * //       Entity: { // Entity
 * //         InvoicingEntity: "STRING_VALUE",
 * //         BillingEntity: "AWS" || "AWS_MARKETPLACE",
 * //       },
 * //       BillingPeriod: { // BillingPeriod
 * //         Month: Number("int"), // required
 * //         Year: Number("int"), // required
 * //       },
 * //       InvoiceFrequency: "ONE_TIME" || "RECURRING",
 * //       BillType: "ANNIVERSARY" || "PURCHASE" || "REFUND",
 * //       InvoiceType: "INVOICE" || "CREDIT_MEMO" || "PAYMENT_RECEIPT",
 * //       CommercialInvoiceId: "STRING_VALUE",
 * //       OriginalInvoiceId: "STRING_VALUE",
 * //       PurchaseOrderNumber: "STRING_VALUE",
 * //       EinvoiceDeliveryStatus: "DELIVERED" || "NOT_DELIVERED",
 * //       TaxAuthorityStatus: "ISSUED" || "CANCELLED",
 * //       BaseCurrencyAmount: { // InvoiceCurrencyAmount
 * //         TotalAmount: "STRING_VALUE",
 * //         TotalAmountBeforeTax: "STRING_VALUE",
 * //         CurrencyCode: "STRING_VALUE",
 * //         AmountBreakdown: { // AmountBreakdown
 * //           SubTotalAmount: "STRING_VALUE",
 * //           Discounts: { // DiscountsBreakdown
 * //             Breakdown: [ // DiscountsBreakdownAmountList
 * //               { // DiscountsBreakdownAmount
 * //                 Description: "STRING_VALUE",
 * //                 Amount: "STRING_VALUE",
 * //                 Rate: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TotalAmount: "STRING_VALUE",
 * //           },
 * //           Taxes: { // TaxesBreakdown
 * //             Breakdown: [ // TaxesBreakdownAmountList
 * //               { // TaxesBreakdownAmount
 * //                 Description: "STRING_VALUE",
 * //                 Amount: "STRING_VALUE",
 * //                 Rate: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TotalAmount: "STRING_VALUE",
 * //           },
 * //           Fees: { // FeesBreakdown
 * //             Breakdown: [ // FeesBreakdownAmountList
 * //               { // FeesBreakdownAmount
 * //                 Description: "STRING_VALUE",
 * //                 Amount: "STRING_VALUE",
 * //                 Rate: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TotalAmount: "STRING_VALUE",
 * //           },
 * //         },
 * //         CurrencyExchangeDetails: { // CurrencyExchangeDetails
 * //           SourceCurrencyCode: "STRING_VALUE",
 * //           TargetCurrencyCode: "STRING_VALUE",
 * //           Rate: "STRING_VALUE",
 * //         },
 * //       },
 * //       TaxCurrencyAmount: {
 * //         TotalAmount: "STRING_VALUE",
 * //         TotalAmountBeforeTax: "STRING_VALUE",
 * //         CurrencyCode: "STRING_VALUE",
 * //         AmountBreakdown: {
 * //           SubTotalAmount: "STRING_VALUE",
 * //           Discounts: {
 * //             Breakdown: [
 * //               {
 * //                 Description: "STRING_VALUE",
 * //                 Amount: "STRING_VALUE",
 * //                 Rate: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TotalAmount: "STRING_VALUE",
 * //           },
 * //           Taxes: {
 * //             Breakdown: [
 * //               {
 * //                 Description: "STRING_VALUE",
 * //                 Amount: "STRING_VALUE",
 * //                 Rate: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TotalAmount: "STRING_VALUE",
 * //           },
 * //           Fees: {
 * //             Breakdown: [
 * //               {
 * //                 Description: "STRING_VALUE",
 * //                 Amount: "STRING_VALUE",
 * //                 Rate: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TotalAmount: "STRING_VALUE",
 * //           },
 * //         },
 * //         CurrencyExchangeDetails: {
 * //           SourceCurrencyCode: "STRING_VALUE",
 * //           TargetCurrencyCode: "STRING_VALUE",
 * //           Rate: "STRING_VALUE",
 * //         },
 * //       },
 * //       PaymentCurrencyAmount: {
 * //         TotalAmount: "STRING_VALUE",
 * //         TotalAmountBeforeTax: "STRING_VALUE",
 * //         CurrencyCode: "STRING_VALUE",
 * //         AmountBreakdown: {
 * //           SubTotalAmount: "STRING_VALUE",
 * //           Discounts: {
 * //             Breakdown: [
 * //               {
 * //                 Description: "STRING_VALUE",
 * //                 Amount: "STRING_VALUE",
 * //                 Rate: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TotalAmount: "STRING_VALUE",
 * //           },
 * //           Taxes: {
 * //             Breakdown: [
 * //               {
 * //                 Description: "STRING_VALUE",
 * //                 Amount: "STRING_VALUE",
 * //                 Rate: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TotalAmount: "STRING_VALUE",
 * //           },
 * //           Fees: {
 * //             Breakdown: [
 * //               {
 * //                 Description: "STRING_VALUE",
 * //                 Amount: "STRING_VALUE",
 * //                 Rate: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TotalAmount: "STRING_VALUE",
 * //           },
 * //         },
 * //         CurrencyExchangeDetails: {
 * //           SourceCurrencyCode: "STRING_VALUE",
 * //           TargetCurrencyCode: "STRING_VALUE",
 * //           Rate: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInvoiceSummariesCommandInput - {@link ListInvoiceSummariesCommandInput}
 * @returns {@link ListInvoiceSummariesCommandOutput}
 * @see {@link ListInvoiceSummariesCommandInput} for command's `input` shape.
 * @see {@link ListInvoiceSummariesCommandOutput} for command's `response` shape.
 * @see {@link InvoicingClientResolvedConfig | config} for InvoicingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The processing request failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link InvoicingServiceException}
 * <p>Base exception class for all service exceptions from Invoicing service.</p>
 *
 *
 * @example ListInvoiceSummaries with InvoiceId as selector
 * ```javascript
 * //
 * const input = {
 *   Selector: {
 *     ResourceType: "INVOICE_ID",
 *     Value: "1111111111"
 *   }
 * };
 * const command = new ListInvoiceSummariesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoiceSummaries: [
 *     {
 *       AccountId: "111111111111",
 *       BaseCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       },
 *       BillSourceAccounts: [
 *         "111111111111"
 *       ],
 *       BillSourceAccountsTotalCount: 1,
 *       BillType: "ANNIVERSARY",
 *       BillingPeriod: {
 *         Month: 1,
 *         Year: 2025
 *       },
 *       CommercialInvoiceId: "2222222222",
 *       DueDate: "2025-04-01T01:00:00.000Z",
 *       EinvoiceDeliveryStatus: "DELIVERED",
 *       Entity: {
 *         BillingEntity: "AWS",
 *         InvoicingEntity: "Amazon Web Services, Inc."
 *       },
 *       InvoiceFrequency: "RECURRING",
 *       InvoiceId: "1111111111",
 *       InvoiceType: "INVOICE",
 *       IssuedDate: "2025-04-01T01:00:00.000Z",
 *       OriginalInvoiceId: "1111111111",
 *       PaymentCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             Breakdown: [
 *               {
 *                 Amount: "1",
 *                 Description: "VAT",
 *                 Rate: "1.0"
 *               }
 *             ],
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         CurrencyExchangeDetails: {
 *           Rate: "1.0",
 *           SourceCurrencyCode: "USD",
 *           TargetCurrencyCode: "USD"
 *         },
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       },
 *       PurchaseOrderNumber: "PO-12345",
 *       ReceiverRole: "BUYER",
 *       TaxAuthorityStatus: "ISSUED",
 *       TaxCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             Breakdown: [
 *               {
 *                 Amount: "1",
 *                 Description: "VAT",
 *                 Rate: "1.0"
 *               }
 *             ],
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         CurrencyExchangeDetails: {
 *           Rate: "1.0",
 *           SourceCurrencyCode: "USD",
 *           TargetCurrencyCode: "USD"
 *         },
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListInvoiceSummaries with AccountId as selector and billing period
 * ```javascript
 * //
 * const input = {
 *   Filter: {
 *     BillingPeriod: {
 *       Month: 1,
 *       Year: 2025
 *     }
 *   },
 *   Selector: {
 *     ResourceType: "ACCOUNT_ID",
 *     Value: "111111111111"
 *   }
 * };
 * const command = new ListInvoiceSummariesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoiceSummaries: [
 *     {
 *       AccountId: "111111111111",
 *       BaseCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       },
 *       BillSourceAccounts: [
 *         "111111111111"
 *       ],
 *       BillSourceAccountsTotalCount: 1,
 *       BillType: "ANNIVERSARY",
 *       BillingPeriod: {
 *         Month: 1,
 *         Year: 2025
 *       },
 *       DueDate: "2025-04-01T01:00:00.000Z",
 *       EinvoiceDeliveryStatus: "DELIVERED",
 *       Entity: {
 *         BillingEntity: "AWS",
 *         InvoicingEntity: "Amazon Web Services, Inc."
 *       },
 *       InvoiceFrequency: "RECURRING",
 *       InvoiceId: "1111111111",
 *       InvoiceType: "INVOICE",
 *       IssuedDate: "2025-04-01T01:00:00.000Z",
 *       PaymentCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             Breakdown: [
 *               {
 *                 Amount: "1",
 *                 Description: "VAT",
 *                 Rate: "1.0"
 *               }
 *             ],
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         CurrencyExchangeDetails: {
 *           Rate: "1.0",
 *           SourceCurrencyCode: "USD",
 *           TargetCurrencyCode: "USD"
 *         },
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       },
 *       ReceiverRole: "BUYER",
 *       TaxAuthorityStatus: "ISSUED",
 *       TaxCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             Breakdown: [
 *               {
 *                 Amount: "1",
 *                 Description: "VAT",
 *                 Rate: "1.0"
 *               }
 *             ],
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         CurrencyExchangeDetails: {
 *           Rate: "1.0",
 *           SourceCurrencyCode: "USD",
 *           TargetCurrencyCode: "USD"
 *         },
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListInvoiceSummaries with AccountId as selector and time interval
 * ```javascript
 * //
 * const input = {
 *   Filter: {
 *     TimeInterval: {
 *       EndDate: 1592639007,
 *       StartDate: 1590997407
 *     }
 *   },
 *   Selector: {
 *     ResourceType: "ACCOUNT_ID",
 *     Value: "111111111111"
 *   }
 * };
 * const command = new ListInvoiceSummariesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoiceSummaries: [
 *     {
 *       AccountId: "111111111111",
 *       BaseCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       },
 *       BillSourceAccounts: [
 *         "111111111111"
 *       ],
 *       BillSourceAccountsTotalCount: 1,
 *       BillType: "ANNIVERSARY",
 *       BillingPeriod: {
 *         Month: 1,
 *         Year: 2025
 *       },
 *       DueDate: "2025-04-01T01:00:00.000Z",
 *       EinvoiceDeliveryStatus: "DELIVERED",
 *       Entity: {
 *         BillingEntity: "AWS",
 *         InvoicingEntity: "Amazon Web Services, Inc."
 *       },
 *       InvoiceFrequency: "RECURRING",
 *       InvoiceId: "1111111111",
 *       InvoiceType: "INVOICE",
 *       IssuedDate: "2025-04-01T01:00:00.000Z",
 *       PaymentCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             Breakdown: [
 *               {
 *                 Amount: "1",
 *                 Description: "VAT",
 *                 Rate: "1.0"
 *               }
 *             ],
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         CurrencyExchangeDetails: {
 *           Rate: "1.0",
 *           SourceCurrencyCode: "USD",
 *           TargetCurrencyCode: "USD"
 *         },
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       },
 *       ReceiverRole: "BUYER",
 *       TaxAuthorityStatus: "ISSUED",
 *       TaxCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             Breakdown: [
 *               {
 *                 Amount: "1",
 *                 Description: "VAT",
 *                 Rate: "1.0"
 *               }
 *             ],
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         CurrencyExchangeDetails: {
 *           Rate: "1.0",
 *           SourceCurrencyCode: "USD",
 *           TargetCurrencyCode: "USD"
 *         },
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListInvoiceSummaries filtered by ReceiverRole
 * ```javascript
 * //
 * const input = {
 *   Filter: {
 *     ReceiverRole: "SELLER",
 *     TimeInterval: {
 *       EndDate: 1751328000,
 *       StartDate: 1748736000
 *     }
 *   },
 *   Selector: {
 *     ResourceType: "ACCOUNT_ID",
 *     Value: "111111111111"
 *   }
 * };
 * const command = new ListInvoiceSummariesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoiceSummaries: [
 *     {
 *       AccountId: "111111111111",
 *       BaseCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       },
 *       BillSourceAccounts: [
 *         "222222222222"
 *       ],
 *       BillSourceAccountsTotalCount: 1,
 *       BillType: "ANNIVERSARY",
 *       BillingPeriod: {
 *         Month: 6,
 *         Year: 2025
 *       },
 *       DueDate: "2025-07-15T01:00:00.000Z",
 *       EinvoiceDeliveryStatus: "DELIVERED",
 *       Entity: {
 *         BillingEntity: "AWS_MARKETPLACE",
 *         InvoicingEntity: "Amazon Web Services, Inc."
 *       },
 *       InvoiceFrequency: "RECURRING",
 *       InvoiceId: "1111111111",
 *       InvoiceType: "INVOICE",
 *       IssuedDate: "2025-06-15T01:00:00.000Z",
 *       PaymentCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             Breakdown: [
 *               {
 *                 Amount: "1",
 *                 Description: "VAT",
 *                 Rate: "1.0"
 *               }
 *             ],
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         CurrencyExchangeDetails: {
 *           Rate: "1.0",
 *           SourceCurrencyCode: "USD",
 *           TargetCurrencyCode: "USD"
 *         },
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       },
 *       ReceiverRole: "SELLER",
 *       TaxAuthorityStatus: "ISSUED",
 *       TaxCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             Breakdown: [
 *               {
 *                 Amount: "1",
 *                 Description: "VAT",
 *                 Rate: "1.0"
 *               }
 *             ],
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         CurrencyExchangeDetails: {
 *           Rate: "1.0",
 *           SourceCurrencyCode: "USD",
 *           TargetCurrencyCode: "USD"
 *         },
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListInvoiceSummaries with AccountId as selector and a billing period and max results
 * ```javascript
 * //
 * const input = {
 *   Filter: {
 *     BillingPeriod: {
 *       Month: 1,
 *       Year: 2025
 *     }
 *   },
 *   MaxResults: 1,
 *   Selector: {
 *     ResourceType: "ACCOUNT_ID",
 *     Value: "111111111111"
 *   }
 * };
 * const command = new ListInvoiceSummariesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoiceSummaries: [
 *     {
 *       AccountId: "111111111111",
 *       BaseCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       },
 *       BillSourceAccounts: [
 *         "111111111111"
 *       ],
 *       BillSourceAccountsTotalCount: 1,
 *       BillType: "ANNIVERSARY",
 *       BillingPeriod: {
 *         Month: 1,
 *         Year: 2025
 *       },
 *       DueDate: "2025-04-01T01:00:00.000Z",
 *       EinvoiceDeliveryStatus: "DELIVERED",
 *       Entity: {
 *         BillingEntity: "AWS",
 *         InvoicingEntity: "Amazon Web Services, Inc."
 *       },
 *       InvoiceFrequency: "RECURRING",
 *       InvoiceId: "1111111111",
 *       InvoiceType: "INVOICE",
 *       IssuedDate: "2025-04-01T01:00:00.000Z",
 *       PaymentCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             Breakdown: [
 *               {
 *                 Amount: "1",
 *                 Description: "VAT",
 *                 Rate: "1.0"
 *               }
 *             ],
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         CurrencyExchangeDetails: {
 *           Rate: "1.0",
 *           SourceCurrencyCode: "USD",
 *           TargetCurrencyCode: "USD"
 *         },
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       },
 *       ReceiverRole: "BUYER",
 *       TaxAuthorityStatus: "ISSUED",
 *       TaxCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             Breakdown: [
 *               {
 *                 Amount: "1",
 *                 Description: "VAT",
 *                 Rate: "1.0"
 *               }
 *             ],
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         CurrencyExchangeDetails: {
 *           Rate: "1.0",
 *           SourceCurrencyCode: "USD",
 *           TargetCurrencyCode: "USD"
 *         },
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       }
 *     }
 *   ],
 *   NextToken: "abcde12345"
 * }
 * *\/
 * ```
 *
 * @example ListInvoiceSummaries with AccountId as selector and a billing period and next token
 * ```javascript
 * //
 * const input = {
 *   Filter: {
 *     BillingPeriod: {
 *       Month: 1,
 *       Year: 2025
 *     }
 *   },
 *   NextToken: "abcde12345",
 *   Selector: {
 *     ResourceType: "ACCOUNT_ID",
 *     Value: "111111111111"
 *   }
 * };
 * const command = new ListInvoiceSummariesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoiceSummaries: [
 *     {
 *       AccountId: "111111111111",
 *       BaseCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       },
 *       BillSourceAccounts: [
 *         "111111111111"
 *       ],
 *       BillSourceAccountsTotalCount: 1,
 *       BillType: "ANNIVERSARY",
 *       BillingPeriod: {
 *         Month: 1,
 *         Year: 2025
 *       },
 *       DueDate: "2025-04-01T01:00:00.000Z",
 *       EinvoiceDeliveryStatus: "DELIVERED",
 *       Entity: {
 *         BillingEntity: "AWS",
 *         InvoicingEntity: "Amazon Web Services, Inc."
 *       },
 *       InvoiceFrequency: "RECURRING",
 *       InvoiceId: "1111111111",
 *       InvoiceType: "INVOICE",
 *       IssuedDate: "2025-04-01T01:00:00.000Z",
 *       PaymentCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             Breakdown: [
 *               {
 *                 Amount: "1",
 *                 Description: "VAT",
 *                 Rate: "1.0"
 *               }
 *             ],
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         CurrencyExchangeDetails: {
 *           Rate: "1.0",
 *           SourceCurrencyCode: "USD",
 *           TargetCurrencyCode: "USD"
 *         },
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       },
 *       ReceiverRole: "BUYER",
 *       TaxAuthorityStatus: "ISSUED",
 *       TaxCurrencyAmount: {
 *         AmountBreakdown: {
 *           Discounts: {
 *             TotalAmount: "1.00"
 *           },
 *           SubTotalAmount: "1.00",
 *           Taxes: {
 *             Breakdown: [
 *               {
 *                 Amount: "1",
 *                 Description: "VAT",
 *                 Rate: "1.0"
 *               }
 *             ],
 *             TotalAmount: "1.00"
 *           }
 *         },
 *         CurrencyCode: "USD",
 *         CurrencyExchangeDetails: {
 *           Rate: "1.0",
 *           SourceCurrencyCode: "USD",
 *           TargetCurrencyCode: "USD"
 *         },
 *         TotalAmount: "1.00",
 *         TotalAmountBeforeTax: "1.00"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListInvoiceSummariesCommand extends $Command
  .classBuilder<
    ListInvoiceSummariesCommandInput,
    ListInvoiceSummariesCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Invoicing", "ListInvoiceSummaries", {})
  .n("InvoicingClient", "ListInvoiceSummariesCommand")
  .sc(ListInvoiceSummaries$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInvoiceSummariesRequest;
      output: ListInvoiceSummariesResponse;
    };
    sdk: {
      input: ListInvoiceSummariesCommandInput;
      output: ListInvoiceSummariesCommandOutput;
    };
  };
}
