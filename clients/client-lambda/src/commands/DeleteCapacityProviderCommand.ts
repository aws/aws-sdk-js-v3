// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCapacityProviderRequest, DeleteCapacityProviderResponse } from "../models/models_0";
import { DeleteCapacityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a capacity provider. You cannot delete a capacity provider that is currently being used by Lambda functions.
 *
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
 * //     PropagateTags: { // PropagateTags
 * //       Mode: "None" || "Explicit",
 * //       ExplicitTags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     TelemetryConfig: { // CapacityProviderTelemetryConfig
 * //       LoggingConfig: { // CapacityProviderLoggingConfig
 * //         SystemLogLevel: "DEBUG" || "INFO" || "WARN",
 * //         LogGroup: "STRING_VALUE",
 * //       },
 * //     },
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
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The resource already exists, or another operation is in progress.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @public
 */
export class DeleteCapacityProviderCommand extends command<DeleteCapacityProviderCommandInput, DeleteCapacityProviderCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCapacityProvider",
  DeleteCapacityProvider$
) {
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
