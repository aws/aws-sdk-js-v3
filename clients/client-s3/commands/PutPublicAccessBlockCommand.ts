import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutPublicAccessBlockRequest } from "../models/models_0";
import {
  deserializeAws_restXmlPutPublicAccessBlockCommand,
  serializeAws_restXmlPutPublicAccessBlockCommand,
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

export interface PutPublicAccessBlockCommandInput extends PutPublicAccessBlockRequest {}
export interface PutPublicAccessBlockCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or modifies the <code>PublicAccessBlock</code> configuration for an Amazon S3 bucket.
 *          To use this operation, you must have the <code>s3:PutBucketPublicAccessBlock</code>
 *          permission. For more information about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a
 *          Policy</a>.</p>
 *
 *          <important>
 *             <p>When Amazon S3 evaluates the <code>PublicAccessBlock</code> configuration for a bucket or
 *             an object, it checks the <code>PublicAccessBlock</code> configuration for both the
 *             bucket (or the bucket that contains the object) and the bucket owner's account. If the
 *                <code>PublicAccessBlock</code> configurations are different between the bucket and
 *             the account, Amazon S3 uses the most restrictive combination of the bucket-level and
 *             account-level settings.</p>
 *          </important>
 *
 *
 *          <p>For more information about when Amazon S3 considers a bucket or an object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a>.</p>
 *
 *
 *
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html">GetPublicAccessBlock</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html">GetBucketPolicyStatus</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 Block
 *                   Public Access</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutPublicAccessBlockCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutPublicAccessBlockCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutPublicAccessBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPublicAccessBlockCommandInput} for command's `input` shape.
 * @see {@link PutPublicAccessBlockCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutPublicAccessBlockCommand extends $Command<
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutPublicAccessBlockCommandInput) {
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
  ): Handler<PutPublicAccessBlockCommandInput, PutPublicAccessBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutPublicAccessBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPublicAccessBlockRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPublicAccessBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPutPublicAccessBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPublicAccessBlockCommandOutput> {
    return deserializeAws_restXmlPutPublicAccessBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
