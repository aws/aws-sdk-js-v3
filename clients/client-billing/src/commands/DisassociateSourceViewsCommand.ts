// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BillingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateSourceViewsRequest, DisassociateSourceViewsResponse } from "../models/models_0";
import { DisassociateSourceViews$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSourceViewsCommand}.
 */
export interface DisassociateSourceViewsCommandInput extends DisassociateSourceViewsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSourceViewsCommand}.
 */
export interface DisassociateSourceViewsCommandOutput extends DisassociateSourceViewsResponse, __MetadataBearer {}

/**
 * <p> Removes the association between one or more source billing views and an existing billing view. This allows modifying the composition of aggregate billing views. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, DisassociateSourceViewsCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, DisassociateSourceViewsCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // DisassociateSourceViewsRequest
 *   arn: "STRING_VALUE", // required
 *   sourceViews: [ // BillingViewSourceViewsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateSourceViewsCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateSourceViewsResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DisassociateSourceViewsCommandInput - {@link DisassociateSourceViewsCommandInput}
 * @returns {@link DisassociateSourceViewsCommandOutput}
 * @see {@link DisassociateSourceViewsCommandInput} for command's `input` shape.
 * @see {@link DisassociateSourceViewsCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link BillingViewHealthStatusException} (client fault)
 *  <p> Exception thrown when a billing view's health status prevents an operation from being performed. This may occur if the billing view is in a state other than <code>HEALTHY</code>.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ARN in the request doesn't exist. </p>
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
 * @example Invoke DisassociateSourceViews
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:billing::123456789012:billingview/custom-46f47cb2-a11d-43f3-983d-470b5708a899",
 *   sourceViews: [
 *     "arn:aws:billing::123456789012:billingview/primary",
 *     "arn:aws:billing::123456789012:billingview/custom-d3f9c7e4-8b2f-4a6e-9d3b-2f7c8a1e5f6d"
 *   ]
 * };
 * const command = new DisassociateSourceViewsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:billing::123456789012:billingview/custom-46f47cb2-a11d-43f3-983d-470b5708a899"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateSourceViewsCommand extends $Command
  .classBuilder<
    DisassociateSourceViewsCommandInput,
    DisassociateSourceViewsCommandOutput,
    BillingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBilling", "DisassociateSourceViews", {})
  .n("BillingClient", "DisassociateSourceViewsCommand")
  .sc(DisassociateSourceViews$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateSourceViewsRequest;
      output: DisassociateSourceViewsResponse;
    };
    sdk: {
      input: DisassociateSourceViewsCommandInput;
      output: DisassociateSourceViewsCommandOutput;
    };
  };
}
