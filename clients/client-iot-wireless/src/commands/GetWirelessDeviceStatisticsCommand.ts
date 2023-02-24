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
  GetWirelessDeviceStatisticsRequest,
  GetWirelessDeviceStatisticsRequestFilterSensitiveLog,
  GetWirelessDeviceStatisticsResponse,
  GetWirelessDeviceStatisticsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetWirelessDeviceStatisticsCommand,
  serializeAws_restJson1GetWirelessDeviceStatisticsCommand,
} from "../protocols/Aws_restJson1";

export interface GetWirelessDeviceStatisticsCommandInput extends GetWirelessDeviceStatisticsRequest {}
export interface GetWirelessDeviceStatisticsCommandOutput
  extends GetWirelessDeviceStatisticsResponse,
    __MetadataBearer {}

/**
 * <p>Gets operating information about a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessDeviceStatisticsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessDeviceStatisticsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessDeviceStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessDeviceStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetWirelessDeviceStatisticsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class GetWirelessDeviceStatisticsCommand extends $Command<
  GetWirelessDeviceStatisticsCommandInput,
  GetWirelessDeviceStatisticsCommandOutput,
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

  constructor(readonly input: GetWirelessDeviceStatisticsCommandInput) {
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
  ): Handler<GetWirelessDeviceStatisticsCommandInput, GetWirelessDeviceStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWirelessDeviceStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetWirelessDeviceStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWirelessDeviceStatisticsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetWirelessDeviceStatisticsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWirelessDeviceStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetWirelessDeviceStatisticsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetWirelessDeviceStatisticsCommandOutput> {
    return deserializeAws_restJson1GetWirelessDeviceStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
