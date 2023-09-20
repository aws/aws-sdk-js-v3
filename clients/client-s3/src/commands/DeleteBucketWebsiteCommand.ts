// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DeleteBucketWebsiteRequest } from "../models/models_0";
import { de_DeleteBucketWebsiteCommand, se_DeleteBucketWebsiteCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteBucketWebsiteCommand}.
 */
export interface DeleteBucketWebsiteCommandInput extends DeleteBucketWebsiteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketWebsiteCommand}.
 */
export interface DeleteBucketWebsiteCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>This action removes the website configuration for a bucket. Amazon S3 returns a <code>200
 *             OK</code> response upon successfully deleting a website configuration on the specified
 *          bucket. You will get a <code>200 OK</code> response if the website configuration you are
 *          trying to delete does not exist on the bucket. Amazon S3 returns a <code>404</code> response if
 *          the bucket specified in the request does not exist.</p>
 *          <p>This DELETE action requires the <code>S3:DeleteBucketWebsite</code> permission. By
 *          default, only the bucket owner can delete the website configuration attached to a bucket.
 *          However, bucket owners can grant other users permission to delete the website configuration
 *          by writing a bucket policy granting them the <code>S3:DeleteBucketWebsite</code>
 *          permission. </p>
 *          <p>For more information about hosting websites, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a>. </p>
 *          <p>The following operations are related to <code>DeleteBucketWebsite</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html">GetBucketWebsite</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html">PutBucketWebsite</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketWebsiteCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketWebsiteCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteBucketWebsiteRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketWebsiteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketWebsiteCommandInput - {@link DeleteBucketWebsiteCommandInput}
 * @returns {@link DeleteBucketWebsiteCommandOutput}
 * @see {@link DeleteBucketWebsiteCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketWebsiteCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To delete bucket website configuration
 * ```javascript
 * // The following example deletes bucket website configuration.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new DeleteBucketWebsiteCommand(input);
 * await client.send(command);
 * // example id: to-delete-bucket-website-configuration-1483043937825
 * ```
 *
 */
export class DeleteBucketWebsiteCommand extends $Command<
  DeleteBucketWebsiteCommandInput,
  DeleteBucketWebsiteCommandOutput,
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
  constructor(readonly input: DeleteBucketWebsiteCommandInput) {
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
  ): Handler<DeleteBucketWebsiteCommandInput, DeleteBucketWebsiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteBucketWebsiteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "DeleteBucketWebsiteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "DeleteBucketWebsite",
      },
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
  private serialize(input: DeleteBucketWebsiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteBucketWebsiteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBucketWebsiteCommandOutput> {
    return de_DeleteBucketWebsiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
