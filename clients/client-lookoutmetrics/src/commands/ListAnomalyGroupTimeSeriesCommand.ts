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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import {
  ListAnomalyGroupTimeSeriesRequest,
  ListAnomalyGroupTimeSeriesRequestFilterSensitiveLog,
  ListAnomalyGroupTimeSeriesResponse,
  ListAnomalyGroupTimeSeriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommand,
  serializeAws_restJson1ListAnomalyGroupTimeSeriesCommand,
} from "../protocols/Aws_restJson1";

export interface ListAnomalyGroupTimeSeriesCommandInput extends ListAnomalyGroupTimeSeriesRequest {}
export interface ListAnomalyGroupTimeSeriesCommandOutput extends ListAnomalyGroupTimeSeriesResponse, __MetadataBearer {}

/**
 * <p>Gets a list of anomalous metrics for a measure in an anomaly group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyGroupTimeSeriesCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAnomalyGroupTimeSeriesCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new ListAnomalyGroupTimeSeriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnomalyGroupTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyGroupTimeSeriesCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
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
      inputFilterSensitiveLog: ListAnomalyGroupTimeSeriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAnomalyGroupTimeSeriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAnomalyGroupTimeSeriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAnomalyGroupTimeSeriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAnomalyGroupTimeSeriesCommandOutput> {
    return deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
