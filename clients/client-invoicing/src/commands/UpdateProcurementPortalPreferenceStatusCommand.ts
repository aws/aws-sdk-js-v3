// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateProcurementPortalPreferenceStatusRequest,
  UpdateProcurementPortalPreferenceStatusResponse,
} from "../models/models_0";
import { UpdateProcurementPortalPreferenceStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProcurementPortalPreferenceStatusCommand}.
 */
export interface UpdateProcurementPortalPreferenceStatusCommandInput extends UpdateProcurementPortalPreferenceStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProcurementPortalPreferenceStatusCommand}.
 */
export interface UpdateProcurementPortalPreferenceStatusCommandOutput extends UpdateProcurementPortalPreferenceStatusResponse, __MetadataBearer {}

/**
 * ***This feature API is subject to changing at any time. For more information, see the [Amazon Web Services Service Terms](https://aws.amazon.com/service-terms/) (Betas and Previews).***
 *
 * Updates the status of a procurement portal preference, including the activation state of e-invoice delivery and purchase order retrieval features.
 *
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
 *   EinvoiceDeliveryPreferenceStatus: "PENDING_VERIFICATION" || "VALIDATED" || "TEST_INITIALIZED" || "TEST_INITIALIZATION_FAILED" || "TEST_FAILED" || "ACTIVE" || "SUSPENDED",
 *   EinvoiceDeliveryPreferenceStatusReason: "STRING_VALUE",
 *   PurchaseOrderRetrievalPreferenceStatus: "PENDING_VERIFICATION" || "VALIDATED" || "TEST_INITIALIZED" || "TEST_INITIALIZATION_FAILED" || "TEST_FAILED" || "ACTIVE" || "SUSPENDED",
 *   PurchaseOrderRetrievalPreferenceStatusReason: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
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
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource. This exception occurs when a concurrent modification is detected during an update operation, or when attempting to create a resource that already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The processing request failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InvoicingServiceException}
 *
 * Base exception class for all service exceptions from Invoicing service.
 *
 * @example UpdateProcurementPortalPreference for EinvoiceDeliveryPreferenceStatus and PurchaseOrderRetrievalPreferenceStatus
 * ```javascript
 * //
 * const input = {
 *   ClientToken: "e362c68e-4e74-48d7-9228-0bc5aa447b46",
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
export class UpdateProcurementPortalPreferenceStatusCommand extends command<UpdateProcurementPortalPreferenceStatusCommandInput, UpdateProcurementPortalPreferenceStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProcurementPortalPreferenceStatus",
  UpdateProcurementPortalPreferenceStatus$
) {
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
