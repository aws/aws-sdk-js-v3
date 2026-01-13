// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetJobRunRequest, GetJobRunResponse } from "../models/models_0";
import { GetJobRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobRunCommand}.
 */
export interface GetJobRunCommandInput extends GetJobRunRequest {}
/**
 * @public
 *
 * The output of {@link GetJobRunCommand}.
 */
export interface GetJobRunCommandOutput extends GetJobRunResponse, __MetadataBearer {}

/**
 * <p>Displays detailed information about a job run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, GetJobRunCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, GetJobRunCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // GetJobRunRequest
 *   applicationId: "STRING_VALUE", // required
 *   jobRunId: "STRING_VALUE", // required
 *   attempt: Number("int"),
 * };
 * const command = new GetJobRunCommand(input);
 * const response = await client.send(command);
 * // { // GetJobRunResponse
 * //   jobRun: { // JobRun
 * //     applicationId: "STRING_VALUE", // required
 * //     jobRunId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE", // required
 * //     createdBy: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     executionRole: "STRING_VALUE", // required
 * //     executionIamPolicy: { // JobRunExecutionIamPolicy
 * //       policy: "STRING_VALUE",
 * //       policyArns: [ // PolicyArnList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     state: "STRING_VALUE", // required
 * //     stateDetails: "STRING_VALUE", // required
 * //     releaseLabel: "STRING_VALUE", // required
 * //     configurationOverrides: { // ConfigurationOverrides
 * //       applicationConfiguration: [ // ConfigurationList
 * //         { // Configuration
 * //           classification: "STRING_VALUE", // required
 * //           properties: { // SensitivePropertiesMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           configurations: [
 * //             {
 * //               classification: "STRING_VALUE", // required
 * //               properties: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               configurations: "<ConfigurationList>",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       monitoringConfiguration: { // MonitoringConfiguration
 * //         s3MonitoringConfiguration: { // S3MonitoringConfiguration
 * //           logUri: "STRING_VALUE",
 * //           encryptionKeyArn: "STRING_VALUE",
 * //         },
 * //         managedPersistenceMonitoringConfiguration: { // ManagedPersistenceMonitoringConfiguration
 * //           enabled: true || false,
 * //           encryptionKeyArn: "STRING_VALUE",
 * //         },
 * //         cloudWatchLoggingConfiguration: { // CloudWatchLoggingConfiguration
 * //           enabled: true || false, // required
 * //           logGroupName: "STRING_VALUE",
 * //           logStreamNamePrefix: "STRING_VALUE",
 * //           encryptionKeyArn: "STRING_VALUE",
 * //           logTypes: { // LogTypeMap
 * //             "<keys>": [ // LogTypeList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         prometheusMonitoringConfiguration: { // PrometheusMonitoringConfiguration
 * //           remoteWriteUrl: "STRING_VALUE",
 * //         },
 * //       },
 * //       diskEncryptionConfiguration: { // DiskEncryptionConfiguration
 * //         encryptionContext: { // EncryptionContext
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         encryptionKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     jobDriver: { // JobDriver Union: only one key present
 * //       sparkSubmit: { // SparkSubmit
 * //         entryPoint: "STRING_VALUE", // required
 * //         entryPointArguments: [ // EntryPointArguments
 * //           "STRING_VALUE",
 * //         ],
 * //         sparkSubmitParameters: "STRING_VALUE",
 * //       },
 * //       hive: { // Hive
 * //         query: "STRING_VALUE", // required
 * //         initQueryFile: "STRING_VALUE",
 * //         parameters: "STRING_VALUE",
 * //       },
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     totalResourceUtilization: { // TotalResourceUtilization
 * //       vCPUHour: Number("double"),
 * //       memoryGBHour: Number("double"),
 * //       storageGBHour: Number("double"),
 * //     },
 * //     networkConfiguration: { // NetworkConfiguration
 * //       subnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     totalExecutionDurationSeconds: Number("int"),
 * //     executionTimeoutMinutes: Number("long"),
 * //     billedResourceUtilization: { // ResourceUtilization
 * //       vCPUHour: Number("double"),
 * //       memoryGBHour: Number("double"),
 * //       storageGBHour: Number("double"),
 * //     },
 * //     mode: "STRING_VALUE",
 * //     retryPolicy: { // RetryPolicy
 * //       maxAttempts: Number("int"),
 * //       maxFailedAttemptsPerHour: Number("int"),
 * //     },
 * //     attempt: Number("int"),
 * //     attemptCreatedAt: new Date("TIMESTAMP"),
 * //     attemptUpdatedAt: new Date("TIMESTAMP"),
 * //     startedAt: new Date("TIMESTAMP"),
 * //     endedAt: new Date("TIMESTAMP"),
 * //     queuedDurationMilliseconds: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJobRunCommandInput - {@link GetJobRunCommandInput}
 * @returns {@link GetJobRunCommandOutput}
 * @see {@link GetJobRunCommandInput} for command's `input` shape.
 * @see {@link GetJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 *
 * @public
 */
export class GetJobRunCommand extends $Command
  .classBuilder<
    GetJobRunCommandInput,
    GetJobRunCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsToledoWebService", "GetJobRun", {})
  .n("EMRServerlessClient", "GetJobRunCommand")
  .sc(GetJobRun$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobRunRequest;
      output: GetJobRunResponse;
    };
    sdk: {
      input: GetJobRunCommandInput;
      output: GetJobRunCommandOutput;
    };
  };
}
