import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketTaggingRequest } from "../models/models_0";
import {
  deserializeAws_restXmlPutBucketTaggingCommand,
  serializeAws_restXmlPutBucketTaggingCommand,
} from "../protocols/Aws_restXml";
import { getApplyMd5BodyChecksumPlugin } from "@aws-sdk/middleware-apply-body-checksum";
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type PutBucketTaggingCommandInput = PutBucketTaggingRequest;
export type PutBucketTaggingCommandOutput = __MetadataBearer;

/**
 * <p>Sets the tags for a bucket.</p>
 *          <p>Use tags to organize your AWS bill to reflect your own cost structure. To do this, sign
 *          up to get your AWS account bill with tag key values included. Then, to see the cost of
 *          combined resources, organize your billing information according to resources with the same
 *          tag key values. For example, you can tag several resources with a specific application
 *          name, and then organize your billing information to see the total cost of that application
 *          across several services. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Cost Allocation
 *             and Tagging</a>.</p>
 *
 *          <note>
 *             <p>Within a bucket, if you add a tag that has the same key as an existing tag, the new
 *             value overwrites the old value. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/CostAllocTagging.html">Using Cost Allocation in Amazon S3 Bucket
 *                Tags</a>.</p>
 *          </note>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:PutBucketTagging</code> action. The bucket owner has this permission by default
 *          and can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *             Resources</a>.</p>
 *
 *          <p>
 *             <code>PutBucketTagging</code> has the following special errors:</p>
 *          <ul>
 *             <li>
 *                <p>Error code: <code>InvalidTagError</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: The tag provided was not a valid tag. This error can occur if
 *                      the tag did not pass input validation. For information about tag restrictions,
 *                      see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tag-restrictions.html">AWS-Generated Cost Allocation Tag Restrictions</a>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Error code: <code>MalformedXMLError</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: The XML provided does not match the schema.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Error code: <code>OperationAbortedError </code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: A conflicting conditional operation is currently in progress
 *                      against this resource. Please try again.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Error code: <code>InternalError</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: The service was unable to apply the provided tag to the
 *                      bucket.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 *
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
 */
export class PutBucketTaggingCommand extends $Command<
  PutBucketTaggingCommandInput,
  PutBucketTaggingCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutBucketTaggingCommandInput) {
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
  ): Handler<PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutBucketTaggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBucketTaggingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutBucketTaggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPutBucketTaggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBucketTaggingCommandOutput> {
    return deserializeAws_restXmlPutBucketTaggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
