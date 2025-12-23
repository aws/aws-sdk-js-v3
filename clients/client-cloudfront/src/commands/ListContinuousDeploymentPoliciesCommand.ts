// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListContinuousDeploymentPoliciesRequest,
  ListContinuousDeploymentPoliciesResult,
} from "../models/models_1";
import { ListContinuousDeploymentPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContinuousDeploymentPoliciesCommand}.
 */
export interface ListContinuousDeploymentPoliciesCommandInput extends ListContinuousDeploymentPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListContinuousDeploymentPoliciesCommand}.
 */
export interface ListContinuousDeploymentPoliciesCommandOutput extends ListContinuousDeploymentPoliciesResult, __MetadataBearer {}

/**
 * <p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListContinuousDeploymentPoliciesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListContinuousDeploymentPoliciesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListContinuousDeploymentPoliciesRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListContinuousDeploymentPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListContinuousDeploymentPoliciesResult
 * //   ContinuousDeploymentPolicyList: { // ContinuousDeploymentPolicyList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // ContinuousDeploymentPolicySummaryList
 * //       { // ContinuousDeploymentPolicySummary
 * //         ContinuousDeploymentPolicy: { // ContinuousDeploymentPolicy
 * //           Id: "STRING_VALUE", // required
 * //           LastModifiedTime: new Date("TIMESTAMP"), // required
 * //           ContinuousDeploymentPolicyConfig: { // ContinuousDeploymentPolicyConfig
 * //             StagingDistributionDnsNames: { // StagingDistributionDnsNames
 * //               Quantity: Number("int"), // required
 * //               Items: [ // StagingDistributionDnsNameList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             Enabled: true || false, // required
 * //             TrafficConfig: { // TrafficConfig
 * //               SingleWeightConfig: { // ContinuousDeploymentSingleWeightConfig
 * //                 Weight: Number("float"), // required
 * //                 SessionStickinessConfig: { // SessionStickinessConfig
 * //                   IdleTTL: Number("int"), // required
 * //                   MaximumTTL: Number("int"), // required
 * //                 },
 * //               },
 * //               SingleHeaderConfig: { // ContinuousDeploymentSingleHeaderConfig
 * //                 Header: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //               Type: "SingleWeight" || "SingleHeader", // required
 * //             },
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListContinuousDeploymentPoliciesCommandInput - {@link ListContinuousDeploymentPoliciesCommandInput}
 * @returns {@link ListContinuousDeploymentPoliciesCommandOutput}
 * @see {@link ListContinuousDeploymentPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListContinuousDeploymentPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchContinuousDeploymentPolicy} (client fault)
 *  <p>The continuous deployment policy doesn't exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListContinuousDeploymentPoliciesCommand extends $Command
  .classBuilder<
    ListContinuousDeploymentPoliciesCommandInput,
    ListContinuousDeploymentPoliciesCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListContinuousDeploymentPolicies", {})
  .n("CloudFrontClient", "ListContinuousDeploymentPoliciesCommand")
  .sc(ListContinuousDeploymentPolicies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContinuousDeploymentPoliciesRequest;
      output: ListContinuousDeploymentPoliciesResult;
    };
    sdk: {
      input: ListContinuousDeploymentPoliciesCommandInput;
      output: ListContinuousDeploymentPoliciesCommandOutput;
    };
  };
}
