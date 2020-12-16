import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { TransferInputDeviceRequest, TransferInputDeviceResponse } from "../models/models_1";
import {
  deserializeAws_restJson1TransferInputDeviceCommand,
  serializeAws_restJson1TransferInputDeviceCommand,
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

export type TransferInputDeviceCommandInput = TransferInputDeviceRequest;
export type TransferInputDeviceCommandOutput = TransferInputDeviceResponse & __MetadataBearer;

/**
 * Start an input device transfer to another AWS account. After you make the request, the other account must accept or reject the transfer.
 */
export class TransferInputDeviceCommand extends $Command<
  TransferInputDeviceCommandInput,
  TransferInputDeviceCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TransferInputDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TransferInputDeviceCommandInput, TransferInputDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "TransferInputDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TransferInputDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TransferInputDeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TransferInputDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TransferInputDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TransferInputDeviceCommandOutput> {
    return deserializeAws_restJson1TransferInputDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
