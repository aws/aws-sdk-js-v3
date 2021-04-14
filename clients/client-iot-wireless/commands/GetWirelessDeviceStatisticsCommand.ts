import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessDeviceStatisticsRequest, GetWirelessDeviceStatisticsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetWirelessDeviceStatisticsCommand,
  serializeAws_restJson1GetWirelessDeviceStatisticsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetWirelessDeviceStatisticsCommandInput = GetWirelessDeviceStatisticsRequest;
export type GetWirelessDeviceStatisticsCommandOutput = GetWirelessDeviceStatisticsResponse & __MetadataBearer;

/**
 * <p>Gets operating information about a wireless device.</p>
 */
export class GetWirelessDeviceStatisticsCommand extends $Command<
  GetWirelessDeviceStatisticsCommandInput,
  GetWirelessDeviceStatisticsCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetWirelessDeviceStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWirelessDeviceStatisticsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetWirelessDeviceStatisticsResponse.filterSensitiveLog,
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
