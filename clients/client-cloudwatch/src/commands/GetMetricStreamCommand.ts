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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetMetricStreamInput, GetMetricStreamOutput } from "../models/models_0";
import { de_GetMetricStreamCommand, se_GetMetricStreamCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link GetMetricStreamCommand}.
 */
export interface GetMetricStreamCommandInput extends GetMetricStreamInput {}
/**
 * @public
 *
 * The output of {@link GetMetricStreamCommand}.
 */
export interface GetMetricStreamCommandOutput extends GetMetricStreamOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the metric stream that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricStreamCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricStreamCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // GetMetricStreamInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetMetricStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricStreamOutput
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   IncludeFilters: [ // MetricStreamFilters
 * //     { // MetricStreamFilter
 * //       Namespace: "STRING_VALUE",
 * //       MetricNames: [ // MetricStreamFilterMetricNames
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   ExcludeFilters: [
 * //     {
 * //       Namespace: "STRING_VALUE",
 * //       MetricNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   FirehoseArn: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   LastUpdateDate: new Date("TIMESTAMP"),
 * //   OutputFormat: "json" || "opentelemetry0.7",
 * //   StatisticsConfigurations: [ // MetricStreamStatisticsConfigurations
 * //     { // MetricStreamStatisticsConfiguration
 * //       IncludeMetrics: [ // MetricStreamStatisticsIncludeMetrics // required
 * //         { // MetricStreamStatisticsMetric
 * //           Namespace: "STRING_VALUE", // required
 * //           MetricName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       AdditionalStatistics: [ // MetricStreamStatisticsAdditionalStatistics // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   IncludeLinkedAccountsMetrics: true || false,
 * // };
 *
 * ```
 *
 * @param GetMetricStreamCommandInput - {@link GetMetricStreamCommandInput}
 * @returns {@link GetMetricStreamCommandOutput}
 * @see {@link GetMetricStreamCommandInput} for command's `input` shape.
 * @see {@link GetMetricStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Request processing has failed due to some unknown error, exception, or failure.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Parameters were used together that cannot be used together.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 */
export class GetMetricStreamCommand extends $Command<
  GetMetricStreamCommandInput,
  GetMetricStreamCommandOutput,
  CloudWatchClientResolvedConfig
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
  constructor(readonly input: GetMetricStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMetricStreamCommandInput, GetMetricStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMetricStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetMetricStreamCommand";
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
  private serialize(input: GetMetricStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMetricStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetricStreamCommandOutput> {
    return de_GetMetricStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
