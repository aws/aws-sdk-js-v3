// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { UpdatePipeRequest, UpdatePipeRequestFilterSensitiveLog, UpdatePipeResponse } from "../models/models_0";
import { PipesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PipesClient";
import { de_UpdatePipeCommand, se_UpdatePipeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePipeCommand}.
 */
export interface UpdatePipeCommandInput extends UpdatePipeRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePipeCommand}.
 */
export interface UpdatePipeCommandOutput extends UpdatePipeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged.
 *          The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or
 *          <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that
 *          if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p>
 *          <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">
 *          Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PipesClient, UpdatePipeCommand } from "@aws-sdk/client-pipes"; // ES Modules import
 * // const { PipesClient, UpdatePipeCommand } = require("@aws-sdk/client-pipes"); // CommonJS import
 * const client = new PipesClient(config);
 * const input = { // UpdatePipeRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DesiredState: "STRING_VALUE",
 *   SourceParameters: { // UpdatePipeSourceParameters
 *     FilterCriteria: { // FilterCriteria
 *       Filters: [ // FilterList
 *         { // Filter
 *           Pattern: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     KinesisStreamParameters: { // UpdatePipeSourceKinesisStreamParameters
 *       BatchSize: Number("int"),
 *       DeadLetterConfig: { // DeadLetterConfig
 *         Arn: "STRING_VALUE",
 *       },
 *       OnPartialBatchItemFailure: "STRING_VALUE",
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *       MaximumRecordAgeInSeconds: Number("int"),
 *       MaximumRetryAttempts: Number("int"),
 *       ParallelizationFactor: Number("int"),
 *     },
 *     DynamoDBStreamParameters: { // UpdatePipeSourceDynamoDBStreamParameters
 *       BatchSize: Number("int"),
 *       DeadLetterConfig: {
 *         Arn: "STRING_VALUE",
 *       },
 *       OnPartialBatchItemFailure: "STRING_VALUE",
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *       MaximumRecordAgeInSeconds: Number("int"),
 *       MaximumRetryAttempts: Number("int"),
 *       ParallelizationFactor: Number("int"),
 *     },
 *     SqsQueueParameters: { // UpdatePipeSourceSqsQueueParameters
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *     },
 *     ActiveMQBrokerParameters: { // UpdatePipeSourceActiveMQBrokerParameters
 *       Credentials: { // MQBrokerAccessCredentials Union: only one key present
 *         BasicAuth: "STRING_VALUE",
 *       },
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *     },
 *     RabbitMQBrokerParameters: { // UpdatePipeSourceRabbitMQBrokerParameters
 *       Credentials: {//  Union: only one key present
 *         BasicAuth: "STRING_VALUE",
 *       },
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *     },
 *     ManagedStreamingKafkaParameters: { // UpdatePipeSourceManagedStreamingKafkaParameters
 *       BatchSize: Number("int"),
 *       Credentials: { // MSKAccessCredentials Union: only one key present
 *         SaslScram512Auth: "STRING_VALUE",
 *         ClientCertificateTlsAuth: "STRING_VALUE",
 *       },
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *     },
 *     SelfManagedKafkaParameters: { // UpdatePipeSourceSelfManagedKafkaParameters
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
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
 *   Target: "STRING_VALUE",
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
 *   },
 *   RoleArn: "STRING_VALUE", // required
 * };
 * const command = new UpdatePipeCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePipeResponse
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
 * @param UpdatePipeCommandInput - {@link UpdatePipeCommandInput}
 * @returns {@link UpdatePipeCommandOutput}
 * @see {@link UpdatePipeCommandInput} for command's `input` shape.
 * @see {@link UpdatePipeCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An action was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that an error has occurred while performing a validate operation.</p>
 *
 * @throws {@link PipesServiceException}
 * <p>Base exception class for all service exceptions from Pipes service.</p>
 *
 */
export class UpdatePipeCommand extends $Command<
  UpdatePipeCommandInput,
  UpdatePipeCommandOutput,
  PipesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdatePipeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PipesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePipeCommandInput, UpdatePipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdatePipeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PipesClient";
    const commandName = "UpdatePipeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePipeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pipes",
        operation: "UpdatePipe",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdatePipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePipeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePipeCommandOutput> {
    return de_UpdatePipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
