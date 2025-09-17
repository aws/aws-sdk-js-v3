// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSourceViewsForBillingViewRequest, ListSourceViewsForBillingViewResponse } from "../models/models_0";
import {
  de_ListSourceViewsForBillingViewCommand,
  se_ListSourceViewsForBillingViewCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSourceViewsForBillingViewCommand}.
 */
export interface ListSourceViewsForBillingViewCommandInput extends ListSourceViewsForBillingViewRequest {}
/**
 * @public
 *
 * The output of {@link ListSourceViewsForBillingViewCommand}.
 */
export interface ListSourceViewsForBillingViewCommandOutput
  extends ListSourceViewsForBillingViewResponse,
    __MetadataBearer {}

/**
 * <p>Lists the source views (managed Amazon Web Services billing views) associated with the billing view. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, ListSourceViewsForBillingViewCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, ListSourceViewsForBillingViewCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // ListSourceViewsForBillingViewRequest
 *   arn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSourceViewsForBillingViewCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceViewsForBillingViewResponse
 * //   sourceViews: [ // BillingViewSourceViewsList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSourceViewsForBillingViewCommandInput - {@link ListSourceViewsForBillingViewCommandInput}
 * @returns {@link ListSourceViewsForBillingViewCommandOutput}
 * @see {@link ListSourceViewsForBillingViewCommandInput} for command's `input` shape.
 * @see {@link ListSourceViewsForBillingViewCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
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
 * @example Invoke ListSourceViewsForBillingView
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:billing::123456789101:billingview/custom-46f47cb2-a11d-43f3-983d-470b5708a899"
 * };
 * const command = new ListSourceViewsForBillingViewCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sourceViews: [
 *     "arn:aws:billing::123456789101:billingview/primary"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSourceViewsForBillingViewCommand extends $Command
  .classBuilder<
    ListSourceViewsForBillingViewCommandInput,
    ListSourceViewsForBillingViewCommandOutput,
    BillingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBilling", "ListSourceViewsForBillingView", {})
  .n("BillingClient", "ListSourceViewsForBillingViewCommand")
  .f(void 0, void 0)
  .ser(se_ListSourceViewsForBillingViewCommand)
  .de(de_ListSourceViewsForBillingViewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSourceViewsForBillingViewRequest;
      output: ListSourceViewsForBillingViewResponse;
    };
    sdk: {
      input: ListSourceViewsForBillingViewCommandInput;
      output: ListSourceViewsForBillingViewCommandOutput;
    };
  };
}
