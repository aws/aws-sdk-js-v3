// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import { ListInvoiceUnitsRequest, ListInvoiceUnitsResponse } from "../models/models_0";
import { ListInvoiceUnits } from "../schemas/schemas_1_Invoice";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInvoiceUnitsCommand}.
 */
export interface ListInvoiceUnitsCommandInput extends ListInvoiceUnitsRequest {}
/**
 * @public
 *
 * The output of {@link ListInvoiceUnitsCommand}.
 */
export interface ListInvoiceUnitsCommandOutput extends ListInvoiceUnitsResponse, __MetadataBearer {}

/**
 * <p>This fetches a list of all invoice unit definitions for a given account, as of the provided <code>AsOf</code> date.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, ListInvoiceUnitsCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, ListInvoiceUnitsCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // ListInvoiceUnitsRequest
 *   Filters: { // Filters
 *     Names: [ // InvoiceUnitNames
 *       "STRING_VALUE",
 *     ],
 *     InvoiceReceivers: [ // AccountIdList
 *       "STRING_VALUE",
 *     ],
 *     Accounts: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   AsOf: new Date("TIMESTAMP"),
 * };
 * const command = new ListInvoiceUnitsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvoiceUnitsResponse
 * //   InvoiceUnits: [ // InvoiceUnits
 * //     { // InvoiceUnit
 * //       InvoiceUnitArn: "STRING_VALUE",
 * //       InvoiceReceiver: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       TaxInheritanceDisabled: true || false,
 * //       Rule: { // InvoiceUnitRule
 * //         LinkedAccounts: [ // AccountIdList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       LastModified: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInvoiceUnitsCommandInput - {@link ListInvoiceUnitsCommandInput}
 * @returns {@link ListInvoiceUnitsCommandOutput}
 * @see {@link ListInvoiceUnitsCommandInput} for command's `input` shape.
 * @see {@link ListInvoiceUnitsCommandOutput} for command's `response` shape.
 * @see {@link InvoicingClientResolvedConfig | config} for InvoicingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The processing request failed because of an unknown error, exception, or failure. </p>
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
 * @example ListInvoiceUnits without filters as of current time
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListInvoiceUnitsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoiceUnits: [
 *     {
 *       Description: "Description changed on 1733788800",
 *       InvoiceReceiver: "111111111111",
 *       InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/12345678",
 *       LastModified: 1733788800,
 *       Name: "Example Invoice Unit A",
 *       Rule: {
 *         LinkedAccounts: [
 *           "222222222222"
 *         ]
 *       },
 *       TaxInheritanceDisabled: false
 *     },
 *     {
 *       Description: "Description changed on 1733788800",
 *       InvoiceReceiver: "333333333333",
 *       InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/87654321",
 *       LastModified: 1733788800,
 *       Name: "Example Invoice Unit B",
 *       Rule: {
 *         LinkedAccounts: [
 *           "333333333333"
 *         ]
 *       },
 *       TaxInheritanceDisabled: true
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListInvoiceUnits with filters as of specified time
 * ```javascript
 * //
 * const input = {
 *   AsOf: 1733097600,
 *   Filters: {
 *     InvoiceReceivers: [
 *       "333333333333"
 *     ]
 *   }
 * };
 * const command = new ListInvoiceUnitsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoiceUnits: [
 *     {
 *       Description: "Description changed on 1733011200",
 *       InvoiceReceiver: "333333333333",
 *       InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/87654321",
 *       LastModified: 1733011200,
 *       Name: "Example Invoice Unit B",
 *       Rule: {
 *         LinkedAccounts: [
 *           "333333333333"
 *         ]
 *       },
 *       TaxInheritanceDisabled: false
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListInvoiceUnits with pagination - first page
 * ```javascript
 * //
 * const input = {
 *   MaxResults: 1
 * };
 * const command = new ListInvoiceUnitsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoiceUnits: [
 *     {
 *       Description: "Description changed on 1733788800",
 *       InvoiceReceiver: "111111111111",
 *       InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/12345678",
 *       LastModified: 1733788800,
 *       Name: "Example Invoice Unit A",
 *       Rule: {
 *         LinkedAccounts: [
 *           "222222222222"
 *         ]
 *       },
 *       TaxInheritanceDisabled: false
 *     }
 *   ],
 *   NextToken: "nextTokenExample"
 * }
 * *\/
 * ```
 *
 * @example ListInvoiceUnits with pagination - second page
 * ```javascript
 * //
 * const input = {
 *   MaxResults: 1,
 *   NextToken: "nextTokenExample"
 * };
 * const command = new ListInvoiceUnitsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoiceUnits: [
 *     {
 *       Description: "Description changed on 1733788800",
 *       InvoiceReceiver: "333333333333",
 *       InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/87654321",
 *       LastModified: 1733788800,
 *       Name: "Example Invoice Unit B",
 *       Rule: {
 *         LinkedAccounts: [
 *           "333333333333"
 *         ]
 *       },
 *       TaxInheritanceDisabled: true
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListInvoiceUnitsCommand extends $Command
  .classBuilder<
    ListInvoiceUnitsCommandInput,
    ListInvoiceUnitsCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Invoicing", "ListInvoiceUnits", {})
  .n("InvoicingClient", "ListInvoiceUnitsCommand")
  .sc(ListInvoiceUnits)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInvoiceUnitsRequest;
      output: ListInvoiceUnitsResponse;
    };
    sdk: {
      input: ListInvoiceUnitsCommandInput;
      output: ListInvoiceUnitsCommandOutput;
    };
  };
}
