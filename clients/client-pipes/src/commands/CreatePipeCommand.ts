// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePipeRequest, CreatePipeResponse } from "../models/models_0";
import { PipesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PipesClient";
import { CreatePipe } from "../schemas/schemas_1_Pipe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePipeCommand}.
 */
export interface CreatePipeCommandInput extends CreatePipeRequest {}
/**
 * @public
 *
 * The output of {@link CreatePipeCommand}.
 */
export interface CreatePipeCommandOutput extends CreatePipeResponse, __MetadataBearer {}

/**
 * <p>Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces
 *          the need for specialized knowledge and integration code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PipesClient, CreatePipeCommand } from "@aws-sdk/client-pipes"; // ES Modules import
 * // const { PipesClient, CreatePipeCommand } = require("@aws-sdk/client-pipes"); // CommonJS import
 * // import type { PipesClientConfig } from "@aws-sdk/client-pipes";
 * const config = {}; // type is PipesClientConfig
 * const client = new PipesClient(config);
 * const input = { // CreatePipeRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DesiredState: "STRING_VALUE",
 *   Source: "STRING_VALUE", // required
 *   SourceParameters: { // PipeSourceParameters
 *     FilterCriteria: { // FilterCriteria
 *       Filters: [ // FilterList
 *         { // Filter
 *           Pattern: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     KinesisStreamParameters: { // PipeSourceKinesisStreamParameters
 *       BatchSize: Number("int"),
 *       DeadLetterConfig: { // DeadLetterConfig
 *         Arn: "STRING_VALUE",
 *       },
 *       OnPartialBatchItemFailure: "STRING_VALUE",
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *       MaximumRecordAgeInSeconds: Number("int"),
 *       MaximumRetryAttempts: Number("int"),
 *       ParallelizationFactor: Number("int"),
 *       StartingPosition: "STRING_VALUE", // required
 *       StartingPositionTimestamp: new Date("TIMESTAMP"),
 *     },
 *     DynamoDBStreamParameters: { // PipeSourceDynamoDBStreamParameters
 *       BatchSize: Number("int"),
 *       DeadLetterConfig: {
 *         Arn: "STRING_VALUE",
 *       },
 *       OnPartialBatchItemFailure: "STRING_VALUE",
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *       MaximumRecordAgeInSeconds: Number("int"),
 *       MaximumRetryAttempts: Number("int"),
 *       ParallelizationFactor: Number("int"),
 *       StartingPosition: "STRING_VALUE", // required
 *     },
 *     SqsQueueParameters: { // PipeSourceSqsQueueParameters
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *     },
 *     ActiveMQBrokerParameters: { // PipeSourceActiveMQBrokerParameters
 *       Credentials: { // MQBrokerAccessCredentials Union: only one key present
 *         BasicAuth: "STRING_VALUE",
 *       },
 *       QueueName: "STRING_VALUE", // required
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *     },
 *     RabbitMQBrokerParameters: { // PipeSourceRabbitMQBrokerParameters
 *       Credentials: {//  Union: only one key present
 *         BasicAuth: "STRING_VALUE",
 *       },
 *       QueueName: "STRING_VALUE", // required
 *       VirtualHost: "STRING_VALUE",
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *     },
 *     ManagedStreamingKafkaParameters: { // PipeSourceManagedStreamingKafkaParameters
 *       TopicName: "STRING_VALUE", // required
 *       StartingPosition: "STRING_VALUE",
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *       ConsumerGroupID: "STRING_VALUE",
 *       Credentials: { // MSKAccessCredentials Union: only one key present
 *         SaslScram512Auth: "STRING_VALUE",
 *         ClientCertificateTlsAuth: "STRING_VALUE",
 *       },
 *     },
 *     SelfManagedKafkaParameters: { // PipeSourceSelfManagedKafkaParameters
 *       TopicName: "STRING_VALUE", // required
 *       StartingPosition: "STRING_VALUE",
 *       AdditionalBootstrapServers: [ // KafkaBootstrapServers
 *         "STRING_VALUE",
 *       ],
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *       ConsumerGroupID: "STRING_VALUE",
 *       Credentials: { // SelfManagedKafkaAccessConfigurationCredentials Union: only one key present
 *         BasicAuth: "STRING_VALUE",
 *         SaslScram512Auth: "STRING_VALUE",
 *         SaslScram256Auth: "STRING_VALUE",
 *         ClientCertificateTlsAuth: "STRING_VALUE",
 *       },
 *       ServerRootCaCertificate: "STRING_VALUE",
 *       Vpc: { // SelfManagedKafkaAccessConfigurationVpc
 *         Subnets: [ // SubnetIds
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroup: [ // SecurityGroupIds
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   Enrichment: "STRING_VALUE",
 *   EnrichmentParameters: { // PipeEnrichmentParameters
 *     InputTemplate: "STRING_VALUE",
 *     HttpParameters: { // PipeEnrichmentHttpParameters
 *       PathParameterValues: [ // PathParameterList
 *         "STRING_VALUE",
 *       ],
 *       HeaderParameters: { // HeaderParametersMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       QueryStringParameters: { // QueryStringParametersMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   Target: "STRING_VALUE", // required
 *   TargetParameters: { // PipeTargetParameters
 *     InputTemplate: "STRING_VALUE",
 *     LambdaFunctionParameters: { // PipeTargetLambdaFunctionParameters
 *       InvocationType: "STRING_VALUE",
 *     },
 *     StepFunctionStateMachineParameters: { // PipeTargetStateMachineParameters
 *       InvocationType: "STRING_VALUE",
 *     },
 *     KinesisStreamParameters: { // PipeTargetKinesisStreamParameters
 *       PartitionKey: "STRING_VALUE", // required
 *     },
 *     EcsTaskParameters: { // PipeTargetEcsTaskParameters
 *       TaskDefinitionArn: "STRING_VALUE", // required
 *       TaskCount: Number("int"),
 *       LaunchType: "STRING_VALUE",
 *       NetworkConfiguration: { // NetworkConfiguration
 *         awsvpcConfiguration: { // AwsVpcConfiguration
 *           Subnets: [ // Subnets // required
 *             "STRING_VALUE",
 *           ],
 *           SecurityGroups: [ // SecurityGroups
 *             "STRING_VALUE",
 *           ],
 *           AssignPublicIp: "STRING_VALUE",
 *         },
 *       },
 *       PlatformVersion: "STRING_VALUE",
 *       Group: "STRING_VALUE",
 *       CapacityProviderStrategy: [ // CapacityProviderStrategy
 *         { // CapacityProviderStrategyItem
 *           capacityProvider: "STRING_VALUE", // required
 *           weight: Number("int"),
 *           base: Number("int"),
 *         },
 *       ],
 *       EnableECSManagedTags: true || false,
 *       EnableExecuteCommand: true || false,
 *       PlacementConstraints: [ // PlacementConstraints
 *         { // PlacementConstraint
 *           type: "STRING_VALUE",
 *           expression: "STRING_VALUE",
 *         },
 *       ],
 *       PlacementStrategy: [ // PlacementStrategies
 *         { // PlacementStrategy
 *           type: "STRING_VALUE",
 *           field: "STRING_VALUE",
 *         },
 *       ],
 *       PropagateTags: "STRING_VALUE",
 *       ReferenceId: "STRING_VALUE",
 *       Overrides: { // EcsTaskOverride
 *         ContainerOverrides: [ // EcsContainerOverrideList
 *           { // EcsContainerOverride
 *             Command: [ // StringList
 *               "STRING_VALUE",
 *             ],
 *             Cpu: Number("int"),
 *             Environment: [ // EcsEnvironmentVariableList
 *               { // EcsEnvironmentVariable
 *                 name: "STRING_VALUE",
 *                 value: "STRING_VALUE",
 *               },
 *             ],
 *             EnvironmentFiles: [ // EcsEnvironmentFileList
 *               { // EcsEnvironmentFile
 *                 type: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *             ],
 *             Memory: Number("int"),
 *             MemoryReservation: Number("int"),
 *             Name: "STRING_VALUE",
 *             ResourceRequirements: [ // EcsResourceRequirementsList
 *               { // EcsResourceRequirement
 *                 type: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         ],
 *         Cpu: "STRING_VALUE",
 *         EphemeralStorage: { // EcsEphemeralStorage
 *           sizeInGiB: Number("int"), // required
 *         },
 *         ExecutionRoleArn: "STRING_VALUE",
 *         InferenceAcceleratorOverrides: [ // EcsInferenceAcceleratorOverrideList
 *           { // EcsInferenceAcceleratorOverride
 *             deviceName: "STRING_VALUE",
 *             deviceType: "STRING_VALUE",
 *           },
 *         ],
 *         Memory: "STRING_VALUE",
 *         TaskRoleArn: "STRING_VALUE",
 *       },
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     BatchJobParameters: { // PipeTargetBatchJobParameters
 *       JobDefinition: "STRING_VALUE", // required
 *       JobName: "STRING_VALUE", // required
 *       ArrayProperties: { // BatchArrayProperties
 *         Size: Number("int"),
 *       },
 *       RetryStrategy: { // BatchRetryStrategy
 *         Attempts: Number("int"),
 *       },
 *       ContainerOverrides: { // BatchContainerOverrides
 *         Command: [
 *           "STRING_VALUE",
 *         ],
 *         Environment: [ // BatchEnvironmentVariableList
 *           { // BatchEnvironmentVariable
 *             Name: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         InstanceType: "STRING_VALUE",
 *         ResourceRequirements: [ // BatchResourceRequirementsList
 *           { // BatchResourceRequirement
 *             Type: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       DependsOn: [ // BatchDependsOn
 *         { // BatchJobDependency
 *           JobId: "STRING_VALUE",
 *           Type: "STRING_VALUE",
 *         },
 *       ],
 *       Parameters: { // BatchParametersMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     SqsQueueParameters: { // PipeTargetSqsQueueParameters
 *       MessageGroupId: "STRING_VALUE",
 *       MessageDeduplicationId: "STRING_VALUE",
 *     },
 *     HttpParameters: { // PipeTargetHttpParameters
 *       PathParameterValues: [
 *         "STRING_VALUE",
 *       ],
 *       HeaderParameters: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       QueryStringParameters: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     RedshiftDataParameters: { // PipeTargetRedshiftDataParameters
 *       SecretManagerArn: "STRING_VALUE",
 *       Database: "STRING_VALUE", // required
 *       DbUser: "STRING_VALUE",
 *       StatementName: "STRING_VALUE",
 *       WithEvent: true || false,
 *       Sqls: [ // Sqls // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     SageMakerPipelineParameters: { // PipeTargetSageMakerPipelineParameters
 *       PipelineParameterList: [ // SageMakerPipelineParameterList
 *         { // SageMakerPipelineParameter
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     EventBridgeEventBusParameters: { // PipeTargetEventBridgeEventBusParameters
 *       EndpointId: "STRING_VALUE",
 *       DetailType: "STRING_VALUE",
 *       Source: "STRING_VALUE",
 *       Resources: [ // EventBridgeEventResourceList
 *         "STRING_VALUE",
 *       ],
 *       Time: "STRING_VALUE",
 *     },
 *     CloudWatchLogsParameters: { // PipeTargetCloudWatchLogsParameters
 *       LogStreamName: "STRING_VALUE",
 *       Timestamp: "STRING_VALUE",
 *     },
 *     TimestreamParameters: { // PipeTargetTimestreamParameters
 *       TimeValue: "STRING_VALUE", // required
 *       EpochTimeUnit: "STRING_VALUE",
 *       TimeFieldType: "STRING_VALUE",
 *       TimestampFormat: "STRING_VALUE",
 *       VersionValue: "STRING_VALUE", // required
 *       DimensionMappings: [ // DimensionMappings // required
 *         { // DimensionMapping
 *           DimensionValue: "STRING_VALUE", // required
 *           DimensionValueType: "STRING_VALUE", // required
 *           DimensionName: "STRING_VALUE", // required
 *         },
 *       ],
 *       SingleMeasureMappings: [ // SingleMeasureMappings
 *         { // SingleMeasureMapping
 *           MeasureValue: "STRING_VALUE", // required
 *           MeasureValueType: "STRING_VALUE", // required
 *           MeasureName: "STRING_VALUE", // required
 *         },
 *       ],
 *       MultiMeasureMappings: [ // MultiMeasureMappings
 *         { // MultiMeasureMapping
 *           MultiMeasureName: "STRING_VALUE", // required
 *           MultiMeasureAttributeMappings: [ // MultiMeasureAttributeMappings // required
 *             { // MultiMeasureAttributeMapping
 *               MeasureValue: "STRING_VALUE", // required
 *               MeasureValueType: "STRING_VALUE", // required
 *               MultiMeasureAttributeName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   LogConfiguration: { // PipeLogConfigurationParameters
 *     S3LogDestination: { // S3LogDestinationParameters
 *       BucketName: "STRING_VALUE", // required
 *       BucketOwner: "STRING_VALUE", // required
 *       OutputFormat: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *     },
 *     FirehoseLogDestination: { // FirehoseLogDestinationParameters
 *       DeliveryStreamArn: "STRING_VALUE", // required
 *     },
 *     CloudwatchLogsLogDestination: { // CloudwatchLogsLogDestinationParameters
 *       LogGroupArn: "STRING_VALUE", // required
 *     },
 *     Level: "STRING_VALUE", // required
 *     IncludeExecutionData: [ // IncludeExecutionData
 *       "STRING_VALUE",
 *     ],
 *   },
 *   KmsKeyIdentifier: "STRING_VALUE",
 * };
 * const command = new CreatePipeCommand(input);
 * const response = await client.send(command);
 * // { // CreatePipeResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   DesiredState: "STRING_VALUE",
 * //   CurrentState: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreatePipeCommandInput - {@link CreatePipeCommandInput}
 * @returns {@link CreatePipeCommandOutput}
 * @see {@link CreatePipeCommandInput} for command's `input` shape.
 * @see {@link CreatePipeCommandOutput} for command's `response` shape.
 * @see {@link PipesClientResolvedConfig | config} for PipesClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An action you attempted resulted in an exception.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An action was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that an error has occurred while performing a validate operation.</p>
 *
 * @throws {@link PipesServiceException}
 * <p>Base exception class for all service exceptions from Pipes service.</p>
 *
 *
 * @public
 */
export class CreatePipeCommand extends $Command
  .classBuilder<
    CreatePipeCommandInput,
    CreatePipeCommandOutput,
    PipesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PipesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pipes", "CreatePipe", {})
  .n("PipesClient", "CreatePipeCommand")
  .sc(CreatePipe)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePipeRequest;
      output: CreatePipeResponse;
    };
    sdk: {
      input: CreatePipeCommandInput;
      output: CreatePipeCommandOutput;
    };
  };
}
