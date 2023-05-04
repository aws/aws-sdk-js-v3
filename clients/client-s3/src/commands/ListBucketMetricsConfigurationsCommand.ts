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

import { ListBucketMetricsConfigurationsOutput, ListBucketMetricsConfigurationsRequest } from "../models/models_0";
import {
  de_ListBucketMetricsConfigurationsCommand,
  se_ListBucketMetricsConfigurationsCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link ListBucketMetricsConfigurationsCommand}.
 */
export interface ListBucketMetricsConfigurationsCommandInput extends ListBucketMetricsConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListBucketMetricsConfigurationsCommand}.
 */
export interface ListBucketMetricsConfigurationsCommandOutput
  extends ListBucketMetricsConfigurationsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the metrics configurations for the bucket. The metrics configurations are only for
 *          the request metrics of the bucket and do not provide information on daily storage metrics.
 *          You can have up to 1,000 configurations per bucket.</p>
 *          <p>This action supports list pagination and does not return more than 100 configurations at
 *          a time. Always check the <code>IsTruncated</code> element in the response. If there are no
 *          more configurations to list, <code>IsTruncated</code> is set to false. If there are more
 *          configurations to list, <code>IsTruncated</code> is set to true, and there is a value in
 *             <code>NextContinuationToken</code>. You use the <code>NextContinuationToken</code> value
 *          to continue the pagination of the list by passing the value in
 *             <code>continuation-token</code> in the request to <code>GET</code> the next page.</p>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:GetMetricsConfiguration</code> action. The bucket owner has this permission by
 *          default. The bucket owner can grant this permission to others. For more information about
 *          permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to Your Amazon S3 Resources</a>.</p>
 *          <p>For more information about metrics configurations and CloudWatch request metrics, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon CloudWatch</a>.</p>
 *          <p>The following operations are related to
 *          <code>ListBucketMetricsConfigurations</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html">PutBucketMetricsConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html">GetBucketMetricsConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetricsConfiguration.html">DeleteBucketMetricsConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListBucketMetricsConfigurationsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListBucketMetricsConfigurationsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // ListBucketMetricsConfigurationsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContinuationToken: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new ListBucketMetricsConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBucketMetricsConfigurationsOutput
 * //   IsTruncated: true || false,
 * //   ContinuationToken: "STRING_VALUE",
 * //   NextContinuationToken: "STRING_VALUE",
 * //   MetricsConfigurationList: [ // MetricsConfigurationList
 * //     { // MetricsConfiguration
 * //       Id: "STRING_VALUE", // required
 * //       Filter: { // MetricsFilter Union: only one key present
 * //         Prefix: "STRING_VALUE",
 * //         Tag: { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //         AccessPointArn: "STRING_VALUE",
 * //         And: { // MetricsAndOperator
 * //           Prefix: "STRING_VALUE",
 * //           Tags: [ // TagSet
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           AccessPointArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBucketMetricsConfigurationsCommandInput - {@link ListBucketMetricsConfigurationsCommandInput}
 * @returns {@link ListBucketMetricsConfigurationsCommandOutput}
 * @see {@link ListBucketMetricsConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListBucketMetricsConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class ListBucketMetricsConfigurationsCommand extends $Command<
  ListBucketMetricsConfigurationsCommandInput,
  ListBucketMetricsConfigurationsCommandOutput,
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
  constructor(readonly input: ListBucketMetricsConfigurationsCommandInput) {
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
  ): Handler<ListBucketMetricsConfigurationsCommandInput, ListBucketMetricsConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBucketMetricsConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "ListBucketMetricsConfigurationsCommand";
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
    input: ListBucketMetricsConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListBucketMetricsConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListBucketMetricsConfigurationsCommandOutput> {
    return de_ListBucketMetricsConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
