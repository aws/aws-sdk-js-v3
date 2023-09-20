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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeMetricFiltersRequest, DescribeMetricFiltersResponse } from "../models/models_0";
import { de_DescribeMetricFiltersCommand, se_DescribeMetricFiltersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetricFiltersCommand}.
 */
export interface DescribeMetricFiltersCommandInput extends DescribeMetricFiltersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMetricFiltersCommand}.
 */
export interface DescribeMetricFiltersCommandOutput extends DescribeMetricFiltersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the specified metric filters. You can list all of the metric filters or filter
 *       the results by log name, prefix, metric name, or metric namespace. The results are
 *       ASCII-sorted by filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeMetricFiltersCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeMetricFiltersCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeMetricFiltersRequest
 *   logGroupName: "STRING_VALUE",
 *   filterNamePrefix: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   metricName: "STRING_VALUE",
 *   metricNamespace: "STRING_VALUE",
 * };
 * const command = new DescribeMetricFiltersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetricFiltersResponse
 * //   metricFilters: [ // MetricFilters
 * //     { // MetricFilter
 * //       filterName: "STRING_VALUE",
 * //       filterPattern: "STRING_VALUE",
 * //       metricTransformations: [ // MetricTransformations
 * //         { // MetricTransformation
 * //           metricName: "STRING_VALUE", // required
 * //           metricNamespace: "STRING_VALUE", // required
 * //           metricValue: "STRING_VALUE", // required
 * //           defaultValue: Number("double"),
 * //           dimensions: { // Dimensions
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //         },
 * //       ],
 * //       creationTime: Number("long"),
 * //       logGroupName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMetricFiltersCommandInput - {@link DescribeMetricFiltersCommandInput}
 * @returns {@link DescribeMetricFiltersCommandOutput}
 * @see {@link DescribeMetricFiltersCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricFiltersCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class DescribeMetricFiltersCommand extends $Command<
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput,
  CloudWatchLogsClientResolvedConfig
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
  constructor(readonly input: DescribeMetricFiltersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMetricFiltersCommandInput, DescribeMetricFiltersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMetricFiltersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DescribeMetricFiltersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "DescribeMetricFilters",
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
  private serialize(input: DescribeMetricFiltersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMetricFiltersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMetricFiltersCommandOutput> {
    return de_DescribeMetricFiltersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
