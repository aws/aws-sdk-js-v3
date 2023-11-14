// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
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

import { PutBucketTaggingRequest } from "../models/models_0";
import { de_PutBucketTaggingCommand, se_PutBucketTaggingCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutBucketTaggingCommand}.
 */
export interface PutBucketTaggingCommandInput extends PutBucketTaggingRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketTaggingCommand}.
 */
export interface PutBucketTaggingCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Sets the tags for a bucket.</p>
 *          <p>Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this,
 *          sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost
 *          of combined resources, organize your billing information according to resources with the
 *          same tag key values. For example, you can tag several resources with a specific application
 *          name, and then organize your billing information to see the total cost of that application
 *          across several services. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Cost Allocation and
 *             Tagging</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CostAllocTagging.html">Using Cost Allocation in Amazon S3
 *             Bucket Tags</a>.</p>
 *          <note>
 *             <p> When this operation sets the tags for a bucket, it will overwrite any current tags
 *             the bucket already has. You cannot use this operation to add tags to an existing list of
 *             tags.</p>
 *          </note>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:PutBucketTagging</code> action. The bucket owner has this permission by default
 *          and can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to Your Amazon S3 Resources</a>.</p>
 *          <p>
 *             <code>PutBucketTagging</code> has the following special errors. For more Amazon S3 errors
 *          see, <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error
 *             Responses</a>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>InvalidTag</code> - The tag provided was not a valid tag. This error
 *                can occur if the tag did not pass input validation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CostAllocTagging.html">Using
 *                   Cost Allocation in Amazon S3 Bucket Tags</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MalformedXML</code> - The XML provided does not match the
 *                schema.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>OperationAborted</code> - A conflicting conditional action is
 *                currently in progress against this resource. Please try again.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>InternalError</code> - The service was unable to apply the provided
 *                tag to the bucket.</p>
 *             </li>
 *          </ul>
 *          <p>The following operations are related to <code>PutBucketTagging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html">GetBucketTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html">DeleteBucketTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // PutBucketTaggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 *   Tagging: { // Tagging
 *     TagSet: [ // TagSet // required
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketTaggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketTaggingCommandInput - {@link PutBucketTaggingCommandInput}
 * @returns {@link PutBucketTaggingCommandOutput}
 * @see {@link PutBucketTaggingCommandInput} for command's `input` shape.
 * @see {@link PutBucketTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example Set tags on a bucket
 * ```javascript
 * // The following example sets tags on a bucket. Any existing tags are replaced.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Tagging": {
 *     "TagSet": [
 *       {
 *         "Key": "Key1",
 *         "Value": "Value1"
 *       },
 *       {
 *         "Key": "Key2",
 *         "Value": "Value2"
 *       }
 *     ]
 *   }
 * };
 * const command = new PutBucketTaggingCommand(input);
 * await client.send(command);
 * // example id: set-tags-on-a-bucket-1482346269066
 * ```
 *
 */
export class PutBucketTaggingCommand extends $Command<
  PutBucketTaggingCommandInput,
  PutBucketTaggingCommandOutput,
  S3ClientResolvedConfig
> {
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
  constructor(readonly input: PutBucketTaggingCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBucketTaggingCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(
      getFlexibleChecksumsPlugin(configuration, {
        input: this.input,
        requestAlgorithmMember: "ChecksumAlgorithm",
        requestChecksumRequired: true,
      })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutBucketTaggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "PutBucketTagging",
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
  private serialize(input: PutBucketTaggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutBucketTaggingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBucketTaggingCommandOutput> {
    return de_PutBucketTaggingCommand(output, context);
  }
}
