// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFleetInput, UpdateFleetOutput } from "../models/models_0";
import { de_UpdateFleetCommand, se_UpdateFleetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFleetCommand}.
 */
export interface UpdateFleetCommandInput extends UpdateFleetInput {}
/**
 * @public
 *
 * The output of {@link UpdateFleetCommand}.
 */
export interface UpdateFleetCommandOutput extends UpdateFleetOutput, __MetadataBearer {}

/**
 * <p>Updates a compute fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateFleetCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateFleetCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // UpdateFleetInput
 *   arn: "STRING_VALUE", // required
 *   baseCapacity: Number("int"),
 *   environmentType: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER",
 *   computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB",
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
 *   fleetServiceRole: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateFleetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFleetOutput
 * //   fleet: { // Fleet
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     created: new Date("TIMESTAMP"),
 * //     lastModified: new Date("TIMESTAMP"),
 * //     status: { // FleetStatus
 * //       statusCode: "CREATING" || "UPDATING" || "ROTATING" || "PENDING_DELETION" || "DELETING" || "CREATE_FAILED" || "UPDATE_ROLLBACK_FAILED" || "ACTIVE",
 * //       context: "CREATE_FAILED" || "UPDATE_FAILED" || "ACTION_REQUIRED",
 * //       message: "STRING_VALUE",
 * //     },
 * //     baseCapacity: Number("int"),
 * //     environmentType: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER",
 * //     computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB",
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
 * @param UpdateFleetCommandInput - {@link UpdateFleetCommandInput}
 * @returns {@link UpdateFleetCommandOutput}
 * @see {@link UpdateFleetCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link AccountLimitExceededException} (client fault)
 *  <p>An Amazon Web Services service limit was exceeded for the calling Amazon Web Services account.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 * @public
 */
export class UpdateFleetCommand extends $Command
  .classBuilder<
    UpdateFleetCommandInput,
    UpdateFleetCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "UpdateFleet", {})
  .n("CodeBuildClient", "UpdateFleetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFleetCommand)
  .de(de_UpdateFleetCommand)
  .build() {}
