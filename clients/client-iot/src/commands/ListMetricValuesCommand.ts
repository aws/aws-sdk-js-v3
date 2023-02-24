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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  ListMetricValuesRequest,
  ListMetricValuesRequestFilterSensitiveLog,
  ListMetricValuesResponse,
  ListMetricValuesResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListMetricValuesCommand,
  serializeAws_restJson1ListMetricValuesCommand,
} from "../protocols/Aws_restJson1";

export interface ListMetricValuesCommandInput extends ListMetricValuesRequest {}
export interface ListMetricValuesCommandOutput extends ListMetricValuesResponse, __MetadataBearer {}

/**
 * <p>Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric)
 *       by the given thing during the specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListMetricValuesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListMetricValuesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListMetricValuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMetricValuesCommandInput} for command's `input` shape.
 * @see {@link ListMetricValuesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class ListMetricValuesCommand extends $Command<
  ListMetricValuesCommandInput,
  ListMetricValuesCommandOutput,
  IoTClientResolvedConfig
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

  constructor(readonly input: ListMetricValuesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMetricValuesCommandInput, ListMetricValuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMetricValuesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListMetricValuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMetricValuesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMetricValuesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMetricValuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListMetricValuesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMetricValuesCommandOutput> {
    return deserializeAws_restJson1ListMetricValuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
