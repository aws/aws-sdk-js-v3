// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListCapacityProvidersRequest, ListCapacityProvidersResponse } from "../models/models_0";
import { ListCapacityProviders } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCapacityProvidersCommand}.
 */
export interface ListCapacityProvidersCommandInput extends ListCapacityProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListCapacityProvidersCommand}.
 */
export interface ListCapacityProvidersCommandOutput extends ListCapacityProvidersResponse, __MetadataBearer {}

/**
 * <p>Returns a list of capacity providers in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListCapacityProvidersCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListCapacityProvidersCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // ListCapacityProvidersRequest
 *   State: "Pending" || "Active" || "Failed" || "Deleting",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListCapacityProvidersResponse
 * //   CapacityProviders: [ // CapacityProvidersList // required
 * //     { // CapacityProvider
 * //       CapacityProviderArn: "STRING_VALUE", // required
 * //       State: "Pending" || "Active" || "Failed" || "Deleting", // required
 * //       VpcConfig: { // CapacityProviderVpcConfig
 * //         SubnetIds: [ // CapacityProviderSubnetIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [ // CapacityProviderSecurityGroupIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       PermissionsConfig: { // CapacityProviderPermissionsConfig
 * //         CapacityProviderOperatorRoleArn: "STRING_VALUE", // required
 * //       },
 * //       InstanceRequirements: { // InstanceRequirements
 * //         Architectures: [ // ArchitecturesList
 * //           "x86_64" || "arm64",
 * //         ],
 * //         AllowedInstanceTypes: [ // InstanceTypeSet
 * //           "STRING_VALUE",
 * //         ],
 * //         ExcludedInstanceTypes: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CapacityProviderScalingConfig: { // CapacityProviderScalingConfig
 * //         MaxVCpuCount: Number("int"),
 * //         ScalingMode: "Auto" || "Manual",
 * //         ScalingPolicies: [ // CapacityProviderScalingPoliciesList
 * //           { // TargetTrackingScalingPolicy
 * //             PredefinedMetricType: "LambdaCapacityProviderAverageCPUUtilization", // required
 * //             TargetValue: Number("double"), // required
 * //           },
 * //         ],
 * //       },
 * //       KmsKeyArn: "STRING_VALUE",
 * //       LastModified: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCapacityProvidersCommandInput - {@link ListCapacityProvidersCommandInput}
 * @returns {@link ListCapacityProvidersCommandOutput}
 * @see {@link ListCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link ListCapacityProvidersCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
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
export class ListCapacityProvidersCommand extends $Command
  .classBuilder<
    ListCapacityProvidersCommandInput,
    ListCapacityProvidersCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "ListCapacityProviders", {})
  .n("LambdaClient", "ListCapacityProvidersCommand")
  .sc(ListCapacityProviders)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCapacityProvidersRequest;
      output: ListCapacityProvidersResponse;
    };
    sdk: {
      input: ListCapacityProvidersCommandInput;
      output: ListCapacityProvidersCommandOutput;
    };
  };
}
