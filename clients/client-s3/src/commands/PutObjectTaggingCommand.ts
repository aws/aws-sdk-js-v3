import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutObjectTaggingOutput, PutObjectTaggingRequest } from "../models/models_0";
import {
  deserializeAws_restXmlPutObjectTaggingCommand,
  serializeAws_restXmlPutObjectTaggingCommand,
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

export interface PutObjectTaggingCommandInput extends PutObjectTaggingRequest {}
export interface PutObjectTaggingCommandOutput extends PutObjectTaggingOutput, __MetadataBearer {}

/**
 * <p>Sets the supplied tag-set to an object that already exists in a bucket.</p>
 *          <p>A tag is a key-value pair. You can associate tags with an object by sending a PUT
 *          request against the tagging subresource that is associated with the object. You can
 *          retrieve tags by sending a GET request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a>.</p>
 *
 *          <p>For tagging-related restrictions related to characters and encodings, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">Tag
 *             Restrictions</a>. Note that Amazon S3 limits the maximum number of tags to 10 tags per
 *          object.</p>
 *
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:PutObjectTagging</code> action. By default, the bucket owner has this
 *          permission and can grant this permission to others.</p>
 *
 *          <p>To put tags of any other version, use the <code>versionId</code> query parameter. You
 *          also need permission for the <code>s3:PutObjectVersionTagging</code> action.</p>
 *
 *          <p>For information about the Amazon S3 object tagging feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html">Object Tagging</a>.</p>
 *
 *
 *          <p class="title">
 *             <b>Special Errors</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code: InvalidTagError </i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause: The tag provided was not a valid tag. This error can occur
 *                         if the tag did not pass input validation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html">Object Tagging</a>.</i>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code: MalformedXMLError </i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause: The XML provided does not match the schema.</i>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code: OperationAbortedError </i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause: A conflicting conditional action is currently in
 *                         progress against this resource. Please try again.</i>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code: InternalError</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause: The service was unable to apply the provided tag to the
 *                         object.</i>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 *
 *
 *
 *
 *
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html">DeleteObjectTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutObjectTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectTaggingCommandInput} for command's `input` shape.
 * @see {@link PutObjectTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutObjectTaggingCommand extends $Command<
  PutObjectTaggingCommandInput,
  PutObjectTaggingCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutObjectTaggingCommandInput) {
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
  ): Handler<PutObjectTaggingCommandInput, PutObjectTaggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutObjectTaggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutObjectTaggingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutObjectTaggingOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutObjectTaggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPutObjectTaggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutObjectTaggingCommandOutput> {
    return deserializeAws_restXmlPutObjectTaggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
