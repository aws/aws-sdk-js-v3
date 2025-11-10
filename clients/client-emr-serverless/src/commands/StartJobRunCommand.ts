// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartJobRunRequest, StartJobRunResponse } from "../models/models_0";
import { StartJobRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartJobRunCommand}.
 */
export interface StartJobRunCommandInput extends StartJobRunRequest {}
/**
 * @public
 *
 * The output of {@link StartJobRunCommand}.
 */
export interface StartJobRunCommandOutput extends StartJobRunResponse, __MetadataBearer {}

/**
 * <p>Starts a job run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, StartJobRunCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, StartJobRunCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // StartJobRunRequest
 *   applicationId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 *   executionRoleArn: "STRING_VALUE", // required
 *   executionIamPolicy: { // JobRunExecutionIamPolicy
 *     policy: "STRING_VALUE",
 *     policyArns: [ // PolicyArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   jobDriver: { // JobDriver Union: only one key present
 *     sparkSubmit: { // SparkSubmit
 *       entryPoint: "STRING_VALUE", // required
 *       entryPointArguments: [ // EntryPointArguments
 *         "STRING_VALUE",
 *       ],
 *       sparkSubmitParameters: "STRING_VALUE",
 *     },
 *     hive: { // Hive
 *       query: "STRING_VALUE", // required
 *       initQueryFile: "STRING_VALUE",
 *       parameters: "STRING_VALUE",
 *     },
 *   },
 *   configurationOverrides: { // ConfigurationOverrides
 *     applicationConfiguration: [ // ConfigurationList
 *       { // Configuration
 *         classification: "STRING_VALUE", // required
 *         properties: { // SensitivePropertiesMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         configurations: [
 *           {
 *             classification: "STRING_VALUE", // required
 *             properties: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             configurations: "<ConfigurationList>",
 *           },
 *         ],
 *       },
 *     ],
 *     monitoringConfiguration: { // MonitoringConfiguration
 *       s3MonitoringConfiguration: { // S3MonitoringConfiguration
 *         logUri: "STRING_VALUE",
 *         encryptionKeyArn: "STRING_VALUE",
 *       },
 *       managedPersistenceMonitoringConfiguration: { // ManagedPersistenceMonitoringConfiguration
 *         enabled: true || false,
 *         encryptionKeyArn: "STRING_VALUE",
 *       },
 *       cloudWatchLoggingConfiguration: { // CloudWatchLoggingConfiguration
 *         enabled: true || false, // required
 *         logGroupName: "STRING_VALUE",
 *         logStreamNamePrefix: "STRING_VALUE",
 *         encryptionKeyArn: "STRING_VALUE",
 *         logTypes: { // LogTypeMap
 *           "<keys>": [ // LogTypeList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       prometheusMonitoringConfiguration: { // PrometheusMonitoringConfiguration
 *         remoteWriteUrl: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   executionTimeoutMinutes: Number("long"),
 *   name: "STRING_VALUE",
 *   mode: "STRING_VALUE",
 *   retryPolicy: { // RetryPolicy
 *     maxAttempts: Number("int"),
 *     maxFailedAttemptsPerHour: Number("int"),
 *   },
 * };
 * const command = new StartJobRunCommand(input);
 * const response = await client.send(command);
 * // { // StartJobRunResponse
 * //   applicationId: "STRING_VALUE", // required
 * //   jobRunId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartJobRunCommandInput - {@link StartJobRunCommandInput}
 * @returns {@link StartJobRunCommandOutput}
 * @see {@link StartJobRunCommandInput} for command's `input` shape.
 * @see {@link StartJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource.</p>
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
export class StartJobRunCommand extends $Command
  .classBuilder<
    StartJobRunCommandInput,
    StartJobRunCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsToledoWebService", "StartJobRun", {})
  .n("EMRServerlessClient", "StartJobRunCommand")
  .sc(StartJobRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartJobRunRequest;
      output: StartJobRunResponse;
    };
    sdk: {
      input: StartJobRunCommandInput;
      output: StartJobRunCommandOutput;
    };
  };
}
