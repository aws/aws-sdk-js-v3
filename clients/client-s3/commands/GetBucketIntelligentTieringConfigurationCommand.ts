import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import {
  GetBucketIntelligentTieringConfigurationOutput,
  GetBucketIntelligentTieringConfigurationRequest,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand,
  serializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand,
} from "../protocols/Aws_restXml";
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

export interface GetBucketIntelligentTieringConfigurationCommandInput
  extends GetBucketIntelligentTieringConfigurationRequest {}
export interface GetBucketIntelligentTieringConfigurationCommandOutput
  extends GetBucketIntelligentTieringConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Gets the S3 Intelligent-Tiering configuration from the specified bucket.</p>
 *          <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in two low latency and high throughput access tiers. For data that can be accessed asynchronously, you can choose to activate automatic archiving capabilities within the S3 Intelligent-Tiering storage class.</p>
 *          <p>The S3 Intelligent-Tiering storage class is  the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p>
 *          <p>Operations related to
 *             <code>GetBucketIntelligentTieringConfiguration</code> include: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html">DeleteBucketIntelligentTieringConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html">PutBucketIntelligentTieringConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketIntelligentTieringConfigurations.html">ListBucketIntelligentTieringConfigurations</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketIntelligentTieringConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketIntelligentTieringConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketIntelligentTieringConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketIntelligentTieringConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketIntelligentTieringConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetBucketIntelligentTieringConfigurationCommand extends $Command<
  GetBucketIntelligentTieringConfigurationCommandInput,
  GetBucketIntelligentTieringConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBucketIntelligentTieringConfigurationCommandInput) {
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
  ): Handler<
    GetBucketIntelligentTieringConfigurationCommandInput,
    GetBucketIntelligentTieringConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetBucketIntelligentTieringConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBucketIntelligentTieringConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBucketIntelligentTieringConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetBucketIntelligentTieringConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBucketIntelligentTieringConfigurationCommandOutput> {
    return deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
