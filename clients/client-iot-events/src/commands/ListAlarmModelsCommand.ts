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

import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import {
  ListAlarmModelsRequest,
  ListAlarmModelsRequestFilterSensitiveLog,
  ListAlarmModelsResponse,
  ListAlarmModelsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAlarmModelsCommand,
  serializeAws_restJson1ListAlarmModelsCommand,
} from "../protocols/Aws_restJson1";

export interface ListAlarmModelsCommandInput extends ListAlarmModelsRequest {}
export interface ListAlarmModelsCommandOutput extends ListAlarmModelsResponse, __MetadataBearer {}

/**
 * <p>Lists the alarm models that you created. The operation returns only the metadata
 *       associated with each alarm model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListAlarmModelsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListAlarmModelsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListAlarmModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAlarmModelsCommandInput} for command's `input` shape.
 * @see {@link ListAlarmModelsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 */
export class ListAlarmModelsCommand extends $Command<
  ListAlarmModelsCommandInput,
  ListAlarmModelsCommandOutput,
  IoTEventsClientResolvedConfig
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

  constructor(readonly input: ListAlarmModelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAlarmModelsCommandInput, ListAlarmModelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAlarmModelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "ListAlarmModelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAlarmModelsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAlarmModelsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAlarmModelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAlarmModelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAlarmModelsCommandOutput> {
    return deserializeAws_restJson1ListAlarmModelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
