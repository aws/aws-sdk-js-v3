// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import { DeleteInvoiceUnitRequest, DeleteInvoiceUnitResponse } from "../models/models_0";
import { de_DeleteInvoiceUnitCommand, se_DeleteInvoiceUnitCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInvoiceUnitCommand}.
 */
export interface DeleteInvoiceUnitCommandInput extends DeleteInvoiceUnitRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInvoiceUnitCommand}.
 */
export interface DeleteInvoiceUnitCommandOutput extends DeleteInvoiceUnitResponse, __MetadataBearer {}

/**
 * <p>This deletes an invoice unit with the provided invoice unit ARN. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, DeleteInvoiceUnitCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, DeleteInvoiceUnitCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // DeleteInvoiceUnitRequest
 *   InvoiceUnitArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteInvoiceUnitCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInvoiceUnitResponse
 * //   InvoiceUnitArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteInvoiceUnitCommandInput - {@link DeleteInvoiceUnitCommandInput}
 * @returns {@link DeleteInvoiceUnitCommandOutput}
 * @see {@link DeleteInvoiceUnitCommandInput} for command's `input` shape.
 * @see {@link DeleteInvoiceUnitCommandOutput} for command's `response` shape.
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
 * @example DeleteInvoiceUnit
 * ```javascript
 * //
 * const input = {
 *   InvoiceUnitArn: "arn:aws:invoicing::000000000000:invoice-unit/12345678"
 * };
 * const command = new DeleteInvoiceUnitCommand(input);
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
export class DeleteInvoiceUnitCommand extends $Command
  .classBuilder<
    DeleteInvoiceUnitCommandInput,
    DeleteInvoiceUnitCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Invoicing", "DeleteInvoiceUnit", {})
  .n("InvoicingClient", "DeleteInvoiceUnitCommand")
  .f(void 0, void 0)
  .ser(se_DeleteInvoiceUnitCommand)
  .de(de_DeleteInvoiceUnitCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInvoiceUnitRequest;
      output: DeleteInvoiceUnitResponse;
    };
    sdk: {
      input: DeleteInvoiceUnitCommandInput;
      output: DeleteInvoiceUnitCommandOutput;
    };
  };
}
