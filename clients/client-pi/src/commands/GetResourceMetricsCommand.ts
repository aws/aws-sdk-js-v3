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

import { GetResourceMetricsRequest, GetResourceMetricsResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { de_GetResourceMetricsCommand, se_GetResourceMetricsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResourceMetricsCommand}.
 */
export interface GetResourceMetricsCommandInput extends GetResourceMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceMetricsCommand}.
 */
export interface GetResourceMetricsCommandOutput extends GetResourceMetricsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide
 *       specific dimension groups and dimensions, and provide aggregation and filtering criteria for
 *       each group.</p>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 *                only the first 500 bytes are returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetResourceMetricsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, GetResourceMetricsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const input = { // GetResourceMetricsRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   MetricQueries: [ // MetricQueryList // required
 *     { // MetricQuery
 *       Metric: "STRING_VALUE", // required
 *       GroupBy: { // DimensionGroup
 *         Group: "STRING_VALUE", // required
 *         Dimensions: [ // RequestStringList
 *           "STRING_VALUE",
 *         ],
 *         Limit: Number("int"),
 *       },
 *       Filter: { // MetricQueryFilterMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   PeriodInSeconds: Number("int"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   PeriodAlignment: "END_TIME" || "START_TIME",
 * };
 * const command = new GetResourceMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceMetricsResponse
 * //   AlignedStartTime: new Date("TIMESTAMP"),
 * //   AlignedEndTime: new Date("TIMESTAMP"),
 * //   Identifier: "STRING_VALUE",
 * //   MetricList: [ // MetricKeyDataPointsList
 * //     { // MetricKeyDataPoints
 * //       Key: { // ResponseResourceMetricKey
 * //         Metric: "STRING_VALUE", // required
 * //         Dimensions: { // DimensionMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       DataPoints: [ // DataPointsList
 * //         { // DataPoint
 * //           Timestamp: new Date("TIMESTAMP"), // required
 * //           Value: Number("double"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceMetricsCommandInput - {@link GetResourceMetricsCommandInput}
 * @returns {@link GetResourceMetricsCommandOutput}
 * @see {@link GetResourceMetricsCommandInput} for command's `input` shape.
 * @see {@link GetResourceMetricsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 */
export class GetResourceMetricsCommand extends $Command<
  GetResourceMetricsCommandInput,
  GetResourceMetricsCommandOutput,
  PIClientResolvedConfig
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
  constructor(readonly input: GetResourceMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "GetResourceMetricsCommand";
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
  private serialize(input: GetResourceMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResourceMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceMetricsCommandOutput> {
    return de_GetResourceMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
