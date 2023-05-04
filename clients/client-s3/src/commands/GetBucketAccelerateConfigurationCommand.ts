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

import { GetBucketAccelerateConfigurationOutput, GetBucketAccelerateConfigurationRequest } from "../models/models_0";
import {
  de_GetBucketAccelerateConfigurationCommand,
  se_GetBucketAccelerateConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link GetBucketAccelerateConfigurationCommand}.
 */
export interface GetBucketAccelerateConfigurationCommandInput extends GetBucketAccelerateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketAccelerateConfigurationCommand}.
 */
export interface GetBucketAccelerateConfigurationCommandOutput
  extends GetBucketAccelerateConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>This implementation of the GET action uses the <code>accelerate</code> subresource to
 *          return the Transfer Acceleration state of a bucket, which is either <code>Enabled</code> or
 *             <code>Suspended</code>. Amazon S3 Transfer Acceleration is a bucket-level feature that
 *          enables you to perform faster data transfers to and from Amazon S3.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:GetAccelerateConfiguration</code> action. The bucket owner has this permission
 *          by default. The bucket owner can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to your Amazon S3 Resources</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>You set the Transfer Acceleration state of an existing bucket to <code>Enabled</code> or
 *             <code>Suspended</code> by using the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html">PutBucketAccelerateConfiguration</a> operation. </p>
 *          <p>A GET <code>accelerate</code> request does not return a state value for a bucket that
 *          has no transfer acceleration state. A bucket has no Transfer Acceleration state if a state
 *          has never been set on the bucket. </p>
 *          <p>For more information about transfer acceleration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Transfer Acceleration</a> in
 *          the Amazon S3 User Guide.</p>
 *          <p>The following operations are related to <code>GetBucketAccelerateConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html">PutBucketAccelerateConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketAccelerateConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketAccelerateConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketAccelerateConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketAccelerateConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketAccelerateConfigurationOutput
 * //   Status: "Enabled" || "Suspended",
 * // };
 *
 * ```
 *
 * @param GetBucketAccelerateConfigurationCommandInput - {@link GetBucketAccelerateConfigurationCommandInput}
 * @returns {@link GetBucketAccelerateConfigurationCommandOutput}
 * @see {@link GetBucketAccelerateConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketAccelerateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class GetBucketAccelerateConfigurationCommand extends $Command<
  GetBucketAccelerateConfigurationCommandInput,
  GetBucketAccelerateConfigurationCommandOutput,
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
  constructor(readonly input: GetBucketAccelerateConfigurationCommandInput) {
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
  ): Handler<GetBucketAccelerateConfigurationCommandInput, GetBucketAccelerateConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketAccelerateConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetBucketAccelerateConfigurationCommand";
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
  private serialize(
    input: GetBucketAccelerateConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetBucketAccelerateConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBucketAccelerateConfigurationCommandOutput> {
    return de_GetBucketAccelerateConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
