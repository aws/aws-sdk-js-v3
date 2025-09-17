// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListJobRunsRequest, ListJobRunsResponse, ListJobRunsResponseFilterSensitiveLog } from "../models/models_0";
import { de_ListJobRunsCommand, se_ListJobRunsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandInput extends ListJobRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandOutput extends ListJobRunsResponse, __MetadataBearer {}

/**
 * <p>Lists job runs based on a set of parameters. A job run is a unit of work, such as a
 *          Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListJobRunsCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListJobRunsCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // import type { EMRContainersClientConfig } from "@aws-sdk/client-emr-containers";
 * const config = {}; // type is EMRContainersClientConfig
 * const client = new EMRContainersClient(config);
 * const input = { // ListJobRunsRequest
 *   virtualClusterId: "STRING_VALUE", // required
 *   createdBefore: new Date("TIMESTAMP"),
 *   createdAfter: new Date("TIMESTAMP"),
 *   name: "STRING_VALUE",
 *   states: [ // JobRunStates
 *     "PENDING" || "SUBMITTED" || "RUNNING" || "FAILED" || "CANCELLED" || "CANCEL_PENDING" || "COMPLETED",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListJobRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobRunsResponse
 * //   jobRuns: [ // JobRuns
 * //     { // JobRun
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       virtualClusterId: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       state: "PENDING" || "SUBMITTED" || "RUNNING" || "FAILED" || "CANCELLED" || "CANCEL_PENDING" || "COMPLETED",
 * //       clientToken: "STRING_VALUE",
 * //       executionRoleArn: "STRING_VALUE",
 * //       releaseLabel: "STRING_VALUE",
 * //       configurationOverrides: { // ConfigurationOverrides
 * //         applicationConfiguration: [ // ConfigurationList
 * //           { // Configuration
 * //             classification: "STRING_VALUE", // required
 * //             properties: { // SensitivePropertiesMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             configurations: [
 * //               {
 * //                 classification: "STRING_VALUE", // required
 * //                 properties: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 configurations: "<ConfigurationList>",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         monitoringConfiguration: { // MonitoringConfiguration
 * //           managedLogs: { // ManagedLogs
 * //             allowAWSToRetainLogs: "ENABLED" || "DISABLED",
 * //             encryptionKeyArn: "STRING_VALUE",
 * //           },
 * //           persistentAppUI: "ENABLED" || "DISABLED",
 * //           cloudWatchMonitoringConfiguration: { // CloudWatchMonitoringConfiguration
 * //             logGroupName: "STRING_VALUE", // required
 * //             logStreamNamePrefix: "STRING_VALUE",
 * //           },
 * //           s3MonitoringConfiguration: { // S3MonitoringConfiguration
 * //             logUri: "STRING_VALUE", // required
 * //           },
 * //           containerLogRotationConfiguration: { // ContainerLogRotationConfiguration
 * //             rotationSize: "STRING_VALUE", // required
 * //             maxFilesToKeep: Number("int"), // required
 * //           },
 * //         },
 * //       },
 * //       jobDriver: { // JobDriver
 * //         sparkSubmitJobDriver: { // SparkSubmitJobDriver
 * //           entryPoint: "STRING_VALUE", // required
 * //           entryPointArguments: [ // EntryPointArguments
 * //             "STRING_VALUE",
 * //           ],
 * //           sparkSubmitParameters: "STRING_VALUE",
 * //         },
 * //         sparkSqlJobDriver: { // SparkSqlJobDriver
 * //           entryPoint: "STRING_VALUE",
 * //           sparkSqlParameters: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       finishedAt: new Date("TIMESTAMP"),
 * //       stateDetails: "STRING_VALUE",
 * //       failureReason: "INTERNAL_ERROR" || "USER_ERROR" || "VALIDATION_ERROR" || "CLUSTER_UNAVAILABLE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       retryPolicyConfiguration: { // RetryPolicyConfiguration
 * //         maxAttempts: Number("int"), // required
 * //       },
 * //       retryPolicyExecution: { // RetryPolicyExecution
 * //         currentAttemptCount: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobRunsCommandInput - {@link ListJobRunsCommandInput}
 * @returns {@link ListJobRunsCommandOutput}
 * @see {@link ListJobRunsCommandInput} for command's `input` shape.
 * @see {@link ListJobRunsCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
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
export class ListJobRunsCommand extends $Command
  .classBuilder<
    ListJobRunsCommandInput,
    ListJobRunsCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsChicagoWebService", "ListJobRuns", {})
  .n("EMRContainersClient", "ListJobRunsCommand")
  .f(void 0, ListJobRunsResponseFilterSensitiveLog)
  .ser(se_ListJobRunsCommand)
  .de(de_ListJobRunsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobRunsRequest;
      output: ListJobRunsResponse;
    };
    sdk: {
      input: ListJobRunsCommandInput;
      output: ListJobRunsCommandOutput;
    };
  };
}
