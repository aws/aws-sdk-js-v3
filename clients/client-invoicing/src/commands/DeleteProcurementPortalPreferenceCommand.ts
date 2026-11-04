// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteProcurementPortalPreferenceRequest,
  DeleteProcurementPortalPreferenceResponse,
} from "../models/models_0";
import { DeleteProcurementPortalPreference$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProcurementPortalPreferenceCommand}.
 */
export interface DeleteProcurementPortalPreferenceCommandInput extends DeleteProcurementPortalPreferenceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProcurementPortalPreferenceCommand}.
 */
export interface DeleteProcurementPortalPreferenceCommandOutput extends DeleteProcurementPortalPreferenceResponse, __MetadataBearer {}

/**
 * ***This feature API is subject to changing at any time. For more information, see the [Amazon Web Services Service Terms](https://aws.amazon.com/service-terms/) (Betas and Previews).***
 *
 * Deletes an existing procurement portal preference. This action cannot be undone. Active e-invoice delivery and PO retrieval configurations will be terminated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, DeleteProcurementPortalPreferenceCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, DeleteProcurementPortalPreferenceCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // import type { InvoicingClientConfig } from "@aws-sdk/client-invoicing";
 * const config = {}; // type is InvoicingClientConfig
 * const client = new InvoicingClient(config);
 * const input = { // DeleteProcurementPortalPreferenceRequest
 *   ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteProcurementPortalPreferenceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProcurementPortalPreferenceResponse
 * //   ProcurementPortalPreferenceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteProcurementPortalPreferenceCommandInput - {@link DeleteProcurementPortalPreferenceCommandInput}
 * @returns {@link DeleteProcurementPortalPreferenceCommandOutput}
 * @see {@link DeleteProcurementPortalPreferenceCommandInput} for command's `input` shape.
 * @see {@link DeleteProcurementPortalPreferenceCommandOutput} for command's `response` shape.
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
 * @example DeleteProcurementPortalPreference call
 * ```javascript
 * //
 * const input = {
 *   ClientToken: "e362c68e-4e74-48d7-9228-0bc5aa447b47",
 *   ProcurementPortalPreferenceArn: "arn:aws:invoicing::111111111111:procurement-portal-preference/f71dd02e-f855-4b13-b793-0fd25c0b3ecd"
 * };
 * const command = new DeleteProcurementPortalPreferenceCommand(input);
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
export class DeleteProcurementPortalPreferenceCommand extends command<DeleteProcurementPortalPreferenceCommandInput, DeleteProcurementPortalPreferenceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProcurementPortalPreference",
  DeleteProcurementPortalPreference$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProcurementPortalPreferenceRequest;
      output: DeleteProcurementPortalPreferenceResponse;
    };
    sdk: {
      input: DeleteProcurementPortalPreferenceCommandInput;
      output: DeleteProcurementPortalPreferenceCommandOutput;
    };
  };
}
