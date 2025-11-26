// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateContinuousDeploymentPolicyRequest,
  UpdateContinuousDeploymentPolicyResult,
} from "../models/models_1";
import { UpdateContinuousDeploymentPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContinuousDeploymentPolicyCommand}.
 */
export interface UpdateContinuousDeploymentPolicyCommandInput extends UpdateContinuousDeploymentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContinuousDeploymentPolicyCommand}.
 */
export interface UpdateContinuousDeploymentPolicyCommandOutput
  extends UpdateContinuousDeploymentPolicyResult,
    __MetadataBearer {}

/**
 * <p>Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to.</p> <p>When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration:</p> <ol> <li> <p>Use <code>GetContinuousDeploymentPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the continuous deployment policy configuration that you want to update.</p> </li> <li> <p>Use <code>UpdateContinuousDeploymentPolicy</code>, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateContinuousDeploymentPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateContinuousDeploymentPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateContinuousDeploymentPolicyRequest
 *   ContinuousDeploymentPolicyConfig: { // ContinuousDeploymentPolicyConfig
 *     StagingDistributionDnsNames: { // StagingDistributionDnsNames
 *       Quantity: Number("int"), // required
 *       Items: [ // StagingDistributionDnsNameList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Enabled: true || false, // required
 *     TrafficConfig: { // TrafficConfig
 *       SingleWeightConfig: { // ContinuousDeploymentSingleWeightConfig
 *         Weight: Number("float"), // required
 *         SessionStickinessConfig: { // SessionStickinessConfig
 *           IdleTTL: Number("int"), // required
 *           MaximumTTL: Number("int"), // required
 *         },
 *       },
 *       SingleHeaderConfig: { // ContinuousDeploymentSingleHeaderConfig
 *         Header: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *       Type: "SingleWeight" || "SingleHeader", // required
 *     },
 *   },
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateContinuousDeploymentPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContinuousDeploymentPolicyResult
 * //   ContinuousDeploymentPolicy: { // ContinuousDeploymentPolicy
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     ContinuousDeploymentPolicyConfig: { // ContinuousDeploymentPolicyConfig
 * //       StagingDistributionDnsNames: { // StagingDistributionDnsNames
 * //         Quantity: Number("int"), // required
 * //         Items: [ // StagingDistributionDnsNameList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Enabled: true || false, // required
 * //       TrafficConfig: { // TrafficConfig
 * //         SingleWeightConfig: { // ContinuousDeploymentSingleWeightConfig
 * //           Weight: Number("float"), // required
 * //           SessionStickinessConfig: { // SessionStickinessConfig
 * //             IdleTTL: Number("int"), // required
 * //             MaximumTTL: Number("int"), // required
 * //           },
 * //         },
 * //         SingleHeaderConfig: { // ContinuousDeploymentSingleHeaderConfig
 * //           Header: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //         Type: "SingleWeight" || "SingleHeader", // required
 * //       },
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateContinuousDeploymentPolicyCommandInput - {@link UpdateContinuousDeploymentPolicyCommandInput}
 * @returns {@link UpdateContinuousDeploymentPolicyCommandOutput}
 * @see {@link UpdateContinuousDeploymentPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateContinuousDeploymentPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchContinuousDeploymentPolicy} (client fault)
 *  <p>The continuous deployment policy doesn't exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link StagingDistributionInUse} (client fault)
 *  <p>A continuous deployment policy for this staging distribution already exists.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class UpdateContinuousDeploymentPolicyCommand extends $Command
  .classBuilder<
    UpdateContinuousDeploymentPolicyCommandInput,
    UpdateContinuousDeploymentPolicyCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "UpdateContinuousDeploymentPolicy", {})
  .n("CloudFrontClient", "UpdateContinuousDeploymentPolicyCommand")
  .sc(UpdateContinuousDeploymentPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContinuousDeploymentPolicyRequest;
      output: UpdateContinuousDeploymentPolicyResult;
    };
    sdk: {
      input: UpdateContinuousDeploymentPolicyCommandInput;
      output: UpdateContinuousDeploymentPolicyCommandOutput;
    };
  };
}
