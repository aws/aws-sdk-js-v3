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

import {
  GetBucketEncryptionOutput,
  GetBucketEncryptionOutputFilterSensitiveLog,
  GetBucketEncryptionRequest,
} from "../models/models_0";
import { de_GetBucketEncryptionCommand, se_GetBucketEncryptionCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link GetBucketEncryptionCommand}.
 */
export interface GetBucketEncryptionCommandInput extends GetBucketEncryptionRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketEncryptionCommand}.
 */
export interface GetBucketEncryptionCommandOutput extends GetBucketEncryptionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the default encryption configuration for an Amazon S3 bucket. By default, all buckets have a default encryption configuration that
 *          uses server-side encryption with Amazon S3 managed keys (SSE-S3). For information
 *          about the bucket default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Bucket
 *             Default Encryption</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:GetEncryptionConfiguration</code> action. The bucket owner has this permission
 *          by default. The bucket owner can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to Your Amazon S3 Resources</a>.</p>
 *          <p>The following operations are related to <code>GetBucketEncryption</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html">PutBucketEncryption</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketEncryption.html">DeleteBucketEncryption</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketEncryptionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketEncryptionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketEncryptionRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketEncryptionCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketEncryptionOutput
 * //   ServerSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //     Rules: [ // ServerSideEncryptionRules // required
 * //       { // ServerSideEncryptionRule
 * //         ApplyServerSideEncryptionByDefault: { // ServerSideEncryptionByDefault
 * //           SSEAlgorithm: "AES256" || "aws:kms", // required
 * //           KMSMasterKeyID: "STRING_VALUE",
 * //         },
 * //         BucketKeyEnabled: true || false,
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketEncryptionCommandInput - {@link GetBucketEncryptionCommandInput}
 * @returns {@link GetBucketEncryptionCommandOutput}
 * @see {@link GetBucketEncryptionCommandInput} for command's `input` shape.
 * @see {@link GetBucketEncryptionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class GetBucketEncryptionCommand extends $Command<
  GetBucketEncryptionCommandInput,
  GetBucketEncryptionCommandOutput,
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
  constructor(readonly input: GetBucketEncryptionCommandInput) {
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
  ): Handler<GetBucketEncryptionCommandInput, GetBucketEncryptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketEncryptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetBucketEncryptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetBucketEncryptionOutputFilterSensitiveLog,
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
  private serialize(input: GetBucketEncryptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBucketEncryptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketEncryptionCommandOutput> {
    return de_GetBucketEncryptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
