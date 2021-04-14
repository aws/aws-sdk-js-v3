import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { DeleteRecordingConfigurationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRecordingConfigurationCommand,
  serializeAws_restJson1DeleteRecordingConfigurationCommand,
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

export type DeleteRecordingConfigurationCommandInput = DeleteRecordingConfigurationRequest;
export type DeleteRecordingConfigurationCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the recording configuration for the specified ARN.</p>
 *          <p>If you try to delete a recording configuration that is associated with a channel, you will
 *       get an error (409 ConflictException). To avoid this, for all channels that reference the
 *       recording configuration, first use <a>UpdateChannel</a> to set the
 *         <code>recordingConfigurationArn</code> field to an empty string, then use
 *       DeleteRecordingConfiguration.</p>
 */
export class DeleteRecordingConfigurationCommand extends $Command<
  DeleteRecordingConfigurationCommandInput,
  DeleteRecordingConfigurationCommandOutput,
  IvsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRecordingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRecordingConfigurationCommandInput, DeleteRecordingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "DeleteRecordingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRecordingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRecordingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRecordingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteRecordingConfigurationCommandOutput> {
    return deserializeAws_restJson1DeleteRecordingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
