// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import { GetInvoiceUnitRequest, GetInvoiceUnitResponse } from "../models/models_0";
import { GetInvoiceUnit } from "../schemas/schemas_1_Invoice";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInvoiceUnitCommand}.
 */
export interface GetInvoiceUnitCommandInput extends GetInvoiceUnitRequest {}
/**
 * @public
 *
 * The output of {@link GetInvoiceUnitCommand}.
 */
export interface GetInvoiceUnitCommandOutput extends GetInvoiceUnitResponse, __MetadataBearer {}

/**
 * <p>This retrieves the invoice unit definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, GetInvoiceUnitCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, GetInvoiceUnitCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // GetInvoiceUnitRequest
 *   InvoiceUnitArn: "STRING_VALUE", // required
 *   AsOf: new Date("TIMESTAMP"),
 * };
 * const command = new GetInvoiceUnitCommand(input);
 * const response = await client.send(command);
 * // { // GetInvoiceUnitResponse
 * //   InvoiceUnitArn: "STRING_VALUE",
 * //   InvoiceReceiver: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   TaxInheritanceDisabled: true || false,
 * //   Rule: { // InvoiceUnitRule
 * //     LinkedAccounts: [ // AccountIdList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   LastModified: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetInvoiceUnitCommandInput - {@link GetInvoiceUnitCommandInput}
 * @returns {@link GetInvoiceUnitCommandOutput}
 * @see {@link GetInvoiceUnitCommandInput} for command's `input` shape.
 * @see {@link GetInvoiceUnitCommandOutput} for command's `response` shape.
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
 * @example GetInvoiceUnit as of current time
 * ```javascript
 * //
 * const input = {
 *   InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/12345678"
 * };
 * const command = new GetInvoiceUnitCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Description: "Description changed on 1733788800",
 *   InvoiceReceiver: "111111111111",
 *   InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/12345678",
 *   LastModified: 1733788800,
 *   Name: "Example Invoice Unit A",
 *   Rule: {
 *     LinkedAccounts: [
 *       "222222222222"
 *     ]
 *   },
 *   TaxInheritanceDisabled: false
 * }
 * *\/
 * ```
 *
 * @example GetInvoiceUnit as of specified time
 * ```javascript
 * //
 * const input = {
 *   AsOf: 1733097600,
 *   InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/87654321"
 * };
 * const command = new GetInvoiceUnitCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Description: "Description changed on 1733011200",
 *   InvoiceReceiver: "333333333333",
 *   InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/87654321",
 *   LastModified: 1733011200,
 *   Name: "Example Invoice Unit B",
 *   Rule: {
 *     LinkedAccounts: [
 *       "333333333333"
 *     ]
 *   },
 *   TaxInheritanceDisabled: false
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetInvoiceUnitCommand extends $Command
  .classBuilder<
    GetInvoiceUnitCommandInput,
    GetInvoiceUnitCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Invoicing", "GetInvoiceUnit", {})
  .n("InvoicingClient", "GetInvoiceUnitCommand")
  .sc(GetInvoiceUnit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInvoiceUnitRequest;
      output: GetInvoiceUnitResponse;
    };
    sdk: {
      input: GetInvoiceUnitCommandInput;
      output: GetInvoiceUnitCommandOutput;
    };
  };
}
