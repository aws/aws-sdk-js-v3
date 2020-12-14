import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { CreateBucketRequest, CreateBucketResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateBucketCommand,
  serializeAws_restXmlCreateBucketCommand,
} from "../protocols/Aws_restXml";
import { getRedirectFromPostIdPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

export type CreateBucketCommandInput = CreateBucketRequest;
export type CreateBucketCommandOutput = CreateBucketResult & __MetadataBearer;

/**
 * <note>
 *             <p>This API operation creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">Create Bucket</a> in the <i>Amazon Simple Storage Service API</i>.
 *       </p>
 *          </note>
 *          <p>Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To create an Outposts bucket, you must have S3 on Outposts.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 *          <p>Not every string is an acceptable bucket name. For information on bucket naming restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html#bucketnamingrules">Working with Amazon S3 Buckets</a>.</p>
 *
 *          <p>S3 on Outposts buckets do not support </p>
 *          <ul>
 *             <li>
 *                <p>ACLs. Instead, configure access point policies to manage
 *             access to buckets.</p>
 *             </li>
 *             <li>
 *                <p>Public access. </p>
 *             </li>
 *             <li>
 *                <p>Object Lock</p>
 *             </li>
 *             <li>
 *                <p>Bucket Location constraint</p>
 *             </li>
 *          </ul>
 *          <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
 *          endpoint hostname prefix and <code>x-amz-outpost-id</code> in your API request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html#API_control_CreateBucket_Examples">Examples</a> section.</p>
 *
 *          <p>The following actions are related to <code>CreateBucket</code> for Amazon S3 on Outposts:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html">GetBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html">DeleteBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateBucketCommand extends $Command<
  CreateBucketCommandInput,
  CreateBucketCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBucketCommandInput) {
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
  ): Handler<CreateBucketCommandInput, CreateBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getRedirectFromPostIdPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "CreateBucketCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBucketRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBucketResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBucketCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateBucketCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBucketCommandOutput> {
    return deserializeAws_restXmlCreateBucketCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
