// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import type { GetProcurementPortalPreferenceRequest, GetProcurementPortalPreferenceResponse } from "../models/models_0";
import { GetProcurementPortalPreference$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProcurementPortalPreferenceCommand}.
 */
export interface GetProcurementPortalPreferenceCommandInput extends GetProcurementPortalPreferenceRequest {}
/**
 * @public
 *
 * The output of {@link GetProcurementPortalPreferenceCommand}.
 */
export interface GetProcurementPortalPreferenceCommandOutput
  extends GetProcurementPortalPreferenceResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the details of a specific procurement portal preference configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, GetProcurementPortalPreferenceCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, GetProcurementPortalPreferenceCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // GetProcurementPortalPreferenceRequest
 *   ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 * };
 * const command = new GetProcurementPortalPreferenceCommand(input);
 * const response = await client.send(command);
 * // { // GetProcurementPortalPreferenceResponse
 * //   ProcurementPortalPreference: { // ProcurementPortalPreference
 * //     AwsAccountId: "STRING_VALUE", // required
 * //     ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 * //     ProcurementPortalName: "SAP_BUSINESS_NETWORK" || "COUPA", // required
 * //     BuyerDomain: "NetworkID", // required
 * //     BuyerIdentifier: "STRING_VALUE", // required
 * //     SupplierDomain: "NetworkID", // required
 * //     SupplierIdentifier: "STRING_VALUE", // required
 * //     Selector: { // ProcurementPortalPreferenceSelector
 * //       InvoiceUnitArns: [ // InvoiceUnitArns
 * //         "STRING_VALUE",
 * //       ],
 * //       SellerOfRecords: [ // SellerOfRecords
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ProcurementPortalSharedSecret: "STRING_VALUE",
 * //     ProcurementPortalInstanceEndpoint: "STRING_VALUE",
 * //     PurchaseOrderRetrievalEndpoint: "STRING_VALUE",
 * //     TestEnvPreference: { // TestEnvPreference
 * //       BuyerDomain: "NetworkID", // required
 * //       BuyerIdentifier: "STRING_VALUE", // required
 * //       SupplierDomain: "NetworkID", // required
 * //       SupplierIdentifier: "STRING_VALUE", // required
 * //       ProcurementPortalSharedSecret: "STRING_VALUE",
 * //       ProcurementPortalInstanceEndpoint: "STRING_VALUE",
 * //       PurchaseOrderRetrievalEndpoint: "STRING_VALUE",
 * //     },
 * //     EinvoiceDeliveryEnabled: true || false, // required
 * //     EinvoiceDeliveryPreference: { // EinvoiceDeliveryPreference
 * //       EinvoiceDeliveryDocumentTypes: [ // EinvoiceDeliveryDocumentTypes // required
 * //         "AWS_CLOUD_INVOICE" || "AWS_CLOUD_CREDIT_MEMO" || "AWS_MARKETPLACE_INVOICE" || "AWS_MARKETPLACE_CREDIT_MEMO" || "AWS_REQUEST_FOR_PAYMENT",
 * //       ],
 * //       EinvoiceDeliveryAttachmentTypes: [ // EinvoiceDeliveryAttachmentTypes
 * //         "INVOICE_PDF" || "RFP_PDF",
 * //       ],
 * //       Protocol: "CXML", // required
 * //       PurchaseOrderDataSources: [ // PurchaseOrderDataSources // required
 * //         { // PurchaseOrderDataSource
 * //           EinvoiceDeliveryDocumentType: "AWS_CLOUD_INVOICE" || "AWS_CLOUD_CREDIT_MEMO" || "AWS_MARKETPLACE_INVOICE" || "AWS_MARKETPLACE_CREDIT_MEMO" || "AWS_REQUEST_FOR_PAYMENT",
 * //           PurchaseOrderDataSourceType: "ASSOCIATED_PURCHASE_ORDER_REQUIRED" || "PURCHASE_ORDER_NOT_REQUIRED",
 * //         },
 * //       ],
 * //       ConnectionTestingMethod: "PROD_ENV_DOLLAR_TEST" || "TEST_ENV_REPLAY_TEST", // required
 * //       EinvoiceDeliveryActivationDate: new Date("TIMESTAMP"), // required
 * //     },
 * //     PurchaseOrderRetrievalEnabled: true || false, // required
 * //     Contacts: [ // Contacts
 * //       { // Contact
 * //         Name: "STRING_VALUE",
 * //         Email: "STRING_VALUE",
 * //       },
 * //     ],
 * //     EinvoiceDeliveryPreferenceStatus: "PENDING_VERIFICATION" || "TEST_INITIALIZED" || "TEST_INITIALIZATION_FAILED" || "TEST_FAILED" || "ACTIVE" || "SUSPENDED",
 * //     EinvoiceDeliveryPreferenceStatusReason: "STRING_VALUE",
 * //     PurchaseOrderRetrievalPreferenceStatus: "PENDING_VERIFICATION" || "TEST_INITIALIZED" || "TEST_INITIALIZATION_FAILED" || "TEST_FAILED" || "ACTIVE" || "SUSPENDED",
 * //     PurchaseOrderRetrievalPreferenceStatusReason: "STRING_VALUE",
 * //     Version: Number("long"), // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     LastUpdateDate: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProcurementPortalPreferenceCommandInput - {@link GetProcurementPortalPreferenceCommandInput}
 * @returns {@link GetProcurementPortalPreferenceCommandOutput}
 * @see {@link GetProcurementPortalPreferenceCommandInput} for command's `input` shape.
 * @see {@link GetProcurementPortalPreferenceCommandOutput} for command's `response` shape.
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
 * @example GetProcurementPortalPreference for Coupa pref
 * ```javascript
 * //
 * const input = {
 *   ProcurementPortalPreferenceArn: "arn:aws:invoicing::111111111111:procurement-portal-preference/a34fd666-7810-4414-9360-aaa4bcab0abd"
 * };
 * const command = new GetProcurementPortalPreferenceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ProcurementPortalPreference: {
 *     AwsAccountId: "111111111111",
 *     BuyerDomain: "NetworkID",
 *     BuyerIdentifier: "BuyerId_1",
 *     Contacts: [
 *       {
 *         Email: "example-placeholder@amazon.com",
 *         Name: "John Doe"
 *       }
 *     ],
 *     CreateDate: 1.750375489242E9,
 *     EinvoiceDeliveryEnabled: true,
 *     EinvoiceDeliveryPreference: {
 *       ConnectionTestingMethod: "PROD_ENV_DOLLAR_TEST",
 *       EinvoiceDeliveryActivationDate: 1.750279280091E9,
 *       EinvoiceDeliveryAttachmentTypes: [
 *         "INVOICE_PDF"
 *       ],
 *       EinvoiceDeliveryDocumentTypes: [
 *         "AWS_CLOUD_INVOICE"
 *       ],
 *       Protocol: "CXML",
 *       PurchaseOrderDataSources: [
 *         {
 *           EinvoiceDeliveryDocumentType: "AWS_CLOUD_INVOICE",
 *           PurchaseOrderDataSourceType: "ASSOCIATED_PURCHASE_ORDER_REQUIRED"
 *         }
 *       ]
 *     },
 *     EinvoiceDeliveryPreferenceStatus: "PENDING_VERIFICATION",
 *     LastUpdateDate: 1.750375489242E9,
 *     ProcurementPortalInstanceEndpoint: "https://www.placeholder-domain.test",
 *     ProcurementPortalName: "COUPA",
 *     ProcurementPortalPreferenceArn: "arn:aws:invoicing::111111111111:procurement-portal-preference/a34fd666-7810-4414-9360-aaa4bcab0abd",
 *     ProcurementPortalSharedSecret: "Coupa_Secret",
 *     PurchaseOrderRetrievalEnabled: true,
 *     PurchaseOrderRetrievalEndpoint: "https://www.placeholder-domain.test",
 *     PurchaseOrderRetrievalPreferenceStatus: "PENDING_VERIFICATION",
 *     Selector: {
 *       InvoiceUnitArns: [
 *         "arn:aws:invoicing::111111111111:invoice-unit/12345678",
 *         "arn:aws:invoicing::111111111111:invoice-unit/12345679"
 *       ],
 *       SellerOfRecords: [
 *         "AWS_INC",
 *         "AWS_EUROPE"
 *       ]
 *     },
 *     SupplierDomain: "NetworkID",
 *     SupplierIdentifier: "SupplierId_1",
 *     TestEnvPreference: {
 *       BuyerDomain: "NetworkID",
 *       BuyerIdentifier: "BuyerId_1_Test",
 *       ProcurementPortalInstanceEndpoint: "https://www.placeholder-domain.test",
 *       ProcurementPortalSharedSecret: "Coupa_Secret_test",
 *       PurchaseOrderRetrievalEndpoint: "https://www.placeholder-domain.test",
 *       SupplierDomain: "NetworkID",
 *       SupplierIdentifier: "SupplierId_1_Test"
 *     },
 *     Version: 1
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetProcurementPortalPreferenceCommand extends $Command
  .classBuilder<
    GetProcurementPortalPreferenceCommandInput,
    GetProcurementPortalPreferenceCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Invoicing", "GetProcurementPortalPreference", {})
  .n("InvoicingClient", "GetProcurementPortalPreferenceCommand")
  .sc(GetProcurementPortalPreference$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProcurementPortalPreferenceRequest;
      output: GetProcurementPortalPreferenceResponse;
    };
    sdk: {
      input: GetProcurementPortalPreferenceCommandInput;
      output: GetProcurementPortalPreferenceCommandOutput;
    };
  };
}
