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

import {
  DeleteObjectsOutput,
  DeleteObjectsOutputFilterSensitiveLog,
  DeleteObjectsRequest,
  DeleteObjectsRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlDeleteObjectsCommand,
  serializeAws_restXmlDeleteObjectsCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

export interface DeleteObjectsCommandInput extends DeleteObjectsRequest {}
export interface DeleteObjectsCommandOutput extends DeleteObjectsOutput, __MetadataBearer {}

/**
 * <p>This action enables you to delete multiple objects from a bucket using a single HTTP
 *          request. If you know the object keys that you want to delete, then this action provides
 *          a suitable alternative to sending individual delete requests, reducing per-request
 *          overhead.</p>
 *          <p>The request contains a list of up to 1000 keys that you want to delete. In the XML, you
 *          provide the object key names, and optionally, version IDs if you want to delete a specific
 *          version of the object from a versioning-enabled bucket. For each key, Amazon S3 performs a
 *          delete action and returns the result of that delete, success, or failure, in the
 *          response. Note that if the object specified in the request is not found, Amazon S3 returns the
 *          result as deleted.</p>
 *          <p> The action supports two modes for the response: verbose and quiet. By default, the
 *          action uses verbose mode in which the response includes the result of deletion of each
 *          key in your request. In quiet mode the response includes only keys where the delete
 *          action encountered an error. For a successful deletion, the action does not return
 *          any information about the delete in the response body.</p>
 *          <p>When performing this action on an MFA Delete enabled bucket, that attempts to delete
 *          any versioned objects, you must include an MFA token. If you do not provide one, the entire
 *          request will fail, even if there are non-versioned objects you are trying to delete. If you
 *          provide an invalid token, whether there are versioned keys in the request or not, the
 *          entire Multi-Object Delete request will fail. For information about MFA Delete, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html#MultiFactorAuthenticationDelete"> MFA
 *          Delete</a>.</p>
 *          <p>Finally, the Content-MD5 header is required for all Multi-Object Delete requests. Amazon
 *          S3 uses the header value to ensure that your request body has not been altered in
 *          transit.</p>
 *          <p>The following operations are related to <code>DeleteObjects</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteObjectsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteObjectsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new DeleteObjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteObjectsCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 */
export class DeleteObjectsCommand extends $Command<
  DeleteObjectsCommandInput,
  DeleteObjectsCommandOutput,
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

  constructor(readonly input: DeleteObjectsCommandInput) {
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
  ): Handler<DeleteObjectsCommandInput, DeleteObjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteObjectsCommand.getEndpointParameterInstructions()));
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
    const commandName = "DeleteObjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteObjectsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteObjectsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteObjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteObjectsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteObjectsCommandOutput> {
    return deserializeAws_restXmlDeleteObjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
