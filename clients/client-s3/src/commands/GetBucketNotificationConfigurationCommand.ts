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
} from "@smithy/types";

import { GetBucketNotificationConfigurationRequest, NotificationConfiguration } from "../models/models_0";
import {
  de_GetBucketNotificationConfigurationCommand,
  se_GetBucketNotificationConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBucketNotificationConfigurationCommand}.
 */
export interface GetBucketNotificationConfigurationCommandInput extends GetBucketNotificationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketNotificationConfigurationCommand}.
 */
export interface GetBucketNotificationConfigurationCommandOutput extends NotificationConfiguration, __MetadataBearer {}

/**
 * @public
 * <p>Returns the notification configuration of a bucket.</p>
 *          <p>If notifications are not enabled on the bucket, the action returns an empty
 *             <code>NotificationConfiguration</code> element.</p>
 *          <p>By default, you must be the bucket owner to read the notification configuration of a
 *          bucket. However, the bucket owner can use a bucket policy to grant permission to other
 *          users to read this configuration with the <code>s3:GetBucketNotification</code>
 *          permission.</p>
 *          <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p>
 *          <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name.
 * If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned.
 * For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of
 *             Error Codes</a>.</p>
 *          <p>For more information about setting and reading the notification configuration on a
 *          bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Setting Up Notification of Bucket Events</a>. For more information about bucket
 *          policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies</a>.</p>
 *          <p>The following action is related to <code>GetBucketNotification</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotification.html">PutBucketNotification</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketNotificationConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketNotificationConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketNotificationConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // NotificationConfiguration
 * //   TopicConfigurations: [ // TopicConfigurationList
 * //     { // TopicConfiguration
 * //       Id: "STRING_VALUE",
 * //       TopicArn: "STRING_VALUE", // required
 * //       Events: [ // EventList // required
 * //         "s3:ReducedRedundancyLostObject" || "s3:ObjectCreated:*" || "s3:ObjectCreated:Put" || "s3:ObjectCreated:Post" || "s3:ObjectCreated:Copy" || "s3:ObjectCreated:CompleteMultipartUpload" || "s3:ObjectRemoved:*" || "s3:ObjectRemoved:Delete" || "s3:ObjectRemoved:DeleteMarkerCreated" || "s3:ObjectRestore:*" || "s3:ObjectRestore:Post" || "s3:ObjectRestore:Completed" || "s3:Replication:*" || "s3:Replication:OperationFailedReplication" || "s3:Replication:OperationNotTracked" || "s3:Replication:OperationMissedThreshold" || "s3:Replication:OperationReplicatedAfterThreshold" || "s3:ObjectRestore:Delete" || "s3:LifecycleTransition" || "s3:IntelligentTiering" || "s3:ObjectAcl:Put" || "s3:LifecycleExpiration:*" || "s3:LifecycleExpiration:Delete" || "s3:LifecycleExpiration:DeleteMarkerCreated" || "s3:ObjectTagging:*" || "s3:ObjectTagging:Put" || "s3:ObjectTagging:Delete",
 * //       ],
 * //       Filter: { // NotificationConfigurationFilter
 * //         Key: { // S3KeyFilter
 * //           FilterRules: [ // FilterRuleList
 * //             { // FilterRule
 * //               Name: "prefix" || "suffix",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   QueueConfigurations: [ // QueueConfigurationList
 * //     { // QueueConfiguration
 * //       Id: "STRING_VALUE",
 * //       QueueArn: "STRING_VALUE", // required
 * //       Events: [ // required
 * //         "s3:ReducedRedundancyLostObject" || "s3:ObjectCreated:*" || "s3:ObjectCreated:Put" || "s3:ObjectCreated:Post" || "s3:ObjectCreated:Copy" || "s3:ObjectCreated:CompleteMultipartUpload" || "s3:ObjectRemoved:*" || "s3:ObjectRemoved:Delete" || "s3:ObjectRemoved:DeleteMarkerCreated" || "s3:ObjectRestore:*" || "s3:ObjectRestore:Post" || "s3:ObjectRestore:Completed" || "s3:Replication:*" || "s3:Replication:OperationFailedReplication" || "s3:Replication:OperationNotTracked" || "s3:Replication:OperationMissedThreshold" || "s3:Replication:OperationReplicatedAfterThreshold" || "s3:ObjectRestore:Delete" || "s3:LifecycleTransition" || "s3:IntelligentTiering" || "s3:ObjectAcl:Put" || "s3:LifecycleExpiration:*" || "s3:LifecycleExpiration:Delete" || "s3:LifecycleExpiration:DeleteMarkerCreated" || "s3:ObjectTagging:*" || "s3:ObjectTagging:Put" || "s3:ObjectTagging:Delete",
 * //       ],
 * //       Filter: {
 * //         Key: {
 * //           FilterRules: [
 * //             {
 * //               Name: "prefix" || "suffix",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   LambdaFunctionConfigurations: [ // LambdaFunctionConfigurationList
 * //     { // LambdaFunctionConfiguration
 * //       Id: "STRING_VALUE",
 * //       LambdaFunctionArn: "STRING_VALUE", // required
 * //       Events: [ // required
 * //         "s3:ReducedRedundancyLostObject" || "s3:ObjectCreated:*" || "s3:ObjectCreated:Put" || "s3:ObjectCreated:Post" || "s3:ObjectCreated:Copy" || "s3:ObjectCreated:CompleteMultipartUpload" || "s3:ObjectRemoved:*" || "s3:ObjectRemoved:Delete" || "s3:ObjectRemoved:DeleteMarkerCreated" || "s3:ObjectRestore:*" || "s3:ObjectRestore:Post" || "s3:ObjectRestore:Completed" || "s3:Replication:*" || "s3:Replication:OperationFailedReplication" || "s3:Replication:OperationNotTracked" || "s3:Replication:OperationMissedThreshold" || "s3:Replication:OperationReplicatedAfterThreshold" || "s3:ObjectRestore:Delete" || "s3:LifecycleTransition" || "s3:IntelligentTiering" || "s3:ObjectAcl:Put" || "s3:LifecycleExpiration:*" || "s3:LifecycleExpiration:Delete" || "s3:LifecycleExpiration:DeleteMarkerCreated" || "s3:ObjectTagging:*" || "s3:ObjectTagging:Put" || "s3:ObjectTagging:Delete",
 * //       ],
 * //       Filter: {
 * //         Key: {
 * //           FilterRules: [
 * //             {
 * //               Name: "prefix" || "suffix",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   EventBridgeConfiguration: {},
 * // };
 *
 * ```
 *
 * @param GetBucketNotificationConfigurationCommandInput - {@link GetBucketNotificationConfigurationCommandInput}
 * @returns {@link GetBucketNotificationConfigurationCommandOutput}
 * @see {@link GetBucketNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class GetBucketNotificationConfigurationCommand extends $Command<
  GetBucketNotificationConfigurationCommandInput,
  GetBucketNotificationConfigurationCommandOutput,
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
  constructor(readonly input: GetBucketNotificationConfigurationCommandInput) {
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
  ): Handler<GetBucketNotificationConfigurationCommandInput, GetBucketNotificationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketNotificationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetBucketNotificationConfigurationCommand";
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
    input: GetBucketNotificationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetBucketNotificationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBucketNotificationConfigurationCommandOutput> {
    return de_GetBucketNotificationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
