// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetContinuousDeploymentPolicyRequest, GetContinuousDeploymentPolicyResult } from "../models/models_1";
import {
  de_GetContinuousDeploymentPolicyCommand,
  se_GetContinuousDeploymentPolicyCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContinuousDeploymentPolicyCommand}.
 */
export interface GetContinuousDeploymentPolicyCommandInput extends GetContinuousDeploymentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetContinuousDeploymentPolicyCommand}.
 */
export interface GetContinuousDeploymentPolicyCommandOutput
  extends GetContinuousDeploymentPolicyResult,
    __MetadataBearer {}

/**
 * <p>Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetContinuousDeploymentPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetContinuousDeploymentPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetContinuousDeploymentPolicyRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetContinuousDeploymentPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetContinuousDeploymentPolicyResult
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
 * @param GetContinuousDeploymentPolicyCommandInput - {@link GetContinuousDeploymentPolicyCommandInput}
 * @returns {@link GetContinuousDeploymentPolicyCommandOutput}
 * @see {@link GetContinuousDeploymentPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContinuousDeploymentPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
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
export class GetContinuousDeploymentPolicyCommand extends $Command
  .classBuilder<
    GetContinuousDeploymentPolicyCommandInput,
    GetContinuousDeploymentPolicyCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "GetContinuousDeploymentPolicy", {})
  .n("CloudFrontClient", "GetContinuousDeploymentPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetContinuousDeploymentPolicyCommand)
  .de(de_GetContinuousDeploymentPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContinuousDeploymentPolicyRequest;
      output: GetContinuousDeploymentPolicyResult;
    };
    sdk: {
      input: GetContinuousDeploymentPolicyCommandInput;
      output: GetContinuousDeploymentPolicyCommandOutput;
    };
  };
}
