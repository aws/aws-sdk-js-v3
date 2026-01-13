// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BillingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetBillingViewRequest, GetBillingViewResponse } from "../models/models_0";
import { GetBillingView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBillingViewCommand}.
 */
export interface GetBillingViewCommandInput extends GetBillingViewRequest {}
/**
 * @public
 *
 * The output of {@link GetBillingViewCommand}.
 */
export interface GetBillingViewCommandOutput extends GetBillingViewResponse, __MetadataBearer {}

/**
 * <p>Returns the metadata associated to the specified billing view ARN. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, GetBillingViewCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, GetBillingViewCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // GetBillingViewRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetBillingViewCommand(input);
 * const response = await client.send(command);
 * // { // GetBillingViewResponse
 * //   billingView: { // BillingViewElement
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     billingViewType: "PRIMARY" || "BILLING_GROUP" || "CUSTOM" || "BILLING_TRANSFER" || "BILLING_TRANSFER_SHOWBACK",
 * //     ownerAccountId: "STRING_VALUE",
 * //     sourceAccountId: "STRING_VALUE",
 * //     dataFilterExpression: { // Expression
 * //       dimensions: { // DimensionValues
 * //         key: "LINKED_ACCOUNT", // required
 * //         values: [ // Values // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       tags: { // TagValues
 * //         key: "STRING_VALUE", // required
 * //         values: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       costCategories: { // CostCategoryValues
 * //         key: "STRING_VALUE", // required
 * //         values: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       timeRange: { // TimeRange
 * //         beginDateInclusive: new Date("TIMESTAMP"),
 * //         endDateInclusive: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     derivedViewCount: Number("int"),
 * //     sourceViewCount: Number("int"),
 * //     viewDefinitionLastUpdatedAt: new Date("TIMESTAMP"),
 * //     healthStatus: { // BillingViewHealthStatus
 * //       statusCode: "HEALTHY" || "UNHEALTHY" || "CREATING" || "UPDATING",
 * //       statusReasons: [ // BillingViewStatusReasons
 * //         "SOURCE_VIEW_UNHEALTHY" || "SOURCE_VIEW_UPDATING" || "SOURCE_VIEW_ACCESS_DENIED" || "SOURCE_VIEW_NOT_FOUND" || "CYCLIC_DEPENDENCY" || "SOURCE_VIEW_DEPTH_EXCEEDED" || "AGGREGATE_SOURCE" || "VIEW_OWNER_NOT_MANAGEMENT_ACCOUNT",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBillingViewCommandInput - {@link GetBillingViewCommandInput}
 * @returns {@link GetBillingViewCommandOutput}
 * @see {@link GetBillingViewCommandInput} for command's `input` shape.
 * @see {@link GetBillingViewCommandOutput} for command's `response` shape.
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
 * @example Invoke GetBillingView
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:billing::123456789101:billingview/custom-46f47cb2-a11d-43f3-983d-470b5708a899"
 * };
 * const command = new GetBillingViewCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   billingView: {
 *     arn: "arn:aws:billing::123456789101:billingview/custom-46f47cb2-a11d-43f3-983d-470b5708a899",
 *     billingViewType: "CUSTOM",
 *     dataFilterExpression: {
 *       dimensions: {
 *         key: "LINKED_ACCOUNT",
 *         values: [
 *           "000000000000"
 *         ]
 *       }
 *     },
 *     description: "Custom Billing View Example -- updated description",
 *     name: "Example Custom Billing View",
 *     ownerAccountId: "123456789101"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBillingViewCommand extends $Command
  .classBuilder<
    GetBillingViewCommandInput,
    GetBillingViewCommandOutput,
    BillingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBilling", "GetBillingView", {})
  .n("BillingClient", "GetBillingViewCommand")
  .sc(GetBillingView$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBillingViewRequest;
      output: GetBillingViewResponse;
    };
    sdk: {
      input: GetBillingViewCommandInput;
      output: GetBillingViewCommandOutput;
    };
  };
}
