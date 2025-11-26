// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateFleetInput, CreateFleetOutput } from "../models/models_0";
import { CreateFleet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFleetCommand}.
 */
export interface CreateFleetCommandInput extends CreateFleetInput {}
/**
 * @public
 *
 * The output of {@link CreateFleetCommand}.
 */
export interface CreateFleetCommandOutput extends CreateFleetOutput, __MetadataBearer {}

/**
 * <p>Creates a compute fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, CreateFleetCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, CreateFleetCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // CreateFleetInput
 *   name: "STRING_VALUE", // required
 *   baseCapacity: Number("int"), // required
 *   environmentType: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "WINDOWS_SERVER_2022_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER" || "LINUX_EC2" || "ARM_EC2" || "WINDOWS_EC2" || "MAC_ARM", // required
 *   computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB" || "ATTRIBUTE_BASED_COMPUTE" || "CUSTOM_INSTANCE_TYPE", // required
 *   computeConfiguration: { // ComputeConfiguration
 *     vCpu: Number("long"),
 *     memory: Number("long"),
 *     disk: Number("long"),
 *     machineType: "GENERAL" || "NVME",
 *     instanceType: "STRING_VALUE",
 *   },
 *   scalingConfiguration: { // ScalingConfigurationInput
 *     scalingType: "TARGET_TRACKING_SCALING",
 *     targetTrackingScalingConfigs: [ // TargetTrackingScalingConfigurations
 *       { // TargetTrackingScalingConfiguration
 *         metricType: "FLEET_UTILIZATION_RATE",
 *         targetValue: Number("double"),
 *       },
 *     ],
 *     maxCapacity: Number("int"),
 *   },
 *   overflowBehavior: "QUEUE" || "ON_DEMAND",
 *   vpcConfig: { // VpcConfig
 *     vpcId: "STRING_VALUE",
 *     subnets: [ // Subnets
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   proxyConfiguration: { // ProxyConfiguration
 *     defaultBehavior: "ALLOW_ALL" || "DENY_ALL",
 *     orderedProxyRules: [ // FleetProxyRules
 *       { // FleetProxyRule
 *         type: "DOMAIN" || "IP", // required
 *         effect: "ALLOW" || "DENY", // required
 *         entities: [ // FleetProxyRuleEntities // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   imageId: "STRING_VALUE",
 *   fleetServiceRole: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * // { // CreateFleetOutput
 * //   fleet: { // Fleet
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     created: new Date("TIMESTAMP"),
 * //     lastModified: new Date("TIMESTAMP"),
 * //     status: { // FleetStatus
 * //       statusCode: "CREATING" || "UPDATING" || "ROTATING" || "PENDING_DELETION" || "DELETING" || "CREATE_FAILED" || "UPDATE_ROLLBACK_FAILED" || "ACTIVE",
 * //       context: "CREATE_FAILED" || "UPDATE_FAILED" || "ACTION_REQUIRED" || "PENDING_DELETION" || "INSUFFICIENT_CAPACITY",
 * //       message: "STRING_VALUE",
 * //     },
 * //     baseCapacity: Number("int"),
 * //     environmentType: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "WINDOWS_SERVER_2022_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER" || "LINUX_EC2" || "ARM_EC2" || "WINDOWS_EC2" || "MAC_ARM",
 * //     computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB" || "ATTRIBUTE_BASED_COMPUTE" || "CUSTOM_INSTANCE_TYPE",
 * //     computeConfiguration: { // ComputeConfiguration
 * //       vCpu: Number("long"),
 * //       memory: Number("long"),
 * //       disk: Number("long"),
 * //       machineType: "GENERAL" || "NVME",
 * //       instanceType: "STRING_VALUE",
 * //     },
 * //     scalingConfiguration: { // ScalingConfigurationOutput
 * //       scalingType: "TARGET_TRACKING_SCALING",
 * //       targetTrackingScalingConfigs: [ // TargetTrackingScalingConfigurations
 * //         { // TargetTrackingScalingConfiguration
 * //           metricType: "FLEET_UTILIZATION_RATE",
 * //           targetValue: Number("double"),
 * //         },
 * //       ],
 * //       maxCapacity: Number("int"),
 * //       desiredCapacity: Number("int"),
 * //     },
 * //     overflowBehavior: "QUEUE" || "ON_DEMAND",
 * //     vpcConfig: { // VpcConfig
 * //       vpcId: "STRING_VALUE",
 * //       subnets: [ // Subnets
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     proxyConfiguration: { // ProxyConfiguration
 * //       defaultBehavior: "ALLOW_ALL" || "DENY_ALL",
 * //       orderedProxyRules: [ // FleetProxyRules
 * //         { // FleetProxyRule
 * //           type: "DOMAIN" || "IP", // required
 * //           effect: "ALLOW" || "DENY", // required
 * //           entities: [ // FleetProxyRuleEntities // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     imageId: "STRING_VALUE",
 * //     fleetServiceRole: "STRING_VALUE",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateFleetCommandInput - {@link CreateFleetCommandInput}
 * @returns {@link CreateFleetCommandOutput}
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link AccountLimitExceededException} (client fault)
 *  <p>An Amazon Web Services service limit was exceeded for the calling Amazon Web Services account.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be created, because an Amazon Web Services resource with the same
 *             settings already exists.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class CreateFleetCommand extends $Command
  .classBuilder<
    CreateFleetCommandInput,
    CreateFleetCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "CreateFleet", {})
  .n("CodeBuildClient", "CreateFleetCommand")
  .sc(CreateFleet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFleetInput;
      output: CreateFleetOutput;
    };
    sdk: {
      input: CreateFleetCommandInput;
      output: CreateFleetCommandOutput;
    };
  };
}
