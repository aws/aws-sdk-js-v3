import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutBucketPolicyRequest } from "../models/models_0";
import {
  deserializeAws_restXmlPutBucketPolicyCommand,
  serializeAws_restXmlPutBucketPolicyCommand,
} from "../protocols/Aws_restXml";
import { getApplyMd5BodyChecksumPlugin } from "@aws-sdk/middleware-apply-body-checksum";
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

export interface PutBucketPolicyCommandInput extends PutBucketPolicyRequest {}
export interface PutBucketPolicyCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an S3 bucket,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html">PutBucketPolicy</a> in the <i>Amazon S3 API Reference</i>.
 *       </p>
 *          </note>
 *          <p>Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>If you are using an identity other than the root user of the Amazon Web Services account that owns the
 *          Outposts bucket, the calling identity must have the <code>PutBucketPolicy</code>
 *          permissions on the specified Outposts bucket and belong to the bucket owner's account in
 *          order to use this action.</p>
 *
 *          <p>If you don't have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions,
 *          but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error.</p>
 *
 *          <important>
 *             <p> As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy
 *          explicitly denies the root user the ability to perform this action.
 *       </p>
 *          </important>
 *
 *
 *          <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p>
 *
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html#API_control_PutBucketPolicy_Examples">Examples</a> section.</p>
 *
 *          <p>The following actions are related to <code>PutBucketPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html">GetBucketPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html">DeleteBucketPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutBucketPolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutBucketPolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new PutBucketPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link PutBucketPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutBucketPolicyCommand extends $Command<
  PutBucketPolicyCommandInput,
  PutBucketPolicyCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutBucketPolicyCommandInput) {
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
  ): Handler<PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "PutBucketPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBucketPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutBucketPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPutBucketPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBucketPolicyCommandOutput> {
    return deserializeAws_restXmlPutBucketPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
