// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
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

import { PutBucketPolicyRequest } from "../models/models_0";
import { de_PutBucketPolicyCommand, se_PutBucketPolicyCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutBucketPolicyCommand}.
 */
export interface PutBucketPolicyCommandInput extends PutBucketPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketPolicyCommand}.
 */
export interface PutBucketPolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Applies an Amazon S3 bucket policy to an Amazon S3 bucket. If you are using an identity other than
 *          the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the
 *             <code>PutBucketPolicy</code> permissions on the specified bucket and belong to the
 *          bucket owner's account in order to use this operation.</p>
 *          <p>If you don't have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403
 *             Access Denied</code> error. If you have the correct permissions, but you're not using an
 *          identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not
 *             Allowed</code> error.</p>
 *          <important>
 *             <p>To ensure that bucket owners don't inadvertently lock themselves out of their own
 *             buckets, the root principal in a bucket owner's Amazon Web Services account can perform the
 *                <code>GetBucketPolicy</code>, <code>PutBucketPolicy</code>, and
 *                <code>DeleteBucketPolicy</code> API actions, even if their bucket policy explicitly
 *             denies the root principal's access. Bucket owner root principals can only be blocked
 *             from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations
 *             policies.</p>
 *          </important>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html">Bucket policy
 *             examples</a>.</p>
 *          <p>The following operations are related to <code>PutBucketPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketPolicyCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketPolicyCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // PutBucketPolicyRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 *   ConfirmRemoveSelfBucketAccess: true || false,
 *   Policy: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketPolicyCommandInput - {@link PutBucketPolicyCommandInput}
 * @returns {@link PutBucketPolicyCommandOutput}
 * @see {@link PutBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link PutBucketPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example Set bucket policy
 * ```javascript
 * // The following example sets a permission policy on a bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Policy": "{\"Version\": \"2012-10-17\", \"Statement\": [{ \"Sid\": \"id-1\",\"Effect\": \"Allow\",\"Principal\": {\"AWS\": \"arn:aws:iam::123456789012:root\"}, \"Action\": [ \"s3:PutObject\",\"s3:PutObjectAcl\"], \"Resource\": [\"arn:aws:s3:::acl3/*\" ] } ]}"
 * };
 * const command = new PutBucketPolicyCommand(input);
 * await client.send(command);
 * // example id: set-bucket-policy-1482448903302
 * ```
 *
 */
export class PutBucketPolicyCommand extends $Command<
  PutBucketPolicyCommandInput,
  PutBucketPolicyCommandOutput,
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
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBucketPolicyCommand.getEndpointParameterInstructions())
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
    const commandName = "PutBucketPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "PutBucketPolicy",
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
  private serialize(input: PutBucketPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutBucketPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBucketPolicyCommandOutput> {
    return de_PutBucketPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
