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
  GetNetworkAnalyzerConfigurationRequest,
  GetNetworkAnalyzerConfigurationRequestFilterSensitiveLog,
  GetNetworkAnalyzerConfigurationResponse,
  GetNetworkAnalyzerConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetNetworkAnalyzerConfigurationCommand,
  serializeAws_restJson1GetNetworkAnalyzerConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface GetNetworkAnalyzerConfigurationCommandInput extends GetNetworkAnalyzerConfigurationRequest {}
export interface GetNetworkAnalyzerConfigurationCommandOutput
  extends GetNetworkAnalyzerConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Get network analyzer configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetNetworkAnalyzerConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetNetworkAnalyzerConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetNetworkAnalyzerConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNetworkAnalyzerConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetNetworkAnalyzerConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class GetNetworkAnalyzerConfigurationCommand extends $Command<
  GetNetworkAnalyzerConfigurationCommandInput,
  GetNetworkAnalyzerConfigurationCommandOutput,
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

  constructor(readonly input: GetNetworkAnalyzerConfigurationCommandInput) {
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
  ): Handler<GetNetworkAnalyzerConfigurationCommandInput, GetNetworkAnalyzerConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetNetworkAnalyzerConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetNetworkAnalyzerConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetNetworkAnalyzerConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetNetworkAnalyzerConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetNetworkAnalyzerConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetNetworkAnalyzerConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetNetworkAnalyzerConfigurationCommandOutput> {
    return deserializeAws_restJson1GetNetworkAnalyzerConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
