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

import { GetTimeSeriesServiceStatisticsRequest, GetTimeSeriesServiceStatisticsResult } from "../models/models_0";
import {
  de_GetTimeSeriesServiceStatisticsCommand,
  se_GetTimeSeriesServiceStatisticsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTimeSeriesServiceStatisticsCommand}.
 */
export interface GetTimeSeriesServiceStatisticsCommandInput extends GetTimeSeriesServiceStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetTimeSeriesServiceStatisticsCommand}.
 */
export interface GetTimeSeriesServiceStatisticsCommandOutput
  extends GetTimeSeriesServiceStatisticsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Get an aggregation of service statistics defined by a specific time
 *             range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTimeSeriesServiceStatisticsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTimeSeriesServiceStatisticsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // GetTimeSeriesServiceStatisticsRequest
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   GroupName: "STRING_VALUE",
 *   GroupARN: "STRING_VALUE",
 *   EntitySelectorExpression: "STRING_VALUE",
 *   Period: Number("int"),
 *   ForecastStatistics: true || false,
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetTimeSeriesServiceStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetTimeSeriesServiceStatisticsResult
 * //   TimeSeriesServiceStatistics: [ // TimeSeriesServiceStatisticsList
 * //     { // TimeSeriesServiceStatistics
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       EdgeSummaryStatistics: { // EdgeStatistics
 * //         OkCount: Number("long"),
 * //         ErrorStatistics: { // ErrorStatistics
 * //           ThrottleCount: Number("long"),
 * //           OtherCount: Number("long"),
 * //           TotalCount: Number("long"),
 * //         },
 * //         FaultStatistics: { // FaultStatistics
 * //           OtherCount: Number("long"),
 * //           TotalCount: Number("long"),
 * //         },
 * //         TotalCount: Number("long"),
 * //         TotalResponseTime: Number("double"),
 * //       },
 * //       ServiceSummaryStatistics: { // ServiceStatistics
 * //         OkCount: Number("long"),
 * //         ErrorStatistics: {
 * //           ThrottleCount: Number("long"),
 * //           OtherCount: Number("long"),
 * //           TotalCount: Number("long"),
 * //         },
 * //         FaultStatistics: {
 * //           OtherCount: Number("long"),
 * //           TotalCount: Number("long"),
 * //         },
 * //         TotalCount: Number("long"),
 * //         TotalResponseTime: Number("double"),
 * //       },
 * //       ServiceForecastStatistics: { // ForecastStatistics
 * //         FaultCountHigh: Number("long"),
 * //         FaultCountLow: Number("long"),
 * //       },
 * //       ResponseTimeHistogram: [ // Histogram
 * //         { // HistogramEntry
 * //           Value: Number("double"),
 * //           Count: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   ContainsOldGroupVersions: true || false,
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTimeSeriesServiceStatisticsCommandInput - {@link GetTimeSeriesServiceStatisticsCommandInput}
 * @returns {@link GetTimeSeriesServiceStatisticsCommandOutput}
 * @see {@link GetTimeSeriesServiceStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetTimeSeriesServiceStatisticsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 */
export class GetTimeSeriesServiceStatisticsCommand extends $Command<
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput,
  XRayClientResolvedConfig
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
  constructor(readonly input: GetTimeSeriesServiceStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTimeSeriesServiceStatisticsCommandInput, GetTimeSeriesServiceStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTimeSeriesServiceStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetTimeSeriesServiceStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSXRay",
        operation: "GetTimeSeriesServiceStatistics",
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
  private serialize(
    input: GetTimeSeriesServiceStatisticsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetTimeSeriesServiceStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTimeSeriesServiceStatisticsCommandOutput> {
    return de_GetTimeSeriesServiceStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
