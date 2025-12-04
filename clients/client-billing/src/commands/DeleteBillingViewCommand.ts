// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BillingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBillingViewRequest, DeleteBillingViewResponse } from "../models/models_0";
import { DeleteBillingView } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBillingViewCommand}.
 */
export interface DeleteBillingViewCommandInput extends DeleteBillingViewRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBillingViewCommand}.
 */
export interface DeleteBillingViewCommandOutput extends DeleteBillingViewResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified billing view.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, DeleteBillingViewCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, DeleteBillingViewCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // DeleteBillingViewRequest
 *   arn: "STRING_VALUE", // required
 *   force: true || false,
 * };
 * const command = new DeleteBillingViewCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBillingViewResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteBillingViewCommandInput - {@link DeleteBillingViewCommandInput}
 * @returns {@link DeleteBillingViewCommandOutput}
 * @see {@link DeleteBillingViewCommandInput} for command's `input` shape.
 * @see {@link DeleteBillingViewCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link BillingServiceException}
 * <p>Base exception class for all service exceptions from Billing service.</p>
 *
 *
 * @example Invoke DeleteBillingView
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:billing::123456789101:billingview/custom-46f47cb2-a11d-43f3-983d-470b5708a899"
 * };
 * const command = new DeleteBillingViewCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:billing::123456789101:billingview/custom-46f47cb2-a11d-43f3-983d-470b5708a899"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteBillingViewCommand extends $Command
  .classBuilder<
    DeleteBillingViewCommandInput,
    DeleteBillingViewCommandOutput,
    BillingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBilling", "DeleteBillingView", {})
  .n("BillingClient", "DeleteBillingViewCommand")
  .sc(DeleteBillingView)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBillingViewRequest;
      output: DeleteBillingViewResponse;
    };
    sdk: {
      input: DeleteBillingViewCommandInput;
      output: DeleteBillingViewCommandOutput;
    };
  };
}
