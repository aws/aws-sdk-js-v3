import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { ListDetectorModelsRequest, ListDetectorModelsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListDetectorModelsCommand,
  serializeAws_restJson1ListDetectorModelsCommand,
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

export type ListDetectorModelsCommandInput = ListDetectorModelsRequest;
export type ListDetectorModelsCommandOutput = ListDetectorModelsResponse & __MetadataBearer;

/**
 * <p>Lists the detector models you have created. Only the metadata associated with each
 *       detector model is returned.</p>
 */
export class ListDetectorModelsCommand extends $Command<
  ListDetectorModelsCommandInput,
  ListDetectorModelsCommandOutput,
  IoTEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDetectorModelsCommandInput) {
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
  ): Handler<ListDetectorModelsCommandInput, ListDetectorModelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "ListDetectorModelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDetectorModelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDetectorModelsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDetectorModelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDetectorModelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDetectorModelsCommandOutput> {
    return deserializeAws_restJson1ListDetectorModelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
