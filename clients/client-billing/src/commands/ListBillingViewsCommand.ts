// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListBillingViewsRequest,
  ListBillingViewsResponse,
  ListBillingViewsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListBillingViewsCommand, se_ListBillingViewsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBillingViewsCommand}.
 */
export interface ListBillingViewsCommandInput extends ListBillingViewsRequest {}
/**
 * @public
 *
 * The output of {@link ListBillingViewsCommand}.
 */
export interface ListBillingViewsCommandOutput extends ListBillingViewsResponse, __MetadataBearer {}

/**
 * <p>Lists the billing views available for a given time period.
 *       </p>
 *          <p>Every Amazon Web Services account has a unique <code>PRIMARY</code> billing view that represents the billing data available by default. Accounts that use Billing Conductor also have <code>BILLING_GROUP</code> billing views representing pro forma costs associated with each created billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, ListBillingViewsCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, ListBillingViewsCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * const client = new BillingClient(config);
 * const input = { // ListBillingViewsRequest
 *   activeTimeRange: { // ActiveTimeRange
 *     activeAfterInclusive: new Date("TIMESTAMP"), // required
 *     activeBeforeInclusive: new Date("TIMESTAMP"), // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBillingViewsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillingViewsResponse
 * //   billingViews: [ // BillingViewList // required
 * //     { // BillingViewListElement
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       ownerAccountId: "STRING_VALUE",
 * //       billingViewType: "PRIMARY" || "BILLING_GROUP",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillingViewsCommandInput - {@link ListBillingViewsCommandInput}
 * @returns {@link ListBillingViewsCommandOutput}
 * @see {@link ListBillingViewsCommandInput} for command's `input` shape.
 * @see {@link ListBillingViewsCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure.
 *       </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *       </p>
 *
 * @throws {@link BillingServiceException}
 * <p>Base exception class for all service exceptions from Billing service.</p>
 *
 * @public
 * @example Invoke ListBillingViews
 * ```javascript
 * //
 * const input = {
 *   "activeTimeRange": {
 *     "activeAfterInclusive": 1719792000,
 *     "activeBeforeInclusive": 1722470399.999
 *   }
 * };
 * const command = new ListBillingViewsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "billingViews": [
 *     {
 *       "name": "Primary Billing View Account 123456789101",
 *       "arn": "arn:aws:billing::123456789101:billingview/primary",
 *       "billingViewType": "PRIMARY",
 *       "ownerAccountId": "123456789101"
 *     }
 *   ]
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 * @example Error example for ListBillingViews
 * ```javascript
 * //
 * const input = {
 *   "activeTimeRange": {
 *     "activeAfterInclusive": 1719792001,
 *     "activeBeforeInclusive": 1719792000
 *   }
 * };
 * const command = new ListBillingViewsCommand(input);
 * await client.send(command);
 * // example id: example-2
 * ```
 *
 */
export class ListBillingViewsCommand extends $Command
  .classBuilder<
    ListBillingViewsCommandInput,
    ListBillingViewsCommandOutput,
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
  .s("AWSBilling", "ListBillingViews", {})
  .n("BillingClient", "ListBillingViewsCommand")
  .f(void 0, ListBillingViewsResponseFilterSensitiveLog)
  .ser(se_ListBillingViewsCommand)
  .de(de_ListBillingViewsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillingViewsRequest;
      output: ListBillingViewsResponse;
    };
    sdk: {
      input: ListBillingViewsCommandInput;
      output: ListBillingViewsCommandOutput;
    };
  };
}
