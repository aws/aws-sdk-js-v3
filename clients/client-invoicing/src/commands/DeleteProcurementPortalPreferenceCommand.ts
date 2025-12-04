// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import type {
  DeleteProcurementPortalPreferenceRequest,
  DeleteProcurementPortalPreferenceResponse,
} from "../models/models_0";
import { DeleteProcurementPortalPreference } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeleteProcurementPortalPreferenceCommandOutput
  extends DeleteProcurementPortalPreferenceResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an existing procurement portal preference. This action cannot be undone. Active e-invoice delivery and PO retrieval configurations will be terminated.</p>
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
 *  <p>You don't have sufficient access to perform this action.</p>
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
 * @example DeleteProcurementPortalPreference call
 * ```javascript
 * //
 * const input = {
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
export class DeleteProcurementPortalPreferenceCommand extends $Command
  .classBuilder<
    DeleteProcurementPortalPreferenceCommandInput,
    DeleteProcurementPortalPreferenceCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Invoicing", "DeleteProcurementPortalPreference", {})
  .n("InvoicingClient", "DeleteProcurementPortalPreferenceCommand")
  .sc(DeleteProcurementPortalPreference)
  .build() {
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
