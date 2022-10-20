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

import {
  ListRumMetricsDestinationsRequest,
  ListRumMetricsDestinationsRequestFilterSensitiveLog,
  ListRumMetricsDestinationsResponse,
  ListRumMetricsDestinationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRumMetricsDestinationsCommand,
  serializeAws_restJson1ListRumMetricsDestinationsCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

export interface ListRumMetricsDestinationsCommandInput extends ListRumMetricsDestinationsRequest {}
export interface ListRumMetricsDestinationsCommandOutput extends ListRumMetricsDestinationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of destinations that you have created to receive RUM extended metrics,
 *          for the specified app monitor.</p>
 *          <p>For more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_AddRumMetrcs.html">AddRumMetrics</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, ListRumMetricsDestinationsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, ListRumMetricsDestinationsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const command = new ListRumMetricsDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRumMetricsDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListRumMetricsDestinationsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 */
export class ListRumMetricsDestinationsCommand extends $Command<
  ListRumMetricsDestinationsCommandInput,
  ListRumMetricsDestinationsCommandOutput,
  RUMClientResolvedConfig
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

  constructor(readonly input: ListRumMetricsDestinationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRumMetricsDestinationsCommandInput, ListRumMetricsDestinationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRumMetricsDestinationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "ListRumMetricsDestinationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRumMetricsDestinationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRumMetricsDestinationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRumMetricsDestinationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRumMetricsDestinationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRumMetricsDestinationsCommandOutput> {
    return deserializeAws_restJson1ListRumMetricsDestinationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
