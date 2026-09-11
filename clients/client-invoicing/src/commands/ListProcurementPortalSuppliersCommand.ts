// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProcurementPortalSuppliersRequest, ListProcurementPortalSuppliersResponse } from "../models/models_0";
import { ListProcurementPortalSuppliers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProcurementPortalSuppliersCommand}.
 */
export interface ListProcurementPortalSuppliersCommandInput extends ListProcurementPortalSuppliersRequest {}
/**
 * @public
 *
 * The output of {@link ListProcurementPortalSuppliersCommand}.
 */
export interface ListProcurementPortalSuppliersCommandOutput extends ListProcurementPortalSuppliersResponse, __MetadataBearer {}

/**
 * <p>Returns the suppliers configured for a specified procurement portal, including supplier identifiers and associated metadata. For faster, more reliable responses, use pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, ListProcurementPortalSuppliersCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, ListProcurementPortalSuppliersCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // ListProcurementPortalSuppliersRequest
 *   PortalIdentifier: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProcurementPortalSuppliersCommand(input);
 * const response = await client.send(command);
 * // { // ListProcurementPortalSuppliersResponse
 * //   ProcurementPortalSuppliers: [ // ProcurementPortalSuppliers // required
 * //     { // ProcurementPortalSupplier
 * //       SupplierIdentifier: "STRING_VALUE", // required
 * //       SellerOfRecord: "STRING_VALUE",
 * //       CountryCode: "STRING_VALUE",
 * //       Environment: "PROD" || "TEST",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProcurementPortalSuppliersCommandInput - {@link ListProcurementPortalSuppliersCommandInput}
 * @returns {@link ListProcurementPortalSuppliersCommandOutput}
 * @see {@link ListProcurementPortalSuppliersCommandInput} for command's `input` shape.
 * @see {@link ListProcurementPortalSuppliersCommandOutput} for command's `response` shape.
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
 * @example ListProcurementPortalSuppliers
 * ```javascript
 * //
 * const input = {
 *   PortalIdentifier: "KXMJQWBRNP"
 * };
 * const command = new ListProcurementPortalSuppliersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ProcurementPortalSuppliers: [
 *     {
 *       Environment: "PROD",
 *       SellerOfRecord: "AWS_INC",
 *       SupplierIdentifier: "AN01010639538"
 *     },
 *     {
 *       CountryCode: "DE",
 *       Environment: "PROD",
 *       SellerOfRecord: "AWS_EUROPE",
 *       SupplierIdentifier: "AN01401912735"
 *     },
 *     {
 *       Environment: "TEST",
 *       SellerOfRecord: "AWS_INC",
 *       SupplierIdentifier: "AN01010639538-T"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListProcurementPortalSuppliersCommand extends command<ListProcurementPortalSuppliersCommandInput, ListProcurementPortalSuppliersCommandOutput>(
  _ep0,
  _mw0,
  "ListProcurementPortalSuppliers",
  ListProcurementPortalSuppliers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProcurementPortalSuppliersRequest;
      output: ListProcurementPortalSuppliersResponse;
    };
    sdk: {
      input: ListProcurementPortalSuppliersCommandInput;
      output: ListProcurementPortalSuppliersCommandOutput;
    };
  };
}
