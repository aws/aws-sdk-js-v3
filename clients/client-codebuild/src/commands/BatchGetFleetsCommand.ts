// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetFleetsInput, BatchGetFleetsOutput } from "../models/models_0";
import { de_BatchGetFleetsCommand, se_BatchGetFleetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetFleetsCommand}.
 */
export interface BatchGetFleetsCommandInput extends BatchGetFleetsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetFleetsCommand}.
 */
export interface BatchGetFleetsCommandOutput extends BatchGetFleetsOutput, __MetadataBearer {}

/**
 * <p>Gets information about one or more compute fleets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetFleetsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetFleetsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeBuildClient(config);
 * const input = { // BatchGetFleetsInput
 *   names: [ // FleetNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetFleetsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFleetsOutput
 * //   fleets: [ // Fleets
 * //     { // Fleet
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       created: new Date("TIMESTAMP"),
 * //       lastModified: new Date("TIMESTAMP"),
 * //       status: { // FleetStatus
 * //         statusCode: "CREATING" || "UPDATING" || "ROTATING" || "PENDING_DELETION" || "DELETING" || "CREATE_FAILED" || "UPDATE_ROLLBACK_FAILED" || "ACTIVE",
 * //         context: "CREATE_FAILED" || "UPDATE_FAILED" || "ACTION_REQUIRED" || "PENDING_DELETION" || "INSUFFICIENT_CAPACITY",
 * //         message: "STRING_VALUE",
 * //       },
 * //       baseCapacity: Number("int"),
 * //       environmentType: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER" || "LINUX_EC2" || "ARM_EC2" || "WINDOWS_EC2" || "MAC_ARM",
 * //       computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB" || "ATTRIBUTE_BASED_COMPUTE",
 * //       computeConfiguration: { // ComputeConfiguration
 * //         vCpu: Number("long"),
 * //         memory: Number("long"),
 * //         disk: Number("long"),
 * //         machineType: "GENERAL" || "NVME",
 * //       },
 * //       scalingConfiguration: { // ScalingConfigurationOutput
 * //         scalingType: "TARGET_TRACKING_SCALING",
 * //         targetTrackingScalingConfigs: [ // TargetTrackingScalingConfigurations
 * //           { // TargetTrackingScalingConfiguration
 * //             metricType: "FLEET_UTILIZATION_RATE",
 * //             targetValue: Number("double"),
 * //           },
 * //         ],
 * //         maxCapacity: Number("int"),
 * //         desiredCapacity: Number("int"),
 * //       },
 * //       overflowBehavior: "QUEUE" || "ON_DEMAND",
 * //       vpcConfig: { // VpcConfig
 * //         vpcId: "STRING_VALUE",
 * //         subnets: [ // Subnets
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroupIds: [ // SecurityGroupIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       proxyConfiguration: { // ProxyConfiguration
 * //         defaultBehavior: "ALLOW_ALL" || "DENY_ALL",
 * //         orderedProxyRules: [ // FleetProxyRules
 * //           { // FleetProxyRule
 * //             type: "DOMAIN" || "IP", // required
 * //             effect: "ALLOW" || "DENY", // required
 * //             entities: [ // FleetProxyRuleEntities // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       imageId: "STRING_VALUE",
 * //       fleetServiceRole: "STRING_VALUE",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   fleetsNotFound: [ // FleetNames
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFleetsCommandInput - {@link BatchGetFleetsCommandInput}
 * @returns {@link BatchGetFleetsCommandOutput}
 * @see {@link BatchGetFleetsCommandInput} for command's `input` shape.
 * @see {@link BatchGetFleetsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 * @public
 */
export class BatchGetFleetsCommand extends $Command
  .classBuilder<
    BatchGetFleetsCommandInput,
    BatchGetFleetsCommandOutput,
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
  .s("CodeBuild_20161006", "BatchGetFleets", {})
  .n("CodeBuildClient", "BatchGetFleetsCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetFleetsCommand)
  .de(de_BatchGetFleetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetFleetsInput;
      output: BatchGetFleetsOutput;
    };
    sdk: {
      input: BatchGetFleetsCommandInput;
      output: BatchGetFleetsCommandOutput;
    };
  };
}
