import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { SubmitAttachmentStateChangesRequest, SubmitAttachmentStateChangesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SubmitAttachmentStateChangesCommand,
  serializeAws_json1_1SubmitAttachmentStateChangesCommand,
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

export type SubmitAttachmentStateChangesCommandInput = SubmitAttachmentStateChangesRequest;
export type SubmitAttachmentStateChangesCommandOutput = SubmitAttachmentStateChangesResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to
 * 			acknowledge that an attachment changed states.</p>
 */
export class SubmitAttachmentStateChangesCommand extends $Command<
  SubmitAttachmentStateChangesCommandInput,
  SubmitAttachmentStateChangesCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SubmitAttachmentStateChangesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubmitAttachmentStateChangesCommandInput, SubmitAttachmentStateChangesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "SubmitAttachmentStateChangesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubmitAttachmentStateChangesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SubmitAttachmentStateChangesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubmitAttachmentStateChangesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SubmitAttachmentStateChangesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SubmitAttachmentStateChangesCommandOutput> {
    return deserializeAws_json1_1SubmitAttachmentStateChangesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
