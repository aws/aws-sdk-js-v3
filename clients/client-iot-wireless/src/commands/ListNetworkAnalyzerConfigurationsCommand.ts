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
  ListNetworkAnalyzerConfigurationsRequest,
  ListNetworkAnalyzerConfigurationsRequestFilterSensitiveLog,
  ListNetworkAnalyzerConfigurationsResponse,
  ListNetworkAnalyzerConfigurationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListNetworkAnalyzerConfigurationsCommand,
  serializeAws_restJson1ListNetworkAnalyzerConfigurationsCommand,
} from "../protocols/Aws_restJson1";

export interface ListNetworkAnalyzerConfigurationsCommandInput extends ListNetworkAnalyzerConfigurationsRequest {}
export interface ListNetworkAnalyzerConfigurationsCommandOutput
  extends ListNetworkAnalyzerConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the network analyzer configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListNetworkAnalyzerConfigurationsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListNetworkAnalyzerConfigurationsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ListNetworkAnalyzerConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNetworkAnalyzerConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkAnalyzerConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class ListNetworkAnalyzerConfigurationsCommand extends $Command<
  ListNetworkAnalyzerConfigurationsCommandInput,
  ListNetworkAnalyzerConfigurationsCommandOutput,
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

  constructor(readonly input: ListNetworkAnalyzerConfigurationsCommandInput) {
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
  ): Handler<ListNetworkAnalyzerConfigurationsCommandInput, ListNetworkAnalyzerConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNetworkAnalyzerConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ListNetworkAnalyzerConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNetworkAnalyzerConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListNetworkAnalyzerConfigurationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListNetworkAnalyzerConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNetworkAnalyzerConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListNetworkAnalyzerConfigurationsCommandOutput> {
    return deserializeAws_restJson1ListNetworkAnalyzerConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
