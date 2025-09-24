// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import { UpdateInvoiceUnitRequest, UpdateInvoiceUnitResponse } from "../models/models_0";
import { UpdateInvoiceUnit } from "../schemas/schemas_1_Invoice";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>You can update the invoice unit configuration at any time, and Amazon Web Services will use the latest configuration at the end of the month.</p>
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
 *     LinkedAccounts: [ // AccountIdList
 *       "STRING_VALUE",
 *     ],
 *   },
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
 * @example UpdateInvoiceUnit with all updatable fields
 * ```javascript
 * //
 * const input = {
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
export class UpdateInvoiceUnitCommand extends $Command
  .classBuilder<
    UpdateInvoiceUnitCommandInput,
    UpdateInvoiceUnitCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Invoicing", "UpdateInvoiceUnit", {})
  .n("InvoicingClient", "UpdateInvoiceUnitCommand")
  .sc(UpdateInvoiceUnit)
  .build() {
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
