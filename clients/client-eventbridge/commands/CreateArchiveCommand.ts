import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { CreateArchiveRequest, CreateArchiveResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateArchiveCommand,
  serializeAws_json1_1CreateArchiveCommand,
} from "../protocols/Aws_json1_1";
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

export type CreateArchiveCommandInput = CreateArchiveRequest;
export type CreateArchiveCommandOutput = CreateArchiveResponse & __MetadataBearer;

/**
 * <p>Creates an archive of events with the specified settings. When you create an archive,
 *             incoming events might not immediately start being sent to the archive. Allow a short
 *             period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.</p>
 */
export class CreateArchiveCommand extends $Command<
  CreateArchiveCommandInput,
  CreateArchiveCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateArchiveCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateArchiveCommandInput, CreateArchiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "CreateArchiveCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateArchiveRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateArchiveResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateArchiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateArchiveCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateArchiveCommandOutput> {
    return deserializeAws_json1_1CreateArchiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
