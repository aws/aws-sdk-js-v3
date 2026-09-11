// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProcurementPortalsRequest, ListProcurementPortalsResponse } from "../models/models_0";
import { ListProcurementPortals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProcurementPortalsCommand}.
 */
export interface ListProcurementPortalsCommandInput extends ListProcurementPortalsRequest {}
/**
 * @public
 *
 * The output of {@link ListProcurementPortalsCommand}.
 */
export interface ListProcurementPortalsCommandOutput extends ListProcurementPortalsResponse, __MetadataBearer {}

/**
 * <p>Returns the Amazon Web Services-supported procurement portals for e-invoice delivery and purchase order retrieval. Each entry includes the portal identifier, name, and default feature configurations, which define the supported document and attachment types. For faster, more reliable responses, use pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, ListProcurementPortalsCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, ListProcurementPortalsCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // ListProcurementPortalsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProcurementPortalsCommand(input);
 * const response = await client.send(command);
 * // { // ListProcurementPortalsResponse
 * //   ProcurementPortals: [ // ProcurementPortals // required
 * //     { // ProcurementPortal
 * //       PortalIdentifier: "STRING_VALUE", // required
 * //       PortalName: "SAP_BUSINESS_NETWORK" || "COUPA", // required
 * //       PortalDisplayName: "STRING_VALUE",
 * //       DefaultFeatureConfigurations: { // FeatureConfigurations
 * //         InvoiceConfiguration: { // InvoiceConfiguration
 * //           DocumentTypes: [ // EinvoiceDeliveryDocumentTypes
 * //             "AWS_CLOUD_INVOICE" || "AWS_CLOUD_CREDIT_MEMO" || "AWS_MARKETPLACE_INVOICE" || "AWS_MARKETPLACE_CREDIT_MEMO" || "AWS_REQUEST_FOR_PAYMENT",
 * //           ],
 * //           AttachmentTypes: [ // EinvoiceDeliveryAttachmentTypes
 * //             "INVOICE_PDF" || "RFP_PDF",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProcurementPortalsCommandInput - {@link ListProcurementPortalsCommandInput}
 * @returns {@link ListProcurementPortalsCommandOutput}
 * @see {@link ListProcurementPortalsCommandInput} for command's `input` shape.
 * @see {@link ListProcurementPortalsCommandOutput} for command's `response` shape.
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
 * @example ListProcurementPortals
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListProcurementPortalsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ProcurementPortals: [
 *     {
 *       DefaultFeatureConfigurations: {
 *         InvoiceConfiguration: {
 *           AttachmentTypes: [
 *             "INVOICE_PDF",
 *             "RFP_PDF"
 *           ],
 *           DocumentTypes: [
 *             "AWS_CLOUD_INVOICE",
 *             "AWS_CLOUD_CREDIT_MEMO",
 *             "AWS_MARKETPLACE_INVOICE",
 *             "AWS_MARKETPLACE_CREDIT_MEMO",
 *             "AWS_REQUEST_FOR_PAYMENT"
 *           ]
 *         }
 *       },
 *       PortalDisplayName: "SAP Business Network",
 *       PortalIdentifier: "KXMJQWBRNP",
 *       PortalName: "SAP_BUSINESS_NETWORK"
 *     },
 *     {
 *       DefaultFeatureConfigurations: {
 *         InvoiceConfiguration: {
 *           AttachmentTypes: [
 *             "INVOICE_PDF",
 *             "RFP_PDF"
 *           ],
 *           DocumentTypes: [
 *             "AWS_CLOUD_INVOICE",
 *             "AWS_CLOUD_CREDIT_MEMO",
 *             "AWS_MARKETPLACE_INVOICE",
 *             "AWS_MARKETPLACE_CREDIT_MEMO",
 *             "AWS_REQUEST_FOR_PAYMENT"
 *           ]
 *         }
 *       },
 *       PortalDisplayName: "Coupa",
 *       PortalIdentifier: "THZVCGFLDY",
 *       PortalName: "COUPA"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListProcurementPortalsCommand extends command<ListProcurementPortalsCommandInput, ListProcurementPortalsCommandOutput>(
  _ep0,
  _mw0,
  "ListProcurementPortals",
  ListProcurementPortals$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProcurementPortalsRequest;
      output: ListProcurementPortalsResponse;
    };
    sdk: {
      input: ListProcurementPortalsCommandInput;
      output: ListProcurementPortalsCommandOutput;
    };
  };
}
