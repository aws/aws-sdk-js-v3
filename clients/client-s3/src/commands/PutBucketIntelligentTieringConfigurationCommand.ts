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
} from "@smithy/types";

import { PutBucketIntelligentTieringConfigurationRequest } from "../models/models_0";
import {
  de_PutBucketIntelligentTieringConfigurationCommand,
  se_PutBucketIntelligentTieringConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutBucketIntelligentTieringConfigurationCommand}.
 */
export interface PutBucketIntelligentTieringConfigurationCommandInput
  extends PutBucketIntelligentTieringConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketIntelligentTieringConfigurationCommand}.
 */
export interface PutBucketIntelligentTieringConfigurationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Puts a S3 Intelligent-Tiering configuration to the specified bucket. You can have up to
 *          1,000 S3 Intelligent-Tiering configurations per bucket.</p>
 *          <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities.</p>
 *          <p>The S3 Intelligent-Tiering storage class is  the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p>
 *          <p>Operations related to <code>PutBucketIntelligentTieringConfiguration</code> include: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html">DeleteBucketIntelligentTieringConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html">GetBucketIntelligentTieringConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketIntelligentTieringConfigurations.html">ListBucketIntelligentTieringConfigurations</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You only need S3 Intelligent-Tiering enabled on a bucket if you want to automatically
 *             move objects stored in the S3 Intelligent-Tiering storage class to the Archive Access
 *             or Deep Archive Access tier.</p>
 *          </note>
 *          <p>
 *             <code>PutBucketIntelligentTieringConfiguration</code> has the following special errors:</p>
 *          <dl>
 *             <dt>HTTP 400 Bad Request Error</dt>
 *             <dd>
 *                <p>
 *                   <i>Code:</i> InvalidArgument</p>
 *                <p>
 *                   <i>Cause:</i> Invalid Argument</p>
 *             </dd>
 *             <dt>HTTP 400 Bad Request Error</dt>
 *             <dd>
 *                <p>
 *                   <i>Code:</i> TooManyConfigurations</p>
 *                <p>
 *                   <i>Cause:</i> You are attempting to create a new configuration
 *                   but have already reached the 1,000-configuration limit. </p>
 *             </dd>
 *             <dt>HTTP 403 Forbidden Error</dt>
 *             <dd>
 *                <p>
 *                   <i>Cause:</i> You are not the owner of the specified bucket,
 *                   or you do not have the <code>s3:PutIntelligentTieringConfiguration</code>
 *                   bucket permission to set the configuration on the bucket. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketIntelligentTieringConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketIntelligentTieringConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // PutBucketIntelligentTieringConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   IntelligentTieringConfiguration: { // IntelligentTieringConfiguration
 *     Id: "STRING_VALUE", // required
 *     Filter: { // IntelligentTieringFilter
 *       Prefix: "STRING_VALUE",
 *       Tag: { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *       And: { // IntelligentTieringAndOperator
 *         Prefix: "STRING_VALUE",
 *         Tags: [ // TagSet
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *     Status: "Enabled" || "Disabled", // required
 *     Tierings: [ // TieringList // required
 *       { // Tiering
 *         Days: Number("int"), // required
 *         AccessTier: "ARCHIVE_ACCESS" || "DEEP_ARCHIVE_ACCESS", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new PutBucketIntelligentTieringConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketIntelligentTieringConfigurationCommandInput - {@link PutBucketIntelligentTieringConfigurationCommandInput}
 * @returns {@link PutBucketIntelligentTieringConfigurationCommandOutput}
 * @see {@link PutBucketIntelligentTieringConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBucketIntelligentTieringConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class PutBucketIntelligentTieringConfigurationCommand extends $Command<
  PutBucketIntelligentTieringConfigurationCommandInput,
  PutBucketIntelligentTieringConfigurationCommandOutput,
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
  constructor(readonly input: PutBucketIntelligentTieringConfigurationCommandInput) {
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
    PutBucketIntelligentTieringConfigurationCommandInput,
    PutBucketIntelligentTieringConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        PutBucketIntelligentTieringConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutBucketIntelligentTieringConfigurationCommand";
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
    input: PutBucketIntelligentTieringConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutBucketIntelligentTieringConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutBucketIntelligentTieringConfigurationCommandOutput> {
    return de_PutBucketIntelligentTieringConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
