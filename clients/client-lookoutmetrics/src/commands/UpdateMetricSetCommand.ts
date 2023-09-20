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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { UpdateMetricSetRequest, UpdateMetricSetResponse } from "../models/models_0";
import { de_UpdateMetricSetCommand, se_UpdateMetricSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMetricSetCommand}.
 */
export interface UpdateMetricSetCommandInput extends UpdateMetricSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMetricSetCommand}.
 */
export interface UpdateMetricSetCommandOutput extends UpdateMetricSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, UpdateMetricSetCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, UpdateMetricSetCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // UpdateMetricSetRequest
 *   MetricSetArn: "STRING_VALUE", // required
 *   MetricSetDescription: "STRING_VALUE",
 *   MetricList: [ // MetricList
 *     { // Metric
 *       MetricName: "STRING_VALUE", // required
 *       AggregationFunction: "AVG" || "SUM", // required
 *       Namespace: "STRING_VALUE",
 *     },
 *   ],
 *   Offset: Number("int"),
 *   TimestampColumn: { // TimestampColumn
 *     ColumnName: "STRING_VALUE",
 *     ColumnFormat: "STRING_VALUE",
 *   },
 *   DimensionList: [ // DimensionList
 *     "STRING_VALUE",
 *   ],
 *   MetricSetFrequency: "P1D" || "PT1H" || "PT10M" || "PT5M",
 *   MetricSource: { // MetricSource
 *     S3SourceConfig: { // S3SourceConfig
 *       RoleArn: "STRING_VALUE",
 *       TemplatedPathList: [ // TemplatedPathList
 *         "STRING_VALUE",
 *       ],
 *       HistoricalDataPathList: [ // HistoricalDataPathList
 *         "STRING_VALUE",
 *       ],
 *       FileFormatDescriptor: { // FileFormatDescriptor
 *         CsvFormatDescriptor: { // CsvFormatDescriptor
 *           FileCompression: "NONE" || "GZIP",
 *           Charset: "STRING_VALUE",
 *           ContainsHeader: true || false,
 *           Delimiter: "STRING_VALUE",
 *           HeaderList: [ // HeaderList
 *             "STRING_VALUE",
 *           ],
 *           QuoteSymbol: "STRING_VALUE",
 *         },
 *         JsonFormatDescriptor: { // JsonFormatDescriptor
 *           FileCompression: "NONE" || "GZIP",
 *           Charset: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     AppFlowConfig: { // AppFlowConfig
 *       RoleArn: "STRING_VALUE",
 *       FlowName: "STRING_VALUE",
 *     },
 *     CloudWatchConfig: { // CloudWatchConfig
 *       RoleArn: "STRING_VALUE",
 *       BackTestConfiguration: { // BackTestConfiguration
 *         RunBackTestMode: true || false, // required
 *       },
 *     },
 *     RDSSourceConfig: { // RDSSourceConfig
 *       DBInstanceIdentifier: "STRING_VALUE",
 *       DatabaseHost: "STRING_VALUE",
 *       DatabasePort: Number("int"),
 *       SecretManagerArn: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       TableName: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE",
 *       VpcConfiguration: { // VpcConfiguration
 *         SubnetIdList: [ // SubnetIdList // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIdList: [ // SecurityGroupIdList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     RedshiftSourceConfig: { // RedshiftSourceConfig
 *       ClusterIdentifier: "STRING_VALUE",
 *       DatabaseHost: "STRING_VALUE",
 *       DatabasePort: Number("int"),
 *       SecretManagerArn: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       TableName: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE",
 *       VpcConfiguration: {
 *         SubnetIdList: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIdList: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     AthenaSourceConfig: { // AthenaSourceConfig
 *       RoleArn: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       DataCatalog: "STRING_VALUE",
 *       TableName: "STRING_VALUE",
 *       WorkGroupName: "STRING_VALUE",
 *       S3ResultsPath: "STRING_VALUE",
 *       BackTestConfiguration: {
 *         RunBackTestMode: true || false, // required
 *       },
 *     },
 *   },
 *   DimensionFilterList: [ // MetricSetDimensionFilterList
 *     { // MetricSetDimensionFilter
 *       Name: "STRING_VALUE",
 *       FilterList: [ // FilterList
 *         { // Filter
 *           DimensionValue: "STRING_VALUE",
 *           FilterOperation: "EQUALS",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateMetricSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMetricSetResponse
 * //   MetricSetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMetricSetCommandInput - {@link UpdateMetricSetCommandInput}
 * @returns {@link UpdateMetricSetCommandOutput}
 * @see {@link UpdateMetricSetCommandInput} for command's `input` shape.
 * @see {@link UpdateMetricSetCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded the service's quotas. Check the service quotas and try again.</p>
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
export class UpdateMetricSetCommand extends $Command<
  UpdateMetricSetCommandInput,
  UpdateMetricSetCommandOutput,
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
  constructor(readonly input: UpdateMetricSetCommandInput) {
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
  ): Handler<UpdateMetricSetCommandInput, UpdateMetricSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMetricSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "UpdateMetricSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LookoutMetrics",
        operation: "UpdateMetricSet",
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
  private serialize(input: UpdateMetricSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateMetricSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMetricSetCommandOutput> {
    return de_UpdateMetricSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
