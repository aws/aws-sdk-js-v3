// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBillingViewsRequest, ListBillingViewsResponse } from "../models/models_0";
import { ListBillingViews } from "../schemas/schemas_0";

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
 * <p>Lists the billing views available for a given time period. </p> <p>Every Amazon Web Services account has a unique <code>PRIMARY</code> billing view that represents the billing data available by default. Accounts that use Billing Conductor also have <code>BILLING_GROUP</code> billing views representing pro forma costs associated with each created billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, ListBillingViewsCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, ListBillingViewsCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // ListBillingViewsRequest
 *   activeTimeRange: { // ActiveTimeRange
 *     activeAfterInclusive: new Date("TIMESTAMP"), // required
 *     activeBeforeInclusive: new Date("TIMESTAMP"), // required
 *   },
 *   arns: [ // BillingViewArnList
 *     "STRING_VALUE",
 *   ],
 *   billingViewTypes: [ // BillingViewTypeList
 *     "PRIMARY" || "BILLING_GROUP" || "CUSTOM",
 *   ],
 *   ownerAccountId: "STRING_VALUE",
 *   sourceAccountId: "STRING_VALUE",
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
 * //       description: "STRING_VALUE",
 * //       ownerAccountId: "STRING_VALUE",
 * //       sourceAccountId: "STRING_VALUE",
 * //       billingViewType: "PRIMARY" || "BILLING_GROUP" || "CUSTOM",
 * //       healthStatus: { // BillingViewHealthStatus
 * //         statusCode: "HEALTHY" || "UNHEALTHY" || "CREATING" || "UPDATING",
 * //         statusReasons: [ // BillingViewStatusReasons
 * //           "SOURCE_VIEW_UNHEALTHY" || "SOURCE_VIEW_UPDATING" || "SOURCE_VIEW_ACCESS_DENIED" || "SOURCE_VIEW_NOT_FOUND" || "CYCLIC_DEPENDENCY" || "SOURCE_VIEW_DEPTH_EXCEEDED" || "AGGREGATE_SOURCE" || "VIEW_OWNER_NOT_MANAGEMENT_ACCOUNT",
 * //         ],
 * //       },
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
 * @example Invoke ListBillingViews
 * ```javascript
 * //
 * const input = {
 *   activeTimeRange: {
 *     activeAfterInclusive: 1719792000,
 *     activeBeforeInclusive: 1.722470399999E9
 *   }
 * };
 * const command = new ListBillingViewsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   billingViews: [
 *     {
 *       arn: "arn:aws:billing::123456789101:billingview/primary",
 *       billingViewType: "PRIMARY",
 *       name: "Primary Billing View Account 123456789101",
 *       ownerAccountId: "123456789101"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Error example for ListBillingViews
 * ```javascript
 * //
 * const input = {
 *   activeTimeRange: {
 *     activeAfterInclusive: 1719792001,
 *     activeBeforeInclusive: 1719792000
 *   }
 * };
 * const command = new ListBillingViewsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBilling", "ListBillingViews", {})
  .n("BillingClient", "ListBillingViewsCommand")
  .sc(ListBillingViews)
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
