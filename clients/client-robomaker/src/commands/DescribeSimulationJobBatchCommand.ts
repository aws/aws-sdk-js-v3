// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSimulationJobBatchRequest, DescribeSimulationJobBatchResponse } from "../models/models_0";
import { de_DescribeSimulationJobBatchCommand, se_DescribeSimulationJobBatchCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSimulationJobBatchCommand}.
 */
export interface DescribeSimulationJobBatchCommandInput extends DescribeSimulationJobBatchRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSimulationJobBatchCommand}.
 */
export interface DescribeSimulationJobBatchCommandOutput extends DescribeSimulationJobBatchResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <p>Describes a simulation job batch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeSimulationJobBatchCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeSimulationJobBatchCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // DescribeSimulationJobBatchRequest
 *   batch: "STRING_VALUE", // required
 * };
 * const command = new DescribeSimulationJobBatchCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSimulationJobBatchResponse
 * //   arn: "STRING_VALUE",
 * //   status: "Pending" || "InProgress" || "Failed" || "Completed" || "Canceled" || "Canceling" || "Completing" || "TimingOut" || "TimedOut",
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   createdAt: new Date("TIMESTAMP"),
 * //   clientRequestToken: "STRING_VALUE",
 * //   batchPolicy: { // BatchPolicy
 * //     timeoutInSeconds: Number("long"),
 * //     maxConcurrency: Number("int"),
 * //   },
 * //   failureCode: "InternalServiceError",
 * //   failureReason: "STRING_VALUE",
 * //   failedRequests: [ // FailedCreateSimulationJobRequests
 * //     { // FailedCreateSimulationJobRequest
 * //       request: { // SimulationJobRequest
 * //         outputLocation: { // OutputLocation
 * //           s3Bucket: "STRING_VALUE",
 * //           s3Prefix: "STRING_VALUE",
 * //         },
 * //         loggingConfig: { // LoggingConfig
 * //           recordAllRosTopics: true || false,
 * //         },
 * //         maxJobDurationInSeconds: Number("long"), // required
 * //         iamRole: "STRING_VALUE",
 * //         failureBehavior: "Fail" || "Continue",
 * //         useDefaultApplications: true || false,
 * //         robotApplications: [ // RobotApplicationConfigs
 * //           { // RobotApplicationConfig
 * //             application: "STRING_VALUE", // required
 * //             applicationVersion: "STRING_VALUE",
 * //             launchConfig: { // LaunchConfig
 * //               packageName: "STRING_VALUE",
 * //               launchFile: "STRING_VALUE",
 * //               environmentVariables: { // EnvironmentVariableMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               portForwardingConfig: { // PortForwardingConfig
 * //                 portMappings: [ // PortMappingList
 * //                   { // PortMapping
 * //                     jobPort: Number("int"), // required
 * //                     applicationPort: Number("int"), // required
 * //                     enableOnPublicIp: true || false,
 * //                   },
 * //                 ],
 * //               },
 * //               streamUI: true || false,
 * //               command: [ // CommandList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             uploadConfigurations: [ // UploadConfigurations
 * //               { // UploadConfiguration
 * //                 name: "STRING_VALUE", // required
 * //                 path: "STRING_VALUE", // required
 * //                 uploadBehavior: "UPLOAD_ON_TERMINATE" || "UPLOAD_ROLLING_AUTO_REMOVE", // required
 * //               },
 * //             ],
 * //             useDefaultUploadConfigurations: true || false,
 * //             tools: [ // Tools
 * //               { // Tool
 * //                 streamUI: true || false,
 * //                 name: "STRING_VALUE", // required
 * //                 command: "STRING_VALUE", // required
 * //                 streamOutputToCloudWatch: true || false,
 * //                 exitBehavior: "FAIL" || "RESTART",
 * //               },
 * //             ],
 * //             useDefaultTools: true || false,
 * //           },
 * //         ],
 * //         simulationApplications: [ // SimulationApplicationConfigs
 * //           { // SimulationApplicationConfig
 * //             application: "STRING_VALUE", // required
 * //             applicationVersion: "STRING_VALUE",
 * //             launchConfig: {
 * //               packageName: "STRING_VALUE",
 * //               launchFile: "STRING_VALUE",
 * //               environmentVariables: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               portForwardingConfig: {
 * //                 portMappings: [
 * //                   {
 * //                     jobPort: Number("int"), // required
 * //                     applicationPort: Number("int"), // required
 * //                     enableOnPublicIp: true || false,
 * //                   },
 * //                 ],
 * //               },
 * //               streamUI: true || false,
 * //               command: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             uploadConfigurations: [
 * //               {
 * //                 name: "STRING_VALUE", // required
 * //                 path: "STRING_VALUE", // required
 * //                 uploadBehavior: "UPLOAD_ON_TERMINATE" || "UPLOAD_ROLLING_AUTO_REMOVE", // required
 * //               },
 * //             ],
 * //             worldConfigs: [ // WorldConfigs
 * //               { // WorldConfig
 * //                 world: "STRING_VALUE",
 * //               },
 * //             ],
 * //             useDefaultUploadConfigurations: true || false,
 * //             tools: [
 * //               {
 * //                 streamUI: true || false,
 * //                 name: "STRING_VALUE", // required
 * //                 command: "STRING_VALUE", // required
 * //                 streamOutputToCloudWatch: true || false,
 * //                 exitBehavior: "FAIL" || "RESTART",
 * //               },
 * //             ],
 * //             useDefaultTools: true || false,
 * //           },
 * //         ],
 * //         dataSources: [ // DataSourceConfigs
 * //           { // DataSourceConfig
 * //             name: "STRING_VALUE", // required
 * //             s3Bucket: "STRING_VALUE", // required
 * //             s3Keys: [ // S3KeysOrPrefixes // required
 * //               "STRING_VALUE",
 * //             ],
 * //             type: "Prefix" || "Archive" || "File",
 * //             destination: "STRING_VALUE",
 * //           },
 * //         ],
 * //         vpcConfig: { // VPCConfig
 * //           subnets: [ // Subnets // required
 * //             "STRING_VALUE",
 * //           ],
 * //           securityGroups: [ // SecurityGroups
 * //             "STRING_VALUE",
 * //           ],
 * //           assignPublicIp: true || false,
 * //         },
 * //         compute: { // Compute
 * //           simulationUnitLimit: Number("int"),
 * //           computeType: "CPU" || "GPU_AND_CPU",
 * //           gpuUnitLimit: Number("int"),
 * //         },
 * //         tags: { // TagMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       failureReason: "STRING_VALUE",
 * //       failureCode: "InternalServiceError" || "RobotApplicationCrash" || "SimulationApplicationCrash" || "RobotApplicationHealthCheckFailure" || "SimulationApplicationHealthCheckFailure" || "BadPermissionsRobotApplication" || "BadPermissionsSimulationApplication" || "BadPermissionsS3Object" || "BadPermissionsS3Output" || "BadPermissionsCloudwatchLogs" || "SubnetIpLimitExceeded" || "ENILimitExceeded" || "BadPermissionsUserCredentials" || "InvalidBundleRobotApplication" || "InvalidBundleSimulationApplication" || "InvalidS3Resource" || "ThrottlingError" || "LimitExceeded" || "MismatchedEtag" || "RobotApplicationVersionMismatchedEtag" || "SimulationApplicationVersionMismatchedEtag" || "ResourceNotFound" || "RequestThrottled" || "BatchTimedOut" || "BatchCanceled" || "InvalidInput" || "WrongRegionS3Bucket" || "WrongRegionS3Output" || "WrongRegionRobotApplication" || "WrongRegionSimulationApplication" || "UploadContentMismatchError",
 * //       failedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   pendingRequests: [ // CreateSimulationJobRequests
 * //     {
 * //       outputLocation: {
 * //         s3Bucket: "STRING_VALUE",
 * //         s3Prefix: "STRING_VALUE",
 * //       },
 * //       loggingConfig: {
 * //         recordAllRosTopics: true || false,
 * //       },
 * //       maxJobDurationInSeconds: Number("long"), // required
 * //       iamRole: "STRING_VALUE",
 * //       failureBehavior: "Fail" || "Continue",
 * //       useDefaultApplications: true || false,
 * //       robotApplications: [
 * //         {
 * //           application: "STRING_VALUE", // required
 * //           applicationVersion: "STRING_VALUE",
 * //           launchConfig: {
 * //             packageName: "STRING_VALUE",
 * //             launchFile: "STRING_VALUE",
 * //             environmentVariables: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             portForwardingConfig: {
 * //               portMappings: [
 * //                 {
 * //                   jobPort: Number("int"), // required
 * //                   applicationPort: Number("int"), // required
 * //                   enableOnPublicIp: true || false,
 * //                 },
 * //               ],
 * //             },
 * //             streamUI: true || false,
 * //             command: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           uploadConfigurations: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               path: "STRING_VALUE", // required
 * //               uploadBehavior: "UPLOAD_ON_TERMINATE" || "UPLOAD_ROLLING_AUTO_REMOVE", // required
 * //             },
 * //           ],
 * //           useDefaultUploadConfigurations: true || false,
 * //           tools: [
 * //             {
 * //               streamUI: true || false,
 * //               name: "STRING_VALUE", // required
 * //               command: "STRING_VALUE", // required
 * //               streamOutputToCloudWatch: true || false,
 * //               exitBehavior: "FAIL" || "RESTART",
 * //             },
 * //           ],
 * //           useDefaultTools: true || false,
 * //         },
 * //       ],
 * //       simulationApplications: [
 * //         {
 * //           application: "STRING_VALUE", // required
 * //           applicationVersion: "STRING_VALUE",
 * //           launchConfig: {
 * //             packageName: "STRING_VALUE",
 * //             launchFile: "STRING_VALUE",
 * //             environmentVariables: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             portForwardingConfig: {
 * //               portMappings: [
 * //                 {
 * //                   jobPort: Number("int"), // required
 * //                   applicationPort: Number("int"), // required
 * //                   enableOnPublicIp: true || false,
 * //                 },
 * //               ],
 * //             },
 * //             streamUI: true || false,
 * //             command: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           uploadConfigurations: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               path: "STRING_VALUE", // required
 * //               uploadBehavior: "UPLOAD_ON_TERMINATE" || "UPLOAD_ROLLING_AUTO_REMOVE", // required
 * //             },
 * //           ],
 * //           worldConfigs: [
 * //             {
 * //               world: "STRING_VALUE",
 * //             },
 * //           ],
 * //           useDefaultUploadConfigurations: true || false,
 * //           tools: [
 * //             {
 * //               streamUI: true || false,
 * //               name: "STRING_VALUE", // required
 * //               command: "STRING_VALUE", // required
 * //               streamOutputToCloudWatch: true || false,
 * //               exitBehavior: "FAIL" || "RESTART",
 * //             },
 * //           ],
 * //           useDefaultTools: true || false,
 * //         },
 * //       ],
 * //       dataSources: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           s3Bucket: "STRING_VALUE", // required
 * //           s3Keys: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           type: "Prefix" || "Archive" || "File",
 * //           destination: "STRING_VALUE",
 * //         },
 * //       ],
 * //       vpcConfig: {
 * //         subnets: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroups: [
 * //           "STRING_VALUE",
 * //         ],
 * //         assignPublicIp: true || false,
 * //       },
 * //       compute: {
 * //         simulationUnitLimit: Number("int"),
 * //         computeType: "CPU" || "GPU_AND_CPU",
 * //         gpuUnitLimit: Number("int"),
 * //       },
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   createdRequests: [ // SimulationJobSummaries
 * //     { // SimulationJobSummary
 * //       arn: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       name: "STRING_VALUE",
 * //       status: "Pending" || "Preparing" || "Running" || "Restarting" || "Completed" || "Failed" || "RunningFailed" || "Terminating" || "Terminated" || "Canceled",
 * //       simulationApplicationNames: [ // SimulationApplicationNames
 * //         "STRING_VALUE",
 * //       ],
 * //       robotApplicationNames: [ // RobotApplicationNames
 * //         "STRING_VALUE",
 * //       ],
 * //       dataSourceNames: [ // DataSourceNames
 * //         "STRING_VALUE",
 * //       ],
 * //       computeType: "CPU" || "GPU_AND_CPU",
 * //     },
 * //   ],
 * //   tags: "<TagMap>",
 * // };
 *
 * ```
 *
 * @param DescribeSimulationJobBatchCommandInput - {@link DescribeSimulationJobBatchCommandInput}
 * @returns {@link DescribeSimulationJobBatchCommandOutput}
 * @see {@link DescribeSimulationJobBatchCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationJobBatchCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 *
 * @public
 */
export class DescribeSimulationJobBatchCommand extends $Command
  .classBuilder<
    DescribeSimulationJobBatchCommandInput,
    DescribeSimulationJobBatchCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("robomaker", "DescribeSimulationJobBatch", {})
  .n("RoboMakerClient", "DescribeSimulationJobBatchCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSimulationJobBatchCommand)
  .de(de_DescribeSimulationJobBatchCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSimulationJobBatchRequest;
      output: DescribeSimulationJobBatchResponse;
    };
    sdk: {
      input: DescribeSimulationJobBatchCommandInput;
      output: DescribeSimulationJobBatchCommandOutput;
    };
  };
}
