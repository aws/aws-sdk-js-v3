// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import { ListProcurementPortalPreferencesRequest, ListProcurementPortalPreferencesResponse } from "../models/models_0";
import { ListProcurementPortalPreferences } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProcurementPortalPreferencesCommand}.
 */
export interface ListProcurementPortalPreferencesCommandInput extends ListProcurementPortalPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link ListProcurementPortalPreferencesCommand}.
 */
export interface ListProcurementPortalPreferencesCommandOutput
  extends ListProcurementPortalPreferencesResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of procurement portal preferences associated with the Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, ListProcurementPortalPreferencesCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, ListProcurementPortalPreferencesCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // ListProcurementPortalPreferencesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProcurementPortalPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // ListProcurementPortalPreferencesResponse
 * //   ProcurementPortalPreferences: [ // ProcurementPortalPreferenceSummaries
 * //     { // ProcurementPortalPreferenceSummary
 * //       AwsAccountId: "STRING_VALUE", // required
 * //       ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 * //       ProcurementPortalName: "SAP_BUSINESS_NETWORK" || "COUPA", // required
 * //       BuyerDomain: "NetworkID", // required
 * //       BuyerIdentifier: "STRING_VALUE", // required
 * //       SupplierDomain: "NetworkID", // required
 * //       SupplierIdentifier: "STRING_VALUE", // required
 * //       Selector: { // ProcurementPortalPreferenceSelector
 * //         InvoiceUnitArns: [ // InvoiceUnitArns
 * //           "STRING_VALUE",
 * //         ],
 * //         SellerOfRecords: [ // SellerOfRecords
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       EinvoiceDeliveryEnabled: true || false, // required
 * //       PurchaseOrderRetrievalEnabled: true || false, // required
 * //       EinvoiceDeliveryPreferenceStatus: "PENDING_VERIFICATION" || "TEST_INITIALIZED" || "TEST_INITIALIZATION_FAILED" || "TEST_FAILED" || "ACTIVE" || "SUSPENDED",
 * //       EinvoiceDeliveryPreferenceStatusReason: "STRING_VALUE",
 * //       PurchaseOrderRetrievalPreferenceStatus: "PENDING_VERIFICATION" || "TEST_INITIALIZED" || "TEST_INITIALIZATION_FAILED" || "TEST_FAILED" || "ACTIVE" || "SUSPENDED",
 * //       PurchaseOrderRetrievalPreferenceStatusReason: "STRING_VALUE",
 * //       Version: Number("long"), // required
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //       LastUpdateDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProcurementPortalPreferencesCommandInput - {@link ListProcurementPortalPreferencesCommandInput}
 * @returns {@link ListProcurementPortalPreferencesCommandOutput}
 * @see {@link ListProcurementPortalPreferencesCommandInput} for command's `input` shape.
 * @see {@link ListProcurementPortalPreferencesCommandOutput} for command's `response` shape.
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
 * @example ListProcurementPortalPreferences for Coupa prefs. First Call with following pages
 * ```javascript
 * //
 * const input = {
 *   MaxResults: 2
 * };
 * const command = new ListProcurementPortalPreferencesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NextToken: "AAQA-EFRSURBSGpkVFU5MVNUVWNXTzNoUEptWEFGcEt0QzBBeHZaZmRUU2w3L0hRQmdDeEx3R0NuSnF2NjM5NGNmM1I5KzNIQzNnT0FBQUFmakI4QmdrcWhraUc5dzBCQndhZ2J6QnRBZ0VBTUdnR0NTcUdTSWIzRFFFSEFUQWVCZ2xnaGtnQlpRTUVBUzR3RVFRTVhPSnhEQ04rWk1idnAyb1RBZ0VRZ0RzbFJBeFlXMk9RRGFtTU8vdFc0MUJlTFFNU2hPR1E5bDM3MHcyS05mSjIzbU93MG1aVXk1MzBiWWVsZ3FaZzhjMndhTjZtNzNYTWd3bnpsZz09E8JRNUKK1r2-b9X8Qd1RAOSKHZOCy-UCpOQjJdSfZHcUefTH0YmlIW8ykllegYUWB1D1NjDjC3u2z2e4cLBTmQhrQewSBW-I_i8okXup9RWN60eMOnB6dl5jUiinJ-FjY_jGjbOkiWuJhXteDKP16RfVRW7mxp2-v1-B8gPPxGLolXHBHrb8gt18P8eWs8RcvRRmmbGUy5qa6nFH5WiCq9Bx2fTUTy9Iz_xZooNuiqC6y119EGQqJ9WsWsIUa8MbWHFXtn9-Uriz7osYocbFm1Evv_NCn3YK-wFy9rUlUskcM2n9AqvPYhOyf0reV7E8cErZFR_Ev8l008QcxQfaqK19-gKR9clddwoDzMVfVuyiW3vbzUXz7fzQLr-UMLCGdE3yHf1oz2SEbcxhHZ2eh7-9wEYDv0v92wXg7m7xaYvaKuVBPKqBaq66GdpS1HTfakkjRGvsoBStXWVgPahISglPO__-Ym5NnXOw2wENBVXZ7RsVe6nJ1X15bB1RDkqLV8xJD0L83snuCEBtM9pyUUQOPvfGHzC4yRusMgBav_y1kq0wjqsbJV5EhHV_SIwf-WZa_A==",
 *   ProcurementPortalPreferences: [
 *     {
 *       AwsAccountId: "111111111111",
 *       BuyerDomain: "NetworkID",
 *       BuyerIdentifier: "BuyerId_2",
 *       CreateDate: 1.750375489242E9,
 *       EinvoiceDeliveryEnabled: true,
 *       EinvoiceDeliveryPreferenceStatus: "PENDING_VERIFICATION",
 *       LastUpdateDate: 1.750375489242E9,
 *       ProcurementPortalName: "COUPA",
 *       ProcurementPortalPreferenceArn: "arn:aws:invoicing::111111111111:procurement-portal-preference/1c7c6d71-fbc1-45bd-a18c-40cb61810679",
 *       PurchaseOrderRetrievalEnabled: true,
 *       PurchaseOrderRetrievalPreferenceStatus: "PENDING_VERIFICATION",
 *       Selector: {
 *         InvoiceUnitArns: [
 *           "arn:aws:invoicing::111111111111:invoice-unit/12345679"
 *         ],
 *         SellerOfRecords: [
 *           "AWS_INC"
 *         ]
 *       },
 *       SupplierDomain: "NetworkID",
 *       SupplierIdentifier: "SupplierId_1",
 *       Version: 1
 *     },
 *     {
 *       AwsAccountId: "111111111111",
 *       BuyerDomain: "NetworkID",
 *       BuyerIdentifier: "BuyerId_4",
 *       CreateDate: 1.750375489242E9,
 *       EinvoiceDeliveryEnabled: true,
 *       EinvoiceDeliveryPreferenceStatus: "PENDING_VERIFICATION",
 *       LastUpdateDate: 1.750375489242E9,
 *       ProcurementPortalName: "COUPA",
 *       ProcurementPortalPreferenceArn: "arn:aws:invoicing::111111111111:procurement-portal-preference/ae467ebd-ec8c-4089-b904-a7cd9e76f970",
 *       PurchaseOrderRetrievalEnabled: true,
 *       PurchaseOrderRetrievalPreferenceStatus: "PENDING_VERIFICATION",
 *       Selector: {
 *         InvoiceUnitArns: [
 *           "arn:aws:invoicing::111111111111:invoice-unit/12345678"
 *         ],
 *         SellerOfRecords: [
 *           "AWS_INC"
 *         ]
 *       },
 *       SupplierDomain: "NetworkID",
 *       SupplierIdentifier: "SupplierId_1",
 *       Version: 1
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListProcurementPortalPreferences for Coupa prefs. Second Call with the last page
 * ```javascript
 * //
 * const input = {
 *   MaxResults: 2,
 *   NextToken: "AAQA-EFRSURBSGpkVFU5MVNUVWNXTzNoUEptWEFGcEt0QzBBeHZaZmRUU2w3L0hRQmdDeEx3R0NuSnF2NjM5NGNmM1I5KzNIQzNnT0FBQUFmakI4QmdrcWhraUc5dzBCQndhZ2J6QnRBZ0VBTUdnR0NTcUdTSWIzRFFFSEFUQWVCZ2xnaGtnQlpRTUVBUzR3RVFRTVhPSnhEQ04rWk1idnAyb1RBZ0VRZ0RzbFJBeFlXMk9RRGFtTU8vdFc0MUJlTFFNU2hPR1E5bDM3MHcyS05mSjIzbU93MG1aVXk1MzBiWWVsZ3FaZzhjMndhTjZtNzNYTWd3bnpsZz09E8JRNUKK1r2-b9X8Qd1RAOSKHZOCy-UCpOQjJdSfZHcUefTH0YmlIW8ykllegYUWB1D1NjDjC3u2z2e4cLBTmQhrQewSBW-I_i8okXup9RWN60eMOnB6dl5jUiinJ-FjY_jGjbOkiWuJhXteDKP16RfVRW7mxp2-v1-B8gPPxGLolXHBHrb8gt18P8eWs8RcvRRmmbGUy5qa6nFH5WiCq9Bx2fTUTy9Iz_xZooNuiqC6y119EGQqJ9WsWsIUa8MbWHFXtn9-Uriz7osYocbFm1Evv_NCn3YK-wFy9rUlUskcM2n9AqvPYhOyf0reV7E8cErZFR_Ev8l008QcxQfaqK19-gKR9clddwoDzMVfVuyiW3vbzUXz7fzQLr-UMLCGdE3yHf1oz2SEbcxhHZ2eh7-9wEYDv0v92wXg7m7xaYvaKuVBPKqBaq66GdpS1HTfakkjRGvsoBStXWVgPahISglPO__-Ym5NnXOw2wENBVXZ7RsVe6nJ1X15bB1RDkqLV8xJD0L83snuCEBtM9pyUUQOPvfGHzC4yRusMgBav_y1kq0wjqsbJV5EhHV_SIwf-WZa_A=="
 * };
 * const command = new ListProcurementPortalPreferencesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ProcurementPortalPreferences: [
 *     {
 *       AwsAccountId: "111111111111",
 *       BuyerDomain: "NetworkID",
 *       BuyerIdentifier: "BuyerId_1",
 *       CreateDate: 1.750375489242E9,
 *       EinvoiceDeliveryEnabled: true,
 *       EinvoiceDeliveryPreferenceStatus: "TEST_INITIALIZED",
 *       EinvoiceDeliveryPreferenceStatusReason: "test initialized example reason",
 *       LastUpdateDate: 1.750375489242E9,
 *       ProcurementPortalName: "COUPA",
 *       ProcurementPortalPreferenceArn: "arn:aws:invoicing::111111111111:procurement-portal-preference/f71dd02e-f855-4b13-b793-0fd25c0b3ecd",
 *       PurchaseOrderRetrievalEnabled: true,
 *       PurchaseOrderRetrievalPreferenceStatus: "TEST_INITIALIZED",
 *       PurchaseOrderRetrievalPreferenceStatusReason: "test initialized example reason",
 *       Selector: {
 *         InvoiceUnitArns: [
 *           "arn:aws:invoicing::111111111111:invoice-unit/12345678"
 *         ],
 *         SellerOfRecords: [
 *           "AWS_INC"
 *         ]
 *       },
 *       SupplierDomain: "NetworkID",
 *       SupplierIdentifier: "SupplierId_1",
 *       Version: 3
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListProcurementPortalPreferencesCommand extends $Command
  .classBuilder<
    ListProcurementPortalPreferencesCommandInput,
    ListProcurementPortalPreferencesCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Invoicing", "ListProcurementPortalPreferences", {})
  .n("InvoicingClient", "ListProcurementPortalPreferencesCommand")
  .sc(ListProcurementPortalPreferences)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProcurementPortalPreferencesRequest;
      output: ListProcurementPortalPreferencesResponse;
    };
    sdk: {
      input: ListProcurementPortalPreferencesCommandInput;
      output: ListProcurementPortalPreferencesCommandOutput;
    };
  };
}
