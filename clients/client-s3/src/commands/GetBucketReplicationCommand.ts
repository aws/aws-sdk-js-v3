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

import { GetBucketReplicationOutput, GetBucketReplicationRequest } from "../models/models_0";
import { de_GetBucketReplicationCommand, se_GetBucketReplicationCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

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
export interface GetBucketReplicationCommandOutput extends GetBucketReplicationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the replication configuration of a bucket.</p>
 *          <note>
 *             <p> It can take a while to propagate the put or delete a replication configuration to
 *             all Amazon S3 systems. Therefore, a get request soon after put or delete can return a wrong
 *             result. </p>
 *          </note>
 *          <p> For information about replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>This action requires permissions for the <code>s3:GetReplicationConfiguration</code>
 *          action. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User
 *             Policies</a>.</p>
 *          <p>If you include the <code>Filter</code> element in a replication configuration, you must
 *          also include the <code>DeleteMarkerReplication</code> and <code>Priority</code> elements.
 *          The response also returns those elements.</p>
 *          <p>For information about <code>GetBucketReplication</code> errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ReplicationErrorCodeList">List of
 *             replication-related error codes</a>
 *          </p>
 *          <p>The following operations are related to <code>GetBucketReplication</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html">PutBucketReplication</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html">DeleteBucketReplication</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketReplicationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketReplicationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketReplicationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketReplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketReplicationOutput
 * //   ReplicationConfiguration: { // ReplicationConfiguration
 * //     Role: "STRING_VALUE", // required
 * //     Rules: [ // ReplicationRules // required
 * //       { // ReplicationRule
 * //         ID: "STRING_VALUE",
 * //         Priority: Number("int"),
 * //         Prefix: "STRING_VALUE",
 * //         Filter: { // ReplicationRuleFilter Union: only one key present
 * //           Prefix: "STRING_VALUE",
 * //           Tag: { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //           And: { // ReplicationRuleAndOperator
 * //             Prefix: "STRING_VALUE",
 * //             Tags: [ // TagSet
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
 * //           Bucket: "STRING_VALUE", // required
 * //           Account: "STRING_VALUE",
 * //           StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW",
 * //           AccessControlTranslation: { // AccessControlTranslation
 * //             Owner: "Destination", // required
 * //           },
 * //           EncryptionConfiguration: { // EncryptionConfiguration
 * //             ReplicaKmsKeyID: "STRING_VALUE",
 * //           },
 * //           ReplicationTime: { // ReplicationTime
 * //             Status: "Enabled" || "Disabled", // required
 * //             Time: { // ReplicationTimeValue
 * //               Minutes: Number("int"),
 * //             },
 * //           },
 * //           Metrics: { // Metrics
 * //             Status: "Enabled" || "Disabled", // required
 * //             EventThreshold: {
 * //               Minutes: Number("int"),
 * //             },
 * //           },
 * //         },
 * //         DeleteMarkerReplication: { // DeleteMarkerReplication
 * //           Status: "Enabled" || "Disabled",
 * //         },
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
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To get replication configuration set on a bucket
 * ```javascript
 * // The following example returns replication configuration set on a bucket.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new GetBucketReplicationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationConfiguration": {
 *     "Role": "arn:aws:iam::acct-id:role/example-role",
 *     "Rules": [
 *       {
 *         "Destination": {
 *           "Bucket": "arn:aws:s3:::destination-bucket"
 *         },
 *         "ID": "MWIwNTkwZmItMTE3MS00ZTc3LWJkZDEtNzRmODQwYzc1OTQy",
 *         "Prefix": "Tax",
 *         "Status": "Enabled"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-get-replication-configuration-set-on-a-bucket-1481593597175
 * ```
 *
 */
export class GetBucketReplicationCommand extends $Command<
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
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
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketReplicationCommandInput, GetBucketReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketReplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetBucketReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "GetBucketReplication",
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
