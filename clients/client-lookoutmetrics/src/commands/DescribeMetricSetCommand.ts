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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { DescribeMetricSetRequest, DescribeMetricSetResponse } from "../models/models_0";
import { de_DescribeMetricSetCommand, se_DescribeMetricSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetricSetCommand}.
 */
export interface DescribeMetricSetCommandInput extends DescribeMetricSetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMetricSetCommand}.
 */
export interface DescribeMetricSetCommandOutput extends DescribeMetricSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a dataset.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DescribeMetricSetCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DescribeMetricSetCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // DescribeMetricSetRequest
 *   MetricSetArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeMetricSetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetricSetResponse
 * //   MetricSetArn: "STRING_VALUE",
 * //   AnomalyDetectorArn: "STRING_VALUE",
 * //   MetricSetName: "STRING_VALUE",
 * //   MetricSetDescription: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   Offset: Number("int"),
 * //   MetricList: [ // MetricList
 * //     { // Metric
 * //       MetricName: "STRING_VALUE", // required
 * //       AggregationFunction: "STRING_VALUE", // required
 * //       Namespace: "STRING_VALUE",
 * //     },
 * //   ],
 * //   TimestampColumn: { // TimestampColumn
 * //     ColumnName: "STRING_VALUE",
 * //     ColumnFormat: "STRING_VALUE",
 * //   },
 * //   DimensionList: [ // DimensionList
 * //     "STRING_VALUE",
 * //   ],
 * //   MetricSetFrequency: "STRING_VALUE",
 * //   Timezone: "STRING_VALUE",
 * //   MetricSource: { // MetricSource
 * //     S3SourceConfig: { // S3SourceConfig
 * //       RoleArn: "STRING_VALUE",
 * //       TemplatedPathList: [ // TemplatedPathList
 * //         "STRING_VALUE",
 * //       ],
 * //       HistoricalDataPathList: [ // HistoricalDataPathList
 * //         "STRING_VALUE",
 * //       ],
 * //       FileFormatDescriptor: { // FileFormatDescriptor
 * //         CsvFormatDescriptor: { // CsvFormatDescriptor
 * //           FileCompression: "STRING_VALUE",
 * //           Charset: "STRING_VALUE",
 * //           ContainsHeader: true || false,
 * //           Delimiter: "STRING_VALUE",
 * //           HeaderList: [ // HeaderList
 * //             "STRING_VALUE",
 * //           ],
 * //           QuoteSymbol: "STRING_VALUE",
 * //         },
 * //         JsonFormatDescriptor: { // JsonFormatDescriptor
 * //           FileCompression: "STRING_VALUE",
 * //           Charset: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     AppFlowConfig: { // AppFlowConfig
 * //       RoleArn: "STRING_VALUE",
 * //       FlowName: "STRING_VALUE",
 * //     },
 * //     CloudWatchConfig: { // CloudWatchConfig
 * //       RoleArn: "STRING_VALUE",
 * //       BackTestConfiguration: { // BackTestConfiguration
 * //         RunBackTestMode: true || false, // required
 * //       },
 * //     },
 * //     RDSSourceConfig: { // RDSSourceConfig
 * //       DBInstanceIdentifier: "STRING_VALUE",
 * //       DatabaseHost: "STRING_VALUE",
 * //       DatabasePort: Number("int"),
 * //       SecretManagerArn: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       VpcConfiguration: { // VpcConfiguration
 * //         SubnetIdList: [ // SubnetIdList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIdList: [ // SecurityGroupIdList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     RedshiftSourceConfig: { // RedshiftSourceConfig
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       DatabaseHost: "STRING_VALUE",
 * //       DatabasePort: Number("int"),
 * //       SecretManagerArn: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       VpcConfiguration: {
 * //         SubnetIdList: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIdList: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     AthenaSourceConfig: { // AthenaSourceConfig
 * //       RoleArn: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       DataCatalog: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       WorkGroupName: "STRING_VALUE",
 * //       S3ResultsPath: "STRING_VALUE",
 * //       BackTestConfiguration: {
 * //         RunBackTestMode: true || false, // required
 * //       },
 * //     },
 * //   },
 * //   DimensionFilterList: [ // MetricSetDimensionFilterList
 * //     { // MetricSetDimensionFilter
 * //       Name: "STRING_VALUE",
 * //       FilterList: [ // FilterList
 * //         { // Filter
 * //           DimensionValue: "STRING_VALUE",
 * //           FilterOperation: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMetricSetCommandInput - {@link DescribeMetricSetCommandInput}
 * @returns {@link DescribeMetricSetCommandOutput}
 * @see {@link DescribeMetricSetCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricSetCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 */
export class DescribeMetricSetCommand extends $Command<
  DescribeMetricSetCommandInput,
  DescribeMetricSetCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeMetricSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMetricSetCommandInput, DescribeMetricSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMetricSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "DescribeMetricSetCommand";
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
  private serialize(input: DescribeMetricSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMetricSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMetricSetCommandOutput> {
    return de_DescribeMetricSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
