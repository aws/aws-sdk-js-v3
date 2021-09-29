import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetBucketRequest, GetBucketResult } from "../models/models_0";
import { deserializeAws_restXmlGetBucketCommand, serializeAws_restXmlGetBucketCommand } from "../protocols/Aws_restXml";
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

export interface GetBucketCommandInput extends GetBucketRequest {}
export interface GetBucketCommandOutput extends GetBucketResult, __MetadataBearer {}

/**
 * <p>Gets an Amazon S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">
 *          Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>If you are using an identity other than the root user of the Amazon Web Services account
 *          that owns the Outposts bucket, the calling identity must have the
 *          <code>s3-outposts:GetBucket</code> permissions on the specified Outposts bucket and
 *          belong to the Outposts bucket owner's account in order to use this action. Only
 *          users from Outposts bucket owner account with the right permissions can perform
 *          actions on an Outposts bucket.
 *       </p>
 *          <p>
 *          If you don't have <code>s3-outposts:GetBucket</code> permissions or you're not using an identity that belongs to the bucket owner's
 *          account, Amazon S3 returns a <code>403 Access Denied</code> error.</p>
 *          <p>The following actions are related to <code>GetBucket</code> for Amazon S3 on Outposts:</p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html#API_control_GetBucket_Examples">Examples</a> section.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html">DeleteBucket</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetBucketCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetBucketCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketCommandInput} for command's `input` shape.
 * @see {@link GetBucketCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetBucketCommand extends $Command<
  GetBucketCommandInput,
  GetBucketCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBucketCommandInput) {
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
  ): Handler<GetBucketCommandInput, GetBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetBucketCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBucketRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBucketResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBucketCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetBucketCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketCommandOutput> {
    return deserializeAws_restXmlGetBucketCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
