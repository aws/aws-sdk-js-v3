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
import {
  DescribeAlarmsForMetricInput,
  DescribeAlarmsForMetricInputFilterSensitiveLog,
  DescribeAlarmsForMetricOutput,
  DescribeAlarmsForMetricOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeAlarmsForMetricCommand,
  serializeAws_queryDescribeAlarmsForMetricCommand,
} from "../protocols/Aws_query";

export interface DescribeAlarmsForMetricCommandInput extends DescribeAlarmsForMetricInput {}
export interface DescribeAlarmsForMetricCommandOutput extends DescribeAlarmsForMetricOutput, __MetadataBearer {}

/**
 * <p>Retrieves the alarms for the specified metric. To
 * 			filter the results, specify a statistic, period, or unit.</p>
 *          <p>This operation retrieves only standard alarms that are based on
 * 		the specified metric. It does not return alarms based on math expressions that
 * 		use the specified metric, or composite alarms that use the specified metric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmsForMetricCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAlarmsForMetricCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DescribeAlarmsForMetricCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlarmsForMetricCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmsForMetricCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class DescribeAlarmsForMetricCommand extends $Command<
  DescribeAlarmsForMetricCommandInput,
  DescribeAlarmsForMetricCommandOutput,
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

  constructor(readonly input: DescribeAlarmsForMetricCommandInput) {
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
  ): Handler<DescribeAlarmsForMetricCommandInput, DescribeAlarmsForMetricCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAlarmsForMetricCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DescribeAlarmsForMetricCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAlarmsForMetricInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAlarmsForMetricOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAlarmsForMetricCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAlarmsForMetricCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAlarmsForMetricCommandOutput> {
    return deserializeAws_queryDescribeAlarmsForMetricCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
