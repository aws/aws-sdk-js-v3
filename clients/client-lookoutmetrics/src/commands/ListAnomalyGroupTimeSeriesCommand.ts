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
import { ListAnomalyGroupTimeSeriesRequest, ListAnomalyGroupTimeSeriesResponse } from "../models/models_0";
import { de_ListAnomalyGroupTimeSeriesCommand, se_ListAnomalyGroupTimeSeriesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAnomalyGroupTimeSeriesCommand}.
 */
export interface ListAnomalyGroupTimeSeriesCommandInput extends ListAnomalyGroupTimeSeriesRequest {}
/**
 * @public
 *
 * The output of {@link ListAnomalyGroupTimeSeriesCommand}.
 */
export interface ListAnomalyGroupTimeSeriesCommandOutput extends ListAnomalyGroupTimeSeriesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of anomalous metrics for a measure in an anomaly group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyGroupTimeSeriesCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAnomalyGroupTimeSeriesCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // ListAnomalyGroupTimeSeriesRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   AnomalyGroupId: "STRING_VALUE", // required
 *   MetricName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAnomalyGroupTimeSeriesCommand(input);
 * const response = await client.send(command);
 * // { // ListAnomalyGroupTimeSeriesResponse
 * //   AnomalyGroupId: "STRING_VALUE",
 * //   MetricName: "STRING_VALUE",
 * //   TimestampList: [ // TimestampList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TimeSeriesList: [ // TimeSeriesList
 * //     { // TimeSeries
 * //       TimeSeriesId: "STRING_VALUE", // required
 * //       DimensionList: [ // DimensionNameValueList // required
 * //         { // DimensionNameValue
 * //           DimensionName: "STRING_VALUE", // required
 * //           DimensionValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       MetricValueList: [ // MetricValueList // required
 * //         Number("double"),
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAnomalyGroupTimeSeriesCommandInput - {@link ListAnomalyGroupTimeSeriesCommandInput}
 * @returns {@link ListAnomalyGroupTimeSeriesCommandOutput}
 * @see {@link ListAnomalyGroupTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyGroupTimeSeriesCommandOutput} for command's `response` shape.
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
export class ListAnomalyGroupTimeSeriesCommand extends $Command<
  ListAnomalyGroupTimeSeriesCommandInput,
  ListAnomalyGroupTimeSeriesCommandOutput,
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
  constructor(readonly input: ListAnomalyGroupTimeSeriesCommandInput) {
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
  ): Handler<ListAnomalyGroupTimeSeriesCommandInput, ListAnomalyGroupTimeSeriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAnomalyGroupTimeSeriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "ListAnomalyGroupTimeSeriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LookoutMetrics",
        operation: "ListAnomalyGroupTimeSeries",
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
  private serialize(input: ListAnomalyGroupTimeSeriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAnomalyGroupTimeSeriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAnomalyGroupTimeSeriesCommandOutput> {
    return de_ListAnomalyGroupTimeSeriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
