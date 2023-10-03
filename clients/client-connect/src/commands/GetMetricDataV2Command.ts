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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { GetMetricDataV2Request, GetMetricDataV2Response } from "../models/models_1";
import { de_GetMetricDataV2Command, se_GetMetricDataV2Command } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMetricDataV2Command}.
 */
export interface GetMetricDataV2CommandInput extends GetMetricDataV2Request {}
/**
 * @public
 *
 * The output of {@link GetMetricDataV2Command}.
 */
export interface GetMetricDataV2CommandOutput extends GetMetricDataV2Response, __MetadataBearer {}

/**
 * @public
 * <p>Gets metric data from the specified Amazon Connect instance. </p>
 *          <p>
 *             <code>GetMetricDataV2</code> offers more features than <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricData.html">GetMetricData</a>, the previous
 *    version of this API. It has new metrics, offers filtering at a metric level, and offers the
 *    ability to filter and group data by channels, queues, routing profiles, agents, and agent
 *    hierarchy levels. It can retrieve historical data for the last 3 months, at varying intervals. </p>
 *          <p>For a description of the historical metrics that are supported by
 *     <code>GetMetricDataV2</code> and <code>GetMetricData</code>, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical metrics
 *     definitions</a> in the <i>Amazon Connect Administrator's Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetMetricDataV2Command } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetMetricDataV2Command } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // GetMetricDataV2Request
 *   ResourceArn: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Interval: { // IntervalDetails
 *     TimeZone: "STRING_VALUE",
 *     IntervalPeriod: "FIFTEEN_MIN" || "THIRTY_MIN" || "HOUR" || "DAY" || "WEEK" || "TOTAL",
 *   },
 *   Filters: [ // FiltersV2List // required
 *     { // FilterV2
 *       FilterKey: "STRING_VALUE",
 *       FilterValues: [ // FilterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Groupings: [ // GroupingsV2
 *     "STRING_VALUE",
 *   ],
 *   Metrics: [ // MetricsV2 // required
 *     { // MetricV2
 *       Name: "STRING_VALUE",
 *       Threshold: [ // ThresholdCollections
 *         { // ThresholdV2
 *           Comparison: "STRING_VALUE",
 *           ThresholdValue: Number("double"),
 *         },
 *       ],
 *       MetricFilters: [ // MetricFiltersV2List
 *         { // MetricFilterV2
 *           MetricFilterKey: "STRING_VALUE",
 *           MetricFilterValues: [ // MetricFilterValueList
 *             "STRING_VALUE",
 *           ],
 *           Negate: true || false,
 *         },
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetMetricDataV2Command(input);
 * const response = await client.send(command);
 * // { // GetMetricDataV2Response
 * //   NextToken: "STRING_VALUE",
 * //   MetricResults: [ // MetricResultsV2
 * //     { // MetricResultV2
 * //       Dimensions: { // DimensionsV2Map
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       MetricInterval: { // MetricInterval
 * //         Interval: "FIFTEEN_MIN" || "THIRTY_MIN" || "HOUR" || "DAY" || "WEEK" || "TOTAL",
 * //         StartTime: new Date("TIMESTAMP"),
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       Collections: [ // MetricDataCollectionsV2
 * //         { // MetricDataV2
 * //           Metric: { // MetricV2
 * //             Name: "STRING_VALUE",
 * //             Threshold: [ // ThresholdCollections
 * //               { // ThresholdV2
 * //                 Comparison: "STRING_VALUE",
 * //                 ThresholdValue: Number("double"),
 * //               },
 * //             ],
 * //             MetricFilters: [ // MetricFiltersV2List
 * //               { // MetricFilterV2
 * //                 MetricFilterKey: "STRING_VALUE",
 * //                 MetricFilterValues: [ // MetricFilterValueList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 Negate: true || false,
 * //               },
 * //             ],
 * //           },
 * //           Value: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMetricDataV2CommandInput - {@link GetMetricDataV2CommandInput}
 * @returns {@link GetMetricDataV2CommandOutput}
 * @see {@link GetMetricDataV2CommandInput} for command's `input` shape.
 * @see {@link GetMetricDataV2CommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class GetMetricDataV2Command extends $Command<
  GetMetricDataV2CommandInput,
  GetMetricDataV2CommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: GetMetricDataV2CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMetricDataV2CommandInput, GetMetricDataV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMetricDataV2Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "GetMetricDataV2Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "GetMetricDataV2",
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
  private serialize(input: GetMetricDataV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMetricDataV2Command(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetricDataV2CommandOutput> {
    return de_GetMetricDataV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
