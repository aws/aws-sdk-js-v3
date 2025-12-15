// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type { CreateCapacityProviderRequest, CreateCapacityProviderResponse } from "../models/models_0";
import { CreateCapacityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCapacityProviderCommand}.
 */
export interface CreateCapacityProviderCommandInput extends CreateCapacityProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateCapacityProviderCommand}.
 */
export interface CreateCapacityProviderCommandOutput extends CreateCapacityProviderResponse, __MetadataBearer {}

/**
 * <p>Creates a capacity provider that manages compute resources for Lambda functions</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateCapacityProviderCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateCapacityProviderCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // CreateCapacityProviderRequest
 *   CapacityProviderName: "STRING_VALUE", // required
 *   VpcConfig: { // CapacityProviderVpcConfig
 *     SubnetIds: [ // CapacityProviderSubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // CapacityProviderSecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   PermissionsConfig: { // CapacityProviderPermissionsConfig
 *     CapacityProviderOperatorRoleArn: "STRING_VALUE", // required
 *   },
 *   InstanceRequirements: { // InstanceRequirements
 *     Architectures: [ // ArchitecturesList
 *       "x86_64" || "arm64",
 *     ],
 *     AllowedInstanceTypes: [ // InstanceTypeSet
 *       "STRING_VALUE",
 *     ],
 *     ExcludedInstanceTypes: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   CapacityProviderScalingConfig: { // CapacityProviderScalingConfig
 *     MaxVCpuCount: Number("int"),
 *     ScalingMode: "Auto" || "Manual",
 *     ScalingPolicies: [ // CapacityProviderScalingPoliciesList
 *       { // TargetTrackingScalingPolicy
 *         PredefinedMetricType: "LambdaCapacityProviderAverageCPUUtilization", // required
 *         TargetValue: Number("double"), // required
 *       },
 *     ],
 *   },
 *   KmsKeyArn: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCapacityProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateCapacityProviderResponse
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
 * @param CreateCapacityProviderCommandInput - {@link CreateCapacityProviderCommandInput}
 * @returns {@link CreateCapacityProviderCommandOutput}
 * @see {@link CreateCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link CapacityProviderLimitExceededException} (client fault)
 *  <p>The maximum number of capacity providers for your account has been exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a> </p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
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
export class CreateCapacityProviderCommand extends $Command
  .classBuilder<
    CreateCapacityProviderCommandInput,
    CreateCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "CreateCapacityProvider", {})
  .n("LambdaClient", "CreateCapacityProviderCommand")
  .sc(CreateCapacityProvider$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCapacityProviderRequest;
      output: CreateCapacityProviderResponse;
    };
    sdk: {
      input: CreateCapacityProviderCommandInput;
      output: CreateCapacityProviderCommandOutput;
    };
  };
}
