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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  ListMonitorEvaluationsRequest,
  ListMonitorEvaluationsRequestFilterSensitiveLog,
  ListMonitorEvaluationsResponse,
  ListMonitorEvaluationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListMonitorEvaluationsCommand,
  serializeAws_json1_1ListMonitorEvaluationsCommand,
} from "../protocols/Aws_json1_1";

export interface ListMonitorEvaluationsCommandInput extends ListMonitorEvaluationsRequest {}
export interface ListMonitorEvaluationsCommandOutput extends ListMonitorEvaluationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the monitoring evaluation results and predictor events collected by
 *          the monitor resource during different windows of time.</p>
 *          <p>For information about monitoring see <a>predictor-monitoring</a>. For
 *          more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListMonitorEvaluationsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListMonitorEvaluationsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListMonitorEvaluationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMonitorEvaluationsCommandInput} for command's `input` shape.
 * @see {@link ListMonitorEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class ListMonitorEvaluationsCommand extends $Command<
  ListMonitorEvaluationsCommandInput,
  ListMonitorEvaluationsCommandOutput,
  ForecastClientResolvedConfig
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

  constructor(readonly input: ListMonitorEvaluationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMonitorEvaluationsCommandInput, ListMonitorEvaluationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMonitorEvaluationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListMonitorEvaluationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMonitorEvaluationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMonitorEvaluationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMonitorEvaluationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMonitorEvaluationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMonitorEvaluationsCommandOutput> {
    return deserializeAws_json1_1ListMonitorEvaluationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
