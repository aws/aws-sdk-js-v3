import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListInputDeviceTransfersRequest, ListInputDeviceTransfersResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListInputDeviceTransfersCommand,
  serializeAws_restJson1ListInputDeviceTransfersCommand,
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

export type ListInputDeviceTransfersCommandInput = ListInputDeviceTransfersRequest;
export type ListInputDeviceTransfersCommandOutput = ListInputDeviceTransfersResponse & __MetadataBearer;

/**
 * List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.
 */
export class ListInputDeviceTransfersCommand extends $Command<
  ListInputDeviceTransfersCommandInput,
  ListInputDeviceTransfersCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInputDeviceTransfersCommandInput) {
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
  ): Handler<ListInputDeviceTransfersCommandInput, ListInputDeviceTransfersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "ListInputDeviceTransfersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInputDeviceTransfersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInputDeviceTransfersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInputDeviceTransfersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInputDeviceTransfersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInputDeviceTransfersCommandOutput> {
    return deserializeAws_restJson1ListInputDeviceTransfersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
