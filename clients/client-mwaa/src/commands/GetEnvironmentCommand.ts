// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEnvironmentInput, GetEnvironmentOutput } from "../models/models_0";
import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { GetEnvironment } from "../schemas/schemas_1_Environment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnvironmentCommand}.
 */
export interface GetEnvironmentCommandInput extends GetEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentCommand}.
 */
export interface GetEnvironmentCommandOutput extends GetEnvironmentOutput, __MetadataBearer {}

/**
 * <p>Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, GetEnvironmentCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, GetEnvironmentCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * // import type { MWAAClientConfig } from "@aws-sdk/client-mwaa";
 * const config = {}; // type is MWAAClientConfig
 * const client = new MWAAClient(config);
 * const input = { // GetEnvironmentInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentOutput
 * //   Environment: { // Environment
 * //     Name: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     WebserverUrl: "STRING_VALUE",
 * //     ExecutionRoleArn: "STRING_VALUE",
 * //     ServiceRoleArn: "STRING_VALUE",
 * //     KmsKey: "STRING_VALUE",
 * //     AirflowVersion: "STRING_VALUE",
 * //     SourceBucketArn: "STRING_VALUE",
 * //     DagS3Path: "STRING_VALUE",
 * //     PluginsS3Path: "STRING_VALUE",
 * //     PluginsS3ObjectVersion: "STRING_VALUE",
 * //     RequirementsS3Path: "STRING_VALUE",
 * //     RequirementsS3ObjectVersion: "STRING_VALUE",
 * //     StartupScriptS3Path: "STRING_VALUE",
 * //     StartupScriptS3ObjectVersion: "STRING_VALUE",
 * //     AirflowConfigurationOptions: { // AirflowConfigurationOptions
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     EnvironmentClass: "STRING_VALUE",
 * //     MaxWorkers: Number("int"),
 * //     NetworkConfiguration: { // NetworkConfiguration
 * //       SubnetIds: [ // SubnetList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [ // SecurityGroupList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     LoggingConfiguration: { // LoggingConfiguration
 * //       DagProcessingLogs: { // ModuleLoggingConfiguration
 * //         Enabled: true || false,
 * //         LogLevel: "STRING_VALUE",
 * //         CloudWatchLogGroupArn: "STRING_VALUE",
 * //       },
 * //       SchedulerLogs: {
 * //         Enabled: true || false,
 * //         LogLevel: "STRING_VALUE",
 * //         CloudWatchLogGroupArn: "STRING_VALUE",
 * //       },
 * //       WebserverLogs: {
 * //         Enabled: true || false,
 * //         LogLevel: "STRING_VALUE",
 * //         CloudWatchLogGroupArn: "STRING_VALUE",
 * //       },
 * //       WorkerLogs: {
 * //         Enabled: true || false,
 * //         LogLevel: "STRING_VALUE",
 * //         CloudWatchLogGroupArn: "STRING_VALUE",
 * //       },
 * //       TaskLogs: {
 * //         Enabled: true || false,
 * //         LogLevel: "STRING_VALUE",
 * //         CloudWatchLogGroupArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     LastUpdate: { // LastUpdate
 * //       Status: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       Error: { // UpdateError
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //       Source: "STRING_VALUE",
 * //       WorkerReplacementStrategy: "STRING_VALUE",
 * //     },
 * //     WeeklyMaintenanceWindowStart: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     WebserverAccessMode: "STRING_VALUE",
 * //     MinWorkers: Number("int"),
 * //     Schedulers: Number("int"),
 * //     WebserverVpcEndpointService: "STRING_VALUE",
 * //     DatabaseVpcEndpointService: "STRING_VALUE",
 * //     CeleryExecutorQueue: "STRING_VALUE",
 * //     EndpointManagement: "STRING_VALUE",
 * //     MinWebservers: Number("int"),
 * //     MaxWebservers: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEnvironmentCommandInput - {@link GetEnvironmentCommandInput}
 * @returns {@link GetEnvironmentCommandOutput}
 * @see {@link GetEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>InternalServerException: An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>ResourceNotFoundException: The resource is not available.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>ValidationException: The provided input is not valid.</p>
 *
 * @throws {@link MWAAServiceException}
 * <p>Base exception class for all service exceptions from MWAA service.</p>
 *
 *
 * @public
 */
export class GetEnvironmentCommand extends $Command
  .classBuilder<
    GetEnvironmentCommandInput,
    GetEnvironmentCommandOutput,
    MWAAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MWAAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMWAA", "GetEnvironment", {})
  .n("MWAAClient", "GetEnvironmentCommand")
  .sc(GetEnvironment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentInput;
      output: GetEnvironmentOutput;
    };
    sdk: {
      input: GetEnvironmentCommandInput;
      output: GetEnvironmentCommandOutput;
    };
  };
}
