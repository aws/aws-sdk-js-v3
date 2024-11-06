// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFleetInput, CreateFleetOutput } from "../models/models_0";
import { de_CreateFleetCommand, se_CreateFleetCommand } from "../protocols/Aws_json1_1";

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
 * const client = new CodeBuildClient(config);
 * const input = { // CreateFleetInput
 *   name: "STRING_VALUE", // required
 *   baseCapacity: Number("int"), // required
 *   environmentType: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER" || "MAC_ARM", // required
 *   computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB" || "ATTRIBUTE_BASED_COMPUTE", // required
 *   computeConfiguration: { // ComputeConfiguration
 *     vCpu: Number("long"),
 *     memory: Number("long"),
 *     disk: Number("long"),
 *     machineType: "GENERAL" || "NVME",
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
 * //     environmentType: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER" || "MAC_ARM",
 * //     computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB" || "ATTRIBUTE_BASED_COMPUTE",
 * //     computeConfiguration: { // ComputeConfiguration
 * //       vCpu: Number("long"),
 * //       memory: Number("long"),
 * //       disk: Number("long"),
 * //       machineType: "GENERAL" || "NVME",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "CreateFleet", {})
  .n("CodeBuildClient", "CreateFleetCommand")
  .f(void 0, void 0)
  .ser(se_CreateFleetCommand)
  .de(de_CreateFleetCommand)
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
