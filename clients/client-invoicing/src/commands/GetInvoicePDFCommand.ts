// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import type { GetInvoicePDFRequest, GetInvoicePDFResponse } from "../models/models_0";
import { GetInvoicePDF$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInvoicePDFCommand}.
 */
export interface GetInvoicePDFCommandInput extends GetInvoicePDFRequest {}
/**
 * @public
 *
 * The output of {@link GetInvoicePDFCommand}.
 */
export interface GetInvoicePDFCommandOutput extends GetInvoicePDFResponse, __MetadataBearer {}

/**
 * <p>Returns a URL to download the invoice document and supplemental documents associated with an invoice. The URLs are pre-signed and have expiration time. For special cases like Brazil, where Amazon Web Services generated invoice identifiers and government provided identifiers do not match, use the Amazon Web Services generated invoice identifier when making API requests. To grant IAM permission to use this operation, the caller needs the <code>invoicing:GetInvoicePDF</code> policy action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, GetInvoicePDFCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, GetInvoicePDFCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // GetInvoicePDFRequest
 *   InvoiceId: "STRING_VALUE", // required
 * };
 * const command = new GetInvoicePDFCommand(input);
 * const response = await client.send(command);
 * // { // GetInvoicePDFResponse
 * //   InvoicePDF: { // InvoicePDF
 * //     InvoiceId: "STRING_VALUE",
 * //     DocumentUrl: "STRING_VALUE",
 * //     DocumentUrlExpirationDate: new Date("TIMESTAMP"),
 * //     SupplementalDocuments: [ // SupplementalDocuments
 * //       { // SupplementalDocument
 * //         DocumentUrl: "STRING_VALUE",
 * //         DocumentUrlExpirationDate: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInvoicePDFCommandInput - {@link GetInvoicePDFCommandInput}
 * @returns {@link GetInvoicePDFCommandOutput}
 * @see {@link GetInvoicePDFCommandInput} for command's `input` shape.
 * @see {@link GetInvoicePDFCommandOutput} for command's `response` shape.
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
 * @example GetInvoicePDF without supplemental documents
 * ```javascript
 * //
 * const input = {
 *   InvoiceId: "abc123"
 * };
 * const command = new GetInvoicePDFCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoicePDF: {
 *     DocumentUrl: "https://abcd123.com?securityTokenForDoc",
 *     DocumentUrlExpirationDate: "2025-04-01T01:00:00.000Z",
 *     InvoiceId: "abc123",
 *     SupplementalDocuments:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @example GetInvoicePDF with supplemental documents
 * ```javascript
 * //
 * const input = {
 *   InvoiceId: "abc123"
 * };
 * const command = new GetInvoicePDFCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InvoicePDF: {
 *     DocumentUrl: "https://abcd123.com?securityTokenForDoc",
 *     DocumentUrlExpirationDate: "2025-04-01T01:00:00.000Z",
 *     InvoiceId: "abc123",
 *     SupplementalDocuments: [
 *       {
 *         DocumentUrl: "https://abcd123.com?securityTokenForSupplementalDoc",
 *         DocumentUrlExpirationDate: "2025-04-01T01:00:00.000Z"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetInvoicePDFCommand extends $Command
  .classBuilder<
    GetInvoicePDFCommandInput,
    GetInvoicePDFCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Invoicing", "GetInvoicePDF", {})
  .n("InvoicingClient", "GetInvoicePDFCommand")
  .sc(GetInvoicePDF$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInvoicePDFRequest;
      output: GetInvoicePDFResponse;
    };
    sdk: {
      input: GetInvoicePDFCommandInput;
      output: GetInvoicePDFCommandOutput;
    };
  };
}
