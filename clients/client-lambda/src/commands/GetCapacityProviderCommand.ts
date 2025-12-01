// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type { GetCapacityProviderRequest, GetCapacityProviderResponse } from "../models/models_0";
import { GetCapacityProvider } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCapacityProviderCommand}.
 */
export interface GetCapacityProviderCommandInput extends GetCapacityProviderRequest {}
/**
 * @public
 *
 * The output of {@link GetCapacityProviderCommand}.
 */
export interface GetCapacityProviderCommandOutput extends GetCapacityProviderResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific capacity provider, including its configuration, state, and associated resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetCapacityProviderCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetCapacityProviderCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetCapacityProviderRequest
 *   CapacityProviderName: "STRING_VALUE", // required
 * };
 * const command = new GetCapacityProviderCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityProviderResponse
 * //   CapacityProvider: { // CapacityProvider
 * //     CapacityProviderArn: "STRING_VALUE", // required
 * //     State: "Pending" || "Active" || "Failed" || "Deleting", // required
 * //     VpcConfig: { // CapacityProviderVpcConfig
 * //       SubnetIds: [ // CapacityProviderSubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [ // CapacityProviderSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     PermissionsConfig: { // CapacityProviderPermissionsConfig
 * //       CapacityProviderOperatorRoleArn: "STRING_VALUE", // required
 * //     },
 * //     InstanceRequirements: { // InstanceRequirements
 * //       Architectures: [ // ArchitecturesList
 * //         "x86_64" || "arm64",
 * //       ],
 * //       AllowedInstanceTypes: [ // InstanceTypeSet
 * //         "STRING_VALUE",
 * //       ],
 * //       ExcludedInstanceTypes: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CapacityProviderScalingConfig: { // CapacityProviderScalingConfig
 * //       MaxVCpuCount: Number("int"),
 * //       ScalingMode: "Auto" || "Manual",
 * //       ScalingPolicies: [ // CapacityProviderScalingPoliciesList
 * //         { // TargetTrackingScalingPolicy
 * //           PredefinedMetricType: "LambdaCapacityProviderAverageCPUUtilization", // required
 * //           TargetValue: Number("double"), // required
 * //         },
 * //       ],
 * //     },
 * //     KmsKeyArn: "STRING_VALUE",
 * //     LastModified: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCapacityProviderCommandInput - {@link GetCapacityProviderCommandInput}
 * @returns {@link GetCapacityProviderCommandOutput}
 * @see {@link GetCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link GetCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @public
 */
export class GetCapacityProviderCommand extends $Command
  .classBuilder<
    GetCapacityProviderCommandInput,
    GetCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "GetCapacityProvider", {})
  .n("LambdaClient", "GetCapacityProviderCommand")
  .sc(GetCapacityProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCapacityProviderRequest;
      output: GetCapacityProviderResponse;
    };
    sdk: {
      input: GetCapacityProviderCommandInput;
      output: GetCapacityProviderCommandOutput;
    };
  };
}
