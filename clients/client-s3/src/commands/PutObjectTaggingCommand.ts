// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { PutObjectTaggingOutput, PutObjectTaggingRequest } from "../models/models_1";
import { de_PutObjectTaggingCommand, se_PutObjectTaggingCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link PutObjectTaggingCommand}.
 */
export interface PutObjectTaggingCommandInput extends PutObjectTaggingRequest {}
/**
 * @public
 *
 * The output of {@link PutObjectTaggingCommand}.
 */
export interface PutObjectTaggingCommandOutput extends PutObjectTaggingOutput, __MetadataBearer {}

/**
 * @public
 * <p>Sets the supplied tag-set to an object that already exists in a bucket.</p>
 *          <p>A tag is a key-value pair. You can associate tags with an object by sending a PUT
 *          request against the tagging subresource that is associated with the object. You can
 *          retrieve tags by sending a GET request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a>.</p>
 *          <p>For tagging-related restrictions related to characters and encodings, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">Tag
 *             Restrictions</a>. Note that Amazon S3 limits the maximum number of tags to 10 tags per
 *          object.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:PutObjectTagging</code> action. By default, the bucket owner has this
 *          permission and can grant this permission to others.</p>
 *          <p>To put tags of any other version, use the <code>versionId</code> query parameter. You
 *          also need permission for the <code>s3:PutObjectVersionTagging</code> action.</p>
 *          <p>For information about the Amazon S3 object tagging feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html">Object Tagging</a>.</p>
 *          <p>
 *             <code>PutObjectTagging</code> has the following special errors:</p>
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
 *                         if the tag did not pass input validation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html">Object
 *                            Tagging</a>.</i>
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
 *                         <i>Cause: A conflicting conditional action is currently in progress
 *                         against this resource. Please try again.</i>
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
 *          <p>The following operations are related to <code>PutObjectTagging</code>:</p>
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
 * const input = { // PutObjectTaggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
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
 *   RequestPayer: "requester",
 * };
 * const command = new PutObjectTaggingCommand(input);
 * const response = await client.send(command);
 * // { // PutObjectTaggingOutput
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutObjectTaggingCommandInput - {@link PutObjectTaggingCommandInput}
 * @returns {@link PutObjectTaggingCommandOutput}
 * @see {@link PutObjectTaggingCommandInput} for command's `input` shape.
 * @see {@link PutObjectTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To add tags to an existing object
 * ```javascript
 * // The following example adds tags to an existing object.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg",
 *   "Tagging": {
 *     "TagSet": [
 *       {
 *         "Key": "Key3",
 *         "Value": "Value3"
 *       },
 *       {
 *         "Key": "Key4",
 *         "Value": "Value4"
 *       }
 *     ]
 *   }
 * };
 * const command = new PutObjectTaggingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VersionId": "null"
 * }
 * *\/
 * // example id: to-add-tags-to-an-existing-object-1481764668793
 * ```
 *
 */
export class PutObjectTaggingCommand extends $Command<
  PutObjectTaggingCommandInput,
  PutObjectTaggingCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutObjectTaggingCommand.getEndpointParameterInstructions())
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
    const commandName = "PutObjectTaggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: PutObjectTaggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutObjectTaggingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutObjectTaggingCommandOutput> {
    return de_PutObjectTaggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
