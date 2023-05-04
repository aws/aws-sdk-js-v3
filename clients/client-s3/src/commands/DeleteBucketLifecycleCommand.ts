// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { DeleteBucketLifecycleRequest } from "../models/models_0";
import { de_DeleteBucketLifecycleCommand, se_DeleteBucketLifecycleCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link DeleteBucketLifecycleCommand}.
 */
export interface DeleteBucketLifecycleCommandInput extends DeleteBucketLifecycleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketLifecycleCommand}.
 */
export interface DeleteBucketLifecycleCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the lifecycle configuration from the specified bucket. Amazon S3 removes all the
 *          lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your
 *          objects never expire, and Amazon S3 no longer automatically deletes any objects on the basis of
 *          rules contained in the deleted lifecycle configuration.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:PutLifecycleConfiguration</code> action. By default, the bucket owner has this
 *          permission and the bucket owner can grant this permission to others.</p>
 *          <p>There is usually some time lag before lifecycle configuration deletion is fully
 *          propagated to all the Amazon S3 systems.</p>
 *          <p>For more information about the object expiration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#intro-lifecycle-rules-actions">Elements to Describe Lifecycle Actions</a>.</p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketLifecycleCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketLifecycleCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteBucketLifecycleRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketLifecycleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketLifecycleCommandInput - {@link DeleteBucketLifecycleCommandInput}
 * @returns {@link DeleteBucketLifecycleCommandOutput}
 * @see {@link DeleteBucketLifecycleCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketLifecycleCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To delete lifecycle configuration on a bucket.
 * ```javascript
 * // The following example deletes lifecycle configuration on a bucket.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new DeleteBucketLifecycleCommand(input);
 * await client.send(command);
 * // example id: to-delete-lifecycle-configuration-on-a-bucket-1483043310583
 * ```
 *
 */
export class DeleteBucketLifecycleCommand extends $Command<
  DeleteBucketLifecycleCommandInput,
  DeleteBucketLifecycleCommandOutput,
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
  constructor(readonly input: DeleteBucketLifecycleCommandInput) {
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
  ): Handler<DeleteBucketLifecycleCommandInput, DeleteBucketLifecycleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteBucketLifecycleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "DeleteBucketLifecycleCommand";
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
  private serialize(input: DeleteBucketLifecycleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteBucketLifecycleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBucketLifecycleCommandOutput> {
    return de_DeleteBucketLifecycleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
