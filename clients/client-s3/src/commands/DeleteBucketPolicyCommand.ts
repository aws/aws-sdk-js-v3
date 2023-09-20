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

import { DeleteBucketPolicyRequest } from "../models/models_0";
import { de_DeleteBucketPolicyCommand, se_DeleteBucketPolicyCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteBucketPolicyCommand}.
 */
export interface DeleteBucketPolicyCommandInput extends DeleteBucketPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketPolicyCommand}.
 */
export interface DeleteBucketPolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>This implementation of the DELETE action uses the policy subresource to delete the
 *          policy of a specified bucket. If you are using an identity other than the root user of the
 *          Amazon Web Services account that owns the bucket, the calling identity must have the
 *             <code>DeleteBucketPolicy</code> permissions on the specified bucket and belong to the
 *          bucket owner's account to use this operation. </p>
 *          <p>If you don't have <code>DeleteBucketPolicy</code> permissions, Amazon S3 returns a <code>403
 *             Access Denied</code> error. If you have the correct permissions, but you're not using an
 *          identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not
 *             Allowed</code> error. </p>
 *          <important>
 *             <p>To ensure that bucket owners don't inadvertently lock themselves out of their own
 *             buckets, the root principal in a bucket owner's Amazon Web Services account can perform the
 *                <code>GetBucketPolicy</code>, <code>PutBucketPolicy</code>, and
 *                <code>DeleteBucketPolicy</code> API actions, even if their bucket policy explicitly
 *             denies the root principal's access. Bucket owner root principals can only be blocked
 *             from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations
 *             policies.</p>
 *          </important>
 *          <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and
 *             UserPolicies</a>. </p>
 *          <p>The following operations are related to <code>DeleteBucketPolicy</code>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketPolicyCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketPolicyCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteBucketPolicyRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketPolicyCommandInput - {@link DeleteBucketPolicyCommandInput}
 * @returns {@link DeleteBucketPolicyCommandOutput}
 * @see {@link DeleteBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To delete bucket policy
 * ```javascript
 * // The following example deletes bucket policy on the specified bucket.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new DeleteBucketPolicyCommand(input);
 * await client.send(command);
 * // example id: to-delete-bucket-policy-1483043406577
 * ```
 *
 */
export class DeleteBucketPolicyCommand extends $Command<
  DeleteBucketPolicyCommandInput,
  DeleteBucketPolicyCommandOutput,
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
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteBucketPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "DeleteBucketPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "DeleteBucketPolicy",
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
  private serialize(input: DeleteBucketPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteBucketPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBucketPolicyCommandOutput> {
    return de_DeleteBucketPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
