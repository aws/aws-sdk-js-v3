// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContinuousDeploymentPolicyRequest, GetContinuousDeploymentPolicyResult } from "../models/models_0";
import { GetContinuousDeploymentPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetContinuousDeploymentPolicyCommandOutput extends GetContinuousDeploymentPolicyResult, __MetadataBearer {}

/**
 * <p>Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetContinuousDeploymentPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetContinuousDeploymentPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
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
export class GetContinuousDeploymentPolicyCommand extends command<GetContinuousDeploymentPolicyCommandInput, GetContinuousDeploymentPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetContinuousDeploymentPolicy",
  GetContinuousDeploymentPolicy$
) {
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
