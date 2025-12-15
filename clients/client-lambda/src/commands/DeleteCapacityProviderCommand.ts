// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type { DeleteCapacityProviderRequest, DeleteCapacityProviderResponse } from "../models/models_0";
import { DeleteCapacityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCapacityProviderCommand}.
 */
export interface DeleteCapacityProviderCommandInput extends DeleteCapacityProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCapacityProviderCommand}.
 */
export interface DeleteCapacityProviderCommandOutput extends DeleteCapacityProviderResponse, __MetadataBearer {}

/**
 * <p>Deletes a capacity provider. You cannot delete a capacity provider that is currently being used by Lambda functions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteCapacityProviderCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteCapacityProviderCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // DeleteCapacityProviderRequest
 *   CapacityProviderName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCapacityProviderCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCapacityProviderResponse
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
 * @param DeleteCapacityProviderCommandInput - {@link DeleteCapacityProviderCommandInput}
 * @returns {@link DeleteCapacityProviderCommandOutput}
 * @see {@link DeleteCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
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
export class DeleteCapacityProviderCommand extends $Command
  .classBuilder<
    DeleteCapacityProviderCommandInput,
    DeleteCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "DeleteCapacityProvider", {})
  .n("LambdaClient", "DeleteCapacityProviderCommand")
  .sc(DeleteCapacityProvider$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCapacityProviderRequest;
      output: DeleteCapacityProviderResponse;
    };
    sdk: {
      input: DeleteCapacityProviderCommandInput;
      output: DeleteCapacityProviderCommandOutput;
    };
  };
}
