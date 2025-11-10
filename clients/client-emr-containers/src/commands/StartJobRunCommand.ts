// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
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
 * <p>Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or
 *          SparkSQL query, that you submit to Amazon EMR on EKS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, StartJobRunCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, StartJobRunCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // import type { EMRContainersClientConfig } from "@aws-sdk/client-emr-containers";
 * const config = {}; // type is EMRContainersClientConfig
 * const client = new EMRContainersClient(config);
 * const input = { // StartJobRunRequest
 *   name: "STRING_VALUE",
 *   virtualClusterId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 *   executionRoleArn: "STRING_VALUE",
 *   releaseLabel: "STRING_VALUE",
 *   jobDriver: { // JobDriver
 *     sparkSubmitJobDriver: { // SparkSubmitJobDriver
 *       entryPoint: "STRING_VALUE", // required
 *       entryPointArguments: [ // EntryPointArguments
 *         "STRING_VALUE",
 *       ],
 *       sparkSubmitParameters: "STRING_VALUE",
 *     },
 *     sparkSqlJobDriver: { // SparkSqlJobDriver
 *       entryPoint: "STRING_VALUE",
 *       sparkSqlParameters: "STRING_VALUE",
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
 *       managedLogs: { // ManagedLogs
 *         allowAWSToRetainLogs: "ENABLED" || "DISABLED",
 *         encryptionKeyArn: "STRING_VALUE",
 *       },
 *       persistentAppUI: "ENABLED" || "DISABLED",
 *       cloudWatchMonitoringConfiguration: { // CloudWatchMonitoringConfiguration
 *         logGroupName: "STRING_VALUE", // required
 *         logStreamNamePrefix: "STRING_VALUE",
 *       },
 *       s3MonitoringConfiguration: { // S3MonitoringConfiguration
 *         logUri: "STRING_VALUE", // required
 *       },
 *       containerLogRotationConfiguration: { // ContainerLogRotationConfiguration
 *         rotationSize: "STRING_VALUE", // required
 *         maxFilesToKeep: Number("int"), // required
 *       },
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   jobTemplateId: "STRING_VALUE",
 *   jobTemplateParameters: { // TemplateParameterInputMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   retryPolicyConfiguration: { // RetryPolicyConfiguration
 *     maxAttempts: Number("int"), // required
 *   },
 * };
 * const command = new StartJobRunCommand(input);
 * const response = await client.send(command);
 * // { // StartJobRunResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   virtualClusterId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartJobRunCommandInput - {@link StartJobRunCommandInput}
 * @returns {@link StartJobRunCommandOutput}
 * @see {@link StartJobRunCommandInput} for command's `input` shape.
 * @see {@link StartJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 *
 * @public
 */
export class StartJobRunCommand extends $Command
  .classBuilder<
    StartJobRunCommandInput,
    StartJobRunCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsChicagoWebService", "StartJobRun", {})
  .n("EMRContainersClient", "StartJobRunCommand")
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
