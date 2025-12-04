// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import { CreateApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends CreateApplicationResponse, __MetadataBearer {}

/**
 * <p>Creates an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, CreateApplicationCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, CreateApplicationCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // CreateApplicationRequest
 *   name: "STRING_VALUE",
 *   releaseLabel: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 *   initialCapacity: { // InitialCapacityConfigMap
 *     "<keys>": { // InitialCapacityConfig
 *       workerCount: Number("long"), // required
 *       workerConfiguration: { // WorkerResourceConfig
 *         cpu: "STRING_VALUE", // required
 *         memory: "STRING_VALUE", // required
 *         disk: "STRING_VALUE",
 *         diskType: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   maximumCapacity: { // MaximumAllowedResources
 *     cpu: "STRING_VALUE", // required
 *     memory: "STRING_VALUE", // required
 *     disk: "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   autoStartConfiguration: { // AutoStartConfig
 *     enabled: true || false,
 *   },
 *   autoStopConfiguration: { // AutoStopConfig
 *     enabled: true || false,
 *     idleTimeoutMinutes: Number("int"),
 *   },
 *   networkConfiguration: { // NetworkConfiguration
 *     subnetIds: [ // SubnetIds
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   architecture: "STRING_VALUE",
 *   imageConfiguration: { // ImageConfigurationInput
 *     imageUri: "STRING_VALUE",
 *   },
 *   workerTypeSpecifications: { // WorkerTypeSpecificationInputMap
 *     "<keys>": { // WorkerTypeSpecificationInput
 *       imageConfiguration: {
 *         imageUri: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   runtimeConfiguration: [ // ConfigurationList
 *     { // Configuration
 *       classification: "STRING_VALUE", // required
 *       properties: { // SensitivePropertiesMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       configurations: [
 *         {
 *           classification: "STRING_VALUE", // required
 *           properties: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           configurations: "<ConfigurationList>",
 *         },
 *       ],
 *     },
 *   ],
 *   monitoringConfiguration: { // MonitoringConfiguration
 *     s3MonitoringConfiguration: { // S3MonitoringConfiguration
 *       logUri: "STRING_VALUE",
 *       encryptionKeyArn: "STRING_VALUE",
 *     },
 *     managedPersistenceMonitoringConfiguration: { // ManagedPersistenceMonitoringConfiguration
 *       enabled: true || false,
 *       encryptionKeyArn: "STRING_VALUE",
 *     },
 *     cloudWatchLoggingConfiguration: { // CloudWatchLoggingConfiguration
 *       enabled: true || false, // required
 *       logGroupName: "STRING_VALUE",
 *       logStreamNamePrefix: "STRING_VALUE",
 *       encryptionKeyArn: "STRING_VALUE",
 *       logTypes: { // LogTypeMap
 *         "<keys>": [ // LogTypeList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     prometheusMonitoringConfiguration: { // PrometheusMonitoringConfiguration
 *       remoteWriteUrl: "STRING_VALUE",
 *     },
 *   },
 *   interactiveConfiguration: { // InteractiveConfiguration
 *     studioEnabled: true || false,
 *     livyEndpointEnabled: true || false,
 *   },
 *   schedulerConfiguration: { // SchedulerConfiguration
 *     queueTimeoutMinutes: Number("int"),
 *     maxConcurrentRuns: Number("int"),
 *   },
 *   identityCenterConfiguration: { // IdentityCenterConfigurationInput
 *     identityCenterInstanceArn: "STRING_VALUE",
 *     userBackgroundSessionsEnabled: true || false,
 *   },
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationResponse
 * //   applicationId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
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
export class CreateApplicationCommand extends $Command
  .classBuilder<
    CreateApplicationCommandInput,
    CreateApplicationCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsToledoWebService", "CreateApplication", {})
  .n("EMRServerlessClient", "CreateApplicationCommand")
  .sc(CreateApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationRequest;
      output: CreateApplicationResponse;
    };
    sdk: {
      input: CreateApplicationCommandInput;
      output: CreateApplicationCommandOutput;
    };
  };
}
