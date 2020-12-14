import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { DeleteBucketPolicyRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteBucketPolicyCommand,
  serializeAws_restXmlDeleteBucketPolicyCommand,
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

export type DeleteBucketPolicyCommandInput = DeleteBucketPolicyRequest;
export type DeleteBucketPolicyCommandOutput = __MetadataBearer;

/**
 * <note>
 *             <p>This API operation deletes an Amazon S3 on Outposts bucket policy. To delete an
 *          S3 bucket policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html">DeleteBucketPolicy</a> in the <i>Amazon Simple Storage Service API</i>.
 *       </p>
 *          </note>
 *          <p>This implementation of the DELETE operation uses the policy subresource to delete the
 *          policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the
 *          root user of the AWS account that owns the bucket, the calling identity must have the
 *             <code>s3-outposts:DeleteBucketPolicy</code> permissions on the specified Outposts bucket
 *          and belong to the bucket owner's account to use this operation. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in
 *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 *
 *          <p>If you don't have <code>DeleteBucketPolicy</code> permissions, Amazon S3 returns a
 *          <code>403 Access Denied</code> error. If you have the correct permissions, but you're
 *          not using an identity that belongs to the bucket owner's account, Amazon S3 returns a
 *          <code>405 Method Not Allowed</code> error. </p>
 *
 *
 *          <important>
 *             <p>As a security precaution, the root user of the AWS account that owns a bucket can always use this operation,
 *          even if the policy explicitly denies the root user the ability to perform this action.</p>
 *          </important>
 *
 *          <p>For more information about bucket policies, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User
 *             Policies</a>. </p>
 *
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html#API_control_DeleteBucketPolicy_Examples">Examples</a> section.</p>
 *
 *          <p>The following actions are related to <code>DeleteBucketPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html">GetBucketPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html">PutBucketPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DeleteBucketPolicyCommand extends $Command<
  DeleteBucketPolicyCommandInput,
  DeleteBucketPolicyCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBucketPolicyCommandInput) {
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
  ): Handler<DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "DeleteBucketPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBucketPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBucketPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteBucketPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBucketPolicyCommandOutput> {
    return deserializeAws_restXmlDeleteBucketPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
