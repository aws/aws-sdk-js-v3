// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateApplicationRequest,
  CreateApplicationRequestFilterSensitiveLog,
  CreateApplicationResponse,
} from "../models/models_0";
import { de_CreateApplicationCommand, se_CreateApplicationCommand } from "../protocols/Aws_restJson1";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsToledoWebService", "CreateApplication", {})
  .n("EMRServerlessClient", "CreateApplicationCommand")
  .f(CreateApplicationRequestFilterSensitiveLog, void 0)
  .ser(se_CreateApplicationCommand)
  .de(de_CreateApplicationCommand)
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
