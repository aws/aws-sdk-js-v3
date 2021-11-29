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
  UpdateNetworkAnalyzerConfigurationRequest,
  UpdateNetworkAnalyzerConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommand,
  serializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateNetworkAnalyzerConfigurationCommandInput extends UpdateNetworkAnalyzerConfigurationRequest {}
export interface UpdateNetworkAnalyzerConfigurationCommandOutput
  extends UpdateNetworkAnalyzerConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Update NetworkAnalyzer configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateNetworkAnalyzerConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateNetworkAnalyzerConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new UpdateNetworkAnalyzerConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNetworkAnalyzerConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkAnalyzerConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class UpdateNetworkAnalyzerConfigurationCommand extends $Command<
  UpdateNetworkAnalyzerConfigurationCommandInput,
  UpdateNetworkAnalyzerConfigurationCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateNetworkAnalyzerConfigurationCommandInput) {
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
  ): Handler<UpdateNetworkAnalyzerConfigurationCommandInput, UpdateNetworkAnalyzerConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "UpdateNetworkAnalyzerConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNetworkAnalyzerConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateNetworkAnalyzerConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateNetworkAnalyzerConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateNetworkAnalyzerConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
