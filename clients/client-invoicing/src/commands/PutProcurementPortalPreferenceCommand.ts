// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import type { PutProcurementPortalPreferenceRequest, PutProcurementPortalPreferenceResponse } from "../models/models_0";
import { PutProcurementPortalPreference } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutProcurementPortalPreferenceCommand}.
 */
export interface PutProcurementPortalPreferenceCommandInput extends PutProcurementPortalPreferenceRequest {}
/**
 * @public
 *
 * The output of {@link PutProcurementPortalPreferenceCommand}.
 */
export interface PutProcurementPortalPreferenceCommandOutput
  extends PutProcurementPortalPreferenceResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing procurement portal preference configuration. This operation can modify settings for e-invoice delivery and purchase order retrieval.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, PutProcurementPortalPreferenceCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, PutProcurementPortalPreferenceCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // PutProcurementPortalPreferenceRequest
 *   ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 *   Selector: { // ProcurementPortalPreferenceSelector
 *     InvoiceUnitArns: [ // InvoiceUnitArns
 *       "STRING_VALUE",
 *     ],
 *     SellerOfRecords: [ // SellerOfRecords
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ProcurementPortalSharedSecret: "STRING_VALUE",
 *   ProcurementPortalInstanceEndpoint: "STRING_VALUE",
 *   TestEnvPreference: { // TestEnvPreferenceInput
 *     BuyerDomain: "NetworkID", // required
 *     BuyerIdentifier: "STRING_VALUE", // required
 *     SupplierDomain: "NetworkID", // required
 *     SupplierIdentifier: "STRING_VALUE", // required
 *     ProcurementPortalSharedSecret: "STRING_VALUE",
 *     ProcurementPortalInstanceEndpoint: "STRING_VALUE",
 *   },
 *   EinvoiceDeliveryEnabled: true || false, // required
 *   EinvoiceDeliveryPreference: { // EinvoiceDeliveryPreference
 *     EinvoiceDeliveryDocumentTypes: [ // EinvoiceDeliveryDocumentTypes // required
 *       "AWS_CLOUD_INVOICE" || "AWS_CLOUD_CREDIT_MEMO" || "AWS_MARKETPLACE_INVOICE" || "AWS_MARKETPLACE_CREDIT_MEMO" || "AWS_REQUEST_FOR_PAYMENT",
 *     ],
 *     EinvoiceDeliveryAttachmentTypes: [ // EinvoiceDeliveryAttachmentTypes
 *       "INVOICE_PDF" || "RFP_PDF",
 *     ],
 *     Protocol: "CXML", // required
 *     PurchaseOrderDataSources: [ // PurchaseOrderDataSources // required
 *       { // PurchaseOrderDataSource
 *         EinvoiceDeliveryDocumentType: "AWS_CLOUD_INVOICE" || "AWS_CLOUD_CREDIT_MEMO" || "AWS_MARKETPLACE_INVOICE" || "AWS_MARKETPLACE_CREDIT_MEMO" || "AWS_REQUEST_FOR_PAYMENT",
 *         PurchaseOrderDataSourceType: "ASSOCIATED_PURCHASE_ORDER_REQUIRED" || "PURCHASE_ORDER_NOT_REQUIRED",
 *       },
 *     ],
 *     ConnectionTestingMethod: "PROD_ENV_DOLLAR_TEST" || "TEST_ENV_REPLAY_TEST", // required
 *     EinvoiceDeliveryActivationDate: new Date("TIMESTAMP"), // required
 *   },
 *   PurchaseOrderRetrievalEnabled: true || false, // required
 *   Contacts: [ // Contacts // required
 *     { // Contact
 *       Name: "STRING_VALUE",
 *       Email: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutProcurementPortalPreferenceCommand(input);
 * const response = await client.send(command);
 * // { // PutProcurementPortalPreferenceResponse
 * //   ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutProcurementPortalPreferenceCommandInput - {@link PutProcurementPortalPreferenceCommandInput}
 * @returns {@link PutProcurementPortalPreferenceCommandOutput}
 * @see {@link PutProcurementPortalPreferenceCommandInput} for command's `input` shape.
 * @see {@link PutProcurementPortalPreferenceCommandOutput} for command's `response` shape.
 * @see {@link InvoicingClientResolvedConfig | config} for InvoicingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource. This exception occurs when a concurrent modification is detected during an update operation, or when attempting to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The processing request failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded. </p>
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
 * @example PutProcurementPortalPreference for Coupa pref
 * ```javascript
 * //
 * const input = {
 *   Contacts: [
 *     {
 *       Email: "example-placeholder2@amazon.com",
 *       Name: "John Doe2"
 *     }
 *   ],
 *   EinvoiceDeliveryEnabled: true,
 *   EinvoiceDeliveryPreference: {
 *     ConnectionTestingMethod: "PROD_ENV_DOLLAR_TEST",
 *     EinvoiceDeliveryActivationDate: 1.750279280091E9,
 *     EinvoiceDeliveryAttachmentTypes: [
 *       "INVOICE_PDF"
 *     ],
 *     EinvoiceDeliveryDocumentTypes: [
 *       "AWS_CLOUD_INVOICE"
 *     ],
 *     Protocol: "CXML",
 *     PurchaseOrderDataSources: [
 *       {
 *         EinvoiceDeliveryDocumentType: "AWS_CLOUD_INVOICE",
 *         PurchaseOrderDataSourceType: "ASSOCIATED_PURCHASE_ORDER_REQUIRED"
 *       }
 *     ]
 *   },
 *   ProcurementPortalInstanceEndpoint: "https://www.placeholder-domain.test",
 *   ProcurementPortalPreferenceArn: "arn:aws:invoicing::111111111111:procurement-portal-preference/f71dd02e-f855-4b13-b793-0fd25c0b3ecd",
 *   ProcurementPortalSharedSecret: "Coupa_Secret_2",
 *   PurchaseOrderRetrievalEnabled: true,
 *   Selector: {
 *     InvoiceUnitArns: [
 *       "arn:aws:invoicing::111111111111:invoice-unit/12345679"
 *     ],
 *     SellerOfRecords: [
 *       "AWS_INC"
 *     ]
 *   },
 *   TestEnvPreference: {
 *     BuyerDomain: "NetworkID",
 *     BuyerIdentifier: "BuyerId_1_Test",
 *     ProcurementPortalInstanceEndpoint: "https://www.placeholder-domain.test",
 *     ProcurementPortalSharedSecret: "Coupa_Secret_test_2",
 *     SupplierDomain: "NetworkID",
 *     SupplierIdentifier: "SupplierId_1_Test"
 *   }
 * };
 * const command = new PutProcurementPortalPreferenceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ProcurementPortalPreferenceArn: "arn:aws:invoicing::111111111111:procurement-portal-preference/f71dd02e-f855-4b13-b793-0fd25c0b3ecd"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutProcurementPortalPreferenceCommand extends $Command
  .classBuilder<
    PutProcurementPortalPreferenceCommandInput,
    PutProcurementPortalPreferenceCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Invoicing", "PutProcurementPortalPreference", {})
  .n("InvoicingClient", "PutProcurementPortalPreferenceCommand")
  .sc(PutProcurementPortalPreference)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProcurementPortalPreferenceRequest;
      output: PutProcurementPortalPreferenceResponse;
    };
    sdk: {
      input: PutProcurementPortalPreferenceCommandInput;
      output: PutProcurementPortalPreferenceCommandOutput;
    };
  };
}
