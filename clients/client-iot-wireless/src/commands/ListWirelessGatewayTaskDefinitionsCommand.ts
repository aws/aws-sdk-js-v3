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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  ListWirelessGatewayTaskDefinitionsRequest,
  ListWirelessGatewayTaskDefinitionsRequestFilterSensitiveLog,
  ListWirelessGatewayTaskDefinitionsResponse,
  ListWirelessGatewayTaskDefinitionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand,
  serializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListWirelessGatewayTaskDefinitionsCommandInput extends ListWirelessGatewayTaskDefinitionsRequest {}
export interface ListWirelessGatewayTaskDefinitionsCommandOutput
  extends ListWirelessGatewayTaskDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>List the wireless gateway tasks definitions registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListWirelessGatewayTaskDefinitionsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListWirelessGatewayTaskDefinitionsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ListWirelessGatewayTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWirelessGatewayTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListWirelessGatewayTaskDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class ListWirelessGatewayTaskDefinitionsCommand extends $Command<
  ListWirelessGatewayTaskDefinitionsCommandInput,
  ListWirelessGatewayTaskDefinitionsCommandOutput,
  IoTWirelessClientResolvedConfig
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

  constructor(readonly input: ListWirelessGatewayTaskDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWirelessGatewayTaskDefinitionsCommandInput, ListWirelessGatewayTaskDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWirelessGatewayTaskDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ListWirelessGatewayTaskDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWirelessGatewayTaskDefinitionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListWirelessGatewayTaskDefinitionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListWirelessGatewayTaskDefinitionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput> {
    return deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
