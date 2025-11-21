// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import {
  UpdateProcurementPortalPreferenceStatusRequest,
  UpdateProcurementPortalPreferenceStatusResponse,
} from "../models/models_0";
import { UpdateProcurementPortalPreferenceStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProcurementPortalPreferenceStatusCommand}.
 */
export interface UpdateProcurementPortalPreferenceStatusCommandInput
  extends UpdateProcurementPortalPreferenceStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProcurementPortalPreferenceStatusCommand}.
 */
export interface UpdateProcurementPortalPreferenceStatusCommandOutput
  extends UpdateProcurementPortalPreferenceStatusResponse,
    __MetadataBearer {}

/**
 * <p>Updates the status of a procurement portal preference, including the activation state of e-invoice delivery and purchase order retrieval features.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, UpdateProcurementPortalPreferenceStatusCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, UpdateProcurementPortalPreferenceStatusCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // UpdateProcurementPortalPreferenceStatusRequest
 *   ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 *   EinvoiceDeliveryPreferenceStatus: "PENDING_VERIFICATION" || "TEST_INITIALIZED" || "TEST_INITIALIZATION_FAILED" || "TEST_FAILED" || "ACTIVE" || "SUSPENDED",
 *   EinvoiceDeliveryPreferenceStatusReason: "STRING_VALUE",
 *   PurchaseOrderRetrievalPreferenceStatus: "PENDING_VERIFICATION" || "TEST_INITIALIZED" || "TEST_INITIALIZATION_FAILED" || "TEST_FAILED" || "ACTIVE" || "SUSPENDED",
 *   PurchaseOrderRetrievalPreferenceStatusReason: "STRING_VALUE",
 * };
 * const command = new UpdateProcurementPortalPreferenceStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProcurementPortalPreferenceStatusResponse
 * //   ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateProcurementPortalPreferenceStatusCommandInput - {@link UpdateProcurementPortalPreferenceStatusCommandInput}
 * @returns {@link UpdateProcurementPortalPreferenceStatusCommandOutput}
 * @see {@link UpdateProcurementPortalPreferenceStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateProcurementPortalPreferenceStatusCommandOutput} for command's `response` shape.
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
 * @example UpdateProcurementPortalPreference for EinvoiceDeliveryPreferenceStatus and PurchaseOrderRetrievalPreferenceStatus
 * ```javascript
 * //
 * const input = {
 *   EinvoiceDeliveryPreferenceStatus: "SUSPENDED",
 *   EinvoiceDeliveryPreferenceStatusReason: "suspended example reason",
 *   ProcurementPortalPreferenceArn: "arn:aws:invoicing::111111111111:procurement-portal-preference/f71dd02e-f855-4b13-b793-0fd25c0b3ecd",
 *   PurchaseOrderRetrievalPreferenceStatus: "SUSPENDED",
 *   PurchaseOrderRetrievalPreferenceStatusReason: "suspended example reason"
 * };
 * const command = new UpdateProcurementPortalPreferenceStatusCommand(input);
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
export class UpdateProcurementPortalPreferenceStatusCommand extends $Command
  .classBuilder<
    UpdateProcurementPortalPreferenceStatusCommandInput,
    UpdateProcurementPortalPreferenceStatusCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Invoicing", "UpdateProcurementPortalPreferenceStatus", {})
  .n("InvoicingClient", "UpdateProcurementPortalPreferenceStatusCommand")
  .sc(UpdateProcurementPortalPreferenceStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProcurementPortalPreferenceStatusRequest;
      output: UpdateProcurementPortalPreferenceStatusResponse;
    };
    sdk: {
      input: UpdateProcurementPortalPreferenceStatusCommandInput;
      output: UpdateProcurementPortalPreferenceStatusCommandOutput;
    };
  };
}
