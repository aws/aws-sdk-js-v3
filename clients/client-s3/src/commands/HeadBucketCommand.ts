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

import { HeadBucketRequest } from "../models/models_0";
import { de_HeadBucketCommand, se_HeadBucketCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link HeadBucketCommand}.
 */
export interface HeadBucketCommandInput extends HeadBucketRequest {}
/**
 * @public
 *
 * The output of {@link HeadBucketCommand}.
 */
export interface HeadBucketCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>This action is useful to determine if a bucket exists and you have permission to access
 *          it. The action returns a <code>200 OK</code> if the bucket exists and you have permission
 *          to access it.</p>
 *          <p>If the bucket does not exist or you do not have permission to access it, the
 *             <code>HEAD</code> request returns a generic <code>400 Bad Request</code>, <code>403
 *             Forbidden</code> or <code>404 Not Found</code> code. A message body is not included, so
 *          you cannot determine the exception beyond these error codes.</p>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:ListBucket</code> action. The bucket owner has this permission by default and
 *          can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to Your Amazon S3 Resources</a>.</p>
 *          <p>To use this API operation against an access point, you must provide the alias of the access point in
 *          place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct
 *          requests to the access point hostname. The access point hostname takes the form
 *             <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com.
 *          When using the Amazon Web Services SDKs, you provide the ARN in place of the bucket name. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a>.</p>
 *          <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name.
 * If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned.
 * For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of
 *             Error Codes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, HeadBucketCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, HeadBucketCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // HeadBucketRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new HeadBucketCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HeadBucketCommandInput - {@link HeadBucketCommandInput}
 * @returns {@link HeadBucketCommandOutput}
 * @see {@link HeadBucketCommandInput} for command's `input` shape.
 * @see {@link HeadBucketCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NotFound} (client fault)
 *  <p>The specified content does not exist.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To determine if bucket exists
 * ```javascript
 * // This operation checks to see if a bucket exists.
 * const input = {
 *   "Bucket": "acl1"
 * };
 * const command = new HeadBucketCommand(input);
 * await client.send(command);
 * // example id: to-determine-if-bucket-exists-1473110292262
 * ```
 *
 */
export class HeadBucketCommand extends $Command<
  HeadBucketCommandInput,
  HeadBucketCommandOutput,
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
  constructor(readonly input: HeadBucketCommandInput) {
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
  ): Handler<HeadBucketCommandInput, HeadBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, HeadBucketCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "HeadBucketCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "HeadBucket",
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
  private serialize(input: HeadBucketCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_HeadBucketCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HeadBucketCommandOutput> {
    return de_HeadBucketCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
