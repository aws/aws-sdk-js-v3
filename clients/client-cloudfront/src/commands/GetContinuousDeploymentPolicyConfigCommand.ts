// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetContinuousDeploymentPolicyConfigRequest,
  GetContinuousDeploymentPolicyConfigResult,
} from "../models/models_1";
import { GetContinuousDeploymentPolicyConfig } from "../schemas/schemas_22_Continuous";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContinuousDeploymentPolicyConfigCommand}.
 */
export interface GetContinuousDeploymentPolicyConfigCommandInput extends GetContinuousDeploymentPolicyConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetContinuousDeploymentPolicyConfigCommand}.
 */
export interface GetContinuousDeploymentPolicyConfigCommandOutput
  extends GetContinuousDeploymentPolicyConfigResult,
    __MetadataBearer {}

/**
 * <p>Gets configuration information about a continuous deployment policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetContinuousDeploymentPolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetContinuousDeploymentPolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetContinuousDeploymentPolicyConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetContinuousDeploymentPolicyConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetContinuousDeploymentPolicyConfigResult
 * //   ContinuousDeploymentPolicyConfig: { // ContinuousDeploymentPolicyConfig
 * //     StagingDistributionDnsNames: { // StagingDistributionDnsNames
 * //       Quantity: Number("int"), // required
 * //       Items: [ // StagingDistributionDnsNameList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Enabled: true || false, // required
 * //     TrafficConfig: { // TrafficConfig
 * //       SingleWeightConfig: { // ContinuousDeploymentSingleWeightConfig
 * //         Weight: Number("float"), // required
 * //         SessionStickinessConfig: { // SessionStickinessConfig
 * //           IdleTTL: Number("int"), // required
 * //           MaximumTTL: Number("int"), // required
 * //         },
 * //       },
 * //       SingleHeaderConfig: { // ContinuousDeploymentSingleHeaderConfig
 * //         Header: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //       Type: "SingleWeight" || "SingleHeader", // required
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetContinuousDeploymentPolicyConfigCommandInput - {@link GetContinuousDeploymentPolicyConfigCommandInput}
 * @returns {@link GetContinuousDeploymentPolicyConfigCommandOutput}
 * @see {@link GetContinuousDeploymentPolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetContinuousDeploymentPolicyConfigCommandOutput} for command's `response` shape.
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
export class GetContinuousDeploymentPolicyConfigCommand extends $Command
  .classBuilder<
    GetContinuousDeploymentPolicyConfigCommandInput,
    GetContinuousDeploymentPolicyConfigCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetContinuousDeploymentPolicyConfig", {})
  .n("CloudFrontClient", "GetContinuousDeploymentPolicyConfigCommand")
  .sc(GetContinuousDeploymentPolicyConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContinuousDeploymentPolicyConfigRequest;
      output: GetContinuousDeploymentPolicyConfigResult;
    };
    sdk: {
      input: GetContinuousDeploymentPolicyConfigCommandInput;
      output: GetContinuousDeploymentPolicyConfigCommandOutput;
    };
  };
}
