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

import { PutBucketNotificationConfigurationRequest } from "../models/models_0";
import {
  de_PutBucketNotificationConfigurationCommand,
  se_PutBucketNotificationConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link PutBucketNotificationConfigurationCommand}.
 */
export interface PutBucketNotificationConfigurationCommandInput extends PutBucketNotificationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketNotificationConfigurationCommand}.
 */
export interface PutBucketNotificationConfigurationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Enables notifications of specified events for a bucket. For more information about event
 *          notifications, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event
 *          Notifications</a>.</p>
 *          <p>Using this API, you can replace an existing notification configuration. The
 *          configuration is an XML file that defines the event types that you want Amazon S3 to publish and
 *          the destination where you want Amazon S3 to publish an event notification when it detects an
 *          event of the specified type.</p>
 *          <p>By default, your bucket has no event notifications configured. That is, the notification
 *          configuration will be an empty <code>NotificationConfiguration</code>.</p>
 *          <p>
 *             <code><NotificationConfiguration></code>
 *          </p>
 *          <p>
 *             <code></NotificationConfiguration></code>
 *          </p>
 *          <p>This action replaces the existing notification configuration with the configuration you
 *          include in the request body.</p>
 *          <p>After Amazon S3 receives this request, it first verifies that any Amazon Simple Notification
 *          Service (Amazon SNS) or Amazon Simple Queue Service (Amazon SQS) destination exists, and
 *          that the bucket owner has permission to publish to it by sending a test notification. In
 *          the case of Lambda destinations, Amazon S3 verifies that the Lambda function permissions
 *          grant Amazon S3 permission to invoke the function from the Amazon S3 bucket. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Notifications for Amazon S3 Events</a>.</p>
 *          <p>You can disable notifications by adding the empty NotificationConfiguration
 *          element.</p>
 *          <p>For more information about the number of event notification configurations that you can
 *          create per bucket, see <a href="https://docs.aws.amazon.com/general/latest/gr/s3.html#limits_s3">Amazon S3 service quotas</a> in <i>Amazon Web Services
 *             General Reference</i>.</p>
 *          <p>By default, only the bucket owner can configure notifications on a bucket. However,
 *          bucket owners can use a bucket policy to grant permission to other users to set this
 *          configuration with <code>s3:PutBucketNotification</code> permission.</p>
 *          <note>
 *             <p>The PUT notification is an atomic operation. For example, suppose your notification
 *             configuration includes SNS topic, SQS queue, and Lambda function configurations. When
 *             you send a PUT request with this configuration, Amazon S3 sends test messages to your SNS
 *             topic. If the message fails, the entire PUT action will fail, and Amazon S3 will not add the
 *             configuration to your bucket.</p>
 *          </note>
 *          <p>If the configuration in the request body includes only one
 *             <code>TopicConfiguration</code> specifying only the
 *             <code>s3:ReducedRedundancyLostObject</code> event type, the response will also include
 *          the <code>x-amz-sns-test-message-id</code> header containing the message ID of the test
 *          notification sent to the topic.</p>
 *          <p>The following action is related to
 *          <code>PutBucketNotificationConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotificationConfiguration.html">GetBucketNotificationConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketNotificationConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketNotificationConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // PutBucketNotificationConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   NotificationConfiguration: { // NotificationConfiguration
 *     TopicConfigurations: [ // TopicConfigurationList
 *       { // TopicConfiguration
 *         Id: "STRING_VALUE",
 *         TopicArn: "STRING_VALUE", // required
 *         Events: [ // EventList // required
 *           "s3:ReducedRedundancyLostObject" || "s3:ObjectCreated:*" || "s3:ObjectCreated:Put" || "s3:ObjectCreated:Post" || "s3:ObjectCreated:Copy" || "s3:ObjectCreated:CompleteMultipartUpload" || "s3:ObjectRemoved:*" || "s3:ObjectRemoved:Delete" || "s3:ObjectRemoved:DeleteMarkerCreated" || "s3:ObjectRestore:*" || "s3:ObjectRestore:Post" || "s3:ObjectRestore:Completed" || "s3:Replication:*" || "s3:Replication:OperationFailedReplication" || "s3:Replication:OperationNotTracked" || "s3:Replication:OperationMissedThreshold" || "s3:Replication:OperationReplicatedAfterThreshold" || "s3:ObjectRestore:Delete" || "s3:LifecycleTransition" || "s3:IntelligentTiering" || "s3:ObjectAcl:Put" || "s3:LifecycleExpiration:*" || "s3:LifecycleExpiration:Delete" || "s3:LifecycleExpiration:DeleteMarkerCreated" || "s3:ObjectTagging:*" || "s3:ObjectTagging:Put" || "s3:ObjectTagging:Delete",
 *         ],
 *         Filter: { // NotificationConfigurationFilter
 *           Key: { // S3KeyFilter
 *             FilterRules: [ // FilterRuleList
 *               { // FilterRule
 *                 Name: "prefix" || "suffix",
 *                 Value: "STRING_VALUE",
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     ],
 *     QueueConfigurations: [ // QueueConfigurationList
 *       { // QueueConfiguration
 *         Id: "STRING_VALUE",
 *         QueueArn: "STRING_VALUE", // required
 *         Events: [ // required
 *           "s3:ReducedRedundancyLostObject" || "s3:ObjectCreated:*" || "s3:ObjectCreated:Put" || "s3:ObjectCreated:Post" || "s3:ObjectCreated:Copy" || "s3:ObjectCreated:CompleteMultipartUpload" || "s3:ObjectRemoved:*" || "s3:ObjectRemoved:Delete" || "s3:ObjectRemoved:DeleteMarkerCreated" || "s3:ObjectRestore:*" || "s3:ObjectRestore:Post" || "s3:ObjectRestore:Completed" || "s3:Replication:*" || "s3:Replication:OperationFailedReplication" || "s3:Replication:OperationNotTracked" || "s3:Replication:OperationMissedThreshold" || "s3:Replication:OperationReplicatedAfterThreshold" || "s3:ObjectRestore:Delete" || "s3:LifecycleTransition" || "s3:IntelligentTiering" || "s3:ObjectAcl:Put" || "s3:LifecycleExpiration:*" || "s3:LifecycleExpiration:Delete" || "s3:LifecycleExpiration:DeleteMarkerCreated" || "s3:ObjectTagging:*" || "s3:ObjectTagging:Put" || "s3:ObjectTagging:Delete",
 *         ],
 *         Filter: {
 *           Key: {
 *             FilterRules: [
 *               {
 *                 Name: "prefix" || "suffix",
 *                 Value: "STRING_VALUE",
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     ],
 *     LambdaFunctionConfigurations: [ // LambdaFunctionConfigurationList
 *       { // LambdaFunctionConfiguration
 *         Id: "STRING_VALUE",
 *         LambdaFunctionArn: "STRING_VALUE", // required
 *         Events: [ // required
 *           "s3:ReducedRedundancyLostObject" || "s3:ObjectCreated:*" || "s3:ObjectCreated:Put" || "s3:ObjectCreated:Post" || "s3:ObjectCreated:Copy" || "s3:ObjectCreated:CompleteMultipartUpload" || "s3:ObjectRemoved:*" || "s3:ObjectRemoved:Delete" || "s3:ObjectRemoved:DeleteMarkerCreated" || "s3:ObjectRestore:*" || "s3:ObjectRestore:Post" || "s3:ObjectRestore:Completed" || "s3:Replication:*" || "s3:Replication:OperationFailedReplication" || "s3:Replication:OperationNotTracked" || "s3:Replication:OperationMissedThreshold" || "s3:Replication:OperationReplicatedAfterThreshold" || "s3:ObjectRestore:Delete" || "s3:LifecycleTransition" || "s3:IntelligentTiering" || "s3:ObjectAcl:Put" || "s3:LifecycleExpiration:*" || "s3:LifecycleExpiration:Delete" || "s3:LifecycleExpiration:DeleteMarkerCreated" || "s3:ObjectTagging:*" || "s3:ObjectTagging:Put" || "s3:ObjectTagging:Delete",
 *         ],
 *         Filter: {
 *           Key: {
 *             FilterRules: [
 *               {
 *                 Name: "prefix" || "suffix",
 *                 Value: "STRING_VALUE",
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     ],
 *     EventBridgeConfiguration: {},
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   SkipDestinationValidation: true || false,
 * };
 * const command = new PutBucketNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketNotificationConfigurationCommandInput - {@link PutBucketNotificationConfigurationCommandInput}
 * @returns {@link PutBucketNotificationConfigurationCommandOutput}
 * @see {@link PutBucketNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBucketNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example Set notification configuration for a bucket
 * ```javascript
 * // The following example sets notification configuration on a bucket to publish the object created events to an SNS topic.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "NotificationConfiguration": {
 *     "TopicConfigurations": [
 *       {
 *         "Events": [
 *           "s3:ObjectCreated:*"
 *         ],
 *         "TopicArn": "arn:aws:sns:us-west-2:123456789012:s3-notification-topic"
 *       }
 *     ]
 *   }
 * };
 * const command = new PutBucketNotificationConfigurationCommand(input);
 * await client.send(command);
 * // example id: set-notification-configuration-for-a-bucket-1482270296426
 * ```
 *
 */
export class PutBucketNotificationConfigurationCommand extends $Command<
  PutBucketNotificationConfigurationCommandInput,
  PutBucketNotificationConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      Bucket: { type: "contextParams", name: "Bucket" },
      ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
      Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PutBucketNotificationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketNotificationConfigurationCommandInput, PutBucketNotificationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBucketNotificationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutBucketNotificationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: PutBucketNotificationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutBucketNotificationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutBucketNotificationConfigurationCommandOutput> {
    return de_PutBucketNotificationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
