// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

import { GetBucketReplicationRequest, GetBucketReplicationResult } from "../models/models_0";
import { de_GetBucketReplicationCommand, se_GetBucketReplicationCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBucketReplicationCommand}.
 */
export interface GetBucketReplicationCommandInput extends GetBucketReplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketReplicationCommand}.
 */
export interface GetBucketReplicationCommandOutput extends GetBucketReplicationResult, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This operation gets an Amazon S3 on Outposts bucket's replication configuration. To get an
 *             S3 bucket's replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html">GetBucketReplication</a>
 *             in the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Returns the replication configuration of an S3 on Outposts bucket. For more information
 *          about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
 *             <i>Amazon S3 User Guide</i>. For information about S3 replication on Outposts
 *          configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for
 *             a replication configuration to all S3 on Outposts systems. Therefore, the replication
 *             configuration that's returned by a <code>GET</code> request soon after a
 *                <code>PUT</code> or <code>DELETE</code> request might return a more recent result
 *             than what's on the Outpost. If an Outpost is offline, the delay in updating the
 *             replication configuration on that Outpost can be significant.</p>
 *          </note>
 *          <p>This action requires permissions for the
 *             <code>s3-outposts:GetReplicationConfiguration</code> action. The Outposts bucket owner
 *          has this permission by default and can grant it to others. For more information about
 *          permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with
 *             S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to
 *             S3 on Outposts bucket</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html#API_control_GetBucketReplication_Examples">Examples</a> section.</p>
 *          <p>If you include the <code>Filter</code> element in a replication configuration, you must
 *          also include the <code>DeleteMarkerReplication</code>, <code>Status</code>, and
 *             <code>Priority</code> elements. The response also returns those elements.</p>
 *          <p>For information about S3 on Outposts replication failure reasons, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-eventbridge.html#outposts-replication-failure-codes">Replication failure reasons</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following operations are related to <code>GetBucketReplication</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html">PutBucketReplication</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html">DeleteBucketReplication</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetBucketReplicationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetBucketReplicationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetBucketReplicationRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 * };
 * const command = new GetBucketReplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketReplicationResult
 * //   ReplicationConfiguration: { // ReplicationConfiguration
 * //     Role: "STRING_VALUE", // required
 * //     Rules: [ // ReplicationRules // required
 * //       { // ReplicationRule
 * //         ID: "STRING_VALUE",
 * //         Priority: Number("int"),
 * //         Prefix: "STRING_VALUE",
 * //         Filter: { // ReplicationRuleFilter
 * //           Prefix: "STRING_VALUE",
 * //           Tag: { // S3Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //           And: { // ReplicationRuleAndOperator
 * //             Prefix: "STRING_VALUE",
 * //             Tags: [ // S3TagSet
 * //               {
 * //                 Key: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Status: "Enabled" || "Disabled", // required
 * //         SourceSelectionCriteria: { // SourceSelectionCriteria
 * //           SseKmsEncryptedObjects: { // SseKmsEncryptedObjects
 * //             Status: "Enabled" || "Disabled", // required
 * //           },
 * //           ReplicaModifications: { // ReplicaModifications
 * //             Status: "Enabled" || "Disabled", // required
 * //           },
 * //         },
 * //         ExistingObjectReplication: { // ExistingObjectReplication
 * //           Status: "Enabled" || "Disabled", // required
 * //         },
 * //         Destination: { // Destination
 * //           Account: "STRING_VALUE",
 * //           Bucket: "STRING_VALUE", // required
 * //           ReplicationTime: { // ReplicationTime
 * //             Status: "Enabled" || "Disabled", // required
 * //             Time: { // ReplicationTimeValue
 * //               Minutes: Number("int"),
 * //             },
 * //           },
 * //           AccessControlTranslation: { // AccessControlTranslation
 * //             Owner: "Destination", // required
 * //           },
 * //           EncryptionConfiguration: { // EncryptionConfiguration
 * //             ReplicaKmsKeyID: "STRING_VALUE",
 * //           },
 * //           Metrics: { // Metrics
 * //             Status: "Enabled" || "Disabled", // required
 * //             EventThreshold: {
 * //               Minutes: Number("int"),
 * //             },
 * //           },
 * //           StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR",
 * //         },
 * //         DeleteMarkerReplication: { // DeleteMarkerReplication
 * //           Status: "Enabled" || "Disabled", // required
 * //         },
 * //         Bucket: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketReplicationCommandInput - {@link GetBucketReplicationCommandInput}
 * @returns {@link GetBucketReplicationCommandOutput}
 * @see {@link GetBucketReplicationCommandInput} for command's `input` shape.
 * @see {@link GetBucketReplicationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class GetBucketReplicationCommand extends $Command<
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      Bucket: { type: "contextParams", name: "Bucket" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetBucketReplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketReplicationCommandInput, GetBucketReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketReplicationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetBucketReplicationCommand";
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
  private serialize(input: GetBucketReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBucketReplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketReplicationCommandOutput> {
    return de_GetBucketReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
