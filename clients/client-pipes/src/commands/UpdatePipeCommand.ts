// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { UpdatePipeRequest, UpdatePipeRequestFilterSensitiveLog, UpdatePipeResponse } from "../models/models_0";
import { PipesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PipesClient";
import {
  deserializeAws_restJson1UpdatePipeCommand,
  serializeAws_restJson1UpdatePipeCommand,
} from "../protocols/Aws_restJson1";

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
 * const input = {
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DesiredState: "STRING_VALUE",
 *   SourceParameters: {
 *     FilterCriteria: {
 *       Filters: [
 *         {
 *           Pattern: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     KinesisStreamParameters: {
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
 *     DynamoDBStreamParameters: {
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
 *     SqsQueueParameters: {
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *     },
 *     ActiveMQBrokerParameters: {
 *       Credentials: { // Union: only one key present
 *         BasicAuth: "STRING_VALUE",
 *       },
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *     },
 *     RabbitMQBrokerParameters: {
 *       Credentials: { // Union: only one key present
 *         BasicAuth: "STRING_VALUE",
 *       },
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *     },
 *     ManagedStreamingKafkaParameters: {
 *       BatchSize: Number("int"),
 *       Credentials: { // Union: only one key present
 *         SaslScram512Auth: "STRING_VALUE",
 *         ClientCertificateTlsAuth: "STRING_VALUE",
 *       },
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *     },
 *     SelfManagedKafkaParameters: {
 *       BatchSize: Number("int"),
 *       MaximumBatchingWindowInSeconds: Number("int"),
 *       Credentials: { // Union: only one key present
 *         BasicAuth: "STRING_VALUE",
 *         SaslScram512Auth: "STRING_VALUE",
 *         SaslScram256Auth: "STRING_VALUE",
 *         ClientCertificateTlsAuth: "STRING_VALUE",
 *       },
 *       ServerRootCaCertificate: "STRING_VALUE",
 *       Vpc: {
 *         Subnets: [
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroup: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   Enrichment: "STRING_VALUE",
 *   EnrichmentParameters: {
 *     InputTemplate: "STRING_VALUE",
 *     HttpParameters: {
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
 *   },
 *   Target: "STRING_VALUE",
 *   TargetParameters: {
 *     InputTemplate: "STRING_VALUE",
 *     LambdaFunctionParameters: {
 *       InvocationType: "STRING_VALUE",
 *     },
 *     StepFunctionStateMachineParameters: {
 *       InvocationType: "STRING_VALUE",
 *     },
 *     KinesisStreamParameters: {
 *       PartitionKey: "STRING_VALUE", // required
 *     },
 *     EcsTaskParameters: {
 *       TaskDefinitionArn: "STRING_VALUE", // required
 *       TaskCount: Number("int"),
 *       LaunchType: "STRING_VALUE",
 *       NetworkConfiguration: {
 *         awsvpcConfiguration: {
 *           Subnets: [ // required
 *             "STRING_VALUE",
 *           ],
 *           SecurityGroups: [
 *             "STRING_VALUE",
 *           ],
 *           AssignPublicIp: "STRING_VALUE",
 *         },
 *       },
 *       PlatformVersion: "STRING_VALUE",
 *       Group: "STRING_VALUE",
 *       CapacityProviderStrategy: [
 *         {
 *           capacityProvider: "STRING_VALUE", // required
 *           weight: Number("int"),
 *           base: Number("int"),
 *         },
 *       ],
 *       EnableECSManagedTags: true || false,
 *       EnableExecuteCommand: true || false,
 *       PlacementConstraints: [
 *         {
 *           type: "STRING_VALUE",
 *           expression: "STRING_VALUE",
 *         },
 *       ],
 *       PlacementStrategy: [
 *         {
 *           type: "STRING_VALUE",
 *           field: "STRING_VALUE",
 *         },
 *       ],
 *       PropagateTags: "STRING_VALUE",
 *       ReferenceId: "STRING_VALUE",
 *       Overrides: {
 *         ContainerOverrides: [
 *           {
 *             Command: [
 *               "STRING_VALUE",
 *             ],
 *             Cpu: Number("int"),
 *             Environment: [
 *               {
 *                 name: "STRING_VALUE",
 *                 value: "STRING_VALUE",
 *               },
 *             ],
 *             EnvironmentFiles: [
 *               {
 *                 type: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *             ],
 *             Memory: Number("int"),
 *             MemoryReservation: Number("int"),
 *             Name: "STRING_VALUE",
 *             ResourceRequirements: [
 *               {
 *                 type: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         ],
 *         Cpu: "STRING_VALUE",
 *         EphemeralStorage: {
 *           sizeInGiB: Number("int"), // required
 *         },
 *         ExecutionRoleArn: "STRING_VALUE",
 *         InferenceAcceleratorOverrides: [
 *           {
 *             deviceName: "STRING_VALUE",
 *             deviceType: "STRING_VALUE",
 *           },
 *         ],
 *         Memory: "STRING_VALUE",
 *         TaskRoleArn: "STRING_VALUE",
 *       },
 *       Tags: [
 *         {
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     BatchJobParameters: {
 *       JobDefinition: "STRING_VALUE", // required
 *       JobName: "STRING_VALUE", // required
 *       ArrayProperties: {
 *         Size: Number("int"),
 *       },
 *       RetryStrategy: {
 *         Attempts: Number("int"),
 *       },
 *       ContainerOverrides: {
 *         Command: [
 *           "STRING_VALUE",
 *         ],
 *         Environment: [
 *           {
 *             Name: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         InstanceType: "STRING_VALUE",
 *         ResourceRequirements: [
 *           {
 *             Type: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       DependsOn: [
 *         {
 *           JobId: "STRING_VALUE",
 *           Type: "STRING_VALUE",
 *         },
 *       ],
 *       Parameters: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     SqsQueueParameters: {
 *       MessageGroupId: "STRING_VALUE",
 *       MessageDeduplicationId: "STRING_VALUE",
 *     },
 *     HttpParameters: {
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
 *     RedshiftDataParameters: {
 *       SecretManagerArn: "STRING_VALUE",
 *       Database: "STRING_VALUE", // required
 *       DbUser: "STRING_VALUE",
 *       StatementName: "STRING_VALUE",
 *       WithEvent: true || false,
 *       Sqls: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     SageMakerPipelineParameters: {
 *       PipelineParameterList: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     EventBridgeEventBusParameters: {
 *       EndpointId: "STRING_VALUE",
 *       DetailType: "STRING_VALUE",
 *       Source: "STRING_VALUE",
 *       Resources: [
 *         "STRING_VALUE",
 *       ],
 *       Time: "STRING_VALUE",
 *     },
 *     CloudWatchLogsParameters: {
 *       LogStreamName: "STRING_VALUE",
 *       Timestamp: "STRING_VALUE",
 *     },
 *   },
 *   RoleArn: "STRING_VALUE", // required
 * };
 * const command = new UpdatePipeCommand(input);
 * const response = await client.send(command);
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
    return serializeAws_restJson1UpdatePipeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePipeCommandOutput> {
    return deserializeAws_restJson1UpdatePipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
