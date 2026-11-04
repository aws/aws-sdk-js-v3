// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateInvoiceUnitRequest, UpdateInvoiceUnitResponse } from "../models/models_0";
import { UpdateInvoiceUnit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateInvoiceUnitCommand}.
 */
export interface UpdateInvoiceUnitCommandInput extends UpdateInvoiceUnitRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInvoiceUnitCommand}.
 */
export interface UpdateInvoiceUnitCommandOutput extends UpdateInvoiceUnitResponse, __MetadataBearer {}

/**
 * You can update the invoice unit configuration at any time, and Amazon Web Services will use the latest configuration at the end of the month.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, UpdateInvoiceUnitCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, UpdateInvoiceUnitCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // UpdateInvoiceUnitRequest
 *   InvoiceUnitArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   TaxInheritanceDisabled: true || false,
 *   Rule: { // InvoiceUnitRule
 *     LinkedAccounts: [ // RuleAccountIdList
 *       "STRING_VALUE",
 *     ],
 *     BillSourceAccounts: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateInvoiceUnitCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInvoiceUnitResponse
 * //   InvoiceUnitArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateInvoiceUnitCommandInput - {@link UpdateInvoiceUnitCommandInput}
 * @returns {@link UpdateInvoiceUnitCommandOutput}
 * @see {@link UpdateInvoiceUnitCommandInput} for command's `input` shape.
 * @see {@link UpdateInvoiceUnitCommandOutput} for command's `response` shape.
 * @see {@link InvoicingClientResolvedConfig | config} for InvoicingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The processing request failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InvoicingServiceException}
 *
 * Base exception class for all service exceptions from Invoicing service.
 *
 * @example UpdateInvoiceUnit with all updatable fields
 * ```javascript
 * //
 * const input = {
 *   ClientToken: "e362c68e-4e74-48d7-9228-0bc5aa447b42",
 *   Description: "Updated IU description",
 *   InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/12345678",
 *   Rule: {
 *     LinkedAccounts: [
 *       "111111111111",
 *       "222222222222"
 *     ]
 *   },
 *   TaxInheritanceDisabled: false
 * };
 * const command = new UpdateInvoiceUnitCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/12345678"
 * }
 * *\/
 * ```
 *
 * @example UpdateInvoiceUnit with specific fields
 * ```javascript
 * //
 * const input = {
 *   ClientToken: "e362c68e-4e74-48d7-9228-0bc5aa447b43",
 *   Description: "Updated IU description. All other fields remain unchanged",
 *   InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/12345678"
 * };
 * const command = new UpdateInvoiceUnitCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/12345678"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateInvoiceUnitCommand extends command<UpdateInvoiceUnitCommandInput, UpdateInvoiceUnitCommandOutput>(
  _ep0,
  _mw0,
  "UpdateInvoiceUnit",
  UpdateInvoiceUnit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInvoiceUnitRequest;
      output: UpdateInvoiceUnitResponse;
    };
    sdk: {
      input: UpdateInvoiceUnitCommandInput;
      output: UpdateInvoiceUnitCommandOutput;
    };
  };
}
