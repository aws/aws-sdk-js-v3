import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutBucketTaggingRequest } from "../models/models_0";
import {
  deserializeAws_restXmlPutBucketTaggingCommand,
  serializeAws_restXmlPutBucketTaggingCommand,
} from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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
 * <note>
 *             <p>This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see
 *                <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a> in the <i>Amazon Simple Storage Service API</i>. </p>
 *          </note>
 *          <p>Sets the tags for an Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
 *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 *          <p>Use tags to organize your AWS bill to reflect your own cost structure. To do this, sign up to get your
 *          AWS account bill with tag key values included. Then, to see the cost of combined resources, organize your
 *          billing information according to resources with the same tag key values. For example, you can tag several
 *          resources with a specific application name, and then organize your billing information to see the total cost
 *          of that application across several services. For more information, see
 *          <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Cost Allocation and Tagging</a>.</p>
 *
 *          <note>
 *             <p>Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites
 *          the old value. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/CostAllocTagging.html">Using Cost Allocation in Amazon S3
 *             Bucket Tags</a>.</p>
 *          </note>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3-outposts:PutBucketTagging</code> action. The Outposts bucket owner has this
 *          permission by default and can grant this permission to others. For more information about
 *          permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources"> Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3
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
 *                      <p>Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation.
 *                   For information about tag restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">
 *                      User-Defined Tag Restrictions</a>  and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tag-restrictions.html">
 *                         AWS-Generated Cost Allocation Tag Restrictions</a>.</p>
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
 *                      <p>Description: A conflicting conditional operation is currently in progress against this
 *                      resource. Try again.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Error code: <code>InternalError</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: The service was unable to apply the provided tag to the bucket.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html#API_control_PutBucketTagging_Examples">Examples</a> section.</p>
 *
 *          <p>The following actions are related to <code>PutBucketTagging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html">GetBucketTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html">DeleteBucketTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class PutBucketTaggingCommand extends $Command<
  PutBucketTaggingCommandInput,
  PutBucketTaggingCommandOutput,
  S3ControlClientResolvedConfig
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
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
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
